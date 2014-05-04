#! /usr/bin/env python

"""
The main 'geoname' table has the following fields :
---------------------------------------------------
 0 geonameid         : integer id of record in geonames database
 1 name              : name of geographical point (utf8) varchar(200)
 2 asciiname         : name of geographical point in plain ascii characters, varchar(200)
 3 alternatenames    : alternatenames, comma separated, ascii names automatically transliterated, convenience attribute from alternatename table, varchar(8000)
 4 latitude          : latitude in decimal degrees (wgs84)
 5 longitude         : longitude in decimal degrees (wgs84)
 6 feature class     : see http://www.geonames.org/export/codes.html, char(1)
 7 feature code      : see http://www.geonames.org/export/codes.html, varchar(10)
 8 country code      : ISO-3166 2-letter country code, 2 characters
 9 cc2               : alternate country codes, comma separated, ISO-3166 2-letter country code, 60 characters
10 admin1 code       : fipscode (subject to change to iso code), see exceptions below, see file admin1Codes.txt for display names of this code; varchar(20)
11 admin2 code       : code for the second administrative division, a county in the US, see file admin2Codes.txt; varchar(80) 
12 admin3 code       : code for third level administrative division, varchar(20)
13 admin4 code       : code for fourth level administrative division, varchar(20)
14 population        : bigint (8 byte int) 
15 elevation         : in meters, integer
16 dem               : digital elevation model, srtm3 or gtopo30, average elevation of 3''x3'' (ca 90mx90m) or 30''x30'' (ca 900mx900m) area in meters, integer. srtm processed by cgiar/ciat.
17 timezone          : the timezone id (see file timeZone.txt) varchar(40)
18 modification date : date of last modification in yyyy-MM-dd format
"""

city_js = """var CITY = {};
'use strict';

CITY.findCitiesByName = function(cityName) {

    var minIndex = 0;
    var maxIndex = this.cities.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = this.cities[currentIndex];

        if (currentElement.name < cityName) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement.name > cityName) {
            maxIndex = currentIndex - 1;
        }
        else {
            break;
        }
    }

    while (currentIndex >= 1 && this.cities[currentIndex - 1].name == cityName) {
        currentIndex--;
    }
    
    matchingCities = [];
    while (this.cities[currentIndex].name == cityName) {
        matchingCities.push(this.cities[currentIndex]);
        currentIndex++;
    }

    return matchingCities;

};
"""

import argparse
import collections
import csv, json
import urllib2
from zipfile import ZipFile
from StringIO import StringIO

parser = argparse.ArgumentParser(description='Process the city data from http://download.geonames.org/export/dump/ for use with http://timezon.es')
parser.add_argument("file", help="1000, 5000 or 15000")
parser.add_argument("--min", help="Minimum population size to include (default=0)", type=int)

args = parser.parse_args()

if args.file not in ('1000', '5000', '15000'):
    parser.print_help()
    exit(1)

filename = 'cities' + args.file

url = 'http://download.geonames.org/export/dump/' + filename + '.zip'
response = urllib2.urlopen(url)

zipdata = StringIO()
zipdata.write(response.read())

cities_file = ZipFile(zipdata).open(filename + '.txt')

with cities_file as csvfile:
    reader = csv.reader(csvfile, delimiter='\t', quoting=csv.QUOTE_NONE)
    cities = []
    for row in reader:
        structured = collections.OrderedDict()  # cosmetic only
        structured['id'] = row[0]
        structured['name'] = row[2]
        structured['tz'] = row[17]
        structured['country'] = row[8]
        structured['population'] = int(row[14])
        if args.min is None or int(row[14]) >= args.min:
            cities.append(structured)

generics = [('CET - Central European Time', 'CET'),
            ('CST6CDT', 'CST6CDT'),
            ('EET - Eastern European Time', 'EET'),
            ('EST - Eastern Standard Time', 'EST'),
            ('EST5EDT', 'EST5EDT'),
            ('HST - Hawaii Standard Time', 'HST'),
            ('MET - Middle European Time', 'MET'),
            ('MST - Mountain Standard Time', 'MST'),
            ('MST7MDT', 'MST7MDT'),
            ('PST8PDT', 'PST8PDT'),
            ('WET - Western European Time', 'WET'),
            ('GMT - Greenwich Mean Time', 'Etc/GMT'),
            ('GMT+1', 'Etc/GMT+1'),
            ('GMT+10', 'Etc/GMT+10'),
            ('GMT+11', 'Etc/GMT+11'),
            ('GMT+12', 'Etc/GMT+12'),
            ('GMT+2', 'Etc/GMT+2'),
            ('GMT+3', 'Etc/GMT+3'),
            ('GMT+4', 'Etc/GMT+4'),
            ('GMT+5', 'Etc/GMT+5'),
            ('GMT+6', 'Etc/GMT+6'),
            ('GMT+7', 'Etc/GMT+7'),
            ('GMT+8', 'Etc/GMT+8'),
            ('GMT+9', 'Etc/GMT+9'),
            ('GMT-1', 'Etc/GMT-1'),
            ('GMT-10', 'Etc/GMT-10'),
            ('GMT-11', 'Etc/GMT-11'),
            ('GMT-12', 'Etc/GMT-12'),
            ('GMT-13', 'Etc/GMT-13'),
            ('GMT-14', 'Etc/GMT-14'),
            ('GMT-2', 'Etc/GMT-2'),
            ('GMT-3', 'Etc/GMT-3'),
            ('GMT-4', 'Etc/GMT-4'),
            ('GMT-5', 'Etc/GMT-5'),
            ('GMT-6', 'Etc/GMT-6'),
            ('GMT-7', 'Etc/GMT-7'),
            ('GMT-8', 'Etc/GMT-8'),
            ('GMT-9', 'Etc/GMT-9'),
            ('UCT', 'Etc/UCT'),
            ('UTC', 'Etc/UTC')]

for i in range(0, len(generics)):
    structured = collections.OrderedDict()  # cosmetic only
    (name, tz) = generics[i]
    structured['id'] = 'G%d' % i
    structured['name'] = name
    structured['tz'] = tz
    structured['country'] = None
    structured['population'] = None
    cities.append(structured)

# TODO: actually include these, plus include the fake unix city somehow
edgecaseville = [('Lord Howe Island', 'Australia/Lord_Howe'),
                 ('Eucla', 'Australia/Eucla')]

cities.sort(key=lambda x: x['name'].upper())

print city_js
print 'CITY.cities = %s' % json.dumps(cities, indent=1, separators=(',', ': '))

source = {'url': 'http://download.geonames.org/export/dump/',
          'file': filename + '.zip',
          'min': args.min}

print 'CITY.source = %s' % json.dumps(source)
