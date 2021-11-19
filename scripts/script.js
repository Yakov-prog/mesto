const profileEditBtn = document.querySelector('.profile-info__edit-button');
const profilePopup = document.querySelector('.popup');
const closeProfilePopup = document.querySelector('.popup-content__close-btn');
const profileForm = document.querySelector('.popup-content__form');
const profileName = document.querySelector('.profile-info__name');
const profileProfession = document.querySelector('.profile-info__profession');
const profileNameInput = document.querySelector('.popup-content__input_value_name');
const profileProfessionInput = document.querySelector('.popup-content__input_value_profession');
const itemsLike = document.querySelectorAll('.grid-list__item-like');
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
  
function changeLike(event) {
  event.target.classList.toggle('grid-list__item-like_liked');
} 

function renderPhoto(card) {
    const cloneTemplate = photoTemplate.content.cloneNode(true);
    cloneTemplate.querySelector('.grid-list__item-name').textContent = card.name;
    cloneTemplate.querySelector('.grid-list__image').setAttribute('src', card.link);
    cloneTemplate.querySelector('.grid-list__image').setAttribute('alt', card.name);
    cloneTemplate.querySelector('.grid-list__item-like').addEventListener("click", changeLike);
    photoList.appendChild(cloneTemplate);
}


function openPopup() {
    profileNameInput.value = profileName.textContent;
    profileProfessionInput.value = profileProfession.textContent;
    profilePopup.classList.add('popup_opened');
}

function closePopup() {
    profilePopup.classList.remove('popup_opened');
}

profileEditBtn.addEventListener("click", openPopup);
closeProfilePopup.addEventListener("click", closePopup);

function profileEdit(event) {
    event.preventDefault();
        profileName.textContent = profileNameInput.value;
        profileProfession.textContent = profileProfessionInput.value;
        closePopup ();    
}

profileForm.addEventListener("submit", profileEdit);

photoContent();
