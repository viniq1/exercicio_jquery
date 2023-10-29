$(document).ready(function(){
    $('header button').click(function(Slide){
        $('form').slideDown();
    })
    $('#recolher').click(function(){
        $('form').slideUp();
    })
})


$('form').on('submit', function(e){
    e.preventDefault();
    const novaTarefa = $('input').val();
    const $novaLinha = $('<li>').text(novaTarefa).appendTo('ul');
    $novaLinha.on('click', function(){
    const $linha = $(this);
    $linha.toggleClass('tachado');
});
$('input').val('');
})
