var users = [User1, User2, User3, User4, User5, User6, User7, User8];

User1 = {
  'author': {
    'avatar': url=img/avatars/user01.png
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
    'description':,
    'photos': [],
  },
  'location': {
    'x': 330,
    'y': 388,
  },
};

User2 = {
  'author': {
    'avatar': url=img/avatars/user02.png,
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
    'description':,
    'photos': [],
  },
  'location': {
    'x': 450,
    'y': 450,
  },
};

User3 = {
  'author': {
    'avatar': url=img/avatars/user03.png,
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
    'description':,
    'photos': [],
  }
  'location': {
    'x': 540,
    'y': 270,
  },
};

User4 = {
  'author': {
    'avatar': url=img/avatars/user04.png,
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
    'description':,
    'photos': [],
  }
  'location': {
    'x': 500,
    'y': 150,
  },
};

User5 = {
  'author': {
    'avatar': url=img/avatars/user05.png,
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
    'description':,
    'photos': [],
  }
  'location': {
    'x': 800,
    'y': 200,
  },
};

User6 = {
  'author': {
    'avatar': url=img/avatars/user06.png,
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
    'description':,
    'photos': [],
  }
  'location': {
    'x': 650,
    'y': 495,
  },
};

User7 = {
  'author': {
    'avatar': url=img/avatars/user07.png,
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
    'description':,
    'photos': [],
  }
  'location': {
    'x': 590,
    'y': 188,
  },
};

User8 = {
  'author': {
    'avatar': url=img/avatars/user08.png,
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
    'description':,
    'photos': [],
  }
  'location': {
    'x': 790,
    'y': 588,
  },
};

var tokyo = document.querySelector('.tokyo__pin-map');

var secondElementHTML = '<div class='pin' style='left: 330px; top: 380px;'><img src="img/avatars/user01.png" class="rounded"' +
'width="40" height="40"></div>';

tokyo.insertAdjacentHTML('beforeend', secondElementsHTML);

var tokyo = document.querySelector('.tokyo__pin-map');

var secondElementHTML = '<div class='pin' style='left: 450px; top: 450px;'><img src="img/avatars/user02.png" class="rounded"' +
'width="40" height="40"></div>';

tokyo.insertAdjacentHTML('beforeend', secondElementsHTML);

var tokyo = document.querySelector('.tokyo__pin-map');

var secondElementHTML = '<div class='pin' style='left: 540px; top: 270px;'><img src="img/avatars/user03.png" class="rounded"' +
'width="40" height="40"></div>';

tokyo.insertAdjacentHTML('beforeend', secondElementsHTML);

var tokyo = document.querySelector('.tokyo__pin-map');

var secondElementHTML = '<div class='pin' style='left: 500px; top: 150px;'><img src="img/avatars/user04.png" class="rounded"' +
'width="40" height="40"></div>';

tokyo.insertAdjacentHTML('beforeend', secondElementsHTML);

var tokyo = document.querySelector('.tokyo__pin-map');

var secondElementHTML = '<div class='pin' style='left: 800px; top: 200px;'><img src="img/avatars/user05.png" class="rounded"' +
'width="40" height="40"></div>';

tokyo.insertAdjacentHTML('beforeend', secondElementsHTML);

var tokyo = document.querySelector('.tokyo__pin-map');

var secondElementHTML = '<div class='pin' style='left: 650px; top: 495px;'><img src="img/avatars/user06.png" class="rounded"' +
'width="40" height="40"></div>';

tokyo.insertAdjacentHTML('beforeend', secondElementsHTML);

var tokyo = document.querySelector('.tokyo__pin-map');

var secondElementHTML = '<div class='pin' style='left: 590px; top: 188px;'><img src="img/avatars/user07.png" class="rounded"' +
'width="40" height="40"></div>';

tokyo.insertAdjacentHTML('beforeend', secondElementsHTML);

var tokyo = document.querySelector('.tokyo__pin-map');

var secondElementHTML = '<div class='pin' style='left: 790px; top: 588px;'><img src="img/avatars/user08.png" class="rounded"' +
'width="40" height="40"></div>';

tokyo.insertAdjacentHTML('beforeend', secondElementsHTML);
