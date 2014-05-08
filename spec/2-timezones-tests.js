/*jslint nomen: true*/
/*global describe, expect, it, __*/
describe('TIMEZONES', function () {
    it('1 - should make sure that tests are setup correctly', function () {
        expect(1).toBe(1);
    });
    it('2 - trimming falsy values from arrays should give expected results', function () {
        expect(TIMEZONES.trimArray(['', '', 0, undefined, null, 'Seattle', '07:00', 'Ipswich', 0, null, ''])).toEqual(['Seattle', '07:00', 'Ipswich']);
        expect(TIMEZONES.trimArray(['', '', 0, undefined, null, 0, null, ''])).toEqual([]);
    });
    it('3 - should convert fuzzy URL-specifed datetimes into usable, timezoned datetimes', function () {
        expect(TIMEZONES.getDateTimeFromDateTimeField('2013-01-01T15:20', 'Europe/London').format('YYYY-MM-DD HH:mm:ss')).toEqual('2013-01-01 15:20:00');
        expect(TIMEZONES.getDateTimeFromDateTimeField('2013-01-01T15:20', 'Europe/London').tz()).toEqual('Europe/London');

        expect(TIMEZONES.getDateTimeFromDateTimeField('2013-01-01T15:20', 'America/Los_Angeles').format('YYYY-MM-DD HH:mm:ss')).toEqual('2013-01-01 15:20:00');
        expect(TIMEZONES.getDateTimeFromDateTimeField('2013-01-01T15:20', 'America/Los_Angeles').tz()).toEqual('America/Los_Angeles');

        expect(TIMEZONES.getDateTimeFromDateTimeField('22:30', 'Australia/Sydney').format('HH:mm:ss')).toEqual('22:30:00');
        expect(TIMEZONES.getDateTimeFromDateTimeField('22:30', 'Australia/Sydney').tz()).toEqual('Australia/Sydney');

    });
    it('4 - should get right config from CITY_A/1111/CITY_B', function () {
        expect(TIMEZONES.getSetupFromURL(['Seattle', '07:00', 'London,GB'])).toEqual({});
        //expect(function() {DST.getNextDSTEvent(new Date())}).toThrow(new Error("Date arguments must be moment.js Moment objects"));
    });
});