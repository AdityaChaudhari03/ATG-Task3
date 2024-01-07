function submitForm() {
    var submitButton = document.querySelector('.submit-button');

    submitButton.innerText = 'Loading...';
    submitButton.disabled = true;

    setTimeout(function () {
        submitButton.innerText = 'Submit';
        submitButton.disabled = false;
    }, 2000);
}
