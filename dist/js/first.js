var $body = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;


$('#sidebar').affix({
    offset: {
        top: function () {
            var offsetTop = $('#sidebar').offset().top;
            var sideBarMargin = parseInt($('#sidebar').children(0).css('margin-top'), 10);
            var navOuterHeight = $('#masthead').height();

            return (this.top = offsetTop - navOuterHeight - sideBarMargin)
        },
        bottom: function () {
            return (this.bottom = $('footer').outerHeight(true))
        }
    }
});


$body.scrollspy({
    target: '#leftCol',
    offset: navHeight
});

$(function () {
    $('#pop').popover({
        placement: 'bottom',
        title: 'Mark Pohlkamp',
        content: "<a href='mailto:mpohlkamp@partnerps.com'>mpohlkamp@partnerps.com</a>",
        html: 'true'
    });
});