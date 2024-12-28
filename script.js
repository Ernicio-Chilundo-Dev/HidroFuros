document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault()

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name && email && message){
        document.getElementById("contactForm").innerHTML = "Obrigado, "+ name + "! Entraremos em contato em breve.";
        this.reset();
    }else{
        document.getElementById("contactForm").innerHTML = "Por favor, preencha todos os campos corretamente.";
    }
})