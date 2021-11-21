const profileEditBtn = document.querySelector('.profile-info__edit-button');
const profilePopup = document.querySelector('.popup');
const profileForm = document.querySelector('.popup-content__form');
const closeProfilePopup = document.querySelector('.popup-content__close-btn');
const profileName = document.querySelector('.profile-info__name');
const profileProfession = document.querySelector('.profile-info__profession');
const profileNameInput = document.querySelector('.popup-content__input_value_name');
const profileProfessionInput = document.querySelector('.popup-content__input_value_profession');
const cardPopup = document.querySelector('.popup_matter_card');
const cardEditBtn = document.querySelector('.profile__add-button');
const cardCloseBtn = document.querySelector('.popup-content__close-btn_card');
const cardFormContent = document.querySelector('.popup-content__form_card');
const cardNameInput = document.querySelector('.popup-content__input_value_card');
const cardLinkInput = document.querySelector('.popup-content__input_value_link');
const imagePopup = document.querySelector('.popup_matter_image');
const imagePopupName = document.querySelector('.modal-content__name');
const imagePopupPicture = document.querySelector('.modal-content__picture');
const imagePopupClose = document.querySelector('.popup-content__close-btn_modal');
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

function photoContent() {
  initialCards.forEach((initialCard) => {
    renderPhoto(initialCard);
})
}
  
function toggleLike(event) {
  event.target.classList.toggle('grid-list__item-like_liked');
} 

function removeItem (event) {
  event.target.closest('.grid-list__item').remove();
}

function renderPhoto(card) {
    const cloneTemplate = photoTemplate.content.cloneNode(true);
    cloneTemplate.querySelector('.grid-list__item-name').textContent = card.name;
    cloneTemplate.querySelector('.grid-list__image').setAttribute('src', card.link);
    cloneTemplate.querySelector('.grid-list__image').setAttribute('alt', card.name);
    setEventListeners(cloneTemplate);
    photoList.prepend(cloneTemplate);
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
    imagePopupName.textContent = imageName;
    imagePopup.classList.add('popup_opened');
}

imagePopupClose.addEventListener("click", closeImagePop);

function closeImagePop() {
  imagePopup.classList.remove('popup_opened');
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
    closePopup ();   
}

function openPopup() {
    profileNameInput.value = profileName.textContent;
    profileProfessionInput.value = profileProfession.textContent;
    profilePopup.classList.add('popup_opened');
}

function closePopup() {
    profilePopup.classList.remove('popup_opened');
    closeCardPopup();
}

profileEditBtn.addEventListener("click", openPopup);
closeProfilePopup.addEventListener("click", closePopup);

function profileEdit(event) {
    event.preventDefault();
        profileName.textContent = profileNameInput.value;
        profileProfession.textContent = profileProfessionInput.value;
        closePopup ();    
}

function openCardPopup() {
  cardPopup.classList.add('popup_opened');
}

function closeCardPopup() {
  cardPopup.classList.remove('popup_opened');
}

cardEditBtn.addEventListener("click", openCardPopup);
cardCloseBtn.addEventListener("click", closeCardPopup);

profileForm.addEventListener("submit", profileEdit);

photoContent();
