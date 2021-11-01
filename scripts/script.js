let profileEditBtn = document.querySelector('.profile-info__edit-button');
let profilePopup = document.querySelector('.popup');
let closeProfilePopup = document.querySelector('.popup-content__close-btn');
let profileForm = document.querySelector('.popup-content__form');
let profileName = document.querySelector('.profile-info__name');
let profileProfession = document.querySelector('.profile-info__profession');
let profileNameInput = document.querySelector('.popup-content__input_value_name');
let profileProfessionInput = document.querySelector('.popup-content__input_value_profession');
let itemsLike = document.querySelectorAll('.grid-list__item-like');
// let itemLiked = document.querySelector('.grid-list__item-like_liked');


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

/* function togglelike() {
itemsLike.forEach((itemLike) => {
    itemLike.addEventListener("click", () => itemLike.classList.toggle('grid-list__item-like_liked'));
})
}

togglelike(); */

