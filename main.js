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
$('#email').mask('exemple@exemple.com', {
    placeholder: 'exemple@exemple.com'
})
$('#CPF').mask('000.000.000-00', {
    placeholder: '000.000.000-00'
})

$('form').validate ({
    rules: {
        nome: {required: true},
        email: {required: true, email: true},
        telefone: {required: true, minlength: 14},
        CPF: {required: true, minlength: 14},
        Adress: {required: true},
        ZIP: {required: true, minlength: 8}
    },
    messages: {
        nome: `Please, insert your name here`,
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalid();
    if(camposIncorretos) {
        alert(`There is ${camposIncorretos} an incorrect field`)}
    }
})
})
