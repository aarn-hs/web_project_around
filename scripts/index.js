const overlay = document.querySelector(".overlay");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

//Popup consts
const popup = document.querySelector(".popup");
const popupForm = popup.querySelector(".popup__container");
const closeButton = popup.querySelector(".popup__closeIcon");
const popupName = popup.querySelector(".popup__name");
const popupAboutMe = popup.querySelector(".popup__aboutMe");

//Profile consts
const profileContainer = document.querySelector(".profile__container");
const editButton = profileContainer.querySelector(".profile__editButton");
const profileName = profileContainer.querySelector(".profile__name");
const profileOccupation = profileContainer.querySelector(
  ".profile__occupation"
);
const addButton = document.querySelector(".profile__addButton");
const addButtonLong = document.querySelector(".profile__addButtonLong");

//AddPlace Consts
const addPlacePopup = document.querySelector(".placePopup");
const addPlaceForm = addPlacePopup.querySelector(".placePopup__container");
const addPlaceCloseButton = addPlacePopup.querySelector(
  ".placePopup__closeIcon"
);
const addPlaceCreateButton = addPlacePopup.querySelector(
  ".placePopup__saveButton"
);

//Image popup consts
const imagePopup = document.querySelector(".imagePopup");
const imagePopupPic = imagePopup.querySelector(".imagePopup__picture");
const imagePopupName = imagePopup.querySelector(".imagePopup__placeName");

const placesSection = document.querySelector(".places");

//Popup functions
function handlePopup() {
  popup.classList.toggle("popup_opened");
  overlay.classList.toggle("overlay_deployed");
  popupName.value = profileName.textContent;
  popupAboutMe.value = profileOccupation.textContent;
}

function handlePopupFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileOccupation.textContent = popupAboutMe.value;
  popup.classList.remove("popup_opened");
  overlay.classList.remove("overlay_deployed");
}

//AddPlace functions
function handleAddPlacePopup() {
  addPlacePopup.classList.toggle("placePopup_opened");
  overlay.classList.toggle("overlay_deployed");
}

function handleAddPlacePopupFormSubmit() {
  addPlacePopup.classList.remove("placePopup_opened");
  overlay.classList.remove("overlay_deployed");
}

function addPlace(placePic, placeName) {
  const cardTemplate = document.querySelector(".places__item").content;
  const cardElement = cardTemplate
    .querySelector(".places__container")
    .cloneNode(true);
  const likeButton = cardElement.querySelector(".places__likeButton");
  const trashButton = cardElement.querySelector(".places__trash");

  const picture = cardElement.querySelector(".places__picture");

  cardElement.querySelector(".places__picture").src = placePic;
  cardElement.querySelector(".places__picture").alt = placeName;
  cardElement.querySelector(".places__name").textContent = placeName;

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("places__likeButton_active");
  });

  trashButton.addEventListener("click", function () {
    cardElement.remove();
  });

  picture.addEventListener("click", function () {
    overlay.classList.add("overlay_deployed");
  });

  placesSection.prepend(cardElement);
}

//Popup listeners
editButton.addEventListener("click", handlePopup);
closeButton.addEventListener("click", handlePopup);
popupForm.addEventListener("submit", handlePopupFormSubmit);

//AddPlacePopup listeners
addButton.addEventListener("click", handleAddPlacePopup);
addButtonLong.addEventListener("click", handleAddPlacePopup);
addPlaceCloseButton.addEventListener("click", handleAddPlacePopup);
addPlaceForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const addPlacePic = addPlacePopup.querySelector(".placePopup__link");
  const addPlaceTitle = addPlacePopup.querySelector(".placePopup__name");

  addPlace(addPlacePic.value, addPlaceTitle.value);

  addPlaceTitle.value = "";
  addPlacePic.value = "";
  handleAddPlacePopupFormSubmit();
});

initialCards.forEach((card) => {
  addPlace(card.link, card.name);
});
