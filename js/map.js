
/* var users = [User1, User2, User3, User4, User5, User6, User7, User8];

User1 = {
  'author': {
    'avatar': img/avatars/user01.png
  },
  'offer': {
    'title': 'Большая уютная квартира',
    'address': '330, 388',
    'price': 20000,
    'type': 'flat',
    'rooms': 5,
    'guests': 15,
    'checkin': '12:00',
    'checkout': '12:00',
    'features':['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
    'description':'',
    'photos': [],
  },
  'location': {
    'x': 330,
    'y': 388,
  },
};

User2 = {
  'author': {
    'avatar': img/avatars/user02.png,
  },
  'offer': {
    'title': 'Маленькая неуютная квартира',
    'address': '450, 450',
    'price': 15000,
    'type': 'flat',
    'rooms': 1,
    'guests': 9,
    'checkin': '13:00',
    'checkout': '12:00',
    'features':['washer', 'elevator', 'conditioner'],
    'description':'',
    'photos': [],
  },
  'location': {
    'x': 450,
    'y': 450,
  },
};

User3 = {
  'author': {
    'avatar': img/avatars/user03.png,
  },
  'offer': {
    'title': 'Маленький ужасный дворец',
    'address': '540, 270',
    'price': 15000,
    'type': 'house',
    'rooms': 3,
    'guests': 10,
    'checkin': '13:00',
    'checkout': '12:00',
    'features':['parking', 'washer', 'conditioner'],
    'description':'',
    'photos': [],
  }
  'location': {
    'x': 540,
    'y': 270,
  },
};

User4 = {
  'author': {
    'avatar': img/avatars/user04.png,
  },
  'offer': {
    'title': 'Огромный прекрасный дворец',
    'address': '500, 150',
    'price': 150000,
    'type': 'house',
    'rooms': 8,
    'guests': 22,
    'checkin': '13:00',
    'checkout': '12:00',
    'features':['parking', 'washer', 'conditioner'],
    'description':'',
    'photos': [],
  }
  'location': {
    'x': 500,
    'y': 150,
  },
};

User5 = {
  'author': {
    'avatar': img/avatars/user05.png,
  },
  'offer': {
    'title': 'Красивый гостевой домик',
    'address': '800, 200',
    'price': 25000,
    'type': 'house',
    'rooms': 1,
    'guests': 8,
    'checkin': '13:00',
    'checkout': '12:00',
    'features':['wifi', 'dishwasher', 'parking', 'washer', 'conditioner'],
    'description':'',
    'photos': [],
  }
  'location': {
    'x': 800,
    'y': 200,
  },
};

User6 = {
  'author': {
    'avatar': img/avatars/user06.png,
  },
  'offer': {
    'title': 'Некрасивый гостевой домик',
    'address': '650, 495',
    'price': 30000,
    'type': 'house',
    'rooms': 1,
    'guests': 8,
    'checkin': '13:00',
    'checkout': '12:00',
    'features':['wifi', 'parking'],
    'description':'',
    'photos': [],
  }
  'location': {
    'x': 650,
    'y': 495,
  },
};

User7 = {
  'author': {
    'avatar': img/avatars/user07.png,
  },
  'offer': {
    'title': 'Уютное бунгало далеко от моря',
    'address': '590, 188',
    'price': 15000,
    'type': 'bungalo',
    'rooms': 1,
    'guests': 4,
    'checkin': '13:00',
    'checkout': '12:00',
    'features':['wifi', 'parking', 'conditioner'],
    'description':'',
    'photos': [],
  }
  'location': {
    'x': 590,
    'y': 188,
  },
};

User8 = {
  'author': {
    'avatar': img/avatars/user08.png,
  },
  'offer': {
    'title': 'Неуютное бунгало по колено в воде',
    'address': '790, 588',
    'price': 20000,
    'type': 'bungalo',
    'rooms': 1,
    'guests': 4,
    'checkin': '13:00',
    'checkout': '12:00',
    'features':['wifi', 'parking', 'conditioner'],
    'description':'',
    'photos': [],
  }
  'location': {
    'x': 790,
    'y': 588,
  },
};*/
var avatarMassif = ['01', '02', '03', '04', '05', '06', '07', '08'];
var comfort = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var featuresMassif = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var entry = ['12:00', '13:00', '14:00'];
var departure = ['12:00', '13:00', '14:00'];
var typeMassif = ['flat', 'house', 'bungalo'];

function getRandomNumber(from, to) {
  return Math.floor((Math.random() * (to - from + 1)) + from);
}

function getRandomValue(n) {
  return Math.floor(Math.random() * n.length);
}

function getRandomMassif(c) {
  var b = Math.floor(Math.random() * c.length);
  c.length = b;
  return c;
}


var users = [];
for (var i = 0; i < 8; i++) {
  var avatar = getRandomValue(avatarMassif);
  var title = getRandomValue(comfort);
  var checkin = getRandomValue(entry);
  var checkout = getRandomValue(departure);
  var features = getRandomMassif(featuresMassif);
  var type = getRandomValue(typeMassif);
  var xMap = getRandomNumber(300, 900);
  var yMap = getRandomNumber(100, 500);
  var User = {
    author: {
      avatar: 'img/avatars/user' + avatarMassif[avatar] + '.png'
    },
    offer: {
      title: comfort[title],
      address: xMap + ', ' + yMap,
      price: getRandomNumber(1000, 1000000),
      type: typeMassif[type],
      rooms: getRandomNumber(1, 5),
      quests: getRandomNumber(2, 15),
      checkin: entry[checkin],
      checkout: departure[checkout],
      features: features,
      description: '',
      photos: []
    },
    location: {
      x: xMap,
      y: yMap
    }
  };
  avatarMassif.splice(avatar, 1);
  comfort.splice(title, 1);
  users.push(User);
}

var tokyo = document.querySelector('.tokyo__pin-map');
var fragment = document.createDocumentFragment();
for (var j = 0; j < 8; j++) {
  var newElement = document.createElement('div');
  newElement.className = 'pin';
  newElement.style.left = users[j].location.x + 'px';
  newElement.style.top = users[j].location.y + 'px';
  newElement.innerHTML = '<img src=' + users[j].author.avatar + ' class=rounded width=' + 40 + ' height=' + 40 + '>';
  fragment.appendChild(newElement);
}


tokyo.appendChild(fragment);
