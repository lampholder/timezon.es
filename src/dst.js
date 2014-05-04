var DST = {};

DST.getNextDSTEvent = function(startDate, endDate) {
	"use strict";

	/* Function which identifies the next DST clock change (forwards or backwards) between two specified dates. */
	/* By default searches for a year before giving up. */

	if (!moment.isMoment(startDate) || (null != endDate && !moment.isMoment(endDate))) {
		throw new Error("Date arguments must be moment.js Moment objects");
	}

	/* Get start and end dates; if endDate is unspecified default to start date + 1 year. */
	var iterator = moment(startDate).second(0).milliseconds(0);
	var endDate = null == endDate ? moment(iterator).add(1, 'years') : moment(endDate).second(0);

	if (iterator > endDate) {
		throw new Error("Start date can't be after end date");
	}
	if (iterator.tz() != endDate.tz()) {
		throw new Error("Start date and end date must be in the same time zone");
	}

	var initialDSTState = iterator.isDST();
	// June, July, August and December are universally not used as DST switch months.
	// Also, DST only switches on Thursday, Friday, Saturday and Sunday
	// http://en.wikipedia.org/wiki/Daylight_saving_time_by_country

	var foundDSTEvent = ['months', 'days', 'hours'].every(function(increment) {
		while (iterator <= endDate && iterator.isDST() == initialDSTState) {
			iterator.add(1, increment);
		}
		if (iterator.isDST() != initialDSTState) {
			iterator.subtract(1, increment);
			return true;
		}
		else return false;
	});

	var dstEvent = {'before': null,
		 			'after': null, 
		 			'eventType': 'NO_DST', 
		 			'toString': function() {
		 				return 'TYPE:[' + this.eventType 
		 						+ ']; BEFORE:[' + this.before.format() 
		 						+ ']; AFTER:[' + this.after.format() + '];';}};

	if (foundDSTEvent) {
		// Minutes at which we discover we've switched to/from DST are 0, 1, 30, 31, 60
		var minutes = [0, 1, 30, 31, 60].filter(function(minute) { return minute > iterator.minutes(); });
		minutes.every(function(minutesToAdd) {
			if (initialDSTState !== iterator.add('minutes', minutesToAdd - iterator.minutes()).isDST()) {
				dstEvent.before = moment(iterator).add(-1, 'minutes');
				dstEvent.after = iterator;
				dstEvent.eventType = initialDSTState ? 'BACK' : 'FORWARD';

				return false;
			}
			return true;
		});
	}
	return dstEvent;
};

DST.timeExists = function(timeString, timeZone, format) {
	if (undefined === timeZone) {
		return moment(timeString).format(format) === moment.utc(timeString).format(format);
	}
	try {
		var timeZonedTime = DST.createTimeInTimezone(timeString, timeZone, format);
		return true;
	}
	catch (e) {
		return false;
	}
}

DST.timeIsAmbiguous = function(timeString, timeZone, format) {
	if (undefined !== timeZone) {
		var timeZonedTime = DST.createTimeInTimezone(timeString, timeZone, format);
	}
	else {
		var timeZonedTime = moment(timeString);
	}
	//var utcTime = moment.utc(timeString, format); // No timezone info - this is strictly cosmetic
	var startOfDay = moment(timeZonedTime).startOf('day');
	var endOfDay = moment(timeZonedTime).add('days', 1);
	var dstToday = DST.getNextDSTEvent(startOfDay, endOfDay);
	if (dstToday.eventType === 'BACK') {
		var a = timeZonedTime.format('HHmm');
		var b = dstToday.after.format('HHmm');
		var c = dstToday.before.format('HHmm');
		if (timeZonedTime.format('HHmm') >= dstToday.after.format('HHmm')
		    && timeZonedTime.format('HHmm') < dstToday.before.format('HHmm')) {
			return [dstToday.before.format('Z'), dstToday.after.format('Z')];
		}
	}
	return false;
}

DST.createTimeInTimezone = function(timeString, timeZone, format) {
	if (undefined === timeZone) {
		return moment(timeString, format);
	}
	// Awaiting the next release of moment.js:
    // https://github.com/moment/moment-timezone/issues/11
    // https://github.com/moment/moment-timezone/pull/25
    var a = moment.utc(timeString);
	var newMoment = moment.utc('1970-01-01 00:00:00');
				   	newMoment.tz(timeZone);
				    newMoment.year(a.year());
				    newMoment.month(a.month());
					newMoment.date(a.date());
					newMoment.hour(a.hour());

					// Sometimes adding the hour component can make the day skip ahead by one.
					// This probably means there are edge cases ALL OVER THE PLACE.
					newMoment.date(a.date());

					newMoment.minute(a.minute());
				 	newMoment.second(a.second());

	// OH GOD none of this should be necessary D:
	// This _should_ cope with any DST shift fuckupery in multiples of 10 (hopefully only 60 or 30 minute shifts exist)
	if (newMoment.format('HHmm') != a.format('HHmm')) {
		var increment = newMoment.format('HHmm') < a.format('HHmm') ? 10 : -10;
		for (var i = 0; i < 6; i++) {
			if (newMoment.hour() != a.hour()) {
				newMoment.add('minutes', increment);
			}
			else break;			
		}

		// This usually just resets the minute value, but for 01:15 in 2014-04-06 in Lord Howe, just seting the 
		//  minutes value twice to the same thing is what 'fixes' the bug that initially sets the time to 01:45...
		newMoment.minute(a.minute());
	}

	if (newMoment.format('YYYY-MM-DD HH:mm:ss') !== timeString) {
    	throw new Error('Despite our best efforts, moment.js resulted in a date mismatch:' + newMoment.format('YYYY-MM-DD HH:mm:ss') + ' did not match ' + timeString + ' in time zone ' + timeZone);
    }

    return newMoment;

}
