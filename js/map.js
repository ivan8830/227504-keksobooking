'use strict';
var USERS = 8;
var MIN_X_COORDINATE = 300;
var MAX_X_COORDINATE = 900;
var MIN_Y_COORDINATE = 100;
var MAX_Y_COORDINATE = 500;
var PRICE_MIN = 1000;
var PRICE_MAX = 1000000;
var ROOMS_MIN = 1;
var ROOMS_MAX = 5;
var GUESTS_MIN = 2;
var GUESTS_MAX = 15;
var WIDTH = 40;
var HEIGHT = 40;
var avatars = ['01', '02', '03', '04', '05', '06', '07', '08'];
var offerTitles = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var featuresArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var entry = ['12:00', '13:00', '14:00'];
var departure = ['12:00', '13:00', '14:00'];
var types = ['flat', 'house', 'bungalo'];

function getRandomNumber(from, to) {
  return Math.floor((Math.random() * (to - from + 1)) + from);
}

function getRandomValue(n) {
  return Math.floor(Math.random() * n.length);
}

function getRandomArr(c) {
  var b = getRandomValue(c);
  var f = c.slice(-b);
  return f;
}


var users = [];
for (var i = 0; i < USERS; i++) {
  var avatar = getRandomValue(avatars);
  var title = getRandomValue(offerTitles);
  var checkin = getRandomValue(entry);
  var checkout = getRandomValue(departure);
  var features = getRandomArr(featuresArr);
  var type = getRandomValue(types);
  var xMap = getRandomNumber(MIN_X_COORDINATE, MAX_X_COORDINATE);
  var yMap = getRandomNumber(MIN_Y_COORDINATE, MAX_Y_COORDINATE);
  var User = {
    author: {
      avatar: 'img/avatars/user' + avatars[avatar] + '.png'
    },
    offer: {
      title: offerTitles[title],
      address: xMap + ', ' + yMap,
      price: getRandomNumber(PRICE_MIN, PRICE_MAX),
      type: types[type],
      rooms: getRandomNumber(ROOMS_MIN, ROOMS_MAX),
      guests: getRandomNumber(GUESTS_MIN, GUESTS_MAX),
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
  avatars.splice(avatar, 1);
  offerTitles.splice(title, 1);
  users.push(User);
}

function getDocument(f) {
  return document.querySelector(f);
}

var tokyo = getDocument('.tokyo__pin-map');
var fragment = document.createDocumentFragment();
for (var j = 0; j < USERS; j++) {
  var newElement = document.createElement('div');
  newElement.className = 'pin';
  newElement.style.left = users[j].location.x - WIDTH / 2 + 'px';
  newElement.style.top = users[j].location.y - HEIGHT + 'px';
  newElement.innerHTML = '<img src="' + users[j].author.avatar + '" class="rounded" width="' + WIDTH + '" height="' + HEIGHT + '">';
  fragment.appendChild(newElement);
}
tokyo.appendChild(fragment);


var newPanel = getDocument('.dialog__panel');
var template = getDocument('#lodge-template').content.querySelector('.dialog__panel');
var element = template.cloneNode(true);
newPanel.appendChild(element);

var userTitle = getDocument('.lodge__address');
var newTitle = users[1].offer.title;
userTitle.textContent = newTitle;

var userAddress = getDocument('.lodge__address');
var newAddress = users[1].offer.address;
userAddress.textContent = newAddress;

var userPrice = getDocument('.lodge__price');
var newPrice = users[1].offer.price + '&#x20bd;/ночь';
userPrice.textContent = newPrice;

var userType = getDocument('.lodge__type');
var newType;
if (users[1].offer.type === 'flat') {
  newType = 'Квартира';
} else if (users[1].offer.type === 'house') {
  newType = 'Дом';
} else {
  newType = 'Бунгало';
}
userType.textContent = newType;

var userRoomsGuests = getDocument('.lodge__rooms-and-guests');
var newRoomsGuests = 'Для ' + users[1].offer.guests + ' гостей в ' + users[1].offer.rooms + ' комнатах';
userRoomsGuests.textContent = newRoomsGuests;

var userCheckInOut = getDocument('.lodge__checkin-time');
var newCheckInOut = 'Заезд после ' + users[1].offer.checkin + ', выезд до ' + users[1].offer.checkout;
userCheckInOut.textContent = newCheckInOut;

var userFeatures = getDocument('.lodge__features');
var newFeatures = users[1].offer.features;
var fragmentFeatures = document.createDocumentFragment();
for (var k = 0; k < newFeatures.length; k++) {
  var newElementFeatures = document.createElement('span');
  newElementFeatures.className = '.feature__image feature__image--' + newFeatures[i];
  fragmentFeatures.appendChild(newElementFeatures);
}
userFeatures.appendChild(fragmentFeatures);

var userDescription = getDocument('.lodge__description');
var newDescription = users[1].offer.description;
userDescription.textContent = newDescription;

var userAvatar = getDocument('.dialog__title');
userAvatar.innerHTML = '<img src="' + users[1].author.avatar + '" alt="Avatar" width="' + 70 + '" height="' + 70 + '">';
