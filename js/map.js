'use strict';
var USERS_AMOUNT = 8;
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
var PIN_WIDTH = 40;
var PIN_HEIGHT = 40;
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
  var p = c.slice(-b);
  return p;
}

function getElement(f) {
  return document.querySelector(f);
}

function renderPins() {
  var fragmentPins = document.createDocumentFragment();
  for (var j = 0; j < USERS_AMOUNT; j++) {
    var newElement = document.createElement('div');
    newElement.className = 'pin';
    newElement.style.left = users[j].location.x - PIN_WIDTH / 2 + 'px';
    newElement.style.top = users[j].location.y - PIN_HEIGHT + 'px';
    newElement.setAttribute('tabindex', '0');
    newElement.setAttribute('data-user', j);
    newElement.innerHTML = '<img src="' + users[j].author.avatar + '" class="rounded" width="' + PIN_WIDTH + '" height="' + PIN_HEIGHT + '">';
    fragmentPins.appendChild(newElement);
  }
  return fragmentPins;
}

function renderFeatures(l) {
  var fragmentFeatures = document.createDocumentFragment();
  for (var k = 0; k < l.length; k++) {
    var newElementFeatures = document.createElement('span');
    newElementFeatures.className = '.feature__image feature__image--' + l[i];
    fragmentFeatures.appendChild(newElementFeatures);
  }
  return fragmentFeatures;
}

function renderDialogPanel(j) {
  var userTitle = getElement('.lodge__title');
  var newTitle = users[j].offer.title;
  userTitle.textContent = newTitle;

  var userAddress = getElement('.lodge__address');
  var newAddress = users[j].offer.address;
  userAddress.textContent = newAddress;

  var userPrice = getElement('.lodge__price');
  var newPrice = users[j].offer.price + '&#x20bd;' + '/ночь';
  userPrice.textContent = newPrice;

  var userType = getElement('.lodge__type');
  var newType;
  if (users[j].offer.type === 'flat') {
    newType = 'Квартира';
  } else if (users[j].offer.type === 'house') {
    newType = 'Дом';
  } else {
    newType = 'Бунгало';
  }
  userType.textContent = newType;

  var userRoomsGuests = getElement('.lodge__rooms-and-guests');
  var newRoomsGuests = 'Для ' + users[j].offer.guests + ' гостей в ' + users[j].offer.rooms + ' комнатах';
  userRoomsGuests.textContent = newRoomsGuests;

  var userCheckInOut = getElement('.lodge__checkin-time');
  var newCheckInOut = 'Заезд после ' + users[j].offer.checkin + ', выезд до ' + users[j].offer.checkout;
  userCheckInOut.textContent = newCheckInOut;

  var userFeatures = getElement('.lodge__features');
  var newFeatures = users[j].offer.features;
  userFeatures.appendChild(renderFeatures(newFeatures));

  var userDescription = getElement('.lodge__description');
  var newDescription = users[j].offer.description;
  userDescription.textContent = newDescription;

  var userAvatar = getElement('.dialog__title > img');
  userAvatar.setAttribute('src', users[j].author.avatar);


}

var users = [];
for (var i = 0; i < USERS_AMOUNT; i++) {
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

var tokyo = getElement('.tokyo__pin-map');
tokyo.appendChild(renderPins());

var newPanel = getElement('.dialog__panel');
var template = getElement('#lodge-template').content.querySelector('.dialog__panel');
var element = template.cloneNode(true);
var number = getRandomNumber(0, 7);
newPanel.appendChild(renderDialogPanel(number));

var pinElements = document.querySelectorAll('.pin');
var pinOpen = getElement('.dialog');
var pinClose = getElement('.dialog__close');

var pinOpenClickHandler = function (evt) {
  if (pinElements === 'pin--active') {
    pinElements.classList.remove('pin--active');
    pinOpen.classList.add('hidden');
  }

  pinElements = evt.currentTarget;
  pinElements.classList.add('pin--active');
  pinElements.classList.add('.dialog');
  pinOpen.classList.remove('hidden');
  newPanel.replaceChild(renderDialogPanel(0), renderDialogPanel(pinElements.dataset.user));
};

var pinCloseClickHandler = function () {
  pinElements.classList.remove('pin--active');
  pinOpen.classList.add('hidden');
};

for (var h = 0; h < pinElements.length; h++) {
  pinElements[h].addEventListener('click', pinOpenClickHandler);
}

pinClose.addEventListener('click', pinCloseClickHandler);
