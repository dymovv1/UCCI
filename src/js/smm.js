const buttons = document.querySelectorAll('.about-aside__btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach((btn) => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".about-accordion-btn");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const section = button.closest("section");
            const activeElements = section.querySelectorAll(".active-mobile");

            activeElements.forEach((element) => {
                if (element.style.display === "block") {
                    element.style.display = "none";
                    button.classList.remove("checked");
                } else {
                    element.style.display = "block";
                    button.classList.add("checked");
                }
            });
        });
    });
});



