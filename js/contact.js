window.addEventListener("DOMContentLoaded", () => {
    (function(){
        emailjs.init("hflJtvdT498YNAjzM");
    })();
    const form = document.getElementById("form-contact");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let username = localStorage.getItem('n');
        let email = localStorage.getItem('e');
        let subject = localStorage.getItem('s'); 
    emailjs.sendForm("service_ijlzlwc", "template_k6tjemp", form)
        .then(() => {
            alert(`Email Sent Successfuly! \nName: ${username}\nEmail: ${email}\nSubject: ${subject}`);
            form.reset();
        }, (err) => {
                alert("Failed to send message. " + JSON.stringify(err));
        });
    });
});