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
		return {'moment': iterator.add(1, 'minutes'), 'eventType': initialDSTState ? 'BACK' : 'FORWARD'}
	}
	return {'moment': null, 'eventType': 'NO_DST'};
};