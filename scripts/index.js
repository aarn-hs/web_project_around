const overlay = document.querySelector(".overlay");

const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__closeIcon");

const profileContainer = document.querySelector(".profile__container");
const editButton = profileContainer.querySelector(".profile__editButton");

function handlePopup() {
  popup.classList.toggle("popup_opened");
  overlay.classList.toggle("overlay_deployed");
}

editButton.addEventListener("click", handlePopup);
closeButton.addEventListener("click", handlePopup);
