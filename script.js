let profileEditBtn = document.querySelector('.profile-info__edit-button');
let profilePopup = document.querySelector('.popup');
let openProfilePopup = document.querySelector('.popup_opened');
let closeProfilePopup = document.querySelector('.popup-content__close-btn');
let profileForm = document.querySelector('.popup-content__form');
let profileName = document.querySelector('.profile-info__name');
let profileProfession = document.querySelector('.profile-info__profession');
let profileNameInput = document.querySelector('.popup-content__input_name');
let profileProfessionInput = document.querySelector('.popup-content__input_profession');
let itemsLike = document.querySelectorAll('.grid-list__item-like');
let itemLiked = document.querySelector('.grid-list__item-like_liked');


function togglePopup() {
    profilePopup.classList.toggle('popup_opened');
}

profileEditBtn.addEventListener("click", togglePopup);
closeProfilePopup.addEventListener("click", togglePopup);

function profileEdit (event) {
    event.preventDefault();
        profileName.textContent = profileNameInput.value;
        profileProfession.textContent = profileProfessionInput.value;
        togglePopup ();    
}

profileForm.addEventListener("submit", profileEdit);

function togglelike() {
itemsLike.forEach((itemLike) => {
    itemLike.addEventListener("click", () => itemLike.classList.toggle('grid-list__item-like_liked'));
})
}

togglelike();