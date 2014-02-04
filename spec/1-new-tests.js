/*jslint nomen: true*/
/*global describe, expect, it, __*/
describe('DST', function () {
	it('1 - should make sure that tests are setup correctly', function () {
		expect(1).toBe(1);
	});
	it('2 - should validate against invalid inputs', function () {
		expect(function() {DST.getNextDSTEvent(new Date())}).toThrow(new Error("Date arguments must be moment.js Moment objects"));
		expect(function() {DST.getNextDSTEvent(moment('2013-01-01'), moment('2012-05-01'))}).toThrow(new Error("Start date can't be after end date"));
		expect(function() {DST.getNextDSTEvent(moment.tz('2013-01-01', 'Europe/London'), moment.tz('2013-01-06', 'Asia/Manila'))}).toThrow(new Error("Start date and end date must be in the same time zone"));
	});
	it('3 - should return correct values for a valid call', function () {
		expect(DST.getNextDSTEvent(moment('2010-01-01 00:00:00')).moment.toISOString()).toEqual('2010-03-28T01:00:00.000Z');
		expect(DST.getNextDSTEvent(moment('2010-06-01 00:00:00')).moment.toISOString()).toEqual('2010-10-31T01:00:00.000Z');
		expect(DST.getNextDSTEvent(moment('2011-01-01 00:00:00')).moment.toISOString()).toEqual('2011-03-27T01:00:00.000Z');
		expect(DST.getNextDSTEvent(moment('2011-06-01 00:00:00')).moment.toISOString()).toEqual('2011-10-30T01:00:00.000Z');
		expect(DST.getNextDSTEvent(moment('2012-01-01 00:00:00')).moment.toISOString()).toEqual('2012-03-25T01:00:00.000Z');
		expect(DST.getNextDSTEvent(moment('2012-06-01 00:00:00')).moment.toISOString()).toEqual('2012-10-28T01:00:00.000Z');
		expect(DST.getNextDSTEvent(moment('2013-01-01 00:00:00')).moment.toISOString()).toEqual('2013-03-31T01:00:00.000Z');
		expect(DST.getNextDSTEvent(moment('2013-06-01 00:00:00')).moment.toISOString()).toEqual('2013-10-27T01:00:00.000Z');
	});
	it('4 - should return null for territories which do not operate a DST that year', function () {
		expect(DST.getNextDSTEvent(moment('2010-01-01 00:00:00').tz('Asia/Manila'))).toEqual({'moment': null, 'eventType': 'NO_DST'});
		expect(DST.getNextDSTEvent(moment('1900-01-01 00:00:00').tz('Europe/London'))).toEqual({'moment': null, 'eventType': 'NO_DST'});
	});
	it('5 - should not keep searching for DST events beyond the specified end point', function () {
		expect(DST.getNextDSTEvent(moment.tz('1990-01-01 00:00:00', 'Europe/London'), moment.tz('1990-03-03 00:00:00', 'Europe/London'))).toEqual({'moment': null, 'eventType': 'NO_DST'});
	});
});
