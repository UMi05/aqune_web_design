$(function () {
    function noscroll(e){
        e.preventDefault();
    }
    document.addEventListener('touchmove', noscroll, {passive: false});
    document.addEventListener('wheel', noscroll, {passive: false});
    setTimeout(() => {
        $('video').fadeOut(1000);
        document.removeEventListener('touchmove', noscroll);
        document.removeEventListener('wheel', noscroll);
    }, 3000);

    const hash = $(location).attr('hash');
    if (hash == "#off") {
        $(".opening").css("display", "none");
    }

    entries = window.performance.getEntriesByType("navigation");
    if (entries[0].type === 'reload') {
        $(".opening").css("display", "block");

        setTimeout(() => {
            $('video').fadeOut(1000);
            document.removeEventListener('touchmove', noscroll);
            document.removeEventListener('wheel', noscroll);
            $(".opening").css("display", "none");
        }, 3000);
    }
});
