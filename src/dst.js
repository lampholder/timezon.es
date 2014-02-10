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
	var foundDSTEvent = ['months', 'days', 'hours', 'minutes'].every(function(increment) {
		while (iterator <= endDate && iterator.isDST() == initialDSTState) {
			iterator.add(1, increment);
		}
		if (iterator.isDST() != initialDSTState) {
			iterator.subtract(1, increment);
			return true;
		}
		else return false;
	});

	if (foundDSTEvent) {
		//return {'moment': iterator.add(1, 'minutes'), 'eventType': initialDSTState ? 'BACK' : 'FORWARD'}
		return {'before': moment(iterator), 'after': moment(iterator.add(1, 'minutes')), 'eventType': initialDSTState ? 'BACK' : 'FORWARD'}
	}
	return {'before': null, 'after': null, 'eventType': 'NO_DST'};
};

DST.timeExists = function(timeString, timeZone, format) {
	var utcTime = moment.utc(timeString, format);
	var timeZonedTime = DST.createTimeInTimezone(timeString, timeZone, format);
	return utcTime.format('HHmm') === timeZonedTime.format('HHmm');
}

DST.timeIsAmbiguous = function(timeString, timeZone, format) {
	//var utcTime = moment.utc(timeString, format); // No timezone info - this is strictly cosmetic
	var timeZonedTime = DST.createTimeInTimezone(timeString, timeZone, format);
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
	// Awaiting the next release of moment.js:
    // https://github.com/moment/moment-timezone/issues/11
    // https://github.com/moment/moment-timezone/pull/25

	var sourceMoment = moment.utc(timeString, format);
    
    var newMoment = moment.tz('2010-01-28 11:00:00', timeZone);
    newMoment.millisecond(sourceMoment.millisecond());
    newMoment.second(sourceMoment.second());
    newMoment.minute(sourceMoment.minute());
    newMoment.hour(sourceMoment.hour());
    newMoment.date(sourceMoment.date());
    newMoment.month(sourceMoment.month());
    newMoment.year(sourceMoment.year());

    /*
    var offset = newMoment.format('Z');
	for (var i = 0; i < 3; i++) {
		newMoment.hour(sourceMoment.hour());
		if (offset !== newMoment.format('Z')) {
			offset = newMoment.foramt('Z');
			alert ('donkeypop');
			throw Error('This thing is donkey poop - this time is ambuguous.');
		}
	}
	*/

    /*
    // You have to call .hour() twice to achieve the result you want regardless of timezone :()
    var x = moment.tz('2014-03-09 12:00:00', 'America/Los_Angeles')
    x.format() // "2014-03-09T05:00:00-07:00"
    x.hour(1).format() // "2014-03-09T00:00:00-08:00"
    x.hour(1).format() // "2014-03-09T01:00:00-08:00"
    */
    //newMoment.hour(sourceMoment.hour()); 


    return newMoment;
}
