jQuery(document).ready(function($){

    $('.main').ready(function(){

        progressbar();
        buttom();

    });

});

function progressbar(){

        var elementos = document.querySelectorAll(".anime");        

        for (var i = elementos.length; i > 0; i--) {

            var percent = $('.anime[data-index="'+ i +'"] .ep').attr('value') / $('.anime[data-index="'+ i +'"] .eps').attr('value') * 100;
            
            $('.anime[data-index="'+ i +'"] .bar').attr('style','background: linear-gradient(to right, #0d0 ' + percent + '%, #ddd ' + percent + '%, #999 );');

            percent2 = $('.anime[data-index="'+ i +'"] .eps').attr('value') * 88 / 200;
            
            $('.anime[data-index="'+ i +'"] .bar').css('width', percent2 + '%');

        }

}

function buttom(){

        var elementos = document.querySelectorAll(".anime");        

        for (var i = elementos.length; i > 0; i--) {
                   
            $('.anime[data-index="'+ i +'"] .subep').attr('onclick','subep(' + i + ')');
            $('.anime[data-index="'+ i +'"] .sumep').attr('onclick','sumep(' + i + ')');
            $('.anime[data-index="'+ i +'"] .subeps').attr('onclick','subeps(' + i + ')');
            $('.anime[data-index="'+ i +'"] .sumeps').attr('onclick','sumeps(' + i + ')');
        }

}

function sumep(anime){

    $('.anime[data-index="'+ anime +'"] .ep').attr('value', Number($('.anime[data-index="'+ anime +'"] .ep').attr('value')) + 1 );
    $('.anime[data-index="'+ anime +'"] .ep').html( Number($('.anime[data-index="'+ anime +'"] .ep').attr('value')) );
    progressbar();

}

function subep(anime){

    $('.anime[data-index="'+ anime +'"] .ep').attr('value', Number($('.anime[data-index="'+ anime +'"] .ep').attr('value')) - 1 );
    $('.anime[data-index="'+ anime +'"] .ep').html( Number($('.anime[data-index="'+ anime +'"] .ep').attr('value')) );
    progressbar();

}

function sumeps(anime){

    $('.anime[data-index="'+ anime +'"] .eps').attr('value', Number($('.anime[data-index="'+ anime +'"] .eps').attr('value')) + 1 );
    $('.anime[data-index="'+ anime +'"] .eps').html( Number($('.anime[data-index="'+ anime +'"] .eps').attr('value')) );
    progressbar();

}

function subeps(anime){

    $('.anime[data-index="'+ anime +'"] .eps').attr('value', Number($('.anime[data-index="'+ anime +'"] .eps').attr('value')) - 1 );
    $('.anime[data-index="'+ anime +'"] .eps').html( Number($('.anime[data-index="'+ anime +'"] .eps').attr('value')) );
    progressbar();

}