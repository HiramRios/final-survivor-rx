$(document).ready(function () {

  // drawer close
  $(document).on('click', '.cart-drawer__overlay', function () {
      $('.drawer--cart .drawer__close').trigger('click');
  });

  // supplement popup
  $('.cstm-txtimg--popup').click(function () {
      $('body').addClass('cstm-supplement--conatainer');
      $('.body_ingredients').addClass('cstm-supplement--conatainer');
      $('.cstm-fact-supplementimage').show();
      $('.body_ingredients.cstm-supplement--conatainer').click(function () {
          $('body').removeClass('cstm-supplement--conatainer');
          $('.body_ingredients').removeClass('cstm-supplement--conatainer');
          $('.cstm-fact-supplementimage').hide();
      });
  });

  $('.cstm-supplement-close').click(function () {
      $('body').removeClass('cstm-supplement--conatainer');
      $('.body_ingredients').removeClass('cstm-supplement--conatainer');
      $('.cstm-fact-supplementimage').hide();
  });

  // view more
  $('.viewmore').click(function () {
      $('.fullknon').show();
      $('.halfknown').hide();
  });

  $('.lessmore').click(function () {
      $('.fullknon').hide();
      $('.halfknown').show();
  });

  $('.lessmore1').click(function () {
      $('.fullknon1').hide();
      $('.halfknown1').show();
  });

  $('.lessmore2').click(function () {
      $('.fullknon2').hide();
      $('.halfknown2').show();
  });

  $('.viewmore1').click(function () {
      $('.fullknon1').show();
      $('.halfknown1').hide();
  });

  $('.viewmore2').click(function () {
      $('.fullknon2').show();
      $('.halfknown2').hide();
  });

  $('.prev-btn').click(function () {
      $('.fullknon').hide();
      $('.halfknown').show();
      $('.fullknon1').hide();
      $('.halfknown1').show();
      $('.fullknon2').hide();
      $('.halfknown2').show();
  });

  $('.next-btn').click(function () {
      $('.fullknon').hide();
      $('.halfknown').show();
      $('.fullknon1').hide();
      $('.halfknown1').show();
      $('.fullknon2').hide();
      $('.halfknown2').show();
  });

  // $('.navlink--child span.navtext').hover(function() {
  //     var text = $(this).text();
  //     var emptytext = ' ';
  //     if(text =='All Survivors' || text =='View All'){
  //          $('.custom_menu_second_child .custom_menu_heading_one').text(emptytext);
  //          $('.custom_menu_second_child').hide();
  //     }else{
  //          $('.custom_menu_second_child .custom_menu_heading_one').text(text);
  //     }
  // });

  $('.cstm__griditem--jtpl').click(function () {
      var hreflink = $(this).attr('link-attr');
      window.location.href = 'https://survivorrx.com/pages/survivorrx-team#' + hreflink;
  });

  $('p').each(function () {
      if ($(this).text() == '') {
          $(this).remove();
      }
  });

  $('span').each(function () {
      if ($(this).text() == '') {
          $(this).remove();
      }
  });

  $('.hero__button-group .btn--solid').click(function () {
      window._klOnsite = window._klOnsite || [];
      window._klOnsite.push(['openForm', 'RXFNsF']);
  });

  $('.custom_footer_button').click(function (e) {
      e.preventDefault();
      window._klOnsite = window._klOnsite || [];
      window._klOnsite.push(['openForm', 'RXFNsF']);
  });

  var timeoutId;
  $('.custom_blog_search').off("keyup").on("keyup", function () {
      var getVal = $(this).val();
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function() {
        console.log(getVal);
        if (getVal != '') {
            var getUrl = 'https://survivorrx.com/search?options%5Bprefix%5D=last&type=article&q=' + getVal;
            console.log(getUrl);
            $.ajax({
                type: "GET",
                url: getUrl,
                success: function (data) {
                    // console.log(data);
                    $(".grid-outer").html($(data).find('.grid-outer').html());
                }
            });
        } else { 
            var getUrl1 = window.location.href;
            $.ajax({
                type: "GET",
                url: getUrl1,
                success: function (data) {
                    // console.log(data);
                    $(".grid-outer").html($(data).find('.grid-outer').html());
                }
            });
        }
      }, 500);
  });

  $(document).on('click', '.cstmbtn--dropdwn', function () {
      var $this = $(this);
      if ($this.hasClass('is-drop-active')) {
          setTimeout(function () {
              $this.removeClass('is-drop-active');
          }, 100);
      } else {
          setTimeout(function () {
              $this.addClass('is-drop-active');
          }, 110);
      }
  });

  $('.custom_blog_search').keyup(function () {
      $('button.custom_search_cross.search-reset').removeClass('hidden');
      $('button.search-popdown__submit').hide();
  });

  $('button.custom_search_cross.search-reset').click(function () {
      $('button.custom_search_cross.search-reset').addClass('hidden');
      $('button.search-popdown__submit').show();
      var getUrl1 = window.location.href;
      $.ajax({
          type: "GET",
          url: getUrl1,
          success: function (data) {
              console.log(data);
              $(".grid-outer").html($(data).find('.grid-outer').html());
          }
      });
  });

  // mega menu start 
  // $('body').on('mouseenter','a.custom_menu_has_suubclass.navlink.navlink--child .navtext',function (e) {
  //     e.preventDefault();
  //     $('.custom_menu_second_child_wrapper').removeClass('is-submenu-active');
  //     $(this).parents('.custom_menu_second_child_wrapper').toggleClass('is-submenu-active');
  // })

  $('body').on('mouseenter', '.navlink--child span.cstm-navlink--dropdown', function (e) {
      e.preventDefault();
      $('.custom_menu_second_child_wrapper').removeClass('is-submenu-active');
      $(this).parents('.custom_menu_second_child_wrapper').toggleClass('is-submenu-active');
      var text = $(this).text();
      var emptytext = ' ';
      if (text == 'All Survivors' || text == 'View All') {
          $('.custom_menu_second_child .custom_menu_heading_one').text(emptytext);
          $('.custom_menu_second_child').hide();
      } else {
          $('.custom_menu_second_child .custom_menu_heading_one').text(text);
      }
  });

  $('body').on('mouseleave', '.header__dropdown__wrapper', function (e) {
      $('.custom_menu_second_child_wrapper').removeClass('is-submenu-active');
      $('.custom_menu_second_child .custom_menu_heading_one').text(emptytext);
      $('.custom_menu_second_child').hide();
  });

  // $('.custom_menu_second_child_wrapper:first').addClass('is-submenu-active')

  $('body').on('mouseenter', '.menu__item.grandparent', function () {
      if ($(this).find('.menu__block').hasClass('make_secton_50')) {
          $(this).addClass('image-text-visible');
      } else {
          $(this).removeClass('image-text-visible');
      }
  });

  // mega menu end 
  // slick slider blog post start 
  if ($(window).width() <= 767) {
      $('.widget.custom_recent_blogs_wrapper .widget__recent').slick({
          slidesToShow: 1.13,
          slidesToScroll: 1,
          arrows: false,
          infinite: false
      });
  } else if ($(window).width() > 768) {
      $('.widget.custom_recent_blogs_wrapper .widget__recent').slick('unslick');
  }

  if ($(window).width() < 750) {
      $('.blog-editorial .editorial__slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          prevArrow: $('.editorial__mobile-nav .previous'),
          nextArrow: $('.editorial__mobile-nav .next'),
          autoplay: true,
          autoplaySpeed: 5000
      });
  } else if ($(window).width() >= 750) {
      $('.blog-editorial .editorial__slider').slick('unslick');
  }

  // slick slider blog post end
  // external js: flickity.pkgd.js

  // add this code
  /*
  Flickity.prototype._createResizeClass = function() {
    this.element.classList.add('flickity-resize');
  };

  Flickity.createMethods.push('_createResizeClass');

  var resize = Flickity.prototype.resize;
  Flickity.prototype.resize = function() {
    this.element.classList.remove('flickity-resize');
    resize.call( this );
    this.element.classList.add('flickity-resize');
  };
  */

});