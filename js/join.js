let id = $('#id');
let pw = $('#pw');
let btn = $('#btn');
let email = $('#email');
let tel = $('#tel');
let nam = $('#name');

$(btn).on('click', function() {
    if($(nam).val() == "") {
        $(nam).next('label').addClass('warning');
        setTimeout(function() {
            $('label').removeClass('warning');
        },1500);
    }
    else if($(id).val() == "") {
        $(id).next('label').addClass('warning');
        setTimeout(function() {
            $('label').removeClass('warning');
        },1500);
    } 
    else if($(pw).val() == "") {
        $(pw).next('label').addClass('warning');
        setTimeout(function() {
            $('label').removeClass('warning');
        },1500);
    } else if($(email).val() == "") {
        $(email).next('label').addClass('warning');
        setTimeout(function() {
            $('label').removeClass('warning');
        },1500);
    } else if($(tel).val() == "") {
        $(tel).next('label').addClass('warning');
        setTimeout(function() {
            $('label').removeClass('warning');
        },1500);
    }
});
