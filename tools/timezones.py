#! /usr/bin/env python

import argparse
import collections
import csv, json
import urllib2

url = 'https://raw.githubusercontent.com/moment/moment-timezone/develop/moment-timezone.json'

response = urllib2.urlopen(url)
timezone_file = json.loads(response.read())

print 'moment.tz.add('
print json.dumps(timezone_file, indent=1, separators=(',', ': '))
print ');'
