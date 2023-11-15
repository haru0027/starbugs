// <!-- txt slide -->
$(document).ready(function () {
    $(".txt-slide").bxSlider({
        mode: 'vertical',
        auto: true,
        pager: false,
        controls: false,
        infiniteLoop: true,
        touchEnabled: (navigator.maxTouchPoints > 0),
    });
    //  <!-- 메뉴 슬라이드 -->
    let menuslide = $(".menu-slide").bxSlider({
        auto: true,
        pager: true,
        controls: true,
        infiniteLoop: true,
        touchEnabled: (navigator.maxTouchPoints > 0),
        slideMargin: 10,
        pause: 2000,
        autoStart: true,
    });

    // ▽ 누르면..~~~
    $('.bar-right span').click(function () {
        // 화살표 모양이 바뀌어요
        $('.bar-right span').toggleClass('up')
        // 슬라이드가 나와요
        $('.section02>.bx-wrapper').toggleClass('push')
    })

    // 일시정지버튼!
    $('.bx-default-pager').prepend('<div class="stop"></div>') //stop 버튼 생성
    $('.stop').click(function () {
        const stop = $('.stop')
        $(this).toggleClass('play')
        let temp = $(this).hasClass('play')
        if (temp) {
            console.log(temp)
            // bx는.. 일시정지가.. 안되나요..?ㅠㅠ?
            // swiper는.. 없던데.. viport visable이.. 
        } else {
            console.log(temp)
        }
    })

    // 스크롤이 되면~~!!!
    // section01일때
    setTimeout(() => {
        $('.img1-1').addClass('show')
    }, 100)
    setTimeout(() => {
        $('.img1-2').addClass('show')
    }, 500)
    setTimeout(() => {
        $('.img1-3').addClass('show')
    }, 1000)
    setTimeout(() => {
        $('.img1-4').addClass('show')
    }, 1500)
    setTimeout(() => {
        $('.img1-5').addClass('show')
    }, 2000)
    setTimeout(() => {
        $('.img1-2').addClass('show')
    }, 2500)
    setTimeout(() => {
        $('.section01 button').addClass('show')
    }, 2600)

    $(window).scroll(function () {
        let scroll = $(window).scrollTop()
        // console.log(scroll)

        // section04
        if (scroll > 500) {
            setTimeout(() => {
                $('main .section04 .img-left').addClass('show')
            }, 300)
            setTimeout(() => {
                $('main .section04 .img-right').addClass('show')
            }, 600)
        } else {
            setTimeout(() => {
                $('main .section04 .img-left').removeClass('show')
            }, 300)
            setTimeout(() => {
                $('main .section04 .img-right').removeClass('show')
            }, 600)
        }

        // section05
        if (scroll > 1000) {
            setTimeout(() => {
                $('main .section05 .hidden').addClass('show')
            }, 300)
        } else {
            setTimeout(() => {
                $('main .section05 .hidden').removeClass('show')
            }, 300)
        }

        // section06
        if (scroll > 1500) {
            setTimeout(() => {
                $('main .section06 a').addClass('show')
            }, 300)
            setTimeout(() => {
                $('main .section06 .largetxt').addClass('show')
            }, 600)
            setTimeout(() => {
                $('main .section06 .smalltxt').addClass('show')
            }, 800)
        } else {
            setTimeout(() => {
                $('main .section06 a').removeClass('show')
            }, 300)
            setTimeout(() => {
                $('main .section06 .largetxt').removeClass('show')
            }, 600)
            setTimeout(() => {
                $('main .section06 .smalltxt').removeClass('show')
            }, 800)
        }

        // section07
        if (scroll > 2000) {
            setTimeout(() => {
                $('main .section07 .hidden').addClass('show')
            }, 300)
        } else {
            setTimeout(() => {
                $('main .section07 .hidden').removeClass('show')
            }, 300)
        }

        // section08
        if (scroll > 2700) {
            setTimeout(() => {
                $('main .section08 .img8').addClass('show')
            }, 100)
            setTimeout(() => {
                $('main .section08 .img8-3').addClass('show')
            }, 300)
            setTimeout(() => {
                $('main .section08 .img8-4').addClass('show')
            }, 600)
            setTimeout(() => {
                $('main .section08 a').addClass('show')
            }, 900)
        } else {
            setTimeout(() => {
                $('main .section08 .img8').removeClass('show')
            }, 100)
            setTimeout(() => {
                $('main .section08 .img8-3').removeClass('show')
            }, 300)
            setTimeout(() => {
                $('main .section08 .img8-4').removeClass('show')
            }, 600)
            setTimeout(() => {
                $('main .section08 a').removeClass('show')
            }, 900)
        }
    })


})