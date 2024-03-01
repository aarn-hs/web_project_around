const overlay = document.querySelector(".overlay");

const popup = document.querySelector(".popup");
const popupForm = popup.querySelector(".popup__container");
const closeButton = popup.querySelector(".popup__closeIcon");
const popupName = popup.querySelector(".popup__name");
const popupAboutMe = popup.querySelector(".popup__aboutMe");

const profileContainer = document.querySelector(".profile__container");
const editButton = profileContainer.querySelector(".profile__editButton");
const profileName = profileContainer.querySelector(".profile__name");
const profileOccupation = profileContainer.querySelector(
  ".profile__occupation"
);

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

editButton.addEventListener("click", handlePopup);
closeButton.addEventListener("click", handlePopup);
popupForm.addEventListener("submit", handlePopupFormSubmit);
