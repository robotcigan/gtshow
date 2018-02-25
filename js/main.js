$(document).ready(function() {

  let duration = .5;

  // Special box
  TweenMax.to(".box--first", duration, {
    ease: Power4.easeInOut,
    width: '100%'
  });

  TweenMax.to(".box--first", duration - .2, {
    delay: duration,
    ease: Power1.easeInOut,
    width: 0,
    left: 'initial',
    right: 0,
  });

  TweenMax.to(".box--second", duration, {
    delay: duration - .2,
    ease: Power4.easeInOut,
    width: '100%'
  });

  TweenMax.to(".box--second", duration - .2, {
    delay: duration + .2,
    ease: Power1.easeInOut,
    width: 0,
    left: 'initial',
    right: 0,
  });

  // Hero img
  TweenMax.to('.hero__img', 1, {
    delay: 1,
    ease: Power4.easeInOut,
    opacity: 1
  });

  // Hero title
  // $('.hero__title-overflow').each(function() {
  //   let index = $(this).index();
  //   TweenMax.to(".hero__title-overflow span:eq(" + index + ")", .8, {
  //     delay: index / 10 + 1,
  //     ease: Power4.easeInOut,
  //     y: 0
  //   });
  // });
  TweenMax.staggerTo(
    ['.hero__title-overflow span:eq(0)', '.hero__title-overflow span:eq(1)', '.hero__title-overflow span:eq(2)'],
    .8,
    {
      delay: 1,
      ease: Power4.easeInOut,
      y: 0
    },
    .15
  );

  // Hero btn
  TweenMax.to('.hero__container .btn', .2, {
    delay: 1.6,
    ease: Power4.easeInOut,
    opacity: 1,
    y: 0
  });

  // Hero logo
  TweenMax.to('.main-header .logo', 1, {
    delay: 2,
    ease: Power4.easeInOut,
    opacity: 1
  });

  // let controller = new ScrollMagic.Controller();

  // let scene1 = new ScrollMagic.Scene({
  //   triggerElement: '.second',
  //   pause: true
  // });
  // scene1.setTween(TweenMax.to('.second__box', duration, {
  //   delay: .2,
  //   width: 0,
  //   right: 0,
  //   left: 'initial'
  // }))
  // .addTo(controller);

// ------------------------------------------------

  // Tilt
  $('.tilt').tilt({
    easing: "cubic-bezier(.03,.98,.52,.99)",
    // glare: true,
    // maxGlare: .7,
    maxTilt: 5
  })

  // SVG magic
  jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });





});

