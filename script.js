const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", function () {

        // to close other flipped card
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove("flipped");
            }
        });

        // flip the selected card
        card.classList.toggle("flipped");

    });

});