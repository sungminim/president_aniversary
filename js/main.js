
$(function () {
    // Mobile and PC
    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }

    if (isMobile == false) {
        if (window.innerWidth >= 1350) {
            $("body").addClass("typePc");
        } else {
            $("body").removeClass("typePc");
        }
    }

    // FullPage
    $('#fullpage').fullpage({
        autoScrolling: true,
        anchors: ["section1", "section2", "section3", "section4", "section5", "section6", "section7"],
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        responsiveWidth: 1350,
        'onLeave': function (anchorLink, index) {
            if (window.innerWidth <= 1350) {
                $('.section').removeClass('active')
            }
        },
        'afterLoad': function (anchorLink, index) {
            $('header').removeClass('typeWhite');
            $('header').removeClass('typeBlack');
            $('header .gnb>li').removeClass('on')

            if (index == 1) {
                $('header').addClass('typeWhite')
                $('header .gnb>li:nth-child(1)').addClass('on')
            }
            if (index == 2) {
                $('header').addClass('typeBlack')
                $('header .gnb>li:nth-child(1)').addClass('on')
            }
            if (index == 3) {
                $('header').addClass('typeBlack')
                $('header .gnb>li:nth-child(2)').addClass('on')
            }
            if (index == 4) {
                $('header').addClass('typeWhite')
                $('header .gnb>li:nth-child(2)').addClass('on')
            }
            if (index == 5) {
                $('header').addClass('typeBlack')
                $('header .gnb>li:nth-child(2)').addClass('on')
            }
            if (index == 6) {
                $('header').addClass('typeWhite')
                $('header .gnb>li:nth-child(2)').addClass('on')
            }
            if (index == 7) {
                $('header').addClass('typeWhite')
                $('header .gnb>li:nth-child(3)').addClass('on')
            }
        },
    })


    // playVideo
    var myVideo = $('.videoArea').find('video');
    var playBtn = $('.videoArea').find('.play_btn')
    var pauseBtn = $('.videoArea').find('.pause_btn')


    $(".mVisualArea .bgArea .videoArea .play_btn", ".mVisualArea .bgArea .videoArea .pause_btn").click(function () {
        if (myVideo.get(0).paused) {
            myVideo.get(0).play();
            playBtn.hide();
            pauseBtn.show();

        } else {
            myVideo.get(0).pause();
            playBtn.show();
            pauseBtn.hide();
        }
    });

    $(".mVisualArea .btnArea").click(function () {
        if (myVideo.get(0).paused) {
            myVideo.get(0).play();
            playBtn.hide();
            pauseBtn.show();

        } else {
            myVideo.get(0).pause();
            playBtn.show();
            pauseBtn.hide();
        }
    });

    $('.btn_mute').click(function () {
        $(this).toggleClass('mute');

        if ($(this).hasClass('mute')) {
            $('.videoArea button.btn_mute span').html('음소거 해제')
            $('.mVisualArea video').prop('muted', true);
        } else {
            $('.videoArea button.btn_mute span').html('음소거')
            $('.mVisualArea video').prop('muted', false);
        }
    })


    // mainVisual Animation
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 1041) {
        gsap.to(".mVisualArea .visualTxt .lv3", 1, {
            fontSize: 150,
            delay: 0.6,
            ease: "power3",
        });
    } else if (window.innerWidth > 768 && window.innerWidth <= 1041) {
        gsap.to(".mVisualArea .visualTxt .lv3", 1, {
            fontSize: 100,
            delay: 0.6,
            ease: "power3",
        });
    } else if (window.innerWidth > 500 && window.innerWidth <= 768) {
        gsap.to(".mVisualArea .visualTxt .lv3", 1, {
            fontSize: 68,
            delay: 0.6,
            ease: "power3",
        });
    } else {
        gsap.to(".mVisualArea .visualTxt .lv3", 1, {
            fontSize: 48,
            delay: 0.6,
            ease: "power3",
        });
    }

    gsap.to(".mVisualArea .visualTxt .lv1", 1.3, {
        left: 0,
        delay: 1.6,
        ease: "power3",
    });

    gsap.to(".mVisualArea .visualTxt .lv1", 1.5, {
        opacity: 1,
        delay: 1.6,
    });

    gsap.to(".mVisualArea .visualTxt .lv2", 1.3, {
        left: 0,
        delay: 1.6,
        ease: "power3",
    });

    gsap.to(".mVisualArea .visualTxt .lv2", 1.5, {
        opacity: 1,
        delay: 1.6,
    });

    gsap.to(".mVisualArea .visualTxt .lv3", 1, {
        top: 0,
        delay: 1.6,
        ease: "power3",
    });

    // Remove MainVisual Txt
    gsap.to(".mVisualArea .visualTxt .lv1", 1, {
        left: '100%',
        ease: "power2",
        delay: 3
    });

    gsap.to(".mVisualArea .visualTxt .lv1", 0.5, {
        opacity: 0,
        ease: "power2",
        delay: 3
    });

    gsap.to(".mVisualArea .visualTxt .lv2", 1, {
        left: '-100%',
        ease: "power2",
        delay: 3
    });

    gsap.to(".mVisualArea .visualTxt .lv2", 0.5, {
        opacity: 0,
        ease: "power2",
        delay: 3
    });

    gsap.to(".mVisualArea .visualTxt .lv3", 1, {
        left: '100%',
        ease: "power2",
        delay: 3
    });

    gsap.to(".mVisualArea .visualTxt .lv3", 0.5, {
        opacity: 0,
        ease: "power2",
        delay: 3
    });


    gsap.to(".mVisualArea .bgArea img", 1, {
        opacity: 0,
        delay: 3.1
    });

    function mVisualLoc() {
        var mVisualTxtLoc = $('.mVisualArea .visualTxt p.lv2').height();
        $('.mVisualArea .visualTxt p.lv3').css('top', -mVisualTxtLoc)

    }

    mVisualLoc();

    // Card Slide
    var txtSwiper = new Swiper('.cardSlider_txt', {
        slidesPerView: "1",
        effect: 'fade',
        speed: 0,
        loop: true,
        loopSlides: 1,
    })

    var cardSwiper = new Swiper('.cardSlider', {
        effect: "cards",
        grabCursor: true,
        speed: 300,
        loop: true,
        loopSlides: 1,
        slidesPerView: "1",
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: ".sliderWrap .btnRight",
            prevEl: ".sliderWrap .btnLeft",
        },
        on: {
            slideChange: function () {
                $('.mFootPrint .slide_tit img').removeClass('on');
                $('.mFootPrint .slide_tit img').eq(cardSwiper.realIndex).addClass('on');
            },
        }
    })

    cardSwiper.controller.control = txtSwiper;
    txtSwiper.controller.control = cardSwiper;

    //salesSwiper
    var salesSwiper = new Swiper('.salesContWrap', {
        grabCursor: true,
        autoHeight: true,
        speed: 600,
        slidesPerView: "1",
        on: {
            slideChange: function () {
                $(".mSalesMan").removeClass('fp-completely');
                $(".salesContWrap").removeClass('ani');
                $(".salesContWrap .contTab.ani").removeClass('ani');
                $('.mSalesMan .salesTabArea ul li button').removeClass('on')
                $('.mSalesMan .salesTabArea ul li').eq(salesSwiper.realIndex).find('button').addClass('on');

                $(".salesContWrap .contTab").eq(salesSwiper.realIndex).addClass('counter');
                $('.salesContWrap .type2 .btmTxt .btn_price span').attr('data-play', '');
                $('.salesContWrap .type3 .btmTxt .btn_price span').attr('data-play', '');
                $('.salesContWrap .type4 .btmTxt .btn_price span').attr('data-play', '');

                setTimeout(function () {
                    $('.salesContWrap .type2.counter .btmTxt .btn_price span').counterUp({ delay: 20, time: 1500 });
                    $('.salesContWrap .type3.counter .btmTxt .btn_price span').counterUp({ delay: 20, time: 1500 });
                    $('.salesContWrap .type4.counter .btmTxt .btn_price span').counterUp({ delay: 20, time: 1500 })
                }, 600)

            },
            transitionEnd: function () {
                $(".salesContWrap .contTab").eq(salesSwiper.realIndex).addClass('ani');

                if (window.innerWidth <= 768) {
                    var scrollTop = $(document).scrollTop();
                    var scrollToplPlus3 = scrollTop - 10;
                    $('html').animate({ scrollTop: scrollToplPlus3 }, 100);
                }
            }
        }
    });

    // count
    $('.salesTabArea li:nth-child(1) button').on('click', function () {
        salesSwiper.slideTo(0);
    });
    $('.salesTabArea li:nth-child(2) button').on('click', function () {
        salesSwiper.slideTo(1);
    });
    $('.salesTabArea li:nth-child(3) button').on('click', function () {
        salesSwiper.slideTo(2);
    });
    $('.salesTabArea li:nth-child(4) button').on('click', function () {
        salesSwiper.slideTo(3);
    });
    $('.salesTabArea li:nth-child(5) button').on('click', function () {
        salesSwiper.slideTo(4);
    });

    // global Slider
    var Imgswiper = new Swiper('.contSwiper', {
        // Optional parameters
        effect: 'fade',
        loopSlides: 1,
        fadeEffect: {
            crossFade: true
        },
        slidesPerView: '1',
        autoHeight: true,
        loop: true,
        navigation: {
            nextEl: '.mGlobal .arrR',
            prevEl: '.mGlobal .arrL',
        },
        on: {
            slideChange: function () {
                $('.cont_bg>div img').removeClass('on');
                $('.global_tit img').removeClass('on');

                if ($('.contSwiper .type2').hasClass('swiper-slide-active')) {
                    $('.cont_bg>div.back1 img').eq(2).addClass('on')
                    $('.cont_bg>div.back2 img').eq(2).addClass('on')
                    $('.cont_bg>div.back3 img').eq(2).addClass('on')
                    $('.cont_bg>div.back4 img').eq(2).addClass('on')
                }
                if ($('.contSwiper .type3').hasClass('swiper-slide-active')) {
                    $('.cont_bg>div.back1 img').eq(3).addClass('on')
                    $('.cont_bg>div.back2 img').eq(3).addClass('on')
                    $('.cont_bg>div.back3 img').eq(3).addClass('on')
                    $('.cont_bg>div.back4 img').eq(3).addClass('on')

                }
                if ($('.contSwiper .type4').hasClass('swiper-slide-active')) {
                    $('.cont_bg>div.back1 img').eq(0).addClass('on')
                    $('.cont_bg>div.back2 img').eq(0).addClass('on')
                    $('.cont_bg>div.back3 img').eq(0).addClass('on')
                    $('.cont_bg>div.back4 img').eq(0).addClass('on')
                }
                if ($('.contSwiper .type1').hasClass('swiper-slide-active')) {
                    $('.cont_bg>div.back1 img').eq(1).addClass('on')
                    $('.cont_bg>div.back2 img').eq(1).addClass('on')
                    $('.cont_bg>div.back3 img').eq(1).addClass('on')
                    $('.cont_bg>div.back4 img').eq(1).addClass('on')
                }

            }
        }
    });
    var titswiper = new Swiper('.global_tit .swiper-container', {
        // Optional parameters
        effect: 'fade',
        speed: 0,
        loopSlides: 1,
        slidesPerView: '1',
        loop: true,
    });

    Imgswiper.controller.control = titswiper;
    titswiper.controller.control = Imgswiper;

    //Mobile Motion
    if (window.innerWidth <= 1350) {
        ScrollTrigger.create({
            trigger: '.mFootPrint_intro',
            toggleClass: 'ani',
            scrub: 1
        });
        ScrollTrigger.create({
            trigger: '.mFootPrint',
            toggleClass: 'ani',
            scrub: 1
        });
        ScrollTrigger.create({
            trigger: '.mGlobal',
            toggleClass: 'ani',
            start: '30% center',
            scrub: 1
        });
        ScrollTrigger.create({
            trigger: '.mSalesMan',
            toggleClass: 'ani',
            start: '30% center',
            scrub: 1
        });
        ScrollTrigger.create({
            trigger: '.mEvent',
            toggleClass: 'ani',
            start: '10% center',
            scrub: 1
        });
    }

    // Mobile gnb
    $('header .btn_menu').click(function () {
        $('header').addClass('navOpen')
    })

    $('header .btn_close').click(function () {
        $('header').removeClass('navOpen')
    })

    $('.mb_gnb a').click(function () {
        $('header').removeClass('navOpen')
    })

    $(window).resize(function () {
        if (window.innerWidth <= 1350) {

            $('.mSubVisualArea').addClass('ani')


            ScrollTrigger.create({
                trigger: '.mFootPrint_intro',
                toggleClass: 'ani',
                scrub: 1
            });
            ScrollTrigger.create({
                trigger: '.mFootPrint',
                toggleClass: 'ani',
                scrub: 1
            });
            ScrollTrigger.create({
                trigger: '.mGlobal',
                toggleClass: 'ani',
                start: '30% center',
                scrub: 1
            });
            ScrollTrigger.create({
                trigger: '.mSalesMan',
                toggleClass: 'ani',
                start: '30% center',
                scrub: 1
            });
            ScrollTrigger.create({
                trigger: '.mEvent',
                toggleClass: 'ani',
                start: '10% center',
                scrub: 1
            });
        }
    });

    if (window.innerWidth <= 1380) {
        $('.mSubVisualArea').addClass('ani')
    }


    // nav Color
    $(window).scroll(function () {
        nowScrollTop = $(window).scrollTop();

        if (window.innerWidth <= 1041) {
            scrollMotion(nowScrollTop);
        }
    })


    function scrollMotion(nowScrollTop) {
        $(".section").each(function () {
            var position = $(this).offset().top;
            var scrollHeight = $(this).innerHeight();

            if (nowScrollTop + 80 > position && nowScrollTop < position + scrollHeight) {
                $("header").removeClass("black")
                $("header").removeClass("typeBlack")
                $("header").removeClass("typeWhite")

                if ($(this).hasClass("mSubVisualArea") || $(this).hasClass("mFootPrint_intro") || $(this).hasClass("mSalesMan")) {
                    $("header").addClass("black");
                }else{
                    $("header").removeClass("black");
                }
            }
        });
    }

    $('.mb_gnb li:nth-child(1)>a').click(function () {
        $("header").removeClass("black")
    })

    $('.mb_gnb li:nth-child(2)>a').click(function () {
        $("header").addClass("black")
    })

    $('.mb_gnb li:nth-child(3)>a').click(function () {
        $("header").removeAttr('class')
    })

    // Prevent Zoom
    let SSWZ = function () {
        /**
         * Handler for scroll- control must be pressed.
         * @param e
         */
        this.keyScrollHandler = function (e) {
            if (e.ctrlKey) {
                e.preventDefault();
                return false;
            }
        }
    };

    if (window === top) {
        let sswz = new SSWZ();
        window.addEventListener('wheel', sswz.keyScrollHandler, { passive: false });
    }

})
const scrollCheck = document.querySelector("#scroll-check");
const keyboardCheck = document.querySelector("#keyboard-check");

document.addEventListener("keydown", function (e) {
    if (
        e.ctrlKey &&
        (e.keyCode == "61" ||
            e.keyCode == "107" ||
            e.keyCode == "173" ||
            e.keyCode == "109" ||
            e.keyCode == "187" ||
            e.keyCode == "189")
    ) {
        e.preventDefault();
    }
});
document.addEventListener(
    "wheel",
    function (e) {
        if (scrollCheck && e.ctrlKey) {
            e.preventDefault();
        }
    },
    {
        passive: false
    }

    // 10001110
    // 01110001
    // 01110010
);

