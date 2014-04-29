var CITY = {};
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

CITY.cities = [
 {
  "id": "250799",
  "name": "'Ajlun",
  "tz": "Asia/Amman",
  "country": "JO",
  "population": 125557
 },
 {
  "id": "108512",
  "name": "'Ar'ar",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 148540
 },
 {
  "id": "2747351",
  "name": "'s-Hertogenbosch",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 134520
 },
 {
  "id": "3119841",
  "name": "A Coruna",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 246056
 },
 {
  "id": "3247449",
  "name": "Aachen",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 265208
 },
 {
  "id": "2624886",
  "name": "Aalborg",
  "tz": "Europe/Copenhagen",
  "country": "DK",
  "population": 122219
 },
 {
  "id": "2353151",
  "name": "Aba",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 897560
 },
 {
  "id": "145459",
  "name": "Abadan",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 370180
 },
 {
  "id": "2353099",
  "name": "Abakaliki",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 134102
 },
 {
  "id": "1512236",
  "name": "Abakan",
  "tz": "Asia/Krasnoyarsk",
  "country": "RU",
  "population": 167289
 },
 {
  "id": "5881791",
  "name": "Abbotsford",
  "tz": "America/Vancouver",
  "country": "CA",
  "population": 151683
 },
 {
  "id": "1185056",
  "name": "Abbottabad",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 120000
 },
 {
  "id": "2293549",
  "name": "Abengourou",
  "tz": "Africa/Abidjan",
  "country": "CI",
  "population": 104020
 },
 {
  "id": "2352947",
  "name": "Abeokuta",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 593100
 },
 {
  "id": "2657832",
  "name": "Aberdeen",
  "tz": "Europe/London",
  "country": "GB",
  "population": 183790
 },
 {
  "id": "110690",
  "name": "Abha",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 210886
 },
 {
  "id": "2293538",
  "name": "Abidjan",
  "tz": "Africa/Abidjan",
  "country": "CI",
  "population": 3677115
 },
 {
  "id": "2113164",
  "name": "Abiko",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 131771
 },
 {
  "id": "4669635",
  "name": "Abilene",
  "tz": "America/Chicago",
  "country": "US",
  "population": 117063
 },
 {
  "id": "2293521",
  "name": "Abobo",
  "tz": "Africa/Abidjan",
  "country": "CI",
  "population": 900000
 },
 {
  "id": "1279403",
  "name": "Abohar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 130603
 },
 {
  "id": "2395914",
  "name": "Abomey-Calavi",
  "tz": "Africa/Porto-Novo",
  "country": "BJ",
  "population": 385755
 },
 {
  "id": "292968",
  "name": "Abu Dhabi",
  "tz": "Asia/Dubai",
  "country": "AE",
  "population": 603492
 },
 {
  "id": "100077",
  "name": "Abu Ghurayb",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 900000
 },
 {
  "id": "362485",
  "name": "Abu Kabir",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 100684
 },
 {
  "id": "2352778",
  "name": "Abuja",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 590400
 },
 {
  "id": "3533462",
  "name": "Acapulco",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 652136
 },
 {
  "id": "3649833",
  "name": "Acarigua",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 143704
 },
 {
  "id": "2306104",
  "name": "Accra",
  "tz": "Africa/Accra",
  "country": "GH",
  "population": 1963264
 },
 {
  "id": "1279390",
  "name": "Achalpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 111278
 },
 {
  "id": "2038679",
  "name": "Acheng",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 144665
 },
 {
  "id": "2306079",
  "name": "Achiaman",
  "tz": "Africa/Accra",
  "country": "GH",
  "population": 202932
 },
 {
  "id": "1512165",
  "name": "Achinsk",
  "tz": "Asia/Krasnoyarsk",
  "country": "RU",
  "population": 117634
 },
 {
  "id": "99762",
  "name": "Ad Diwaniyah",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 318801
 },
 {
  "id": "380174",
  "name": "Ad-Damazin",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 186051
 },
 {
  "id": "325363",
  "name": "Adana",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 1248988
 },
 {
  "id": "752850",
  "name": "Adapazari",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 286787
 },
 {
  "id": "344979",
  "name": "Addis Ababa",
  "tz": "Africa/Addis_Ababa",
  "country": "ET",
  "population": 2757729
 },
 {
  "id": "2078025",
  "name": "Adelaide",
  "tz": "Australia/Adelaide",
  "country": "AU",
  "population": 1225235
 },
 {
  "id": "415189",
  "name": "Aden",
  "tz": "Asia/Aden",
  "country": "YE",
  "population": 550602
 },
 {
  "id": "1279344",
  "name": "Adilabad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 118526
 },
 {
  "id": "1651887",
  "name": "Adiwerna",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 134188
 },
 {
  "id": "325330",
  "name": "Adiyaman",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 223744
 },
 {
  "id": "8504953",
  "name": "Admiralteisky",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 157897
 },
 {
  "id": "2352379",
  "name": "Ado-Ekiti",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 424340
 },
 {
  "id": "1279335",
  "name": "Adoni",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 163631
 },
 {
  "id": "325303",
  "name": "Afyonkarahisar",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 146136
 },
 {
  "id": "2448085",
  "name": "Agadez",
  "tz": "Africa/Niamey",
  "country": "NE",
  "population": 124324
 },
 {
  "id": "2561668",
  "name": "Agadir",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 698310
 },
 {
  "id": "1279290",
  "name": "Agartala",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 203264
 },
 {
  "id": "1865714",
  "name": "Ageoshimo",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 219401
 },
 {
  "id": "1279259",
  "name": "Agra",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1430055
 },
 {
  "id": "4019233",
  "name": "Aguascalientes",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 658179
 },
 {
  "id": "1279228",
  "name": "Ahmadnagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 367140
 },
 {
  "id": "1184845",
  "name": "Ahmadpur East",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 116579
 },
 {
  "id": "1279233",
  "name": "Ahmedabad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 3719710
 },
 {
  "id": "144448",
  "name": "Ahvaz",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 841145
 },
 {
  "id": "2508287",
  "name": "Ain Beida",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 105765
 },
 {
  "id": "2507972",
  "name": "Ain Oussera",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 118687
 },
 {
  "id": "7279599",
  "name": "Airoli",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 100000
 },
 {
  "id": "3038354",
  "name": "Aix-en-Provence",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 146821
 },
 {
  "id": "1279186",
  "name": "Aizawl",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 265331
 },
 {
  "id": "89113",
  "name": "Ajdabiya",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 134358
 },
 {
  "id": "292932",
  "name": "Ajman",
  "tz": "Asia/Dubai",
  "country": "AE",
  "population": 226172
 },
 {
  "id": "1279159",
  "name": "Ajmer",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 517911
 },
 {
  "id": "8504958",
  "name": "Akademicheskoe",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 103304
 },
 {
  "id": "1847966",
  "name": "Akashi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 297279
 },
 {
  "id": "2113126",
  "name": "Akita",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 320069
 },
 {
  "id": "2113719",
  "name": "Akita Shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 325837
 },
 {
  "id": "1279105",
  "name": "Akola",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 428857
 },
 {
  "id": "5145476",
  "name": "Akron",
  "tz": "America/New_York",
  "country": "US",
  "population": 199110
 },
 {
  "id": "324496",
  "name": "Aksaray",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 152201
 },
 {
  "id": "610612",
  "name": "Aktau",
  "tz": "Asia/Aqtau",
  "country": "KZ",
  "population": 147443
 },
 {
  "id": "2350841",
  "name": "Akure",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 420594
 },
 {
  "id": "285839",
  "name": "Al Ahmadi",
  "tz": "Asia/Kuwait",
  "country": "KW",
  "population": 637411
 },
 {
  "id": "292913",
  "name": "Al Ain",
  "tz": "Asia/Dubai",
  "country": "AE",
  "population": 408733
 },
 {
  "id": "174018",
  "name": "Al Bab",
  "tz": "Asia/Damascus",
  "country": "SY",
  "population": 130745
 },
 {
  "id": "99532",
  "name": "Al Basrah",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 2600000
 },
 {
  "id": "388349",
  "name": "Al Basrat al Qadimah",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 2015483
 },
 {
  "id": "99454",
  "name": "Al Fallujah",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 190159
 },
 {
  "id": "99446",
  "name": "Al Faw",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 104569
 },
 {
  "id": "361320",
  "name": "Al Fayyum",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 306393
 },
 {
  "id": "361179",
  "name": "Al Hawamidiyah",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 106841
 },
 {
  "id": "99347",
  "name": "Al Hillah",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 289709
 },
 {
  "id": "2558545",
  "name": "Al Hoceima",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 395644
 },
 {
  "id": "79415",
  "name": "Al Hudaydah",
  "tz": "Asia/Aden",
  "country": "YE",
  "population": 617871
 },
 {
  "id": "109571",
  "name": "Al Hufuf",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 293179
 },
 {
  "id": "2219960",
  "name": "Al Jadid",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 126386
 },
 {
  "id": "360995",
  "name": "Al Jizah",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 2443203
 },
 {
  "id": "109435",
  "name": "Al Jubayl",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 237274
 },
 {
  "id": "2219905",
  "name": "Al Khums",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 201943
 },
 {
  "id": "99131",
  "name": "Al Kut",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 315162
 },
 {
  "id": "360829",
  "name": "Al Mahallah al Kubra",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 431052
 },
 {
  "id": "379149",
  "name": "Al Manaqil",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 128297
 },
 {
  "id": "360761",
  "name": "Al Mansurah",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 420195
 },
 {
  "id": "99071",
  "name": "Al Mawsil al Jadidah",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 2065597
 },
 {
  "id": "360686",
  "name": "Al Minya",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 227150
 },
 {
  "id": "109101",
  "name": "Al Mubarraz",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 290802
 },
 {
  "id": "78754",
  "name": "Al Mukalla",
  "tz": "Asia/Aden",
  "country": "YE",
  "population": 258132
 },
 {
  "id": "379062",
  "name": "Al Qadarif",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 363945
 },
 {
  "id": "108648",
  "name": "Al Qurayyat",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 102903
 },
 {
  "id": "286282",
  "name": "Al Sohar",
  "tz": "Asia/Muscat",
  "country": "OM",
  "population": 108274
 },
 {
  "id": "99608",
  "name": "Al `Amarah",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 323302
 },
 {
  "id": "582432",
  "name": "Al'met'yevsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 140437
 },
 {
  "id": "3472766",
  "name": "Alagoinhas",
  "tz": "America/Bahia",
  "country": "BR",
  "population": 122688
 },
 {
  "id": "3569370",
  "name": "Alamar",
  "tz": "America/Havana",
  "country": "CU",
  "population": 100000
 },
 {
  "id": "1279064",
  "name": "Alandur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 153775
 },
 {
  "id": "324190",
  "name": "Alanya",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 112969
 },
 {
  "id": "2522258",
  "name": "Albacete",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 169716
 },
 {
  "id": "5454711",
  "name": "Albuquerque",
  "tz": "America/Denver",
  "country": "US",
  "population": 545852
 },
 {
  "id": "3130616",
  "name": "Alcala de Henares",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 204574
 },
 {
  "id": "713716",
  "name": "Alchevs'k",
  "tz": "Europe/Zaporozhye",
  "country": "UA",
  "population": 116000
 },
 {
  "id": "3130583",
  "name": "Alcobendas",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 107514
 },
 {
  "id": "3130564",
  "name": "Alcorcon",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 167967
 },
 {
  "id": "170063",
  "name": "Aleppo",
  "tz": "Asia/Damascus",
  "country": "SY",
  "population": 1602264
 },
 {
  "id": "361058",
  "name": "Alexandria",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 3811516
 },
 {
  "id": "4744091",
  "name": "Alexandria",
  "tz": "America/New_York",
  "country": "US",
  "population": 139966
 },
 {
  "id": "2522013",
  "name": "Algeciras",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 116209
 },
 {
  "id": "2507480",
  "name": "Algiers",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 1977663
 },
 {
  "id": "2521978",
  "name": "Alicante",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 334757
 },
 {
  "id": "1279017",
  "name": "Aligarh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 753207
 },
 {
  "id": "1278994",
  "name": "Allahabad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1073438
 },
 {
  "id": "5178127",
  "name": "Allentown",
  "tz": "America/New_York",
  "country": "US",
  "population": 118032
 },
 {
  "id": "1278985",
  "name": "Alleppey",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 176783
 },
 {
  "id": "1526384",
  "name": "Almaty",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 2000900
 },
 {
  "id": "2759879",
  "name": "Almere Stad",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 176432
 },
 {
  "id": "2521886",
  "name": "Almeria",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 188810
 },
 {
  "id": "1736309",
  "name": "Alor Setar",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 217368
 },
 {
  "id": "1529651",
  "name": "Altay",
  "tz": "Asia/Urumqi",
  "country": "CN",
  "population": 139341
 },
 {
  "id": "3487903",
  "name": "Alto Barinas",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 284289
 },
 {
  "id": "2911296",
  "name": "Altona",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 250192
 },
 {
  "id": "3514663",
  "name": "Alvaro Obregon",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 727034
 },
 {
  "id": "1278946",
  "name": "Alwar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 283228
 },
 {
  "id": "2271772",
  "name": "Amadora",
  "tz": "Europe/Lisbon",
  "country": "PT",
  "population": 178858
 },
 {
  "id": "1865387",
  "name": "Amagasaki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 442173
 },
 {
  "id": "2350249",
  "name": "Amaigbo",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 127300
 },
 {
  "id": "5516233",
  "name": "Amarillo",
  "tz": "America/Chicago",
  "country": "US",
  "population": 190695
 },
 {
  "id": "1278903",
  "name": "Amarnath",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 217780
 },
 {
  "id": "1278860",
  "name": "Ambala",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 146787
 },
 {
  "id": "3660689",
  "name": "Ambato",
  "tz": "America/Guayaquil",
  "country": "EC",
  "population": 154369
 },
 {
  "id": "1278840",
  "name": "Ambattur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 341049
 },
 {
  "id": "1651531",
  "name": "Ambon",
  "tz": "Asia/Jayapura",
  "country": "ID",
  "population": 355596
 },
 {
  "id": "1278815",
  "name": "Ambur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 109873
 },
 {
  "id": "3472343",
  "name": "Americana",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 196022
 },
 {
  "id": "2759821",
  "name": "Amersfoort",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 139914
 },
 {
  "id": "5107129",
  "name": "Amherst",
  "tz": "America/New_York",
  "country": "US",
  "population": 122366
 },
 {
  "id": "3037854",
  "name": "Amiens",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 143086
 },
 {
  "id": "250441",
  "name": "Amman",
  "tz": "Asia/Amman",
  "country": "JO",
  "population": 1275857
 },
 {
  "id": "143534",
  "name": "Amol",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 199382
 },
 {
  "id": "1278718",
  "name": "Amravati",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 603837
 },
 {
  "id": "1278710",
  "name": "Amritsar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1092450
 },
 {
  "id": "1278708",
  "name": "Amroha",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 176253
 },
 {
  "id": "2759794",
  "name": "Amsterdam",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 741636
 },
 {
  "id": "98860",
  "name": "An Najaf al Ashraf",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 482576
 },
 {
  "id": "98854",
  "name": "An Nasiriyah",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 400249
 },
 {
  "id": "378699",
  "name": "An Nuhud",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 108008
 },
 {
  "id": "3486270",
  "name": "Anaco",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 117596
 },
 {
  "id": "5323810",
  "name": "Anaheim",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 336265
 },
 {
  "id": "1278685",
  "name": "Anand",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 138009
 },
 {
  "id": "3407669",
  "name": "Ananindeua",
  "tz": "America/Belem",
  "country": "BR",
  "population": 433956
 },
 {
  "id": "1278672",
  "name": "Anantapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 240442
 },
 {
  "id": "3472287",
  "name": "Anapolis",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 319587
 },
 {
  "id": "1818116",
  "name": "Anbu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 162964
 },
 {
  "id": "5879400",
  "name": "Anchorage",
  "tz": "America/Anchorage",
  "country": "US",
  "population": 291826
 },
 {
  "id": "2038650",
  "name": "Anda",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 181271
 },
 {
  "id": "1514588",
  "name": "Andijon",
  "tz": "Asia/Tashkent",
  "country": "UZ",
  "population": 318419
 },
 {
  "id": "1846986",
  "name": "Andong",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 129319
 },
 {
  "id": "2027667",
  "name": "Angarsk",
  "tz": "Asia/Irkutsk",
  "country": "RU",
  "population": 243158
 },
 {
  "id": "1730737",
  "name": "Angeles City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 299391
 },
 {
  "id": "3037656",
  "name": "Angers",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 168279
 },
 {
  "id": "3472177",
  "name": "Angra dos Reis",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 153635
 },
 {
  "id": "1514581",
  "name": "Angren",
  "tz": "Asia/Tashkent",
  "country": "UZ",
  "population": 126957
 },
 {
  "id": "1865294",
  "name": "Anjo",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 178402
 },
 {
  "id": "1789065",
  "name": "Ankang",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 132654
 },
 {
  "id": "323786",
  "name": "Ankara",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 3517182
 },
 {
  "id": "5885383",
  "name": "Anmore",
  "tz": "America/Vancouver",
  "country": "CA",
  "population": 126456
 },
 {
  "id": "4984247",
  "name": "Ann Arbor",
  "tz": "America/Detroit",
  "country": "US",
  "population": 113934
 },
 {
  "id": "2506999",
  "name": "Annaba",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 206570
 },
 {
  "id": "1817993",
  "name": "Anqing",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 358661
 },
 {
  "id": "1817990",
  "name": "Anqiu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 105665
 },
 {
  "id": "1846918",
  "name": "Ansan-si",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 650728
 },
 {
  "id": "2038632",
  "name": "Anshan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1199275
 },
 {
  "id": "1817968",
  "name": "Anshun",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 351936
 },
 {
  "id": "323777",
  "name": "Antalya",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 758188
 },
 {
  "id": "1070940",
  "name": "Antananarivo",
  "tz": "Indian/Antananarivo",
  "country": "MG",
  "population": 1391433
 },
 {
  "id": "5324200",
  "name": "Antioch",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 102372
 },
 {
  "id": "1730501",
  "name": "Antipolo",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 549543
 },
 {
  "id": "3899539",
  "name": "Antofagasta",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 309832
 },
 {
  "id": "1069166",
  "name": "Antsirabe",
  "tz": "Indian/Antananarivo",
  "country": "MG",
  "population": 186253
 },
 {
  "id": "2803138",
  "name": "Antwerpen",
  "tz": "Europe/Brussels",
  "country": "BE",
  "population": 459805
 },
 {
  "id": "2292852",
  "name": "Anyama",
  "tz": "Africa/Abidjan",
  "country": "CI",
  "population": 100653
 },
 {
  "id": "1785294",
  "name": "Anyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 781129
 },
 {
  "id": "1846898",
  "name": "Anyang-si",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 634367
 },
 {
  "id": "2130658",
  "name": "Aomori Shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 298394
 },
 {
  "id": "6316406",
  "name": "Aparecida de Goiania",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 510770
 },
 {
  "id": "2759706",
  "name": "Apeldoorn",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 136670
 },
 {
  "id": "4018390",
  "name": "Apodaca",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 352064
 },
 {
  "id": "3587345",
  "name": "Apopa",
  "tz": "America/El_Salvador",
  "country": "SV",
  "population": 112158
 },
 {
  "id": "3471910",
  "name": "Apucarana",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 107085
 },
 {
  "id": "610611",
  "name": "Aqtobe",
  "tz": "Asia/Aqtobe",
  "country": "KZ",
  "population": 262457
 },
 {
  "id": "172955",
  "name": "Ar Raqqah",
  "tz": "Asia/Damascus",
  "country": "SY",
  "population": 177636
 },
 {
  "id": "289888",
  "name": "Ar Rayyan",
  "tz": "Asia/Qatar",
  "country": "QA",
  "population": 272465
 },
 {
  "id": "1278483",
  "name": "Ara",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 223676
 },
 {
  "id": "3471872",
  "name": "Aracaju",
  "tz": "America/Maceio",
  "country": "BR",
  "population": 490175
 },
 {
  "id": "3471859",
  "name": "Aracatuba",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 170024
 },
 {
  "id": "686254",
  "name": "Arad",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 169065
 },
 {
  "id": "3407357",
  "name": "Araguaina",
  "tz": "America/Araguaina",
  "country": "BR",
  "population": 105019
 },
 {
  "id": "143127",
  "name": "Arak",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 503647
 },
 {
  "id": "1529641",
  "name": "Aral",
  "tz": "Asia/Kashgar",
  "country": "CN",
  "population": 260000
 },
 {
  "id": "3407327",
  "name": "Arapiraca",
  "tz": "America/Maceio",
  "country": "BR",
  "population": 166562
 },
 {
  "id": "3471766",
  "name": "Araraquara",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 168468
 },
 {
  "id": "3471758",
  "name": "Araras",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 107463
 },
 {
  "id": "3471715",
  "name": "Araruama",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 109637
 },
 {
  "id": "3471697",
  "name": "Araucaria",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 111302
 },
 {
  "id": "143083",
  "name": "Ardabil",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 410753
 },
 {
  "id": "3947322",
  "name": "Arequipa",
  "tz": "America/Lima",
  "country": "PE",
  "population": 841130
 },
 {
  "id": "6544487",
  "name": "Arganzuela",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 148797
 },
 {
  "id": "3037044",
  "name": "Argenteuil",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 101475
 },
 {
  "id": "2624652",
  "name": "Arhus",
  "tz": "Europe/Copenhagen",
  "country": "DK",
  "population": 237551
 },
 {
  "id": "3899361",
  "name": "Arica",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 185999
 },
 {
  "id": "361546",
  "name": "Arish",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 128855
 },
 {
  "id": "1651226",
  "name": "Arjawinangun",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 105845
 },
 {
  "id": "581049",
  "name": "Arkhangel'sk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 356051
 },
 {
  "id": "4671240",
  "name": "Arlington",
  "tz": "America/Chicago",
  "country": "US",
  "population": 365438
 },
 {
  "id": "4744709",
  "name": "Arlington",
  "tz": "America/New_York",
  "country": "US",
  "population": 207627
 },
 {
  "id": "580922",
  "name": "Armavir",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 199548
 },
 {
  "id": "3689560",
  "name": "Armenia",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 315328
 },
 {
  "id": "2759661",
  "name": "Arnhem",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 141674
 },
 {
  "id": "3568342",
  "name": "Arroyo Naranjo",
  "tz": "America/Havana",
  "country": "CU",
  "population": 210053
 },
 {
  "id": "6956646",
  "name": "Arroyo Naranjo",
  "tz": "America/Havana",
  "country": "CU",
  "population": 210053
 },
 {
  "id": "2027456",
  "name": "Artem",
  "tz": "Asia/Vladivostok",
  "country": "RU",
  "population": 102300
 },
 {
  "id": "161325",
  "name": "Arusha",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 341136
 },
 {
  "id": "5412199",
  "name": "Arvada",
  "tz": "America/Denver",
  "country": "US",
  "population": 106433
 },
 {
  "id": "580724",
  "name": "Arzamas",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 109479
 },
 {
  "id": "285704",
  "name": "As Salimiyah",
  "tz": "Asia/Kuwait",
  "country": "KW",
  "population": 147649
 },
 {
  "id": "98530",
  "name": "As Samawah",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 152890
 },
 {
  "id": "288967",
  "name": "As Sib al Jadidah",
  "tz": "Asia/Muscat",
  "country": "OM",
  "population": 237816
 },
 {
  "id": "98463",
  "name": "As Sulaymaniyah",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 723170
 },
 {
  "id": "288955",
  "name": "As Suwayq",
  "tz": "Asia/Muscat",
  "country": "OM",
  "population": 107143
 },
 {
  "id": "2130629",
  "name": "Asahikawa",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 356612
 },
 {
  "id": "1907299",
  "name": "Asaka",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 128058
 },
 {
  "id": "1278314",
  "name": "Asansol",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 504271
 },
 {
  "id": "295629",
  "name": "Ashdod",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 224656
 },
 {
  "id": "162183",
  "name": "Ashgabat",
  "tz": "Asia/Ashgabat",
  "country": "TM",
  "population": 727700
 },
 {
  "id": "1865005",
  "name": "Ashikaga",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 159671
 },
 {
  "id": "7302861",
  "name": "Ashoknagar Kalyangarh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 111475
 },
 {
  "id": "295620",
  "name": "Ashqelon",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 105995
 },
 {
  "id": "343300",
  "name": "Asmara",
  "tz": "Africa/Asmara",
  "country": "ER",
  "population": 563930
 },
 {
  "id": "1526273",
  "name": "Astana",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 345604
 },
 {
  "id": "1651112",
  "name": "Astanajapura",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 148047
 },
 {
  "id": "580497",
  "name": "Astrakhan'",
  "tz": "Europe/Volgograd",
  "country": "RU",
  "population": 502533
 },
 {
  "id": "3439389",
  "name": "Asuncion",
  "tz": "America/Asuncion",
  "country": "PY",
  "population": 1482200
 },
 {
  "id": "359792",
  "name": "Aswan",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 241261
 },
 {
  "id": "359783",
  "name": "Asyut",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 420585
 },
 {
  "id": "6947637",
  "name": "Atasehir",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 361615
 },
 {
  "id": "378231",
  "name": "Atbara",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 107930
 },
 {
  "id": "264371",
  "name": "Athens",
  "tz": "Europe/Athens",
  "country": "GR",
  "population": 729137
 },
 {
  "id": "4180386",
  "name": "Athens",
  "tz": "America/New_York",
  "country": "US",
  "population": 116714
 },
 {
  "id": "3471335",
  "name": "Atibaia",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 110968
 },
 {
  "id": "4180439",
  "name": "Atlanta",
  "tz": "America/New_York",
  "country": "US",
  "population": 420003
 },
 {
  "id": "1847963",
  "name": "Atsugi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 229199
 },
 {
  "id": "610529",
  "name": "Atyrau",
  "tz": "Asia/Oral",
  "country": "KZ",
  "population": 180000
 },
 {
  "id": "2193733",
  "name": "Auckland",
  "tz": "Pacific/Auckland",
  "country": "NZ",
  "population": 417910
 },
 {
  "id": "2954172",
  "name": "Augsburg",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 259196
 },
 {
  "id": "1278149",
  "name": "Aurangabad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1016441
 },
 {
  "id": "4883817",
  "name": "Aurora",
  "tz": "America/Chicago",
  "country": "US",
  "population": 197899
 },
 {
  "id": "5412347",
  "name": "Aurora",
  "tz": "America/Denver",
  "country": "US",
  "population": 325078
 },
 {
  "id": "4671654",
  "name": "Austin",
  "tz": "America/Chicago",
  "country": "US",
  "population": 790390
 },
 {
  "id": "1278130",
  "name": "Avadi",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 250044
 },
 {
  "id": "2348773",
  "name": "Awka",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 167738
 },
 {
  "id": "3947019",
  "name": "Ayacucho",
  "tz": "America/Lima",
  "country": "PE",
  "population": 140033
 },
 {
  "id": "322830",
  "name": "Aydin",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 163022
 },
 {
  "id": "2218970",
  "name": "Az Zawiyah",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 200000
 },
 {
  "id": "98245",
  "name": "Az Zubayr",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 122676
 },
 {
  "id": "14256",
  "name": "Azadshahr",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 514102
 },
 {
  "id": "1278083",
  "name": "Azamgarh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 116644
 },
 {
  "id": "2348595",
  "name": "Azare",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 105687
 },
 {
  "id": "3532497",
  "name": "Azcapotzalco",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 425298
 },
 {
  "id": "2505854",
  "name": "Bab Ezzouar",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 275630
 },
 {
  "id": "142363",
  "name": "Babol",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 202796
 },
 {
  "id": "630468",
  "name": "Babruysk",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 220517
 },
 {
  "id": "685948",
  "name": "Bacau",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 171396
 },
 {
  "id": "1729564",
  "name": "Bacolod City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 454898
 },
 {
  "id": "1729524",
  "name": "Bacoor",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 356974
 },
 {
  "id": "2521420",
  "name": "Badajoz",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 148334
 },
 {
  "id": "3129028",
  "name": "Badalona",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 219547
 },
 {
  "id": "1277976",
  "name": "Badlapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 104636
 },
 {
  "id": "2235189",
  "name": "Bafoussam",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 290768
 },
 {
  "id": "1277939",
  "name": "Bagaha",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 103855
 },
 {
  "id": "751324",
  "name": "Bagcilar",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 724270
 },
 {
  "id": "98182",
  "name": "Baghdad",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 5672513
 },
 {
  "id": "1147540",
  "name": "Baghlan",
  "tz": "Asia/Kabul",
  "country": "AF",
  "population": 108449
 },
 {
  "id": "1300466",
  "name": "Bago",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 244376
 },
 {
  "id": "1729085",
  "name": "Bago City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 150250
 },
 {
  "id": "1728930",
  "name": "Baguio",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 272714
 },
 {
  "id": "1277835",
  "name": "Bahadurgarh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 153613
 },
 {
  "id": "1277820",
  "name": "Baharampur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 180547
 },
 {
  "id": "1183883",
  "name": "Bahawalnagar",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 126617
 },
 {
  "id": "1332083",
  "name": "Bahawalnagar",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 126700
 },
 {
  "id": "1183880",
  "name": "Bahawalpur",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 552607
 },
 {
  "id": "7627067",
  "name": "Bahcelievler",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 576799
 },
 {
  "id": "3865086",
  "name": "Bahia Blanca",
  "tz": "America/Argentina/Buenos_Aires",
  "country": "AR",
  "population": 276546
 },
 {
  "id": "342884",
  "name": "Bahir Dar",
  "tz": "Africa/Addis_Ababa",
  "country": "ET",
  "population": 168899
 },
 {
  "id": "1277799",
  "name": "Bahraich",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 182218
 },
 {
  "id": "685826",
  "name": "Baia Mare",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 136553
 },
 {
  "id": "6697993",
  "name": "Baia Mare",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 137976
 },
 {
  "id": "2038569",
  "name": "Baicheng",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 316970
 },
 {
  "id": "64536",
  "name": "Baidoa",
  "tz": "Africa/Mogadishu",
  "country": "SO",
  "population": 129839
 },
 {
  "id": "1277780",
  "name": "Baidyabati",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 115504
 },
 {
  "id": "2038584",
  "name": "Baishan",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 183880
 },
 {
  "id": "1817240",
  "name": "Baiyin",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 188533
 },
 {
  "id": "5325738",
  "name": "Bakersfield",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 347483
 },
 {
  "id": "587084",
  "name": "Baku",
  "tz": "Asia/Baku",
  "country": "AZ",
  "population": 1116513
 },
 {
  "id": "579492",
  "name": "Balakovo",
  "tz": "Europe/Volgograd",
  "country": "RU",
  "population": 199572
 },
 {
  "id": "579464",
  "name": "Balashikha",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 150103
 },
 {
  "id": "1277599",
  "name": "Balasore",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 114321
 },
 {
  "id": "1277539",
  "name": "Bali",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 296973
 },
 {
  "id": "322165",
  "name": "Balikesir",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 238151
 },
 {
  "id": "1650527",
  "name": "Balikpapan",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 433866
 },
 {
  "id": "1727995",
  "name": "Baliuag",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 135679
 },
 {
  "id": "1147290",
  "name": "Balkh",
  "tz": "Asia/Kabul",
  "country": "AF",
  "population": 114883
 },
 {
  "id": "618605",
  "name": "Balti",
  "tz": "Europe/Chisinau",
  "country": "MD",
  "population": 125000
 },
 {
  "id": "4347778",
  "name": "Baltimore",
  "tz": "America/New_York",
  "country": "US",
  "population": 620961
 },
 {
  "id": "1277508",
  "name": "Balurghat",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 141404
 },
 {
  "id": "2347954",
  "name": "Bama",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 118121
 },
 {
  "id": "2460596",
  "name": "Bamako",
  "tz": "Africa/Bamako",
  "country": "ML",
  "population": 1297281
 },
 {
  "id": "2234974",
  "name": "Bamenda",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 393835
 },
 {
  "id": "1613769",
  "name": "Ban Rangsit",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 123382
 },
 {
  "id": "1277397",
  "name": "Banda",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 152218
 },
 {
  "id": "1215502",
  "name": "Banda Aceh",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 250757
 },
 {
  "id": "141681",
  "name": "Bandar 'Abbas",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 352173
 },
 {
  "id": "141679",
  "name": "Bandar-e Anzali",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 110826
 },
 {
  "id": "139817",
  "name": "Bandar-e Bushehr",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 165377
 },
 {
  "id": "1624917",
  "name": "Bandarlampung",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 800348
 },
 {
  "id": "751077",
  "name": "Bandirma",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 107631
 },
 {
  "id": "2317397",
  "name": "Bandundu",
  "tz": "Africa/Kinshasa",
  "country": "CD",
  "population": 118211
 },
 {
  "id": "1650357",
  "name": "Bandung",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 1699719
 },
 {
  "id": "141584",
  "name": "Baneh",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 104799
 },
 {
  "id": "1277333",
  "name": "Bangalore",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 5104047
 },
 {
  "id": "1277324",
  "name": "Bangaon",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 111693
 },
 {
  "id": "1650319",
  "name": "Bangil",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 120000
 },
 {
  "id": "1609350",
  "name": "Bangkok",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 5104476
 },
 {
  "id": "2389853",
  "name": "Bangui",
  "tz": "Africa/Bangui",
  "country": "CF",
  "population": 542393
 },
 {
  "id": "359280",
  "name": "Banha",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 167029
 },
 {
  "id": "359173",
  "name": "Bani Suwayf",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 189624
 },
 {
  "id": "3204541",
  "name": "Banja Luka",
  "tz": "Europe/Sarajevo",
  "country": "BA",
  "population": 221106
 },
 {
  "id": "1650227",
  "name": "Banjaran",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 164952
 },
 {
  "id": "1650213",
  "name": "Banjarmasin",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 572837
 },
 {
  "id": "1277264",
  "name": "Bankura",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 133966
 },
 {
  "id": "1670029",
  "name": "Banqiao",
  "tz": "Asia/Taipei",
  "country": "TW",
  "population": 543342
 },
 {
  "id": "1277240",
  "name": "Bansbaria",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 108474
 },
 {
  "id": "1650077",
  "name": "Banyuwangi",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 108166
 },
 {
  "id": "1816971",
  "name": "Baoding",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 995652
 },
 {
  "id": "2038438",
  "name": "Baoshan",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 123791
 },
 {
  "id": "2038432",
  "name": "Baotou",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 1301768
 },
 {
  "id": "97990",
  "name": "Baqubah",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 152550
 },
 {
  "id": "2505653",
  "name": "Baraki",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 105402
 },
 {
  "id": "1277100",
  "name": "Barakpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 148174
 },
 {
  "id": "1277082",
  "name": "Baranagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 260072
 },
 {
  "id": "630429",
  "name": "Baranovichi",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 168772
 },
 {
  "id": "1277065",
  "name": "Barasat",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 298127
 },
 {
  "id": "1277066",
  "name": "Barasat",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 237783
 },
 {
  "id": "3470858",
  "name": "Barbacena",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 122211
 },
 {
  "id": "3128760",
  "name": "Barcelona",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 1621537
 },
 {
  "id": "3648559",
  "name": "Barcelona",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 424795
 },
 {
  "id": "1277029",
  "name": "Barddhaman",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 301725
 },
 {
  "id": "1277013",
  "name": "Bareilly",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 745435
 },
 {
  "id": "3182351",
  "name": "Bari",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 277387
 },
 {
  "id": "3648546",
  "name": "Barinas",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 353442
 },
 {
  "id": "1336137",
  "name": "Barisal",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 202242
 },
 {
  "id": "1276895",
  "name": "Barnala",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 105016
 },
 {
  "id": "1510853",
  "name": "Barnaul",
  "tz": "Asia/Omsk",
  "country": "RU",
  "population": 599579
 },
 {
  "id": "3648522",
  "name": "Barquisimeto",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 809490
 },
 {
  "id": "3470636",
  "name": "Barra Mansa",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 164052
 },
 {
  "id": "3689169",
  "name": "Barrancabermeja",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 191403
 },
 {
  "id": "3689147",
  "name": "Barranquilla",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 1380425
 },
 {
  "id": "3470583",
  "name": "Barreiras",
  "tz": "America/Bahia",
  "country": "BR",
  "population": 158292
 },
 {
  "id": "3470451",
  "name": "Barretos",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 101220
 },
 {
  "id": "5894171",
  "name": "Barrie",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 182041
 },
 {
  "id": "1276856",
  "name": "Barsi",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 110983
 },
 {
  "id": "3470353",
  "name": "Barueri",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 251994
 },
 {
  "id": "3648439",
  "name": "Baruta",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 244216
 },
 {
  "id": "6947639",
  "name": "Basaksehir",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 193750
 },
 {
  "id": "2661604",
  "name": "Basel",
  "tz": "Europe/Zurich",
  "country": "CH",
  "population": 164488
 },
 {
  "id": "2656194",
  "name": "Basildon",
  "tz": "Europe/London",
  "country": "GB",
  "population": 101362
 },
 {
  "id": "1276736",
  "name": "Basti",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 115115
 },
 {
  "id": "295548",
  "name": "Bat Yam",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 128979
 },
 {
  "id": "2310046",
  "name": "Bata",
  "tz": "Africa/Malabo",
  "country": "GQ",
  "population": 173046
 },
 {
  "id": "1276720",
  "name": "Batala",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 145468
 },
 {
  "id": "1649881",
  "name": "Batang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 115537
 },
 {
  "id": "1726280",
  "name": "Batangas",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 237370
 },
 {
  "id": "578740",
  "name": "Bataysk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 109962
 },
 {
  "id": "442301",
  "name": "Batikent",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 300000
 },
 {
  "id": "321836",
  "name": "Batman",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 381990
 },
 {
  "id": "2505572",
  "name": "Batna",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 280798
 },
 {
  "id": "4315588",
  "name": "Baton Rouge",
  "tz": "America/Chicago",
  "country": "US",
  "population": 229493
 },
 {
  "id": "1831797",
  "name": "Battambang",
  "tz": "Asia/Phnom_Penh",
  "country": "KH",
  "population": 150444
 },
 {
  "id": "1732687",
  "name": "Batu Pahat",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 156236
 },
 {
  "id": "615532",
  "name": "Batumi",
  "tz": "Asia/Tbilisi",
  "country": "GE",
  "population": 121806
 },
 {
  "id": "1649593",
  "name": "Baturaja",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 134759
 },
 {
  "id": "2347470",
  "name": "Bauchi",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 316149
 },
 {
  "id": "3470279",
  "name": "Bauru",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 335024
 },
 {
  "id": "288764",
  "name": "Bawshar",
  "tz": "Asia/Muscat",
  "country": "OM",
  "population": 159487
 },
 {
  "id": "3567597",
  "name": "Bayamo",
  "tz": "America/Havana",
  "country": "CU",
  "population": 192632
 },
 {
  "id": "4562831",
  "name": "Bayamon",
  "tz": "America/Puerto_Rico",
  "country": "PR",
  "population": 203499
 },
 {
  "id": "4672989",
  "name": "Beaumont",
  "tz": "America/Chicago",
  "country": "US",
  "population": 118296
 },
 {
  "id": "1276634",
  "name": "Beawar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 130777
 },
 {
  "id": "2505530",
  "name": "Bechar",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 143382
 },
 {
  "id": "6690870",
  "name": "Becontree",
  "tz": "Europe/London",
  "country": "GB",
  "population": 100000
 },
 {
  "id": "295530",
  "name": "Beersheba",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 186600
 },
 {
  "id": "1276609",
  "name": "Begusarai",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 103060
 },
 {
  "id": "2038365",
  "name": "Bei'an",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 436444
 },
 {
  "id": "1816790",
  "name": "Beibei",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 112019
 },
 {
  "id": "1816705",
  "name": "Beihai",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 289568
 },
 {
  "id": "1816670",
  "name": "Beijing",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 7480601
 },
 {
  "id": "2038342",
  "name": "Beipiao",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 154999
 },
 {
  "id": "1052373",
  "name": "Beira",
  "tz": "Africa/Maputo",
  "country": "MZ",
  "population": 530604
 },
 {
  "id": "276781",
  "name": "Beirut",
  "tz": "Asia/Beirut",
  "country": "LB",
  "population": 1916100
 },
 {
  "id": "2505329",
  "name": "Bejaia",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 164103
 },
 {
  "id": "1649378",
  "name": "Bekasi",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 1520119
 },
 {
  "id": "1215412",
  "name": "Belawan",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 102707
 },
 {
  "id": "3405870",
  "name": "Belem",
  "tz": "America/Belem",
  "country": "BR",
  "population": 1407737
 },
 {
  "id": "2655984",
  "name": "Belfast",
  "tz": "Europe/London",
  "country": "GB",
  "population": 274770
 },
 {
  "id": "3470142",
  "name": "Belford Roxo",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 466096
 },
 {
  "id": "1276533",
  "name": "Belgaum",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 428720
 },
 {
  "id": "578072",
  "name": "Belgorod",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 345289
 },
 {
  "id": "792680",
  "name": "Belgrade",
  "tz": "Europe/Belgrade",
  "country": "RS",
  "population": 1273651
 },
 {
  "id": "3511550",
  "name": "Bella Vista",
  "tz": "America/Santo_Domingo",
  "country": "DO",
  "population": 175683
 },
 {
  "id": "1276509",
  "name": "Bellary",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 336681
 },
 {
  "id": "5786882",
  "name": "Bellevue",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 122363
 },
 {
  "id": "3688928",
  "name": "Bello",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 392939
 },
 {
  "id": "3470127",
  "name": "Belo Horizonte",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 2373224
 },
 {
  "id": "776251",
  "name": "Bemowo",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 102393
 },
 {
  "id": "618577",
  "name": "Bender",
  "tz": "Europe/Chisinau",
  "country": "MD",
  "population": 110175
 },
 {
  "id": "2176187",
  "name": "Bendigo",
  "tz": "Australia/Melbourne",
  "country": "AU",
  "population": 100617
 },
 {
  "id": "295514",
  "name": "Bene Beraq",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 154400
 },
 {
  "id": "1816440",
  "name": "Bengbu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 576648
 },
 {
  "id": "88319",
  "name": "Benghazi",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 650629
 },
 {
  "id": "1649150",
  "name": "Bengkulu",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 309712
 },
 {
  "id": "3351663",
  "name": "Benguela",
  "tz": "Africa/Luanda",
  "country": "AO",
  "population": 151226
 },
 {
  "id": "2555745",
  "name": "Beni Mellal",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 166399
 },
 {
  "id": "2347283",
  "name": "Benin City",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 1125058
 },
 {
  "id": "3827406",
  "name": "Benito Juarez",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 355017
 },
 {
  "id": "1020098",
  "name": "Benoni",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 605344
 },
 {
  "id": "2038300",
  "name": "Benxi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 987717
 },
 {
  "id": "1864750",
  "name": "Beppu",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 125065
 },
 {
  "id": "64435",
  "name": "Berbera",
  "tz": "Africa/Mogadishu",
  "country": "SO",
  "population": 242344
 },
 {
  "id": "712451",
  "name": "Berdyans'k",
  "tz": "Europe/Zaporozhye",
  "country": "UA",
  "population": 118284
 },
 {
  "id": "577206",
  "name": "Berezniki",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 167748
 },
 {
  "id": "3182164",
  "name": "Bergamo",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 114162
 },
 {
  "id": "7290243",
  "name": "Bergedorf",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 119665
 },
 {
  "id": "3161732",
  "name": "Bergen",
  "tz": "Europe/Oslo",
  "country": "NO",
  "population": 213585
 },
 {
  "id": "2950349",
  "name": "Bergisch Gladbach",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 106184
 },
 {
  "id": "5327684",
  "name": "Berkeley",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 112580
 },
 {
  "id": "2950159",
  "name": "Berlin",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 3426354
 },
 {
  "id": "7290254",
  "name": "Berlin Schoeneberg",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 116286
 },
 {
  "id": "2661552",
  "name": "Bern",
  "tz": "Europe/Zurich",
  "country": "CH",
  "population": 121631
 },
 {
  "id": "2234359",
  "name": "Bertoua",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 218111
 },
 {
  "id": "3033123",
  "name": "Besancon",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 128426
 },
 {
  "id": "1019760",
  "name": "Bethal",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 101919
 },
 {
  "id": "3470044",
  "name": "Betim",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 384000
 },
 {
  "id": "1276393",
  "name": "Bettiah",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 127008
 },
 {
  "id": "2655775",
  "name": "Bexley",
  "tz": "Europe/London",
  "country": "GB",
  "population": 228000
 },
 {
  "id": "6947640",
  "name": "Beylikduezue",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 122452
 },
 {
  "id": "2884161",
  "name": "Bezirk Kreuzberg",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 147532
 },
 {
  "id": "1276321",
  "name": "Bhadravati",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 163903
 },
 {
  "id": "1276320",
  "name": "Bhadreswar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 121662
 },
 {
  "id": "1276300",
  "name": "Bhagalpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 361548
 },
 {
  "id": "1185263",
  "name": "Bhairab Bazar",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 105457
 },
 {
  "id": "1276128",
  "name": "Bharatpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 229384
 },
 {
  "id": "1283613",
  "name": "Bharatpur",
  "tz": "Asia/Kathmandu",
  "country": "NP",
  "population": 107157
 },
 {
  "id": "1276100",
  "name": "Bharuch",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 153528
 },
 {
  "id": "1276070",
  "name": "Bhatinda",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 242800
 },
 {
  "id": "1276058",
  "name": "Bhatpara",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 483129
 },
 {
  "id": "1276032",
  "name": "Bhavnagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 554978
 },
 {
  "id": "1276014",
  "name": "Bhayandar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 520301
 },
 {
  "id": "1275971",
  "name": "Bhilai",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 625138
 },
 {
  "id": "1275960",
  "name": "Bhilwara",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 326431
 },
 {
  "id": "1275947",
  "name": "Bhimavaram",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 142967
 },
 {
  "id": "1182637",
  "name": "Bhimbar",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 342900
 },
 {
  "id": "1275926",
  "name": "Bhind",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 174035
 },
 {
  "id": "1019330",
  "name": "Bhisho",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 137287
 },
 {
  "id": "1275901",
  "name": "Bhiwandi",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 707035
 },
 {
  "id": "1275899",
  "name": "Bhiwani",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 190855
 },
 {
  "id": "1275841",
  "name": "Bhopal",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1599914
 },
 {
  "id": "1275817",
  "name": "Bhubaneshwar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 762243
 },
 {
  "id": "1275812",
  "name": "Bhuj",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 133459
 },
 {
  "id": "1275778",
  "name": "Bhusawal",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 183001
 },
 {
  "id": "776069",
  "name": "Bialystok",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 291855
 },
 {
  "id": "576432",
  "name": "Bibirevo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 159000
 },
 {
  "id": "2347209",
  "name": "Bida",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 171656
 },
 {
  "id": "1275738",
  "name": "Bidar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 204071
 },
 {
  "id": "776029",
  "name": "Bielany",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 134854
 },
 {
  "id": "2949186",
  "name": "Bielefeld",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 331906
 },
 {
  "id": "3103402",
  "name": "Bielsko-Biala",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 176515
 },
 {
  "id": "1587923",
  "name": "Bien Hoa",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 407208
 },
 {
  "id": "1275716",
  "name": "Bihar Sharif",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 244230
 },
 {
  "id": "1275701",
  "name": "Bijapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 271064
 },
 {
  "id": "1275665",
  "name": "Bikaner",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 576015
 },
 {
  "id": "712165",
  "name": "Bila Tserkva",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 199163
 },
 {
  "id": "1275637",
  "name": "Bilaspur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 282705
 },
 {
  "id": "3128026",
  "name": "Bilbao",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 354860
 },
 {
  "id": "358840",
  "name": "Bilbays",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 129211
 },
 {
  "id": "1275610",
  "name": "Bilimora",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 510879
 },
 {
  "id": "5640350",
  "name": "Billings",
  "tz": "America/Denver",
  "country": "US",
  "population": 104170
 },
 {
  "id": "358821",
  "name": "Bilqas",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 103596
 },
 {
  "id": "2388873",
  "name": "Bimbo",
  "tz": "Africa/Bangui",
  "country": "CF",
  "population": 129655
 },
 {
  "id": "1725094",
  "name": "Binangonan",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 219204
 },
 {
  "id": "1215355",
  "name": "Binjai",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 228763
 },
 {
  "id": "1737486",
  "name": "Bintulu",
  "tz": "Asia/Kuching",
  "country": "MY",
  "population": 151617
 },
 {
  "id": "1816336",
  "name": "Binzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 115893
 },
 {
  "id": "1283582",
  "name": "Biratnagar",
  "tz": "Asia/Kathmandu",
  "country": "NP",
  "population": 182324
 },
 {
  "id": "1283581",
  "name": "Birganj",
  "tz": "Asia/Kathmandu",
  "country": "NP",
  "population": 133238
 },
 {
  "id": "3469989",
  "name": "Birigui",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 102277
 },
 {
  "id": "140463",
  "name": "Birjand",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 196982
 },
 {
  "id": "2655603",
  "name": "Birmingham",
  "tz": "Europe/London",
  "country": "GB",
  "population": 984333
 },
 {
  "id": "4049979",
  "name": "Birmingham",
  "tz": "America/Chicago",
  "country": "US",
  "population": 212237
 },
 {
  "id": "2347059",
  "name": "Birnin Kebbi",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 108164
 },
 {
  "id": "576279",
  "name": "Biryulevo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 144000
 },
 {
  "id": "1528675",
  "name": "Bishkek",
  "tz": "Asia/Bishkek",
  "country": "KG",
  "population": 900000
 },
 {
  "id": "2503826",
  "name": "Biskra",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 307987
 },
 {
  "id": "2374775",
  "name": "Bissau",
  "tz": "Africa/Bissau",
  "country": "GW",
  "population": 388028
 },
 {
  "id": "1648636",
  "name": "Bitung",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 137364
 },
 {
  "id": "1510018",
  "name": "Biysk",
  "tz": "Asia/Omsk",
  "country": "RU",
  "population": 215430
 },
 {
  "id": "2472706",
  "name": "Bizerte",
  "tz": "Africa/Tunis",
  "country": "TN",
  "population": 115268
 },
 {
  "id": "2655524",
  "name": "Blackburn",
  "tz": "Europe/London",
  "country": "GB",
  "population": 106154
 },
 {
  "id": "2655459",
  "name": "Blackpool",
  "tz": "Europe/London",
  "country": "GB",
  "population": 143101
 },
 {
  "id": "2026609",
  "name": "Blagoveshchensk",
  "tz": "Asia/Yakutsk",
  "country": "RU",
  "population": 221296
 },
 {
  "id": "931755",
  "name": "Blantyre",
  "tz": "Africa/Blantyre",
  "country": "MW",
  "population": 584877
 },
 {
  "id": "2503769",
  "name": "Blida",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 182447
 },
 {
  "id": "1648580",
  "name": "Blitar",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 132416
 },
 {
  "id": "1018725",
  "name": "Bloemfontein",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 463064
 },
 {
  "id": "3469968",
  "name": "Blumenau",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 293949
 },
 {
  "id": "2410048",
  "name": "Bo",
  "tz": "Africa/Freetown",
  "country": "SL",
  "population": 174354
 },
 {
  "id": "3664980",
  "name": "Boa Vista",
  "tz": "America/Boa_Vista",
  "country": "BR",
  "population": 235150
 },
 {
  "id": "2362344",
  "name": "Bobo-Dioulasso",
  "tz": "Africa/Ouagadougou",
  "country": "BF",
  "population": 360106
 },
 {
  "id": "2947416",
  "name": "Bochum",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 385729
 },
 {
  "id": "6941055",
  "name": "Bochum-Hordel",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 380000
 },
 {
  "id": "1648473",
  "name": "Bogor",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 800000
 },
 {
  "id": "575505",
  "name": "Bogorodskoye",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 103000
 },
 {
  "id": "3688689",
  "name": "Bogota",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 7674366
 },
 {
  "id": "1337233",
  "name": "Bogra",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 210000
 },
 {
  "id": "2395049",
  "name": "Bohicon",
  "tz": "Africa/Porto-Novo",
  "country": "BJ",
  "population": 125092
 },
 {
  "id": "5586437",
  "name": "Boise",
  "tz": "America/Boise",
  "country": "US",
  "population": 145987
 },
 {
  "id": "140380",
  "name": "Bojnurd",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 192041
 },
 {
  "id": "1275362",
  "name": "Bokaro",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 418533
 },
 {
  "id": "1017780",
  "name": "Boksburg",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 445168
 },
 {
  "id": "3181928",
  "name": "Bologna",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 366133
 },
 {
  "id": "2655237",
  "name": "Bolton",
  "tz": "Europe/London",
  "country": "GB",
  "population": 141331
 },
 {
  "id": "2946447",
  "name": "Bonn",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 313125
 },
 {
  "id": "1648186",
  "name": "Bontang",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 101691
 },
 {
  "id": "3031582",
  "name": "Bordeaux",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 231844
 },
 {
  "id": "2503701",
  "name": "Bordj Bou Arreridj",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 168346
 },
 {
  "id": "2503661",
  "name": "Bordj el Kiffan",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 123246
 },
 {
  "id": "1275248",
  "name": "Borivli",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 609617
 },
 {
  "id": "5110266",
  "name": "Borough of Bronx",
  "tz": "America/New_York",
  "country": "US",
  "population": 1385108
 },
 {
  "id": "5133273",
  "name": "Borough of Queens",
  "tz": "America/New_York",
  "country": "US",
  "population": 2272771
 },
 {
  "id": "140044",
  "name": "Borujerd",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 251958
 },
 {
  "id": "1816265",
  "name": "Boshan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 153596
 },
 {
  "id": "4930956",
  "name": "Boston",
  "tz": "America/New_York",
  "country": "US",
  "population": 617594
 },
 {
  "id": "1275218",
  "name": "Botad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 117053
 },
 {
  "id": "684039",
  "name": "Botosani",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 114783
 },
 {
  "id": "1016670",
  "name": "Botshabelo",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 309714
 },
 {
  "id": "2945756",
  "name": "Bottrop",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 119909
 },
 {
  "id": "3469136",
  "name": "Botucatu",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 113862
 },
 {
  "id": "2290956",
  "name": "Bouake",
  "tz": "Africa/Abidjan",
  "country": "CI",
  "population": 567481
 },
 {
  "id": "3031137",
  "name": "Boulogne-Billancourt",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 108782
 },
 {
  "id": "2474141",
  "name": "Boumerdas",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 786499
 },
 {
  "id": "2655095",
  "name": "Bournemouth",
  "tz": "Europe/London",
  "country": "GB",
  "population": 163600
 },
 {
  "id": "6956647",
  "name": "Boyeros",
  "tz": "America/Havana",
  "country": "CU",
  "population": 188593
 },
 {
  "id": "1816234",
  "name": "Bozhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 174140
 },
 {
  "id": "2654993",
  "name": "Bradford",
  "tz": "Europe/London",
  "country": "GB",
  "population": 299310
 },
 {
  "id": "2742032",
  "name": "Braga",
  "tz": "Europe/Lisbon",
  "country": "PT",
  "population": 121394
 },
 {
  "id": "3469092",
  "name": "Braganca Paulista",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 125096
 },
 {
  "id": "1275198",
  "name": "Brahmapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 324726
 },
 {
  "id": "683902",
  "name": "Braila",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 213569
 },
 {
  "id": "1016181",
  "name": "Brakpan",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 305692
 },
 {
  "id": "5907364",
  "name": "Brampton",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 433806
 },
 {
  "id": "4148757",
  "name": "Brandon",
  "tz": "America/New_York",
  "country": "US",
  "population": 103483
 },
 {
  "id": "3469058",
  "name": "Brasilia",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 2207718
 },
 {
  "id": "683844",
  "name": "Brasov",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 276088
 },
 {
  "id": "571741",
  "name": "Brateyevo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 102000
 },
 {
  "id": "3060972",
  "name": "Bratislava",
  "tz": "Europe/Bratislava",
  "country": "SK",
  "population": 423737
 },
 {
  "id": "2051523",
  "name": "Bratsk",
  "tz": "Asia/Irkutsk",
  "country": "RU",
  "population": 256600
 },
 {
  "id": "2945024",
  "name": "Braunschweig",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 244715
 },
 {
  "id": "2260535",
  "name": "Brazzaville",
  "tz": "Africa/Brazzaville",
  "country": "CG",
  "population": 1284609
 },
 {
  "id": "2758401",
  "name": "Breda",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 167673
 },
 {
  "id": "2944388",
  "name": "Bremen",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 546501
 },
 {
  "id": "2944368",
  "name": "Bremerhaven",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 117446
 },
 {
  "id": "3181554",
  "name": "Brescia",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 184826
 },
 {
  "id": "629634",
  "name": "Brest",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 300715
 },
 {
  "id": "3030300",
  "name": "Brest",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 144899
 },
 {
  "id": "5282804",
  "name": "Bridgeport",
  "tz": "America/New_York",
  "country": "US",
  "population": 144229
 },
 {
  "id": "2654710",
  "name": "Brighton",
  "tz": "Europe/London",
  "country": "GB",
  "population": 139001
 },
 {
  "id": "2174003",
  "name": "Brisbane",
  "tz": "Australia/Brisbane",
  "country": "AU",
  "population": 2189878
 },
 {
  "id": "2654675",
  "name": "Bristol",
  "tz": "Europe/London",
  "country": "GB",
  "population": 430713
 },
 {
  "id": "1015621",
  "name": "Brits",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 122497
 },
 {
  "id": "3078610",
  "name": "Brno",
  "tz": "Europe/Prague",
  "country": "CZ",
  "population": 369559
 },
 {
  "id": "5110302",
  "name": "Brooklyn",
  "tz": "America/New_York",
  "country": "US",
  "population": 2300664
 },
 {
  "id": "4676740",
  "name": "Brownsville",
  "tz": "America/Chicago",
  "country": "US",
  "population": 175023
 },
 {
  "id": "2800931",
  "name": "Brugge",
  "tz": "Europe/Brussels",
  "country": "BE",
  "population": 116709
 },
 {
  "id": "2800866",
  "name": "Brussels",
  "tz": "Europe/Brussels",
  "country": "BE",
  "population": 1019022
 },
 {
  "id": "571476",
  "name": "Bryansk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 427236
 },
 {
  "id": "3688465",
  "name": "Bucaramanga",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 571820
 },
 {
  "id": "683506",
  "name": "Bucharest",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 1877155
 },
 {
  "id": "1838716",
  "name": "Bucheon-si",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 850731
 },
 {
  "id": "3054643",
  "name": "Budapest",
  "tz": "Europe/Budapest",
  "country": "HU",
  "population": 1741041
 },
 {
  "id": "7284842",
  "name": "Budapest III. keruelet",
  "tz": "Europe/Budapest",
  "country": "HU",
  "population": 123723
 },
 {
  "id": "7284824",
  "name": "Budapest XI. keruelet",
  "tz": "Europe/Budapest",
  "country": "HU",
  "population": 139049
 },
 {
  "id": "7284830",
  "name": "Budapest XIII. keruelet",
  "tz": "Europe/Budapest",
  "country": "HU",
  "population": 113531
 },
 {
  "id": "7284829",
  "name": "Budapest XIV. keruelet",
  "tz": "Europe/Budapest",
  "country": "HU",
  "population": 120148
 },
 {
  "id": "1275163",
  "name": "Budaun",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 161555
 },
 {
  "id": "1723510",
  "name": "Budta",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 1273715
 },
 {
  "id": "3688451",
  "name": "Buenaventura",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 240387
 },
 {
  "id": "3827606",
  "name": "Buenavista",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 206081
 },
 {
  "id": "3435910",
  "name": "Buenos Aires",
  "tz": "America/Argentina/Buenos_Aires",
  "country": "AR",
  "population": 13076300
 },
 {
  "id": "6947641",
  "name": "Bueyuekcekmece",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 163140
 },
 {
  "id": "5110629",
  "name": "Buffalo",
  "tz": "America/New_York",
  "country": "US",
  "population": 261310
 },
 {
  "id": "3688256",
  "name": "Buga",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 118004
 },
 {
  "id": "2346615",
  "name": "Buguma",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 135404
 },
 {
  "id": "1816221",
  "name": "Buhe",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 106347
 },
 {
  "id": "425378",
  "name": "Bujumbura",
  "tz": "Africa/Bujumbura",
  "country": "BI",
  "population": 331700
 },
 {
  "id": "139889",
  "name": "Bukan",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 213331
 },
 {
  "id": "217831",
  "name": "Bukavu",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 225389
 },
 {
  "id": "1217662",
  "name": "Bukhara",
  "tz": "Asia/Samarkand",
  "country": "UZ",
  "population": 247644
 },
 {
  "id": "1735079",
  "name": "Bukit Mertajam",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 212329
 },
 {
  "id": "1275120",
  "name": "Bulandshahr",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 198612
 },
 {
  "id": "1722930",
  "name": "Bulaon",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 131818
 },
 {
  "id": "894701",
  "name": "Bulawayo",
  "tz": "Africa/Harare",
  "country": "ZW",
  "population": 699385
 },
 {
  "id": "1586896",
  "name": "Buon Ma Thuot",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 146975
 },
 {
  "id": "107304",
  "name": "Buraydah",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 391336
 },
 {
  "id": "5331835",
  "name": "Burbank",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 103340
 },
 {
  "id": "1182092",
  "name": "Burewala",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 183915
 },
 {
  "id": "732770",
  "name": "Burgas",
  "tz": "Europe/Sofia",
  "country": "BG",
  "population": 195966
 },
 {
  "id": "3127461",
  "name": "Burgos",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 178966
 },
 {
  "id": "1275068",
  "name": "Burhanpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 202695
 },
 {
  "id": "5911592",
  "name": "Burlington",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 164415
 },
 {
  "id": "5911606",
  "name": "Burnaby",
  "tz": "America/Vancouver",
  "country": "CA",
  "population": 202799
 },
 {
  "id": "750269",
  "name": "Bursa",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 1412701
 },
 {
  "id": "1838524",
  "name": "Busan",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 3678555
 },
 {
  "id": "217562",
  "name": "Butembo",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 154621
 },
 {
  "id": "1735076",
  "name": "Butterworth",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 107591
 },
 {
  "id": "1722186",
  "name": "Butuan",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 309709
 },
 {
  "id": "683123",
  "name": "Buzau",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 130954
 },
 {
  "id": "3102014",
  "name": "Bydgoszcz",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 366452
 },
 {
  "id": "3101950",
  "name": "Bytom",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 189186
 },
 {
  "id": "1586443",
  "name": "Ca Mau",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 111894
 },
 {
  "id": "1721906",
  "name": "Cabanatuan City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 220250
 },
 {
  "id": "3647651",
  "name": "Cabimas",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 200818
 },
 {
  "id": "3404545",
  "name": "Cabo",
  "tz": "America/Recife",
  "country": "BR",
  "population": 143105
 },
 {
  "id": "3468615",
  "name": "Cabo Frio",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 108239
 },
 {
  "id": "792078",
  "name": "Cacak",
  "tz": "Europe/Belgrade",
  "country": "RS",
  "population": 117072
 },
 {
  "id": "3468403",
  "name": "Cachoeirinha",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 121084
 },
 {
  "id": "3468376",
  "name": "Cachoeiro de Itapemirim",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 187019
 },
 {
  "id": "2520600",
  "name": "Cadiz",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 126766
 },
 {
  "id": "1721168",
  "name": "Cadiz",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 129053
 },
 {
  "id": "3029241",
  "name": "Caen",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 110624
 },
 {
  "id": "1721080",
  "name": "Cagayan de Oro",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 445103
 },
 {
  "id": "2525473",
  "name": "Cagliari",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 149257
 },
 {
  "id": "3647549",
  "name": "Cagua",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 119033
 },
 {
  "id": "1720840",
  "name": "Cainta",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 283172
 },
 {
  "id": "2172797",
  "name": "Cairns",
  "tz": "Australia/Brisbane",
  "country": "AU",
  "population": 153075
 },
 {
  "id": "360630",
  "name": "Cairo",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 7734614
 },
 {
  "id": "3699088",
  "name": "Cajamarca",
  "tz": "America/Lima",
  "country": "PE",
  "population": 135000
 },
 {
  "id": "2346229",
  "name": "Calabar",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 461796
 },
 {
  "id": "3647444",
  "name": "Calabozo",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 117132
 },
 {
  "id": "3897347",
  "name": "Calama",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 143084
 },
 {
  "id": "1720681",
  "name": "Calamba",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 316612
 },
 {
  "id": "5913490",
  "name": "Calgary",
  "tz": "America/Edmonton",
  "country": "CA",
  "population": 1019942
 },
 {
  "id": "3687925",
  "name": "Cali",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 2392877
 },
 {
  "id": "3946083",
  "name": "Callao",
  "tz": "America/Lima",
  "country": "PE",
  "population": 813264
 },
 {
  "id": "1586357",
  "name": "Cam Pha Mines",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 135477
 },
 {
  "id": "1586350",
  "name": "Cam Ranh",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 146771
 },
 {
  "id": "3468031",
  "name": "Camacari",
  "tz": "America/Bahia",
  "country": "BR",
  "population": 188758
 },
 {
  "id": "3566067",
  "name": "Camaguey",
  "tz": "America/Havana",
  "country": "CU",
  "population": 347562
 },
 {
  "id": "2422488",
  "name": "Camayenne",
  "tz": "Africa/Conakry",
  "country": "GN",
  "population": 1871242
 },
 {
  "id": "5913695",
  "name": "Cambridge",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 120372
 },
 {
  "id": "2653941",
  "name": "Cambridge",
  "tz": "Europe/London",
  "country": "GB",
  "population": 128488
 },
 {
  "id": "4931972",
  "name": "Cambridge",
  "tz": "America/New_York",
  "country": "US",
  "population": 105162
 },
 {
  "id": "3531732",
  "name": "Campeche",
  "tz": "America/Merida",
  "country": "MX",
  "population": 205212
 },
 {
  "id": "3403642",
  "name": "Campina Grande",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 348936
 },
 {
  "id": "3467865",
  "name": "Campinas",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 1031554
 },
 {
  "id": "3467747",
  "name": "Campo Grande",
  "tz": "America/Campo_Grande",
  "country": "BR",
  "population": 729151
 },
 {
  "id": "3467693",
  "name": "Campos",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 387417
 },
 {
  "id": "1586296",
  "name": "Can Duoc",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 152200
 },
 {
  "id": "1586203",
  "name": "Can Tho",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 259598
 },
 {
  "id": "2172517",
  "name": "Canberra",
  "tz": "Australia/Sydney",
  "country": "AU",
  "population": 367752
 },
 {
  "id": "3531673",
  "name": "Cancun",
  "tz": "America/Cancun",
  "country": "MX",
  "population": 542043
 },
 {
  "id": "1816080",
  "name": "Cangzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 527681
 },
 {
  "id": "6955677",
  "name": "Cankaya",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 792189
 },
 {
  "id": "3467467",
  "name": "Canoas",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 328291
 },
 {
  "id": "3728474",
  "name": "Cap-Haitien",
  "tz": "America/Port-au-Prince",
  "country": "HT",
  "population": 134815
 },
 {
  "id": "2302357",
  "name": "Cape Coast",
  "tz": "Africa/Accra",
  "country": "GH",
  "population": 143015
 },
 {
  "id": "4149962",
  "name": "Cape Coral",
  "tz": "America/New_York",
  "country": "US",
  "population": 154305
 },
 {
  "id": "3369157",
  "name": "Cape Town",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 3433441
 },
 {
  "id": "3439214",
  "name": "Capiata",
  "tz": "America/Asuncion",
  "country": "PY",
  "population": 198553
 },
 {
  "id": "6544493",
  "name": "Carabanchel",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 253678
 },
 {
  "id": "3646738",
  "name": "Caracas",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 3000000
 },
 {
  "id": "3466998",
  "name": "Carapicuiba",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 361112
 },
 {
  "id": "2653822",
  "name": "Cardiff",
  "tz": "Europe/London",
  "country": "GB",
  "population": 302139
 },
 {
  "id": "1014073",
  "name": "Carletonville",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 182304
 },
 {
  "id": "5334223",
  "name": "Carlsbad",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 105328
 },
 {
  "id": "4563243",
  "name": "Carolina",
  "tz": "America/Puerto_Rico",
  "country": "PR",
  "population": 170404
 },
 {
  "id": "3728338",
  "name": "Carrefour",
  "tz": "America/Port-au-Prince",
  "country": "HT",
  "population": 442156
 },
 {
  "id": "4679195",
  "name": "Carrollton",
  "tz": "America/Chicago",
  "country": "US",
  "population": 119097
 },
 {
  "id": "3687238",
  "name": "Cartagena",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 952024
 },
 {
  "id": "2520058",
  "name": "Cartagena",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 211996
 },
 {
  "id": "3687230",
  "name": "Cartago",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 134827
 },
 {
  "id": "3402655",
  "name": "Caruaru",
  "tz": "America/Recife",
  "country": "BR",
  "population": 235371
 },
 {
  "id": "3646382",
  "name": "Carupano",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 112082
 },
 {
  "id": "4459467",
  "name": "Cary",
  "tz": "America/New_York",
  "country": "US",
  "population": 135234
 },
 {
  "id": "2553604",
  "name": "Casablanca",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 3144909
 },
 {
  "id": "3466779",
  "name": "Cascavel",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 257172
 },
 {
  "id": "3402591",
  "name": "Castanhal",
  "tz": "America/Belem",
  "country": "BR",
  "population": 137406
 },
 {
  "id": "2519752",
  "name": "Castello de la Plana",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 180005
 },
 {
  "id": "3466692",
  "name": "Catanduva",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 109612
 },
 {
  "id": "2525068",
  "name": "Catania",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 290927
 },
 {
  "id": "3646190",
  "name": "Catia La Mar",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 106822
 },
 {
  "id": "3402429",
  "name": "Caucaia",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 275019
 },
 {
  "id": "1717641",
  "name": "Cavite City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 115932
 },
 {
  "id": "3402383",
  "name": "Caxias",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 148072
 },
 {
  "id": "3466537",
  "name": "Caxias do Sul",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 381270
 },
 {
  "id": "1717512",
  "name": "Cebu City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 798634
 },
 {
  "id": "4850751",
  "name": "Cedar Rapids",
  "tz": "America/Chicago",
  "country": "US",
  "population": 126326
 },
 {
  "id": "4014875",
  "name": "Celaya",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 305901
 },
 {
  "id": "5416541",
  "name": "Centennial",
  "tz": "America/Denver",
  "country": "US",
  "population": 100377
 },
 {
  "id": "8504960",
  "name": "Centralniy",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 214625
 },
 {
  "id": "3746183",
  "name": "Centro Habana",
  "tz": "America/Havana",
  "country": "CU",
  "population": 158151
 },
 {
  "id": "1105777",
  "name": "Centurion",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 233386
 },
 {
  "id": "8555643",
  "name": "Cergy-Pontoise",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 183430
 },
 {
  "id": "3564436",
  "name": "Cerro",
  "tz": "America/Havana",
  "country": "CU",
  "population": 132351
 },
 {
  "id": "G0",
  "name": "CET - Central European Time",
  "tz": "CET",
  "country": null,
  "population": null
 },
 {
  "id": "1181636",
  "name": "Chakwal",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 101200
 },
 {
  "id": "3531200",
  "name": "Chalco de Diaz Covarrubias",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 163996
 },
 {
  "id": "3125239",
  "name": "Chamartin",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 140000
 },
 {
  "id": "6544492",
  "name": "Chamberi",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 145934
 },
 {
  "id": "1274784",
  "name": "Chandannagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 180623
 },
 {
  "id": "1274767",
  "name": "Chandausi",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 112635
 },
 {
  "id": "1274746",
  "name": "Chandigarh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 960787
 },
 {
  "id": "5289282",
  "name": "Chandler",
  "tz": "America/Phoenix",
  "country": "US",
  "population": 236123
 },
 {
  "id": "1274693",
  "name": "Chandrapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 328351
 },
 {
  "id": "2038180",
  "name": "Changchun",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 2537421
 },
 {
  "id": "1791121",
  "name": "Changde",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 517780
 },
 {
  "id": "1815577",
  "name": "Changsha",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 2073938
 },
 {
  "id": "7283386",
  "name": "Changshu City",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1047700
 },
 {
  "id": "1846326",
  "name": "Changwon",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 550000
 },
 {
  "id": "1815463",
  "name": "Changzhi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 699514
 },
 {
  "id": "1815456",
  "name": "Changzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 949018
 },
 {
  "id": "1815427",
  "name": "Chaohu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 138463
 },
 {
  "id": "2038120",
  "name": "Chaoyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 410005
 },
 {
  "id": "1815395",
  "name": "Chaozhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 424787
 },
 {
  "id": "3466296",
  "name": "Chapeco",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 160157
 },
 {
  "id": "3645854",
  "name": "Charallave",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 129182
 },
 {
  "id": "2800481",
  "name": "Charleroi",
  "tz": "Europe/Brussels",
  "country": "BE",
  "population": 200132
 },
 {
  "id": "4574324",
  "name": "Charleston",
  "tz": "America/New_York",
  "country": "US",
  "population": 120083
 },
 {
  "id": "4460243",
  "name": "Charlotte",
  "tz": "America/New_York",
  "country": "US",
  "population": 731424
 },
 {
  "id": "2940187",
  "name": "Charlottenburg Bezirk",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 119857
 },
 {
  "id": "1274553",
  "name": "Chas",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 112141
 },
 {
  "id": "4612862",
  "name": "Chattanooga",
  "tz": "America/New_York",
  "country": "US",
  "population": 167674
 },
 {
  "id": "569696",
  "name": "Cheboksary",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 446781
 },
 {
  "id": "2653266",
  "name": "Chelmsford",
  "tz": "Europe/London",
  "country": "GB",
  "population": 102671
 },
 {
  "id": "2653261",
  "name": "Cheltenham",
  "tz": "Europe/London",
  "country": "GB",
  "population": 103249
 },
 {
  "id": "1508291",
  "name": "Chelyabinsk",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 1062919
 },
 {
  "id": "2940132",
  "name": "Chemnitz",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 247220
 },
 {
  "id": "2038087",
  "name": "Chengde",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 449325
 },
 {
  "id": "1815286",
  "name": "Chengdu",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 3950437
 },
 {
  "id": "1815302",
  "name": "Chenghua",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 152453
 },
 {
  "id": "1815251",
  "name": "Chengjiang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 107918
 },
 {
  "id": "1786640",
  "name": "Chengzhong",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 265886
 },
 {
  "id": "1264527",
  "name": "Chennai",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 4328063
 },
 {
  "id": "1815059",
  "name": "Chenzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 179038
 },
 {
  "id": "1845759",
  "name": "Cheonan",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 365114
 },
 {
  "id": "1845604",
  "name": "Cheongju-si",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 634596
 },
 {
  "id": "569273",
  "name": "Cheremushki",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 101000
 },
 {
  "id": "569223",
  "name": "Cherepovets",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 315738
 },
 {
  "id": "710791",
  "name": "Cherkasy",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 297568
 },
 {
  "id": "569154",
  "name": "Cherkessk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 116224
 },
 {
  "id": "710735",
  "name": "Chernihiv",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 307684
 },
 {
  "id": "710719",
  "name": "Chernivtsi",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 236250
 },
 {
  "id": "6418146",
  "name": "Chertanovo Yuzhnoye",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 142000
 },
 {
  "id": "4752186",
  "name": "Chesapeake",
  "tz": "America/New_York",
  "country": "US",
  "population": 222209
 },
 {
  "id": "3531023",
  "name": "Chetumal",
  "tz": "America/Cancun",
  "country": "MX",
  "population": 134412
 },
 {
  "id": "1274353",
  "name": "Chhapra",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 201597
 },
 {
  "id": "1274337",
  "name": "Chhatarpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 111594
 },
 {
  "id": "1274304",
  "name": "Chhindwara",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 134847
 },
 {
  "id": "1153671",
  "name": "Chiang Mai",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 200952
 },
 {
  "id": "2113015",
  "name": "Chiba",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 919729
 },
 {
  "id": "4887398",
  "name": "Chicago",
  "tz": "America/Chicago",
  "country": "US",
  "population": 2695598
 },
 {
  "id": "3698350",
  "name": "Chiclayo",
  "tz": "America/Lima",
  "country": "PE",
  "population": 577375
 },
 {
  "id": "2038067",
  "name": "Chifeng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 346654
 },
 {
  "id": "1864624",
  "name": "Chigasaki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 231657
 },
 {
  "id": "4014338",
  "name": "Chihuahua",
  "tz": "America/Chihuahua",
  "country": "MX",
  "population": 809232
 },
 {
  "id": "1274220",
  "name": "Chikmagalur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 121484
 },
 {
  "id": "1864572",
  "name": "Chikushino-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 100353
 },
 {
  "id": "3895088",
  "name": "Chillan",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 150396
 },
 {
  "id": "3530870",
  "name": "Chilpancingo de los Bravos",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 165250
 },
 {
  "id": "3698304",
  "name": "Chimbote",
  "tz": "America/Lima",
  "country": "PE",
  "population": 316966
 },
 {
  "id": "1049261",
  "name": "Chimoio",
  "tz": "Africa/Maputo",
  "country": "MZ",
  "population": 256936
 },
 {
  "id": "3620381",
  "name": "Chinandega",
  "tz": "America/Managua",
  "country": "NI",
  "population": 126387
 },
 {
  "id": "3943789",
  "name": "Chincha Alta",
  "tz": "America/Lima",
  "country": "PE",
  "population": 153076
 },
 {
  "id": "919009",
  "name": "Chingola",
  "tz": "Africa/Lusaka",
  "country": "ZM",
  "population": 148564
 },
 {
  "id": "1181096",
  "name": "Chiniot",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 201781
 },
 {
  "id": "1846052",
  "name": "Chinju",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 307242
 },
 {
  "id": "1514210",
  "name": "Chirchiq",
  "tz": "Asia/Tashkent",
  "country": "UZ",
  "population": 167842
 },
 {
  "id": "1181073",
  "name": "Chishtian Mandi",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 122199
 },
 {
  "id": "618426",
  "name": "Chisinau",
  "tz": "Europe/Chisinau",
  "country": "MD",
  "population": 635994
 },
 {
  "id": "2025339",
  "name": "Chita",
  "tz": "Asia/Yakutsk",
  "country": "RU",
  "population": 308500
 },
 {
  "id": "1274056",
  "name": "Chitradurga",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 138587
 },
 {
  "id": "1205733",
  "name": "Chittagong",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 3920222
 },
 {
  "id": "1274040",
  "name": "Chittaurgarh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 106710
 },
 {
  "id": "1106542",
  "name": "Chitungwiza",
  "tz": "Africa/Harare",
  "country": "ZW",
  "population": 340360
 },
 {
  "id": "1814934",
  "name": "Chizhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 148375
 },
 {
  "id": "2498611",
  "name": "Chlef",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 178616
 },
 {
  "id": "1864518",
  "name": "Chofugaoka",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 212977
 },
 {
  "id": "3613533",
  "name": "Choloma",
  "tz": "America/Tegucigalpa",
  "country": "HN",
  "population": 139100
 },
 {
  "id": "3530757",
  "name": "Cholula",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 151667
 },
 {
  "id": "1611110",
  "name": "Chon Buri",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 219164
 },
 {
  "id": "2044757",
  "name": "Chongjin",
  "tz": "Asia/Pyongyang",
  "country": "KP",
  "population": 327000
 },
 {
  "id": "1814906",
  "name": "Chongqing",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 3967028
 },
 {
  "id": "3101619",
  "name": "Chorzow",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 113430
 },
 {
  "id": "2192362",
  "name": "Christchurch",
  "tz": "Pacific/Auckland",
  "country": "NZ",
  "population": 363926
 },
 {
  "id": "5336899",
  "name": "Chula Vista",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 243916
 },
 {
  "id": "1845136",
  "name": "Chuncheon",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 209746
 },
 {
  "id": "1273892",
  "name": "Churu",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 103533
 },
 {
  "id": "1814757",
  "name": "Chuzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 280582
 },
 {
  "id": "1647149",
  "name": "Ciamis",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 123637
 },
 {
  "id": "1647383",
  "name": "Ciampea",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 207212
 },
 {
  "id": "1647003",
  "name": "Cibinong",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 188663
 },
 {
  "id": "3564178",
  "name": "Ciego de Avila",
  "tz": "America/Havana",
  "country": "CU",
  "population": 142027
 },
 {
  "id": "3564124",
  "name": "Cienfuegos",
  "tz": "America/Havana",
  "country": "CU",
  "population": 186644
 },
 {
  "id": "1646698",
  "name": "Cikampek",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 145620
 },
 {
  "id": "1646678",
  "name": "Cikarang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 106479
 },
 {
  "id": "1985663",
  "name": "Cikupa",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 174041
 },
 {
  "id": "1646494",
  "name": "Cileungsir",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 202190
 },
 {
  "id": "1646492",
  "name": "Cileunyi",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 111476
 },
 {
  "id": "1646448",
  "name": "Cimahi",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 493698
 },
 {
  "id": "4508722",
  "name": "Cincinnati",
  "tz": "America/New_York",
  "country": "US",
  "population": 296943
 },
 {
  "id": "1646194",
  "name": "Ciputat",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 207858
 },
 {
  "id": "1646170",
  "name": "Cirebon",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 254298
 },
 {
  "id": "1646034",
  "name": "Citeureup",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 110155
 },
 {
  "id": "6544494",
  "name": "City Center",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 149718
 },
 {
  "id": "8224624",
  "name": "City of Balikpapan",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 700000
 },
 {
  "id": "2643741",
  "name": "City of London",
  "tz": "Europe/London",
  "country": "GB",
  "population": 7556900
 },
 {
  "id": "4013728",
  "name": "Ciudad Acuna",
  "tz": "America/Matamoros",
  "country": "MX",
  "population": 144669
 },
 {
  "id": "3645532",
  "name": "Ciudad Bolivar",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 338000
 },
 {
  "id": "3980194",
  "name": "Ciudad de Villa de Alvarez",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 117600
 },
 {
  "id": "3530599",
  "name": "Ciudad del Carmen",
  "tz": "America/Merida",
  "country": "MX",
  "population": 141308
 },
 {
  "id": "3439101",
  "name": "Ciudad del Este",
  "tz": "America/Asuncion",
  "country": "PY",
  "population": 320782
 },
 {
  "id": "4013720",
  "name": "Ciudad Delicias",
  "tz": "America/Chihuahua",
  "country": "MX",
  "population": 102969
 },
 {
  "id": "3645528",
  "name": "Ciudad Guayana",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 746535
 },
 {
  "id": "4013714",
  "name": "Ciudad Guzman",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 101010
 },
 {
  "id": "4013708",
  "name": "Ciudad Juarez",
  "tz": "America/Ojinaga",
  "country": "MX",
  "population": 1512354
 },
 {
  "id": "3124964",
  "name": "Ciudad Lineal",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 228171
 },
 {
  "id": "3532624",
  "name": "Ciudad Lopez Mateos",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 521034
 },
 {
  "id": "3530594",
  "name": "Ciudad Madero",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 192736
 },
 {
  "id": "3530589",
  "name": "Ciudad Nezahualcoyotl",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 1232220
 },
 {
  "id": "4013704",
  "name": "Ciudad Obregon",
  "tz": "America/Hermosillo",
  "country": "MX",
  "population": 258162
 },
 {
  "id": "3530582",
  "name": "Ciudad Valles",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 109504
 },
 {
  "id": "3530580",
  "name": "Ciudad Victoria",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 269923
 },
 {
  "id": "6544106",
  "name": "Ciutat Vella",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 111290
 },
 {
  "id": "4613868",
  "name": "Clarksville",
  "tz": "America/Chicago",
  "country": "US",
  "population": 132929
 },
 {
  "id": "4151316",
  "name": "Clearwater",
  "tz": "America/New_York",
  "country": "US",
  "population": 107685
 },
 {
  "id": "3024635",
  "name": "Clermont-Ferrand",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 138681
 },
 {
  "id": "5150529",
  "name": "Cleveland",
  "tz": "America/New_York",
  "country": "US",
  "population": 396815
 },
 {
  "id": "681290",
  "name": "Cluj-Napoca",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 316748
 },
 {
  "id": "3530569",
  "name": "Coacalco",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 313405
 },
 {
  "id": "3530517",
  "name": "Coatzacoalcos",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 230717
 },
 {
  "id": "3919968",
  "name": "Cochabamba",
  "tz": "America/La_Paz",
  "country": "BO",
  "population": 900414
 },
 {
  "id": "1273874",
  "name": "Cochin",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 604696
 },
 {
  "id": "1273865",
  "name": "Coimbatore",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 959823
 },
 {
  "id": "2740637",
  "name": "Coimbra",
  "tz": "Europe/Lisbon",
  "country": "PT",
  "population": 106582
 },
 {
  "id": "3465944",
  "name": "Colatina",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 101190
 },
 {
  "id": "2652618",
  "name": "Colchester",
  "tz": "Europe/London",
  "country": "GB",
  "population": 109414
 },
 {
  "id": "4013516",
  "name": "Colima",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 127235
 },
 {
  "id": "3465927",
  "name": "Colombo",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 217000
 },
 {
  "id": "1248991",
  "name": "Colombo",
  "tz": "Asia/Colombo",
  "country": "LK",
  "population": 648034
 },
 {
  "id": "7280708",
  "name": "Colonia del Valle",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 250000
 },
 {
  "id": "7280711",
  "name": "Colonia Lindavista",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 100000
 },
 {
  "id": "5417598",
  "name": "Colorado Springs",
  "tz": "America/Denver",
  "country": "US",
  "population": 416427
 },
 {
  "id": "4381982",
  "name": "Columbia",
  "tz": "America/Chicago",
  "country": "US",
  "population": 108500
 },
 {
  "id": "4575352",
  "name": "Columbia",
  "tz": "America/New_York",
  "country": "US",
  "population": 129272
 },
 {
  "id": "4188985",
  "name": "Columbus",
  "tz": "America/New_York",
  "country": "US",
  "population": 189885
 },
 {
  "id": "4509177",
  "name": "Columbus",
  "tz": "America/New_York",
  "country": "US",
  "population": 787033
 },
 {
  "id": "1185186",
  "name": "Comilla",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 389411
 },
 {
  "id": "3860443",
  "name": "Comodoro Rivadavia",
  "tz": "America/Argentina/Catamarca",
  "country": "AR",
  "population": 140850
 },
 {
  "id": "2422465",
  "name": "Conakry",
  "tz": "Africa/Conakry",
  "country": "GN",
  "population": 1767200
 },
 {
  "id": "3893894",
  "name": "Concepcion",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 215413
 },
 {
  "id": "3509382",
  "name": "Concepcion de La Vega",
  "tz": "America/Santo_Domingo",
  "country": "DO",
  "population": 102426
 },
 {
  "id": "5339111",
  "name": "Concord",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 122067
 },
 {
  "id": "3435261",
  "name": "Concordia",
  "tz": "America/Argentina/Cordoba",
  "country": "AR",
  "population": 145210
 },
 {
  "id": "3465644",
  "name": "Conselheiro Lafaiete",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 111596
 },
 {
  "id": "680963",
  "name": "Constanta",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 303399
 },
 {
  "id": "2501152",
  "name": "Constantine",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 450097
 },
 {
  "id": "3465624",
  "name": "Contagem",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 627123
 },
 {
  "id": "2618425",
  "name": "Copenhagen",
  "tz": "Europe/Copenhagen",
  "country": "DK",
  "population": 1153615
 },
 {
  "id": "3893656",
  "name": "Copiapo",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 129280
 },
 {
  "id": "3893629",
  "name": "Coquimbo",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 161317
 },
 {
  "id": "5927689",
  "name": "Coquitlam",
  "tz": "America/Vancouver",
  "country": "CA",
  "population": 114565
 },
 {
  "id": "4151909",
  "name": "Coral Springs",
  "tz": "America/New_York",
  "country": "US",
  "population": 121096
 },
 {
  "id": "3860259",
  "name": "Cordoba",
  "tz": "America/Argentina/Cordoba",
  "country": "AR",
  "population": 1428214
 },
 {
  "id": "2519240",
  "name": "Cordoba",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 328428
 },
 {
  "id": "3530240",
  "name": "Cordoba",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 134403
 },
 {
  "id": "2965140",
  "name": "Cork",
  "tz": "Europe/Dublin",
  "country": "IE",
  "population": 190384
 },
 {
  "id": "748893",
  "name": "Corlu",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 202578
 },
 {
  "id": "3645213",
  "name": "Coro",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 195227
 },
 {
  "id": "5339631",
  "name": "Corona",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 152374
 },
 {
  "id": "3465476",
  "name": "Coronel Fabriciano",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 100916
 },
 {
  "id": "4683416",
  "name": "Corpus Christi",
  "tz": "America/Chicago",
  "country": "US",
  "population": 305215
 },
 {
  "id": "3435217",
  "name": "Corrientes",
  "tz": "America/Argentina/Cordoba",
  "country": "AR",
  "population": 339067
 },
 {
  "id": "748879",
  "name": "Corum",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 183418
 },
 {
  "id": "5339840",
  "name": "Costa Mesa",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 109960
 },
 {
  "id": "1716771",
  "name": "Cotabato",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 179433
 },
 {
  "id": "3465284",
  "name": "Cotia",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 174828
 },
 {
  "id": "2394819",
  "name": "Cotonou",
  "tz": "Africa/Porto-Novo",
  "country": "BJ",
  "population": 690584
 },
 {
  "id": "2652221",
  "name": "Coventry",
  "tz": "Europe/London",
  "country": "GB",
  "population": 308313
 },
 {
  "id": "1336134",
  "name": "Cox's Bazar",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 253788
 },
 {
  "id": "3530139",
  "name": "Coyoacan",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 628063
 },
 {
  "id": "680332",
  "name": "Craiova",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 304142
 },
 {
  "id": "2652053",
  "name": "Crawley",
  "tz": "Europe/London",
  "country": "GB",
  "population": 107061
 },
 {
  "id": "3465196",
  "name": "Criciuma",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 161954
 },
 {
  "id": "3727135",
  "name": "Croix des Bouquets",
  "tz": "America/Port-au-Prince",
  "country": "HT",
  "population": 229127
 },
 {
  "id": "G1",
  "name": "CST6CDT",
  "tz": "CST6CDT",
  "country": null,
  "population": null
 },
 {
  "id": "3644918",
  "name": "Cua",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 182558
 },
 {
  "id": "3530049",
  "name": "Cuajimalpa",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 173625
 },
 {
  "id": "3827409",
  "name": "Cuauhtemoc",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 521348
 },
 {
  "id": "3515807",
  "name": "Cuautitlan Izcalli",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 475179
 },
 {
  "id": "3529982",
  "name": "Cuautla Morelos",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 146178
 },
 {
  "id": "3465059",
  "name": "Cubatao",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 118410
 },
 {
  "id": "3685533",
  "name": "Cucuta",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 721398
 },
 {
  "id": "1273802",
  "name": "Cuddalore",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 158569
 },
 {
  "id": "1273800",
  "name": "Cuddapah",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 127010
 },
 {
  "id": "3658666",
  "name": "Cuenca",
  "tz": "America/Guayaquil",
  "country": "EC",
  "population": 276964
 },
 {
  "id": "3529947",
  "name": "Cuernavaca",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 343769
 },
 {
  "id": "3465038",
  "name": "Cuiaba",
  "tz": "America/Cuiaba",
  "country": "BR",
  "population": 521934
 },
 {
  "id": "3348078",
  "name": "Cuito",
  "tz": "Africa/Luanda",
  "country": "AO",
  "population": 113624
 },
 {
  "id": "4012176",
  "name": "Culiacan",
  "tz": "America/Mazatlan",
  "country": "MX",
  "population": 582469
 },
 {
  "id": "3644768",
  "name": "Cumana",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 257783
 },
 {
  "id": "3892870",
  "name": "Curico",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 102438
 },
 {
  "id": "3464975",
  "name": "Curitiba",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 1718421
 },
 {
  "id": "1645895",
  "name": "Curug",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 191406
 },
 {
  "id": "3941584",
  "name": "Cusco",
  "tz": "America/Lima",
  "country": "PE",
  "population": 312140
 },
 {
  "id": "1273780",
  "name": "Cuttack",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 580000
 },
 {
  "id": "3100946",
  "name": "Czestochowa",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 248125
 },
 {
  "id": "1584071",
  "name": "Da Lat",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 197000
 },
 {
  "id": "1583992",
  "name": "Da Nang",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 752493
 },
 {
  "id": "3100796",
  "name": "Dabrowa Gornicza",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 130601
 },
 {
  "id": "1180809",
  "name": "Dadu",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 139784
 },
 {
  "id": "1798998",
  "name": "Dadukou",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 461513
 },
 {
  "id": "1835329",
  "name": "Daegu",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 2566540
 },
 {
  "id": "1835235",
  "name": "Daejeon",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 1475221
 },
 {
  "id": "2651621",
  "name": "Dagenham",
  "tz": "Europe/London",
  "country": "GB",
  "population": 108368
 },
 {
  "id": "1864416",
  "name": "Daito",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 129521
 },
 {
  "id": "2253354",
  "name": "Dakar",
  "tz": "Africa/Dakar",
  "country": "SN",
  "population": 2476400
 },
 {
  "id": "1814093",
  "name": "Dali",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 134040
 },
 {
  "id": "1814087",
  "name": "Dalian",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 2035307
 },
 {
  "id": "1814082",
  "name": "Daliang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 210411
 },
 {
  "id": "4684888",
  "name": "Dallas",
  "tz": "America/Chicago",
  "country": "US",
  "population": 1197816
 },
 {
  "id": "2290486",
  "name": "Daloa",
  "tz": "Africa/Abidjan",
  "country": "CI",
  "population": 215652
 },
 {
  "id": "5341430",
  "name": "Daly City",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 101123
 },
 {
  "id": "1272243",
  "name": "Dam Dam",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 122719
 },
 {
  "id": "358448",
  "name": "Damanhur",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 227943
 },
 {
  "id": "170654",
  "name": "Damascus",
  "tz": "Asia/Damascus",
  "country": "SY",
  "population": 1569394
 },
 {
  "id": "110336",
  "name": "Dammam",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 768602
 },
 {
  "id": "1273587",
  "name": "Damoh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 118776
 },
 {
  "id": "1273581",
  "name": "Danapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 152940
 },
 {
  "id": "2037886",
  "name": "Dandong",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 631973
 },
 {
  "id": "1813812",
  "name": "Danshui",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 126701
 },
 {
  "id": "2037860",
  "name": "Daqing",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 203488
 },
 {
  "id": "160263",
  "name": "Dar es Salaam",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 2698652
 },
 {
  "id": "1273491",
  "name": "Darbhanga",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 287150
 },
 {
  "id": "1273467",
  "name": "Darjiling",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 123797
 },
 {
  "id": "2938913",
  "name": "Darmstadt",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 140385
 },
 {
  "id": "5935277",
  "name": "Dartmouth",
  "tz": "America/Halifax",
  "country": "CA",
  "population": 101343
 },
 {
  "id": "2073124",
  "name": "Darwin",
  "tz": "Australia/Darwin",
  "country": "AU",
  "population": 129062
 },
 {
  "id": "1807301",
  "name": "Dasha",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 116307
 },
 {
  "id": "1180436",
  "name": "Daska",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 126924
 },
 {
  "id": "1715430",
  "name": "Dasmarinas",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 441876
 },
 {
  "id": "601734",
  "name": "Dasoguz",
  "tz": "Asia/Ashgabat",
  "country": "TM",
  "population": 166500
 },
 {
  "id": "2037799",
  "name": "Datong",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1052678
 },
 {
  "id": "460413",
  "name": "Daugavpils",
  "tz": "Europe/Riga",
  "country": "LV",
  "population": 111564
 },
 {
  "id": "1715348",
  "name": "Davao",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 1212504
 },
 {
  "id": "1293625",
  "name": "Dawei",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 136783
 },
 {
  "id": "1813344",
  "name": "Dawukou",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 131880
 },
 {
  "id": "1807544",
  "name": "Daxing",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 104904
 },
 {
  "id": "4509884",
  "name": "Dayton",
  "tz": "America/New_York",
  "country": "US",
  "population": 141527
 },
 {
  "id": "1813325",
  "name": "Dazhou",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 130749
 },
 {
  "id": "339666",
  "name": "Debre Zeyit",
  "tz": "Africa/Addis_Ababa",
  "country": "ET",
  "population": 104215
 },
 {
  "id": "721472",
  "name": "Debrecen",
  "tz": "Europe/Budapest",
  "country": "HU",
  "population": 204124
 },
 {
  "id": "1273313",
  "name": "Dehradun",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 522081
 },
 {
  "id": "1273309",
  "name": "Dehri",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 129938
 },
 {
  "id": "2037712",
  "name": "Dehui",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 108818
 },
 {
  "id": "170794",
  "name": "Deir ez-Zor",
  "tz": "Asia/Damascus",
  "country": "SY",
  "population": 242565
 },
 {
  "id": "1273294",
  "name": "Delhi",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 10927986
 },
 {
  "id": "6615440",
  "name": "Delicias",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 110520
 },
 {
  "id": "3726786",
  "name": "Delmas 73",
  "tz": "America/Port-au-Prince",
  "country": "HT",
  "population": 382920
 },
 {
  "id": "5937615",
  "name": "Delta",
  "tz": "America/Vancouver",
  "country": "CA",
  "population": 101668
 },
 {
  "id": "317109",
  "name": "Denizli",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 313238
 },
 {
  "id": "1645528",
  "name": "Denpasar",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 405923
 },
 {
  "id": "4685907",
  "name": "Denton",
  "tz": "America/Chicago",
  "country": "US",
  "population": 113383
 },
 {
  "id": "5419384",
  "name": "Denver",
  "tz": "America/Denver",
  "country": "US",
  "population": 600158
 },
 {
  "id": "1273193",
  "name": "Deoria",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 129570
 },
 {
  "id": "1645518",
  "name": "Depok",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 104527
 },
 {
  "id": "1645524",
  "name": "Depok",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 1198129
 },
 {
  "id": "1180289",
  "name": "Dera Ghazi Khan",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 236093
 },
 {
  "id": "1180281",
  "name": "Dera Ismail Khan",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 101616
 },
 {
  "id": "566532",
  "name": "Derbent",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 105965
 },
 {
  "id": "2651347",
  "name": "Derby",
  "tz": "Europe/London",
  "country": "GB",
  "population": 235029
 },
 {
  "id": "4853828",
  "name": "Des Moines",
  "tz": "America/Chicago",
  "country": "US",
  "population": 203433
 },
 {
  "id": "339219",
  "name": "Dese",
  "tz": "Africa/Addis_Ababa",
  "country": "ET",
  "population": 136056
 },
 {
  "id": "4990729",
  "name": "Detroit",
  "tz": "America/Detroit",
  "country": "US",
  "population": 713777
 },
 {
  "id": "1273066",
  "name": "Dewas",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 261218
 },
 {
  "id": "1812961",
  "name": "Deyang",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 152194
 },
 {
  "id": "1812955",
  "name": "Dezhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 379555
 },
 {
  "id": "1185241",
  "name": "Dhaka",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 10356500
 },
 {
  "id": "76184",
  "name": "Dhamar",
  "tz": "Asia/Aden",
  "country": "YE",
  "population": 160114
 },
 {
  "id": "1272979",
  "name": "Dhanbad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 219636
 },
 {
  "id": "1283460",
  "name": "Dharan Bazar",
  "tz": "Asia/Kathmandu",
  "country": "NP",
  "population": 108600
 },
 {
  "id": "1272842",
  "name": "Dharmavaram",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 114050
 },
 {
  "id": "1272805",
  "name": "Dhaulpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 102462
 },
 {
  "id": "1272691",
  "name": "Dhule",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 366980
 },
 {
  "id": "3464739",
  "name": "Diadema",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 390633
 },
 {
  "id": "1272648",
  "name": "Dibrugarh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 122155
 },
 {
  "id": "8764562",
  "name": "Diepsloot",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 350000
 },
 {
  "id": "6956648",
  "name": "Diez de Octubre",
  "tz": "America/Havana",
  "country": "CU",
  "population": 227293
 },
 {
  "id": "1714956",
  "name": "Digos",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 116122
 },
 {
  "id": "96994",
  "name": "Dihok",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 284000
 },
 {
  "id": "3021372",
  "name": "Dijon",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 149782
 },
 {
  "id": "358172",
  "name": "Dikirnis",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 137542
 },
 {
  "id": "1645457",
  "name": "Dili",
  "tz": "Asia/Dili",
  "country": "TL",
  "population": 150000
 },
 {
  "id": "1272552",
  "name": "Dimapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 135860
 },
 {
  "id": "566199",
  "name": "Dimitrovgrad",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 132226
 },
 {
  "id": "1203891",
  "name": "Dinajpur",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 206234
 },
 {
  "id": "1272543",
  "name": "Dindigul",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 200797
 },
 {
  "id": "1812728",
  "name": "Dingzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 152934
 },
 {
  "id": "338832",
  "name": "Dire Dawa",
  "tz": "Africa/Addis_Ababa",
  "country": "ET",
  "population": 252279
 },
 {
  "id": "358108",
  "name": "Disuq",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 102037
 },
 {
  "id": "3464688",
  "name": "Divinopolis",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 193832
 },
 {
  "id": "2289887",
  "name": "Divo",
  "tz": "Africa/Abidjan",
  "country": "CI",
  "population": 127867
 },
 {
  "id": "316541",
  "name": "Diyarbakir",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 644763
 },
 {
  "id": "2500017",
  "name": "Djelfa",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 154265
 },
 {
  "id": "223817",
  "name": "Djibouti",
  "tz": "Africa/Djibouti",
  "country": "DJ",
  "population": 623891
 },
 {
  "id": "2394560",
  "name": "Djougou",
  "tz": "Africa/Porto-Novo",
  "country": "BJ",
  "population": 237040
 },
 {
  "id": "709932",
  "name": "Dniprodzerzhyns'k",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 248575
 },
 {
  "id": "709930",
  "name": "Dnipropetrovsk",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 1032822
 },
 {
  "id": "160196",
  "name": "Dodoma",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 180541
 },
 {
  "id": "290030",
  "name": "Doha",
  "tz": "Asia/Qatar",
  "country": "QA",
  "population": 344939
 },
 {
  "id": "2258261",
  "name": "Dolisie",
  "tz": "Africa/Brazzaville",
  "country": "CG",
  "population": 103894
 },
 {
  "id": "1272423",
  "name": "Dombivli",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1193000
 },
 {
  "id": "709717",
  "name": "Donetsk",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 1024700
 },
 {
  "id": "1812545",
  "name": "Dongguan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 390219
 },
 {
  "id": "1812521",
  "name": "Donghai",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 188602
 },
 {
  "id": "2037620",
  "name": "Dongling",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 171454
 },
 {
  "id": "1812228",
  "name": "Dongtai",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 110988
 },
 {
  "id": "2037685",
  "name": "Dongxing",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 109561
 },
 {
  "id": "1791056",
  "name": "Dongyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 130387
 },
 {
  "id": "1812101",
  "name": "Dongying",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 306450
 },
 {
  "id": "2756669",
  "name": "Dordrecht",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 119260
 },
 {
  "id": "2935517",
  "name": "Dortmund",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 588462
 },
 {
  "id": "2518794",
  "name": "Dos Hermanas",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 122943
 },
 {
  "id": "3685095",
  "name": "Dos Quebradas",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 179583
 },
 {
  "id": "2232593",
  "name": "Douala",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 1338082
 },
 {
  "id": "1665196",
  "name": "Douliu",
  "tz": "Asia/Taipei",
  "country": "TW",
  "population": 104723
 },
 {
  "id": "170592",
  "name": "Douma",
  "tz": "Asia/Damascus",
  "country": "SY",
  "population": 111864
 },
 {
  "id": "3464460",
  "name": "Dourados",
  "tz": "America/Campo_Grande",
  "country": "BR",
  "population": 162202
 },
 {
  "id": "5343858",
  "name": "Downey",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 111772
 },
 {
  "id": "2935022",
  "name": "Dresden",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 486854
 },
 {
  "id": "678817",
  "name": "Drobeta-Turnu Severin",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 102346
 },
 {
  "id": "292223",
  "name": "Dubai",
  "tz": "Asia/Dubai",
  "country": "AE",
  "population": 1137347
 },
 {
  "id": "2964574",
  "name": "Dublin",
  "tz": "Europe/Dublin",
  "country": "IE",
  "population": 1024027
 },
 {
  "id": "2650839",
  "name": "Dudley",
  "tz": "Europe/London",
  "country": "GB",
  "population": 199059
 },
 {
  "id": "2934691",
  "name": "Duisburg",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 504358
 },
 {
  "id": "1714201",
  "name": "Dumaguete City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 113541
 },
 {
  "id": "1645133",
  "name": "Dumai",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 143760
 },
 {
  "id": "2964506",
  "name": "Dun Laoghaire",
  "tz": "Europe/Dublin",
  "country": "IE",
  "population": 185400
 },
 {
  "id": "2650752",
  "name": "Dundee",
  "tz": "Europe/London",
  "country": "GB",
  "population": 151592
 },
 {
  "id": "2191562",
  "name": "Dunedin",
  "tz": "Pacific/Auckland",
  "country": "NZ",
  "population": 114347
 },
 {
  "id": "2037534",
  "name": "Dunhua",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 148844
 },
 {
  "id": "3464374",
  "name": "Duque de Caxias",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 818329
 },
 {
  "id": "1007311",
  "name": "Durban",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 3120282
 },
 {
  "id": "1272181",
  "name": "Durg",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 255283
 },
 {
  "id": "1272175",
  "name": "Durgapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 518872
 },
 {
  "id": "4464368",
  "name": "Durham",
  "tz": "America/New_York",
  "country": "US",
  "population": 228330
 },
 {
  "id": "3185728",
  "name": "Durres",
  "tz": "Europe/Tirane",
  "country": "AL",
  "population": 122034
 },
 {
  "id": "1221874",
  "name": "Dushanbe",
  "tz": "Asia/Dushanbe",
  "country": "TJ",
  "population": 679400
 },
 {
  "id": "2934246",
  "name": "Dusseldorf",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 573057
 },
 {
  "id": "563708",
  "name": "Dzerzhinsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 256537
 },
 {
  "id": "4619947",
  "name": "East Chattanooga",
  "tz": "America/New_York",
  "country": "US",
  "population": 154024
 },
 {
  "id": "4756955",
  "name": "East Hampton",
  "tz": "America/New_York",
  "country": "US",
  "population": 147993
 },
 {
  "id": "4385018",
  "name": "East Independence",
  "tz": "America/Chicago",
  "country": "US",
  "population": 110675
 },
 {
  "id": "7303419",
  "name": "East Jerusalem",
  "tz": "Asia/Hebron",
  "country": "PS",
  "population": 428304
 },
 {
  "id": "1006984",
  "name": "East London",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 478676
 },
 {
  "id": "5344994",
  "name": "East Los Angeles",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 126496
 },
 {
  "id": "5115985",
  "name": "East New York",
  "tz": "America/New_York",
  "country": "US",
  "population": 173198
 },
 {
  "id": "2650497",
  "name": "Eastbourne",
  "tz": "Europe/London",
  "country": "GB",
  "population": 112906
 },
 {
  "id": "2130404",
  "name": "Ebetsu",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 133953
 },
 {
  "id": "2344082",
  "name": "Ebute Ikorodu",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 535619
 },
 {
  "id": "3529612",
  "name": "Ecatepec",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 1806226
 },
 {
  "id": "2498954",
  "name": "Ech Chettia",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 167955
 },
 {
  "id": "380173",
  "name": "Ed Damer",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 103941
 },
 {
  "id": "2232239",
  "name": "Edea",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 203149
 },
 {
  "id": "2650225",
  "name": "Edinburgh",
  "tz": "Europe/London",
  "country": "GB",
  "population": 435791
 },
 {
  "id": "747712",
  "name": "Edirne",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 126470
 },
 {
  "id": "5097529",
  "name": "Edison",
  "tz": "America/New_York",
  "country": "US",
  "population": 102548
 },
 {
  "id": "5946768",
  "name": "Edmonton",
  "tz": "America/Edmonton",
  "country": "CA",
  "population": 712391
 },
 {
  "id": "G2",
  "name": "EET - Eastern European Time",
  "tz": "EET",
  "country": null,
  "population": null
 },
 {
  "id": "2343983",
  "name": "Effon Alaiye",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 279319
 },
 {
  "id": "2911293",
  "name": "Eimsbuettel",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 251907
 },
 {
  "id": "2756253",
  "name": "Eindhoven",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 209620
 },
 {
  "id": "6544100",
  "name": "Eixample",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 262485
 },
 {
  "id": "3644417",
  "name": "Ejido",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 106915
 },
 {
  "id": "2343784",
  "name": "Ejigbo",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 138357
 },
 {
  "id": "1524325",
  "name": "Ekibastuz",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 121470
 },
 {
  "id": "2498766",
  "name": "El Achir",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 158333
 },
 {
  "id": "380148",
  "name": "El Daein",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 264734
 },
 {
  "id": "2498392",
  "name": "El Eulma",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 128351
 },
 {
  "id": "379555",
  "name": "El Fasher",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 252609
 },
 {
  "id": "2550078",
  "name": "El Jadida",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 147549
 },
 {
  "id": "3642833",
  "name": "El Limon",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 148247
 },
 {
  "id": "5345743",
  "name": "El Monte",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 113475
 },
 {
  "id": "379003",
  "name": "El Obeid",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 393311
 },
 {
  "id": "2497411",
  "name": "El Oued",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 134699
 },
 {
  "id": "5520993",
  "name": "El Paso",
  "tz": "America/Denver",
  "country": "US",
  "population": 649121
 },
 {
  "id": "3610613",
  "name": "El Progreso",
  "tz": "America/Tegucigalpa",
  "country": "HN",
  "population": 100810
 },
 {
  "id": "3641351",
  "name": "El Tigre",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 150999
 },
 {
  "id": "315808",
  "name": "Elazig",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 298004
 },
 {
  "id": "783263",
  "name": "Elbasan",
  "tz": "Europe/Tirane",
  "country": "AL",
  "population": 100903
 },
 {
  "id": "3099759",
  "name": "Elblag",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 127558
 },
 {
  "id": "2518559",
  "name": "Elche",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 230112
 },
 {
  "id": "198629",
  "name": "Eldoret",
  "tz": "Africa/Nairobi",
  "country": "KE",
  "population": 218446
 },
 {
  "id": "563523",
  "name": "Elektrostal'",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 144387
 },
 {
  "id": "4890864",
  "name": "Elgin",
  "tz": "America/Chicago",
  "country": "US",
  "population": 108188
 },
 {
  "id": "563514",
  "name": "Elista",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 106971
 },
 {
  "id": "5097598",
  "name": "Elizabeth",
  "tz": "America/New_York",
  "country": "US",
  "population": 124969
 },
 {
  "id": "5346111",
  "name": "Elk Grove",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 153015
 },
 {
  "id": "3658192",
  "name": "Eloy Alfaro",
  "tz": "America/Guayaquil",
  "country": "EC",
  "population": 167784
 },
 {
  "id": "1272051",
  "name": "Eluru",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 183387
 },
 {
  "id": "1005646",
  "name": "eMbalenhle",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 141741
 },
 {
  "id": "3464305",
  "name": "Embu",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 221733
 },
 {
  "id": "1811729",
  "name": "Encheng",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 110921
 },
 {
  "id": "563464",
  "name": "Engel's",
  "tz": "Europe/Volgograd",
  "country": "RU",
  "population": 196011
 },
 {
  "id": "2756071",
  "name": "Enschede",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 153655
 },
 {
  "id": "4006702",
  "name": "Ensenada",
  "tz": "America/Tijuana",
  "country": "MX",
  "population": 256565
 },
 {
  "id": "5503766",
  "name": "Enterprise",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 108481
 },
 {
  "id": "2343279",
  "name": "Enugu",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 688862
 },
 {
  "id": "3682631",
  "name": "Envigado",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 163007
 },
 {
  "id": "1085510",
  "name": "Epworth",
  "tz": "Africa/Harare",
  "country": "ZW",
  "population": 123250
 },
 {
  "id": "95446",
  "name": "Erbil",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 932800
 },
 {
  "id": "2929670",
  "name": "Erfurt",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 203254
 },
 {
  "id": "5188843",
  "name": "Erie",
  "tz": "America/New_York",
  "country": "US",
  "population": 101786
 },
 {
  "id": "2929567",
  "name": "Erlangen",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 102675
 },
 {
  "id": "1272013",
  "name": "Erode",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 147270
 },
 {
  "id": "315373",
  "name": "Erzincan",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 114027
 },
 {
  "id": "315368",
  "name": "Erzurum",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 420691
 },
 {
  "id": "5346827",
  "name": "Escondido",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 143911
 },
 {
  "id": "3595803",
  "name": "Escuintla",
  "tz": "America/Guatemala",
  "country": "GT",
  "population": 103165
 },
 {
  "id": "747340",
  "name": "Esenler",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 520235
 },
 {
  "id": "747323",
  "name": "Esenyurt",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 211330
 },
 {
  "id": "315202",
  "name": "Eskisehir",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 514869
 },
 {
  "id": "3464008",
  "name": "Esmeraldas",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 103206
 },
 {
  "id": "3657990",
  "name": "Esmeraldas",
  "tz": "America/Guayaquil",
  "country": "EC",
  "population": 165216
 },
 {
  "id": "660158",
  "name": "Espoo",
  "tz": "Europe/Helsinki",
  "country": "FI",
  "population": 256760
 },
 {
  "id": "2928810",
  "name": "Essen",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 593085
 },
 {
  "id": "G3",
  "name": "EST - Eastern Standard Time",
  "tz": "EST",
  "country": null,
  "population": null
 },
 {
  "id": "G4",
  "name": "EST5EDT",
  "tz": "EST5EDT",
  "country": null,
  "population": null
 },
 {
  "id": "2343093",
  "name": "Esuk Oron",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 112033
 },
 {
  "id": "1271987",
  "name": "Etawah",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 257448
 },
 {
  "id": "5950267",
  "name": "Etobicoke",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 347948
 },
 {
  "id": "5725846",
  "name": "Eugene",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 156185
 },
 {
  "id": "4257227",
  "name": "Evansville",
  "tz": "America/Chicago",
  "country": "US",
  "population": 117429
 },
 {
  "id": "5793933",
  "name": "Everett",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 103019
 },
 {
  "id": "2649808",
  "name": "Exeter",
  "tz": "Europe/London",
  "country": "GB",
  "population": 113118
 },
 {
  "id": "1811619",
  "name": "Ezhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 193652
 },
 {
  "id": "5347335",
  "name": "Fairfield",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 105321
 },
 {
  "id": "1179400",
  "name": "Faisalabad",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 2506595
 },
 {
  "id": "1271976",
  "name": "Faizabad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 153047
 },
 {
  "id": "5059163",
  "name": "Fargo",
  "tz": "America/Chicago",
  "country": "US",
  "population": 105549
 },
 {
  "id": "1271951",
  "name": "Faridabad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1220229
 },
 {
  "id": "1203344",
  "name": "Faridpur",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 112187
 },
 {
  "id": "1271942",
  "name": "Farrukhabad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 241152
 },
 {
  "id": "1271912",
  "name": "Fatehpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 166480
 },
 {
  "id": "4466033",
  "name": "Fayetteville",
  "tz": "America/New_York",
  "country": "US",
  "population": 200564
 },
 {
  "id": "3463478",
  "name": "Feira de Santana",
  "tz": "America/Bahia",
  "country": "BR",
  "population": 481911
 },
 {
  "id": "2035225",
  "name": "Fendou",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 226298
 },
 {
  "id": "2036920",
  "name": "Fendou",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 164844
 },
 {
  "id": "2037411",
  "name": "Fengcheng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 120514
 },
 {
  "id": "7304020",
  "name": "Fenghuang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 370000
 },
 {
  "id": "1514019",
  "name": "Fergana",
  "tz": "Asia/Tashkent",
  "country": "UZ",
  "population": 164322
 },
 {
  "id": "3438115",
  "name": "Fernando de la Mora",
  "tz": "America/Asuncion",
  "country": "PY",
  "population": 120167
 },
 {
  "id": "3463422",
  "name": "Ferraz de Vasconcelos",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 167900
 },
 {
  "id": "2548885",
  "name": "Fes",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 964891
 },
 {
  "id": "1064890",
  "name": "Fianarantsoa",
  "tz": "Indian/Antananarivo",
  "country": "MG",
  "population": 167227
 },
 {
  "id": "3176959",
  "name": "Firenze",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 349296
 },
 {
  "id": "1271885",
  "name": "Firozabad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 306409
 },
 {
  "id": "1271883",
  "name": "Firozpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 102130
 },
 {
  "id": "4992982",
  "name": "Flint",
  "tz": "America/Detroit",
  "country": "US",
  "population": 102434
 },
 {
  "id": "3682426",
  "name": "Florencia",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 130337
 },
 {
  "id": "3463237",
  "name": "Florianopolis",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 412724
 },
 {
  "id": "3682385",
  "name": "Floridablanca",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 252267
 },
 {
  "id": "678015",
  "name": "Focsani",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 105112
 },
 {
  "id": "3176885",
  "name": "Foggia",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 137032
 },
 {
  "id": "5349755",
  "name": "Fontana",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 196069
 },
 {
  "id": "3433899",
  "name": "Formosa",
  "tz": "America/Argentina/Cordoba",
  "country": "AR",
  "population": 221383
 },
 {
  "id": "5577147",
  "name": "Fort Collins",
  "tz": "America/Denver",
  "country": "US",
  "population": 143986
 },
 {
  "id": "4155966",
  "name": "Fort Lauderdale",
  "tz": "America/New_York",
  "country": "US",
  "population": 165521
 },
 {
  "id": "4920423",
  "name": "Fort Wayne",
  "tz": "America/Indiana/Indianapolis",
  "country": "US",
  "population": 253691
 },
 {
  "id": "4691930",
  "name": "Fort Worth",
  "tz": "America/Chicago",
  "country": "US",
  "population": 741206
 },
 {
  "id": "3399415",
  "name": "Fortaleza",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 2400000
 },
 {
  "id": "1811103",
  "name": "Foshan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 627348
 },
 {
  "id": "3463030",
  "name": "Foz do Iguacu",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 293523
 },
 {
  "id": "3463011",
  "name": "Franca",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 305041
 },
 {
  "id": "3462980",
  "name": "Francisco Morato",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 171790
 },
 {
  "id": "3462964",
  "name": "Franco da Rocha",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 108858
 },
 {
  "id": "2925533",
  "name": "Frankfurt am Main",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 650000
 },
 {
  "id": "2409306",
  "name": "Freetown",
  "tz": "Africa/Freetown",
  "country": "SL",
  "population": 802639
 },
 {
  "id": "2925177",
  "name": "Freiburg",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 215966
 },
 {
  "id": "5350734",
  "name": "Fremont",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 214089
 },
 {
  "id": "4006163",
  "name": "Fresnillo de Gonzalez Echeverria",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 105488
 },
 {
  "id": "5350937",
  "name": "Fresno",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 494665
 },
 {
  "id": "2924573",
  "name": "Friedrichshain Bezirk",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 117829
 },
 {
  "id": "4692559",
  "name": "Frisco",
  "tz": "America/Chicago",
  "country": "US",
  "population": 116989
 },
 {
  "id": "8285534",
  "name": "Fuencarral-El Pardo",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 220085
 },
 {
  "id": "3121960",
  "name": "Fuenlabrada",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 197836
 },
 {
  "id": "1864134",
  "name": "Fuji",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 240014
 },
 {
  "id": "1864132",
  "name": "Fujieda",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 132859
 },
 {
  "id": "1864105",
  "name": "Fujinomiya",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 121515
 },
 {
  "id": "1864092",
  "name": "Fujisawa",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 394624
 },
 {
  "id": "1864031",
  "name": "Fukaya",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 106595
 },
 {
  "id": "1863985",
  "name": "Fukui-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 248707
 },
 {
  "id": "1863967",
  "name": "Fukuoka-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 1392289
 },
 {
  "id": "2112923",
  "name": "Fukushima-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 294237
 },
 {
  "id": "1863917",
  "name": "Fukuyama",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 383298
 },
 {
  "id": "1810979",
  "name": "Fuling",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 166507
 },
 {
  "id": "5351247",
  "name": "Fullerton",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 135161
 },
 {
  "id": "1863905",
  "name": "Funabashi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 560743
 },
 {
  "id": "2267827",
  "name": "Funchal",
  "tz": "Atlantic/Madeira",
  "country": "PT",
  "population": 100847
 },
 {
  "id": "2342490",
  "name": "Funtua",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 136811
 },
 {
  "id": "2923544",
  "name": "Furth",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 112025
 },
 {
  "id": "2037355",
  "name": "Fushun",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1400646
 },
 {
  "id": "2037346",
  "name": "Fuxin",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 689050
 },
 {
  "id": "1810845",
  "name": "Fuyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 170023
 },
 {
  "id": "2037335",
  "name": "Fuyu",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 138704
 },
 {
  "id": "1810821",
  "name": "Fuzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1179720
 },
 {
  "id": "2468369",
  "name": "Gabes",
  "tz": "Africa/Tunis",
  "country": "TN",
  "population": 110075
 },
 {
  "id": "933773",
  "name": "Gaborone",
  "tz": "Africa/Gaborone",
  "country": "BW",
  "population": 208411
 },
 {
  "id": "1271850",
  "name": "Gadag",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 162569
 },
 {
  "id": "2288829",
  "name": "Gagnoa",
  "tz": "Africa/Abidjan",
  "country": "CI",
  "population": 123184
 },
 {
  "id": "4156404",
  "name": "Gainesville",
  "tz": "America/New_York",
  "country": "US",
  "population": 124354
 },
 {
  "id": "7302833",
  "name": "Gajuwaka",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 258944
 },
 {
  "id": "677697",
  "name": "Galati",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 294087
 },
 {
  "id": "1246321",
  "name": "Galkissa",
  "tz": "Asia/Colombo",
  "country": "LK",
  "population": 215941
 },
 {
  "id": "216449",
  "name": "Gandajika",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 154425
 },
 {
  "id": "1271717",
  "name": "Gandhidham",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 166388
 },
 {
  "id": "1271685",
  "name": "Ganganagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 231838
 },
 {
  "id": "1271675",
  "name": "Gangapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 120115
 },
 {
  "id": "1271662",
  "name": "Gangawati",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 106250
 },
 {
  "id": "586523",
  "name": "Ganja",
  "tz": "Asia/Baku",
  "country": "AZ",
  "population": 313300
 },
 {
  "id": "1810458",
  "name": "Gaomi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 150793
 },
 {
  "id": "1810437",
  "name": "Gaoping",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 204368
 },
 {
  "id": "1810295",
  "name": "Gaozhou",
  "tz": "Asia/Urumqi",
  "country": "CN",
  "population": 166069
 },
 {
  "id": "3399058",
  "name": "Garanhuns",
  "tz": "America/Recife",
  "country": "BR",
  "population": 110085
 },
 {
  "id": "5351515",
  "name": "Garden Grove",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 170883
 },
 {
  "id": "1141857",
  "name": "Gardez",
  "tz": "Asia/Kabul",
  "country": "AF",
  "population": 103601
 },
 {
  "id": "4693003",
  "name": "Garland",
  "tz": "America/Chicago",
  "country": "US",
  "population": 226876
 },
 {
  "id": "2231320",
  "name": "Garoua",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 436899
 },
 {
  "id": "4005937",
  "name": "Garza Garcia",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 130646
 },
 {
  "id": "2341656",
  "name": "Gashua",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 125817
 },
 {
  "id": "3104499",
  "name": "Gasteiz / Vitoria",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 235661
 },
 {
  "id": "5959974",
  "name": "Gatineau",
  "tz": "America/Montreal",
  "country": "CA",
  "population": 242124
 },
 {
  "id": "1271439",
  "name": "Gaya",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 423692
 },
 {
  "id": "281133",
  "name": "Gaza",
  "tz": "Asia/Gaza",
  "country": "PS",
  "population": 410000
 },
 {
  "id": "314830",
  "name": "Gaziantep",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 1065975
 },
 {
  "id": "2341355",
  "name": "Gbongan",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 139485
 },
 {
  "id": "3099434",
  "name": "Gdansk",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 461865
 },
 {
  "id": "3099424",
  "name": "Gdynia",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 253730
 },
 {
  "id": "747014",
  "name": "Gebze",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 281436
 },
 {
  "id": "2165798",
  "name": "Geelong",
  "tz": "Australia/Melbourne",
  "country": "AU",
  "population": 226034
 },
 {
  "id": "1810240",
  "name": "Gejiu",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 136135
 },
 {
  "id": "2921466",
  "name": "Gelsenkirchen",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 270028
 },
 {
  "id": "2315728",
  "name": "Gemena",
  "tz": "Africa/Kinshasa",
  "country": "CD",
  "population": 117639
 },
 {
  "id": "379303",
  "name": "Geneina",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 162981
 },
 {
  "id": "4005867",
  "name": "General Escobedo",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 308206
 },
 {
  "id": "1713022",
  "name": "General Santos",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 679588
 },
 {
  "id": "2660646",
  "name": "Geneve",
  "tz": "Europe/Zurich",
  "country": "CH",
  "population": 183981
 },
 {
  "id": "3176219",
  "name": "Genoa",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 580223
 },
 {
  "id": "2797656",
  "name": "Gent",
  "tz": "Europe/Brussels",
  "country": "BE",
  "population": 231493
 },
 {
  "id": "1002145",
  "name": "George",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 174582
 },
 {
  "id": "1735106",
  "name": "George Town",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 300000
 },
 {
  "id": "3378644",
  "name": "Georgetown",
  "tz": "America/Guyana",
  "country": "GY",
  "population": 235017
 },
 {
  "id": "2921232",
  "name": "Gera",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 104659
 },
 {
  "id": "3121437",
  "name": "Getafe",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 167164
 },
 {
  "id": "1271715",
  "name": "Ghandinagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 195985
 },
 {
  "id": "1271308",
  "name": "Ghaziabad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1199191
 },
 {
  "id": "1271306",
  "name": "Ghazipur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 103095
 },
 {
  "id": "1141269",
  "name": "Ghazni",
  "tz": "Asia/Kabul",
  "country": "AF",
  "population": 141000
 },
 {
  "id": "1863641",
  "name": "Gifu-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 397714
 },
 {
  "id": "3121424",
  "name": "Gijon",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 277554
 },
 {
  "id": "5295903",
  "name": "Gilbert",
  "tz": "America/Phoenix",
  "country": "US",
  "population": 208453
 },
 {
  "id": "2648657",
  "name": "Gillingham",
  "tz": "Europe/London",
  "country": "GB",
  "population": 101187
 },
 {
  "id": "1842944",
  "name": "Gimcheon",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 150000
 },
 {
  "id": "3682028",
  "name": "Girardot",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 130289
 },
 {
  "id": "3682018",
  "name": "Giron",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 108466
 },
 {
  "id": "2648579",
  "name": "Glasgow",
  "tz": "Europe/London",
  "country": "GB",
  "population": 610268
 },
 {
  "id": "561347",
  "name": "Glazov",
  "tz": "Europe/Samara",
  "country": "RU",
  "population": 100676
 },
 {
  "id": "5295985",
  "name": "Glendale",
  "tz": "America/Phoenix",
  "country": "US",
  "population": 226721
 },
 {
  "id": "5352423",
  "name": "Glendale",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 191719
 },
 {
  "id": "3099230",
  "name": "Gliwice",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 198835
 },
 {
  "id": "2648404",
  "name": "Gloucester",
  "tz": "Europe/London",
  "country": "GB",
  "population": 128721
 },
 {
  "id": "G11",
  "name": "GMT - Greenwich Mean Time",
  "tz": "Etc/GMT",
  "country": null,
  "population": null
 },
 {
  "id": "G12",
  "name": "GMT+1",
  "tz": "Etc/GMT+1",
  "country": null,
  "population": null
 },
 {
  "id": "G13",
  "name": "GMT+10",
  "tz": "Etc/GMT+10",
  "country": null,
  "population": null
 },
 {
  "id": "G14",
  "name": "GMT+11",
  "tz": "Etc/GMT+11",
  "country": null,
  "population": null
 },
 {
  "id": "G15",
  "name": "GMT+12",
  "tz": "Etc/GMT+12",
  "country": null,
  "population": null
 },
 {
  "id": "G16",
  "name": "GMT+2",
  "tz": "Etc/GMT+2",
  "country": null,
  "population": null
 },
 {
  "id": "G17",
  "name": "GMT+3",
  "tz": "Etc/GMT+3",
  "country": null,
  "population": null
 },
 {
  "id": "G18",
  "name": "GMT+4",
  "tz": "Etc/GMT+4",
  "country": null,
  "population": null
 },
 {
  "id": "G19",
  "name": "GMT+5",
  "tz": "Etc/GMT+5",
  "country": null,
  "population": null
 },
 {
  "id": "G20",
  "name": "GMT+6",
  "tz": "Etc/GMT+6",
  "country": null,
  "population": null
 },
 {
  "id": "G21",
  "name": "GMT+7",
  "tz": "Etc/GMT+7",
  "country": null,
  "population": null
 },
 {
  "id": "G22",
  "name": "GMT+8",
  "tz": "Etc/GMT+8",
  "country": null,
  "population": null
 },
 {
  "id": "G23",
  "name": "GMT+9",
  "tz": "Etc/GMT+9",
  "country": null,
  "population": null
 },
 {
  "id": "G24",
  "name": "GMT-1",
  "tz": "Etc/GMT-1",
  "country": null,
  "population": null
 },
 {
  "id": "G25",
  "name": "GMT-10",
  "tz": "Etc/GMT-10",
  "country": null,
  "population": null
 },
 {
  "id": "G26",
  "name": "GMT-11",
  "tz": "Etc/GMT-11",
  "country": null,
  "population": null
 },
 {
  "id": "G27",
  "name": "GMT-12",
  "tz": "Etc/GMT-12",
  "country": null,
  "population": null
 },
 {
  "id": "G28",
  "name": "GMT-13",
  "tz": "Etc/GMT-13",
  "country": null,
  "population": null
 },
 {
  "id": "G29",
  "name": "GMT-14",
  "tz": "Etc/GMT-14",
  "country": null,
  "population": null
 },
 {
  "id": "G30",
  "name": "GMT-2",
  "tz": "Etc/GMT-2",
  "country": null,
  "population": null
 },
 {
  "id": "G31",
  "name": "GMT-3",
  "tz": "Etc/GMT-3",
  "country": null,
  "population": null
 },
 {
  "id": "G32",
  "name": "GMT-4",
  "tz": "Etc/GMT-4",
  "country": null,
  "population": null
 },
 {
  "id": "G33",
  "name": "GMT-5",
  "tz": "Etc/GMT-5",
  "country": null,
  "population": null
 },
 {
  "id": "G34",
  "name": "GMT-6",
  "tz": "Etc/GMT-6",
  "country": null,
  "population": null
 },
 {
  "id": "G35",
  "name": "GMT-7",
  "tz": "Etc/GMT-7",
  "country": null,
  "population": null
 },
 {
  "id": "G36",
  "name": "GMT-8",
  "tz": "Etc/GMT-8",
  "country": null,
  "population": null
 },
 {
  "id": "G37",
  "name": "GMT-9",
  "tz": "Etc/GMT-9",
  "country": null,
  "population": null
 },
 {
  "id": "1271107",
  "name": "Godhra",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 131913
 },
 {
  "id": "2711537",
  "name": "Goeteborg",
  "tz": "Europe/Stockholm",
  "country": "SE",
  "population": 504084
 },
 {
  "id": "2918632",
  "name": "Goettingen",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 122149
 },
 {
  "id": "3462377",
  "name": "Goiania",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 1171195
 },
 {
  "id": "1178231",
  "name": "Gojra",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 139726
 },
 {
  "id": "560465",
  "name": "Gol'yanovo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 158000
 },
 {
  "id": "2165087",
  "name": "Gold Coast",
  "tz": "Australia/Brisbane",
  "country": "AU",
  "population": 591473
 },
 {
  "id": "216281",
  "name": "Goma",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 144124
 },
 {
  "id": "2340451",
  "name": "Gombe",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 250258
 },
 {
  "id": "627907",
  "name": "Gomel",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 480951
 },
 {
  "id": "4005775",
  "name": "Gomez Palacio",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 228577
 },
 {
  "id": "132938",
  "name": "Gonbad-e Qabus",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 131416
 },
 {
  "id": "1270996",
  "name": "Gonda",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 133583
 },
 {
  "id": "1270994",
  "name": "Gondal",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 101801
 },
 {
  "id": "336014",
  "name": "Gondar",
  "tz": "Africa/Addis_Ababa",
  "country": "ET",
  "population": 153914
 },
 {
  "id": "1270990",
  "name": "Gondia",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 124897
 },
 {
  "id": "2037222",
  "name": "Gongzhuling",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 140909
 },
 {
  "id": "1270926",
  "name": "Gorakhpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1324570
 },
 {
  "id": "1270927",
  "name": "Gorakhpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 674246
 },
 {
  "id": "132892",
  "name": "Gorgan",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 244937
 },
 {
  "id": "1643837",
  "name": "Gorontalo",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 144195
 },
 {
  "id": "3098722",
  "name": "Gorzow Wielkopolski",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 124430
 },
 {
  "id": "1270896",
  "name": "Gosaba",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 222764
 },
 {
  "id": "3462315",
  "name": "Governador Valadares",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 250878
 },
 {
  "id": "1842485",
  "name": "Goyang-si",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 1073069
 },
 {
  "id": "3121245",
  "name": "Gracia",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 120087
 },
 {
  "id": "2517117",
  "name": "Granada",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 234325
 },
 {
  "id": "2251339",
  "name": "Grand Dakar",
  "tz": "Africa/Dakar",
  "country": "SN",
  "population": 2352057
 },
 {
  "id": "4694482",
  "name": "Grand Prairie",
  "tz": "America/Chicago",
  "country": "US",
  "population": 175396
 },
 {
  "id": "4994358",
  "name": "Grand Rapids",
  "tz": "America/Detroit",
  "country": "US",
  "population": 188040
 },
 {
  "id": "3462089",
  "name": "Gravatai",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 238778
 },
 {
  "id": "2778067",
  "name": "Graz",
  "tz": "Europe/Vienna",
  "country": "AT",
  "population": 222326
 },
 {
  "id": "6954929",
  "name": "Greater Noida",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 293908
 },
 {
  "id": "5964700",
  "name": "Greater Sudbury",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 157857
 },
 {
  "id": "5254962",
  "name": "Green Bay",
  "tz": "America/Chicago",
  "country": "US",
  "population": 104057
 },
 {
  "id": "4469146",
  "name": "Greensboro",
  "tz": "America/New_York",
  "country": "US",
  "population": 269666
 },
 {
  "id": "3014728",
  "name": "Grenoble",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 158552
 },
 {
  "id": "5729485",
  "name": "Gresham",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 105594
 },
 {
  "id": "1643761",
  "name": "Grogol",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 100613
 },
 {
  "id": "2755251",
  "name": "Groningen",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 181194
 },
 {
  "id": "558418",
  "name": "Groznyy",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 226100
 },
 {
  "id": "3640465",
  "name": "Guacara",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 151752
 },
 {
  "id": "4005539",
  "name": "Guadalajara",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 1640589
 },
 {
  "id": "4005492",
  "name": "Guadalupe",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 724921
 },
 {
  "id": "3473964",
  "name": "Guaiba",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 101024
 },
 {
  "id": "3557846",
  "name": "Guanabacoa",
  "tz": "America/Havana",
  "country": "CU",
  "population": 112964
 },
 {
  "id": "3640226",
  "name": "Guanare",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 112286
 },
 {
  "id": "2034497",
  "name": "Guangming",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 112819
 },
 {
  "id": "1809879",
  "name": "Guangshui",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 154771
 },
 {
  "id": "1806466",
  "name": "Guangyuan",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 213365
 },
 {
  "id": "1809858",
  "name": "Guangzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 3152825
 },
 {
  "id": "1802875",
  "name": "Guankou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1380000
 },
 {
  "id": "3557689",
  "name": "Guantanamo",
  "tz": "America/Havana",
  "country": "CU",
  "population": 272801
 },
 {
  "id": "3461888",
  "name": "Guarapari",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 100925
 },
 {
  "id": "3461879",
  "name": "Guarapuava",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 150850
 },
 {
  "id": "3461859",
  "name": "Guaratingueta",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 105880
 },
 {
  "id": "3640049",
  "name": "Guarenas",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 181612
 },
 {
  "id": "3461789",
  "name": "Guaruja",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 310424
 },
 {
  "id": "3461786",
  "name": "Guarulhos",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 1169577
 },
 {
  "id": "3598132",
  "name": "Guatemala City",
  "tz": "America/Guatemala",
  "country": "GT",
  "population": 994938
 },
 {
  "id": "3639898",
  "name": "Guatire",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 191903
 },
 {
  "id": "3657509",
  "name": "Guayaquil",
  "tz": "America/Guayaquil",
  "country": "EC",
  "population": 1952029
 },
 {
  "id": "1270801",
  "name": "Gudivada",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 116161
 },
 {
  "id": "2495662",
  "name": "Guelma",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 123590
 },
 {
  "id": "5967629",
  "name": "Guelph",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 115760
 },
 {
  "id": "1809498",
  "name": "Guilin",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 649352
 },
 {
  "id": "1809461",
  "name": "Guiyang",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 1171633
 },
 {
  "id": "1177662",
  "name": "Gujranwala",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 1384471
 },
 {
  "id": "1177654",
  "name": "Gujrat",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 301506
 },
 {
  "id": "1270752",
  "name": "Gulbarga",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 483615
 },
 {
  "id": "1809412",
  "name": "Guli",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 536000
 },
 {
  "id": "233346",
  "name": "Gulu",
  "tz": "Africa/Kampala",
  "country": "UG",
  "population": 146858
 },
 {
  "id": "1842225",
  "name": "Gumi",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 291006
 },
 {
  "id": "1270711",
  "name": "Guna",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 153689
 },
 {
  "id": "1270670",
  "name": "Guntakal",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 120964
 },
 {
  "id": "1270668",
  "name": "Guntur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 530577
 },
 {
  "id": "1270642",
  "name": "Gurgaon",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 197340
 },
 {
  "id": "1841988",
  "name": "Guri-si",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 195236
 },
 {
  "id": "2339937",
  "name": "Gusau",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 226857
 },
 {
  "id": "3482969",
  "name": "Gustavo A. Madero",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 1185772
 },
 {
  "id": "3514674",
  "name": "Gustavo A. Madero",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 1193161
 },
 {
  "id": "1271476",
  "name": "Guwahati",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 899094
 },
 {
  "id": "1712051",
  "name": "Guyong",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 155391
 },
 {
  "id": "1270583",
  "name": "Gwalior",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 882458
 },
 {
  "id": "1841811",
  "name": "Gwangju",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 1416938
 },
 {
  "id": "890422",
  "name": "Gweru",
  "tz": "Africa/Harare",
  "country": "ZW",
  "population": 146073
 },
 {
  "id": "1841598",
  "name": "Gyeongsan-si",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 129903
 },
 {
  "id": "3052009",
  "name": "Gyor",
  "tz": "Europe/Budapest",
  "country": "HU",
  "population": 128265
 },
 {
  "id": "616635",
  "name": "Gyumri",
  "tz": "Asia/Yerevan",
  "country": "AM",
  "population": 148381
 },
 {
  "id": "2755003",
  "name": "Haarlem",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 147590
 },
 {
  "id": "3746181",
  "name": "Habana del Este",
  "tz": "America/Havana",
  "country": "CU",
  "population": 178041
 },
 {
  "id": "1270568",
  "name": "Habra",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 139297
 },
 {
  "id": "2130203",
  "name": "Hachinohe",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 239046
 },
 {
  "id": "1863440",
  "name": "Hachioji",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 579399
 },
 {
  "id": "1863431",
  "name": "Hadano",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 174281
 },
 {
  "id": "2339631",
  "name": "Hadejia",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 110753
 },
 {
  "id": "1877615",
  "name": "Haeju",
  "tz": "Asia/Pyongyang",
  "country": "KP",
  "population": 222396
 },
 {
  "id": "1177384",
  "name": "Hafizabad",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 153656
 },
 {
  "id": "2912621",
  "name": "Hagen",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 198972
 },
 {
  "id": "1711982",
  "name": "Hagonoy",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 123531
 },
 {
  "id": "2037086",
  "name": "Haicheng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 191651
 },
 {
  "id": "294801",
  "name": "Haifa",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 267300
 },
 {
  "id": "1809077",
  "name": "Haikou",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 112644
 },
 {
  "id": "1809078",
  "name": "Haikou",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 615835
 },
 {
  "id": "2037078",
  "name": "Hailar",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 211066
 },
 {
  "id": "2037069",
  "name": "Hailun",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 109881
 },
 {
  "id": "1809062",
  "name": "Haimen",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 125427
 },
 {
  "id": "1581298",
  "name": "Haiphong",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 602695
 },
 {
  "id": "1270525",
  "name": "Hajipur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 133606
 },
 {
  "id": "2130188",
  "name": "Hakodate",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 275730
 },
 {
  "id": "1344377",
  "name": "Haldia",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 170695
 },
 {
  "id": "1270498",
  "name": "Haldwani",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 139497
 },
 {
  "id": "6324729",
  "name": "Halifax",
  "tz": "America/Halifax",
  "country": "CA",
  "population": 359111
 },
 {
  "id": "1270484",
  "name": "Halisahar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 128172
 },
 {
  "id": "2911522",
  "name": "Halle (Saale)",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 234107
 },
 {
  "id": "7289614",
  "name": "Halle Neustadt",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 240000
 },
 {
  "id": "355795",
  "name": "Halwan",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 230000
 },
 {
  "id": "132144",
  "name": "Hamadan",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 528256
 },
 {
  "id": "170017",
  "name": "Hamah",
  "tz": "Asia/Damascus",
  "country": "SY",
  "population": 460602
 },
 {
  "id": "1863289",
  "name": "Hamamatsu",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 605098
 },
 {
  "id": "2911298",
  "name": "Hamburg",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 1739117
 },
 {
  "id": "2911288",
  "name": "Hamburg-Mitte",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 233144
 },
 {
  "id": "8354626",
  "name": "Hamburg-Nord",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 280000
 },
 {
  "id": "1877449",
  "name": "Hamhung",
  "tz": "Asia/Pyongyang",
  "country": "KP",
  "population": 559056
 },
 {
  "id": "1529484",
  "name": "Hami",
  "tz": "Asia/Urumqi",
  "country": "CN",
  "population": 137072
 },
 {
  "id": "5969782",
  "name": "Hamilton",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 519949
 },
 {
  "id": "2190324",
  "name": "Hamilton",
  "tz": "Pacific/Auckland",
  "country": "NZ",
  "population": 152641
 },
 {
  "id": "2911240",
  "name": "Hamm",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 185327
 },
 {
  "id": "4762894",
  "name": "Hampton",
  "tz": "America/New_York",
  "country": "US",
  "population": 137436
 },
 {
  "id": "1897007",
  "name": "Hanam",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 134902
 },
 {
  "id": "1863209",
  "name": "Handa",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 116119
 },
 {
  "id": "1808963",
  "name": "Handan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1358318
 },
 {
  "id": "1808931",
  "name": "Hangu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 208369
 },
 {
  "id": "1808926",
  "name": "Hangzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1878129
 },
 {
  "id": "2910831",
  "name": "Hannover",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 515140
 },
 {
  "id": "1581130",
  "name": "Hanoi",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 1431270
 },
 {
  "id": "1270407",
  "name": "Hanumangarh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 155687
 },
 {
  "id": "1808857",
  "name": "Hanzhong",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 145986
 },
 {
  "id": "1270396",
  "name": "Haora",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1027672
 },
 {
  "id": "1270393",
  "name": "Hapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 242920
 },
 {
  "id": "890299",
  "name": "Harare",
  "tz": "Africa/Harare",
  "country": "ZW",
  "population": 1542813
 },
 {
  "id": "2037013",
  "name": "Harbin",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 3229883
 },
 {
  "id": "2910685",
  "name": "Harburg",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 202571
 },
 {
  "id": "1270370",
  "name": "Hardoi",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 122635
 },
 {
  "id": "57289",
  "name": "Hargeysa",
  "tz": "Africa/Mogadishu",
  "country": "SO",
  "population": 477876
 },
 {
  "id": "1270351",
  "name": "Haridwar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 186079
 },
 {
  "id": "4835797",
  "name": "Hartford",
  "tz": "America/New_York",
  "country": "US",
  "population": 124775
 },
 {
  "id": "1270239",
  "name": "Hassan",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 128531
 },
 {
  "id": "1610780",
  "name": "Hat Yai",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 191696
 },
 {
  "id": "323779",
  "name": "Hatay",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 154803
 },
 {
  "id": "1270216",
  "name": "Hathras",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 126882
 },
 {
  "id": "3553478",
  "name": "Havana",
  "tz": "America/Havana",
  "country": "CU",
  "population": 2163824
 },
 {
  "id": "285629",
  "name": "Hawalli",
  "tz": "Asia/Kuwait",
  "country": "KW",
  "population": 164212
 },
 {
  "id": "343137",
  "name": "Hawassa",
  "tz": "Africa/Addis_Ababa",
  "country": "ET",
  "population": 133097
 },
 {
  "id": "106281",
  "name": "Hayil",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 267005
 },
 {
  "id": "5355933",
  "name": "Hayward",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 144186
 },
 {
  "id": "1270164",
  "name": "Hazaribag",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 140063
 },
 {
  "id": "1808770",
  "name": "Hebi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 244662
 },
 {
  "id": "285066",
  "name": "Hebron",
  "tz": "Asia/Hebron",
  "country": "PS",
  "population": 160470
 },
 {
  "id": "1808722",
  "name": "Hefei",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1388904
 },
 {
  "id": "2036986",
  "name": "Hegang",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 743307
 },
 {
  "id": "2907911",
  "name": "Heidelberg",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 143345
 },
 {
  "id": "2036973",
  "name": "Heihe",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 109427
 },
 {
  "id": "2907669",
  "name": "Heilbronn",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 120733
 },
 {
  "id": "658225",
  "name": "Helsinki",
  "tz": "Europe/Helsinki",
  "country": "FI",
  "population": 558457
 },
 {
  "id": "5505411",
  "name": "Henderson",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 257729
 },
 {
  "id": "1808392",
  "name": "Hengshui",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 456356
 },
 {
  "id": "1808370",
  "name": "Hengyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 759602
 },
 {
  "id": "1808336",
  "name": "Hepo",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 131238
 },
 {
  "id": "1140026",
  "name": "Herat",
  "tz": "Asia/Kabul",
  "country": "AF",
  "population": 272806
 },
 {
  "id": "4004898",
  "name": "Hermosillo",
  "tz": "America/Hermosillo",
  "country": "MX",
  "population": 595811
 },
 {
  "id": "2905891",
  "name": "Herne",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 172108
 },
 {
  "id": "4005143",
  "name": "Heroica Guaymas",
  "tz": "America/Hermosillo",
  "country": "MX",
  "population": 103449
 },
 {
  "id": "3523466",
  "name": "Heroica Matamoros",
  "tz": "America/Matamoros",
  "country": "MX",
  "population": 449815
 },
 {
  "id": "1808198",
  "name": "Heze",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 254602
 },
 {
  "id": "4158476",
  "name": "Hialeah",
  "tz": "America/New_York",
  "country": "US",
  "population": 224669
 },
 {
  "id": "4004867",
  "name": "Hidalgo del Parral",
  "tz": "America/Chihuahua",
  "country": "MX",
  "population": 101768
 },
 {
  "id": "7279570",
  "name": "Higashimurayama-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 150556
 },
 {
  "id": "4471025",
  "name": "High Point",
  "tz": "America/New_York",
  "country": "US",
  "population": 104371
 },
 {
  "id": "1862636",
  "name": "Hikone",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 110925
 },
 {
  "id": "2904789",
  "name": "Hildesheim",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 103052
 },
 {
  "id": "1862627",
  "name": "Himeji",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 481493
 },
 {
  "id": "1270079",
  "name": "Hindupur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 133298
 },
 {
  "id": "1862599",
  "name": "Hino",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 171777
 },
 {
  "id": "1325211",
  "name": "Hinthada",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 134947
 },
 {
  "id": "1862540",
  "name": "Hirakata",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 406331
 },
 {
  "id": "1862462",
  "name": "Hiratsuka",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 259052
 },
 {
  "id": "2130057",
  "name": "Hirosaki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 174972
 },
 {
  "id": "1862415",
  "name": "Hiroshima-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 1143841
 },
 {
  "id": "1270022",
  "name": "Hisar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 296436
 },
 {
  "id": "2112708",
  "name": "Hitachi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 186307
 },
 {
  "id": "6822096",
  "name": "Hitachi-Naka",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 156811
 },
 {
  "id": "1566083",
  "name": "Ho Chi Minh City",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 3467331
 },
 {
  "id": "2163355",
  "name": "Hobart",
  "tz": "Australia/Hobart",
  "country": "AU",
  "population": 216656
 },
 {
  "id": "1862302",
  "name": "Hofu",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 116925
 },
 {
  "id": "2036892",
  "name": "Hohhot",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 774477
 },
 {
  "id": "3556969",
  "name": "Holguin",
  "tz": "America/Havana",
  "country": "CU",
  "population": 319102
 },
 {
  "id": "4158928",
  "name": "Hollywood",
  "tz": "America/New_York",
  "country": "US",
  "population": 140768
 },
 {
  "id": "5357527",
  "name": "Hollywood",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 167664
 },
 {
  "id": "294751",
  "name": "Holon",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 165787
 },
 {
  "id": "169577",
  "name": "Homs",
  "tz": "Asia/Damascus",
  "country": "SY",
  "population": 775404
 },
 {
  "id": "1819729",
  "name": "Hong Kong",
  "tz": "Asia/Hong_Kong",
  "country": "HK",
  "population": 7012738
 },
 {
  "id": "2036876",
  "name": "Honggang",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 147977
 },
 {
  "id": "5856195",
  "name": "Honolulu",
  "tz": "Pacific/Honolulu",
  "country": "US",
  "population": 371657
 },
 {
  "id": "2753801",
  "name": "Hoofddorp",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 132734
 },
 {
  "id": "630376",
  "name": "Horad Barysaw",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 100000
 },
 {
  "id": "707753",
  "name": "Horlivka",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 278550
 },
 {
  "id": "6544103",
  "name": "Horta-Guinardo",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 169920
 },
 {
  "id": "3120635",
  "name": "Hortaleza",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 161661
 },
 {
  "id": "3461655",
  "name": "Hortolandia",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 203533
 },
 {
  "id": "1269939",
  "name": "Hoshangabad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 109358
 },
 {
  "id": "1269937",
  "name": "Hoshiarpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 158142
 },
 {
  "id": "1269935",
  "name": "Hospet",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 197846
 },
 {
  "id": "1269934",
  "name": "Hosur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 103724
 },
 {
  "id": "1281019",
  "name": "Hotan",
  "tz": "Asia/Kashgar",
  "country": "CN",
  "population": 114000
 },
 {
  "id": "4699066",
  "name": "Houston",
  "tz": "America/Chicago",
  "country": "US",
  "population": 2099451
 },
 {
  "id": "627904",
  "name": "Hrodna",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 317365
 },
 {
  "id": "1675151",
  "name": "Hsinchu",
  "tz": "Asia/Taipei",
  "country": "TW",
  "population": 404109
 },
 {
  "id": "G5",
  "name": "HST - Hawaii Standard Time",
  "tz": "HST",
  "country": null,
  "population": null
 },
 {
  "id": "2036776",
  "name": "Huadian",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 139047
 },
 {
  "id": "1797873",
  "name": "Huai'an",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 555230
 },
 {
  "id": "1807700",
  "name": "Huaibei",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 903039
 },
 {
  "id": "1807689",
  "name": "Huaihua",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 127322
 },
 {
  "id": "1807681",
  "name": "Huainan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1027655
 },
 {
  "id": "1674504",
  "name": "Hualian",
  "tz": "Asia/Taipei",
  "country": "TW",
  "population": 350468
 },
 {
  "id": "3348313",
  "name": "Huambo",
  "tz": "Africa/Luanda",
  "country": "AO",
  "population": 226145
 },
 {
  "id": "3939459",
  "name": "Huancayo",
  "tz": "America/Lima",
  "country": "PE",
  "population": 376657
 },
 {
  "id": "1807508",
  "name": "Huanggang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 225956
 },
 {
  "id": "1807234",
  "name": "Huangshi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 688090
 },
 {
  "id": "1807143",
  "name": "Huangyan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 150448
 },
 {
  "id": "1807112",
  "name": "Huangzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 122563
 },
 {
  "id": "3696417",
  "name": "Huanuco",
  "tz": "America/Lima",
  "country": "PE",
  "population": 147959
 },
 {
  "id": "1269920",
  "name": "Hubli",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 840214
 },
 {
  "id": "2646458",
  "name": "Huddersfield",
  "tz": "Europe/London",
  "country": "GB",
  "population": 149017
 },
 {
  "id": "1580240",
  "name": "Hue",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 287217
 },
 {
  "id": "2516548",
  "name": "Huelva",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 148806
 },
 {
  "id": "1269910",
  "name": "Hugli",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 177005
 },
 {
  "id": "1806881",
  "name": "Huicheng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 125919
 },
 {
  "id": "3827414",
  "name": "Huixquilucan",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 124846
 },
 {
  "id": "1806776",
  "name": "Huizhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 289201
 },
 {
  "id": "2036671",
  "name": "Hulan",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 109104
 },
 {
  "id": "2036670",
  "name": "Hulan Ergi",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 265344
 },
 {
  "id": "2645425",
  "name": "Hull",
  "tz": "Europe/London",
  "country": "GB",
  "population": 302296
 },
 {
  "id": "1806696",
  "name": "Humen",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 191891
 },
 {
  "id": "1877030",
  "name": "Hungnam",
  "tz": "Asia/Pyongyang",
  "country": "KP",
  "population": 346082
 },
 {
  "id": "5358705",
  "name": "Huntington Beach",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 189992
 },
 {
  "id": "4068590",
  "name": "Huntsville",
  "tz": "America/Chicago",
  "country": "US",
  "population": 180105
 },
 {
  "id": "1806535",
  "name": "Huzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 158320
 },
 {
  "id": "1897118",
  "name": "Hwado",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 106358
 },
 {
  "id": "1843847",
  "name": "Hwaseong-si",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 476297
 },
 {
  "id": "1269843",
  "name": "Hyderabad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 3597816
 },
 {
  "id": "1176734",
  "name": "Hyderabad",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 1386330
 },
 {
  "id": "2043837",
  "name": "Hyesan-si",
  "tz": "Asia/Pyongyang",
  "country": "KP",
  "population": 192680
 },
 {
  "id": "675810",
  "name": "Iasi",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 318012
 },
 {
  "id": "2339354",
  "name": "Ibadan",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 3565108
 },
 {
  "id": "3680656",
  "name": "Ibague",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 421685
 },
 {
  "id": "1862033",
  "name": "Ibaraki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 273992
 },
 {
  "id": "3655673",
  "name": "Ibarra",
  "tz": "America/Guayaquil",
  "country": "EC",
  "population": 132977
 },
 {
  "id": "74477",
  "name": "Ibb",
  "tz": "Asia/Aden",
  "country": "YE",
  "population": 234837
 },
 {
  "id": "3461563",
  "name": "Ibirite",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 141374
 },
 {
  "id": "3938527",
  "name": "Ica",
  "tz": "America/Lima",
  "country": "PE",
  "population": 246844
 },
 {
  "id": "1269834",
  "name": "Ichalkaranji",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 274383
 },
 {
  "id": "1843702",
  "name": "Icheon-si",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 196230
 },
 {
  "id": "2112664",
  "name": "Ichihara",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 283531
 },
 {
  "id": "1861949",
  "name": "Ichinomiya",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 280331
 },
 {
  "id": "411165",
  "name": "Idfu",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 166102
 },
 {
  "id": "355628",
  "name": "Idku",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 105599
 },
 {
  "id": "169389",
  "name": "Idlib",
  "tz": "Asia/Damascus",
  "country": "SY",
  "population": 128840
 },
 {
  "id": "2338711",
  "name": "Igboho",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 136764
 },
 {
  "id": "3526798",
  "name": "Iguala de la Independencia",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 112106
 },
 {
  "id": "1861864",
  "name": "Iida",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 107111
 },
 {
  "id": "2338403",
  "name": "Ijebu-Igbo",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 109261
 },
 {
  "id": "2338400",
  "name": "Ijebu-Ode",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 209175
 },
 {
  "id": "2338385",
  "name": "Ijero-Ekiti",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 167632
 },
 {
  "id": "2338313",
  "name": "Ikeja",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 313196
 },
 {
  "id": "2338287",
  "name": "Ikerre",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 103054
 },
 {
  "id": "2338273",
  "name": "Ikire",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 222160
 },
 {
  "id": "2338269",
  "name": "Ikirun",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 134240
 },
 {
  "id": "1861749",
  "name": "Ikoma",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 117601
 },
 {
  "id": "2338106",
  "name": "Ikot-Ekpene",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 254806
 },
 {
  "id": "1843491",
  "name": "Iksan",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 283501
 },
 {
  "id": "2337765",
  "name": "Ila Orangun",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 179192
 },
 {
  "id": "130802",
  "name": "Ilam",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 140940
 },
 {
  "id": "215976",
  "name": "Ilebo",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 107093
 },
 {
  "id": "2337704",
  "name": "Ilesa",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 277904
 },
 {
  "id": "3461408",
  "name": "Ilheus",
  "tz": "America/Bahia",
  "country": "BR",
  "population": 155499
 },
 {
  "id": "1711082",
  "name": "Iligan City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 312323
 },
 {
  "id": "2337659",
  "name": "Ilobu",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 118089
 },
 {
  "id": "1711005",
  "name": "Iloilo",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 387681
 },
 {
  "id": "2337639",
  "name": "Ilorin",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 814192
 },
 {
  "id": "3398269",
  "name": "Imperatriz",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 218106
 },
 {
  "id": "1269771",
  "name": "Imphal",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 223523
 },
 {
  "id": "1710914",
  "name": "Imus",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 216099
 },
 {
  "id": "1861602",
  "name": "Inazawa",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 102130
 },
 {
  "id": "1843564",
  "name": "Incheon",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 2628000
 },
 {
  "id": "3461311",
  "name": "Indaiatuba",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 179911
 },
 {
  "id": "4391812",
  "name": "Independence",
  "tz": "America/Chicago",
  "country": "US",
  "population": 116830
 },
 {
  "id": "4259418",
  "name": "Indianapolis",
  "tz": "America/Indiana/Indianapolis",
  "country": "US",
  "population": 829718
 },
 {
  "id": "1269743",
  "name": "Indore",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1837041
 },
 {
  "id": "1643078",
  "name": "Indramayu",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 123263
 },
 {
  "id": "745169",
  "name": "Inegol",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 133959
 },
 {
  "id": "5359488",
  "name": "Inglewood",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 109673
 },
 {
  "id": "2895992",
  "name": "Ingolstadt",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 120658
 },
 {
  "id": "1269723",
  "name": "Ingraj Bazar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 170039
 },
 {
  "id": "2337490",
  "name": "Inisa",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 164161
 },
 {
  "id": "2775220",
  "name": "Innsbruck",
  "tz": "Europe/Vienna",
  "country": "AT",
  "population": 112467
 },
 {
  "id": "3461144",
  "name": "Ipatinga",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 228746
 },
 {
  "id": "1734634",
  "name": "Ipoh",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 673318
 },
 {
  "id": "2646057",
  "name": "Ipswich",
  "tz": "Europe/London",
  "country": "GB",
  "population": 143767
 },
 {
  "id": "3887127",
  "name": "Iquique",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 227499
 },
 {
  "id": "3696183",
  "name": "Iquitos",
  "tz": "America/Lima",
  "country": "PE",
  "population": 437620
 },
 {
  "id": "261745",
  "name": "Irakleion",
  "tz": "Europe/Athens",
  "country": "GR",
  "population": 137154
 },
 {
  "id": "1160939",
  "name": "Iranshahr",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 131232
 },
 {
  "id": "4004330",
  "name": "Irapuato",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 339554
 },
 {
  "id": "248946",
  "name": "Irbid",
  "tz": "Asia/Amman",
  "country": "JO",
  "population": 307480
 },
 {
  "id": "159071",
  "name": "Iringa",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 111820
 },
 {
  "id": "2023469",
  "name": "Irkutsk",
  "tz": "Asia/Irkutsk",
  "country": "RU",
  "population": 586695
 },
 {
  "id": "4295940",
  "name": "Ironville",
  "tz": "America/New_York",
  "country": "US",
  "population": 288649
 },
 {
  "id": "5359777",
  "name": "Irvine",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 212375
 },
 {
  "id": "4700168",
  "name": "Irving",
  "tz": "America/Chicago",
  "country": "US",
  "population": 216290
 },
 {
  "id": "2337207",
  "name": "Ise-Ekiti",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 190063
 },
 {
  "id": "1861449",
  "name": "Isehara",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 103401
 },
 {
  "id": "1861436",
  "name": "Isesaki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 130692
 },
 {
  "id": "418863",
  "name": "Isfahan",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 1547164
 },
 {
  "id": "2112576",
  "name": "Ishinomaki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 117233
 },
 {
  "id": "215771",
  "name": "Isiro",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 127076
 },
 {
  "id": "311111",
  "name": "Iskenderun",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 159965
 },
 {
  "id": "1176615",
  "name": "Islamabad",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 601600
 },
 {
  "id": "2646003",
  "name": "Islington",
  "tz": "Europe/London",
  "country": "GB",
  "population": 319143
 },
 {
  "id": "361055",
  "name": "Ismailia",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 284813
 },
 {
  "id": "311073",
  "name": "Isparta",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 172334
 },
 {
  "id": "745044",
  "name": "Istanbul",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 11174257
 },
 {
  "id": "3460950",
  "name": "Itaborai",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 182498
 },
 {
  "id": "3460949",
  "name": "Itabuna",
  "tz": "America/Bahia",
  "country": "BR",
  "population": 205660
 },
 {
  "id": "3460899",
  "name": "Itaguai",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 100752
 },
 {
  "id": "3680450",
  "name": "Itagui",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 281853
 },
 {
  "id": "3460845",
  "name": "Itajai",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 155716
 },
 {
  "id": "1861310",
  "name": "Itami",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 193524
 },
 {
  "id": "3460748",
  "name": "Itapecerica da Serra",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 151605
 },
 {
  "id": "3460728",
  "name": "Itapetininga",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 126243
 },
 {
  "id": "3460718",
  "name": "Itapevi",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 201748
 },
 {
  "id": "3460644",
  "name": "Itaquaquecetuba",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 336679
 },
 {
  "id": "1269653",
  "name": "Itarsi",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 100574
 },
 {
  "id": "3460535",
  "name": "Itu",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 137586
 },
 {
  "id": "707471",
  "name": "Ivano-Frankivs'k",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 204200
 },
 {
  "id": "555312",
  "name": "Ivanovo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 420839
 },
 {
  "id": "555129",
  "name": "Ivanovskoye",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 128000
 },
 {
  "id": "2112539",
  "name": "Iwaki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 357309
 },
 {
  "id": "1861212",
  "name": "Iwakuni",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 104004
 },
 {
  "id": "1861164",
  "name": "Iwatsuki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 108833
 },
 {
  "id": "2336905",
  "name": "Iwo",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 250443
 },
 {
  "id": "3526682",
  "name": "Ixtapaluca",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 351001
 },
 {
  "id": "554840",
  "name": "Izhevsk",
  "tz": "Europe/Samara",
  "country": "RU",
  "population": 631038
 },
 {
  "id": "554787",
  "name": "Izmaylovo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 104000
 },
 {
  "id": "311046",
  "name": "Izmir",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 2500603
 },
 {
  "id": "745028",
  "name": "Izmit",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 196571
 },
 {
  "id": "3526700",
  "name": "Iztacalco",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 384326
 },
 {
  "id": "3526683",
  "name": "Iztapalapa",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 1820888
 },
 {
  "id": "1861107",
  "name": "Izumi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 189085
 },
 {
  "id": "1269633",
  "name": "Jabalpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1030168
 },
 {
  "id": "281129",
  "name": "Jabalya",
  "tz": "Asia/Gaza",
  "country": "PS",
  "population": 168568
 },
 {
  "id": "3397838",
  "name": "Jaboatao",
  "tz": "America/Recife",
  "country": "BR",
  "population": 702621
 },
 {
  "id": "6317344",
  "name": "Jaboatao dos Guararapes",
  "tz": "America/Recife",
  "country": "BR",
  "population": 630008
 },
 {
  "id": "3460370",
  "name": "Jacarei",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 213110
 },
 {
  "id": "4431410",
  "name": "Jackson",
  "tz": "America/Chicago",
  "country": "US",
  "population": 173514
 },
 {
  "id": "4160021",
  "name": "Jacksonville",
  "tz": "America/New_York",
  "country": "US",
  "population": 821784
 },
 {
  "id": "3723779",
  "name": "Jacmel",
  "tz": "America/Port-au-Prince",
  "country": "HT",
  "population": 137966
 },
 {
  "id": "1176515",
  "name": "Jacobabad",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 170588
 },
 {
  "id": "2516395",
  "name": "Jaen",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 116557
 },
 {
  "id": "1242833",
  "name": "Jaffna",
  "tz": "Asia/Colombo",
  "country": "LK",
  "population": 169102
 },
 {
  "id": "1269605",
  "name": "Jagadhri",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 101300
 },
 {
  "id": "2036597",
  "name": "Jagdaqi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 135760
 },
 {
  "id": "7284820",
  "name": "Jaigaon",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 158664
 },
 {
  "id": "1269515",
  "name": "Jaipur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 2711758
 },
 {
  "id": "1642911",
  "name": "Jakarta",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 8540121
 },
 {
  "id": "2036595",
  "name": "Jalai Nur",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 107828
 },
 {
  "id": "1139715",
  "name": "Jalalabad",
  "tz": "Asia/Kabul",
  "country": "AF",
  "population": 200331
 },
 {
  "id": "1268782",
  "name": "Jalandhar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 785178
 },
 {
  "id": "1269407",
  "name": "Jalgaon",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 429298
 },
 {
  "id": "2336589",
  "name": "Jalingo",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 117757
 },
 {
  "id": "1269395",
  "name": "Jalna",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 262034
 },
 {
  "id": "1269388",
  "name": "Jalpaiguri",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 107832
 },
 {
  "id": "56399",
  "name": "Jamaame",
  "tz": "Africa/Mogadishu",
  "country": "SO",
  "population": 185270
 },
 {
  "id": "5122520",
  "name": "Jamaica",
  "tz": "America/New_York",
  "country": "US",
  "population": 216866
 },
 {
  "id": "1185106",
  "name": "Jamalpur",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 167900
 },
 {
  "id": "1269374",
  "name": "Jamalpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 100780
 },
 {
  "id": "1642858",
  "name": "Jambi City",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 420323
 },
 {
  "id": "1269321",
  "name": "Jammu",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 465567
 },
 {
  "id": "1269317",
  "name": "Jamnagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 492056
 },
 {
  "id": "1269300",
  "name": "Jamshedpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 616338
 },
 {
  "id": "1269280",
  "name": "Jamuria",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 160242
 },
 {
  "id": "3460170",
  "name": "Jandira",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 113605
 },
 {
  "id": "3460102",
  "name": "Jaragua do Sul",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 130130
 },
 {
  "id": "1176106",
  "name": "Jaranwala",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 119785
 },
 {
  "id": "3460005",
  "name": "Jau",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 119206
 },
 {
  "id": "1269135",
  "name": "Jaunpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 169572
 },
 {
  "id": "2082600",
  "name": "Jayapura",
  "tz": "Asia/Jayapura",
  "country": "ID",
  "population": 134895
 },
 {
  "id": "105343",
  "name": "Jeddah",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 2867446
 },
 {
  "id": "1846266",
  "name": "Jeju-si",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 408364
 },
 {
  "id": "1642588",
  "name": "Jember",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 298585
 },
 {
  "id": "2895044",
  "name": "Jena",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 104712
 },
 {
  "id": "1845457",
  "name": "Jeonju",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 711424
 },
 {
  "id": "3459943",
  "name": "Jequie",
  "tz": "America/Bahia",
  "country": "BR",
  "population": 127475
 },
 {
  "id": "2516326",
  "name": "Jerez de la Frontera",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 207532
 },
 {
  "id": "5099836",
  "name": "Jersey City",
  "tz": "America/New_York",
  "country": "US",
  "population": 247597
 },
 {
  "id": "281184",
  "name": "Jerusalem",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 801000
 },
 {
  "id": "1336140",
  "name": "Jessore",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 243987
 },
 {
  "id": "1269065",
  "name": "Jetpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 118068
 },
 {
  "id": "1175892",
  "name": "Jhang Sadr",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 341210
 },
 {
  "id": "1269006",
  "name": "Jhansi",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 412927
 },
 {
  "id": "1175864",
  "name": "Jhelum",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 164080
 },
 {
  "id": "1268936",
  "name": "Jhunjhunun",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 113193
 },
 {
  "id": "3925033",
  "name": "Ji Parana",
  "tz": "America/Porto_Velho",
  "country": "BR",
  "population": 107697
 },
 {
  "id": "1806445",
  "name": "Ji'an",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 245000
 },
 {
  "id": "2036581",
  "name": "Jiamusi",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 549549
 },
 {
  "id": "1806299",
  "name": "Jiangmen",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 532419
 },
 {
  "id": "1885823",
  "name": "Jiangyou",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 127225
 },
 {
  "id": "2036536",
  "name": "Jiaohe",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 123018
 },
 {
  "id": "1809061",
  "name": "Jiaojiang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 470804
 },
 {
  "id": "1806096",
  "name": "Jiaozhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 165026
 },
 {
  "id": "1805987",
  "name": "Jiaozuo",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 517540
 },
 {
  "id": "7303248",
  "name": "Jiashan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 137112
 },
 {
  "id": "1805953",
  "name": "Jiaxing",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 466101
 },
 {
  "id": "1280957",
  "name": "Jiayuguan",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 122396
 },
 {
  "id": "1805935",
  "name": "Jiazi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 130298
 },
 {
  "id": "1805857",
  "name": "Jieshi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 137444
 },
 {
  "id": "1805844",
  "name": "Jieshou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 141993
 },
 {
  "id": "1797121",
  "name": "Jieyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1001985
 },
 {
  "id": "2492913",
  "name": "Jijel",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 148000
 },
 {
  "id": "2036502",
  "name": "Jilin",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 1881977
 },
 {
  "id": "333772",
  "name": "Jima",
  "tz": "Africa/Addis_Ababa",
  "country": "ET",
  "population": 128306
 },
 {
  "id": "2336056",
  "name": "Jimeta",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 248148
 },
 {
  "id": "1805753",
  "name": "Jinan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 2069266
 },
 {
  "id": "1805733",
  "name": "Jinchang",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 144363
 },
 {
  "id": "1805741",
  "name": "Jincheng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 332650
 },
 {
  "id": "1268907",
  "name": "Jind",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 161260
 },
 {
  "id": "1805680",
  "name": "Jingdezhen",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 310565
 },
 {
  "id": "1805618",
  "name": "Jingling",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 224871
 },
 {
  "id": "1805611",
  "name": "Jingmen",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 167750
 },
 {
  "id": "1805540",
  "name": "Jingzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 177878
 },
 {
  "id": "1805528",
  "name": "Jinhua",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 142206
 },
 {
  "id": "1805518",
  "name": "Jining",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 450327
 },
 {
  "id": "2036458",
  "name": "Jining",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 258757
 },
 {
  "id": "1805298",
  "name": "Jinzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 215386
 },
 {
  "id": "2036427",
  "name": "Jinzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 604269
 },
 {
  "id": "355026",
  "name": "Jirja",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 128250
 },
 {
  "id": "2036418",
  "name": "Jishu",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 103988
 },
 {
  "id": "1805179",
  "name": "Jiujiang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 258807
 },
 {
  "id": "2036403",
  "name": "Jiupu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 123843
 },
 {
  "id": "2036401",
  "name": "Jiutai",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 175115
 },
 {
  "id": "3526485",
  "name": "Jiutepec",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 162427
 },
 {
  "id": "2036389",
  "name": "Jixi",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 403759
 },
 {
  "id": "105299",
  "name": "Jizan",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 105198
 },
 {
  "id": "1513886",
  "name": "Jizzax",
  "tz": "Asia/Samarkand",
  "country": "UZ",
  "population": 152642
 },
 {
  "id": "3397277",
  "name": "Joao Pessoa",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 650883
 },
 {
  "id": "1268865",
  "name": "Jodhpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 921476
 },
 {
  "id": "6825489",
  "name": "Joetsu",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 204137
 },
 {
  "id": "993800",
  "name": "Johannesburg",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 2026469
 },
 {
  "id": "1732752",
  "name": "Johor Bahru",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 802489
 },
 {
  "id": "3459712",
  "name": "Joinville",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 461304
 },
 {
  "id": "4898015",
  "name": "Joliet",
  "tz": "America/Chicago",
  "country": "US",
  "population": 147433
 },
 {
  "id": "1710141",
  "name": "Jolo",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 101002
 },
 {
  "id": "1642414",
  "name": "Jombang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 126465
 },
 {
  "id": "2335953",
  "name": "Jos",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 816824
 },
 {
  "id": "3397147",
  "name": "Juazeiro do Norte",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 225230
 },
 {
  "id": "373303",
  "name": "Juba",
  "tz": "Africa/Juba",
  "country": "SS",
  "population": 300000
 },
 {
  "id": "3459505",
  "name": "Juiz de Fora",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 470193
 },
 {
  "id": "3937513",
  "name": "Juliaca",
  "tz": "America/Lima",
  "country": "PE",
  "population": 245675
 },
 {
  "id": "1268773",
  "name": "Junagadh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 184447
 },
 {
  "id": "3459462",
  "name": "Jundiai",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 321589
 },
 {
  "id": "613607",
  "name": "K'ut'aisi",
  "tz": "Asia/Tbilisi",
  "country": "GE",
  "population": 178338
 },
 {
  "id": "1709968",
  "name": "Kabankalan",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 136483
 },
 {
  "id": "1138958",
  "name": "Kabul",
  "tz": "Asia/Kabul",
  "country": "AF",
  "population": 3043532
 },
 {
  "id": "916095",
  "name": "Kabwe",
  "tz": "Africa/Lusaka",
  "country": "ZM",
  "population": 188979
 },
 {
  "id": "1860871",
  "name": "Kadoma",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 131727
 },
 {
  "id": "2335727",
  "name": "Kaduna",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 1582102
 },
 {
  "id": "1876373",
  "name": "Kaesong",
  "tz": "Asia/Pyongyang",
  "country": "KP",
  "population": 338155
 },
 {
  "id": "354775",
  "name": "Kafr ad Dawwar",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 267370
 },
 {
  "id": "354502",
  "name": "Kafr ash Shaykh",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 143970
 },
 {
  "id": "1860827",
  "name": "Kagoshima-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 555352
 },
 {
  "id": "310859",
  "name": "Kahramanmaras",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 376045
 },
 {
  "id": "23814",
  "name": "Kahriz",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 766706
 },
 {
  "id": "1804879",
  "name": "Kaifeng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 4800000
 },
 {
  "id": "2473449",
  "name": "Kairouan",
  "tz": "Africa/Tunis",
  "country": "TN",
  "population": 119794
 },
 {
  "id": "1268593",
  "name": "Kaithal",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 140604
 },
 {
  "id": "1804850",
  "name": "Kaiyuan",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 198423
 },
 {
  "id": "2036337",
  "name": "Kaiyuan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 112462
 },
 {
  "id": "1860735",
  "name": "Kakamigahara",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 132241
 },
 {
  "id": "1268561",
  "name": "Kakinada",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 292923
 },
 {
  "id": "1860704",
  "name": "Kakogawa",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 271634
 },
 {
  "id": "214974",
  "name": "Kalemie",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 146974
 },
 {
  "id": "554234",
  "name": "Kaliningrad",
  "tz": "Europe/Kaliningrad",
  "country": "RU",
  "population": 434954
 },
 {
  "id": "8504951",
  "name": "Kalininskiy",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 504641
 },
 {
  "id": "3096880",
  "name": "Kalisz",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 108759
 },
 {
  "id": "261414",
  "name": "Kallithea",
  "tz": "Europe/Athens",
  "country": "GR",
  "population": 107767
 },
 {
  "id": "1242110",
  "name": "Kalmunai",
  "tz": "Asia/Colombo",
  "country": "LK",
  "population": 100171
 },
 {
  "id": "553915",
  "name": "Kaluga",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 338978
 },
 {
  "id": "1268295",
  "name": "Kalyan",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1262255
 },
 {
  "id": "1860672",
  "name": "Kamakura",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 166016
 },
 {
  "id": "1175156",
  "name": "Kamalia",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 112426
 },
 {
  "id": "1268257",
  "name": "Kamarhati",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 332965
 },
 {
  "id": "1504826",
  "name": "Kamensk-Ural'skiy",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 182500
 },
 {
  "id": "706950",
  "name": "Kamieniec Podolski",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 100000
 },
 {
  "id": "1860437",
  "name": "Kamirenjaku",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 178739
 },
 {
  "id": "1175088",
  "name": "Kamoke",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 199531
 },
 {
  "id": "232422",
  "name": "Kampala",
  "tz": "Africa/Kampala",
  "country": "UG",
  "population": 1353189
 },
 {
  "id": "1771023",
  "name": "Kampung Baru Subang",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 833571
 },
 {
  "id": "1732721",
  "name": "Kampung Pasir Gudang Baru",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 145639
 },
 {
  "id": "1764160",
  "name": "Kampung Sungai Ara",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 140849
 },
 {
  "id": "553287",
  "name": "Kamyshin",
  "tz": "Europe/Volgograd",
  "country": "RU",
  "population": 128626
 },
 {
  "id": "214481",
  "name": "Kananga",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 463546
 },
 {
  "id": "1860243",
  "name": "Kanazawa-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 458937
 },
 {
  "id": "1268159",
  "name": "Kanchipuram",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 155029
 },
 {
  "id": "1268715",
  "name": "Kanchrapara",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 136954
 },
 {
  "id": "1138336",
  "name": "Kandahar",
  "tz": "Asia/Kabul",
  "country": "AF",
  "population": 391190
 },
 {
  "id": "2393693",
  "name": "Kandi",
  "tz": "Africa/Porto-Novo",
  "country": "BJ",
  "population": 109701
 },
 {
  "id": "1241622",
  "name": "Kandy",
  "tz": "Asia/Colombo",
  "country": "LK",
  "population": 111701
 },
 {
  "id": "1843137",
  "name": "Kang-neung",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 180611
 },
 {
  "id": "1802171",
  "name": "Kangding",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 100000
 },
 {
  "id": "2043572",
  "name": "Kanggye-si",
  "tz": "Asia/Pyongyang",
  "country": "KP",
  "population": 209530
 },
 {
  "id": "2419992",
  "name": "Kankan",
  "tz": "Africa/Conakry",
  "country": "GN",
  "population": 114009
 },
 {
  "id": "2335204",
  "name": "Kano",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 3626068
 },
 {
  "id": "1267995",
  "name": "Kanpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 2823249
 },
 {
  "id": "4273837",
  "name": "Kansas City",
  "tz": "America/Chicago",
  "country": "US",
  "population": 145786
 },
 {
  "id": "4393217",
  "name": "Kansas City",
  "tz": "America/Chicago",
  "country": "US",
  "population": 459787
 },
 {
  "id": "1504682",
  "name": "Kansk",
  "tz": "Asia/Krasnoyarsk",
  "country": "RU",
  "population": 101502
 },
 {
  "id": "1673820",
  "name": "Kaohsiung",
  "tz": "Asia/Taipei",
  "country": "TW",
  "population": 1519711
 },
 {
  "id": "2250805",
  "name": "Kaolack",
  "tz": "Africa/Dakar",
  "country": "SN",
  "population": 172305
 },
 {
  "id": "2366152",
  "name": "Kara",
  "tz": "Africa/Lome",
  "country": "TG",
  "population": 104207
 },
 {
  "id": "7701384",
  "name": "Karabaglar",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 458000
 },
 {
  "id": "1174872",
  "name": "Karachi",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 11624219
 },
 {
  "id": "609655",
  "name": "Karagandy",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 451800
 },
 {
  "id": "128747",
  "name": "Karaj",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 1448075
 },
 {
  "id": "309527",
  "name": "Karaman",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 120399
 },
 {
  "id": "94824",
  "name": "Karbala",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 434450
 },
 {
  "id": "1267755",
  "name": "Karimnagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 228745
 },
 {
  "id": "1860034",
  "name": "Kariya",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 139159
 },
 {
  "id": "2892794",
  "name": "Karlsruhe",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 283799
 },
 {
  "id": "1267708",
  "name": "Karnal",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 225049
 },
 {
  "id": "1267696",
  "name": "Karol Bagh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 505241
 },
 {
  "id": "128477",
  "name": "Kashan",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 272359
 },
 {
  "id": "1280849",
  "name": "Kashi",
  "tz": "Asia/Kashgar",
  "country": "CN",
  "population": 274717
 },
 {
  "id": "1859951",
  "name": "Kashihara-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 124521
 },
 {
  "id": "1267579",
  "name": "Kashipur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 103138
 },
 {
  "id": "1859924",
  "name": "Kashiwa",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 340221
 },
 {
  "id": "372753",
  "name": "Kassala",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 401477
 },
 {
  "id": "2892518",
  "name": "Kassel",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 194501
 },
 {
  "id": "1859891",
  "name": "Kasugai",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 298589
 },
 {
  "id": "1859884",
  "name": "Kasukabe",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 206915
 },
 {
  "id": "1174625",
  "name": "Kasur",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 290643
 },
 {
  "id": "1283240",
  "name": "Kathmandu",
  "tz": "Asia/Kathmandu",
  "country": "NP",
  "population": 1442271
 },
 {
  "id": "1267480",
  "name": "Katihar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 192555
 },
 {
  "id": "3096472",
  "name": "Katowice",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 317316
 },
 {
  "id": "2334802",
  "name": "Katsina",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 432149
 },
 {
  "id": "2112312",
  "name": "Katsuta",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 155968
 },
 {
  "id": "158151",
  "name": "Katumba",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 108558
 },
 {
  "id": "598316",
  "name": "Kaunas",
  "tz": "Europe/Vilnius",
  "country": "LT",
  "population": 374643
 },
 {
  "id": "1859740",
  "name": "Kawagoe",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 337931
 },
 {
  "id": "1859730",
  "name": "Kawaguchi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 468565
 },
 {
  "id": "1859675",
  "name": "Kawanishi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 160520
 },
 {
  "id": "1859642",
  "name": "Kawasaki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 1306785
 },
 {
  "id": "308464",
  "name": "Kayseri",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 592840
 },
 {
  "id": "551487",
  "name": "Kazan",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 1104738
 },
 {
  "id": "3050434",
  "name": "Kecskemet",
  "tz": "Europe/Budapest",
  "country": "HU",
  "population": 109847
 },
 {
  "id": "1640660",
  "name": "Kediri",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 235143
 },
 {
  "id": "1640581",
  "name": "Kedungwuni",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 117249
 },
 {
  "id": "1678228",
  "name": "Keelung",
  "tz": "Asia/Taipei",
  "country": "TW",
  "population": 397515
 },
 {
  "id": "5990579",
  "name": "Kelowna",
  "tz": "America/Vancouver",
  "country": "CA",
  "population": 125109
 },
 {
  "id": "1503901",
  "name": "Kemerovo",
  "tz": "Asia/Novokuznetsk",
  "country": "RU",
  "population": 477090
 },
 {
  "id": "1640344",
  "name": "Kendari",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 195006
 },
 {
  "id": "2407790",
  "name": "Kenema",
  "tz": "Africa/Freetown",
  "country": "SL",
  "population": 143137
 },
 {
  "id": "2544571",
  "name": "Kenitra",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 366570
 },
 {
  "id": "706524",
  "name": "Kerch",
  "tz": "Europe/Simferopol",
  "country": "UA",
  "population": 152195
 },
 {
  "id": "128234",
  "name": "Kerman",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 577514
 },
 {
  "id": "128226",
  "name": "Kermanshah",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 621100
 },
 {
  "id": "2022890",
  "name": "Khabarovsk",
  "tz": "Asia/Vladivostok",
  "country": "RU",
  "population": 579000
 },
 {
  "id": "2056752",
  "name": "Khabarovsk Vtoroy",
  "tz": "Asia/Vladivostok",
  "country": "RU",
  "population": 578303
 },
 {
  "id": "1162004",
  "name": "Khairpur",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 124602
 },
 {
  "id": "105072",
  "name": "Khamis Mushait",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 387553
 },
 {
  "id": "1267076",
  "name": "Khammam",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 170503
 },
 {
  "id": "281124",
  "name": "Khan Yunis",
  "tz": "Asia/Gaza",
  "country": "PS",
  "population": 173183
 },
 {
  "id": "1267031",
  "name": "Khandwa",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 182841
 },
 {
  "id": "1267016",
  "name": "Khanna",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 117137
 },
 {
  "id": "1174167",
  "name": "Khanpur",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 142426
 },
 {
  "id": "1266976",
  "name": "Kharagpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 219665
 },
 {
  "id": "1266945",
  "name": "Khardah",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 128346
 },
 {
  "id": "706483",
  "name": "Kharkiv",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 1430885
 },
 {
  "id": "379252",
  "name": "Khartoum",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 1974647
 },
 {
  "id": "550478",
  "name": "Khasavyurt",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 126829
 },
 {
  "id": "2558470",
  "name": "Khemisset",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 106991
 },
 {
  "id": "2491889",
  "name": "Khenchela",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 117000
 },
 {
  "id": "706448",
  "name": "Kherson",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 320477
 },
 {
  "id": "550280",
  "name": "Khimki",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 142618
 },
 {
  "id": "1609899",
  "name": "Khlong Luang",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 118551
 },
 {
  "id": "706369",
  "name": "Khmel'nyts'kyy",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 398346
 },
 {
  "id": "109323",
  "name": "Khobar",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 165799
 },
 {
  "id": "418710",
  "name": "Khomeyni Shahr",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 277334
 },
 {
  "id": "1609776",
  "name": "Khon Kaen",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 147579
 },
 {
  "id": "549479",
  "name": "Khoroshevo-Mnevniki",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 159000
 },
 {
  "id": "127349",
  "name": "Khorramabad",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 329825
 },
 {
  "id": "127319",
  "name": "Khorramshahr",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 330606
 },
 {
  "id": "2544248",
  "name": "Khouribga",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 167673
 },
 {
  "id": "1514879",
  "name": "Khujand",
  "tz": "Asia/Dushanbe",
  "country": "TJ",
  "population": 144865
 },
 {
  "id": "1336135",
  "name": "Khulna",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 1342339
 },
 {
  "id": "1266607",
  "name": "Khurja",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 105909
 },
 {
  "id": "1173687",
  "name": "Khushab",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 102793
 },
 {
  "id": "126972",
  "name": "Khvoy",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 175370
 },
 {
  "id": "2891122",
  "name": "Kiel",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 232758
 },
 {
  "id": "769250",
  "name": "Kielce",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 208598
 },
 {
  "id": "703448",
  "name": "Kiev",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 2797553
 },
 {
  "id": "202061",
  "name": "Kigali",
  "tz": "Africa/Kigali",
  "country": "RW",
  "population": 745261
 },
 {
  "id": "157738",
  "name": "Kigoma",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 164268
 },
 {
  "id": "2314705",
  "name": "Kikwit",
  "tz": "Africa/Kinshasa",
  "country": "CD",
  "population": 186991
 },
 {
  "id": "4703223",
  "name": "Killeen",
  "tz": "America/Chicago",
  "country": "US",
  "population": 127921
 },
 {
  "id": "990930",
  "name": "Kimberley",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 142089
 },
 {
  "id": "1842943",
  "name": "Kimhae",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 356242
 },
 {
  "id": "2419533",
  "name": "Kindia",
  "tz": "Africa/Conakry",
  "country": "GN",
  "population": 117062
 },
 {
  "id": "212902",
  "name": "Kindu",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 135698
 },
 {
  "id": "5992500",
  "name": "Kingston",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 114195
 },
 {
  "id": "3489854",
  "name": "Kingston",
  "tz": "America/Jamaica",
  "country": "JM",
  "population": 937700
 },
 {
  "id": "2314302",
  "name": "Kinshasa",
  "tz": "Africa/Kinshasa",
  "country": "CD",
  "population": 7785965
 },
 {
  "id": "307654",
  "name": "Kirikkale",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 211138
 },
 {
  "id": "94787",
  "name": "Kirkuk",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 601433
 },
 {
  "id": "548408",
  "name": "Kirov",
  "tz": "Europe/Volgograd",
  "country": "RU",
  "population": 457383
 },
 {
  "id": "705812",
  "name": "Kirovohrad",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 249454
 },
 {
  "id": "1859405",
  "name": "Kiryu",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 110219
 },
 {
  "id": "212730",
  "name": "Kisangani",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 539158
 },
 {
  "id": "1214882",
  "name": "Kisaran",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 129911
 },
 {
  "id": "1859393",
  "name": "Kisarazu",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 122524
 },
 {
  "id": "1503277",
  "name": "Kiselevsk",
  "tz": "Asia/Novokuznetsk",
  "country": "RU",
  "population": 104000
 },
 {
  "id": "1266486",
  "name": "Kishangarh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 131749
 },
 {
  "id": "2334327",
  "name": "Kishi",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 155510
 },
 {
  "id": "1859383",
  "name": "Kishiwada",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 205561
 },
 {
  "id": "548114",
  "name": "Kislovodsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 132771
 },
 {
  "id": "55671",
  "name": "Kismayo",
  "tz": "Africa/Mogadishu",
  "country": "SO",
  "population": 234852
 },
 {
  "id": "191245",
  "name": "Kisumu",
  "tz": "Africa/Nairobi",
  "country": "KE",
  "population": 216479
 },
 {
  "id": "1859307",
  "name": "Kitakyushu",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 997536
 },
 {
  "id": "2129537",
  "name": "Kitami",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 113137
 },
 {
  "id": "5992996",
  "name": "Kitchener",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 409112
 },
 {
  "id": "911148",
  "name": "Kitwe",
  "tz": "Africa/Lusaka",
  "country": "ZM",
  "population": 400914
 },
 {
  "id": "307084",
  "name": "Kiziltepe",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 150174
 },
 {
  "id": "598098",
  "name": "Klaipeda",
  "tz": "Europe/Vilnius",
  "country": "LT",
  "population": 192307
 },
 {
  "id": "1732905",
  "name": "Klang",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 879867
 },
 {
  "id": "1639900",
  "name": "Klaten",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 126831
 },
 {
  "id": "989921",
  "name": "Klerksdorp",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 178921
 },
 {
  "id": "1732811",
  "name": "Kluang",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 169828
 },
 {
  "id": "4634946",
  "name": "Knoxville",
  "tz": "America/New_York",
  "country": "US",
  "population": 178874
 },
 {
  "id": "1859171",
  "name": "Kobe",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 1528478
 },
 {
  "id": "2886946",
  "name": "Koblenz",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 107319
 },
 {
  "id": "1859146",
  "name": "Kochi-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 335570
 },
 {
  "id": "2886242",
  "name": "Koeln",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 963395
 },
 {
  "id": "1859100",
  "name": "Kofu-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 190000
 },
 {
  "id": "1173491",
  "name": "Kohat",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 151427
 },
 {
  "id": "1522203",
  "name": "Kokshetau",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 124444
 },
 {
  "id": "1858964",
  "name": "Kokubunji",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 118682
 },
 {
  "id": "1266305",
  "name": "Kolar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 126441
 },
 {
  "id": "1266285",
  "name": "Kolhapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 516142
 },
 {
  "id": "1275004",
  "name": "Kolkata",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 4631392
 },
 {
  "id": "1259091",
  "name": "Kollam",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 394163
 },
 {
  "id": "546230",
  "name": "Kolomna",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 147690
 },
 {
  "id": "546105",
  "name": "Kolpino",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 138979
 },
 {
  "id": "922773",
  "name": "Kolwezi",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 418000
 },
 {
  "id": "1858926",
  "name": "Komaki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 151025
 },
 {
  "id": "1858910",
  "name": "Komatsu",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 109045
 },
 {
  "id": "2021851",
  "name": "Komsomolsk-on-Amur",
  "tz": "Asia/Vladivostok",
  "country": "RU",
  "population": 275908
 },
 {
  "id": "1858836",
  "name": "Konan",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 100389
 },
 {
  "id": "306571",
  "name": "Konya",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 875530
 },
 {
  "id": "1266122",
  "name": "Korba",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 419146
 },
 {
  "id": "2286304",
  "name": "Korhogo",
  "tz": "Africa/Abidjan",
  "country": "CI",
  "population": 167359
 },
 {
  "id": "2112141",
  "name": "Koriyama",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 340560
 },
 {
  "id": "554233",
  "name": "Korolev",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 139798
 },
 {
  "id": "1708522",
  "name": "Koronadal",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 125502
 },
 {
  "id": "1858729",
  "name": "Koshigaya",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 317437
 },
 {
  "id": "724443",
  "name": "Kosice",
  "tz": "Europe/Bratislava",
  "country": "SK",
  "population": 236563
 },
 {
  "id": "1519928",
  "name": "Kostanay",
  "tz": "Asia/Qyzylorda",
  "country": "KZ",
  "population": 210000
 },
 {
  "id": "371760",
  "name": "Kosti",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 345068
 },
 {
  "id": "543878",
  "name": "Kostroma",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 277656
 },
 {
  "id": "3095049",
  "name": "Koszalin",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 107450
 },
 {
  "id": "1173378",
  "name": "Kot Addu",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 104217
 },
 {
  "id": "1266049",
  "name": "Kota",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 763088
 },
 {
  "id": "1736376",
  "name": "Kota Bharu",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 1459994
 },
 {
  "id": "1733432",
  "name": "Kota Kinabalu",
  "tz": "Asia/Kuching",
  "country": "MY",
  "population": 457326
 },
 {
  "id": "1173055",
  "name": "Kotli",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 640000
 },
 {
  "id": "2229798",
  "name": "Kousseri",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 435547
 },
 {
  "id": "543460",
  "name": "Kovrov",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 154224
 },
 {
  "id": "1819609",
  "name": "Kowloon",
  "tz": "Asia/Hong_Kong",
  "country": "HK",
  "population": 2019533
 },
 {
  "id": "1265873",
  "name": "Kozhikode",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 439922
 },
 {
  "id": "789128",
  "name": "Kragujevac",
  "tz": "Europe/Belgrade",
  "country": "RS",
  "population": 147473
 },
 {
  "id": "3094802",
  "name": "Krakow",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 755050
 },
 {
  "id": "704508",
  "name": "Kramators'k",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 173700
 },
 {
  "id": "542420",
  "name": "Krasnodar",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 649851
 },
 {
  "id": "8504952",
  "name": "Krasnogvargeisky",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 337091
 },
 {
  "id": "1502026",
  "name": "Krasnoyarsk",
  "tz": "Asia/Krasnoyarsk",
  "country": "RU",
  "population": 927200
 },
 {
  "id": "2884509",
  "name": "Krefeld",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 237984
 },
 {
  "id": "704147",
  "name": "Kremenchuk",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 227494
 },
 {
  "id": "1639362",
  "name": "Kresek",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 110182
 },
 {
  "id": "1265859",
  "name": "Krishnanagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 145926
 },
 {
  "id": "986846",
  "name": "Kroonstad",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 103992
 },
 {
  "id": "986822",
  "name": "Krugersdorp",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 378821
 },
 {
  "id": "703845",
  "name": "Kryvyy Rih",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 652380
 },
 {
  "id": "2544001",
  "name": "Ksar el Kebir",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 108753
 },
 {
  "id": "1735161",
  "name": "Kuala Lumpur",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 1453975
 },
 {
  "id": "1734705",
  "name": "Kuala Terengganu",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 285065
 },
 {
  "id": "1735227",
  "name": "Kuantan",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 366229
 },
 {
  "id": "1735634",
  "name": "Kuching",
  "tz": "Asia/Kuching",
  "country": "MY",
  "population": 570407
 },
 {
  "id": "126409",
  "name": "Kuhdasht",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 100208
 },
 {
  "id": "1265767",
  "name": "Kukatpalli",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 341709
 },
 {
  "id": "1734393",
  "name": "Kulim",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 170889
 },
 {
  "id": "1265711",
  "name": "Kulti",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 305405
 },
 {
  "id": "1858428",
  "name": "Kumagaya",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 155813
 },
 {
  "id": "1858421",
  "name": "Kumamoto",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 680423
 },
 {
  "id": "2298890",
  "name": "Kumasi",
  "tz": "Africa/Accra",
  "country": "GH",
  "population": 1468609
 },
 {
  "id": "2229752",
  "name": "Kumba",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 144413
 },
 {
  "id": "1265683",
  "name": "Kumbakonam",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 139264
 },
 {
  "id": "1135689",
  "name": "Kunduz",
  "tz": "Asia/Kabul",
  "country": "AF",
  "population": 161902
 },
 {
  "id": "1804651",
  "name": "Kunming",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 1023674
 },
 {
  "id": "1842025",
  "name": "Kunsan",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 243406
 },
 {
  "id": "1785623",
  "name": "Kunshan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 107986
 },
 {
  "id": "2057087",
  "name": "Kupang",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 282396
 },
 {
  "id": "1858311",
  "name": "Kurashiki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 437581
 },
 {
  "id": "1858296",
  "name": "Kure",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 196624
 },
 {
  "id": "1501321",
  "name": "Kurgan",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 343129
 },
 {
  "id": "538560",
  "name": "Kursk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 409431
 },
 {
  "id": "1858088",
  "name": "Kurume",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 238197
 },
 {
  "id": "1858067",
  "name": "Kusatsu",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 127680
 },
 {
  "id": "2129376",
  "name": "Kushiro",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 183612
 },
 {
  "id": "1185191",
  "name": "Kushtia",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 135724
 },
 {
  "id": "305268",
  "name": "Kutahya",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 185008
 },
 {
  "id": "537832",
  "name": "Kuz'minki",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 143000
 },
 {
  "id": "1948005",
  "name": "Kwangmyong",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 357545
 },
 {
  "id": "1841603",
  "name": "Kyonju",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 155237
 },
 {
  "id": "1857910",
  "name": "Kyoto",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 1459640
 },
 {
  "id": "1500973",
  "name": "Kyzyl",
  "tz": "Asia/Krasnoyarsk",
  "country": "RU",
  "population": 108240
 },
 {
  "id": "1519922",
  "name": "Kyzylorda",
  "tz": "Asia/Qyzylorda",
  "country": "KZ",
  "population": 300000
 },
 {
  "id": "3120619",
  "name": "L'Hospitalet de Llobregat",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 257038
 },
 {
  "id": "702550",
  "name": "L'viv",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 717803
 },
 {
  "id": "3608248",
  "name": "La Ceiba",
  "tz": "America/Tegucigalpa",
  "country": "HN",
  "population": 130218
 },
 {
  "id": "2511401",
  "name": "La Laguna",
  "tz": "Atlantic/Canary",
  "country": "ES",
  "population": 150661
 },
 {
  "id": "3911925",
  "name": "La Paz",
  "tz": "America/La_Paz",
  "country": "BO",
  "population": 812799
 },
 {
  "id": "4000900",
  "name": "La Paz",
  "tz": "America/Mazatlan",
  "country": "MX",
  "population": 171485
 },
 {
  "id": "7281017",
  "name": "La Pintana",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 201178
 },
 {
  "id": "3432043",
  "name": "La Plata",
  "tz": "America/Argentina/Buenos_Aires",
  "country": "AR",
  "population": 694167
 },
 {
  "id": "3848950",
  "name": "La Rioja",
  "tz": "America/Argentina/La_Rioja",
  "country": "AR",
  "population": 162620
 },
 {
  "id": "3500957",
  "name": "La Romana",
  "tz": "America/Santo_Domingo",
  "country": "DO",
  "population": 208437
 },
 {
  "id": "3884373",
  "name": "La Serena",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 154521
 },
 {
  "id": "2462881",
  "name": "Laayoune / El Aaiun",
  "tz": "Africa/El_Aaiun",
  "country": "EH",
  "population": 196331
 },
 {
  "id": "1638868",
  "name": "Labuhanbajo",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 188724
 },
 {
  "id": "7602078",
  "name": "Ladner",
  "tz": "America/Vancouver",
  "country": "CA",
  "population": 200000
 },
 {
  "id": "4330145",
  "name": "Lafayette",
  "tz": "America/Chicago",
  "country": "US",
  "population": 120623
 },
 {
  "id": "2332515",
  "name": "Lafia",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 127236
 },
 {
  "id": "2332504",
  "name": "Lafiagi",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 102779
 },
 {
  "id": "3458930",
  "name": "Lages",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 164676
 },
 {
  "id": "2491191",
  "name": "Laghouat",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 113872
 },
 {
  "id": "1577995",
  "name": "Lagi",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 160652
 },
 {
  "id": "2332459",
  "name": "Lagos",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 9000000
 },
 {
  "id": "1733953",
  "name": "Lahad Datu",
  "tz": "Asia/Kuching",
  "country": "MY",
  "population": 105622
 },
 {
  "id": "1172451",
  "name": "Lahore",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 6310888
 },
 {
  "id": "1804591",
  "name": "Laiwu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 124108
 },
 {
  "id": "1804586",
  "name": "Laiyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 169594
 },
 {
  "id": "5427946",
  "name": "Lakewood",
  "tz": "America/Denver",
  "country": "US",
  "population": 142980
 },
 {
  "id": "1265242",
  "name": "Lakhimpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 140223
 },
 {
  "id": "7302826",
  "name": "Lal Bahadur Nagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 261987
 },
 {
  "id": "1265157",
  "name": "Lalitpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 126475
 },
 {
  "id": "3437863",
  "name": "Lambare",
  "tz": "America/Asuncion",
  "country": "PY",
  "population": 126377
 },
 {
  "id": "1152473",
  "name": "Lampang",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 156139
 },
 {
  "id": "5364940",
  "name": "Lancaster",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 156633
 },
 {
  "id": "1804540",
  "name": "Langfang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 720119
 },
 {
  "id": "4998830",
  "name": "Lansing",
  "tz": "America/Detroit",
  "country": "US",
  "population": 114297
 },
 {
  "id": "1804430",
  "name": "Lanzhou",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 3200000
 },
 {
  "id": "1707404",
  "name": "Laoag",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 102105
 },
 {
  "id": "1529114",
  "name": "Laochenglu",
  "tz": "Asia/Urumqi",
  "country": "CN",
  "population": 254900
 },
 {
  "id": "1804386",
  "name": "Laohekou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 253112
 },
 {
  "id": "1707267",
  "name": "Lapu-Lapu City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 350467
 },
 {
  "id": "2543549",
  "name": "Larache",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 109294
 },
 {
  "id": "4705349",
  "name": "Laredo",
  "tz": "America/Chicago",
  "country": "US",
  "population": 236091
 },
 {
  "id": "258576",
  "name": "Larisa",
  "tz": "Europe/Athens",
  "country": "GR",
  "population": 128758
 },
 {
  "id": "1172128",
  "name": "Larkana",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 364033
 },
 {
  "id": "3524744",
  "name": "Las Margaritas",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 103403
 },
 {
  "id": "2515270",
  "name": "Las Palmas de Gran Canaria",
  "tz": "Atlantic/Canary",
  "country": "ES",
  "population": 381847
 },
 {
  "id": "3550598",
  "name": "Las Tunas",
  "tz": "America/Havana",
  "country": "CU",
  "population": 203684
 },
 {
  "id": "5506956",
  "name": "Las Vegas",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 583756
 },
 {
  "id": "1314759",
  "name": "Lashio",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 131016
 },
 {
  "id": "173576",
  "name": "Latakia",
  "tz": "Asia/Damascus",
  "country": "SY",
  "population": 340181
 },
 {
  "id": "6544489",
  "name": "Latina",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 256644
 },
 {
  "id": "1265014",
  "name": "Latur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 348967
 },
 {
  "id": "2160517",
  "name": "Launceston",
  "tz": "Australia/Hobart",
  "country": "AU",
  "population": 106153
 },
 {
  "id": "6317464",
  "name": "Lauro de Freitas",
  "tz": "America/Bahia",
  "country": "BR",
  "population": 141280
 },
 {
  "id": "2659994",
  "name": "Lausanne",
  "tz": "Europe/Zurich",
  "country": "CH",
  "population": 116751
 },
 {
  "id": "6050610",
  "name": "Laval",
  "tz": "America/Montreal",
  "country": "CA",
  "population": 376845
 },
 {
  "id": "3574309",
  "name": "Laventille",
  "tz": "America/Port_of_Spain",
  "country": "TT",
  "population": 157258
 },
 {
  "id": "1638284",
  "name": "Lawang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 159380
 },
 {
  "id": "3003796",
  "name": "Le Havre",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 185972
 },
 {
  "id": "3003603",
  "name": "Le Mans",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 144515
 },
 {
  "id": "1804252",
  "name": "Lecheng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 124268
 },
 {
  "id": "2644688",
  "name": "Leeds",
  "tz": "Europe/London",
  "country": "GB",
  "population": 455123
 },
 {
  "id": "3118594",
  "name": "Leganes",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 186066
 },
 {
  "id": "1706889",
  "name": "Legaspi",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 179481
 },
 {
  "id": "3093692",
  "name": "Legnica",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 106033
 },
 {
  "id": "2644668",
  "name": "Leicester",
  "tz": "Europe/London",
  "country": "GB",
  "population": 339239
 },
 {
  "id": "2751773",
  "name": "Leiden",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 119713
 },
 {
  "id": "2879139",
  "name": "Leipzig",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 504971
 },
 {
  "id": "1804208",
  "name": "Leiyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 129116
 },
 {
  "id": "1638063",
  "name": "Lembang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 183130
 },
 {
  "id": "1804169",
  "name": "Lengshuijiang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 115399
 },
 {
  "id": "1500665",
  "name": "Leninsk-Kuznetsky",
  "tz": "Asia/Novokuznetsk",
  "country": "RU",
  "population": 109023
 },
 {
  "id": "3722286",
  "name": "Leogane",
  "tz": "America/Port-au-Prince",
  "country": "HT",
  "population": 134190
 },
 {
  "id": "3118532",
  "name": "Leon",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 134305
 },
 {
  "id": "3998655",
  "name": "Leon",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 1114626
 },
 {
  "id": "3618030",
  "name": "Leon",
  "tz": "America/Managua",
  "country": "NI",
  "population": 144538
 },
 {
  "id": "3728097",
  "name": "Les Cayes",
  "tz": "America/Port-au-Prince",
  "country": "HT",
  "population": 125799
 },
 {
  "id": "1804153",
  "name": "Leshan",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 154477
 },
 {
  "id": "2878234",
  "name": "Leverkusen",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 162738
 },
 {
  "id": "6325521",
  "name": "Levis",
  "tz": "America/Montreal",
  "country": "CA",
  "population": 126396
 },
 {
  "id": "4297983",
  "name": "Lexington",
  "tz": "America/New_York",
  "country": "US",
  "population": 225366
 },
 {
  "id": "4297999",
  "name": "Lexington-Fayette",
  "tz": "America/New_York",
  "country": "US",
  "population": 295803
 },
 {
  "id": "1280737",
  "name": "Lhasa",
  "tz": "Asia/Urumqi",
  "country": "CN",
  "population": 118721
 },
 {
  "id": "1919014",
  "name": "Lianghu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 155000
 },
 {
  "id": "2035669",
  "name": "Lianhe",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 121367
 },
 {
  "id": "1804120",
  "name": "Lianjiang",
  "tz": "Asia/Urumqi",
  "country": "CN",
  "population": 100341
 },
 {
  "id": "1803886",
  "name": "Lianran",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 106795
 },
 {
  "id": "2036434",
  "name": "Lianshan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 313247
 },
 {
  "id": "1803834",
  "name": "Liaocheng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 226930
 },
 {
  "id": "2036113",
  "name": "Liaoyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 687890
 },
 {
  "id": "2036109",
  "name": "Liaoyuan",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 465249
 },
 {
  "id": "1706684",
  "name": "Libertad",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 250353
 },
 {
  "id": "2399697",
  "name": "Libreville",
  "tz": "Africa/Libreville",
  "country": "GA",
  "population": 578156
 },
 {
  "id": "1803791",
  "name": "Licheng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 172775
 },
 {
  "id": "1043893",
  "name": "Lichinga",
  "tz": "Africa/Maputo",
  "country": "MZ",
  "population": 109839
 },
 {
  "id": "2792413",
  "name": "Liege",
  "tz": "Europe/Brussels",
  "country": "BE",
  "population": 182597
 },
 {
  "id": "1813253",
  "name": "Lijiang",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 1137600
 },
 {
  "id": "922741",
  "name": "Likasi",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 422414
 },
 {
  "id": "2998324",
  "name": "Lille",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 228328
 },
 {
  "id": "927967",
  "name": "Lilongwe",
  "tz": "Africa/Blantyre",
  "country": "MW",
  "population": 646750
 },
 {
  "id": "3936456",
  "name": "Lima",
  "tz": "America/Lima",
  "country": "PE",
  "population": 7737002
 },
 {
  "id": "146384",
  "name": "Limassol",
  "tz": "Asia/Nicosia",
  "country": "CY",
  "population": 154000
 },
 {
  "id": "3458575",
  "name": "Limeira",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 289665
 },
 {
  "id": "2998286",
  "name": "Limoges",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 141176
 },
 {
  "id": "5072006",
  "name": "Lincoln",
  "tz": "America/Chicago",
  "country": "US",
  "population": 258379
 },
 {
  "id": "1803567",
  "name": "Linfen",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 232566
 },
 {
  "id": "1803422",
  "name": "Linhai",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 152937
 },
 {
  "id": "3458498",
  "name": "Linhares",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 105075
 },
 {
  "id": "1803367",
  "name": "Linqing",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 110046
 },
 {
  "id": "1803352",
  "name": "Linshui",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 109955
 },
 {
  "id": "1803334",
  "name": "Linxi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 100316
 },
 {
  "id": "1803331",
  "name": "Linxia Chengguanzhen",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 202402
 },
 {
  "id": "1803318",
  "name": "Linyi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 270669
 },
 {
  "id": "2772400",
  "name": "Linz",
  "tz": "Europe/Vienna",
  "country": "AT",
  "population": 181162
 },
 {
  "id": "1706090",
  "name": "Lipa City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 212287
 },
 {
  "id": "535121",
  "name": "Lipetsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 515655
 },
 {
  "id": "230166",
  "name": "Lira",
  "tz": "Africa/Kampala",
  "country": "UG",
  "population": 119323
 },
 {
  "id": "2267057",
  "name": "Lisbon",
  "tz": "Europe/Lisbon",
  "country": "PT",
  "population": 517802
 },
 {
  "id": "702972",
  "name": "Lisichansk",
  "tz": "Europe/Zaporozhye",
  "country": "UA",
  "population": 111600
 },
 {
  "id": "4119403",
  "name": "Little Rock",
  "tz": "America/Chicago",
  "country": "US",
  "population": 193524
 },
 {
  "id": "8533133",
  "name": "Liupanshui",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 251900
 },
 {
  "id": "2644210",
  "name": "Liverpool",
  "tz": "Europe/London",
  "country": "GB",
  "population": 468945
 },
 {
  "id": "910111",
  "name": "Livingstone",
  "tz": "Africa/Lusaka",
  "country": "ZM",
  "population": 109203
 },
 {
  "id": "3174659",
  "name": "Livorno",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 153773
 },
 {
  "id": "3196359",
  "name": "Ljubljana",
  "tz": "Europe/Ljubljana",
  "country": "SI",
  "population": 272220
 },
 {
  "id": "3118514",
  "name": "Lleida",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 135919
 },
 {
  "id": "7281020",
  "name": "Lo Prado",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 104316
 },
 {
  "id": "1637510",
  "name": "Loa Janan",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 212816
 },
 {
  "id": "3347939",
  "name": "Lobito",
  "tz": "Africa/Luanda",
  "country": "AO",
  "population": 207932
 },
 {
  "id": "3093133",
  "name": "Lodz",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 768755
 },
 {
  "id": "7281838",
  "name": "Logan City",
  "tz": "Australia/Brisbane",
  "country": "AU",
  "population": 282673
 },
 {
  "id": "3118150",
  "name": "Logrono",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 152107
 },
 {
  "id": "3654667",
  "name": "Loja",
  "tz": "America/Guayaquil",
  "country": "EC",
  "population": 117796
 },
 {
  "id": "2365267",
  "name": "Lome",
  "tz": "Africa/Lome",
  "country": "TG",
  "population": 749700
 },
 {
  "id": "6058560",
  "name": "London",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 346765
 },
 {
  "id": "2643743",
  "name": "London",
  "tz": "Europe/London",
  "country": "GB",
  "population": 7556900
 },
 {
  "id": "3458449",
  "name": "Londrina",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 471832
 },
 {
  "id": "5367929",
  "name": "Long Beach",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 462257
 },
 {
  "id": "1575627",
  "name": "Long Xuyen",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 158153
 },
 {
  "id": "2035980",
  "name": "Longfeng",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 152074
 },
 {
  "id": "2035970",
  "name": "Longjiang",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 106384
 },
 {
  "id": "2035966",
  "name": "Longjing",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 117185
 },
 {
  "id": "6059891",
  "name": "Longueuil",
  "tz": "America/Montreal",
  "country": "CA",
  "population": 229330
 },
 {
  "id": "1264773",
  "name": "Loni",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 164810
 },
 {
  "id": "3882428",
  "name": "Los Angeles",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 125430
 },
 {
  "id": "5368361",
  "name": "Los Angeles",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 3792621
 },
 {
  "id": "3997479",
  "name": "Los Mochis",
  "tz": "America/Mazatlan",
  "country": "MX",
  "population": 214601
 },
 {
  "id": "3523908",
  "name": "Los Reyes",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 251168
 },
 {
  "id": "3633622",
  "name": "Los Teques",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 140617
 },
 {
  "id": "1802238",
  "name": "Loudi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 150684
 },
 {
  "id": "4299276",
  "name": "Louisville",
  "tz": "America/Kentucky/Louisville",
  "country": "US",
  "population": 243639
 },
 {
  "id": "2229152",
  "name": "Loum",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 177429
 },
 {
  "id": "4942618",
  "name": "Lowell",
  "tz": "America/New_York",
  "country": "US",
  "population": 106519
 },
 {
  "id": "2188164",
  "name": "Lower Hutt",
  "tz": "Pacific/Auckland",
  "country": "NZ",
  "population": 101194
 },
 {
  "id": "1802204",
  "name": "Luancheng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 597130
 },
 {
  "id": "2240449",
  "name": "Luanda",
  "tz": "Africa/Luanda",
  "country": "AO",
  "population": 2776168
 },
 {
  "id": "909863",
  "name": "Luanshya",
  "tz": "Africa/Lusaka",
  "country": "ZM",
  "population": 113365
 },
 {
  "id": "3347762",
  "name": "Lubango",
  "tz": "Africa/Luanda",
  "country": "AO",
  "population": 102541
 },
 {
  "id": "5525577",
  "name": "Lubbock",
  "tz": "America/Chicago",
  "country": "US",
  "population": 229573
 },
 {
  "id": "765876",
  "name": "Lublin",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 360044
 },
 {
  "id": "1637158",
  "name": "Lubuklinggau",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 148243
 },
 {
  "id": "922704",
  "name": "Lubumbashi",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 1373770
 },
 {
  "id": "1705357",
  "name": "Lucena",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 228758
 },
 {
  "id": "1264733",
  "name": "Lucknow",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 2472011
 },
 {
  "id": "1264728",
  "name": "Ludhiana",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1545368
 },
 {
  "id": "2875376",
  "name": "Ludwigshafen am Rhein",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 163196
 },
 {
  "id": "2875601",
  "name": "Luebeck",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 212207
 },
 {
  "id": "702658",
  "name": "Luhansk",
  "tz": "Europe/Zaporozhye",
  "country": "UA",
  "population": 452000
 },
 {
  "id": "1637090",
  "name": "Lumajang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 123626
 },
 {
  "id": "1784953",
  "name": "Luofeng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 100774
 },
 {
  "id": "1801934",
  "name": "Luohe",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 417356
 },
 {
  "id": "1801792",
  "name": "Luoyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1390581
 },
 {
  "id": "1801799",
  "name": "Luoyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 123144
 },
 {
  "id": "1801757",
  "name": "Luqiao",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 427890
 },
 {
  "id": "909137",
  "name": "Lusaka",
  "tz": "Africa/Lusaka",
  "country": "ZM",
  "population": 1267440
 },
 {
  "id": "2643339",
  "name": "Luton",
  "tz": "Europe/London",
  "country": "GB",
  "population": 193669
 },
 {
  "id": "702569",
  "name": "Luts'k",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 213661
 },
 {
  "id": "360502",
  "name": "Luxor",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 422407
 },
 {
  "id": "3458329",
  "name": "Luziania",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 143601
 },
 {
  "id": "2996944",
  "name": "Lyon",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 472317
 },
 {
  "id": "532615",
  "name": "Lyubertsy",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 154650
 },
 {
  "id": "532535",
  "name": "Lyublino",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 172000
 },
 {
  "id": "147622",
  "name": "L\u01ddnk\u01ddran",
  "tz": "Asia/Baku",
  "country": "AZ",
  "population": 240300
 },
 {
  "id": "2486690",
  "name": "M'Sila",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 100000
 },
 {
  "id": "2751283",
  "name": "Maastricht",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 122378
 },
 {
  "id": "1801615",
  "name": "Maba",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 113609
 },
 {
  "id": "1704703",
  "name": "Mabalacat",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 188050
 },
 {
  "id": "3458266",
  "name": "Macae",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 143029
 },
 {
  "id": "3396016",
  "name": "Macapa",
  "tz": "America/Belem",
  "country": "BR",
  "population": 338936
 },
 {
  "id": "1821274",
  "name": "Macau",
  "tz": "Asia/Macau",
  "country": "MO",
  "population": 520400
 },
 {
  "id": "3395981",
  "name": "Maceio",
  "tz": "America/Maceio",
  "country": "BR",
  "population": 954991
 },
 {
  "id": "3654533",
  "name": "Machala",
  "tz": "America/Guayaquil",
  "country": "EC",
  "population": 198123
 },
 {
  "id": "1801582",
  "name": "Macheng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 126366
 },
 {
  "id": "1857871",
  "name": "Machida",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 399969
 },
 {
  "id": "1264637",
  "name": "Machilipatnam",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 192827
 },
 {
  "id": "1264621",
  "name": "Madanapalle",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 108593
 },
 {
  "id": "1264543",
  "name": "Madhyamgram",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 161126
 },
 {
  "id": "5261457",
  "name": "Madison",
  "tz": "America/Chicago",
  "country": "US",
  "population": 233209
 },
 {
  "id": "1636930",
  "name": "Madiun",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 186099
 },
 {
  "id": "3117735",
  "name": "Madrid",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 3255944
 },
 {
  "id": "1264521",
  "name": "Madurai",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 909908
 },
 {
  "id": "1857843",
  "name": "Maebashi-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 282711
 },
 {
  "id": "3675692",
  "name": "Magangue",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 100313
 },
 {
  "id": "3523760",
  "name": "Magdalena Contreras",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 228927
 },
 {
  "id": "2874545",
  "name": "Magdeburg",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 229826
 },
 {
  "id": "1636884",
  "name": "Magelang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 111461
 },
 {
  "id": "532288",
  "name": "Magnitogorsk",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 413351
 },
 {
  "id": "125446",
  "name": "Mahabad",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 162434
 },
 {
  "id": "1062663",
  "name": "Mahajanga",
  "tz": "Indian/Antananarivo",
  "country": "MG",
  "population": 154657
 },
 {
  "id": "1264407",
  "name": "Mahbubnagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 136135
 },
 {
  "id": "625665",
  "name": "Mahilyow",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 369200
 },
 {
  "id": "3675657",
  "name": "Maicao",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 130348
 },
 {
  "id": "2331447",
  "name": "Maiduguri",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 1112449
 },
 {
  "id": "2874225",
  "name": "Mainz",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 184997
 },
 {
  "id": "1801401",
  "name": "Majie",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 131696
 },
 {
  "id": "1622786",
  "name": "Makassar",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 1321717
 },
 {
  "id": "1703417",
  "name": "Makati City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 510383
 },
 {
  "id": "532096",
  "name": "Makhachkala",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 497959
 },
 {
  "id": "702320",
  "name": "Makiyivka",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 376610
 },
 {
  "id": "2331140",
  "name": "Makurdi",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 292645
 },
 {
  "id": "2309527",
  "name": "Malabo",
  "tz": "Africa/Malabo",
  "country": "GQ",
  "population": 155963
 },
 {
  "id": "1734759",
  "name": "Malacca",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 180671
 },
 {
  "id": "625625",
  "name": "Maladzyechna",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 101300
 },
 {
  "id": "2514256",
  "name": "Malaga",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 568305
 },
 {
  "id": "370737",
  "name": "Malakal",
  "tz": "Africa/Juba",
  "country": "SS",
  "population": 160765
 },
 {
  "id": "3675595",
  "name": "Malambo",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 101534
 },
 {
  "id": "1636722",
  "name": "Malang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 746716
 },
 {
  "id": "304922",
  "name": "Malatya",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 441805
 },
 {
  "id": "125185",
  "name": "Malayer",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 176573
 },
 {
  "id": "1282027",
  "name": "Male",
  "tz": "Indian/Maldives",
  "country": "MV",
  "population": 103693
 },
 {
  "id": "1264115",
  "name": "Malegaon",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 435362
 },
 {
  "id": "1264111",
  "name": "Maler Kotla",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 113840
 },
 {
  "id": "187968",
  "name": "Malindi",
  "tz": "Africa/Nairobi",
  "country": "KE",
  "population": 118265
 },
 {
  "id": "1978681",
  "name": "Malingao",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 1121974
 },
 {
  "id": "8020218",
  "name": "Malinovka",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 105000
 },
 {
  "id": "1171305",
  "name": "Malir Cantonment",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 300000
 },
 {
  "id": "7302828",
  "name": "Malkajgiri",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 150000
 },
 {
  "id": "352951",
  "name": "Mallawi",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 142504
 },
 {
  "id": "2692969",
  "name": "Malmoe",
  "tz": "Europe/Stockholm",
  "country": "SE",
  "population": 261548
 },
 {
  "id": "1702540",
  "name": "Malolos",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 198748
 },
 {
  "id": "741763",
  "name": "Maltepe",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 427040
 },
 {
  "id": "2284647",
  "name": "Man",
  "tz": "Africa/Abidjan",
  "country": "CI",
  "population": 139341
 },
 {
  "id": "1636544",
  "name": "Manado",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 451893
 },
 {
  "id": "3617763",
  "name": "Managua",
  "tz": "America/Managua",
  "country": "NI",
  "population": 973087
 },
 {
  "id": "290340",
  "name": "Manama",
  "tz": "Asia/Bahrain",
  "country": "BH",
  "population": 147074
 },
 {
  "id": "3663517",
  "name": "Manaus",
  "tz": "America/Manaus",
  "country": "BR",
  "population": 1598210
 },
 {
  "id": "2643123",
  "name": "Manchester",
  "tz": "Europe/London",
  "country": "GB",
  "population": 395515
 },
 {
  "id": "5089178",
  "name": "Manchester",
  "tz": "America/New_York",
  "country": "US",
  "population": 109565
 },
 {
  "id": "1311874",
  "name": "Mandalay",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 1208099
 },
 {
  "id": "1701966",
  "name": "Mandaluyong City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 305576
 },
 {
  "id": "1701947",
  "name": "Mandaue City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 331320
 },
 {
  "id": "1171123",
  "name": "Mandi Bahauddin",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 129733
 },
 {
  "id": "1263834",
  "name": "Mandsaur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 124988
 },
 {
  "id": "1263833",
  "name": "Mandu",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 300000
 },
 {
  "id": "1263814",
  "name": "Mandya",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 134845
 },
 {
  "id": "1263780",
  "name": "Mangalore",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 417387
 },
 {
  "id": "5125771",
  "name": "Manhattan",
  "tz": "America/New_York",
  "country": "US",
  "population": 1487536
 },
 {
  "id": "1701668",
  "name": "Manila",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 10444527
 },
 {
  "id": "304827",
  "name": "Manisa",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 243971
 },
 {
  "id": "3675443",
  "name": "Manizales",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 357814
 },
 {
  "id": "2873891",
  "name": "Mannheim",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 307960
 },
 {
  "id": "1701500",
  "name": "Mansilingan",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 454150
 },
 {
  "id": "3654410",
  "name": "Manta",
  "tz": "America/Guayaquil",
  "country": "EC",
  "population": 183166
 },
 {
  "id": "1701472",
  "name": "Mantampay",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 265032
 },
 {
  "id": "2187404",
  "name": "Manukau City",
  "tz": "Pacific/Auckland",
  "country": "NZ",
  "population": 362000
 },
 {
  "id": "3547867",
  "name": "Manzanillo",
  "tz": "America/Havana",
  "country": "CU",
  "population": 128188
 },
 {
  "id": "3996663",
  "name": "Manzanillo",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 110735
 },
 {
  "id": "8858079",
  "name": "Manzanillo",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 130035
 },
 {
  "id": "934995",
  "name": "Manzini",
  "tz": "Africa/Mbabane",
  "country": "SZ",
  "population": 110537
 },
 {
  "id": "1040652",
  "name": "Maputo",
  "tz": "Africa/Maputo",
  "country": "MZ",
  "population": 1191613
 },
 {
  "id": "3430863",
  "name": "Mar del Plata",
  "tz": "America/Argentina/Buenos_Aires",
  "country": "AR",
  "population": 553935
 },
 {
  "id": "529237",
  "name": "Mar'ino",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 243000
 },
 {
  "id": "3395503",
  "name": "Maraba",
  "tz": "America/Belem",
  "country": "BR",
  "population": 145860
 },
 {
  "id": "3633009",
  "name": "Maracaibo",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 2225000
 },
 {
  "id": "3395473",
  "name": "Maracanau",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 193529
 },
 {
  "id": "3632998",
  "name": "Maracay",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 1754256
 },
 {
  "id": "2441291",
  "name": "Maradi",
  "tz": "Africa/Niamey",
  "country": "NE",
  "population": 163487
 },
 {
  "id": "124862",
  "name": "Marand",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 124191
 },
 {
  "id": "1701053",
  "name": "Marawi City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 143627
 },
 {
  "id": "2514169",
  "name": "Marbella",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 134623
 },
 {
  "id": "1170880",
  "name": "Mardan",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 300424
 },
 {
  "id": "1513243",
  "name": "Marg`ilon",
  "tz": "Asia/Tashkent",
  "country": "UZ",
  "population": 133490
 },
 {
  "id": "3632929",
  "name": "Mariara",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 105486
 },
 {
  "id": "2911287",
  "name": "Marienthal",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 287101
 },
 {
  "id": "3457692",
  "name": "Marilia",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 212218
 },
 {
  "id": "3457671",
  "name": "Maringa",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 311724
 },
 {
  "id": "701822",
  "name": "Mariupol",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 481626
 },
 {
  "id": "54225",
  "name": "Marka",
  "tz": "Africa/Mogadishu",
  "country": "SO",
  "population": 230100
 },
 {
  "id": "6066513",
  "name": "Markham",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 261573
 },
 {
  "id": "1263494",
  "name": "Marmagao",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 102345
 },
 {
  "id": "2228373",
  "name": "Maroua",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 319941
 },
 {
  "id": "2542997",
  "name": "Marrakesh",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 839296
 },
 {
  "id": "2995469",
  "name": "Marseille",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 794811
 },
 {
  "id": "1636022",
  "name": "Martapura",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 131449
 },
 {
  "id": "3523513",
  "name": "Martinez de La Torre",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 100377
 },
 {
  "id": "1218667",
  "name": "Mary",
  "tz": "Asia/Ashgabat",
  "country": "TM",
  "population": 114680
 },
 {
  "id": "2873074",
  "name": "Marzahn",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 103768
 },
 {
  "id": "3617723",
  "name": "Masaya",
  "tz": "America/Managua",
  "country": "NI",
  "population": 130113
 },
 {
  "id": "2490098",
  "name": "Mascara",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 150000
 },
 {
  "id": "932505",
  "name": "Maseru",
  "tz": "Africa/Maseru",
  "country": "LS",
  "population": 118355
 },
 {
  "id": "124665",
  "name": "Mashhad",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 2307177
 },
 {
  "id": "2593460",
  "name": "Masina",
  "tz": "Africa/Kinshasa",
  "country": "CD",
  "population": 485167
 },
 {
  "id": "124620",
  "name": "Masjed Soleyman",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 111510
 },
 {
  "id": "7870153",
  "name": "Masjid Jamie Baitul Muttaqien",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 1000000
 },
 {
  "id": "2313002",
  "name": "Matadi",
  "tz": "Africa/Kinshasa",
  "country": "CD",
  "population": 180109
 },
 {
  "id": "3617708",
  "name": "Matagalpa",
  "tz": "America/Managua",
  "country": "NI",
  "population": 109089
 },
 {
  "id": "3996426",
  "name": "Matamoros",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 104024
 },
 {
  "id": "3547398",
  "name": "Matanzas",
  "tz": "America/Havana",
  "country": "CU",
  "population": 146733
 },
 {
  "id": "1635882",
  "name": "Mataram",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 318674
 },
 {
  "id": "3117164",
  "name": "Mataro",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 121722
 },
 {
  "id": "1263364",
  "name": "Mathura",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 330511
 },
 {
  "id": "1700360",
  "name": "Mati",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 105908
 },
 {
  "id": "1039854",
  "name": "Matola",
  "tz": "Africa/Maputo",
  "country": "MZ",
  "population": 675422
 },
 {
  "id": "1857568",
  "name": "Matsubara",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 130855
 },
 {
  "id": "1857553",
  "name": "Matsudo",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 470277
 },
 {
  "id": "1857550",
  "name": "Matsue-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 156811
 },
 {
  "id": "1857519",
  "name": "Matsumoto",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 210667
 },
 {
  "id": "1926099",
  "name": "Matsuyama",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 443322
 },
 {
  "id": "3778045",
  "name": "Maturin",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 410972
 },
 {
  "id": "1263311",
  "name": "Mau",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 246050
 },
 {
  "id": "3457381",
  "name": "Maua",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 386069
 },
 {
  "id": "1308465",
  "name": "Mawlamyine",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 438861
 },
 {
  "id": "1039536",
  "name": "Maxixe",
  "tz": "Africa/Maputo",
  "country": "MZ",
  "population": 119868
 },
 {
  "id": "528293",
  "name": "Maykop",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 158451
 },
 {
  "id": "1309937",
  "name": "Maymyo",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 117303
 },
 {
  "id": "1133616",
  "name": "Mazar-e Sharif",
  "tz": "Asia/Kabul",
  "country": "AF",
  "population": 303282
 },
 {
  "id": "3996322",
  "name": "Mazatlan",
  "tz": "America/Mazatlan",
  "country": "MX",
  "population": 354717
 },
 {
  "id": "625324",
  "name": "Mazyr",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 112137
 },
 {
  "id": "2312895",
  "name": "Mbandaka",
  "tz": "Africa/Kinshasa",
  "country": "CD",
  "population": 184185
 },
 {
  "id": "154380",
  "name": "Mbeya",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 291649
 },
 {
  "id": "2227613",
  "name": "Mbouda",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 111320
 },
 {
  "id": "209228",
  "name": "Mbuji-Mayi",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 874761
 },
 {
  "id": "4709796",
  "name": "McAllen",
  "tz": "America/Chicago",
  "country": "US",
  "population": 129877
 },
 {
  "id": "4710178",
  "name": "McKinney",
  "tz": "America/Chicago",
  "country": "US",
  "population": 131117
 },
 {
  "id": "4300488",
  "name": "Meads",
  "tz": "America/New_York",
  "country": "US",
  "population": 288649
 },
 {
  "id": "104515",
  "name": "Mecca",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 1323624
 },
 {
  "id": "1214520",
  "name": "Medan",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 1750971
 },
 {
  "id": "2488835",
  "name": "Medea",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 147707
 },
 {
  "id": "3674962",
  "name": "Medellin",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 1999979
 },
 {
  "id": "109223",
  "name": "Medina",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 1300000
 },
 {
  "id": "2298330",
  "name": "Medina Estates",
  "tz": "Africa/Accra",
  "country": "GH",
  "population": 101207
 },
 {
  "id": "1263220",
  "name": "Medinipur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 153349
 },
 {
  "id": "1263214",
  "name": "Meerut",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1223184
 },
 {
  "id": "1309793",
  "name": "Meiktila",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 177442
 },
 {
  "id": "1800779",
  "name": "Meizhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 144212
 },
 {
  "id": "3584399",
  "name": "Mejicanos",
  "tz": "America/El_Salvador",
  "country": "SV",
  "population": 160317
 },
 {
  "id": "331180",
  "name": "Mekele",
  "tz": "Africa/Addis_Ababa",
  "country": "ET",
  "population": 215546
 },
 {
  "id": "2542715",
  "name": "Meknes",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 545705
 },
 {
  "id": "2158177",
  "name": "Melbourne",
  "tz": "Australia/Melbourne",
  "country": "AU",
  "population": 4246375
 },
 {
  "id": "701404",
  "name": "Melitopol'",
  "tz": "Europe/Zaporozhye",
  "country": "UA",
  "population": 158000
 },
 {
  "id": "4641239",
  "name": "Memphis",
  "tz": "America/Chicago",
  "country": "US",
  "population": 646889
 },
 {
  "id": "6947756",
  "name": "Mendip",
  "tz": "Europe/London",
  "country": "GB",
  "population": 110000
 },
 {
  "id": "3844421",
  "name": "Mendoza",
  "tz": "America/Argentina/Mendoza",
  "country": "AR",
  "population": 876884
 },
 {
  "id": "1800657",
  "name": "Mentougou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 197772
 },
 {
  "id": "304531",
  "name": "Mercin",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 537842
 },
 {
  "id": "3523349",
  "name": "Merida",
  "tz": "America/Merida",
  "country": "MX",
  "population": 717175
 },
 {
  "id": "3632308",
  "name": "Merida",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 300000
 },
 {
  "id": "5304391",
  "name": "Mesa",
  "tz": "America/Phoenix",
  "country": "US",
  "population": 439041
 },
 {
  "id": "4710826",
  "name": "Mesquite",
  "tz": "America/Chicago",
  "country": "US",
  "population": 139824
 },
 {
  "id": "2524170",
  "name": "Messina",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 219948
 },
 {
  "id": "3173529",
  "name": "Mestre",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 147662
 },
 {
  "id": "G6",
  "name": "MET - Middle European Time",
  "tz": "MET",
  "country": null,
  "population": null
 },
 {
  "id": "4333177",
  "name": "Metairie",
  "tz": "America/Chicago",
  "country": "US",
  "population": 138481
 },
 {
  "id": "4333190",
  "name": "Metairie Terrace",
  "tz": "America/Chicago",
  "country": "US",
  "population": 142489
 },
 {
  "id": "3523303",
  "name": "Metepec",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 172982
 },
 {
  "id": "1635283",
  "name": "Metro",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 149526
 },
 {
  "id": "2994160",
  "name": "Metz",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 123914
 },
 {
  "id": "3996069",
  "name": "Mexicali",
  "tz": "America/Tijuana",
  "country": "MX",
  "population": 597099
 },
 {
  "id": "3530597",
  "name": "Mexico City",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 12294193
 },
 {
  "id": "1699802",
  "name": "Meycauayan",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 184839
 },
 {
  "id": "1498920",
  "name": "Mezhdurechensk",
  "tz": "Asia/Novokuznetsk",
  "country": "RU",
  "population": 101026
 },
 {
  "id": "4164138",
  "name": "Miami",
  "tz": "America/New_York",
  "country": "US",
  "population": 399457
 },
 {
  "id": "4164167",
  "name": "Miami Gardens",
  "tz": "America/New_York",
  "country": "US",
  "population": 107167
 },
 {
  "id": "124085",
  "name": "Miandowab",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 132819
 },
 {
  "id": "1800627",
  "name": "Mianyang",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 264136
 },
 {
  "id": "1498894",
  "name": "Miass",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 167500
 },
 {
  "id": "976361",
  "name": "Middelburg",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 154706
 },
 {
  "id": "2642607",
  "name": "Middlesbrough",
  "tz": "Europe/London",
  "country": "GB",
  "population": 142707
 },
 {
  "id": "5526337",
  "name": "Midland",
  "tz": "America/Chicago",
  "country": "US",
  "population": 111147
 },
 {
  "id": "2468925",
  "name": "Midoun",
  "tz": "Africa/Tunis",
  "country": "TN",
  "population": 120000
 },
 {
  "id": "1105776",
  "name": "Midrand",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 173009
 },
 {
  "id": "3827408",
  "name": "Miguel Hidalgo",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 353534
 },
 {
  "id": "3173435",
  "name": "Milano",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 1236837
 },
 {
  "id": "3523202",
  "name": "Milpa Alta",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 115895
 },
 {
  "id": "2642465",
  "name": "Milton Keynes",
  "tz": "Europe/London",
  "country": "GB",
  "population": 184506
 },
 {
  "id": "5263045",
  "name": "Milwaukee",
  "tz": "America/Chicago",
  "country": "US",
  "population": 594833
 },
 {
  "id": "1857144",
  "name": "Minami-rinkan",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 224015
 },
 {
  "id": "3523183",
  "name": "Minatitlan",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 150895
 },
 {
  "id": "1170395",
  "name": "Mingora",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 279914
 },
 {
  "id": "1800498",
  "name": "Mingshui",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 114858
 },
 {
  "id": "2330100",
  "name": "Minna",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 291905
 },
 {
  "id": "5037649",
  "name": "Minneapolis",
  "tz": "America/Chicago",
  "country": "US",
  "population": 382578
 },
 {
  "id": "1857046",
  "name": "Mino",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 129127
 },
 {
  "id": "625144",
  "name": "Minsk",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 1742124
 },
 {
  "id": "4164601",
  "name": "Miramar",
  "tz": "America/New_York",
  "country": "US",
  "population": 122041
 },
 {
  "id": "1738050",
  "name": "Miri",
  "tz": "Asia/Kuching",
  "country": "MY",
  "population": 228212
 },
 {
  "id": "1263012",
  "name": "Mirialguda",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 101234
 },
 {
  "id": "1170295",
  "name": "Mirpur Khas",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 215657
 },
 {
  "id": "1262995",
  "name": "Mirzapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 220029
 },
 {
  "id": "1856977",
  "name": "Mishima",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 113479
 },
 {
  "id": "717582",
  "name": "Miskolc",
  "tz": "Europe/Budapest",
  "country": "HU",
  "population": 172637
 },
 {
  "id": "2214846",
  "name": "Misratah",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 386120
 },
 {
  "id": "6075357",
  "name": "Mississauga",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 668549
 },
 {
  "id": "1856942",
  "name": "Mitaka-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 182901
 },
 {
  "id": "2111901",
  "name": "Mito-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 246538
 },
 {
  "id": "789225",
  "name": "Mitrovice",
  "tz": "Europe/Belgrade",
  "country": "XK",
  "population": 107045
 },
 {
  "id": "3592519",
  "name": "Mixco",
  "tz": "America/Guatemala",
  "country": "GT",
  "population": 473080
 },
 {
  "id": "1856775",
  "name": "Miyakonojo",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 130994
 },
 {
  "id": "1856717",
  "name": "Miyazaki-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 311203
 },
 {
  "id": "1783988",
  "name": "Mizhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 109968
 },
 {
  "id": "4076598",
  "name": "Mobile",
  "tz": "America/Chicago",
  "country": "US",
  "population": 195111
 },
 {
  "id": "2330028",
  "name": "Modakeke",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 119529
 },
 {
  "id": "3173331",
  "name": "Modena",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 158886
 },
 {
  "id": "5373900",
  "name": "Modesto",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 201165
 },
 {
  "id": "2870221",
  "name": "Moers",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 107816
 },
 {
  "id": "1262951",
  "name": "Moga",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 130549
 },
 {
  "id": "53654",
  "name": "Mogadishu",
  "tz": "Africa/Mogadishu",
  "country": "SO",
  "population": 2587183
 },
 {
  "id": "3457001",
  "name": "Mogi das Cruzes",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 325746
 },
 {
  "id": "3457000",
  "name": "Mogi Guacu",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 128865
 },
 {
  "id": "6992326",
  "name": "Mohali",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 123484
 },
 {
  "id": "2542051",
  "name": "Mohammedia",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 187708
 },
 {
  "id": "1635111",
  "name": "Mojokerto",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 112557
 },
 {
  "id": "2226275",
  "name": "Mokolo",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 275239
 },
 {
  "id": "964315",
  "name": "Mokopane",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 101090
 },
 {
  "id": "764484",
  "name": "Mokotow",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 212670
 },
 {
  "id": "186301",
  "name": "Mombasa",
  "tz": "Africa/Nairobi",
  "country": "KE",
  "population": 799668
 },
 {
  "id": "2869894",
  "name": "Monchengladbach",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 261742
 },
 {
  "id": "6544099",
  "name": "Moncloa-Aravaca",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 116531
 },
 {
  "id": "3995523",
  "name": "Monclova",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 195764
 },
 {
  "id": "2274895",
  "name": "Monrovia",
  "tz": "Africa/Monrovia",
  "country": "LR",
  "population": 939524
 },
 {
  "id": "3674453",
  "name": "Monteria",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 272420
 },
 {
  "id": "3995465",
  "name": "Monterrey",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 1122874
 },
 {
  "id": "3456814",
  "name": "Montes Claros",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 332379
 },
 {
  "id": "3441575",
  "name": "Montevideo",
  "tz": "America/Montevideo",
  "country": "UY",
  "population": 1270737
 },
 {
  "id": "4076784",
  "name": "Montgomery",
  "tz": "America/Chicago",
  "country": "US",
  "population": 205764
 },
 {
  "id": "2992166",
  "name": "Montpellier",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 248252
 },
 {
  "id": "6077243",
  "name": "Montreal",
  "tz": "America/Montreal",
  "country": "CA",
  "population": 3268513
 },
 {
  "id": "1308522",
  "name": "Monywa",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 182011
 },
 {
  "id": "3172629",
  "name": "Monza",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 119618
 },
 {
  "id": "1841066",
  "name": "Moppo",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 268402
 },
 {
  "id": "2453348",
  "name": "Mopti",
  "tz": "Africa/Bamako",
  "country": "ML",
  "population": 108456
 },
 {
  "id": "1262801",
  "name": "Moradabad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 721139
 },
 {
  "id": "3116156",
  "name": "Moratalaz",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 104923
 },
 {
  "id": "1234633",
  "name": "Moratuwa",
  "tz": "Asia/Colombo",
  "country": "LK",
  "population": 185031
 },
 {
  "id": "1262775",
  "name": "Morbi",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 118022
 },
 {
  "id": "3995402",
  "name": "Morelia",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 592797
 },
 {
  "id": "1262771",
  "name": "Morena",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 152004
 },
 {
  "id": "5374732",
  "name": "Moreno Valley",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 193365
 },
 {
  "id": "1856584",
  "name": "Moriguchi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 148350
 },
 {
  "id": "2111834",
  "name": "Morioka-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 295172
 },
 {
  "id": "153220",
  "name": "Morogoro",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 250902
 },
 {
  "id": "3430545",
  "name": "Moron",
  "tz": "America/Argentina/Buenos_Aires",
  "country": "AR",
  "population": 319934
 },
 {
  "id": "524901",
  "name": "Moscow",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 10381222
 },
 {
  "id": "153209",
  "name": "Moshi",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 156959
 },
 {
  "id": "973709",
  "name": "Mossel Bay",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 150000
 },
 {
  "id": "3394682",
  "name": "Mossoro",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 202005
 },
 {
  "id": "2487134",
  "name": "Mostaganem",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 130000
 },
 {
  "id": "3194828",
  "name": "Mostar",
  "tz": "Europe/Sarajevo",
  "country": "BA",
  "population": 104518
 },
 {
  "id": "3116025",
  "name": "Mostoles",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 206478
 },
 {
  "id": "99072",
  "name": "Mosul",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 1739800
 },
 {
  "id": "1262710",
  "name": "Motihari",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 112144
 },
 {
  "id": "2427455",
  "name": "Moundou",
  "tz": "Africa/Ndjamena",
  "country": "TD",
  "population": 135167
 },
 {
  "id": "973111",
  "name": "Mpumalanga",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 140121
 },
 {
  "id": "G7",
  "name": "MST - Mountain Standard Time",
  "tz": "MST",
  "country": null,
  "population": null
 },
 {
  "id": "G8",
  "name": "MST7MDT",
  "tz": "MST7MDT",
  "country": null,
  "population": null
 },
 {
  "id": "1732869",
  "name": "Muar",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 127897
 },
 {
  "id": "2329821",
  "name": "Mubi",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 225705
 },
 {
  "id": "3631741",
  "name": "Mucumpiz",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 215259
 },
 {
  "id": "2035715",
  "name": "Mudanjiang",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 665915
 },
 {
  "id": "1608133",
  "name": "Mueang Nonthaburi",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 291555
 },
 {
  "id": "2867838",
  "name": "Muelheim (Ruhr)",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 171000
 },
 {
  "id": "2867543",
  "name": "Muenster",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 270184
 },
 {
  "id": "905395",
  "name": "Mufulira",
  "tz": "Africa/Lusaka",
  "country": "ZM",
  "population": 120500
 },
 {
  "id": "2991214",
  "name": "Mulhouse",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 111430
 },
 {
  "id": "1169825",
  "name": "Multan",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 1437230
 },
 {
  "id": "1275339",
  "name": "Mumbai",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 12691836
 },
 {
  "id": "1262482",
  "name": "Munger",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 203163
 },
 {
  "id": "2867714",
  "name": "Munich",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 1260391
 },
 {
  "id": "2513416",
  "name": "Murcia",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 436870
 },
 {
  "id": "4644312",
  "name": "Murfreesboro",
  "tz": "America/Chicago",
  "country": "US",
  "population": 108755
 },
 {
  "id": "1699054",
  "name": "Muricay",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 132094
 },
 {
  "id": "1169692",
  "name": "Muridke",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 164246
 },
 {
  "id": "524305",
  "name": "Murmansk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 319263
 },
 {
  "id": "524294",
  "name": "Murom",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 126931
 },
 {
  "id": "5375911",
  "name": "Murrieta",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 103466
 },
 {
  "id": "1262395",
  "name": "Murwara",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 195856
 },
 {
  "id": "1856367",
  "name": "Musashino",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 137479
 },
 {
  "id": "287286",
  "name": "Muscat",
  "tz": "Asia/Muscat",
  "country": "OM",
  "population": 797000
 },
 {
  "id": "152451",
  "name": "Musoma",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 121119
 },
 {
  "id": "884979",
  "name": "Mutare",
  "tz": "Africa/Harare",
  "country": "ZW",
  "population": 184205
 },
 {
  "id": "1169607",
  "name": "Muzaffarabad",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 725000
 },
 {
  "id": "1169605",
  "name": "Muzaffargarh",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 165192
 },
 {
  "id": "1262332",
  "name": "Muzaffarnagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 349706
 },
 {
  "id": "1262330",
  "name": "Muzaffarpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 333200
 },
 {
  "id": "152224",
  "name": "Mwanza",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 436801
 },
 {
  "id": "207570",
  "name": "Mwene-Ditu",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 189177
 },
 {
  "id": "1574023",
  "name": "My Tho",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 122310
 },
 {
  "id": "1309611",
  "name": "Myeik",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 173298
 },
 {
  "id": "1307835",
  "name": "Myingyan",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 141713
 },
 {
  "id": "700569",
  "name": "Mykolayiv",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 510840
 },
 {
  "id": "1185162",
  "name": "Mymensingh",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 225126
 },
 {
  "id": "1262321",
  "name": "Mysore",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 868313
 },
 {
  "id": "523812",
  "name": "Mytishchi",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 160542
 },
 {
  "id": "925475",
  "name": "Mzuzu",
  "tz": "Africa/Blantyre",
  "country": "MW",
  "population": 175345
 },
 {
  "id": "2239076",
  "name": "N'dalatando",
  "tz": "Africa/Luanda",
  "country": "AO",
  "population": 383100
 },
 {
  "id": "2427123",
  "name": "N'Djamena",
  "tz": "Africa/Ndjamena",
  "country": "TD",
  "population": 721081
 },
 {
  "id": "278913",
  "name": "Nabatiye et Tahta",
  "tz": "Asia/Beirut",
  "country": "LB",
  "population": 120000
 },
 {
  "id": "523750",
  "name": "Naberezhnyye Chelny",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 509870
 },
 {
  "id": "282615",
  "name": "Nablus",
  "tz": "Asia/Hebron",
  "country": "PS",
  "population": 130326
 },
 {
  "id": "1035025",
  "name": "Nacala",
  "tz": "Africa/Maputo",
  "country": "MZ",
  "population": 224795
 },
 {
  "id": "1262292",
  "name": "Nadiad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 202067
 },
 {
  "id": "2541479",
  "name": "Nador",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 129260
 },
 {
  "id": "1698829",
  "name": "Naga",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 174931
 },
 {
  "id": "1856215",
  "name": "Nagano-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 360176
 },
 {
  "id": "1856199",
  "name": "Nagaoka",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 195318
 },
 {
  "id": "1856184",
  "name": "Nagareyama",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 156000
 },
 {
  "id": "1185159",
  "name": "Nagarpur",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 238422
 },
 {
  "id": "1856177",
  "name": "Nagasaki-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 410204
 },
 {
  "id": "1262209",
  "name": "Nagda",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 103501
 },
 {
  "id": "1262204",
  "name": "Nagercoil",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 213858
 },
 {
  "id": "1856057",
  "name": "Nagoya-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 2191279
 },
 {
  "id": "1262180",
  "name": "Nagpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 2228018
 },
 {
  "id": "1856035",
  "name": "Naha-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 300795
 },
 {
  "id": "1262131",
  "name": "Naihati",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 253221
 },
 {
  "id": "184745",
  "name": "Nairobi",
  "tz": "Africa/Nairobi",
  "country": "KE",
  "population": 2750547
 },
 {
  "id": "418606",
  "name": "Najafabad",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 223450
 },
 {
  "id": "103630",
  "name": "Najran",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 258573
 },
 {
  "id": "2019528",
  "name": "Nakhodka",
  "tz": "Asia/Vladivostok",
  "country": "RU",
  "population": 146920
 },
 {
  "id": "1608534",
  "name": "Nakhon Pathom",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 117927
 },
 {
  "id": "1608529",
  "name": "Nakhon Ratchasima",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 208781
 },
 {
  "id": "1151933",
  "name": "Nakhon Si Thammarat",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 120836
 },
 {
  "id": "184622",
  "name": "Nakuru",
  "tz": "Africa/Nairobi",
  "country": "KE",
  "population": 259903
 },
 {
  "id": "523523",
  "name": "Nal'chik",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 272800
 },
 {
  "id": "1262067",
  "name": "Nalgonda",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 121826
 },
 {
  "id": "1513157",
  "name": "Namangan",
  "tz": "Asia/Tashkent",
  "country": "UZ",
  "population": 432456
 },
 {
  "id": "1873757",
  "name": "Namp'o",
  "tz": "Asia/Pyongyang",
  "country": "KP",
  "population": 455000
 },
 {
  "id": "1033356",
  "name": "Nampula",
  "tz": "Africa/Maputo",
  "country": "MZ",
  "population": 388526
 },
 {
  "id": "2790471",
  "name": "Namur",
  "tz": "Europe/Brussels",
  "country": "BE",
  "population": 106284
 },
 {
  "id": "1800163",
  "name": "Nanchang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1871351
 },
 {
  "id": "1800146",
  "name": "Nanchong",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 7150000
 },
 {
  "id": "2990999",
  "name": "Nancy",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 105334
 },
 {
  "id": "1261977",
  "name": "Nanded",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 550564
 },
 {
  "id": "1261931",
  "name": "Nandurbar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 100703
 },
 {
  "id": "1261927",
  "name": "Nandyal",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 165337
 },
 {
  "id": "1348818",
  "name": "Nangi",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 440894
 },
 {
  "id": "1261913",
  "name": "Nangloi Jat",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 194363
 },
 {
  "id": "1799962",
  "name": "Nanjing",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 3087010
 },
 {
  "id": "1799869",
  "name": "Nanning",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 803788
 },
 {
  "id": "2035644",
  "name": "Nanpiao",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 157044
 },
 {
  "id": "1799846",
  "name": "Nanping",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 171674
 },
 {
  "id": "2990969",
  "name": "Nantes",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 277269
 },
 {
  "id": "1799722",
  "name": "Nantong",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 666251
 },
 {
  "id": "1671566",
  "name": "Nantou",
  "tz": "Asia/Taipei",
  "country": "TW",
  "population": 105682
 },
 {
  "id": "1799629",
  "name": "Nanyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 251532
 },
 {
  "id": "4903279",
  "name": "Naperville",
  "tz": "America/Chicago",
  "country": "US",
  "population": 141853
 },
 {
  "id": "3172394",
  "name": "Napoli",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 959470
 },
 {
  "id": "1855612",
  "name": "Nara-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 367353
 },
 {
  "id": "1185155",
  "name": "Narayanganj",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 223622
 },
 {
  "id": "2111684",
  "name": "Narita",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 100641
 },
 {
  "id": "1185117",
  "name": "Narsingdi",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 281080
 },
 {
  "id": "1261731",
  "name": "Nashik",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1289497
 },
 {
  "id": "4644585",
  "name": "Nashville",
  "tz": "America/Chicago",
  "country": "US",
  "population": 530852
 },
 {
  "id": "3571824",
  "name": "Nassau",
  "tz": "America/Nassau",
  "country": "BS",
  "population": 227940
 },
 {
  "id": "3394023",
  "name": "Natal",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 763043
 },
 {
  "id": "3522790",
  "name": "Naucalpan de Juarez",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 846185
 },
 {
  "id": "8858082",
  "name": "Naucalpan de Juarez",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 121470
 },
 {
  "id": "1261669",
  "name": "Navadwip",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 111123
 },
 {
  "id": "624784",
  "name": "Navapolatsk",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 100885
 },
 {
  "id": "6619347",
  "name": "Navi Mumbai",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 2600000
 },
 {
  "id": "1513131",
  "name": "Navoiy",
  "tz": "Asia/Samarkand",
  "country": "UZ",
  "population": 129725
 },
 {
  "id": "1538229",
  "name": "Navoiy Shahri",
  "tz": "Asia/Samarkand",
  "country": "UZ",
  "population": 125800
 },
 {
  "id": "3995019",
  "name": "Navojoa",
  "tz": "America/Hermosillo",
  "country": "MX",
  "population": 120000
 },
 {
  "id": "1337240",
  "name": "Nawabganj",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 142361
 },
 {
  "id": "1169116",
  "name": "Nawabshah",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 229504
 },
 {
  "id": "6611854",
  "name": "Nay Pyi Taw",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 925000
 },
 {
  "id": "122438",
  "name": "Nazarabad",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 213388
 },
 {
  "id": "303873",
  "name": "Nazilli",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 119370
 },
 {
  "id": "523064",
  "name": "Nazran'",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 164131
 },
 {
  "id": "330186",
  "name": "Nazret",
  "tz": "Africa/Addis_Ababa",
  "country": "ET",
  "population": 213995
 },
 {
  "id": "901344",
  "name": "Ndola",
  "tz": "Africa/Lusaka",
  "country": "ZM",
  "population": 394518
 },
 {
  "id": "522942",
  "name": "Neftekamsk",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 126805
 },
 {
  "id": "1497917",
  "name": "Nefteyugansk",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 112632
 },
 {
  "id": "1233369",
  "name": "Negombo",
  "tz": "Asia/Colombo",
  "country": "LK",
  "population": 137223
 },
 {
  "id": "2035610",
  "name": "Nehe",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 108253
 },
 {
  "id": "1799491",
  "name": "Neijiang",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 546854
 },
 {
  "id": "3673899",
  "name": "Neiva",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 352855
 },
 {
  "id": "1261529",
  "name": "Nellore",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 404158
 },
 {
  "id": "971534",
  "name": "Nelspruit",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 110159
 },
 {
  "id": "294071",
  "name": "Netanya",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 171676
 },
 {
  "id": "2864072",
  "name": "Neue Neustadt",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 226851
 },
 {
  "id": "3843123",
  "name": "Neuquen",
  "tz": "America/Argentina/Salta",
  "country": "AR",
  "population": 242092
 },
 {
  "id": "2864118",
  "name": "Neuss",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 152457
 },
 {
  "id": "522377",
  "name": "Nevinnomyssk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 134345
 },
 {
  "id": "1261481",
  "name": "New Delhi",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 317797
 },
 {
  "id": "4839366",
  "name": "New Haven",
  "tz": "America/New_York",
  "country": "US",
  "population": 129779
 },
 {
  "id": "3489297",
  "name": "New Kingston",
  "tz": "America/Jamaica",
  "country": "JM",
  "population": 583958
 },
 {
  "id": "4335045",
  "name": "New Orleans",
  "tz": "America/Chicago",
  "country": "US",
  "population": 343829
 },
 {
  "id": "4645421",
  "name": "New South Memphis",
  "tz": "America/Chicago",
  "country": "US",
  "population": 641608
 },
 {
  "id": "5128581",
  "name": "New York City",
  "tz": "America/New_York",
  "country": "US",
  "population": 8175133
 },
 {
  "id": "5101798",
  "name": "Newark",
  "tz": "America/New_York",
  "country": "US",
  "population": 277140
 },
 {
  "id": "2155472",
  "name": "Newcastle",
  "tz": "Australia/Sydney",
  "country": "AU",
  "population": 308308
 },
 {
  "id": "971421",
  "name": "Newcastle",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 404838
 },
 {
  "id": "2641673",
  "name": "Newcastle upon Tyne",
  "tz": "Europe/London",
  "country": "GB",
  "population": 192382
 },
 {
  "id": "2641598",
  "name": "Newport",
  "tz": "Europe/London",
  "country": "GB",
  "population": 117326
 },
 {
  "id": "4776024",
  "name": "Newport News",
  "tz": "America/New_York",
  "country": "US",
  "population": 180719
 },
 {
  "id": "6697563",
  "name": "Neyagawa",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 238549
 },
 {
  "id": "122285",
  "name": "Neyshabur",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 220929
 },
 {
  "id": "2224827",
  "name": "Ngaoundere",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 231357
 },
 {
  "id": "2328952",
  "name": "Nguru",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 111014
 },
 {
  "id": "1572151",
  "name": "Nha Trang",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 283441
 },
 {
  "id": "2440485",
  "name": "Niamey",
  "tz": "Africa/Niamey",
  "country": "NE",
  "population": 774235
 },
 {
  "id": "2990440",
  "name": "Nice",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 338620
 },
 {
  "id": "3522732",
  "name": "Nicolas Romero",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 245383
 },
 {
  "id": "146268",
  "name": "Nicosia",
  "tz": "Asia/Nicosia",
  "country": "CY",
  "population": 200452
 },
 {
  "id": "970566",
  "name": "Nigel",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 140644
 },
 {
  "id": "1855431",
  "name": "Niigata-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 505272
 },
 {
  "id": "1855425",
  "name": "Niihama",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 123059
 },
 {
  "id": "2750053",
  "name": "Nijmegen",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 158732
 },
 {
  "id": "700051",
  "name": "Nikopol'",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 130500
 },
 {
  "id": "3456290",
  "name": "Nilopolis",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 147281
 },
 {
  "id": "2990363",
  "name": "Nimes",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 148236
 },
 {
  "id": "1799397",
  "name": "Ningbo",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 719867
 },
 {
  "id": "787657",
  "name": "Nis",
  "tz": "Europe/Belgrade",
  "country": "RS",
  "population": 250000
 },
 {
  "id": "1850692",
  "name": "Nishi-Tokyo-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 195164
 },
 {
  "id": "1855207",
  "name": "Nishinomiya",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 468925
 },
 {
  "id": "1855189",
  "name": "Nishio",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 103337
 },
 {
  "id": "3456283",
  "name": "Niteroi",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 456456
 },
 {
  "id": "1261258",
  "name": "Nizamabad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 305438
 },
 {
  "id": "521118",
  "name": "Nizhnekamsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 234297
 },
 {
  "id": "1497543",
  "name": "Nizhnevartovsk",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 244937
 },
 {
  "id": "520555",
  "name": "Nizhniy Novgorod",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 1284164
 },
 {
  "id": "520494",
  "name": "Nizhniy Tagil",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 381116
 },
 {
  "id": "2223763",
  "name": "Nkongsamba",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 117063
 },
 {
  "id": "2328811",
  "name": "Nkpor",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 103733
 },
 {
  "id": "2328765",
  "name": "Nnewi",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 193987
 },
 {
  "id": "1855095",
  "name": "Nobeoka",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 121949
 },
 {
  "id": "1855078",
  "name": "Noda",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 121411
 },
 {
  "id": "4004886",
  "name": "Nogales",
  "tz": "America/Hermosillo",
  "country": "MX",
  "population": 185882
 },
 {
  "id": "520068",
  "name": "Noginsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 115979
 },
 {
  "id": "7279746",
  "name": "Noida",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 293908
 },
 {
  "id": "3363613",
  "name": "Noorder-Paarl",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 187865
 },
 {
  "id": "4776222",
  "name": "Norfolk",
  "tz": "America/New_York",
  "country": "US",
  "population": 242803
 },
 {
  "id": "1497337",
  "name": "Noril'sk",
  "tz": "Asia/Krasnoyarsk",
  "country": "RU",
  "population": 140800
 },
 {
  "id": "4543762",
  "name": "Norman",
  "tz": "America/Chicago",
  "country": "US",
  "population": 110925
 },
 {
  "id": "5377613",
  "name": "North Glendale",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 203201
 },
 {
  "id": "5509403",
  "name": "North Las Vegas",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 216961
 },
 {
  "id": "4903976",
  "name": "North Peoria",
  "tz": "America/Chicago",
  "country": "US",
  "population": 113004
 },
 {
  "id": "2185964",
  "name": "North Shore",
  "tz": "Pacific/Auckland",
  "country": "NZ",
  "population": 207865
 },
 {
  "id": "4839745",
  "name": "North Stamford",
  "tz": "America/New_York",
  "country": "US",
  "population": 121230
 },
 {
  "id": "6091104",
  "name": "North York",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 636000
 },
 {
  "id": "2641430",
  "name": "Northampton",
  "tz": "Europe/London",
  "country": "GB",
  "population": 197322
 },
 {
  "id": "5377995",
  "name": "Norwalk",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 105549
 },
 {
  "id": "2641181",
  "name": "Norwich",
  "tz": "Europe/London",
  "country": "GB",
  "population": 177636
 },
 {
  "id": "3456223",
  "name": "Nossa Senhora do Socorro",
  "tz": "America/Maceio",
  "country": "BR",
  "population": 163993
 },
 {
  "id": "2641170",
  "name": "Nottingham",
  "tz": "Europe/London",
  "country": "GB",
  "population": 246654
 },
 {
  "id": "6252065",
  "name": "Nou Barris",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 164981
 },
 {
  "id": "2377450",
  "name": "Nouakchott",
  "tz": "Africa/Nouakchott",
  "country": "MR",
  "population": 661400
 },
 {
  "id": "3456166",
  "name": "Nova Friburgo",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 153361
 },
 {
  "id": "3456160",
  "name": "Nova Iguacu",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 1002118
 },
 {
  "id": "3194360",
  "name": "Novi Sad",
  "tz": "Europe/Belgrade",
  "country": "RS",
  "population": 215400
 },
 {
  "id": "3456068",
  "name": "Novo Hamburgo",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 253841
 },
 {
  "id": "511510",
  "name": "Novo-Peredelkino",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 115536
 },
 {
  "id": "518976",
  "name": "Novocheboksarsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 128468
 },
 {
  "id": "518970",
  "name": "Novocherkassk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 166974
 },
 {
  "id": "518659",
  "name": "Novokuybyshevsk",
  "tz": "Europe/Samara",
  "country": "RU",
  "population": 111800
 },
 {
  "id": "1496990",
  "name": "Novokuznetsk",
  "tz": "Asia/Novokuznetsk",
  "country": "RU",
  "population": 539616
 },
 {
  "id": "518557",
  "name": "Novomoskovsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 130982
 },
 {
  "id": "518255",
  "name": "Novorossiysk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 241856
 },
 {
  "id": "1496747",
  "name": "Novosibirsk",
  "tz": "Asia/Novosibirsk",
  "country": "RU",
  "population": 1419007
 },
 {
  "id": "517836",
  "name": "Novotroitsk",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 106186
 },
 {
  "id": "624400",
  "name": "Novoye Medvezhino",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 120000
 },
 {
  "id": "517161",
  "name": "Novyye Cheremushki",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 101000
 },
 {
  "id": "517121",
  "name": "Novyye Kuz'minki",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 143000
 },
 {
  "id": "1496503",
  "name": "Noyabrsk",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 110000
 },
 {
  "id": "2328684",
  "name": "Nsukka",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 111017
 },
 {
  "id": "2861650",
  "name": "Nuernberg",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 499237
 },
 {
  "id": "3522551",
  "name": "Nuevo Laredo",
  "tz": "America/Matamoros",
  "country": "MX",
  "population": 349550
 },
 {
  "id": "601294",
  "name": "Nukus",
  "tz": "Asia/Samarkand",
  "country": "UZ",
  "population": 230006
 },
 {
  "id": "1854902",
  "name": "Numazu",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 204318
 },
 {
  "id": "716935",
  "name": "Nyiregyhaza",
  "tz": "Europe/Budapest",
  "country": "HU",
  "population": 116298
 },
 {
  "id": "2416969",
  "name": "Nzerekore",
  "tz": "Africa/Conakry",
  "country": "GN",
  "population": 132728
 },
 {
  "id": "5378538",
  "name": "Oakland",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 390724
 },
 {
  "id": "6092122",
  "name": "Oakville",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 165697
 },
 {
  "id": "3522507",
  "name": "Oaxaca",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 262566
 },
 {
  "id": "2860410",
  "name": "Oberhausen",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 219176
 },
 {
  "id": "2128815",
  "name": "Obihiro",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 173890
 },
 {
  "id": "516436",
  "name": "Obninsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 107392
 },
 {
  "id": "2296606",
  "name": "Obuasi",
  "tz": "Africa/Accra",
  "country": "GH",
  "population": 137856
 },
 {
  "id": "5378771",
  "name": "Oceanside",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 167086
 },
 {
  "id": "516264",
  "name": "Ochakovo-Matveyevskoye",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 114000
 },
 {
  "id": "3631412",
  "name": "Ocumare del Tuy",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 166072
 },
 {
  "id": "1854747",
  "name": "Odawara",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 203035
 },
 {
  "id": "2615876",
  "name": "Odense",
  "tz": "Europe/Copenhagen",
  "country": "DK",
  "population": 145931
 },
 {
  "id": "698740",
  "name": "Odessa",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 1001558
 },
 {
  "id": "516215",
  "name": "Odintsovo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 137041
 },
 {
  "id": "2327879",
  "name": "Offa",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 113830
 },
 {
  "id": "2857807",
  "name": "Offenbach",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 119192
 },
 {
  "id": "1854703",
  "name": "Ogaki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 150570
 },
 {
  "id": "1854487",
  "name": "Oita",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 448907
 },
 {
  "id": "3827598",
  "name": "Ojo de Agua",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 242272
 },
 {
  "id": "7281931",
  "name": "Okanagan",
  "tz": "America/Vancouver",
  "country": "CA",
  "population": 297601
 },
 {
  "id": "1168718",
  "name": "Okara",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 223648
 },
 {
  "id": "1854383",
  "name": "Okayama-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 639652
 },
 {
  "id": "1854376",
  "name": "Okazaki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 352361
 },
 {
  "id": "2327143",
  "name": "Okigwi",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 115499
 },
 {
  "id": "1894616",
  "name": "Okinawa",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 125483
 },
 {
  "id": "4544349",
  "name": "Oklahoma City",
  "tz": "America/Chicago",
  "country": "US",
  "population": 579999
 },
 {
  "id": "2326899",
  "name": "Okrika",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 133271
 },
 {
  "id": "515879",
  "name": "Oktyabr'skiy",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 108200
 },
 {
  "id": "4276614",
  "name": "Olathe",
  "tz": "America/Chicago",
  "country": "US",
  "population": 125872
 },
 {
  "id": "2857458",
  "name": "Oldenburg",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 159218
 },
 {
  "id": "2641022",
  "name": "Oldham",
  "tz": "Europe/London",
  "country": "GB",
  "population": 104782
 },
 {
  "id": "698625",
  "name": "Oleksandriya",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 103000
 },
 {
  "id": "3393536",
  "name": "Olinda",
  "tz": "America/Recife",
  "country": "BR",
  "population": 366754
 },
 {
  "id": "1513064",
  "name": "Olmaliq",
  "tz": "Asia/Tashkent",
  "country": "UZ",
  "population": 121207
 },
 {
  "id": "3069011",
  "name": "Olomouc",
  "tz": "Europe/Prague",
  "country": "CZ",
  "population": 101268
 },
 {
  "id": "1697175",
  "name": "Olongapo",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 221178
 },
 {
  "id": "763166",
  "name": "Olsztyn",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 171803
 },
 {
  "id": "5074472",
  "name": "Omaha",
  "tz": "America/Chicago",
  "country": "US",
  "population": 408958
 },
 {
  "id": "365137",
  "name": "Omdurman",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 1200000
 },
 {
  "id": "1854162",
  "name": "Ome",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 149323
 },
 {
  "id": "1496153",
  "name": "Omsk",
  "tz": "Asia/Omsk",
  "country": "RU",
  "population": 1129281
 },
 {
  "id": "1854083",
  "name": "Omuta",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 131974
 },
 {
  "id": "2326171",
  "name": "Ondo",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 257005
 },
 {
  "id": "1261045",
  "name": "Ongole",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 172872
 },
 {
  "id": "2326016",
  "name": "Onitsha",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 561066
 },
 {
  "id": "5379439",
  "name": "Ontario",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 163924
 },
 {
  "id": "3090048",
  "name": "Opole",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 127676
 },
 {
  "id": "671768",
  "name": "Oradea",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 206614
 },
 {
  "id": "1261039",
  "name": "Orai",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 158265
 },
 {
  "id": "608668",
  "name": "Oral",
  "tz": "Asia/Oral",
  "country": "KZ",
  "population": 200000
 },
 {
  "id": "2485926",
  "name": "Oran",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 645984
 },
 {
  "id": "5379513",
  "name": "Orange",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 136416
 },
 {
  "id": "8347664",
  "name": "Ordos",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 1940653
 },
 {
  "id": "741100",
  "name": "Ordu",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 116788
 },
 {
  "id": "6418220",
  "name": "Orekhovo-Borisovo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 144000
 },
 {
  "id": "515027",
  "name": "Orekhovo-Borisovo Severnoye",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 128000
 },
 {
  "id": "515024",
  "name": "Orekhovo-Zuyevo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 120000
 },
 {
  "id": "515012",
  "name": "Orel",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 324200
 },
 {
  "id": "515003",
  "name": "Orenburg",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 550204
 },
 {
  "id": "3522307",
  "name": "Orizaba",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 121348
 },
 {
  "id": "967476",
  "name": "Orkney",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 145801
 },
 {
  "id": "4167147",
  "name": "Orlando",
  "tz": "America/New_York",
  "country": "US",
  "population": 238300
 },
 {
  "id": "2989317",
  "name": "Orleans",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 124149
 },
 {
  "id": "1697018",
  "name": "Ormoc",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 191200
 },
 {
  "id": "624079",
  "name": "Orsha",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 125347
 },
 {
  "id": "514734",
  "name": "Orsk",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 246836
 },
 {
  "id": "121801",
  "name": "Orumiyeh",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 577307
 },
 {
  "id": "3909234",
  "name": "Oruro",
  "tz": "America/La_Paz",
  "country": "BO",
  "population": 208684
 },
 {
  "id": "1853909",
  "name": "Osaka-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 2592413
 },
 {
  "id": "1839652",
  "name": "Osan",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 158978
 },
 {
  "id": "3455775",
  "name": "Osasco",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 677856
 },
 {
  "id": "1527534",
  "name": "Osh",
  "tz": "Asia/Bishkek",
  "country": "KG",
  "population": 200000
 },
 {
  "id": "6094578",
  "name": "Oshawa",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 247989
 },
 {
  "id": "3143244",
  "name": "Oslo",
  "tz": "Europe/Oslo",
  "country": "NO",
  "population": 580000
 },
 {
  "id": "303195",
  "name": "Osmaniye",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 202837
 },
 {
  "id": "2856883",
  "name": "Osnabrueck",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 166462
 },
 {
  "id": "2325590",
  "name": "Osogbo",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 156694
 },
 {
  "id": "3877949",
  "name": "Osorno",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 135773
 },
 {
  "id": "3068799",
  "name": "Ostrava",
  "tz": "Europe/Prague",
  "country": "CZ",
  "population": 313088
 },
 {
  "id": "1853677",
  "name": "Ota",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 152104
 },
 {
  "id": "2128574",
  "name": "Otaru",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 143792
 },
 {
  "id": "1853574",
  "name": "Otsu-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 298164
 },
 {
  "id": "6094817",
  "name": "Ottawa",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 812129
 },
 {
  "id": "2357048",
  "name": "Ouagadougou",
  "tz": "Africa/Ouagadougou",
  "country": "BF",
  "population": 1086505
 },
 {
  "id": "2485801",
  "name": "Ouargla",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 129402
 },
 {
  "id": "2540483",
  "name": "Oujda",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 405253
 },
 {
  "id": "643492",
  "name": "Oulu",
  "tz": "Europe/Helsinki",
  "country": "FI",
  "population": 128618
 },
 {
  "id": "2484620",
  "name": "Oum el Bouaghi",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 100821
 },
 {
  "id": "3114965",
  "name": "Ourense",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 107742
 },
 {
  "id": "4276873",
  "name": "Overland Park",
  "tz": "America/Chicago",
  "country": "US",
  "population": 173372
 },
 {
  "id": "3114711",
  "name": "Oviedo",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 224005
 },
 {
  "id": "2325330",
  "name": "Owerri",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 215038
 },
 {
  "id": "2325314",
  "name": "Owo",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 276574
 },
 {
  "id": "2640729",
  "name": "Oxford",
  "tz": "Europe/London",
  "country": "GB",
  "population": 154566
 },
 {
  "id": "5380184",
  "name": "Oxnard",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 197899
 },
 {
  "id": "5380202",
  "name": "Oxnard Shores",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 187235
 },
 {
  "id": "1853483",
  "name": "Oyama",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 159936
 },
 {
  "id": "2325200",
  "name": "Oyo",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 736072
 },
 {
  "id": "1871871",
  "name": "P'yongsong",
  "tz": "Asia/Pyongyang",
  "country": "KP",
  "population": 100000
 },
 {
  "id": "1336143",
  "name": "Pabna",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 186781
 },
 {
  "id": "3522210",
  "name": "Pachuca de Soto",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 319581
 },
 {
  "id": "1963770",
  "name": "Padalarang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 124946
 },
 {
  "id": "1633419",
  "name": "Padang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 840352
 },
 {
  "id": "1214369",
  "name": "Padangsidempuan",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 100561
 },
 {
  "id": "2855745",
  "name": "Paderborn",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 142161
 },
 {
  "id": "3171728",
  "name": "Padova",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 203725
 },
 {
  "id": "1696710",
  "name": "Pagadian",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 186852
 },
 {
  "id": "1608048",
  "name": "Pak Kret",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 182926
 },
 {
  "id": "1302439",
  "name": "Pakokku",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 126938
 },
 {
  "id": "1168555",
  "name": "Pakpattan",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 126706
 },
 {
  "id": "1260728",
  "name": "Palakkad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 132728
 },
 {
  "id": "1633118",
  "name": "Palangkaraya",
  "tz": "Asia/Pontianak",
  "country": "ID",
  "population": 148139
 },
 {
  "id": "1260777",
  "name": "Palanpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 123294
 },
 {
  "id": "1633070",
  "name": "Palembang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 1441500
 },
 {
  "id": "2523920",
  "name": "Palermo",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 648260
 },
 {
  "id": "3455478",
  "name": "Palhoca",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 122423
 },
 {
  "id": "1260716",
  "name": "Pali",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 210103
 },
 {
  "id": "1260692",
  "name": "Pallavaram",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 157145
 },
 {
  "id": "4167499",
  "name": "Palm Bay",
  "tz": "America/New_York",
  "country": "US",
  "population": 103190
 },
 {
  "id": "2512989",
  "name": "Palma",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 401270
 },
 {
  "id": "3545064",
  "name": "Palma Soriano",
  "tz": "America/Havana",
  "country": "CU",
  "population": 102826
 },
 {
  "id": "3474574",
  "name": "Palmas",
  "tz": "America/Araguaina",
  "country": "BR",
  "population": 196272
 },
 {
  "id": "5380698",
  "name": "Palmdale",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 152750
 },
 {
  "id": "3673164",
  "name": "Palmira",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 247986
 },
 {
  "id": "3630932",
  "name": "Palo Negro",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 128875
 },
 {
  "id": "1633037",
  "name": "Palopo",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 129273
 },
 {
  "id": "1633034",
  "name": "Palu",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 282431
 },
 {
  "id": "1260637",
  "name": "Palwal",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 121965
 },
 {
  "id": "1632998",
  "name": "Pamanukan",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 114290
 },
 {
  "id": "3114472",
  "name": "Pamplona",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 198491
 },
 {
  "id": "1632937",
  "name": "Pamulang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 174557
 },
 {
  "id": "1695743",
  "name": "Panalanoy",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 189090
 },
 {
  "id": "3703443",
  "name": "Panama",
  "tz": "America/Panama",
  "country": "PA",
  "population": 408168
 },
 {
  "id": "596128",
  "name": "Panevezys",
  "tz": "Europe/Vilnius",
  "country": "LT",
  "population": 117395
 },
 {
  "id": "1632654",
  "name": "Pangkalpinang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 125933
 },
 {
  "id": "1260482",
  "name": "Panihati",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 378705
 },
 {
  "id": "1260476",
  "name": "Panipat",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 292808
 },
 {
  "id": "2035513",
  "name": "Panshan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 625040
 },
 {
  "id": "1260434",
  "name": "Panvel",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 128046
 },
 {
  "id": "1192366",
  "name": "Par Naogaon",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 192464
 },
 {
  "id": "5509952",
  "name": "Paradise",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 223167
 },
 {
  "id": "2392204",
  "name": "Parakou",
  "tz": "Africa/Porto-Novo",
  "country": "BJ",
  "population": 163753
 },
 {
  "id": "3383330",
  "name": "Paramaribo",
  "tz": "America/Paramaribo",
  "country": "SR",
  "population": 223757
 },
 {
  "id": "3841956",
  "name": "Parana",
  "tz": "America/Argentina/Cordoba",
  "country": "AR",
  "population": 262295
 },
 {
  "id": "3455070",
  "name": "Paranagua",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 141013
 },
 {
  "id": "1260341",
  "name": "Parbhani",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 289629
 },
 {
  "id": "1632353",
  "name": "Parepare",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 140000
 },
 {
  "id": "2988507",
  "name": "Paris",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 2138551
 },
 {
  "id": "3114256",
  "name": "Parla",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 115611
 },
 {
  "id": "3171457",
  "name": "Parma",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 146299
 },
 {
  "id": "3393001",
  "name": "Parnaiba",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 138008
 },
 {
  "id": "3392998",
  "name": "Parnamirim",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 150343
 },
 {
  "id": "121380",
  "name": "Parsabad",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 101661
 },
 {
  "id": "1632276",
  "name": "Parung",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 193898
 },
 {
  "id": "4717782",
  "name": "Pasadena",
  "tz": "America/Chicago",
  "country": "US",
  "population": 149043
 },
 {
  "id": "5381396",
  "name": "Pasadena",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 137122
 },
 {
  "id": "1632228",
  "name": "Pasarkemis",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 154234
 },
 {
  "id": "1632197",
  "name": "Paseh",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 126181
 },
 {
  "id": "7290466",
  "name": "Pasig City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 617301
 },
 {
  "id": "3454857",
  "name": "Passo Fundo",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 179529
 },
 {
  "id": "3672778",
  "name": "Pasto",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 382236
 },
 {
  "id": "1632033",
  "name": "Pasuruan",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 158600
 },
 {
  "id": "1260173",
  "name": "Patan",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 117863
 },
 {
  "id": "1282931",
  "name": "Patan",
  "tz": "Asia/Kathmandu",
  "country": "NP",
  "population": 183310
 },
 {
  "id": "5102466",
  "name": "Paterson",
  "tz": "America/New_York",
  "country": "US",
  "population": 146199
 },
 {
  "id": "1260137",
  "name": "Pathankot",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 174306
 },
 {
  "id": "1328421",
  "name": "Pathein",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 237089
 },
 {
  "id": "1631992",
  "name": "Pati",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 122785
 },
 {
  "id": "1260107",
  "name": "Patiala",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 329224
 },
 {
  "id": "1260086",
  "name": "Patna",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1599920
 },
 {
  "id": "3454783",
  "name": "Patos de Minas",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 126234
 },
 {
  "id": "255683",
  "name": "Patra",
  "tz": "Europe/Athens",
  "country": "GR",
  "population": 163360
 },
 {
  "id": "3392740",
  "name": "Paulista",
  "tz": "America/Recife",
  "country": "BR",
  "population": 289971
 },
 {
  "id": "1520240",
  "name": "Pavlodar",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 329002
 },
 {
  "id": "697889",
  "name": "Pavlohrad",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 115932
 },
 {
  "id": "1631905",
  "name": "Payakumbuh",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 121572
 },
 {
  "id": "3046526",
  "name": "Pecs",
  "tz": "Europe/Budapest",
  "country": "HU",
  "population": 156649
 },
 {
  "id": "1631766",
  "name": "Pekalongan",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 257945
 },
 {
  "id": "1631761",
  "name": "Pekanbaru",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 703956
 },
 {
  "id": "3454244",
  "name": "Pelotas",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 320674
 },
 {
  "id": "1631648",
  "name": "Pemalang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 184149
 },
 {
  "id": "1214204",
  "name": "Pematangsiantar",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 209614
 },
 {
  "id": "1028918",
  "name": "Pemba",
  "tz": "Africa/Maputo",
  "country": "MZ",
  "population": 108737
 },
 {
  "id": "4168139",
  "name": "Pembroke Pines",
  "tz": "America/New_York",
  "country": "US",
  "population": 154750
 },
 {
  "id": "511565",
  "name": "Penza",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 512602
 },
 {
  "id": "4905687",
  "name": "Peoria",
  "tz": "America/Chicago",
  "country": "US",
  "population": 115007
 },
 {
  "id": "5308480",
  "name": "Peoria",
  "tz": "America/Phoenix",
  "country": "US",
  "population": 154065
 },
 {
  "id": "1214191",
  "name": "Perbaungan",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 157174
 },
 {
  "id": "1214189",
  "name": "Percut",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 311063
 },
 {
  "id": "3672486",
  "name": "Pereira",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 440118
 },
 {
  "id": "255524",
  "name": "Peristeri",
  "tz": "Europe/Athens",
  "country": "GR",
  "population": 137659
 },
 {
  "id": "511196",
  "name": "Perm",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 982419
 },
 {
  "id": "511153",
  "name": "Perovo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 136000
 },
 {
  "id": "2987914",
  "name": "Perpignan",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 110706
 },
 {
  "id": "2063523",
  "name": "Perth",
  "tz": "Australia/Perth",
  "country": "AU",
  "population": 1896548
 },
 {
  "id": "3171180",
  "name": "Perugia",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 120137
 },
 {
  "id": "510808",
  "name": "Pervoural'sk",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 133600
 },
 {
  "id": "3171168",
  "name": "Pescara",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 116596
 },
 {
  "id": "1168197",
  "name": "Peshawar",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 1218773
 },
 {
  "id": "293918",
  "name": "Petah Tiqwa",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 200000
 },
 {
  "id": "1735158",
  "name": "Petaling Jaya",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 520698
 },
 {
  "id": "3591415",
  "name": "Petapa",
  "tz": "America/Guatemala",
  "country": "GT",
  "population": 141455
 },
 {
  "id": "3630297",
  "name": "Petare",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 364684
 },
 {
  "id": "2640354",
  "name": "Peterborough",
  "tz": "Europe/London",
  "country": "GB",
  "population": 140141
 },
 {
  "id": "3719028",
  "name": "Petionville",
  "tz": "America/Port-au-Prince",
  "country": "HT",
  "population": 283052
 },
 {
  "id": "3718962",
  "name": "Petit Goave",
  "tz": "America/Port-au-Prince",
  "country": "HT",
  "population": 117504
 },
 {
  "id": "8504948",
  "name": "Petrogradka",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 130455
 },
 {
  "id": "3392242",
  "name": "Petrolina",
  "tz": "America/Recife",
  "country": "BR",
  "population": 194650
 },
 {
  "id": "1520172",
  "name": "Petropavlovsk",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 200920
 },
 {
  "id": "2122104",
  "name": "Petropavlovsk-Kamchatsky",
  "tz": "Asia/Kamchatka",
  "country": "RU",
  "population": 187282
 },
 {
  "id": "3454031",
  "name": "Petropolis",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 272691
 },
 {
  "id": "509820",
  "name": "Petrozavodsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 265025
 },
 {
  "id": "2853969",
  "name": "Pforzheim",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 119313
 },
 {
  "id": "1259827",
  "name": "Phagwara",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 100146
 },
 {
  "id": "965528",
  "name": "Phalaborwa",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 109468
 },
 {
  "id": "1571058",
  "name": "Phan Thiet",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 160652
 },
 {
  "id": "4560349",
  "name": "Philadelphia",
  "tz": "America/New_York",
  "country": "US",
  "population": 1526006
 },
 {
  "id": "1607708",
  "name": "Phitsanulok",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 103427
 },
 {
  "id": "1821306",
  "name": "Phnom Penh",
  "tz": "Asia/Phnom_Penh",
  "country": "KH",
  "population": 1573544
 },
 {
  "id": "5308655",
  "name": "Phoenix",
  "tz": "America/Phoenix",
  "country": "US",
  "population": 1445632
 },
 {
  "id": "1607508",
  "name": "Phra Pradaeng",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 171333
 },
 {
  "id": "670889",
  "name": "Piatra Neamt",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 102688
 },
 {
  "id": "3992619",
  "name": "Piedras Negras",
  "tz": "America/Matamoros",
  "country": "MX",
  "population": 150178
 },
 {
  "id": "965301",
  "name": "Pietermaritzburg",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 750845
 },
 {
  "id": "2246678",
  "name": "Pikine",
  "tz": "Africa/Dakar",
  "country": "SN",
  "population": 874062
 },
 {
  "id": "1259686",
  "name": "Pilibhit",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 131008
 },
 {
  "id": "1259652",
  "name": "Pimpri",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1284606
 },
 {
  "id": "3544091",
  "name": "Pinar del Rio",
  "tz": "America/Havana",
  "country": "CU",
  "population": 186990
 },
 {
  "id": "3453837",
  "name": "Pindamonhangaba",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 132218
 },
 {
  "id": "2324857",
  "name": "Pindiga",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 106322
 },
 {
  "id": "1798827",
  "name": "Pingdingshan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 889675
 },
 {
  "id": "1798760",
  "name": "Pingliang",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 108156
 },
 {
  "id": "1798713",
  "name": "Pingshan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 113631
 },
 {
  "id": "1798654",
  "name": "Pingxiang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 372123
 },
 {
  "id": "6317953",
  "name": "Pinhais",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 117000
 },
 {
  "id": "623549",
  "name": "Pinsk",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 130777
 },
 {
  "id": "3453643",
  "name": "Piracicaba",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 342209
 },
 {
  "id": "255274",
  "name": "Piraeus",
  "tz": "Europe/Athens",
  "country": "GR",
  "population": 172429
 },
 {
  "id": "1230089",
  "name": "Pita Kotte",
  "tz": "Asia/Colombo",
  "country": "LK",
  "population": 118179
 },
 {
  "id": "670609",
  "name": "Pitesti",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 167669
 },
 {
  "id": "5206379",
  "name": "Pittsburgh",
  "tz": "America/New_York",
  "country": "US",
  "population": 305704
 },
 {
  "id": "3693528",
  "name": "Piura",
  "tz": "America/Lima",
  "country": "PE",
  "population": 325466
 },
 {
  "id": "4719457",
  "name": "Plano",
  "tz": "America/Chicago",
  "country": "US",
  "population": 259841
 },
 {
  "id": "3521342",
  "name": "Playa del Carmen",
  "tz": "America/Cancun",
  "country": "MX",
  "population": 100383
 },
 {
  "id": "1569684",
  "name": "Pleiku",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 114225
 },
 {
  "id": "728203",
  "name": "Pleven",
  "tz": "Europe/Sofia",
  "country": "BG",
  "population": 118675
 },
 {
  "id": "3088825",
  "name": "Plock",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 127474
 },
 {
  "id": "670474",
  "name": "Ploiesti",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 228851
 },
 {
  "id": "728193",
  "name": "Plovdiv",
  "tz": "Europe/Sofia",
  "country": "BG",
  "population": 340494
 },
 {
  "id": "1630997",
  "name": "Plumbon",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 167105
 },
 {
  "id": "2640194",
  "name": "Plymouth",
  "tz": "Europe/London",
  "country": "GB",
  "population": 247297
 },
 {
  "id": "3068160",
  "name": "Plzen",
  "tz": "Europe/Prague",
  "country": "CZ",
  "population": 164180
 },
 {
  "id": "3453406",
  "name": "Poa",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 107432
 },
 {
  "id": "3453303",
  "name": "Pocos de Caldas",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 146588
 },
 {
  "id": "3193044",
  "name": "Podgorica",
  "tz": "Europe/Podgorica",
  "country": "ME",
  "population": 136473
 },
 {
  "id": "508101",
  "name": "Podol'sk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 179400
 },
 {
  "id": "1839071",
  "name": "Pohang",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 500000
 },
 {
  "id": "2255414",
  "name": "Pointe-Noire",
  "tz": "Africa/Brazzaville",
  "country": "CG",
  "population": 659084
 },
 {
  "id": "1282898",
  "name": "Pokhara",
  "tz": "Asia/Kathmandu",
  "country": "NP",
  "population": 200000
 },
 {
  "id": "965289",
  "name": "Polokwane",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 123749
 },
 {
  "id": "696643",
  "name": "Poltava",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 317847
 },
 {
  "id": "5384170",
  "name": "Pomona",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 149058
 },
 {
  "id": "4566880",
  "name": "Ponce",
  "tz": "America/Puerto_Rico",
  "country": "PR",
  "population": 152634
 },
 {
  "id": "1259411",
  "name": "Ponnani",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 105512
 },
 {
  "id": "3453186",
  "name": "Ponta Grossa",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 292177
 },
 {
  "id": "1630789",
  "name": "Pontianak",
  "tz": "Asia/Pontianak",
  "country": "ID",
  "population": 455173
 },
 {
  "id": "2640101",
  "name": "Poole",
  "tz": "Europe/London",
  "country": "GB",
  "population": 150092
 },
 {
  "id": "3671916",
  "name": "Popayan",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 258653
 },
 {
  "id": "1259395",
  "name": "Porbandar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 138872
 },
 {
  "id": "1259385",
  "name": "Port Blair",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 112050
 },
 {
  "id": "964420",
  "name": "Port Elizabeth",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 967677
 },
 {
  "id": "2324774",
  "name": "Port Harcourt",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 1148665
 },
 {
  "id": "934154",
  "name": "Port Louis",
  "tz": "Indian/Mauritius",
  "country": "MU",
  "population": 155226
 },
 {
  "id": "2088122",
  "name": "Port Moresby",
  "tz": "Pacific/Port_Moresby",
  "country": "PG",
  "population": 283733
 },
 {
  "id": "358619",
  "name": "Port Said",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 538378
 },
 {
  "id": "4169171",
  "name": "Port Saint Lucie",
  "tz": "America/New_York",
  "country": "US",
  "population": 164603
 },
 {
  "id": "377039",
  "name": "Port Sudan",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 489725
 },
 {
  "id": "3718426",
  "name": "Port-au-Prince",
  "tz": "America/Port-au-Prince",
  "country": "HT",
  "population": 1234742
 },
 {
  "id": "3718420",
  "name": "Port-de-Paix",
  "tz": "America/Port-au-Prince",
  "country": "HT",
  "population": 250000
 },
 {
  "id": "2396518",
  "name": "Port-Gentil",
  "tz": "Africa/Libreville",
  "country": "GA",
  "population": 109163
 },
 {
  "id": "5746545",
  "name": "Portland",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 583776
 },
 {
  "id": "3488981",
  "name": "Portmore",
  "tz": "America/Jamaica",
  "country": "JM",
  "population": 102861
 },
 {
  "id": "2735943",
  "name": "Porto",
  "tz": "Europe/Lisbon",
  "country": "PT",
  "population": 249633
 },
 {
  "id": "3452925",
  "name": "Porto Alegre",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 1372741
 },
 {
  "id": "3452640",
  "name": "Porto Seguro",
  "tz": "America/Bahia",
  "country": "BR",
  "population": 123173
 },
 {
  "id": "3662762",
  "name": "Porto Velho",
  "tz": "America/Porto_Velho",
  "country": "BR",
  "population": 306180
 },
 {
  "id": "2392087",
  "name": "Porto-Novo",
  "tz": "Africa/Porto-Novo",
  "country": "BJ",
  "population": 234168
 },
 {
  "id": "3652941",
  "name": "Portoviejo",
  "tz": "America/Guayaquil",
  "country": "EC",
  "population": 170326
 },
 {
  "id": "2639996",
  "name": "Portsmouth",
  "tz": "Europe/London",
  "country": "GB",
  "population": 194150
 },
 {
  "id": "3429886",
  "name": "Posadas",
  "tz": "America/Argentina/Cordoba",
  "country": "AR",
  "population": 312060
 },
 {
  "id": "964349",
  "name": "Potchefstroom",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 123669
 },
 {
  "id": "3907584",
  "name": "Potosi",
  "tz": "America/La_Paz",
  "country": "BO",
  "population": 141251
 },
 {
  "id": "2852458",
  "name": "Potsdam",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 145292
 },
 {
  "id": "3452525",
  "name": "Pouso Alegre",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 115201
 },
 {
  "id": "3521168",
  "name": "Poza Rica de Hidalgo",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 174526
 },
 {
  "id": "3088171",
  "name": "Poznan",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 570352
 },
 {
  "id": "1631393",
  "name": "Prabumulih",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 103470
 },
 {
  "id": "6545348",
  "name": "Praga Poludnie",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 187845
 },
 {
  "id": "3067696",
  "name": "Prague",
  "tz": "Europe/Prague",
  "country": "CZ",
  "population": 1165581
 },
 {
  "id": "3374333",
  "name": "Praia",
  "tz": "Atlantic/Cape_Verde",
  "country": "CV",
  "population": 113364
 },
 {
  "id": "3452465",
  "name": "Praia Grande",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 250027
 },
 {
  "id": "3169921",
  "name": "Prato",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 181820
 },
 {
  "id": "2852217",
  "name": "Prenzlauer Berg Bezirk",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 148878
 },
 {
  "id": "3452324",
  "name": "Presidente Prudente",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 209502
 },
 {
  "id": "542634",
  "name": "Presnenskiy",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 122000
 },
 {
  "id": "2639912",
  "name": "Preston",
  "tz": "Europe/London",
  "country": "GB",
  "population": 190687
 },
 {
  "id": "964137",
  "name": "Pretoria",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 1619438
 },
 {
  "id": "786714",
  "name": "Pristina",
  "tz": "Europe/Belgrade",
  "country": "XK",
  "population": 550000
 },
 {
  "id": "786712",
  "name": "Prizren",
  "tz": "Europe/Belgrade",
  "country": "XK",
  "population": 171464
 },
 {
  "id": "1630634",
  "name": "Probolinggo",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 181656
 },
 {
  "id": "1259312",
  "name": "Proddatur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 177797
 },
 {
  "id": "1494114",
  "name": "Prokop'yevsk",
  "tz": "Asia/Novokuznetsk",
  "country": "RU",
  "population": 219000
 },
 {
  "id": "5224151",
  "name": "Providence",
  "tz": "America/New_York",
  "country": "US",
  "population": 178042
 },
 {
  "id": "5780026",
  "name": "Provo",
  "tz": "America/Denver",
  "country": "US",
  "population": 112488
 },
 {
  "id": "504341",
  "name": "Pskov",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 201990
 },
 {
  "id": "G9",
  "name": "PST8PDT",
  "tz": "PST8PDT",
  "country": null,
  "population": null
 },
 {
  "id": "3693345",
  "name": "Pucallpa",
  "tz": "America/Lima",
  "country": "PE",
  "population": 310750
 },
 {
  "id": "1259425",
  "name": "Puducherry",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 227411
 },
 {
  "id": "1259297",
  "name": "Pudukkottai",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 112118
 },
 {
  "id": "3521081",
  "name": "Puebla",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 1590256
 },
 {
  "id": "5435464",
  "name": "Pueblo",
  "tz": "America/Denver",
  "country": "US",
  "population": 106595
 },
 {
  "id": "3875024",
  "name": "Puente Alto",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 510417
 },
 {
  "id": "3112737",
  "name": "Puente de Vallecas",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 244151
 },
 {
  "id": "3629706",
  "name": "Puerto Cabello",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 174000
 },
 {
  "id": "3629672",
  "name": "Puerto La Cruz",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 370000
 },
 {
  "id": "3874960",
  "name": "Puerto Montt",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 160054
 },
 {
  "id": "3493175",
  "name": "Puerto Plata",
  "tz": "America/Santo_Domingo",
  "country": "DO",
  "population": 146000
 },
 {
  "id": "1692685",
  "name": "Puerto Princesa",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 222673
 },
 {
  "id": "3991328",
  "name": "Puerto Vallarta",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 187134
 },
 {
  "id": "1798490",
  "name": "Pulandian",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 104277
 },
 {
  "id": "1692520",
  "name": "Pulong Santa Cruz",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 101914
 },
 {
  "id": "1259239",
  "name": "Punasa",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 350000
 },
 {
  "id": "1259229",
  "name": "Pune",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 2935744
 },
 {
  "id": "1802940",
  "name": "Puning",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 118023
 },
 {
  "id": "3931276",
  "name": "Puno",
  "tz": "America/Lima",
  "country": "PE",
  "population": 116552
 },
 {
  "id": "3874787",
  "name": "Punta Arenas",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 117430
 },
 {
  "id": "3494242",
  "name": "Punta Cana",
  "tz": "America/Santo_Domingo",
  "country": "DO",
  "population": 100023
 },
 {
  "id": "3629576",
  "name": "Punto Fijo",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 131784
 },
 {
  "id": "1798473",
  "name": "Puqi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 132891
 },
 {
  "id": "1259184",
  "name": "Puri",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 170841
 },
 {
  "id": "1259166",
  "name": "Purnia",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 198453
 },
 {
  "id": "1259163",
  "name": "Puruliya",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 122533
 },
 {
  "id": "1630341",
  "name": "Purwakarta",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 215803
 },
 {
  "id": "1630333",
  "name": "Purwodadi",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 150206
 },
 {
  "id": "1630328",
  "name": "Purwokerto",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 217222
 },
 {
  "id": "503977",
  "name": "Pushkino",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 102816
 },
 {
  "id": "1798449",
  "name": "Putian",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 376558
 },
 {
  "id": "1798422",
  "name": "Puyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 666322
 },
 {
  "id": "1798425",
  "name": "Puyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 3590000
 },
 {
  "id": "503550",
  "name": "Pyatigorsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 142865
 },
 {
  "id": "1299154",
  "name": "Pyay",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 135308
 },
 {
  "id": "1871859",
  "name": "Pyongyang",
  "tz": "Asia/Pyongyang",
  "country": "KP",
  "population": 3222000
 },
 {
  "id": "350789",
  "name": "Qalyub",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 100495
 },
 {
  "id": "32767",
  "name": "Qarchak",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 251834
 },
 {
  "id": "1216311",
  "name": "Qarshi",
  "tz": "Asia/Samarkand",
  "country": "UZ",
  "population": 222898
 },
 {
  "id": "119505",
  "name": "Qazvin",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 333635
 },
 {
  "id": "2035399",
  "name": "Qianguo",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 113611
 },
 {
  "id": "1786067",
  "name": "Qianjiang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 179079
 },
 {
  "id": "1805270",
  "name": "Qianzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 102332
 },
 {
  "id": "350550",
  "name": "Qina",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 235362
 },
 {
  "id": "1797929",
  "name": "Qingdao",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1642245
 },
 {
  "id": "1797945",
  "name": "Qingyuan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 151287
 },
 {
  "id": "1786731",
  "name": "Qingzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 117056
 },
 {
  "id": "1797595",
  "name": "Qinhuangdao",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 759718
 },
 {
  "id": "1797551",
  "name": "Qinzhou",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 100996
 },
 {
  "id": "2035265",
  "name": "Qiqihar",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 882364
 },
 {
  "id": "119208",
  "name": "Qom",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 900000
 },
 {
  "id": "1512979",
  "name": "Qo`qon",
  "tz": "Asia/Tashkent",
  "country": "UZ",
  "population": 187477
 },
 {
  "id": "1797353",
  "name": "Quanzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 184143
 },
 {
  "id": "119115",
  "name": "Quchan",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 111752
 },
 {
  "id": "6325494",
  "name": "Quebec",
  "tz": "America/Montreal",
  "country": "CA",
  "population": 528595
 },
 {
  "id": "963516",
  "name": "Queenstown",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 105309
 },
 {
  "id": "3452073",
  "name": "Queimados",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 135741
 },
 {
  "id": "1028434",
  "name": "Quelimane",
  "tz": "Africa/Maputo",
  "country": "MZ",
  "population": 188964
 },
 {
  "id": "2264268",
  "name": "Queluz",
  "tz": "Europe/Lisbon",
  "country": "PT",
  "population": 103399
 },
 {
  "id": "1167528",
  "name": "Quetta",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 733675
 },
 {
  "id": "3590979",
  "name": "Quetzaltenango",
  "tz": "America/Guatemala",
  "country": "GT",
  "population": 132230
 },
 {
  "id": "3652567",
  "name": "Quevedo",
  "tz": "America/Guayaquil",
  "country": "EC",
  "population": 119436
 },
 {
  "id": "1692192",
  "name": "Quezon City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 2761720
 },
 {
  "id": "1568574",
  "name": "Qui Nhon",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 210338
 },
 {
  "id": "3429652",
  "name": "Quilmes",
  "tz": "America/Argentina/Buenos_Aires",
  "country": "AR",
  "population": 518788
 },
 {
  "id": "3874096",
  "name": "Quilpue",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 130263
 },
 {
  "id": "3652462",
  "name": "Quito",
  "tz": "America/Guayaquil",
  "country": "EC",
  "population": 1399814
 },
 {
  "id": "1797318",
  "name": "Qujing",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 146015
 },
 {
  "id": "7302845",
  "name": "Quthbullapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 225816
 },
 {
  "id": "268743",
  "name": "Ra's Bayrut",
  "tz": "Asia/Beirut",
  "country": "LB",
  "population": 1251739
 },
 {
  "id": "368277",
  "name": "Rabak",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 135281
 },
 {
  "id": "2538475",
  "name": "Rabat",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 1655753
 },
 {
  "id": "1568510",
  "name": "Rach Gia",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 228356
 },
 {
  "id": "760778",
  "name": "Radom",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 226794
 },
 {
  "id": "1259064",
  "name": "Rae Bareli",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 186433
 },
 {
  "id": "281102",
  "name": "Rafah",
  "tz": "Asia/Gaza",
  "country": "PS",
  "population": 126305
 },
 {
  "id": "118994",
  "name": "Rafsanjan",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 147680
 },
 {
  "id": "1259012",
  "name": "Raichur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 225962
 },
 {
  "id": "1259009",
  "name": "Raiganj",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 170252
 },
 {
  "id": "1259005",
  "name": "Raigarh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 121278
 },
 {
  "id": "1258980",
  "name": "Raipur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 679995
 },
 {
  "id": "1258831",
  "name": "Raj Nandgaon",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 150755
 },
 {
  "id": "1258932",
  "name": "Rajahmundry",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 304804
 },
 {
  "id": "1258916",
  "name": "Rajapalaiyam",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 124168
 },
 {
  "id": "1258847",
  "name": "Rajkot",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1177362
 },
 {
  "id": "1185128",
  "name": "Rajshahi",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 700133
 },
 {
  "id": "4487042",
  "name": "Raleigh",
  "tz": "America/New_York",
  "country": "US",
  "population": 403892
 },
 {
  "id": "98717",
  "name": "Ramadi",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 274539
 },
 {
  "id": "8347656",
  "name": "Ramagundam",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 235000
 },
 {
  "id": "293788",
  "name": "Ramat Gan",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 128095
 },
 {
  "id": "502971",
  "name": "Ramenki",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 130000
 },
 {
  "id": "1258662",
  "name": "Ramgundam",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 452261
 },
 {
  "id": "668872",
  "name": "Ramnicu Valcea",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 107558
 },
 {
  "id": "1258599",
  "name": "Rampur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 296418
 },
 {
  "id": "3873775",
  "name": "Rancagua",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 212695
 },
 {
  "id": "1258526",
  "name": "Ranchi",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 846454
 },
 {
  "id": "5385955",
  "name": "Rancho Cucamonga",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 165269
 },
 {
  "id": "963230",
  "name": "Randfontein",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 133654
 },
 {
  "id": "1630058",
  "name": "Rangkasbitung",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 126910
 },
 {
  "id": "1185188",
  "name": "Rangpur",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 343122
 },
 {
  "id": "1258470",
  "name": "Raniganj",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 131261
 },
 {
  "id": "1214073",
  "name": "Rantauprapat",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 103009
 },
 {
  "id": "291074",
  "name": "Ras al-Khaimah",
  "tz": "Asia/Dubai",
  "country": "AE",
  "population": 115949
 },
 {
  "id": "118743",
  "name": "Rasht",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 594590
 },
 {
  "id": "1258342",
  "name": "Ratlam",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 236843
 },
 {
  "id": "1166993",
  "name": "Rawalpindi",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 1743101
 },
 {
  "id": "1735150",
  "name": "Rawang",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 120447
 },
 {
  "id": "1607017",
  "name": "Rayong",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 106737
 },
 {
  "id": "2639577",
  "name": "Reading",
  "tz": "Europe/London",
  "country": "GB",
  "population": 244070
 },
 {
  "id": "3390760",
  "name": "Recife",
  "tz": "America/Recife",
  "country": "BR",
  "population": 1478098
 },
 {
  "id": "2849647",
  "name": "Recklinghausen",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 122438
 },
 {
  "id": "2849483",
  "name": "Regensburg",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 129151
 },
 {
  "id": "2523630",
  "name": "Reggio Calabria",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 169140
 },
 {
  "id": "3169522",
  "name": "Reggio nell'Emilia",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 133296
 },
 {
  "id": "6119109",
  "name": "Regina",
  "tz": "America/Regina",
  "country": "CA",
  "population": 176183
 },
 {
  "id": "2984114",
  "name": "Reims",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 196565
 },
 {
  "id": "2483668",
  "name": "Relizane",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 130094
 },
 {
  "id": "2848273",
  "name": "Remscheid",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 117118
 },
 {
  "id": "1629710",
  "name": "Rengasdengklok",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 201463
 },
 {
  "id": "2983990",
  "name": "Rennes",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 209375
 },
 {
  "id": "5511077",
  "name": "Reno",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 225221
 },
 {
  "id": "3451668",
  "name": "Resende",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 111514
 },
 {
  "id": "3429577",
  "name": "Resistencia",
  "tz": "America/Argentina/Cordoba",
  "country": "AR",
  "population": 387158
 },
 {
  "id": "1028079",
  "name": "Ressano Garcia",
  "tz": "Africa/Maputo",
  "country": "MZ",
  "population": 110000
 },
 {
  "id": "6544495",
  "name": "Retiro",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 126058
 },
 {
  "id": "3111933",
  "name": "Reus",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 107118
 },
 {
  "id": "2847736",
  "name": "Reutlingen",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 112627
 },
 {
  "id": "1258182",
  "name": "Rewa",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 208461
 },
 {
  "id": "1258178",
  "name": "Rewari",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 112079
 },
 {
  "id": "3413829",
  "name": "Reykjavik",
  "tz": "Atlantic/Reykjavik",
  "country": "IS",
  "population": 118918
 },
 {
  "id": "3520339",
  "name": "Reynosa",
  "tz": "America/Matamoros",
  "country": "MX",
  "population": 498654
 },
 {
  "id": "3451353",
  "name": "Ribeirao das Neves",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 406802
 },
 {
  "id": "3451329",
  "name": "Ribeirao Pires",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 111888
 },
 {
  "id": "3451328",
  "name": "Ribeirao Preto",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 619746
 },
 {
  "id": "962367",
  "name": "Richards Bay",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 252968
 },
 {
  "id": "6122085",
  "name": "Richmond",
  "tz": "America/Vancouver",
  "country": "CA",
  "population": 182000
 },
 {
  "id": "4781708",
  "name": "Richmond",
  "tz": "America/New_York",
  "country": "US",
  "population": 204214
 },
 {
  "id": "5387428",
  "name": "Richmond",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 103701
 },
 {
  "id": "6122091",
  "name": "Richmond Hill",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 185541
 },
 {
  "id": "456172",
  "name": "Riga",
  "tz": "Europe/Riga",
  "country": "LV",
  "population": 742572
 },
 {
  "id": "3191648",
  "name": "Rijeka",
  "tz": "Europe/Zagreb",
  "country": "HR",
  "population": 141172
 },
 {
  "id": "3169361",
  "name": "Rimini",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 118673
 },
 {
  "id": "3662574",
  "name": "Rio Branco",
  "tz": "America/Rio_Branco",
  "country": "BR",
  "population": 257642
 },
 {
  "id": "3451234",
  "name": "Rio Claro",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 180147
 },
 {
  "id": "3838874",
  "name": "Rio Cuarto",
  "tz": "America/Argentina/Cordoba",
  "country": "AR",
  "population": 153757
 },
 {
  "id": "3451190",
  "name": "Rio de Janeiro",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 6023699
 },
 {
  "id": "3451138",
  "name": "Rio Grande",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 187838
 },
 {
  "id": "3652350",
  "name": "Riobamba",
  "tz": "America/Guayaquil",
  "country": "EC",
  "population": 124478
 },
 {
  "id": "293703",
  "name": "Rishon LeZiyyon",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 220492
 },
 {
  "id": "1258126",
  "name": "Rishra",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 117014
 },
 {
  "id": "5387877",
  "name": "Riverside",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 303871
 },
 {
  "id": "695594",
  "name": "Rivne",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 255106
 },
 {
  "id": "108410",
  "name": "Riyadh",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 4205961
 },
 {
  "id": "1797132",
  "name": "Rizhao",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 246387
 },
 {
  "id": "1258109",
  "name": "Robertsonpet",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 135218
 },
 {
  "id": "5043473",
  "name": "Rochester",
  "tz": "America/Chicago",
  "country": "US",
  "population": 106769
 },
 {
  "id": "5134086",
  "name": "Rochester",
  "tz": "America/New_York",
  "country": "US",
  "population": 210565
 },
 {
  "id": "4907959",
  "name": "Rockford",
  "tz": "America/Chicago",
  "country": "US",
  "population": 152871
 },
 {
  "id": "2062338",
  "name": "Rockingham",
  "tz": "Australia/Perth",
  "country": "AU",
  "population": 108022
 },
 {
  "id": "1699296",
  "name": "Rodriguez",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 134432
 },
 {
  "id": "1258076",
  "name": "Rohtak",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 317245
 },
 {
  "id": "3169070",
  "name": "Rome",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 2318895
 },
 {
  "id": "3450909",
  "name": "Rondonopolis",
  "tz": "America/Cuiaba",
  "country": "BR",
  "population": 152912
 },
 {
  "id": "936374",
  "name": "Roodepoort",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 225000
 },
 {
  "id": "1258044",
  "name": "Roorkee",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 103894
 },
 {
  "id": "3838583",
  "name": "Rosario",
  "tz": "America/Argentina/Cordoba",
  "country": "AR",
  "population": 1173533
 },
 {
  "id": "5388881",
  "name": "Roseville",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 118788
 },
 {
  "id": "2844588",
  "name": "Rostock",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 198293
 },
 {
  "id": "501175",
  "name": "Rostov-na-Donu",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 1074482
 },
 {
  "id": "2639093",
  "name": "Rotherham",
  "tz": "Europe/London",
  "country": "GB",
  "population": 117618
 },
 {
  "id": "2747891",
  "name": "Rotterdam",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 598199
 },
 {
  "id": "2982652",
  "name": "Rouen",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 112787
 },
 {
  "id": "1691444",
  "name": "Roxas City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 102688
 },
 {
  "id": "1493467",
  "name": "Rubtsovsk",
  "tz": "Asia/Omsk",
  "country": "RU",
  "population": 161065
 },
 {
  "id": "3086800",
  "name": "Ruda Slaska",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 146189
 },
 {
  "id": "1519843",
  "name": "Rudnyy",
  "tz": "Asia/Qyzylorda",
  "country": "KZ",
  "population": 124000
 },
 {
  "id": "727523",
  "name": "Ruse",
  "tz": "Europe/Sofia",
  "country": "BG",
  "population": 156238
 },
 {
  "id": "7838895",
  "name": "Russeifa",
  "tz": "Asia/Amman",
  "country": "JO",
  "population": 268237
 },
 {
  "id": "958724",
  "name": "Rustenburg",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 124064
 },
 {
  "id": "500096",
  "name": "Ryazan'",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 520173
 },
 {
  "id": "508751",
  "name": "Ryazanskiy",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 101000
 },
 {
  "id": "500004",
  "name": "Rybinsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 216724
 },
 {
  "id": "3086586",
  "name": "Rybnik",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 142510
 },
 {
  "id": "759734",
  "name": "Rzeszow",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 158382
 },
 {
  "id": "1568043",
  "name": "Sa Pa",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 138622
 },
 {
  "id": "2842647",
  "name": "Saarbrucken",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 181227
 },
 {
  "id": "3111199",
  "name": "Sabadell",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 206493
 },
 {
  "id": "412800",
  "name": "Sabah as Salim",
  "tz": "Asia/Kuwait",
  "country": "KW",
  "population": 139163
 },
 {
  "id": "2212775",
  "name": "Sabha",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 130000
 },
 {
  "id": "2212771",
  "name": "Sabratah",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 102038
 },
 {
  "id": "118063",
  "name": "Sabzevar",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 226183
 },
 {
  "id": "5389489",
  "name": "Sacramento",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 466488
 },
 {
  "id": "1166652",
  "name": "Sadiqabad",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 189876
 },
 {
  "id": "2537881",
  "name": "Safi",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 288163
 },
 {
  "id": "1853303",
  "name": "Saga-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 165236
 },
 {
  "id": "1257845",
  "name": "Sagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 247333
 },
 {
  "id": "2425791",
  "name": "Sagh",
  "tz": "Africa/Ndjamena",
  "country": "TD",
  "population": 102528
 },
 {
  "id": "6137270",
  "name": "Saguenay",
  "tz": "America/Montreal",
  "country": "CA",
  "population": 143692
 },
 {
  "id": "1257806",
  "name": "Saharanpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 484873
 },
 {
  "id": "1257804",
  "name": "Saharsa",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 145764
 },
 {
  "id": "1166548",
  "name": "Sahiwal",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 235695
 },
 {
  "id": "2482572",
  "name": "Saida",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 127497
 },
 {
  "id": "6545349",
  "name": "Saidpur",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 199422
 },
 {
  "id": "5045360",
  "name": "Saint Paul",
  "tz": "America/Chicago",
  "country": "US",
  "population": 285068
 },
 {
  "id": "498817",
  "name": "Saint Petersburg",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 5028000
 },
 {
  "id": "4171563",
  "name": "Saint Petersburg",
  "tz": "America/New_York",
  "country": "US",
  "population": 244769
 },
 {
  "id": "935264",
  "name": "Saint-Denis",
  "tz": "Indian/Reunion",
  "country": "RE",
  "population": 137195
 },
 {
  "id": "2980291",
  "name": "Saint-Etienne",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 176280
 },
 {
  "id": "2246452",
  "name": "Saint-Louis",
  "tz": "Africa/Dakar",
  "country": "SN",
  "population": 176000
 },
 {
  "id": "8533870",
  "name": "Saint-Quentin-en-Yvelines",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 146598
 },
 {
  "id": "6940394",
  "name": "Saitama",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 1193350
 },
 {
  "id": "1853195",
  "name": "Sakai",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 782339
 },
 {
  "id": "102527",
  "name": "Sakaka",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 128332
 },
 {
  "id": "1853140",
  "name": "Sakata",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 100446
 },
 {
  "id": "2323390",
  "name": "Saki",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 178677
 },
 {
  "id": "2111220",
  "name": "Sakura",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 182549
 },
 {
  "id": "286621",
  "name": "Salalah",
  "tz": "Asia/Muscat",
  "country": "OM",
  "population": 163140
 },
 {
  "id": "3111108",
  "name": "Salamanca",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 155619
 },
 {
  "id": "6544491",
  "name": "Salamanca",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 147707
 },
 {
  "id": "3988214",
  "name": "Salamanca",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 138614
 },
 {
  "id": "1629131",
  "name": "Salatiga",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 172645
 },
 {
  "id": "499292",
  "name": "Salavat",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 159893
 },
 {
  "id": "2537763",
  "name": "Sale",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 903485
 },
 {
  "id": "1257629",
  "name": "Salem",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 778396
 },
 {
  "id": "5750162",
  "name": "Salem",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 154637
 },
 {
  "id": "3168673",
  "name": "Salerno",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 125797
 },
 {
  "id": "622428",
  "name": "Salihorsk",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 101614
 },
 {
  "id": "5391295",
  "name": "Salinas",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 150441
 },
 {
  "id": "5780993",
  "name": "Salt Lake City",
  "tz": "America/Denver",
  "country": "US",
  "population": 186440
 },
 {
  "id": "3838233",
  "name": "Salta",
  "tz": "America/Argentina/Salta",
  "country": "AR",
  "population": 512686
 },
 {
  "id": "3988086",
  "name": "Saltillo",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 621250
 },
 {
  "id": "3450554",
  "name": "Salvador",
  "tz": "America/Bahia",
  "country": "BR",
  "population": 2711840
 },
 {
  "id": "3493240",
  "name": "Salvaleon de Higuey",
  "tz": "America/Santo_Domingo",
  "country": "DO",
  "population": 123787
 },
 {
  "id": "2766824",
  "name": "Salzburg",
  "tz": "Europe/Vienna",
  "country": "AT",
  "population": 150269
 },
 {
  "id": "499099",
  "name": "Samara",
  "tz": "Europe/Samara",
  "country": "RU",
  "population": 1134730
 },
 {
  "id": "1629001",
  "name": "Samarinda",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 355160
 },
 {
  "id": "1216265",
  "name": "Samarqand",
  "tz": "Asia/Samarkand",
  "country": "UZ",
  "population": 319366
 },
 {
  "id": "91597",
  "name": "Samarra'",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 158508
 },
 {
  "id": "1257542",
  "name": "Sambalpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 162887
 },
 {
  "id": "1257540",
  "name": "Sambhal",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 196109
 },
 {
  "id": "740264",
  "name": "Samsun",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 394050
 },
 {
  "id": "1606590",
  "name": "Samut Prakan",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 388920
 },
 {
  "id": "4726206",
  "name": "San Antonio",
  "tz": "America/Chicago",
  "country": "US",
  "population": 1327407
 },
 {
  "id": "5391710",
  "name": "San Bernardino",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 209924
 },
 {
  "id": "3872348",
  "name": "San Bernardo",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 249858
 },
 {
  "id": "6544488",
  "name": "San Blas",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 157367
 },
 {
  "id": "3511540",
  "name": "San Cristobal",
  "tz": "America/Santo_Domingo",
  "country": "DO",
  "population": 154040
 },
 {
  "id": "3628473",
  "name": "San Cristobal",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 246583
 },
 {
  "id": "3519537",
  "name": "San Cristobal de Las Casas",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 128996
 },
 {
  "id": "5391811",
  "name": "San Diego",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 1307402
 },
 {
  "id": "1690039",
  "name": "San Fernando",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 251248
 },
 {
  "id": "3837702",
  "name": "San Fernando del Valle de Catamarca",
  "tz": "America/Argentina/Catamarca",
  "country": "AR",
  "population": 188812
 },
 {
  "id": "5391959",
  "name": "San Francisco",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 805235
 },
 {
  "id": "3493146",
  "name": "San Francisco de Macoris",
  "tz": "America/Santo_Domingo",
  "country": "DO",
  "population": 124763
 },
 {
  "id": "3621849",
  "name": "San Jose",
  "tz": "America/Costa_Rica",
  "country": "CR",
  "population": 335007
 },
 {
  "id": "1689510",
  "name": "San Jose",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 118807
 },
 {
  "id": "5392171",
  "name": "San Jose",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 945942
 },
 {
  "id": "1689395",
  "name": "San Jose del Monte",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 357828
 },
 {
  "id": "3837213",
  "name": "San Juan",
  "tz": "America/Argentina/San_Juan",
  "country": "AR",
  "population": 447048
 },
 {
  "id": "1689286",
  "name": "San Juan",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 121430
 },
 {
  "id": "4568127",
  "name": "San Juan",
  "tz": "America/Puerto_Rico",
  "country": "PR",
  "population": 418140
 },
 {
  "id": "3518692",
  "name": "San Juan del Rio",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 118173
 },
 {
  "id": "3589885",
  "name": "San Juan Sacatepequez",
  "tz": "America/Guatemala",
  "country": "GT",
  "population": 136886
 },
 {
  "id": "3437056",
  "name": "San Lorenzo",
  "tz": "America/Asuncion",
  "country": "PY",
  "population": 227876
 },
 {
  "id": "3837056",
  "name": "San Luis",
  "tz": "America/Argentina/San_Luis",
  "country": "AR",
  "population": 183982
 },
 {
  "id": "3985606",
  "name": "San Luis Potosi",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 677704
 },
 {
  "id": "3985604",
  "name": "San Luis Rio Colorado",
  "tz": "America/Hermosillo",
  "country": "MX",
  "population": 139254
 },
 {
  "id": "1689056",
  "name": "San Mateo",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 134327
 },
 {
  "id": "3583446",
  "name": "San Miguel",
  "tz": "America/El_Salvador",
  "country": "SV",
  "population": 161880
 },
 {
  "id": "3836873",
  "name": "San Miguel de Tucuman",
  "tz": "America/Argentina/Tucuman",
  "country": "AR",
  "population": 781023
 },
 {
  "id": "3538803",
  "name": "San Miguel del Padron",
  "tz": "America/Havana",
  "country": "CU",
  "population": 159273
 },
 {
  "id": "3514519",
  "name": "San Miguel Xico",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 365777
 },
 {
  "id": "3701329",
  "name": "San Miguelito",
  "tz": "America/Panama",
  "country": "PA",
  "population": 321501
 },
 {
  "id": "3836846",
  "name": "San Nicolas de los Arroyos",
  "tz": "America/Argentina/Buenos_Aires",
  "country": "AR",
  "population": 127742
 },
 {
  "id": "3985241",
  "name": "San Nicolas de los Garza",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 443273
 },
 {
  "id": "1688830",
  "name": "San Pablo",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 207577
 },
 {
  "id": "3518135",
  "name": "San Pablo de las Salinas",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 173557
 },
 {
  "id": "1688749",
  "name": "San Pedro",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 270216
 },
 {
  "id": "3493032",
  "name": "San Pedro de Macoris",
  "tz": "America/Santo_Domingo",
  "country": "DO",
  "population": 217899
 },
 {
  "id": "8617692",
  "name": "San Pedro Garza Garcia",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 122009
 },
 {
  "id": "3601782",
  "name": "San Pedro Sula",
  "tz": "America/Tegucigalpa",
  "country": "HN",
  "population": 489466
 },
 {
  "id": "3836669",
  "name": "San Rafael",
  "tz": "America/Argentina/Mendoza",
  "country": "AR",
  "population": 109163
 },
 {
  "id": "3583361",
  "name": "San Salvador",
  "tz": "America/El_Salvador",
  "country": "SV",
  "population": 525990
 },
 {
  "id": "3836564",
  "name": "San Salvador de Jujuy",
  "tz": "America/Argentina/Jujuy",
  "country": "AR",
  "population": 305891
 },
 {
  "id": "3110044",
  "name": "San Sebastian",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 185357
 },
 {
  "id": "2282006",
  "name": "San-Pedro",
  "tz": "Africa/Abidjan",
  "country": "CI",
  "population": 196751
 },
 {
  "id": "71137",
  "name": "Sanaa",
  "tz": "Asia/Aden",
  "country": "YE",
  "population": 1937451
 },
 {
  "id": "117574",
  "name": "Sanandaj",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 349176
 },
 {
  "id": "7628420",
  "name": "Sancaktepe",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 241000
 },
 {
  "id": "3540667",
  "name": "Sancti Spiritus",
  "tz": "America/Havana",
  "country": "CU",
  "population": 127069
 },
 {
  "id": "1853008",
  "name": "Sanda",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 132858
 },
 {
  "id": "1734052",
  "name": "Sandakan",
  "tz": "Asia/Kuching",
  "country": "MY",
  "population": 392288
 },
 {
  "id": "1257416",
  "name": "Sangli",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 601214
 },
 {
  "id": "298333",
  "name": "Sanliurfa",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 449549
 },
 {
  "id": "1796663",
  "name": "Sanming",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 209444
 },
 {
  "id": "1789273",
  "name": "Sanshui",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 153714
 },
 {
  "id": "3110876",
  "name": "Sant Andreu de Palomar",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 142598
 },
 {
  "id": "6544105",
  "name": "Sant Marti",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 221029
 },
 {
  "id": "3583334",
  "name": "Santa Ana",
  "tz": "America/El_Salvador",
  "country": "SV",
  "population": 176661
 },
 {
  "id": "5392900",
  "name": "Santa Ana",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 324528
 },
 {
  "id": "3450404",
  "name": "Santa Barbara d'Oeste",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 188000
 },
 {
  "id": "3984583",
  "name": "Santa Catarina",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 254472
 },
 {
  "id": "3537906",
  "name": "Santa Clara",
  "tz": "America/Havana",
  "country": "CU",
  "population": 250512
 },
 {
  "id": "5393015",
  "name": "Santa Clara",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 116468
 },
 {
  "id": "5393049",
  "name": "Santa Clarita",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 176320
 },
 {
  "id": "3109981",
  "name": "Santa Coloma de Gramenet",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 119717
 },
 {
  "id": "1688253",
  "name": "Santa Cruz",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 108145
 },
 {
  "id": "3904906",
  "name": "Santa Cruz de la Sierra",
  "tz": "America/La_Paz",
  "country": "BO",
  "population": 1364389
 },
 {
  "id": "2511174",
  "name": "Santa Cruz de Tenerife",
  "tz": "Atlantic/Canary",
  "country": "ES",
  "population": 222417
 },
 {
  "id": "3450269",
  "name": "Santa Cruz do Sul",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 106113
 },
 {
  "id": "3836277",
  "name": "Santa Fe de la Vera Cruz",
  "tz": "America/Argentina/Cordoba",
  "country": "AR",
  "population": 489505
 },
 {
  "id": "3450144",
  "name": "Santa Luzia",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 243503
 },
 {
  "id": "3450083",
  "name": "Santa Maria",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 249219
 },
 {
  "id": "3517270",
  "name": "Santa Maria Chimalhuacan",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 525389
 },
 {
  "id": "3668605",
  "name": "Santa Marta",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 431781
 },
 {
  "id": "3389321",
  "name": "Santa Rita",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 119893
 },
 {
  "id": "3835994",
  "name": "Santa Rosa",
  "tz": "America/Argentina/Salta",
  "country": "AR",
  "population": 111424
 },
 {
  "id": "1687894",
  "name": "Santa Rosa",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 216650
 },
 {
  "id": "5393287",
  "name": "Santa Rosa",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 167815
 },
 {
  "id": "3584257",
  "name": "Santa Tecla",
  "tz": "America/El_Salvador",
  "country": "SV",
  "population": 124694
 },
 {
  "id": "3627047",
  "name": "Santa Teresa",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 278890
 },
 {
  "id": "3109718",
  "name": "Santander",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 182700
 },
 {
  "id": "3389353",
  "name": "Santarem",
  "tz": "America/Santarem",
  "country": "BR",
  "population": 189047
 },
 {
  "id": "3871336",
  "name": "Santiago",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 4837295
 },
 {
  "id": "1687801",
  "name": "Santiago",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 108414
 },
 {
  "id": "3536729",
  "name": "Santiago de Cuba",
  "tz": "America/Havana",
  "country": "CU",
  "population": 555865
 },
 {
  "id": "3492914",
  "name": "Santiago de los Caballeros",
  "tz": "America/Santo_Domingo",
  "country": "DO",
  "population": 1200000
 },
 {
  "id": "3991164",
  "name": "Santiago de Queretaro",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 626495
 },
 {
  "id": "3835869",
  "name": "Santiago del Estero",
  "tz": "America/Argentina/Cordoba",
  "country": "AR",
  "population": 354692
 },
 {
  "id": "3449701",
  "name": "Santo Andre",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 662373
 },
 {
  "id": "3492908",
  "name": "Santo Domingo",
  "tz": "America/Santo_Domingo",
  "country": "DO",
  "population": 2201941
 },
 {
  "id": "3651297",
  "name": "Santo Domingo de los Colorados",
  "tz": "America/Guayaquil",
  "country": "EC",
  "population": 200421
 },
 {
  "id": "7874116",
  "name": "Santo Domingo Oeste",
  "tz": "America/Santo_Domingo",
  "country": "DO",
  "population": 701269
 },
 {
  "id": "1687687",
  "name": "Santol",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 298976
 },
 {
  "id": "3449433",
  "name": "Santos",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 411403
 },
 {
  "id": "6544104",
  "name": "Sants-Montjuic",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 177636
 },
 {
  "id": "1796556",
  "name": "Sanya",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 144753
 },
 {
  "id": "3449344",
  "name": "Sao Bernardo do Campo",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 743372
 },
 {
  "id": "3449324",
  "name": "Sao Caetano do Sul",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 136453
 },
 {
  "id": "3449319",
  "name": "Sao Carlos",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 205035
 },
 {
  "id": "3448877",
  "name": "Sao Joao de Meriti",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 454849
 },
 {
  "id": "3448742",
  "name": "Sao Jose",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 200000
 },
 {
  "id": "3448639",
  "name": "Sao Jose do Rio Preto",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 374699
 },
 {
  "id": "3448636",
  "name": "Sao Jose dos Campos",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 613764
 },
 {
  "id": "3448632",
  "name": "Sao Jose dos Pinhais",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 124224
 },
 {
  "id": "3448622",
  "name": "Sao Leopoldo",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 209229
 },
 {
  "id": "3388368",
  "name": "Sao Luis",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 917237
 },
 {
  "id": "3448439",
  "name": "Sao Paulo",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 10021295
 },
 {
  "id": "3448136",
  "name": "Sao Vicente",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 324457
 },
 {
  "id": "2323675",
  "name": "Sapele",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 161686
 },
 {
  "id": "2128295",
  "name": "Sapporo",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 1883027
 },
 {
  "id": "3448031",
  "name": "Sapucaia",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 130937
 },
 {
  "id": "117392",
  "name": "Saqqez",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 151237
 },
 {
  "id": "3191281",
  "name": "Sarajevo",
  "tz": "Europe/Sarajevo",
  "country": "BA",
  "population": 696731
 },
 {
  "id": "498698",
  "name": "Saransk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 303394
 },
 {
  "id": "498677",
  "name": "Saratov",
  "tz": "Europe/Volgograd",
  "country": "RU",
  "population": 863725
 },
 {
  "id": "1166000",
  "name": "Sargodha",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 542603
 },
 {
  "id": "116996",
  "name": "Sari",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 255396
 },
 {
  "id": "1870883",
  "name": "Sariwon",
  "tz": "Asia/Pyongyang",
  "country": "KP",
  "population": 310100
 },
 {
  "id": "6544102",
  "name": "Sarria-Sant Gervasi",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 140000
 },
 {
  "id": "1852899",
  "name": "Sasebo",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 237444
 },
 {
  "id": "6141256",
  "name": "Saskatoon",
  "tz": "America/Regina",
  "country": "CA",
  "population": 198958
 },
 {
  "id": "1257055",
  "name": "Satara",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 112793
 },
 {
  "id": "1185111",
  "name": "Satkhira",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 128918
 },
 {
  "id": "1257022",
  "name": "Satna",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 257778
 },
 {
  "id": "667873",
  "name": "Satu Mare",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 112490
 },
 {
  "id": "4221552",
  "name": "Savannah",
  "tz": "America/New_York",
  "country": "US",
  "population": 136286
 },
 {
  "id": "116667",
  "name": "Saveh",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 175533
 },
 {
  "id": "1256949",
  "name": "Sawai Madhopur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 108612
 },
 {
  "id": "1628453",
  "name": "Sawangan",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 114069
 },
 {
  "id": "1907146",
  "name": "Sayama",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 160843
 },
 {
  "id": "1529376",
  "name": "Sayibage",
  "tz": "Asia/Urumqi",
  "country": "CN",
  "population": 179465
 },
 {
  "id": "2836788",
  "name": "Schoneberg Bezirk",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 115976
 },
 {
  "id": "5313457",
  "name": "Scottsdale",
  "tz": "America/Phoenix",
  "country": "US",
  "population": 217385
 },
 {
  "id": "5809844",
  "name": "Seattle",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 608660
 },
 {
  "id": "1256922",
  "name": "Secunderabad",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 204182
 },
 {
  "id": "2295458",
  "name": "Sekondi-Takoradi",
  "tz": "Africa/Accra",
  "country": "GH",
  "population": 138872
 },
 {
  "id": "1627896",
  "name": "Semarang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 1288084
 },
 {
  "id": "1519422",
  "name": "Semey",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 292780
 },
 {
  "id": "116402",
  "name": "Semnan",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 124826
 },
 {
  "id": "8555918",
  "name": "Sendai",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 1063103
 },
 {
  "id": "2111149",
  "name": "Sendai-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 1063103
 },
 {
  "id": "1897000",
  "name": "Seongnam-si",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 1031935
 },
 {
  "id": "1256826",
  "name": "Seoni",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 101379
 },
 {
  "id": "1835848",
  "name": "Seoul",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 10349312
 },
 {
  "id": "1627610",
  "name": "Sepatan",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 118439
 },
 {
  "id": "1627549",
  "name": "Serang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 164767
 },
 {
  "id": "1734810",
  "name": "Seremban",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 372917
 },
 {
  "id": "496638",
  "name": "Sergiyev Posad",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 109252
 },
 {
  "id": "7302856",
  "name": "Serilingampalle",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 150525
 },
 {
  "id": "496527",
  "name": "Serpukhov",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 128158
 },
 {
  "id": "3447779",
  "name": "Serra",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 394153
 },
 {
  "id": "3447624",
  "name": "Sete Lagoas",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 201334
 },
 {
  "id": "2481700",
  "name": "Setif",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 288461
 },
 {
  "id": "1852663",
  "name": "Seto",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 134246
 },
 {
  "id": "2537406",
  "name": "Settat",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 119082
 },
 {
  "id": "2262963",
  "name": "Setubal",
  "tz": "Europe/Lisbon",
  "country": "PT",
  "population": 117110
 },
 {
  "id": "694423",
  "name": "Sevastopol",
  "tz": "Europe/Simferopol",
  "country": "UA",
  "population": 379200
 },
 {
  "id": "496348",
  "name": "Severnyy",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 200000
 },
 {
  "id": "496285",
  "name": "Severodvinsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 194292
 },
 {
  "id": "1538637",
  "name": "Seversk",
  "tz": "Asia/Novosibirsk",
  "country": "RU",
  "population": 109844
 },
 {
  "id": "2510911",
  "name": "Sevilla",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 703206
 },
 {
  "id": "2467454",
  "name": "Sfax",
  "tz": "Africa/Tunis",
  "country": "TN",
  "population": 277278
 },
 {
  "id": "2323411",
  "name": "Shagamu",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 214558
 },
 {
  "id": "1732903",
  "name": "Shah Alam",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 481654
 },
 {
  "id": "1796421",
  "name": "Shahecheng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 125132
 },
 {
  "id": "1256728",
  "name": "Shahjahanpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 320434
 },
 {
  "id": "1165569",
  "name": "Shahkot",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 200000
 },
 {
  "id": "115770",
  "name": "Shahr-e Kord",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 129153
 },
 {
  "id": "417594",
  "name": "Shahreza",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 100790
 },
 {
  "id": "135423",
  "name": "Shahrud",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 131889
 },
 {
  "id": "1185121",
  "name": "Shahzadpur",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 102420
 },
 {
  "id": "496015",
  "name": "Shakhty",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 221312
 },
 {
  "id": "1796236",
  "name": "Shanghai",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 14608512
 },
 {
  "id": "1783934",
  "name": "Shangqiu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 181218
 },
 {
  "id": "1787858",
  "name": "Shangrao",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 318769
 },
 {
  "id": "7910932",
  "name": "Shangri-La",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 130000
 },
 {
  "id": "1817720",
  "name": "Shangyu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 770000
 },
 {
  "id": "1256639",
  "name": "Shantipur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 149983
 },
 {
  "id": "1795940",
  "name": "Shantou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1333973
 },
 {
  "id": "1795928",
  "name": "Shanwei",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 165699
 },
 {
  "id": "1795874",
  "name": "Shaoguan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 628749
 },
 {
  "id": "1795857",
  "name": "Shaowu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 112585
 },
 {
  "id": "1795855",
  "name": "Shaoxing",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 421283
 },
 {
  "id": "1795842",
  "name": "Shaping",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 107589
 },
 {
  "id": "292672",
  "name": "Sharjah",
  "tz": "Asia/Dubai",
  "country": "AE",
  "population": 543733
 },
 {
  "id": "1795816",
  "name": "Shashi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 498780
 },
 {
  "id": "495344",
  "name": "Shchelkovo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 113000
 },
 {
  "id": "495136",
  "name": "Shchukino",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 102000
 },
 {
  "id": "2638077",
  "name": "Sheffield",
  "tz": "Europe/London",
  "country": "GB",
  "population": 447047
 },
 {
  "id": "1165221",
  "name": "Sheikhupura",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 361303
 },
 {
  "id": "2034937",
  "name": "Shenyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 3512192
 },
 {
  "id": "1795565",
  "name": "Shenzhen",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 3000000
 },
 {
  "id": "6146143",
  "name": "Sherbrooke",
  "tz": "America/Montreal",
  "country": "CA",
  "population": 129447
 },
 {
  "id": "1337248",
  "name": "Sherpur",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 107419
 },
 {
  "id": "349158",
  "name": "Shibin al Kawm",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 186345
 },
 {
  "id": "1529195",
  "name": "Shihezi",
  "tz": "Asia/Urumqi",
  "country": "CN",
  "population": 572772
 },
 {
  "id": "1795270",
  "name": "Shijiazhuang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1992474
 },
 {
  "id": "1165108",
  "name": "Shikarpur",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 156901
 },
 {
  "id": "1256525",
  "name": "Shiliguri",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 515574
 },
 {
  "id": "1256523",
  "name": "Shillong",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 132842
 },
 {
  "id": "1795184",
  "name": "Shilong",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 109733
 },
 {
  "id": "1256237",
  "name": "Shimla",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 173503
 },
 {
  "id": "1852383",
  "name": "Shimminatocho",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 375339
 },
 {
  "id": "1256515",
  "name": "Shimoga",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 319550
 },
 {
  "id": "1852225",
  "name": "Shimonoseki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 245786
 },
 {
  "id": "1907301",
  "name": "Shimotoda",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 118731
 },
 {
  "id": "150006",
  "name": "Shinyanga",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 107362
 },
 {
  "id": "1795060",
  "name": "Shiqi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 342306
 },
 {
  "id": "1795055",
  "name": "Shiqiao",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 135308
 },
 {
  "id": "115019",
  "name": "Shiraz",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 1249942
 },
 {
  "id": "6943660",
  "name": "Shivaji Nagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1000000
 },
 {
  "id": "1256451",
  "name": "Shivpuri",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 164215
 },
 {
  "id": "1794903",
  "name": "Shiyan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 3460000
 },
 {
  "id": "1794904",
  "name": "Shiyan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 408055
 },
 {
  "id": "1794806",
  "name": "Shizuishan",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 136570
 },
 {
  "id": "1851717",
  "name": "Shizuoka-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 701561
 },
 {
  "id": "4341513",
  "name": "Shreveport",
  "tz": "America/Chicago",
  "country": "US",
  "population": 199311
 },
 {
  "id": "1256422",
  "name": "Shrirampur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 226317
 },
 {
  "id": "2034834",
  "name": "Shuangcheng",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 130710
 },
 {
  "id": "2034786",
  "name": "Shuangyashan",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 600000
 },
 {
  "id": "2034754",
  "name": "Shunyi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 117623
 },
 {
  "id": "1256409",
  "name": "Shyamnagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 441956
 },
 {
  "id": "1518980",
  "name": "Shymkent",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 414032
 },
 {
  "id": "1606250",
  "name": "Si Racha",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 178916
 },
 {
  "id": "1164909",
  "name": "Sialkot",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 477396
 },
 {
  "id": "594739",
  "name": "Siauliai",
  "tz": "Europe/Vilnius",
  "country": "LT",
  "population": 130587
 },
 {
  "id": "667268",
  "name": "Sibiu",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 151894
 },
 {
  "id": "1735902",
  "name": "Sibu",
  "tz": "Asia/Kuching",
  "country": "MY",
  "population": 198239
 },
 {
  "id": "2481007",
  "name": "Sidi Bel Abbes",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 191769
 },
 {
  "id": "1627253",
  "name": "Sidoarjo",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 139189
 },
 {
  "id": "268064",
  "name": "Sidon",
  "tz": "Asia/Beirut",
  "country": "LB",
  "population": 163554
 },
 {
  "id": "2832495",
  "name": "Siegen",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 107242
 },
 {
  "id": "1822214",
  "name": "Siem Reap",
  "tz": "Asia/Phnom_Penh",
  "country": "KH",
  "population": 139458
 },
 {
  "id": "1831142",
  "name": "Sihanoukville",
  "tz": "Asia/Phnom_Penh",
  "country": "KH",
  "population": 156691
 },
 {
  "id": "300822",
  "name": "Siirt",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 114034
 },
 {
  "id": "1256320",
  "name": "Sikar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 199932
 },
 {
  "id": "2451185",
  "name": "Sikasso",
  "tz": "Africa/Bamako",
  "country": "ML",
  "population": 144786
 },
 {
  "id": "1686547",
  "name": "Silang",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 119475
 },
 {
  "id": "1256287",
  "name": "Silchar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 152393
 },
 {
  "id": "693805",
  "name": "Simferopol",
  "tz": "Europe/Simferopol",
  "country": "UA",
  "population": 358108
 },
 {
  "id": "5396003",
  "name": "Simi Valley",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 124237
 },
 {
  "id": "6318694",
  "name": "Simoes Filho",
  "tz": "America/Bahia",
  "country": "BR",
  "population": 116662
 },
 {
  "id": "90708",
  "name": "Sinah",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 128776
 },
 {
  "id": "3667983",
  "name": "Sincelejo",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 261187
 },
 {
  "id": "1880252",
  "name": "Singapore",
  "tz": "Asia/Singapore",
  "country": "SG",
  "population": 3547809
 },
 {
  "id": "1626932",
  "name": "Singaraja",
  "tz": "Asia/Makassar",
  "country": "ID",
  "population": 133784
 },
 {
  "id": "1626916",
  "name": "Singkawang",
  "tz": "Asia/Pontianak",
  "country": "ID",
  "population": 101838
 },
 {
  "id": "7279754",
  "name": "Singrauli",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 185580
 },
 {
  "id": "367644",
  "name": "Sinnar",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 130122
 },
 {
  "id": "6318696",
  "name": "Sinop",
  "tz": "America/Cuiaba",
  "country": "BR",
  "population": 116013
 },
 {
  "id": "2040893",
  "name": "Sinuiju",
  "tz": "Asia/Pyongyang",
  "country": "KP",
  "population": 288112
 },
 {
  "id": "5231851",
  "name": "Sioux Falls",
  "tz": "America/Chicago",
  "country": "US",
  "population": 153888
 },
 {
  "id": "2034714",
  "name": "Siping",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 555609
 },
 {
  "id": "1185115",
  "name": "Sirajganj",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 127481
 },
 {
  "id": "114259",
  "name": "Sirjan",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 207645
 },
 {
  "id": "1256052",
  "name": "Sirsa",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 181639
 },
 {
  "id": "2210554",
  "name": "Sirte",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 128123
 },
 {
  "id": "739549",
  "name": "Sisli",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 314684
 },
 {
  "id": "1255969",
  "name": "Sitapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 164435
 },
 {
  "id": "1295765",
  "name": "Sittwe",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 177743
 },
 {
  "id": "1626801",
  "name": "Situbondo",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 600000
 },
 {
  "id": "300619",
  "name": "Sivas",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 264022
 },
 {
  "id": "300614",
  "name": "Siverek",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 175341
 },
 {
  "id": "1255927",
  "name": "Siwan",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 119181
 },
 {
  "id": "2479536",
  "name": "Skikda",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 162702
 },
 {
  "id": "785842",
  "name": "Skopje",
  "tz": "Europe/Skopje",
  "country": "MK",
  "population": 474889
 },
 {
  "id": "1732745",
  "name": "Skudai",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 159733
 },
 {
  "id": "2637627",
  "name": "Slough",
  "tz": "Europe/London",
  "country": "GB",
  "population": 134072
 },
 {
  "id": "693468",
  "name": "Sloviansk",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 124800
 },
 {
  "id": "491687",
  "name": "Smolensk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 320991
 },
 {
  "id": "3667905",
  "name": "Soacha",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 313945
 },
 {
  "id": "3387296",
  "name": "Sobral",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 157996
 },
 {
  "id": "1567788",
  "name": "Soc Trang",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 114453
 },
 {
  "id": "491422",
  "name": "Sochi",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 327608
 },
 {
  "id": "727011",
  "name": "Sofia",
  "tz": "Europe/Sofia",
  "country": "BG",
  "population": 1152556
 },
 {
  "id": "3667873",
  "name": "Sogamoso",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 126551
 },
 {
  "id": "347796",
  "name": "Sohag",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 209419
 },
 {
  "id": "1851604",
  "name": "Soka",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 231445
 },
 {
  "id": "2364104",
  "name": "Sokode",
  "tz": "Africa/Lome",
  "country": "TG",
  "population": 117811
 },
 {
  "id": "2322911",
  "name": "Sokoto",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 563861
 },
 {
  "id": "1256436",
  "name": "Solapur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 997281
 },
 {
  "id": "3667849",
  "name": "Soledad",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 342556
 },
 {
  "id": "8858078",
  "name": "Soledad de Graciano Sanchez",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 255015
 },
 {
  "id": "3982912",
  "name": "Soledad Diez Gutierrez",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 194006
 },
 {
  "id": "491023",
  "name": "Solikamsk",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 100812
 },
 {
  "id": "2831580",
  "name": "Solingen",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 164359
 },
 {
  "id": "490971",
  "name": "Solntsevo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 120000
 },
 {
  "id": "877401",
  "name": "Songea",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 126449
 },
 {
  "id": "1794035",
  "name": "Songjiang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 130218
 },
 {
  "id": "1869446",
  "name": "Songnim",
  "tz": "Asia/Pyongyang",
  "country": "KP",
  "population": 152425
 },
 {
  "id": "1255744",
  "name": "Sonipat",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 250521
 },
 {
  "id": "1626560",
  "name": "Soreang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 150932
 },
 {
  "id": "3447399",
  "name": "Sorocaba",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 558862
 },
 {
  "id": "1626542",
  "name": "Sorong",
  "tz": "Asia/Jayapura",
  "country": "ID",
  "population": 125535
 },
 {
  "id": "3085128",
  "name": "Sosnowiec",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 227295
 },
 {
  "id": "2479215",
  "name": "Souk Ahras",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 156745
 },
 {
  "id": "2464915",
  "name": "Sousse",
  "tz": "Africa/Tunis",
  "country": "TN",
  "population": 164123
 },
 {
  "id": "4926563",
  "name": "South Bend",
  "tz": "America/Indiana/Indianapolis",
  "country": "US",
  "population": 101168
 },
 {
  "id": "4951305",
  "name": "South Boston",
  "tz": "America/New_York",
  "country": "US",
  "population": 571281
 },
 {
  "id": "8581443",
  "name": "South Tangerang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 1303569
 },
 {
  "id": "2637487",
  "name": "Southampton",
  "tz": "Europe/London",
  "country": "GB",
  "population": 246201
 },
 {
  "id": "2637433",
  "name": "Southend-on-Sea",
  "tz": "Europe/London",
  "country": "GB",
  "population": 163377
 },
 {
  "id": "953781",
  "name": "Soweto",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 1695047
 },
 {
  "id": "3583096",
  "name": "Soyapango",
  "tz": "America/El_Salvador",
  "country": "SV",
  "population": 329708
 },
 {
  "id": "1430991",
  "name": "Soyibug",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 104000
 },
 {
  "id": "3488465",
  "name": "Spanish Town",
  "tz": "America/Jamaica",
  "country": "JM",
  "population": 145018
 },
 {
  "id": "3190261",
  "name": "Split",
  "tz": "Europe/Zagreb",
  "country": "HR",
  "population": 176314
 },
 {
  "id": "5811696",
  "name": "Spokane",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 208916
 },
 {
  "id": "5512909",
  "name": "Spring Valley",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 178395
 },
 {
  "id": "4250542",
  "name": "Springfield",
  "tz": "America/Chicago",
  "country": "US",
  "population": 116250
 },
 {
  "id": "4409896",
  "name": "Springfield",
  "tz": "America/Chicago",
  "country": "US",
  "population": 159498
 },
 {
  "id": "4951788",
  "name": "Springfield",
  "tz": "America/New_York",
  "country": "US",
  "population": 153060
 },
 {
  "id": "952865",
  "name": "Springs",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 186394
 },
 {
  "id": "1238992",
  "name": "Sri Jayewardenepura Kotte",
  "tz": "Asia/Colombo",
  "country": "LK",
  "population": 115826
 },
 {
  "id": "1255647",
  "name": "Srikakulam",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 118299
 },
 {
  "id": "1255634",
  "name": "Srinagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 975857
 },
 {
  "id": "758470",
  "name": "Srodmiescie",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 134306
 },
 {
  "id": "2638785",
  "name": "St Helens",
  "tz": "Europe/London",
  "country": "GB",
  "population": 102555
 },
 {
  "id": "6155721",
  "name": "St. Catharines",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 131989
 },
 {
  "id": "4407066",
  "name": "St. Louis",
  "tz": "America/Chicago",
  "country": "US",
  "population": 319294
 },
 {
  "id": "4843564",
  "name": "Stamford",
  "tz": "America/New_York",
  "country": "US",
  "population": 122643
 },
 {
  "id": "726848",
  "name": "Stara Zagora",
  "tz": "Europe/Sofia",
  "country": "BG",
  "population": 143431
 },
 {
  "id": "487928",
  "name": "Staryy Oskol",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 226977
 },
 {
  "id": "5139568",
  "name": "Staten Island",
  "tz": "America/New_York",
  "country": "US",
  "population": 468730
 },
 {
  "id": "3137115",
  "name": "Stavanger",
  "tz": "Europe/Oslo",
  "country": "NO",
  "population": 121610
 },
 {
  "id": "487846",
  "name": "Stavropol'",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 363064
 },
 {
  "id": "5011148",
  "name": "Sterling Heights",
  "tz": "America/Detroit",
  "country": "US",
  "population": 129699
 },
 {
  "id": "487495",
  "name": "Sterlitamak",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 267231
 },
 {
  "id": "2673730",
  "name": "Stockholm",
  "tz": "Europe/Stockholm",
  "country": "SE",
  "population": 1253309
 },
 {
  "id": "2636882",
  "name": "Stockport",
  "tz": "Europe/London",
  "country": "GB",
  "population": 139052
 },
 {
  "id": "5399020",
  "name": "Stockton",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 291707
 },
 {
  "id": "2636841",
  "name": "Stoke-on-Trent",
  "tz": "Europe/London",
  "country": "GB",
  "population": 260419
 },
 {
  "id": "2973783",
  "name": "Strasbourg",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 274845
 },
 {
  "id": "487150",
  "name": "Strogino",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 152000
 },
 {
  "id": "2825297",
  "name": "Stuttgart",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 589793
 },
 {
  "id": "8504423",
  "name": "Subang Jaya",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 708296
 },
 {
  "id": "3189595",
  "name": "Subotica",
  "tz": "Europe/Belgrade",
  "country": "RS",
  "population": 100000
 },
 {
  "id": "665850",
  "name": "Suceava",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 105796
 },
 {
  "id": "3903987",
  "name": "Sucre",
  "tz": "America/La_Paz",
  "country": "BO",
  "population": 224838
 },
 {
  "id": "359796",
  "name": "Suez",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 488125
 },
 {
  "id": "2034655",
  "name": "Suihua",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 252245
 },
 {
  "id": "1793900",
  "name": "Suining",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 124924
 },
 {
  "id": "1851483",
  "name": "Suita",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 351630
 },
 {
  "id": "1793879",
  "name": "Suizhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 323945
 },
 {
  "id": "1255560",
  "name": "Sujangarh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 183808
 },
 {
  "id": "2034638",
  "name": "Sujiatun",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 148113
 },
 {
  "id": "1626381",
  "name": "Sukabumi",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 276414
 },
 {
  "id": "1164408",
  "name": "Sukkur",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 417767
 },
 {
  "id": "2322794",
  "name": "Suleja",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 162135
 },
 {
  "id": "3691674",
  "name": "Sullana",
  "tz": "America/Lima",
  "country": "PE",
  "population": 160789
 },
 {
  "id": "101760",
  "name": "Sultanah",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 946697
 },
 {
  "id": "7628419",
  "name": "Sultanbeyli",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 286622
 },
 {
  "id": "7628416",
  "name": "Sultangazi",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 436935
 },
 {
  "id": "1255491",
  "name": "Sultanpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 110368
 },
 {
  "id": "3447259",
  "name": "Sumare",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 227977
 },
 {
  "id": "1626100",
  "name": "Sumedang Utara",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 206746
 },
 {
  "id": "584923",
  "name": "Sumqayit",
  "tz": "Asia/Baku",
  "country": "AZ",
  "population": 265150
 },
 {
  "id": "692194",
  "name": "Sumy",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 294456
 },
 {
  "id": "1835648",
  "name": "Suncheon",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 230796
 },
 {
  "id": "2636531",
  "name": "Sunderland",
  "tz": "Europe/London",
  "country": "GB",
  "population": 177965
 },
 {
  "id": "1735498",
  "name": "Sungai Petani",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 228843
 },
 {
  "id": "1213614",
  "name": "Sunggal",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 157914
 },
 {
  "id": "5400075",
  "name": "Sunnyvale",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 140081
 },
 {
  "id": "5513343",
  "name": "Sunrise Manor",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 189372
 },
 {
  "id": "1625822",
  "name": "Surabaya",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 2374658
 },
 {
  "id": "1625812",
  "name": "Surakarta",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 555308
 },
 {
  "id": "1255364",
  "name": "Surat",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 2894504
 },
 {
  "id": "1150515",
  "name": "Surat Thani",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 127201
 },
 {
  "id": "3928245",
  "name": "Surco",
  "tz": "America/Lima",
  "country": "PE",
  "population": 251648
 },
 {
  "id": "1255349",
  "name": "Surendranagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 179628
 },
 {
  "id": "1490624",
  "name": "Surgut",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 300367
 },
 {
  "id": "1255344",
  "name": "Suriapet",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 111729
 },
 {
  "id": "5316428",
  "name": "Surprise",
  "tz": "America/Phoenix",
  "country": "US",
  "population": 117517
 },
 {
  "id": "6159905",
  "name": "Surrey",
  "tz": "America/Vancouver",
  "country": "CA",
  "population": 394976
 },
 {
  "id": "2636503",
  "name": "Sutton",
  "tz": "Europe/London",
  "country": "GB",
  "population": 187600
 },
 {
  "id": "2636486",
  "name": "Sutton Coldfield",
  "tz": "Europe/London",
  "country": "GB",
  "population": 107030
 },
 {
  "id": "1835553",
  "name": "Suwon-si",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 1242724
 },
 {
  "id": "3447212",
  "name": "Suzano",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 283314
 },
 {
  "id": "1793743",
  "name": "Suzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 205130
 },
 {
  "id": "1886760",
  "name": "Suzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1343091
 },
 {
  "id": "1851348",
  "name": "Suzuka",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 191477
 },
 {
  "id": "2636432",
  "name": "Swansea",
  "tz": "Europe/London",
  "country": "GB",
  "population": 170883
 },
 {
  "id": "2636389",
  "name": "Swindon",
  "tz": "Europe/London",
  "country": "GB",
  "population": 155432
 },
 {
  "id": "2147714",
  "name": "Sydney",
  "tz": "Australia/Sydney",
  "country": "AU",
  "population": 4627345
 },
 {
  "id": "6354908",
  "name": "Sydney",
  "tz": "America/Glace_Bay",
  "country": "CA",
  "population": 105968
 },
 {
  "id": "691999",
  "name": "Syeverodonets'k",
  "tz": "Europe/Zaporozhye",
  "country": "UA",
  "population": 130000
 },
 {
  "id": "485239",
  "name": "Syktyvkar",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 230139
 },
 {
  "id": "1185099",
  "name": "Sylhet",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 237000
 },
 {
  "id": "5140405",
  "name": "Syracuse",
  "tz": "America/New_York",
  "country": "US",
  "population": 145170
 },
 {
  "id": "484972",
  "name": "Syzran'",
  "tz": "Europe/Samara",
  "country": "RU",
  "population": 189338
 },
 {
  "id": "3083829",
  "name": "Szczecin",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 407811
 },
 {
  "id": "715429",
  "name": "Szeged",
  "tz": "Europe/Budapest",
  "country": "HU",
  "population": 164883
 },
 {
  "id": "3044774",
  "name": "Szekesfehervar",
  "tz": "Europe/Budapest",
  "country": "HU",
  "population": 101600
 },
 {
  "id": "107968",
  "name": "Ta'if",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 530848
 },
 {
  "id": "3447186",
  "name": "Taboao da Serra",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 214523
 },
 {
  "id": "149658",
  "name": "Tabora",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 145292
 },
 {
  "id": "113646",
  "name": "Tabriz",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 1424641
 },
 {
  "id": "101628",
  "name": "Tabuk",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 455450
 },
 {
  "id": "3928128",
  "name": "Tacna",
  "tz": "America/Lima",
  "country": "PE",
  "population": 280098
 },
 {
  "id": "5812944",
  "name": "Tacoma",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 198397
 },
 {
  "id": "1255264",
  "name": "Tadepallegudem",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 108167
 },
 {
  "id": "484907",
  "name": "Taganrog",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 279056
 },
 {
  "id": "484912",
  "name": "Taganskiy",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 116000
 },
 {
  "id": "2210394",
  "name": "Tagiura",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 100000
 },
 {
  "id": "1684308",
  "name": "Taguig",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 644473
 },
 {
  "id": "1684269",
  "name": "Tagum",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 233254
 },
 {
  "id": "1793724",
  "name": "Tai'an",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 5499000
 },
 {
  "id": "1668399",
  "name": "Taichung",
  "tz": "Asia/Taipei",
  "country": "TW",
  "population": 1040725
 },
 {
  "id": "2035261",
  "name": "Taihe",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 345033
 },
 {
  "id": "1668355",
  "name": "Tainan",
  "tz": "Asia/Taipei",
  "country": "TW",
  "population": 771235
 },
 {
  "id": "1668341",
  "name": "Taipei",
  "tz": "Asia/Taipei",
  "country": "TW",
  "population": 7871900
 },
 {
  "id": "1734586",
  "name": "Taiping",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 217647
 },
 {
  "id": "1793700",
  "name": "Taishan",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 145440
 },
 {
  "id": "6949678",
  "name": "Taitung City",
  "tz": "Asia/Taipei",
  "country": "TW",
  "population": 109584
 },
 {
  "id": "1793511",
  "name": "Taiyuan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 2722475
 },
 {
  "id": "1793505",
  "name": "Taizhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 612356
 },
 {
  "id": "1851193",
  "name": "Tajimi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 107818
 },
 {
  "id": "1851100",
  "name": "Takamatsu-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 334223
 },
 {
  "id": "1851032",
  "name": "Takaoka",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 170077
 },
 {
  "id": "1851012",
  "name": "Takarazuka",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 219789
 },
 {
  "id": "1851002",
  "name": "Takasaki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 240857
 },
 {
  "id": "1850910",
  "name": "Takatsuki",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 354468
 },
 {
  "id": "1821940",
  "name": "Takeo",
  "tz": "Asia/Phnom_Penh",
  "country": "KH",
  "population": 843931
 },
 {
  "id": "2294915",
  "name": "Takoradi",
  "tz": "Africa/Accra",
  "country": "GH",
  "population": 232919
 },
 {
  "id": "3870294",
  "name": "Talca",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 197479
 },
 {
  "id": "3870282",
  "name": "Talcahuano",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 252968
 },
 {
  "id": "1518542",
  "name": "Taldykorgan",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 116558
 },
 {
  "id": "1518543",
  "name": "Taldyqorghan",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 200000
 },
 {
  "id": "1683881",
  "name": "Talisay",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 133148
 },
 {
  "id": "347591",
  "name": "Talkha",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 157737
 },
 {
  "id": "4174715",
  "name": "Tallahassee",
  "tz": "America/New_York",
  "country": "US",
  "population": 181376
 },
 {
  "id": "588409",
  "name": "Tallinn",
  "tz": "Europe/Tallinn",
  "country": "EE",
  "population": 394024
 },
 {
  "id": "2294877",
  "name": "Tamale",
  "tz": "Africa/Accra",
  "country": "GH",
  "population": 360579
 },
 {
  "id": "484646",
  "name": "Tambov",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 290933
 },
 {
  "id": "4174757",
  "name": "Tampa",
  "tz": "America/New_York",
  "country": "US",
  "population": 335709
 },
 {
  "id": "634963",
  "name": "Tampere",
  "tz": "Europe/Helsinki",
  "country": "FI",
  "population": 202687
 },
 {
  "id": "3516355",
  "name": "Tampico",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 309003
 },
 {
  "id": "3824166",
  "name": "Tampico",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 297284
 },
 {
  "id": "347497",
  "name": "Tanda",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 404901
 },
 {
  "id": "3427833",
  "name": "Tandil",
  "tz": "America/Argentina/Buenos_Aires",
  "country": "AR",
  "population": 104325
 },
 {
  "id": "1163967",
  "name": "Tando Adam",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 125598
 },
 {
  "id": "1163965",
  "name": "Tando Allahyar",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 127202
 },
 {
  "id": "149606",
  "name": "Tanga",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 224876
 },
 {
  "id": "1336144",
  "name": "Tangail",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 180144
 },
 {
  "id": "1625084",
  "name": "Tangerang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 1372124
 },
 {
  "id": "1793424",
  "name": "Tanggu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 535298
 },
 {
  "id": "2530335",
  "name": "Tangier",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 688356
 },
 {
  "id": "1793346",
  "name": "Tangshan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1596949
 },
 {
  "id": "1213547",
  "name": "Tanjungbalai",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 142506
 },
 {
  "id": "1624863",
  "name": "Tanjungpinang",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 192493
 },
 {
  "id": "3516271",
  "name": "Tantoyuca",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 103610
 },
 {
  "id": "1683013",
  "name": "Tanza",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 105510
 },
 {
  "id": "6696918",
  "name": "Taoyuan City",
  "tz": "Asia/Taipei",
  "country": "TW",
  "population": 402014
 },
 {
  "id": "3516266",
  "name": "Tapachula",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 197961
 },
 {
  "id": "3165926",
  "name": "Taranto",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 181082
 },
 {
  "id": "1516905",
  "name": "Taraz",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 358153
 },
 {
  "id": "757065",
  "name": "Targowek",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 124316
 },
 {
  "id": "665004",
  "name": "Targu-Mures",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 146863
 },
 {
  "id": "2210221",
  "name": "Tarhuna",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 210697
 },
 {
  "id": "3903320",
  "name": "Tarija",
  "tz": "America/La_Paz",
  "country": "BO",
  "population": 159269
 },
 {
  "id": "1682812",
  "name": "Tarlac City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 183930
 },
 {
  "id": "757026",
  "name": "Tarnow",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 117799
 },
 {
  "id": "3108288",
  "name": "Tarragona",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 140323
 },
 {
  "id": "299817",
  "name": "Tarsus",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 256482
 },
 {
  "id": "588335",
  "name": "Tartu",
  "tz": "Europe/Tallinn",
  "country": "EE",
  "population": 101092
 },
 {
  "id": "1735093",
  "name": "Tasek Glugor",
  "tz": "Asia/Kuala_Lumpur",
  "country": "MY",
  "population": 135786
 },
 {
  "id": "1512569",
  "name": "Tashkent",
  "tz": "Asia/Tashkent",
  "country": "UZ",
  "population": 1978028
 },
 {
  "id": "1624647",
  "name": "Tasikmalaya",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 271143
 },
 {
  "id": "3446682",
  "name": "Taubate",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 251641
 },
 {
  "id": "1293960",
  "name": "Taunggyi",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 160115
 },
 {
  "id": "1290596",
  "name": "Taungoo",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 106945
 },
 {
  "id": "2208032",
  "name": "Tauranga",
  "tz": "Pacific/Auckland",
  "country": "NZ",
  "population": 110338
 },
 {
  "id": "1734199",
  "name": "Tawau",
  "tz": "Asia/Kuching",
  "country": "MY",
  "population": 306462
 },
 {
  "id": "1682598",
  "name": "Taytay",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 231460
 },
 {
  "id": "2529317",
  "name": "Taza",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 141890
 },
 {
  "id": "70225",
  "name": "Ta`izz",
  "tz": "Asia/Aden",
  "country": "YE",
  "population": 615222
 },
 {
  "id": "611717",
  "name": "Tbilisi",
  "tz": "Asia/Tbilisi",
  "country": "GE",
  "population": 1049498
 },
 {
  "id": "2477461",
  "name": "Tebessa",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 634332
 },
 {
  "id": "1213500",
  "name": "Tebingtinggi",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 117530
 },
 {
  "id": "1624494",
  "name": "Tegal",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 237084
 },
 {
  "id": "3600949",
  "name": "Tegucigalpa",
  "tz": "America/Tegucigalpa",
  "country": "HN",
  "population": 850848
 },
 {
  "id": "112931",
  "name": "Tehran",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 7153309
 },
 {
  "id": "3516109",
  "name": "Tehuacan",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 241429
 },
 {
  "id": "738927",
  "name": "Tekirdag",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 122287
 },
 {
  "id": "483826",
  "name": "Tekstil'shchiki",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 100000
 },
 {
  "id": "293397",
  "name": "Tel Aviv",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 250000
 },
 {
  "id": "2510542",
  "name": "Telde",
  "tz": "Atlantic/Canary",
  "country": "ES",
  "population": 100015
 },
 {
  "id": "3345439",
  "name": "Telford",
  "tz": "Europe/London",
  "country": "GB",
  "population": 138241
 },
 {
  "id": "1990589",
  "name": "Teluknaga",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 128275
 },
 {
  "id": "2294700",
  "name": "Tema",
  "tz": "Africa/Accra",
  "country": "GH",
  "population": 155782
 },
 {
  "id": "3516053",
  "name": "Temapache",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 101558
 },
 {
  "id": "949880",
  "name": "Tembisa",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 511655
 },
 {
  "id": "5401395",
  "name": "Temecula",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 100097
 },
 {
  "id": "1518262",
  "name": "Temirtau",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 170600
 },
 {
  "id": "5317058",
  "name": "Tempe",
  "tz": "America/Phoenix",
  "country": "US",
  "population": 161719
 },
 {
  "id": "5317071",
  "name": "Tempe Junction",
  "tz": "America/Phoenix",
  "country": "US",
  "population": 158368
 },
 {
  "id": "3870011",
  "name": "Temuco",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 238129
 },
 {
  "id": "1793036",
  "name": "Tengzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 105456
 },
 {
  "id": "1254745",
  "name": "Teni",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1034724
 },
 {
  "id": "3446621",
  "name": "Teofilo Otoni",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 101170
 },
 {
  "id": "3981941",
  "name": "Tepic",
  "tz": "America/Mazatlan",
  "country": "MX",
  "population": 280592
 },
 {
  "id": "3386496",
  "name": "Teresina",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 744512
 },
 {
  "id": "3446606",
  "name": "Teresopolis",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 123979
 },
 {
  "id": "1624041",
  "name": "Ternate",
  "tz": "Asia/Jayapura",
  "country": "ID",
  "population": 101731
 },
 {
  "id": "691650",
  "name": "Ternopil'",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 235676
 },
 {
  "id": "3108286",
  "name": "Terrassa",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 210941
 },
 {
  "id": "2294665",
  "name": "Teshi Old Town",
  "tz": "Africa/Accra",
  "country": "GH",
  "population": 144013
 },
 {
  "id": "1026014",
  "name": "Tete",
  "tz": "Africa/Maputo",
  "country": "MZ",
  "population": 129316
 },
 {
  "id": "2528910",
  "name": "Tetouan",
  "tz": "Africa/Casablanca",
  "country": "MA",
  "population": 326261
 },
 {
  "id": "3108118",
  "name": "Tetuan de las Victorias",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 155000
 },
 {
  "id": "3515715",
  "name": "Texcoco de Mora",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 115378
 },
 {
  "id": "1254661",
  "name": "Thane",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1261517
 },
 {
  "id": "1254657",
  "name": "Thanesar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 138279
 },
 {
  "id": "1566166",
  "name": "Thanh Hoa",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 112473
 },
 {
  "id": "1591474",
  "name": "Thanh pho Bac Lieu",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 107911
 },
 {
  "id": "1580410",
  "name": "Thanh Pho Ha Long",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 148066
 },
 {
  "id": "1580830",
  "name": "Thanh Pho Hoa Binh",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 105260
 },
 {
  "id": "1573517",
  "name": "Thanh Pho Nam Dinh",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 193499
 },
 {
  "id": "1566319",
  "name": "Thanh Pho Thai Nguyen",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 133877
 },
 {
  "id": "1254649",
  "name": "Thanjavur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 219571
 },
 {
  "id": "1292288",
  "name": "Thaton",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 123727
 },
 {
  "id": "2747373",
  "name": "The Hague",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 474292
 },
 {
  "id": "734077",
  "name": "Thessaloniki",
  "tz": "Europe/Athens",
  "country": "GR",
  "population": 354290
 },
 {
  "id": "2244799",
  "name": "Thies Nones",
  "tz": "Africa/Dakar",
  "country": "SN",
  "population": 252320
 },
 {
  "id": "179330",
  "name": "Thika",
  "tz": "Africa/Nairobi",
  "country": "KE",
  "population": 200000
 },
 {
  "id": "1254163",
  "name": "Thiruvananthapuram",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 784153
 },
 {
  "id": "5441492",
  "name": "Thornton",
  "tz": "America/Denver",
  "country": "US",
  "population": 118772
 },
 {
  "id": "5402405",
  "name": "Thousand Oaks",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 126683
 },
 {
  "id": "1791536",
  "name": "Tianfu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 115370
 },
 {
  "id": "1792947",
  "name": "Tianjin",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 3766207
 },
 {
  "id": "1792892",
  "name": "Tianshui",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 3500000
 },
 {
  "id": "2476897",
  "name": "Tiaret",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 178915
 },
 {
  "id": "2244616",
  "name": "Tiebo",
  "tz": "Africa/Dakar",
  "country": "SN",
  "population": 100289
 },
 {
  "id": "2034440",
  "name": "Tieli",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 109636
 },
 {
  "id": "2034439",
  "name": "Tieling",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 333907
 },
 {
  "id": "3981609",
  "name": "Tijuana",
  "tz": "America/Tijuana",
  "country": "MX",
  "population": 1376457
 },
 {
  "id": "2746301",
  "name": "Tilburg",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 199613
 },
 {
  "id": "665087",
  "name": "Timisoara",
  "tz": "Europe/Bucharest",
  "country": "RO",
  "population": 315053
 },
 {
  "id": "3386361",
  "name": "Timon",
  "tz": "America/Fortaleza",
  "country": "BR",
  "population": 124427
 },
 {
  "id": "3616035",
  "name": "Tipitapa",
  "tz": "America/Managua",
  "country": "NI",
  "population": 127153
 },
 {
  "id": "3183875",
  "name": "Tirana",
  "tz": "Europe/Tirane",
  "country": "AL",
  "population": 374801
 },
 {
  "id": "617239",
  "name": "Tiraspol",
  "tz": "Europe/Chisinau",
  "country": "MD",
  "population": 157000
 },
 {
  "id": "1215957",
  "name": "Tirmiz",
  "tz": "Asia/Samarkand",
  "country": "UZ",
  "population": 140385
 },
 {
  "id": "1254388",
  "name": "Tiruchirappalli",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 775484
 },
 {
  "id": "1254361",
  "name": "Tirunelveli",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 435844
 },
 {
  "id": "1254360",
  "name": "Tirupati",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 250821
 },
 {
  "id": "1254348",
  "name": "Tiruppur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 397521
 },
 {
  "id": "1254327",
  "name": "Tiruvannamalai",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 138243
 },
 {
  "id": "1254320",
  "name": "Tiruvottiyur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 248059
 },
 {
  "id": "1254309",
  "name": "Titagarh",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 127751
 },
 {
  "id": "2475744",
  "name": "Tizi Ouzou",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 144000
 },
 {
  "id": "3515463",
  "name": "Tlahuac",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 344106
 },
 {
  "id": "3515431",
  "name": "Tlalnepantla",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 715767
 },
 {
  "id": "3515428",
  "name": "Tlalpan",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 607545
 },
 {
  "id": "3981461",
  "name": "Tlaquepaque",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 493646
 },
 {
  "id": "2475687",
  "name": "Tlemcen",
  "tz": "Africa/Algiers",
  "country": "DZ",
  "population": 132341
 },
 {
  "id": "1053384",
  "name": "Toamasina",
  "tz": "Indian/Antananarivo",
  "country": "MG",
  "population": 206373
 },
 {
  "id": "1489530",
  "name": "Tobol'sk",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 113800
 },
 {
  "id": "81302",
  "name": "Tobruk",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 121052
 },
 {
  "id": "738743",
  "name": "Tokat",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 129702
 },
 {
  "id": "1850181",
  "name": "Tokorozawa",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 339435
 },
 {
  "id": "1850158",
  "name": "Tokushima-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 267345
 },
 {
  "id": "1850152",
  "name": "Tokuyama",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 101133
 },
 {
  "id": "1850147",
  "name": "Tokyo",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 8336599
 },
 {
  "id": "482283",
  "name": "Tol'yatti",
  "tz": "Europe/Samara",
  "country": "RU",
  "population": 702879
 },
 {
  "id": "3446370",
  "name": "Toledo",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 119313
 },
 {
  "id": "1681602",
  "name": "Toledo",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 156916
 },
 {
  "id": "5174035",
  "name": "Toledo",
  "tz": "America/New_York",
  "country": "US",
  "population": 287208
 },
 {
  "id": "1055429",
  "name": "Toliara",
  "tz": "Indian/Antananarivo",
  "country": "MG",
  "population": 115319
 },
 {
  "id": "3515302",
  "name": "Toluca",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 505881
 },
 {
  "id": "2127733",
  "name": "Tomakomai",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 174806
 },
 {
  "id": "1489425",
  "name": "Tomsk",
  "tz": "Asia/Novosibirsk",
  "country": "RU",
  "population": 485519
 },
 {
  "id": "3981369",
  "name": "Tonala",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 401509
 },
 {
  "id": "1850034",
  "name": "Tondabayashi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 132873
 },
 {
  "id": "1795196",
  "name": "Tongchuan",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 223603
 },
 {
  "id": "1892823",
  "name": "Tonghae",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 101128
 },
 {
  "id": "2034400",
  "name": "Tongliao",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 261110
 },
 {
  "id": "1787824",
  "name": "Tongshan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1199193
 },
 {
  "id": "1792520",
  "name": "Tongzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 163326
 },
 {
  "id": "1254241",
  "name": "Tonk",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 151331
 },
 {
  "id": "2146268",
  "name": "Toowoomba",
  "tz": "Australia/Brisbane",
  "country": "AU",
  "population": 131258
 },
 {
  "id": "4280539",
  "name": "Topeka",
  "tz": "America/Chicago",
  "country": "US",
  "population": 127473
 },
 {
  "id": "112646",
  "name": "Torbat-e Heydariyeh",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 125633
 },
 {
  "id": "6167865",
  "name": "Toronto",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 4612191
 },
 {
  "id": "5403022",
  "name": "Torrance",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 145438
 },
 {
  "id": "3107784",
  "name": "Torrejon de Ardoz",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 118162
 },
 {
  "id": "3981254",
  "name": "Torreon",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 524066
 },
 {
  "id": "2510253",
  "name": "Torrevieja",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 101792
 },
 {
  "id": "3083271",
  "name": "Torun",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 208717
 },
 {
  "id": "1849892",
  "name": "Tottori",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 154098
 },
 {
  "id": "2244322",
  "name": "Touba",
  "tz": "Africa/Dakar",
  "country": "SN",
  "population": 529176
 },
 {
  "id": "2972328",
  "name": "Toulon",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 168701
 },
 {
  "id": "2972315",
  "name": "Toulouse",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 433055
 },
 {
  "id": "2972191",
  "name": "Tours",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 141621
 },
 {
  "id": "2146142",
  "name": "Townsville",
  "tz": "Australia/Brisbane",
  "country": "AU",
  "population": 196219
 },
 {
  "id": "1849876",
  "name": "Toyama-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 325532
 },
 {
  "id": "1849846",
  "name": "Toyohashi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 378374
 },
 {
  "id": "1849845",
  "name": "Toyokawa",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 120537
 },
 {
  "id": "1849837",
  "name": "Toyonaka",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 384459
 },
 {
  "id": "1849814",
  "name": "Toyota",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 362383
 },
 {
  "id": "738648",
  "name": "Trabzon",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 244083
 },
 {
  "id": "1254187",
  "name": "Trichur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 325110
 },
 {
  "id": "2821164",
  "name": "Trier",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 100129
 },
 {
  "id": "3165185",
  "name": "Trieste",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 187056
 },
 {
  "id": "1226260",
  "name": "Trincomalee",
  "tz": "Asia/Colombo",
  "country": "LK",
  "population": 108420
 },
 {
  "id": "266826",
  "name": "Tripoli",
  "tz": "Asia/Beirut",
  "country": "LB",
  "population": 229398
 },
 {
  "id": "2210247",
  "name": "Tripoli",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 1150989
 },
 {
  "id": "6169141",
  "name": "Trois-Rivieres",
  "tz": "America/Montreal",
  "country": "CA",
  "population": 119693
 },
 {
  "id": "3133880",
  "name": "Trondheim",
  "tz": "Europe/Oslo",
  "country": "NO",
  "population": 147139
 },
 {
  "id": "481453",
  "name": "Troparevo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 118000
 },
 {
  "id": "3691175",
  "name": "Trujillo",
  "tz": "America/Lima",
  "country": "PE",
  "population": 747450
 },
 {
  "id": "536164",
  "name": "Tsaritsyno",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 123000
 },
 {
  "id": "204953",
  "name": "Tshikapa",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 267462
 },
 {
  "id": "1849796",
  "name": "Tsu-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 163461
 },
 {
  "id": "1818209",
  "name": "Tsuen Wan",
  "tz": "Asia/Hong_Kong",
  "country": "HK",
  "population": 288728
 },
 {
  "id": "2110683",
  "name": "Tsukuba",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 175589
 },
 {
  "id": "5318313",
  "name": "Tucson",
  "tz": "America/Phoenix",
  "country": "US",
  "population": 520116
 },
 {
  "id": "1680932",
  "name": "Tuguegarao City",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 115105
 },
 {
  "id": "480562",
  "name": "Tula",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 468825
 },
 {
  "id": "3515062",
  "name": "Tulancingo",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 102383
 },
 {
  "id": "4553433",
  "name": "Tulsa",
  "tz": "America/Chicago",
  "country": "US",
  "population": 391906
 },
 {
  "id": "3666645",
  "name": "Tulua",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 165501
 },
 {
  "id": "3691148",
  "name": "Tumbes",
  "tz": "America/Lima",
  "country": "PE",
  "population": 109223
 },
 {
  "id": "1254089",
  "name": "Tumkur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 307359
 },
 {
  "id": "1185098",
  "name": "Tungi",
  "tz": "Asia/Dhaka",
  "country": "BD",
  "population": 337579
 },
 {
  "id": "2464470",
  "name": "Tunis",
  "tz": "Africa/Tunis",
  "country": "TN",
  "population": 693210
 },
 {
  "id": "3666608",
  "name": "Tunja",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 117479
 },
 {
  "id": "298806",
  "name": "Turgutlu",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 103292
 },
 {
  "id": "738618",
  "name": "Turhal",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 110884
 },
 {
  "id": "3165524",
  "name": "Turin",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 870456
 },
 {
  "id": "1219649",
  "name": "Turkmenabat",
  "tz": "Asia/Ashgabat",
  "country": "TM",
  "population": 234817
 },
 {
  "id": "633679",
  "name": "Turku",
  "tz": "Europe/Helsinki",
  "country": "FI",
  "population": 175945
 },
 {
  "id": "3625829",
  "name": "Turmero",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 344700
 },
 {
  "id": "3515011",
  "name": "Tuxpan de Rodriguez Cano",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 134394
 },
 {
  "id": "3515001",
  "name": "Tuxtla Gutierrez",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 481128
 },
 {
  "id": "3188582",
  "name": "Tuzla",
  "tz": "Europe/Sarajevo",
  "country": "BA",
  "population": 142486
 },
 {
  "id": "480060",
  "name": "Tver",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 400212
 },
 {
  "id": "3082914",
  "name": "Tychy",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 130000
 },
 {
  "id": "483551",
  "name": "Tyoply Stan",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 125000
 },
 {
  "id": "267008",
  "name": "Tyre",
  "tz": "Asia/Beirut",
  "country": "LB",
  "population": 135204
 },
 {
  "id": "1488754",
  "name": "Tyumen",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 519119
 },
 {
  "id": "1849498",
  "name": "Ube",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 173733
 },
 {
  "id": "3445839",
  "name": "Uberaba",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 260843
 },
 {
  "id": "3445831",
  "name": "Uberlandia",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 563536
 },
 {
  "id": "1605245",
  "name": "Ubon Ratchathani",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 122533
 },
 {
  "id": "G38",
  "name": "UCT",
  "tz": "Etc/UCT",
  "country": null,
  "population": null
 },
 {
  "id": "1253986",
  "name": "Udaipur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 422784
 },
 {
  "id": "1253958",
  "name": "Udgir",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 101064
 },
 {
  "id": "1253952",
  "name": "Udipi",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 129113
 },
 {
  "id": "1605239",
  "name": "Udon Thani",
  "tz": "Asia/Bangkok",
  "country": "TH",
  "population": 247231
 },
 {
  "id": "1849429",
  "name": "Ueda",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 126606
 },
 {
  "id": "1529102",
  "name": "UEruemqi",
  "tz": "Asia/Urumqi",
  "country": "CN",
  "population": 1508225
 },
 {
  "id": "738329",
  "name": "UEskuedar",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 582666
 },
 {
  "id": "479561",
  "name": "Ufa",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 1033338
 },
 {
  "id": "2320831",
  "name": "Ugep",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 200276
 },
 {
  "id": "1833788",
  "name": "Uijeongbu-si",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 479141
 },
 {
  "id": "946877",
  "name": "Uitenhage",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 228912
 },
 {
  "id": "1849372",
  "name": "Uji",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 192925
 },
 {
  "id": "1253914",
  "name": "Ujjain",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 457346
 },
 {
  "id": "479411",
  "name": "Ukhta",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 102187
 },
 {
  "id": "2028462",
  "name": "Ulaanbaatar",
  "tz": "Asia/Ulaanbaatar",
  "country": "MN",
  "population": 844818
 },
 {
  "id": "2014407",
  "name": "Ulan-Ude",
  "tz": "Asia/Irkutsk",
  "country": "RU",
  "population": 360278
 },
 {
  "id": "2034312",
  "name": "Ulanhot",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 165846
 },
 {
  "id": "1253894",
  "name": "Ulhasnagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 516584
 },
 {
  "id": "2820256",
  "name": "Ulm",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 120451
 },
 {
  "id": "1833747",
  "name": "Ulsan",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 962865
 },
 {
  "id": "479123",
  "name": "Ulyanovsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 640680
 },
 {
  "id": "89824",
  "name": "Umm Qasr",
  "tz": "Asia/Baghdad",
  "country": "IQ",
  "population": 107620
 },
 {
  "id": "738377",
  "name": "Umraniye",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 573265
 },
 {
  "id": "2320576",
  "name": "Umuahia",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 264662
 },
 {
  "id": "8394316",
  "name": "Unaizah",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 163729
 },
 {
  "id": "1622636",
  "name": "Ungaran",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 127812
 },
 {
  "id": "5404794",
  "name": "Universal City",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 105000
 },
 {
  "id": "1253747",
  "name": "Unnao",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 161671
 },
 {
  "id": "1253744",
  "name": "Uppal Kalan",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 118259
 },
 {
  "id": "2666199",
  "name": "Uppsala",
  "tz": "Europe/Stockholm",
  "country": "SE",
  "population": 127734
 },
 {
  "id": "1849186",
  "name": "Urayasu",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 143758
 },
 {
  "id": "1680197",
  "name": "Urdaneta",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 101037
 },
 {
  "id": "1512473",
  "name": "Urganch",
  "tz": "Asia/Samarkand",
  "country": "UZ",
  "population": 150110
 },
 {
  "id": "2319668",
  "name": "Uromi",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 108608
 },
 {
  "id": "6545326",
  "name": "Ursynow",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 147676
 },
 {
  "id": "3980760",
  "name": "Uruapan",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 237308
 },
 {
  "id": "3445679",
  "name": "Uruguaiana",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 123480
 },
 {
  "id": "298299",
  "name": "Usak",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 152862
 },
 {
  "id": "6544490",
  "name": "Usera",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 141189
 },
 {
  "id": "2014006",
  "name": "Ussuriysk",
  "tz": "Asia/Vladivostok",
  "country": "RU",
  "population": 157068
 },
 {
  "id": "2013952",
  "name": "Ust'-Ilimsk",
  "tz": "Asia/Irkutsk",
  "country": "RU",
  "population": 100271
 },
 {
  "id": "1520316",
  "name": "Ust-Kamenogorsk",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 319067
 },
 {
  "id": "G39",
  "name": "UTC",
  "tz": "Etc/UTC",
  "country": null,
  "population": null
 },
 {
  "id": "2745912",
  "name": "Utrecht",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 290529
 },
 {
  "id": "1849053",
  "name": "Utsunomiya-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 449865
 },
 {
  "id": "204405",
  "name": "Uvira",
  "tz": "Africa/Lubumbashi",
  "country": "CD",
  "population": 170391
 },
 {
  "id": "2319480",
  "name": "Uyo",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 436606
 },
 {
  "id": "690548",
  "name": "Uzhhorod",
  "tz": "Europe/Uzhgorod",
  "country": "UA",
  "population": 117878
 },
 {
  "id": "933945",
  "name": "Vacoas",
  "tz": "Indian/Mauritius",
  "country": "MU",
  "population": 110000
 },
 {
  "id": "1253573",
  "name": "Vadodara",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1409476
 },
 {
  "id": "3868707",
  "name": "Valdivia",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 133419
 },
 {
  "id": "2509954",
  "name": "Valencia",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 814208
 },
 {
  "id": "5405288",
  "name": "Valencia",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 148456
 },
 {
  "id": "3625549",
  "name": "Valencia",
  "tz": "America/Caracas",
  "country": "VE",
  "population": 1385083
 },
 {
  "id": "3106672",
  "name": "Valladolid",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 317864
 },
 {
  "id": "3666304",
  "name": "Valledupar",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 308237
 },
 {
  "id": "5405380",
  "name": "Vallejo",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 115942
 },
 {
  "id": "3868626",
  "name": "Valparaiso",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 282448
 },
 {
  "id": "298117",
  "name": "Van",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 371713
 },
 {
  "id": "5405693",
  "name": "Van Nuys",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 136443
 },
 {
  "id": "616530",
  "name": "Vanadzor",
  "tz": "Asia/Yerevan",
  "country": "AM",
  "population": 101098
 },
 {
  "id": "6173331",
  "name": "Vancouver",
  "tz": "America/Vancouver",
  "country": "CA",
  "population": 1837969
 },
 {
  "id": "5814616",
  "name": "Vancouver",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 161791
 },
 {
  "id": "944986",
  "name": "Vanderbijlpark",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 246754
 },
 {
  "id": "632453",
  "name": "Vantaa",
  "tz": "Europe/Helsinki",
  "country": "FI",
  "population": 190058
 },
 {
  "id": "112214",
  "name": "Varamin",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 179603
 },
 {
  "id": "1253405",
  "name": "Varanasi",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1164404
 },
 {
  "id": "3445487",
  "name": "Varginha",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 116571
 },
 {
  "id": "726050",
  "name": "Varna",
  "tz": "Europe/Sofia",
  "country": "BG",
  "population": 312770
 },
 {
  "id": "3445451",
  "name": "Varzea Grande",
  "tz": "America/Cuiaba",
  "country": "BR",
  "population": 249752
 },
 {
  "id": "3445446",
  "name": "Varzea Paulista",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 110936
 },
 {
  "id": "1253367",
  "name": "Vasco Da Gama",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 100485
 },
 {
  "id": "2664454",
  "name": "Vasteras",
  "tz": "Europe/Stockholm",
  "country": "SE",
  "population": 107194
 },
 {
  "id": "8504949",
  "name": "Vasyl'evsky Ostrov",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 203058
 },
 {
  "id": "6173577",
  "name": "Vaughan",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 238866
 },
 {
  "id": "1253315",
  "name": "Vejalpur",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 121610
 },
 {
  "id": "519336",
  "name": "Velikiy Novgorod",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 215062
 },
 {
  "id": "476077",
  "name": "Velikiye Luki",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 103149
 },
 {
  "id": "1253286",
  "name": "Vellore",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 177081
 },
 {
  "id": "3827407",
  "name": "Venustiano Carranza",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 447459
 },
 {
  "id": "3514783",
  "name": "Veracruz",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 568313
 },
 {
  "id": "1253237",
  "name": "Veraval",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 163326
 },
 {
  "id": "944385",
  "name": "Vereeniging",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 474681
 },
 {
  "id": "3164527",
  "name": "Verona",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 219103
 },
 {
  "id": "473972",
  "name": "Veshnyaki",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 122000
 },
 {
  "id": "3445156",
  "name": "Viamao",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 285269
 },
 {
  "id": "3164419",
  "name": "Vicenza",
  "tz": "Europe/Rome",
  "country": "IT",
  "population": 107129
 },
 {
  "id": "6174041",
  "name": "Victoria",
  "tz": "America/Vancouver",
  "country": "CA",
  "population": 289625
 },
 {
  "id": "4011743",
  "name": "Victoria de Durango",
  "tz": "America/Monterrey",
  "country": "MX",
  "population": 457140
 },
 {
  "id": "5406222",
  "name": "Victorville",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 115903
 },
 {
  "id": "1253200",
  "name": "Vidisha",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 140045
 },
 {
  "id": "2761369",
  "name": "Vienna",
  "tz": "Europe/Vienna",
  "country": "AT",
  "population": 1691468
 },
 {
  "id": "1651944",
  "name": "Vientiane",
  "tz": "Asia/Vientiane",
  "country": "LA",
  "population": 196731
 },
 {
  "id": "3105976",
  "name": "Vigo",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 297332
 },
 {
  "id": "1162813",
  "name": "Vihari",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 112840
 },
 {
  "id": "1253184",
  "name": "Vijayawada",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 874587
 },
 {
  "id": "3445026",
  "name": "Vila Velha",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 394930
 },
 {
  "id": "3587923",
  "name": "Villa Canales",
  "tz": "America/Guatemala",
  "country": "GT",
  "population": 122194
 },
 {
  "id": "3427408",
  "name": "Villa Lugano",
  "tz": "America/Argentina/Buenos_Aires",
  "country": "AR",
  "population": 114000
 },
 {
  "id": "3587902",
  "name": "Villa Nueva",
  "tz": "America/Guatemala",
  "country": "GT",
  "population": 406830
 },
 {
  "id": "3514670",
  "name": "Villahermosa",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 362401
 },
 {
  "id": "3104748",
  "name": "Villaverde",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 126802
 },
 {
  "id": "3665900",
  "name": "Villavicencio",
  "tz": "America/Bogota",
  "country": "CO",
  "population": 321717
 },
 {
  "id": "2968254",
  "name": "Villeurbanne",
  "tz": "Europe/Paris",
  "country": "FR",
  "population": 131445
 },
 {
  "id": "593116",
  "name": "Vilnius",
  "tz": "Europe/Vilnius",
  "country": "LT",
  "population": 542366
 },
 {
  "id": "3868121",
  "name": "Vina del Mar",
  "tz": "America/Santiago",
  "country": "CL",
  "population": 294551
 },
 {
  "id": "1562798",
  "name": "Vinh",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 163759
 },
 {
  "id": "1562693",
  "name": "Vinh Long",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 103314
 },
 {
  "id": "689558",
  "name": "Vinnytsya",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 352115
 },
 {
  "id": "298033",
  "name": "Viransehir",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 154163
 },
 {
  "id": "1253133",
  "name": "Virar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 150357
 },
 {
  "id": "943882",
  "name": "Virginia",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 122502
 },
 {
  "id": "4791259",
  "name": "Virginia Beach",
  "tz": "America/New_York",
  "country": "US",
  "population": 437994
 },
 {
  "id": "1253102",
  "name": "Visakhapatnam",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 1063178
 },
 {
  "id": "5406567",
  "name": "Visalia",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 124442
 },
 {
  "id": "620127",
  "name": "Vitebsk",
  "tz": "Europe/Minsk",
  "country": "BY",
  "population": 342700
 },
 {
  "id": "3444924",
  "name": "Vitoria",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 312656
 },
 {
  "id": "3444914",
  "name": "Vitoria da Conquista",
  "tz": "America/Bahia",
  "country": "BR",
  "population": 253137
 },
 {
  "id": "3384987",
  "name": "Vitoria de Santo Antao",
  "tz": "America/Recife",
  "country": "BR",
  "population": 107383
 },
 {
  "id": "1253084",
  "name": "Vizianagaram",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 179358
 },
 {
  "id": "473249",
  "name": "Vladikavkaz",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 317370
 },
 {
  "id": "473247",
  "name": "Vladimir",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 310024
 },
 {
  "id": "2013348",
  "name": "Vladivostok",
  "tz": "Asia/Vladivostok",
  "country": "RU",
  "population": 587022
 },
 {
  "id": "472761",
  "name": "Volgodonsk",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 167731
 },
 {
  "id": "472757",
  "name": "Volgograd",
  "tz": "Europe/Volgograd",
  "country": "RU",
  "population": 1011417
 },
 {
  "id": "472459",
  "name": "Vologda",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 314900
 },
 {
  "id": "3444876",
  "name": "Volta Redonda",
  "tz": "America/Sao_Paulo",
  "country": "BR",
  "population": 249580
 },
 {
  "id": "472231",
  "name": "Volzhskiy",
  "tz": "Europe/Volgograd",
  "country": "RU",
  "population": 323293
 },
 {
  "id": "472045",
  "name": "Voronezh",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 848752
 },
 {
  "id": "942470",
  "name": "Vryheid",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 150012
 },
 {
  "id": "1562414",
  "name": "Vung Tau",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 209683
 },
 {
  "id": "470451",
  "name": "Vykhino-Zhulebino",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 216000
 },
 {
  "id": "4739526",
  "name": "Waco",
  "tz": "America/Chicago",
  "country": "US",
  "population": 124805
 },
 {
  "id": "364103",
  "name": "Wad Medani",
  "tz": "Africa/Khartoum",
  "country": "SD",
  "population": 332714
 },
 {
  "id": "246013",
  "name": "Wadi as Sir",
  "tz": "Asia/Amman",
  "country": "JO",
  "population": 181212
 },
 {
  "id": "1792260",
  "name": "Wafangdian",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 250591
 },
 {
  "id": "7302484",
  "name": "Waitakere",
  "tz": "Pacific/Auckland",
  "country": "NZ",
  "population": 208100
 },
 {
  "id": "1926004",
  "name": "Wakayama-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 351000
 },
 {
  "id": "3082707",
  "name": "Walbrzych",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 127431
 },
 {
  "id": "2634853",
  "name": "Walsall",
  "tz": "Europe/London",
  "country": "GB",
  "population": 172141
 },
 {
  "id": "2911285",
  "name": "Wandsbek",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 411422
 },
 {
  "id": "1791748",
  "name": "Wanxian",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 188980
 },
 {
  "id": "1252948",
  "name": "Warangal",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 557802
 },
 {
  "id": "1252942",
  "name": "Wardha",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 113759
 },
 {
  "id": "5014051",
  "name": "Warren",
  "tz": "America/Detroit",
  "country": "US",
  "population": 134056
 },
 {
  "id": "2319133",
  "name": "Warri",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 536023
 },
 {
  "id": "756135",
  "name": "Warsaw",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 1702139
 },
 {
  "id": "4140963",
  "name": "Washington, D. C.",
  "tz": "America/New_York",
  "country": "US",
  "population": 601723
 },
 {
  "id": "4845193",
  "name": "Waterbury",
  "tz": "America/New_York",
  "country": "US",
  "population": 110366
 },
 {
  "id": "2634677",
  "name": "Watford",
  "tz": "Europe/London",
  "country": "GB",
  "population": 125707
 },
 {
  "id": "363885",
  "name": "Wau",
  "tz": "Africa/Juba",
  "country": "SS",
  "population": 127384
 },
 {
  "id": "1162456",
  "name": "Wazirabad",
  "tz": "Asia/Karachi",
  "country": "PK",
  "population": 102444
 },
 {
  "id": "1791681",
  "name": "Weifang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 394732
 },
 {
  "id": "1791673",
  "name": "Weihai",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 152595
 },
 {
  "id": "1791636",
  "name": "Weinan",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 172321
 },
 {
  "id": "940909",
  "name": "Welkom",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 431944
 },
 {
  "id": "2179537",
  "name": "Wellington",
  "tz": "Pacific/Auckland",
  "country": "NZ",
  "population": 381900
 },
 {
  "id": "8505006",
  "name": "Wenshan City",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 450000
 },
 {
  "id": "1791388",
  "name": "Wenzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 865672
 },
 {
  "id": "1621613",
  "name": "Weru",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 139004
 },
 {
  "id": "2634491",
  "name": "West Bromwich",
  "tz": "Europe/London",
  "country": "GB",
  "population": 135618
 },
 {
  "id": "5407933",
  "name": "West Covina",
  "tz": "America/Los_Angeles",
  "country": "US",
  "population": 106098
 },
 {
  "id": "7498240",
  "name": "West Jerusalem",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 400000
 },
 {
  "id": "5784549",
  "name": "West Jordan",
  "tz": "America/Denver",
  "country": "US",
  "population": 103712
 },
 {
  "id": "4498303",
  "name": "West Raleigh",
  "tz": "America/New_York",
  "country": "US",
  "population": 338759
 },
 {
  "id": "5784607",
  "name": "West Valley City",
  "tz": "America/Denver",
  "country": "US",
  "population": 129480
 },
 {
  "id": "5443910",
  "name": "Westminster",
  "tz": "America/Denver",
  "country": "US",
  "population": 106114
 },
 {
  "id": "940316",
  "name": "Westonaria",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 156831
 },
 {
  "id": "G10",
  "name": "WET - Western European Time",
  "tz": "WET",
  "country": null,
  "population": null
 },
 {
  "id": "4281730",
  "name": "Wichita",
  "tz": "America/Chicago",
  "country": "US",
  "population": 382368
 },
 {
  "id": "4741752",
  "name": "Wichita Falls",
  "tz": "America/Chicago",
  "country": "US",
  "population": 104553
 },
 {
  "id": "2809346",
  "name": "Wiesbaden",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 272432
 },
 {
  "id": "3513090",
  "name": "Willemstad",
  "tz": "America/Curacao",
  "country": "CW",
  "population": 125000
 },
 {
  "id": "4499379",
  "name": "Wilmington",
  "tz": "America/New_York",
  "country": "US",
  "population": 106476
 },
 {
  "id": "3352136",
  "name": "Windhoek",
  "tz": "Africa/Windhoek",
  "country": "NA",
  "population": 268132
 },
 {
  "id": "6182962",
  "name": "Windsor",
  "tz": "America/Toronto",
  "country": "CA",
  "population": 278013
 },
 {
  "id": "6183235",
  "name": "Winnipeg",
  "tz": "America/Winnipeg",
  "country": "CA",
  "population": 632063
 },
 {
  "id": "4499612",
  "name": "Winston-Salem",
  "tz": "America/New_York",
  "country": "US",
  "population": 229617
 },
 {
  "id": "939270",
  "name": "Witbank",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 262491
 },
 {
  "id": "2807363",
  "name": "Witten",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 101247
 },
 {
  "id": "3081741",
  "name": "Wloclawek",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 120339
 },
 {
  "id": "2633709",
  "name": "Woking",
  "tz": "Europe/London",
  "country": "GB",
  "population": 103932
 },
 {
  "id": "755330",
  "name": "Wola",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 143996
 },
 {
  "id": "2806654",
  "name": "Wolfsburg",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 123064
 },
 {
  "id": "2171507",
  "name": "Wollongong",
  "tz": "Australia/Sydney",
  "country": "AU",
  "population": 292190
 },
 {
  "id": "2633691",
  "name": "Wolverhampton",
  "tz": "Europe/London",
  "country": "GB",
  "population": 252791
 },
 {
  "id": "1833105",
  "name": "Wonju",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 243387
 },
 {
  "id": "1866923",
  "name": "Wonsan",
  "tz": "Asia/Pyongyang",
  "country": "KP",
  "population": 329207
 },
 {
  "id": "2633563",
  "name": "Worcester",
  "tz": "Europe/London",
  "country": "GB",
  "population": 100023
 },
 {
  "id": "4956184",
  "name": "Worcester",
  "tz": "America/New_York",
  "country": "US",
  "population": 181045
 },
 {
  "id": "3359041",
  "name": "Worcester",
  "tz": "Africa/Johannesburg",
  "country": "ZA",
  "population": 127597
 },
 {
  "id": "3081368",
  "name": "Wroclaw",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 634893
 },
 {
  "id": "1800829",
  "name": "Wuchuan",
  "tz": "Asia/Urumqi",
  "country": "CN",
  "population": 104168
 },
 {
  "id": "1791325",
  "name": "Wuda",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 129922
 },
 {
  "id": "2805615",
  "name": "Wuerzburg",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 133731
 },
 {
  "id": "1791249",
  "name": "Wuhai",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 218427
 },
 {
  "id": "1791247",
  "name": "Wuhan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 4184206
 },
 {
  "id": "1791236",
  "name": "Wuhu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 507524
 },
 {
  "id": "2805753",
  "name": "Wuppertal",
  "tz": "Europe/Berlin",
  "country": "DE",
  "population": 360797
 },
 {
  "id": "1792621",
  "name": "Wusong",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 312588
 },
 {
  "id": "1803936",
  "name": "Wuwei",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 493092
 },
 {
  "id": "1790923",
  "name": "Wuxi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1108647
 },
 {
  "id": "1790894",
  "name": "Wuxue",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 220661
 },
 {
  "id": "1790840",
  "name": "Wuzhou",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 265846
 },
 {
  "id": "1024552",
  "name": "Xai-Xai",
  "tz": "Africa/Maputo",
  "country": "MZ",
  "population": 127366
 },
 {
  "id": "3526617",
  "name": "Xalapa de Enriquez",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 425148
 },
 {
  "id": "1790630",
  "name": "Xi'an",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 3225812
 },
 {
  "id": "1790645",
  "name": "Xiamen",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 578337
 },
 {
  "id": "1790492",
  "name": "Xiangtan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 674189
 },
 {
  "id": "1790587",
  "name": "Xiangyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 462956
 },
 {
  "id": "1790396",
  "name": "Xianning",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 179494
 },
 {
  "id": "1790371",
  "name": "Xiantao",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 239406
 },
 {
  "id": "1790353",
  "name": "Xianyang",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 1034081
 },
 {
  "id": "1790254",
  "name": "Xiaogan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 160437
 },
 {
  "id": "1789703",
  "name": "Xiazhen",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 125667
 },
 {
  "id": "1789647",
  "name": "Xichang",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 126787
 },
 {
  "id": "2033824",
  "name": "Xilin Hot",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 120965
 },
 {
  "id": "1789137",
  "name": "Xindi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 175761
 },
 {
  "id": "1784820",
  "name": "Xinghua",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 105918
 },
 {
  "id": "1788927",
  "name": "Xingtai",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 611739
 },
 {
  "id": "1806882",
  "name": "Xinhui",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 195129
 },
 {
  "id": "1788852",
  "name": "Xining",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 767531
 },
 {
  "id": "1788816",
  "name": "Xinji",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 145911
 },
 {
  "id": "1788694",
  "name": "Xinpu",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 392444
 },
 {
  "id": "1788618",
  "name": "Xintai",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 222459
 },
 {
  "id": "1788572",
  "name": "Xinxiang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 743601
 },
 {
  "id": "1788534",
  "name": "Xinyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1590668
 },
 {
  "id": "1788450",
  "name": "Xinzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 154003
 },
 {
  "id": "1788268",
  "name": "Xiulin",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 122411
 },
 {
  "id": "1788245",
  "name": "Xiuying",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 290000
 },
 {
  "id": "3514450",
  "name": "Xochimilco",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 404458
 },
 {
  "id": "2033574",
  "name": "Xuanhua",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 373422
 },
 {
  "id": "1788081",
  "name": "Xuanzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 127758
 },
 {
  "id": "1788046",
  "name": "Xuchang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 449258
 },
 {
  "id": "293253",
  "name": "Yafo",
  "tz": "Asia/Jerusalem",
  "country": "IL",
  "population": 100000
 },
 {
  "id": "1848774",
  "name": "Yaizu",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 121057
 },
 {
  "id": "2033536",
  "name": "Yakeshi",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 116284
 },
 {
  "id": "2013159",
  "name": "Yakutsk",
  "tz": "Asia/Yakutsk",
  "country": "RU",
  "population": 235600
 },
 {
  "id": "2110556",
  "name": "Yamagata-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 254538
 },
 {
  "id": "1848689",
  "name": "Yamaguchi-shi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 145515
 },
 {
  "id": "2279755",
  "name": "Yamoussoukro",
  "tz": "Africa/Abidjan",
  "country": "CI",
  "population": 194530
 },
 {
  "id": "1252797",
  "name": "Yamunanagar",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 208931
 },
 {
  "id": "1529569",
  "name": "Yan'an Beilu",
  "tz": "Asia/Urumqi",
  "country": "CN",
  "population": 198776
 },
 {
  "id": "100425",
  "name": "Yanbu` al Bahr",
  "tz": "Asia/Riyadh",
  "country": "SA",
  "population": 200161
 },
 {
  "id": "1787746",
  "name": "Yancheng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 628441
 },
 {
  "id": "1814786",
  "name": "Yangchun",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 153547
 },
 {
  "id": "1806408",
  "name": "Yangjiang",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 399735
 },
 {
  "id": "1832847",
  "name": "Yangju",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 179923
 },
 {
  "id": "1298824",
  "name": "Yangon",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 4477638
 },
 {
  "id": "1787351",
  "name": "Yangquan",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 413394
 },
 {
  "id": "1787323",
  "name": "Yangshuo",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 300000
 },
 {
  "id": "1787227",
  "name": "Yangzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 539715
 },
 {
  "id": "2033467",
  "name": "Yanji",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 326957
 },
 {
  "id": "1787093",
  "name": "Yantai",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 719332
 },
 {
  "id": "1848522",
  "name": "Yao",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 273213
 },
 {
  "id": "2220957",
  "name": "Yaounde",
  "tz": "Africa/Douala",
  "country": "CM",
  "population": 1299369
 },
 {
  "id": "468902",
  "name": "Yaroslavl",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 606730
 },
 {
  "id": "468809",
  "name": "Yasenevo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 180000
 },
 {
  "id": "1848445",
  "name": "Yatsushiro",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 104341
 },
 {
  "id": "1252770",
  "name": "Yavatmal",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 128175
 },
 {
  "id": "111822",
  "name": "Yazd",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 477905
 },
 {
  "id": "1486209",
  "name": "Yekaterinburg",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 1349772
 },
 {
  "id": "1252758",
  "name": "Yelahanka",
  "tz": "Asia/Kolkata",
  "country": "IN",
  "population": 116447
 },
 {
  "id": "467978",
  "name": "Yelets",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 115688
 },
 {
  "id": "1560037",
  "name": "Yen Vinh",
  "tz": "Asia/Ho_Chi_Minh",
  "country": "VN",
  "population": 107082
 },
 {
  "id": "688148",
  "name": "Yenakiyeve",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 104101
 },
 {
  "id": "1285173",
  "name": "Yenangyaung",
  "tz": "Asia/Rangoon",
  "country": "MM",
  "population": 110553
 },
 {
  "id": "1884138",
  "name": "Yeosu",
  "tz": "Asia/Seoul",
  "country": "KR",
  "population": 295538
 },
 {
  "id": "616052",
  "name": "Yerevan",
  "tz": "Asia/Yerevan",
  "country": "AM",
  "population": 1093485
 },
 {
  "id": "688105",
  "name": "Yevpatoriya",
  "tz": "Europe/Simferopol",
  "country": "UA",
  "population": 105223
 },
 {
  "id": "1786770",
  "name": "Yibin",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 242111
 },
 {
  "id": "1786764",
  "name": "Yichang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 476725
 },
 {
  "id": "1786746",
  "name": "Yichun",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 152169
 },
 {
  "id": "2033413",
  "name": "Yichun",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 155762
 },
 {
  "id": "1786657",
  "name": "Yinchuan",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 475101
 },
 {
  "id": "1529660",
  "name": "Yingbazha",
  "tz": "Asia/Kashgar",
  "country": "CN",
  "population": 340020
 },
 {
  "id": "2033370",
  "name": "Yingkou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 591159
 },
 {
  "id": "1808316",
  "name": "Yiyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 202608
 },
 {
  "id": "1621177",
  "name": "Yogyakarta",
  "tz": "Asia/Jakarta",
  "country": "ID",
  "population": 636660
 },
 {
  "id": "1848373",
  "name": "Yokkaichi",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 295841
 },
 {
  "id": "1848354",
  "name": "Yokohama",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 3574443
 },
 {
  "id": "1848313",
  "name": "Yokosuka",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 428992
 },
 {
  "id": "1848277",
  "name": "Yonago",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 141368
 },
 {
  "id": "5145215",
  "name": "Yonkers",
  "tz": "America/New_York",
  "country": "US",
  "population": 195976
 },
 {
  "id": "1848254",
  "name": "Yono",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 1077730
 },
 {
  "id": "2633352",
  "name": "York",
  "tz": "Europe/London",
  "country": "GB",
  "population": 144202
 },
 {
  "id": "466806",
  "name": "Yoshkar-Ola",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 279100
 },
 {
  "id": "1785974",
  "name": "Yuci",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 235929
 },
 {
  "id": "1818223",
  "name": "Yuen Long Kau Hui",
  "tz": "Asia/Hong_Kong",
  "country": "HK",
  "population": 141900
 },
 {
  "id": "1927639",
  "name": "Yueyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 5000000
 },
 {
  "id": "1785781",
  "name": "Yulin",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 148485
 },
 {
  "id": "1785738",
  "name": "Yuncheng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 201950
 },
 {
  "id": "1785725",
  "name": "Yunfu",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 2612800
 },
 {
  "id": "2033242",
  "name": "Yushu",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 124736
 },
 {
  "id": "1784185",
  "name": "Yuxi",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 103829
 },
 {
  "id": "1785545",
  "name": "Yuyao",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 114177
 },
 {
  "id": "2119441",
  "name": "Yuzhno-Sakhalinsk",
  "tz": "Asia/Sakhalin",
  "country": "RU",
  "population": 176484
 },
 {
  "id": "2744114",
  "name": "Zaanstad",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 140085
 },
 {
  "id": "1113217",
  "name": "Zabol",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 121989
 },
 {
  "id": "3080985",
  "name": "Zabrze",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 192177
 },
 {
  "id": "3979844",
  "name": "Zacatecas",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 118562
 },
 {
  "id": "359493",
  "name": "Zagazig",
  "tz": "Africa/Cairo",
  "country": "EG",
  "population": 285097
 },
 {
  "id": "3186886",
  "name": "Zagreb",
  "tz": "Europe/Zagreb",
  "country": "HR",
  "population": 698966
 },
 {
  "id": "6618983",
  "name": "Zagreb - Centar",
  "tz": "Europe/Zagreb",
  "country": "HR",
  "population": 800000
 },
 {
  "id": "1159301",
  "name": "Zahedan",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 551980
 },
 {
  "id": "2033225",
  "name": "Zalantun",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 132224
 },
 {
  "id": "1848004",
  "name": "Zama",
  "tz": "Asia/Tokyo",
  "country": "JP",
  "population": 134671
 },
 {
  "id": "1679432",
  "name": "Zamboanga",
  "tz": "Asia/Manila",
  "country": "PH",
  "population": 457623
 },
 {
  "id": "3979802",
  "name": "Zamora de Hidalgo",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 124916
 },
 {
  "id": "111453",
  "name": "Zanjan",
  "tz": "Asia/Tehran",
  "country": "IR",
  "population": 357471
 },
 {
  "id": "148730",
  "name": "Zanzibar",
  "tz": "Africa/Dar_es_Salaam",
  "country": "TZ",
  "population": 403658
 },
 {
  "id": "1785462",
  "name": "Zaoyang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 184509
 },
 {
  "id": "1785453",
  "name": "Zaozhuang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 183665
 },
 {
  "id": "3979770",
  "name": "Zapopan",
  "tz": "America/Mexico_City",
  "country": "MX",
  "population": 987516
 },
 {
  "id": "687700",
  "name": "Zaporizhzhya",
  "tz": "Europe/Zaporozhye",
  "country": "UA",
  "population": 796217
 },
 {
  "id": "3104324",
  "name": "Zaragoza",
  "tz": "Europe/Madrid",
  "country": "ES",
  "population": 674317
 },
 {
  "id": "2317765",
  "name": "Zaria",
  "tz": "Africa/Lagos",
  "country": "NG",
  "population": 975153
 },
 {
  "id": "250090",
  "name": "Zarqa",
  "tz": "Asia/Amman",
  "country": "JO",
  "population": 792665
 },
 {
  "id": "2216885",
  "name": "Zawiya",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 186123
 },
 {
  "id": "463829",
  "name": "Zelenograd",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 215727
 },
 {
  "id": "783920",
  "name": "Zemun",
  "tz": "Europe/Belgrade",
  "country": "RS",
  "population": 155591
 },
 {
  "id": "3186573",
  "name": "Zenica",
  "tz": "Europe/Sarajevo",
  "country": "BA",
  "population": 164423
 },
 {
  "id": "737071",
  "name": "Zeytinburnu",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 288743
 },
 {
  "id": "2033196",
  "name": "Zhangjiakou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 692602
 },
 {
  "id": "1785018",
  "name": "Zhangzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 589831
 },
 {
  "id": "1784990",
  "name": "Zhanjiang",
  "tz": "Asia/Urumqi",
  "country": "CN",
  "population": 637790
 },
 {
  "id": "2033168",
  "name": "Zhaodong",
  "tz": "Asia/Harbin",
  "country": "CN",
  "population": 154406
 },
 {
  "id": "1784853",
  "name": "Zhaoqing",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 361969
 },
 {
  "id": "1784841",
  "name": "Zhaotong",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 109400
 },
 {
  "id": "463355",
  "name": "Zheleznodorozhnyy",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 141648
 },
 {
  "id": "1784658",
  "name": "Zhengzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 2014125
 },
 {
  "id": "1784642",
  "name": "Zhenjiang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 632552
 },
 {
  "id": "1784580",
  "name": "Zhenzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 176006
 },
 {
  "id": "1516589",
  "name": "Zhezqazghan",
  "tz": "Asia/Almaty",
  "country": "KZ",
  "population": 104357
 },
 {
  "id": "1784554",
  "name": "Zhicheng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 159383
 },
 {
  "id": "1915223",
  "name": "Zhongshan",
  "tz": "Asia/Urumqi",
  "country": "CN",
  "population": 2493400
 },
 {
  "id": "1786546",
  "name": "Zhongxiang",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 108883
 },
 {
  "id": "1784178",
  "name": "Zhoucun",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 122402
 },
 {
  "id": "1784130",
  "name": "Zhoukou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 377061
 },
 {
  "id": "7602670",
  "name": "Zhu Cheng City",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 1000000
 },
 {
  "id": "1790437",
  "name": "Zhuhai",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 501199
 },
 {
  "id": "1783940",
  "name": "Zhuji",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 110721
 },
 {
  "id": "462745",
  "name": "Zhulebino",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 150000
 },
 {
  "id": "1783873",
  "name": "Zhumadian",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 8263100
 },
 {
  "id": "1783763",
  "name": "Zhuzhou",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 709358
 },
 {
  "id": "686967",
  "name": "Zhytomyr",
  "tz": "Europe/Kiev",
  "country": "UA",
  "population": 282192
 },
 {
  "id": "1785286",
  "name": "Zibo",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 669770
 },
 {
  "id": "3080165",
  "name": "Zielona Gora",
  "tz": "Europe/Warsaw",
  "country": "PL",
  "population": 118433
 },
 {
  "id": "1783745",
  "name": "Zigong",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 689961
 },
 {
  "id": "2243940",
  "name": "Ziguinchor",
  "tz": "Africa/Dakar",
  "country": "SN",
  "population": 159778
 },
 {
  "id": "2437798",
  "name": "Zinder",
  "tz": "Africa/Niamey",
  "country": "NE",
  "population": 191424
 },
 {
  "id": "462444",
  "name": "Zlatoust",
  "tz": "Asia/Yekaterinburg",
  "country": "RU",
  "population": 191366
 },
 {
  "id": "2208485",
  "name": "Zliten",
  "tz": "Africa/Tripoli",
  "country": "LY",
  "population": 109972
 },
 {
  "id": "2743856",
  "name": "Zoetermeer",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 115845
 },
 {
  "id": "737022",
  "name": "Zonguldak",
  "tz": "Europe/Istanbul",
  "country": "TR",
  "population": 100229
 },
 {
  "id": "1783633",
  "name": "Zoucheng",
  "tz": "Asia/Shanghai",
  "country": "CN",
  "population": 190537
 },
 {
  "id": "1783621",
  "name": "Zunyi",
  "tz": "Asia/Chongqing",
  "country": "CN",
  "population": 466292
 },
 {
  "id": "2657896",
  "name": "Zurich",
  "tz": "Europe/Zurich",
  "country": "CH",
  "population": 341730
 },
 {
  "id": "2743477",
  "name": "Zwolle",
  "tz": "Europe/Amsterdam",
  "country": "NL",
  "population": 111805
 },
 {
  "id": "461835",
  "name": "Zyablikovo",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 129000
 },
 {
  "id": "461740",
  "name": "Zyuzino",
  "tz": "Europe/Moscow",
  "country": "RU",
  "population": 121000
 },
 {
  "id": "287830",
  "name": "`Ibri",
  "tz": "Asia/Muscat",
  "country": "OM",
  "population": 101640
 }
]
CITY.source = {"url": "http://download.geonames.org/export/dump/", "file": "cities15000.zip", "min": 100000}
