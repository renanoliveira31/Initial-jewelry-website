$(document).ready(function(){
    
    $('#carrosel-imagens').slick({
        autoplay: true,
        slidesToShow: 1,
        autoplaySpeed: 1500,
        arrows: false
    });
    $('#carrosel-imagens').css({
        'width': '35%',
        'margin-right': '5%'
    });
    $('#carrosel-imagens img').css({
        'width': '50px','height': 'auto'});
    $('.menu-hamburguer').click(function()
{
    $('nav').slideToggle();
})
$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(xx) xxxxx-xxxx'
})
$('#CPF').mask('000.000.000-00', {
    placeholder: '000.000.000-00'
})
$('#ZIP').mask('00000-000', {
    placeholder: '_____-___'
});

$('form').validate({
    rules: {
        nome: {required: true},
        email: {required: true, email: true},
        telefone: {required: true, minlength: 14},
        CPF: {required: true, minlength: 11},
        Adress: {required: true, minlength: 14},
        ZIP: {required: true, minlength: 8}
    },
    messages: {
        nome: "Please, insert your name here",
        email: "Please, insert a valid email address",
        telefone: "Please, insert a valid phone number",
        CPF: "Please, insert a valid ID",
        Adress: "Please, insert your complete address",
        ZIP: "Please, insert a valid postal code"
    },
    submitHandler: function(form) {
        console.log(form);
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalid();
        if (camposIncorretos) {
            alert(`Há ${camposIncorretos} campo(s) incorreto(s)`);
        }
    }
});
})
