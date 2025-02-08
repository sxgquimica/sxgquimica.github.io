document.addEventListener('DOMContentLoaded', function () {
    const accordion = document.querySelector('.accordion');
    var $window = $(window);

    function updateArticleHeight() {
        $window.trigger('resize');
    }

    accordion.addEventListener('shown.bs.collapse', updateArticleHeight);
    accordion.addEventListener('hidden.bs.collapse', updateArticleHeight);
});