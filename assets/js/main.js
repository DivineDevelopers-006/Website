! function(e) {
    "use strict";
    e(window).on("load", function() {
        e("#preloader").delay(350).fadeOut("slow")
    }), TweenMax.to(".overlay-start", 1, {
        delay: 1,
        opacity: "0",
        display: "none"
    }), TweenMax.to(".square-overlay", 2, {
        width: "0",
        delay: 2
    }), TweenMax.from(".logo", 1, {
        y: "-100",
        delay: 2,
        autoAlpha: 0
    }), TweenMax.from(".toggle-btn", 1, {
        y: "-100",
        delay: 2,
        autoAlpha: 0
    }), TweenMax.from(".project-detail", 1, {
        y: "100",
        delay: 2,
        autoAlpha: 0
    }), TweenMax.from(".line-single-page", 1, {
        height: "0",
        delay: 2,
        autoAlpha: 0
    }), TweenMax.staggerFrom(".title-anim", 1, {
        y: "10",
        delay: 2,
        autoAlpha: 0
    }, "-0.25");
    var o, a, t = e(window);
    t.on("scroll", function() {
        t.scrollTop() > 100 ? (TweenMax.to(".toggle-btn", .4, {
            y: "-40"
        }), TweenMax.to(".logo", .4, {
            y: "-35"
        }), TweenMax.to(".bg-nav", .4, {
            y: "0"
        })) : (TweenMax.to(".logo", .4, {
            y: "0"
        }), TweenMax.to(".toggle-btn", .4, {
            y: "0"
        }), TweenMax.to(".bg-nav", .4, {
            y: "-70"
        }))
    }), e(".toggle-btn").on("mouseenter", function() {
        TweenMax.to(".toggle-btn span", .2, {
            scale: "1.2"
        })
    }), e(".toggle-btn").on("mouseleave", function() {
        TweenMax.to(".toggle-btn span", .2, {
            scale: "1"
        })
    }), e(".between").each(function() {
        var o = new ScrollMagic.Controller,
            a = e(this).find(".line-between"),
            t = new TimelineMax({
                repeat: !1,
                paused: !1,
                yoyo: !1
            });
        t.from(a, .3, {
            height: "0",
            ease: Power4.easeOut
        });
        new ScrollMagic.Scene({
            offset: -150,
            triggerElement: this,
            reverse: !1
        }).setTween(t).addTo(o)
    }), e(".fades").each(function() {
        var e = new ScrollMagic.Controller,
            o = new TimelineMax({
                repeat: !1,
                paused: !1,
                yoyo: !1
            });
        o.from(this, .3, {
            autoAlpha: 0,
            y: "90",
            ease: Power4.easeOut
        });
        new ScrollMagic.Scene({
            offset: -150,
            triggerElement: this,
            reverse: !1
        }).setTween(o).addTo(e)
    }), e(".about").each(function() {
        var o = new ScrollMagic.Controller,
            a = e(this).find(".about-first"),
            t = new TimelineMax({
                repeat: !1,
                paused: !1,
                yoyo: !1
            });
        t.to(a, 1, {
            width: "0",
            ease: Power4.easeOut
        });
        new ScrollMagic.Scene({
            offset: -150,
            triggerElement: this,
            reverse: !1
        }).setTween(t).addTo(o)
    }), e(".contact").each(function() {
        var o = new ScrollMagic.Controller,
            a = e(this).find(".about-first"),
            t = new TimelineMax({
                repeat: !1,
                paused: !1,
                yoyo: !1
            });
        t.to(a, 1, {
            width: "0",
            ease: Power4.easeOut
        });
        new ScrollMagic.Scene({
            offset: -150,
            triggerElement: this,
            reverse: !1
        }).setTween(t).addTo(o)
    }), VanillaTilt.init(document.querySelectorAll(".img-project"), {
        max: 15,
        speed: 2e3,
        scale: 1.05,
        perspective: 1500
    }), e(".testimonial .owl-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        mouseDrag: !0,
        autoplay: !0,
        center: !1,
        dots: !1,
        dragEndSpeed: 700,
        smartSpeed: 2e3,
        responsiveClass: !0,
        autoplayHoverPause: !0,
        autoplayTimeout: 3e3,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 1,
                margin: 0
            },
            1000: {
                items: 1,
                margin: 0
            }
        }
    }), (o = e(".team-slider .owl-carousel")).owlCarousel({
        loop: !1,
        margin: 30,
        mouseDrag: !0,
        autoplay: !1,
        center: !1,
        dots: !1,
        dragEndSpeed: 700,
        smartSpeed: 2e3,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 1,
                margin: 0
            },
            1000: {
                items: 2,
                margin: 10
            }
        }
    }), e(".arrow-right.-team").on("click", function() {
        o.trigger("next.owl.carousel")
    }), e(".arrow-left.-team").on("click", function() {
        o.trigger("prev.owl.carousel")
    }), (a = e(".news-slider .owl-carousel")).owlCarousel({
        loop: !1,
        margin: 30,
        mouseDrag: !0,
        autoplay: !1,
        center: !1,
        dots: !1,
        dragEndSpeed: 700,
        smartSpeed: 2e3,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 1,
                margin: 0
            },
            1000: {
                items: 2,
                margin: 30
            }
        }
    }), e(".arrow-right.-news").on("click", function() {
        a.trigger("next.owl.carousel")
    }), e(".arrow-left.-news").on("click", function() {
        a.trigger("prev.owl.carousel")
    }), e(".partner .owl-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        mouseDrag: !0,
        autoplay: !1,
        center: !1,
        dots: !0,
        dragEndSpeed: 700,
        smartSpeed: 2e3,
        responsiveClass: !0,
        autoplayHoverPause: !0,
        autoplayTimeout: 3e3,
        responsive: {
            0: {
                items: 2,
                margin: 0
            },
            600: {
                items: 4,
                margin: 0
            },
            1000: {
                items: 4,
                margin: 0
            }
        }
    }), e.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "linear",
        scrollTime: 600,
        activeClass: "active",
        onPageChange: null,
        topOffset: -100
    });
    var n = new TimelineMax({
        paused: !0
    });
    n.to(".one", .8, {
        y: 9,
        autoAlpha: 0,
        ease: Expo.easeInOut
    }), n.to(".two", .8, {
        ease: Expo.easeInOut,
        delay: -.8
    }), n.to(".tre", .8, {
        y: -9,
        autoAlpha: 0,
        ease: Expo.easeInOut,
        delay: -.8
    }), n.to(".menu", 1.5, {
        autoAlpha: 1,
        ease: Expo.easeOut,
        delay: "-1.5"
    }), n.staggerFrom(".menu ul li", 1, {
        x: 100,
        opacity: 0,
        ease: Power4.easeInOut
    }, "0.1", "-0.01"), n.reverse(), e(document).on("click", ".toggle-btn", function() {
        n.reversed(!n.reversed())
    }), e(document).on("click", ".menu-link", function() {
        n.reversed(!n.reversed())
    })
}(jQuery);