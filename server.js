const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
 
app.use(cors())

app.use(express.static('public'))

const queens = {
// repeats
    'shangela laquifa wadley': {
        'dragName': 'Mystique Summers Madison',
        'seasons':[ 2 , 3 ],
        'age': 28,
        'outcomess':[ '12th' , '6th']
    },
// seasons 1 ],
    'bebe zahara benet': {
        'dragName': 'BeBe Zahara Benet',
        'seasons':[ 1 ],
        'age': 28,
        'outcomess':[ 'Winner' ]
    },
    'nina flowers': {
        'dragName': 'Nina Flowers',
        'seasons':[ 1 ],
        'age': 34,
        'outcomess':[ 'Runner-up' ]
    },
    'rebecca glasscock': {
        'dragName': 'Rebecca Glasscock',
        'seasons':[ 1 ],
        'age': 26,
        'outcomess':[ '3rd' ]
    },
    'shannel': {
        'dragName': 'Shannel',
        'seasons':[ 1 ],
        'age': 29,
        'outcomess':[ '4th' ]
    },
    'ongina': {
        'dragName': 'Ongina',
        'seasons':[ 1 ],
        'age': 26,
        'outcomess':[ '5th' ]
    },
    'jade sotomayor': {
        'dragName': 'Jade Sotomayor',
        'seasons':[ 1 ],
        'age': 25,
        'outcomess':[ '6th' ]
    },
    'akashia': {
        'dragName': 'Akashia',
        'seasons':[ 1 ],
        'age': 24,
        'outcomess':[ '7th' ]
    },
    'tammie brown': {
        'dragName': 'Tammie Brown',
        'seasons':[ 1 ],
        'age': 29,
        'outcomess':[ '8th' ]
    },
    'victoria "porkchop" parker': {
        'dragName': 'Victoria "Porkchop" Parker',
        'seasons':[ 1 ],
        'age': 39,
        'outcomess':[ '9th' ]
    },
// seasons 2 
    'tyra sanchez': {
        'dragName': 'Tyra Sanchez',
        'seasons':[ 2 ],
        'age': 21,
        'outcomess':[ 'Winner' ]
    },
    'raven': {
        'dragName': 'Raven',
        'seasons':[ 2 ],
        'age': 30,
        'outcomess':[ 'Runner-up' ]
    },
    'jujubee': {
        'dragName': 'Jujubee',
        'seasons':[ 2 ],
        'age': 25,
        'outcomess':[ '3rd' ]
    },
    'tatianna': {
        'dragName': 'Tatianna',
        'seasons':[ 2 ],
        'age': 21,
        'outcomess':[ '4th' ]
    },
    'pandora box': {
        'dragName': 'Pandora Box',
        'seasons':[ 2 ],
        'age': 37,
        'outcomess':[ '5th (Miss Congeniality)' ]
    },
    'jessica wild': {
        'dragName': 'Jessica Wild',
        'seasons':[ 2 ],
        'age': 29,
        'outcomess':[ '6th' ]
    },
    'sahara davenport': {
        'dragName': 'Sahara Davenport',
        'seasons':[ 2 ],
        'age': 25,
        'outcomess':[ '7th' ]
    },
    'morgan mcmichaels': {
        'dragName': 'Morgan McMichaels',
        'seasons':[ 2 ],
        'age': 28,
        'outcomess':[ '8th' ]
    },
    'sonique': {
        'dragName': 'Sonique',
        'seasons':[ 2 ],
        'age': 26,
        'outcomess':[ '9th' ]
    },
    'mystique summers madison': {
        'dragName': 'Mystique Summers Madison',
        'seasons':[ 2 ],
        'age': 25,
        'outcomess':[ '10th' ]
    },
    'nicole paige brooks': {
        'dragName': 'Nicole Paige Brooks',
        'seasons':[ 2 ],
        'age': 36,
        'outcomess':[ '11th' ]
    },
    // 'shangela laquifa wadley': {
    //     'dragName': 'Mystique Summers Madison',
    //     'seasons':[ 2 ],
    //     'age': 28,
    //     'outcomess':[ '12th' ]
    // },
// seasons 3 ],
    'raja': {
        'dragName': 'Raja',
        'seasons':[ 3 ],
        'age': 36,
        'outcomess':[ 'Winner' ]
    },
    'manila luzon': {
        'dragName': 'Manila Luzon',
        'seasons':[ 3 ],
        'age': 28,
        'outcomess':[ 'Runner-up' ]
    },
    'alexis mateo': {
        'dragName': 'Alexis Mateo',
        'seasons':[ 3 ],
        'age': 30,
        'outcomess':[ '3rd' ]
    },
    'yara sofia': {
        'dragName': 'Yara Sofia',
        'seasons':[ 3 ],
        'age': 26,
        'outcomess':[ '4th (Miss Congeniality)' ]
    },
    'carmen carrera': {
        'dragName': 'Carmen Carrera',
        'seasons':[ 3 ],
        'age': 25,
        'outcomess':[ '5th' ]
    },
    // 'shangela': {
    //     'dragName': 'Shangela',
    //     'seasons':[ 3 ],
    //     'age': 29,
    //     'outcomess':[ '6th' ]
    // },
    'delta work': {
        'dragName': 'Delta Work',
        'seasons':[ 3 ],
        'age': 34,
        'outcomess':[ '7th' ]
    },
    'stacy layne matthews': {
        'dragName': 'Stacy Layne Matthews',
        'seasons':[ 3 ],
        'age': 25,
        'outcomess':[ '8th' ]
    },
    'mariah': {
        'dragName': 'Mariah',
        'seasons':[ 3 ],
        'age': 29,
        'outcomess':[ '9th' ]
    },
    'india ferrah': {
        'dragName': 'India Ferrah',
        'seasons':[ 3 ],
        'age': 23,
        'outcomess':[ '10th' ]
    },
    'mimi imfurst': {
        'dragName': 'Mimi Imfurst',
        'seasons':[ 3 ],
        'age': 27,
        'outcomess':[ '11th' ]
    },
    'phoenix': {
        'dragName': 'Phoenix',
        'seasons':[ 3 ],
        'age': 29,
        'outcomess':[ '12th' ]
    },
    'venus d-lite': {
        'dragName': 'Venus D-Lite',
        'seasons':[ 3 ],
        'age': 26,
        'outcomess':[ '13th' ]
    },
// seasons 4 ],
    'sharon needles': {
      'dragName': 'Sharon Needles',
      'seasons':[ 4 ],
      'age': 29,
      'outcomess':[ 'Winner' ]
    },
    'chad michaels': {
      'dragName': 'Chad Michaels',
      'seasons':[ 4 ],
      'age': 40,
      'outcomess':[ 'Runner-up' ]
    },
    "phi phi o'hara": {
        'dragName': "Phi Phi O'Hara",
        'seasons':[ 4 ],
        'age': 25,
        'outcomess':[ 'Runner-up' ]
      },
    'latrice royale': {
      'dragName': 'Latrice Royale',
      'seasons':[ 4 ],
      'age': 39,
      'outcomess':[ '4th (Miss Congeniality)' ]
    },
    'kenya michaels': {
        'dragName': 'Kenya Michaels',
        'seasons':[ 4 ],
        'age': 21,
        'outcomess':[ '5th' ]
      },
    'dida ritz': {
      'dragName': 'Dida Ritz',
      'seasons':[ 4 ],
      'age': 25,
      'outcomess':[ '6th' ]
    },
    'willam': {
        'dragName': 'Willam',
        'seasons':[ 4 ],
        'age': 29,
        'outcomess':[ '7th (Disqualified)' ]
      },
    'milan': {
      'dragName': 'Milan',
      'seasons':[ 4 ],
      'age': 36,
      'outcomess':[ '9th' ]
    },
    'madame laqueer': {
      'dragName': 'Madame LaQueer',
      'seasons':[ 4 ],
      'age': 29,
      'outcomess':[ '10th' ]
    },
    'the princess': {
      'dragName': 'The Princess',
      'seasons':[ 4 ],
      'age': 31,
      'outcomess':[ '11th' ]
    },
    'lashauwn beyond': {
      'dragName': 'Lashauwn Beyond',
      'seasons':[ 4 ],
      'age': 21,
      'outcomess':[ '12th' ]
    },
    'alisa summers': {
      'dragName': 'Alisa Summers',
      'seasons':[ 4 ],
      'age': 23,
      'outcomess':[ '13th' ]
    },
// seasons 5 ],
    'jinkx monsoon': {
        'dragName': 'Jinkx Monsoon',
        'seasons':[ 5 ],
        'age': 25,
        'outcomess':[ 'Winner' ]
      },
      'alaska thunderfuck': {
        'dragName': 'Alaska Thunderfuck',
        'seasons':[ 5 ],
        'age': 27,
        'outcomess':[ 'Runner-up' ]
      },
      'roxxxy andrews': {
        'dragName': 'Roxxxy Andrews',
        'seasons':[ 5 ],
        'age': 28,
        'outcomess':[ 'Runner-Up' ]
      },
      'detox': {
        'dragName': 'Detox',
        'seasons':[ 5 ],
        'age': 27,
        'outcomess':[ '4th' ]
      },
      'coco montrese': {
        'dragName': 'Coco Montrese',
        'seasons':[ 5 ],
        'age': 37,
        'outcomess':[ '5th' ]
      },
      'alyssa edwards': {
        'dragName': 'Alyssa Edwards',
        'seasons':[ 5 ],
        'age': 32,
        'outcomess':[ '6th' ]
      },
      'ivy winters': {
        'dragName': 'Ivy Winters',
        'seasons':[ 5 ],
        'age': 26,
        'outcomess':[ '7th (Miss Congeniality)'  ]
      },
      'jade jolie': {
        'dragName': 'Jade Jolie',
        'seasons':[ 5 ],
        'age': 25,
        'outcomess':[ '8th' ]
      },
      'lineysha sparx': {
        'dragName': 'Lineysha Sparx',
        'seasons':[ 5 ],
        'age': 24,
        'outcomess':[ '9th' ]
      },
      'honey mahogany': {
        'dragName': 'Honey Mahogany',
        'seasons':[ 5 ],
        'age': 29,
        'outcomess':[ '10th/11th (Double Elimination)' ]
      },
      'vivienne pinay': {
        'dragName': 'Vivienne Pinay',
        'seasons':[ 5 ],
        'age': 26,
        'outcomess':[ '10th/11th (Double Elimination)' ]
      },
      'monica beverly hillz': {
        'dragName': 'Monica Beverly Hillz',
        'seasons':[ 5 ],
        'age': 27,
        'outcomess':[ '12th' ]
      },
      'serena chacha': {
        'dragName': 'Serena ChaCha',
        'seasons':[ 5 ],
        'age': 21,
        'outcomess':[ '13th' ]
      },
      'penny tration': {
        'dragName': 'Penny Tration',
        'seasons':[ 5 ],
        'age': 39,
        'outcomess':[ '14th' ]
      },
// seasons 6 ],
    'bianca del rio': {
      'dragName': 'Bianca Del Rio',
      'seasons':[ 6 ],
      'age': 38,
      'outcomess':[ 'Winner' ]
    },
    'adore delano': {
      'dragName': 'Adore Delano',
      'seasons':[ 6 ],
      'age': 23,
      'outcomess':[ 'Runner-up' ]
    },
    'courtney act': {
      'dragName': 'Courtney Act',
      'seasons':[ 6 ],
      'age': 33,
      'outcomess':[ 'Runner-up' ]
    },
    'darienne lake': {
      'dragName': 'Darienne Lake',
      'seasons':[ 6 ],
      'age': 41,
      'outcomess':[ '4th' ]
    },
    'ben dela creme': {
      'dragName': 'BenDeLaCreme',
      'seasons':[ 6 ],
      'age': 31,
      'outcomess':[ '5th (Miss Congeniality)' ]
    },
    'joslyn fox': {
      'dragName': 'Joslyn Fox',
      'seasons':[ 6 ],
      'age': 26,
      'outcomess':[ '6th' ]
    },
    'trinity k. bonet': {
      'dragName': 'Trinity K. Bonet',
      'seasons':[ 6 ],
      'age': 22,
      'outcomess':[ '7th' ]
    },
    'laganja estranja': {
        'dragName': 'Laganja Estranja',
        'seasons':[ 6 ],
        'age': 24,
        'outcomess':[ '8th' ]
    },
    'milk': {
      'dragName': 'Milk',
      'seasons':[ 6 ],
      'age': 25,
      'outcomess':[ '9th' ]
    },
    'gia gunn': {
      'dragName': 'Gia Gunn',
      'seasons':[ 6 ],
      'age': 22,
      'outcomess':[ '10th' ]
    },
    'april carrion': {
      'dragName': 'April Carrión',
      'seasons':[ 6 ],
      'age': 23,
      'outcomess':[ '11th' ]
    },
    'vivacious': {
      'dragName': 'Vivacious',
      'seasons':[ 6 ],
      'age': 40,
      'outcomess':[ '12th' ]
    },
    'magnolia crawford': {
      'dragName': 'Magnolia Crawford',
      'seasons':[ 6 ],
      'age': 28,
      'outcomess':[ '13th' ]
    },
    'kelly mantle': {
        'dragName': 'Kelly Mantle',
        'seasons':[ 6 ],
        'age': 37,
        'outcomess':[ '14th' ]
    },
// seasons 7 ],
  'violet chachki': {
    'dragName': 'Violet Chachki',
    'seasons': [ 6 ],
    'realName': 'Jason Dardo',
    'age': 22,
    'hometown': 'Atlanta, Georgia',
    'outcomes': [ 'Winner' ],
  },
  'ginger minj': {
    'dragName': 'Ginger Minj',
    'seasons': [ 6 ],
    'realName': 'Joshua Eads-Brown',
    'age': 29,
    'hometown': 'Orlando, Florida',
    'outcomes': [ 'Runner-up' ],
  },
  'pearl': {
    'dragName': 'Pearl',
    'seasons': [ 6 ],
    'realName': 'Matthew Lent',
    'age': 23,
    'hometown': 'Brooklyn, New York',
    'outcomes': [ 'Runner-up' ],
  },
  'kennedy davenport': {
    'dragName': 'Kennedy Davenport',
    'seasons': [ 6 ],
    'realName': 'Reuben Asberry Jr.',
    'age': 33,
    'hometown': 'Dallas, Texas',
    'outcomes': [ '4th' ],
  },
  'katya': {
    'dragName': 'Katya',
    'seasons': [ 6 ],
    'realName': 'Brian McCook',
    'age': 32,
    'hometown': 'Boston, Massachusetts',
    'outcomes': [ '5th (Miss Congeniality)' ],
  },
  'trixie mattel': {
    'dragName': 'Trixie Mattel',
    'seasons': [ 6 ],
    'realName': 'Brian Firkus',
    'age': 24,
    'hometown': 'Milwaukee, Wisconsin',
    'outcomes': [ '6th (Originally 11th but returned Episode 8)' ],
  },
  'miss fame': {
    'dragName': 'Miss Fame',
    'seasons': [ 6 ],
    'realName': 'Kurtis Dam-Mikkelsen',
    'age': 29,
    'hometown': 'New York City, New York',
    'outcomes': [ '7th' ],
  },
  'jaidynn diore fierce': {
    'dragName': 'Jaidynn Diore Fierce',
    'seasons': [ 6 ],
    'realName': 'Christopher Caldwell',
    'age': 25,
    'hometown': 'Nashville, Tennessee',
    'outcomes': [ '8th' ],
  },
  'max': {
    'dragName': 'Max',
    'seasons': [ 6 ],
    'realName': 'Maxwell Heller',
    'age': 22,
    'hometown': 'Hudson, Wisconsin',
    'outcomes': [ '9th' ],
  },
  'kandy ho': {
    'dragName': 'Kandy Ho',
    'seasons': [ 6 ],
    'realName': 'Franklin Arbot',
    'age': 28,
    'hometown': 'Cayey, Puerto Rico',
    'outcomes': [ '10th' ],
  },
  'mrs. kasha davis': {
    'dragName': 'Mrs. Kasha Davis',
    'seasons': [ 6 ],
    'age': 43,
    'hometown': 'Rochester, New York',
    'outcomes': [ '11th' ],
  },
  'mrs. kasha davis': {
    'dragName': 'Mrs. Kasha Davis',
    'seasons': [ 6 ],
    'age': 43,
    'hometown': 'Los Angeles, California',
    'outcomes': [ '12th' ],
  },
  'sasha belle': {
    'dragName': 'Sasha Belle',
    'seasons': [ 6 ],
    'realName': 'Jared Breakenridge',
    'age': 28,
    'hometown': 'Iowa City, IA',
    'outcomes': [ '13th' ],
  },
  'tempest dujour': {
    'dragName': 'Tempest DuJour',
    'seasons': [ 6 ],
    'realName': 'Patrick Holt',
    'age': 47,
    'hometown': 'Tucson, Arizona',
    'outcomes': [ '14th' ],
  },
// seasons 8 ],
  'bob the drag queen': {
    'dragName': 'Bob The Drag Queen',
    'season': 8,
    'age': 29,
    'outcomes': [
      'Winner',
    ]
  },
  'kim chi': {
    'dragName': 'Kim Chi',
    'season': 8,
    'age': 27,
    'outcomes': [
      'Runner-up',
    ]
  },
  'naomi smalls': {
    'dragName': 'Naomi Smalls',
    'season': 8,
    'age': 21,
    'outcomes': [
      'Runner-up'
    ]
  },
  'chi chi devayne': {
    'dragName': 'Chi Chi DeVayne',
    'season': 8,
    'age': 29,
    'outcomes': [
      '4th'
    ]
  },
  'derrick barry': {
    'dragName': 'Derrick Barry',
    'season': 8,
    'age': 32,
    'outcomes': [
      '5th'
    ]
  },
  'thorgy thor': {
    'dragName': 'Thorgy Thor',
    'season': 8,
    'age': 31,
    'outcomes': [
      '6th'
    ]
  },
  'robbie turner': {
    'dragName': 'Robbie Turner',
    'season': 8,
    'age': 33,
    'outcomes': [
      '7th'
    ]
  },
  'acid betty': {
    'dragName': 'Acid Betty',
    'season': 8,
    'age': 38,
    'outcomes': [
      '8th'
    ]
  },
  'naysha lopez': {
    'dragName': 'Naysha Lopez',
    'season': 8,
    'age': 31,
    'outcomes': [
      '9th (Originally 12th but returned Episode 3)'
    ]
  },
  'cynthia lee fontaine': {
    'dragName': 'Cynthia Lee Fontaine',
    'season': 8,
    'age': 34,
    'outcomes': [
      '10th (Miss Congeniality)'
    ]
  },
  'laila mcqueen': {
    'dragName': 'Laila McQueen',
    'season': 8,
    'age': 22,
    'outcomes': [
      '11th/12th (Double Elimination)'
    ]
  },
  'dax exclamationpoint': {
    'dragName': 'Dax ExclamationPoint',
    'season': 8,
    'age': 31,
    'outcomes': [
      '11th/12th (Double Elimination)'
    ]
  },
// season 9 
  'sasha velour': {
    'dragName': 'Sasha Velour',
    'season': 9,
    'age': 29,
    'outcomes': ['Winner']
  },
  'peppermint': {
    'dragName': 'Peppermint',
    'season': 9,
    'age': 37,
    'outcomes': ['Runner-up']
  },
  'shea coulee': {
    'dragName': 'Shea Coulee',
    'season': 9,
    'age': 27,
    'outcomes': ['3rd']
  },
  'trinity taylor': {
    'dragName': 'Trinity Taylor',
    'season': 9,
    'age': 31,
    'outcomes': ['4th']
  },
  'alexis michelle': {
    'dragName': 'Alexis Michelle',
    'season': 9,
    'age': 33,
    'outcomes': [ '5th' ]
  },
  "nina bo'nina brown": {
    'dragName': "Nina Bo'nina Brown",
    'season': 9,
    'age': 34,
    'outcomes': ['6th']
  },
  'valentina': {
    'dragName': 'Valentina',
    'season': 9,
    'age': 25,
    'outcomes': ['7th (Miss Congeniality)']
  },
  'farrah moan': {
    'dragName': 'Farrah Moan',
    'season': 9,
    'age': 23,
    'outcomes': ['8th']
  },
  'aja': {
    'dragName': 'Aja',
    'season': 9,
    'age': 22,
    'outcomes': ['9th']
  },
  'cynthia lee fontaine': {
    'dragName': 'Cynthia Lee Fontaine',
    'season': 9,
    'age': 35,
    'outcomes': ['10th']
  },
  "eureka o'hara": {
    'dragName': "Eureka O'Hara",
    'season': 9,
    'age': 26,
    'outcomes': ['11th (Due to Injury)']
  },
  'charlie hides': {
    'dragName': 'Charlie Hides',
    'season': 9,
    'age': 52,
    'outcomes': ['12th']
  },
  'kimora blac': {
    'dragName': 'Kimora Blac',
    'season': 9,
    'age': 28,
    'outcomes': ['13th']
  },
  'jaymes mansfield': {
    'dragName': 'Jaymes Mansfield',
    'season': 9,
    'age': 26,
    'outcomes': ['14th']
  },

// seasons 1[ ],
  'aquaria': {
    'dragName': 'Aquaria',
    'season': 10,
    'age': 22,
    'outcomes': ['Winner']
  },
  'asia o’hara': {
    'dragName': 'Asia O’Hara',
    'season': 10,
    'age': 35,
    'outcomes': ['Runner-up']
  },
  'eureka o’hara': {
    'dragName': 'Eureka O’Hara',
    'season': 10,
    'age': 27,
    'outcomes': ['3rd/4th']
  },
  'kameron michaels': {
    'dragName': 'Kameron Michaels',
    'season': 10,
    'age': 31,
    'outcomes': ['3rd/4th']
  },
  'asia t. o’hara': {
    'dragName': 'Asia T. O’Hara',
    'season': 10,
    'age': 35,
    'outcomes': ['5th']
  },
  'monét x change': {
    'dragName': 'Monét X Change',
    'season': 10,
    'age': 27,
    'outcomes': ['6th']
  },
  'blair st. clair': {
    'dragName': 'Blair St. Clair',
    'season': 10,
    'age': 22,
    'outcomes': ['7th']
  },
  'the vixen': {
    'dragName': 'The Vixen',
    'season': 10,
    'age': 26,
    'outcomes': ['8th']
  },
  'monique heart': {
    'dragName': 'Monique Heart',
    'season': 10,
    'age': 31,
    'outcomes': ['9th']
  },
  'dusty ray bottoms': {
    'dragName': 'Dusty Ray Bottoms',
    'season': 10,
    'age': 29,
    'outcomes': ['10th']
  },
  'mayhem miller': {
    'dragName': 'Mayhem Miller',
    'season': 10,
    'age': 35,
    'outcomes': ['11th']
  },
  'yuhua hamasaki': {
    'dragName': 'Yuhua Hamasaki',
    'season': 10,
    'age': 27,
    'outcomes': ['12th']
  },
  'kalorie karbdashian-williams': {
    'dragName': 'Kalorie Karbdashian-Williams',
    'season': 10,
    'age': 27,
    'outcomes': ['13th']
  },
  'vanessa vanjie mateo': {
    'dragName': 'Vanessa Vanjie Mateo',
    'season': 10,
    'age': 26,
    'outcomes': ['14th']
  },
// season 10
'aquaria': {
  'dragName': 'Aquaria',
  'season': 10,
  'age': 21,
  'outcomes': ['Winner']
},
'eureka o’hara': {
  'dragName': 'Eureka O’Hara',
  'season': 10,
  'age': 27,
  'outcomes': ['Runner-up']
},
'kameron michaels': {
  'dragName': 'Kameron Michaels',
  'season': 10,
  'age': 31,
  'outcomes': ['Runner-up']
},
'asia o’hara': {
  'dragName': 'Asia O’Hara',
  'season': 10,
  'age': 35,
  'outcomes': ['4th']
},
'miz cracker': {
  'dragName': 'Miz Cracker',
  'season': 10,
  'age': 33,
  'outcomes': ['5th']
},
'monét x change': {
  'dragName': 'Monét X Change',
  'season': 10,
  'age': 27,
  'outcomes': ['6th (Miss Congeniality)']
},
'the vixen': {
  'dragName': 'The Vixen',
  'season': 10,
  'age': 26,
  'outcomes': ['7th']
},
'monique heart': {
  'dragName': 'Monique Heart',
  'season': 10,
  'age': 31,
  'outcomes': ['8th']
},
'blair st. clair': {
  'dragName': 'Blair St. Clair',
  'season': 10,
  'age': 22,
  'outcomes': ['9th']
},
'mayhem miller': {
  'dragName': 'Mayhem Miller',
  'season': 10,
  'age': 35,
  'outcomes': ['10th']
},
'dusty ray bottoms': {
  'dragName': 'Dusty Ray Bottoms',
  'season': 10,
  'age': 29,
  'outcomes': ['11th']
},
'yuhua hamasaki': {
  'dragName': 'Yuhua Hamasaki',
  'season': 10,
  'age': 27,
  'outcomes': ['12th']
},
'kalorie karbdashian-williams': {
  'dragName': 'Kalorie Karbdashian-Williams',
  'season': 10,
  'age': 27,
  'outcomes': ['13th']
},
'vanessa vanjie mateo': {
  'dragName': 'Vanessa Vanjie Mateo',
  'season': 10,
  'age': 26,
  'outcomes': ['14th']
},
// season 11
'yvie oddly': {
  'dragName': 'Yvie Oddly',
  'season': 11,
  'age': 24,
  'hometown': 'Denver, Colorado',
  'outcomes': ['Winner']
},
'brooke lynn hytes': {
  'dragName': 'Brooke Lynn Hytes',
  'season': 11,
  'age': 32,
  'hometown': 'Nashville, TN',
  'outcomes': ['Runner-up']
},
"a'keria davenport": {
  'dragName': "A'keria Chanel Davenport",
  'season': 11,
  'age': 30,
  'hometown': 'Dallas, Texas',
  'outcomes': ['3rd']
},
'silky nutmeg ganache': {
  'dragName': 'Silky Nutmeg Ganache',
  'season': 11,
  'age': 28,
  'hometown': 'Chicago, Illinois',
  'outcomes': ['4th'],
},
'vanessa vanjie mateo': {
  'dragName': 'Vanessa Vanjie Mateo',
  'season': 11,
  'age': 26,
  'hometown': 'Tampa, Flordia',
  'outcomes': ['5th']
},
'nina west': {
  'dragName': 'Nina West',
  'season': 11,
  'age': 39,
  'hometown': 'Columbus, Ohio',
  'outcomes': ['6th (Miss Congeniality)']
},
'shuga cain': {
  'dragName': 'Shuga Cain',
  'season': 11,
  'age': 40,
  'hometown': 'New York City, New York',
  'outcomes': ['7th']
},
'plastique tiara': {
  'dragName': 'Plastique Tiara',
  'season': 11,
  'age': 21,
  'hometown': 'Dallas, Texas',
  'outcomes': ['8th']
},
"ra'jah o'hara": {
  'dragName': "Ra'Jah O'Hara",
  'season': 11,
  'age': 33,
  'hometown': 'Dallas, Texas',
  'outcomes': ['9th']
},
'scarlet envy': {
  'dragName': 'Scarlet Envy',
  'season': 11,
  'age': 26,
  'hometown': 'Brooklyn, New York',
  'outcomes': ['10th']
},
'ariel versace': {
  'dragName': 'Ariel Versace',
  'season': 11,
  'age': 26,
  'hometown': 'Cherry Hill, New Jersey',
  'outcomes': ['11th']
},
'mercedes iman diamond': {
  'dragName': 'Mercedes Iman Diamond',
  'season': 11,
  'age': 31,
  'hometown': 'Minneapolis, MN',
  'outcomes': ['12th']
},
'honey davenport': {
  'dragName': 'Honey Davenport',
  'season': 11,
  'age': 32,
  'hometown': 'New York City, NY',
  'outcomes': ['13th']
},
'kahanna montrese': {
  'dragName': 'Honey Davenport',
  'season': 11,
  'age': 25,
  'hometown': 'Las Vegas, Nevada',
  'outcomes': ['14th']
},
'soju': {
  'dragName': 'Soju',
  'season': 11,
  'age': 27,
  'hometown': 'Chicago, Illinois',
  'outcomes': ['15th']
},
//season 12
'akeria c. davenport': {
  'dragName': 'A'keria C. Davenport',
  'season': 12,
  'age': 32,
  'hometown': 'Dallas, TX',
  'outcomes': ['3rd/4th']
},
'aiden zhane': {
  'dragName': 'Aiden Zhane',
  'season': 12,
  'age': 29,
  'hometown': 'Acworth, GA',
  'outcomes': ['9th']
},
'brita': {
  'dragName': 'Brita',
  'season': 12,
  'age': 34,
  'hometown': 'New York City, NY',
  'outcomes': ['8th']
},
'crystal methyd': {
  'dragName': 'Crystal Methyd',
  'season': 12,
  'age': 28,
  'hometown': 'Springfield, MO',
  'outcomes': ['2nd']
},
'dahlia sin': {
  'dragName': 'Dahlia Sin',
  'season': 12,
  'age': 28,
  'hometown': 'Los Angeles, CA',
  'outcomes': ['13th']
},
'gigi goode': {
  'dragName': 'Gigi Goode',
  'season': 12,
  'age': 22,
  'hometown': 'Los Angeles, CA',
  'outcomes': ['Runner-up']
},
'heidi n closet': {
  'dragName': 'Heidi N Closet',
  'season': 12,
  'age': 24,
  'hometown': 'Ramseur, NC',
  'outcomes': ['4th']
},
'jackie cox': {
  'dragName': 'Jackie Cox',
  'season': 12,
  'age': 34,
  'hometown': 'New York City, NY',
  'outcomes': ['5th']
},
'jaida essence hall': {
  'dragName': 'Jaida Essence Hall',
  'season': 12,
  'age': 34,
  'hometown': 'Milwaukee, WI',
  'outcomes': ['Winner']
},
'jan': {
  'dragName': 'Jan',
  'season': 12,
  'age': 26,
  'hometown': 'New York City, NY',
  'outcomes': ['7th']
},
'nicky doll': {
  'dragName': 'Nicky Doll',
  'season': 12,
  'age': 28,
  'hometown': 'New York City, NY',
  'outcomes': ['6th']
},
'rock m. sakura': {
  'dragName': 'Rock M. Sakura',
  'season': 12,
  'age': 28,
  'hometown': 'San Francisco, CA',
  'outcomes': ['11th']
},
'sherry pie': {
  'dragName': 'Sherry Pie',
  'season': 12,
  'age': 27,
  'hometown': 'New York City, NY',
  'outcomes': ['Disqualified']
},
"widow von'du": {
  'dragName': "Widow Von'Du",
  'season': 12,
  'age': 30,
  'hometown': 'Kansas City, MO',
  'outcomes': ['6th']
}
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const queenName = request.params.name.toLowerCase()

    if( queens[queenName] ){
        response.json(queens[queenName])
    }
    else{
        function searchQueens(queenName) {
            const maybes = [];
            for (const queen in queens) {
              if (queen.includes(queenName)) {
                maybes.push(queens[queen]);
              }
            }
            return maybes[0];
          }
        response.json(searchQueens(queenName))
    }
    
})
app.get('/js/main.js', (req, res)=>{
    res.setHeader('Content-Type', 'text/javascript')
    res.sendFile( __dirname + '/js/main.js')
})

app.get('/css/style.css', (req, res)=>{
    res.sendFile( __dirname + '/css/style.css')
})
app.get('/public/images/crown.png', (req, res)=>{
    res.sendFile( __dirname + '/public/images/crown.png')
})
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})