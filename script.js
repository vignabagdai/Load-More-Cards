$(document).ready(function () {
    AOS.init();


    $('.card-col').slice(0, 3).show();
    $('#btnMore').click(function (e) {
        e.preventDefault(); // Prevent default is use to cancel the event if it is cancellable

        $('.card-col:hidden').slice(0, 3).fadeIn('slow');
        if ($('.card-col:hidden').length == 0) {
            $('#btnMore').fadeIn('slow');
            $('#btnMore').text('No More').addClass('noMore')
        }
    });
});