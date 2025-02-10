document.addEventListener('DOMContentLoaded', function () {
    var $window = $(window);
    const accordions = ["#accordion-news", "#accordion-directivas"];

    accordions.forEach(function (accordion_name, index) {
        var accordion = document.querySelector(accordion_name);

        function updateArticleHeight() {
            // console.log("TRIGGERING RESIZE")
            $window.trigger('resize');
        }

        accordion.addEventListener('shown.bs.collapse', function (event) {
            // console.log("Accordion item hidden:", event.target);
            updateArticleHeight();
        });
        accordion.addEventListener('hidden.bs.collapse', function (event) {
            // console.log("Accordion item hidden:", event.target);
            updateArticleHeight();
        });
    });
});