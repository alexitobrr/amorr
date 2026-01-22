// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// the tutorial starts here

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true



btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
})
    /***** Corazones grandes cayendo en tu blog *****/
    if (typeof jQuery == 'undefined') {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.onload = function() {
        var $pdj = jQuery.noConflict();
        initializeHearts($pdj);
    };
    document.head.appendChild(script);
    } else {
    var $pdj = jQuery.noConflict();
    initializeHearts($pdj);
    }

    function initializeHearts($pdj) {
    $pdj(document).ready(function () {
        var c = $pdj(window).width();
        var d = $pdj(window).height();
        var e = function (a, b) {
        return Math.round(a + (Math.random() * (b - a)));
        };
        var f = function (a) {
        setTimeout(function () {
            a.css({ left: e(0, c) + 'px', top: '-30px', display: 'block', opacity: '0.' + e(10, 100) }).animate({ top: (d - 10) + 'px' }, e(8500, 10000), function () {
            $pdj(this).fadeOut('slow', function () {
                f(a);
            });
            });
        }, e(1, 9000));
        };
        $pdj('<div></div>').attr('id', 'corazonDiv').css({ position: 'fixed', width: (c - 20) + 'px', height: '1px', left: '0px', top: '-5px', display: 'block' }).appendTo('body');
        for (var i = 1; i <= 15; i++) {
        var g = $pdj('<img/>').attr('src', image_urls['corazon']).css({ position: 'absolute', left: e(0, c) + 'px', top: '-30px', display: 'block', opacity: '0.' + e(10, 100), 'margin-left': 0 }).addClass('corazonDrop').appendTo('#corazonDiv');
        f(g);
        g = null;
        }
        var h = 0;
        var j = 0;
        $pdj(window).resize(function () {
        c = $pdj(window).width();
        d = $pdj(window).height();
        });
    });
    }
    if (!image_urls) {
    var image_urls = Array();
    }
    if (!flash_urls) {
    var flash_urls = Array();
    }
    image_urls['corazon'] = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUpShk9o_F_cdxYKkop8C1EcAcwyDh5J-wEXLXgSKjbjdnQTgu1Fp_MxSuXlv04X5viMn-i54V1I1hENhxLcBBpWeHa7vdbnjU8rFLRMTu9WmSoQpn8IJH5dYgfUcWg0DkHlw_z-a5PXU/s32/heart.png";
    $pdj(document).ready(function () {
    var c = $pdj(window).width();
    var d = $pdj(window).height();
    var e = function (a, b) {
        return Math.round(a + (Math.random() * (b - a)));
    };
    var f = function (a) {
        setTimeout(function () {
        a.css({ left: e(0, c) + 'px', top: '-30px', display: 'block', opacity: '0.' + e(10, 100) }).animate({ top: (d - 10) + 'px' }, e(8500, 10000), function () {
            $pdj(this).fadeOut('slow', function () {
            f(a);
            });
        });
        }, e(1, 9000));
    };
    $pdj('<div></div>').attr('id', 'corazonDiv').css({ position: 'fixed', width: (c - 20) + 'px', height: '1px', left: '0px', top: '-5px', display: 'block' }).appendTo('body');
    for (var i = 1; i <= 15; i++) {
        var g = $pdj('<img/>').attr('src', image_urls['corazon']).css({ position: 'absolute', left: e(0, c) + 'px', top: '-30px', display: 'block', opacity: '0.' + e(10, 100), 'margin-left': 0 }).addClass('corazonDrop').appendTo('#corazonDiv');
        f(g);
        g = null;
    }
    var h = 0;
    var j = 0;
    $pdj(window).resize(function () {
        c = $pdj(window).width();
        d = $pdj(window).height();
    });
    });
    