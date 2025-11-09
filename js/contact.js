window.addEventListener("DOMContentLoaded", () => {
    (function(){
        emailjs.init("hflJtvdT498YNAjzM");
    })();
    const form = document.getElementById("form-contact");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
    emailjs.sendForm("service_ijlzlwc", "template_k6tjemp", form)
        .then(() => {
            alert("Email sent successfuly!");
            form.reset();
        }, (err) => {
                alert("Failed to send message. " + JSON.stringify(err));
        });
    });
});