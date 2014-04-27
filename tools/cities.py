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
        structured['id'] = int(row[0])
        structured['name'] = row[2]
        structured['tz'] = row[17]
        structured['country'] = row[8]
        structured['population'] = int(row[14])
        if args.min is None or int(row[14]) >= args.min:
            cities.append(structured)

print json.dumps(cities, indent=1, separators=(',', ': '))
