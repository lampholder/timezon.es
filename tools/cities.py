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
"""

# TODO: Make this filter/flag/otherwise handle cities with the same name *AND* country (dammit Luoyang).

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
    cities = {}
    for row in reader:
        structured = collections.OrderedDict()  # cosmetic only
        structured['id'] = row[0]
        structured['name'] = row[2]
        structured['tz'] = row[17]
        structured['country'] = row[8]
        structured['population'] = int(row[14])
        if args.min is None or int(row[14]) >= args.min:
            if row[2] not in cities:
                cities[row[2]] = []
            cities[row[2]].append(structured)

generics = [('CET', 'CET', 'Central European Time'),
            ('CST6CDT', 'CST6CDT', None),
            ('EET', 'EET', 'Eastern European Time'),
            ('EST', 'EST', 'Eastern Standard Time'),
            ('EST5EDT', 'EST5EDT', None),
            ('HST', 'HST', 'Hawaii Standard Time'),
            ('MET', 'MET', 'Middle European Time'),
            ('MST', 'MST', 'Mountain Standard Time'),
            ('MST7MDT', 'MST7MDT', None),
            ('PST8PDT', 'PST8PDT', None),
            ('WET', 'WET', 'Western European Time'),
            ('GMT', 'Etc/GMT', 'Greenwich Mean Time'),
            ('GMT+1', 'Etc/GMT+1', None),
            ('GMT+10', 'Etc/GMT+10', None),
            ('GMT+11', 'Etc/GMT+11', None),
            ('GMT+12', 'Etc/GMT+12', None),
            ('GMT+2', 'Etc/GMT+2', None),
            ('GMT+3', 'Etc/GMT+3', None),
            ('GMT+4', 'Etc/GMT+4', None),
            ('GMT+5', 'Etc/GMT+5', None),
            ('GMT+6', 'Etc/GMT+6', None),
            ('GMT+7', 'Etc/GMT+7', None),
            ('GMT+8', 'Etc/GMT+8', None),
            ('GMT+9', 'Etc/GMT+9', None),
            ('GMT-1', 'Etc/GMT-1', None),
            ('GMT-10', 'Etc/GMT-10', None),
            ('GMT-11', 'Etc/GMT-11', None),
            ('GMT-12', 'Etc/GMT-12', None),
            ('GMT-13', 'Etc/GMT-13', None),
            ('GMT-14', 'Etc/GMT-14', None),
            ('GMT-2', 'Etc/GMT-2', None),
            ('GMT-3', 'Etc/GMT-3', None),
            ('GMT-4', 'Etc/GMT-4', None),
            ('GMT-5', 'Etc/GMT-5', None),
            ('GMT-6', 'Etc/GMT-6', None),
            ('GMT-7', 'Etc/GMT-7', None),
            ('GMT-8', 'Etc/GMT-8', None),
            ('GMT-9', 'Etc/GMT-9', None),
            ('UCT', 'Etc/UCT', None),
            ('UTC', 'Etc/UTC', None),
            ('Unix time', 'Etc/UTC', None)]

for i in range(0, len(generics)):
    structured = collections.OrderedDict()  # cosmetic only
    (name, tz, description) = generics[i]
    structured['id'] = 'G%d' % i
    structured['name'] = name
    structured['tz'] = tz
    structured['country'] = None
    structured['population'] = None
    if description is not None:
        structured['description'] = description
    if name not in cities:
        cities[name] = []
    cities.get(name).append(structured)

# TODO: actually include these, plus include the fake unix city somehow
edgecaseville = [('Lord Howe Island', 'Australia/Lord_Howe'),
                 ('Eucla', 'Australia/Eucla')]

print city_js
print 'CITY.cities = %s' % json.dumps(cities, indent=1, separators=(',', ': '))

source = {'url': 'http://download.geonames.org/export/dump/',
          'file': filename + '.zip',
          'min': args.min}

print 'CITY.source = %s' % json.dumps(source)
