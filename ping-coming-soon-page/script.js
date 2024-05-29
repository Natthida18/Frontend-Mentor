document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subscribeForm').addEventListener('submit', function(e) {
        e.preventDefault();
        ErrorMessage();
    });
});

function ErrorMessage() {
    var email = document.getElementById('email').value;
    console.log(email);

    if (!email) {
        showError("Please enter your email address.");
        document.getElementById('errorMessage').classList.add('error-margin');
    } else {
        document.getElementById('errorMessage').innerText = "";
        console.log("Form submitted successfully!");
        document.getElementById('subscribeForm').submit();
    }
}

function showError(message) {
    document.getElementById('errorMessage').innerText = message;
}
