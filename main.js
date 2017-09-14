function lockDiv(firstTarget, secondTarget) {
    let topPosition = $('#aboutBody').offset().top;
    let lockedOffset = firstTarget.offset().top;
    let endPosition = secondTarget.offset().top + secondTarget.outerHeight() - $(window).height();
    if ($(window).scrollTop() >= endPosition) {
        firstTarget.css({
            'position':'absolute',
            'top': secondTarget.outerHeight() - $(window).height()
        });
    } else if (lockedOffset <= $(window).scrollTop()
        && lockedOffset >= secondTarget.offset().top) {
        firstTarget.css({
            'position':'fixed',
            'top':'0'
        });
    } else if (lockedOffset === endPosition && $(window).height() <= $(window).scrollTop()) {
        firstTarget.css({
            'position':'fixed',
            'top':'0'
        });
    } else {
        firstTarget.css({
            'position':'absolute',
            'top':'0'
        });
    }
}

function moveBackground() {
    let increment = 100 / $(window).height() * $(window).scrollTop();
    console.log(increment);
    $('.welcomeHeader').css({'background-position':'50% ' + Math.floor(increment) + '%'});
}

$(window).on('scroll', function() {
    lockDiv($('#aboutTitle'), $('#aboutBody'));
    lockDiv($('#workTitle'), $('#workBody'));
    moveBackground();
    $('#gear1').css('animation-play-state','running');
    $('#gear2').css('animation-play-state','running');
});

const gearTimer = setInterval(function(){
    $('#gear1').css('animation-play-state','paused');
    $('#gear2').css('animation-play-state','paused');
}, 100);