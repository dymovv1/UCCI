function validateInput(inputElement, regex) {
    const inputValue = inputElement.value.trim();
    const errorElement = inputElement.nextElementSibling;

    if (!inputValue.match(regex) || inputValue === '') {
        inputElement.classList.add('input-error');
        errorElement.style.display = 'block';
        return false;
    } else {
        inputElement.classList.remove('input-error');
        errorElement.style.display = 'none';
        return true;
    }
}

function validateTelInput(inputElement, regex) {
    const inputValue = inputElement.value.trim();
    const errorElement = inputElement.nextElementSibling;

    if (!inputValue.match(regex) || inputValue.length < 9) {
        inputElement.classList.add('input-error');
        errorElement.style.display = 'block';
        return false;
    } else {
        inputElement.classList.remove('input-error');
        errorElement.style.display = 'none';
        return true;
    }
}

function ValidateForm(form, nameRegex, emailRegex, telRegex) {
    let isFormValid = true;

    const nameInputs = form.querySelectorAll('.input-name');
    nameInputs.forEach(input => {
        if (!validateInput(input, nameRegex)) {
            isFormValid = false;
        }
    });

    const emailInput = form.querySelector('.input-email');
    if (!validateInput(emailInput, emailRegex)) {
        isFormValid = false;
    }

    const telInput = form.querySelector('.input-tel');
    if (!validateTelInput(telInput, telRegex)) {
        isFormValid = false;
    }

    return isFormValid;
}

function handleFormSubmit(event) {
    const form = event.target.closest('form');
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telRegex = /^[A-Za-z\d\s\-()+]+$/;

    if (validateForm(form, nameRegex, emailRegex, telRegex)) {
        console.log('Форму можна відправити.');
        closeModal(); // Закрити модальне вікно
    } else {
        console.log('Будь ласка, перевірте правильність введених даних.');
    }
}
function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}


function handleModalOpen(event) {
    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';
}

function handleModalClose() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

const submitButtons = document.querySelectorAll('.submit-btn');
submitButtons.forEach(button => {
    button.addEventListener('click', handleFormSubmit);
});

const registerButtons = document.querySelectorAll('.btn-registration');
registerButtons.forEach(button => {
    button.addEventListener('click', handleModalOpen);
});

const closeButton = document.querySelector('.modal-btn__close');
closeButton.addEventListener('click', handleModalClose);


function openModalTextarea() {
    const modalTextarea = document.querySelector('.modal-textarea__hidden');
    modalTextarea.style.display = 'flex';
}

function closeModalTextarea() {
    const modalTextarea = document.querySelector('.modal-textarea__hidden');
    modalTextarea.style.display = 'none';
}

const modalTextareaButton = document.querySelector('.modal-btn__textarea');
modalTextareaButton.addEventListener('click', function() {
    closeModalTextarea();
});

function validateForm(form, nameRegex, emailRegex, telRegex) {
    let isFormValid = true;

    const nameInputs = form.querySelectorAll('.input-name');
    nameInputs.forEach(input => {
        if (!validateInput(input, nameRegex)) {
            isFormValid = false;
        }
    });

    const emailInput = form.querySelector('.input-email');
    if (!validateInput(emailInput, emailRegex)) {
        isFormValid = false;
    }

    const telInput = form.querySelector('.input-tel');
    if (!validateTelInput(telInput, telRegex)) {
        isFormValid = false;
    }

    if (isFormValid) {
        openModalTextarea();
    }

    return isFormValid;
}
