const flipButtons = document.querySelectorAll(".flip-btn");

flipButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".card");

        card.classList.toggle("flipped");

    });

});

const popup = document.getElementById("discountPopup");
const closePopup = document.getElementById("closePopup");

// Show popup after 4 seconds

window.addEventListener("load", () => {

    setTimeout(() => {

        popup.classList.add("show");

    }, 4000);

});

closePopup.addEventListener("click", () => {

    popup.classList.remove("show");

});

popup.addEventListener("click", (event) => {

    if(event.target === popup){

        popup.classList.remove("show");

    }

});

let totalSeconds = 24 * 60 * 60;

const countdown = document.getElementById("countdown");

function updateCountdown(){

    const hours = Math.floor(totalSeconds / 3600);

    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const seconds = totalSeconds % 60;

    countdown.textContent =
        String(hours).padStart(2,"0") + ":" +
        String(minutes).padStart(2,"0") + ":" +
        String(seconds).padStart(2,"0");

    if(totalSeconds > 0){

        totalSeconds--;

    }

}

updateCountdown();

setInterval(updateCountdown,1000);

const popupButton = document.querySelector(".popup-btn");

popupButton.addEventListener("click", function(e){

    e.preventDefault();

    popup.classList.remove("show");

    document.querySelector("#trips").scrollIntoView({

        behavior:"smooth"

    });

});

const heroButton = document.querySelector(".btn");

heroButton.addEventListener("click", function(e){

    e.preventDefault();

    document.querySelector("#trips").scrollIntoView({

        behavior:"smooth"

    });

});

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        if(section){

            section.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});