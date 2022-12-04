$(function () {

    $(function() {
        $('#switch').on('click', function() {
            $('.staff-card').toggleClass('rotate_front').toggleClass('rotate_back');
        });
    });

    const hash = $(location).attr('hash');
    if (hash == "#top") {
        $(".opening").css("display", "none");
    }

    entries = window.performance.getEntriesByType("navigation");
    if (entries[0].type === 'reload') {
        function noscroll(e){
            e.preventDefault();
        }
        document.addEventListener('touchmove', noscroll, {passive: false});
        document.addEventListener('wheel', noscroll, {passive: false});
        $(".opening").css("display", "block");

        setTimeout(() => {
            $('video').fadeOut(1500);
            document.removeEventListener('touchmove', noscroll);
            document.removeEventListener('wheel', noscroll);
            $(".opening").fadeOut("slow");
        }, 3500);
    }
});