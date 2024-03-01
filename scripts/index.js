const overlay = document.querySelector(".overlay");

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

//Image popup consts
const imagePopup = document.querySelector(".imagePopup");
const imagePopupPic = imagePopup.querySelector(".imagePopup__picture");
const imagePopupName = imagePopup.querySelector(".imagePopup__placeName");

//Card conts
const card = document.querySelector(".places__item");
const likeButton = card.querySelector(".places__likeButton");
const trashButton = card.querySelector(".places__trash");

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
  popup.classList.toggle("popup_opened");
  overlay.classList.toggle("overlay_deployed");
}

//Popup listeners
editButton.addEventListener("click", handlePopup);
closeButton.addEventListener("click", handlePopup);
popupForm.addEventListener("submit", handlePopupFormSubmit);

//Card listeners
likeButton.addEventListener("click", function (evt) {
  const eventTarget = evt.target;
  eventTarget.classList.toggle("places__likeButton_active");
});
trashButton.addEventListener("click", function () {
  const gonerCard = trashButton.closest(".places__item");
  gonerCard.remove();
});
