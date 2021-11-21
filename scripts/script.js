const profileEditBtn = document.querySelector('.profile-info__edit-button');
const profilePopup = document.querySelector('.profile-popup');
const profileForm = document.querySelector('.profile-popup__profile-form');
const closeProfilePopupBtn = document.querySelector('.popup__close_place_profile');
const profileName = document.querySelector('.profile-info__name');
const profileProfession = document.querySelector('.profile-info__profession');
const profileNameInput = document.querySelector('.popup-content__input_value_name');
const profileProfessionInput = document.querySelector('.popup-content__input_value_profession');
const cardPopup = document.querySelector('.popup_matter_card');
const cardEditBtn = document.querySelector('.profile__add-button');
const cardCloseBtn = document.querySelector('.popup__close_place_card');
const cardFormContent = document.querySelector('.popup-content__form_card');
const cardNameInput = document.querySelector('.popup-content__input_value_card');
const cardLinkInput = document.querySelector('.popup-content__input_value_link');
const imagePopup = document.querySelector('.popup_matter_image');
const imagePopupName = document.querySelector('.modal-content__name');
const imagePopupPicture = document.querySelector('.modal-content__picture');
const imagePopupClose = document.querySelector('.popup__close_place_picture');
const photoList = document.querySelector('.grid-list');
const photoTemplate = document.querySelector('.grid-list__template');
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

function fillPhotoContent() {
  initialCards.forEach((initialCard) => {
    renderPhoto(initialCard);
})
}
  
function toggleLike(event) {
  event.target.classList.toggle('grid-list__item-like_liked');
} 

function removeItem(event) {
  event.target.closest('.grid-list__item').remove();
}

function createCard(item) {
  const cloneTemplate = photoTemplate.content.cloneNode(true);
  cloneTemplate.querySelector('.grid-list__item-name').textContent = item.name;
  cloneTemplate.querySelector('.grid-list__image').setAttribute('src', item.link);
  cloneTemplate.querySelector('.grid-list__image').setAttribute('alt', item.name);
  setEventListeners(cloneTemplate);
  return cloneTemplate;
}

function renderPhoto(card) {
   const cloneTemplate = createCard(card)
    photoList.prepend(cloneTemplate);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function setEventListeners(element) {
    element.querySelector('.grid-list__item-like').addEventListener("click", toggleLike);
    element.querySelector('.grid-list__item-delete').addEventListener("click", removeItem);
    element.querySelector('.grid-list__image').addEventListener("click", openImagePop);
}

function openImagePop(event) {
    const imageSr = event.target.getAttribute("src");
    const imageName = event.target.getAttribute("alt")
    imagePopupPicture.setAttribute('src', imageSr);
    imagePopupPicture.setAttribute('alt', imageName);
    imagePopupName.textContent = imageName;
    openPopup(imagePopup);
}

imagePopupClose.addEventListener("click", closeImagePop);

function closeImagePop() {
  closePopup(imagePopup);
}

cardFormContent.addEventListener("submit", cardEdit);

function cardEdit (event) {
  event.preventDefault();
  const newCards = {
      name: cardNameInput.value,
      link: cardLinkInput.value
    };
    renderPhoto(newCards);
    cardNameInput.value = "";
    cardLinkInput.value = "";
    closeCardPopup();   
}

function openProfilePopup() {
    profileNameInput.value = profileName.textContent;
    profileProfessionInput.value = profileProfession.textContent;
    openPopup(profilePopup);
}

function closeProfilePopup() {
    closePopup(profilePopup);
}

profileEditBtn.addEventListener("click", openProfilePopup);
closeProfilePopupBtn.addEventListener("click", closeProfilePopup);

function profileEdit(event) {
    event.preventDefault();
        profileName.textContent = profileNameInput.value;
        profileProfession.textContent = profileProfessionInput.value;
        closeProfilePopup();    
}

function openCardPopup() {
  openPopup(cardPopup);
}

function closeCardPopup() {
  closePopup(cardPopup);
}

cardEditBtn.addEventListener("click", openCardPopup);
cardCloseBtn.addEventListener("click", closeCardPopup);

profileForm.addEventListener("submit", profileEdit);

fillPhotoContent();
