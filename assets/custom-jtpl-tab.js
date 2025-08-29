const customIngredientsModal = () => {
  setTimeout(function() {
      if ($('.active-a').attr('data-id') == 'viewall') {
        $('.main_tab_wrapper.cstm-viewall').show();
        $('.tab.newidtab').addClass('tab-active').css('display', 'block');
  
        var tabs = $('.cstm-slider-img .tab');
        var seen = {};
  
        tabs.each(function() {
          var value = $(this).attr('open_tab_cstm');
          if (seen[value]) {
            // $(this).remove();
          } else {
            seen[value] = true;
          }
        });
      }
    }, 210);
  
    $('.tab-a').click(function() {
      if ($(this).attr('data-id') != 'viewall') {
        $('.main_tab_wrapper.cstm-viewall').hide();
      } else {
        setTimeout(function() {
          var tabs = $('.cstm-slider-img .tab');
          var seen = {};
  
          tabs.each(function() {
            var value = $(this).attr('open_tab_cstm');
            if (seen[value]) {
              $(this).remove();
            } else {
              seen[value] = true;
            }
          });
          $('.main_tab_wrapper.cstm-viewall').show();
        }, 110);
      }
    });
  
    setTimeout(function() {
      var windowUrl = window.location.href;
      if ((windowUrl).includes('name=')) {
        var sliturlVal = windowUrl.split('name=')[1];
        $(`a.cstm_ingredient_read[open_text_handle="${sliturlVal}"]`).trigger('click');
      }
    }, 300);
  
    var getSlcikindex = '';
    var sliderImages = $('.cstm-slider-img').html();
  
    $('.tab-a').click(function() {
      if ($('.main_tab_wrapper.cstm-slider-img').hasClass('slick-initialized')) {
        $(".main_tab_wrapper.cstm-slider-img").slick("unslick");
      }
      $('.cstm-slider-img').html(sliderImages);
      var cstmn_tab = $(this).attr('data-id');
  
      $('.cstm-slider-img .tab').each(function() {
        var tabElement = $(this);
        var new_data_attribute = tabElement.attr('data-id');
  
        setTimeout(function() {
          if (new_data_attribute == cstmn_tab || cstmn_tab == 'viewall') {
            tabElement.show();
            tabElement.addClass('tab-active');
          } else {
            tabElement.removeClass('tab-active');
            tabElement.remove();
          }
        }, 500);
      });
    }); 
  
    $('.cstm-metaobject-add .metafield-rich_text_field').addClass('new_appended_text');
    $('.cstm_new_popup').removeClass('open__popup');
    $('.body_ingredients').removeClass('cstm_popup--cls');
  
    $('.cstm_ingredient_read').click(function() {
      console.log('clicked');
      var getIndex = $(this).parents('.inner_wrapper_tab.cstm-metaobject-add').attr('data-index');
      var getIndex2 = $(this).attr('open_text');
  
      var $parentShopifySection = $(this).parents('.shopify-section');
  
      $parentShopifySection.find('.cstm_new_popup').css("visibility", "visible");
      $parentShopifySection.find('.cstm_new_popup').show();
  
      $parentShopifySection.find('.tab.newidtab.tab-active').each(function(index) {
        var gteText = $(this).attr('open_tab_cstm');
        if (getIndex2 == gteText) {
          getSlcikindex = index;
        }
      });
  
      console.log(getSlcikindex);
  
      var $slider = $parentShopifySection.find('.cstm-slider-img');
  
      if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var total_length;
  
        setTimeout(function() {
          var sliderCounter = document.createElement('div');
          sliderCounter.classList.add('slider__counter');
  
          var updateSliderCounter = function(slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $(sliderCounter).text(currentSlide + '/' + total_length);
          };
  
          var updateTotalLength = function() {
            total_length = $parentShopifySection.find('.newidtab').length;
            $(sliderCounter).text(currentSlide + '/' + total_length);
          };
  
          updateTotalLength();
  
          $slider.on('init', function(event, slick) {
            $parentShopifySection.find('.e_count').append(sliderCounter);
            updateSliderCounter(slick);
          });
  
          $slider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
          });
  
          $parentShopifySection.find('.cstm_ingredient_read').click(function() {
            updateTotalLength();
          });
  
        }, 400);
  
        setTimeout(function() {
          slickFun();
          $parentShopifySection.find('.cstm-slider-img').slick('slickGoTo', getSlcikindex);
        }, 500);
  
        function slickFun() {
          $slider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: true,
            fade: true
          });
          $slider.on('afterChange', function(event, slick, currentSlide) {
            $('.fullknon').hide();
            $('.halfknown').show();
            $('.fullknon1').hide();
            $('.halfknown1').show();
            $('.fullknon2').hide();
            $('.halfknown2').show();
          });
        }
  
        if ($parentShopifySection.find('.main_tab_wrapper.cstm-slider-img').hasClass('slick-initialized')) {
          $parentShopifySection.find(".main_tab_wrapper.cstm-slider-img").slick("unslick");
        } else {
          setTimeout(function() {
            slickFun();
            $parentShopifySection.find('.cstm-slider-img').slick('slickGoTo', getSlcikindex);
          }, 500);
        }
      }
  
      setTimeout(function() {
        $parentShopifySection.find('.cstm_new_popup').addClass('open__popup');
        $('.body_ingredients').addClass('cstm_popup--cls');
      }, 500);
  
      $(document).on('click', '.cstm_popup--cls', function(event) {
        $('.cstm-slider-img').hide();
        $('.cstm_slider_wrapper').css("visibility", "hidden");
        $('.cstm_new_popup').removeClass('open__popup');
        $('.body_ingredients').removeClass('cstm_popup--cls');
      });
  
      var cstm_data = $(this).attr('data-id');
      var cstm_tab = $parentShopifySection.find('.active-a').attr('data-id');
  
      if (cstm_data == cstm_tab || cstm_tab == 'viewall') {
        $parentShopifySection.find('.cstm-slider-img').show();
        $parentShopifySection.find('.cstm_slider_wrapper').css("visibility", "visible");
      } else {
        $parentShopifySection.find('.cstm-slider-img').hide();
        $parentShopifySection.find('.cstm_slider_wrapper').hide();
      }
    });
  
    $('.tab-a').click(function() {
      $('.body_ingredients').removeClass('cstm_popup--cls');
      $('.cstm-slider-img').hide();
      $('.cstm_slider_wrapper').hide();
      $('.cstm_new_popup').removeClass('open__popup');
    });
  
    $('.new_appended_text').each(function() {
      var oneLineDesc = $(this).first().text().trim();
      var xyz = oneLineDesc.slice(0, 100);
      $(this).text((xyz + "..."));
    });
  
    $('.new_appended_slidetext').each(function() {
      var oneLineDesc = $(this).first().text().trim();
      var xyn = oneLineDesc.slice(0, 500);
      $(this).text((xyn + "..."));
    });
  
    var tabId = $('.tab-a').attr('data-id');
  
    if (tabId === 'viewall') {
      $(".cstm-viewall .tab").addClass("tab-active");
      $('[data-id="viewall"]').addClass('active-a');
    } else {
      $('.tab-a').first().addClass('active-a');
    }
  
    $('.tab-a').click(function() {
      var tabId = $(this).attr('data-id');
      $(".tab").removeClass('tab-active');
      $(".tab-a").removeClass('active-a');
  
      if (tabId === 'viewall') {
        $(".cstm-viewall .tab").addClass("tab-active");
        $(this).addClass('active-a');
      } else {
        $(".tab[data-id='" + tabId + "']").addClass("tab-active");
        $(this).addClass('active-a');
      }
    });
  
    $(".prev-btn").click(function() {
      $(".cstm-slider-img.slick-slider").slick("slickPrev");
    });
  
    $(".next-btn").click(function() {
      $(".cstm-slider-img.slick-slider").slick("slickNext");
    });
  
    $('.cstm-popup-btn').click(function() {
      $('.cstm-slider-img').hide();
      $('.cstm_slider_wrapper').css("visibility", "hidden");
      $('.cstm_new_popup').removeClass('open__popup');
      $('.body_ingredients').removeClass('cstm_popup--cls');
    });
  
    // free product code
    var pro_title = $('.cstm-free-product').attr('pro-title');
    var pro_image = $('.cstm-free-product').attr('pro-image');
    var pro_url = $('.cstm-free-product').attr('pro-url');
    var productId = $('.cstm-free-product').attr('product-id');
  
    function appendHtmlData() {
      var htmlData = `
        <div
          class="data_defualt_product_id cart__item is-animated cstm-free-product-add"
          data-item="48437773009173:72768848e762a86f516c1add1172ebfa"
          data-item-title=""
          data-animation="cart-items-fade"
          data-animation-duration="500"
          data-animation-delay="0"
        >
          <div class="cart__item__image">
            <a href="${pro_url}" aria-label="${pro_title}">
              <div class="lazy-image">
                <img
                  src="${pro_image}"
                  alt=""
                  width="180"
                  height="139"
                  loading="lazy"
                  sizes="90px"
                  class=""
                >
              </div>
            </a>
          </div>
          <div class="cart__item__content">
            <div class="cart__item__content-inner">
              <h4 class="cart__item__title">
                <a href="${pro_url}">${pro_title}</a>
              </h4>
            </div>
            <p class="cart__price">Free</p>
          </div>
        </div>
      `;
      if ($('.cstm-free-product-add').length < 1) {
        $('.drawer__items').prepend(htmlData);
      }
    }
  
    function AddProduct() {
      jQuery.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: {
          id: productId,
          quantity: 1,
        },
        dataType: 'json',
        success: function() {
          jQuery.ajax({
            type: 'GET',
            url: '/cart',
            dataType: 'html',
            success: function() {}
          });
        }
      });
    }
  
    function removeGift() {
      jQuery.ajax({
        type: 'POST',
        url: '/cart/change.js',
        data: {
          id: productId,
          quantity: 0,
        },
        dataType: 'json',
        success: function() {
          jQuery.ajax({
            type: 'GET',
            url: '/cart',
            dataType: 'html',
            success: function() {}
          });
        }
      });
    }
  
    function cartProductUpdate() {
      jQuery.ajax({
        type: "GET",
        url: "/cart",
        dataType: "json",
        success: function(cartNew) {
          var productInCart = cartNew.items.some(item => item.id === parseInt(productId));
          if (!productInCart) {
            if ($('.cstm--primary').length) {
              AddProduct();
              if ($('.product--' + productId).length) {
                //$('.cstm-free-product-add').remove();
              } else {
                //appendHtmlData();
              }
            }
          } else {
            console.log("Product is already in the cart.");
          }
          if (!$('.cstm--primary').length) {
            removeGift();
            //$('.product--' + productId).remove();
          }
        },
        error: function(xhr, status, error) {
          console.error("Error fetching cart:", error);
        }
      });
    }
  
    $(document).on('click', '.package-block__supplement-facts .collapsible', function () {
      console.log('here');
      $('.package-block__supplement-facts .toggled-content').toggle();
      $('.cstm-slider-img.slick-initialized').slick('refresh');
    });
}

$(document).ready(function() {
    setTimeout(function() {
      if ($('.active-a').attr('data-id') == 'viewall') {
        $('.main_tab_wrapper.cstm-viewall').show();
        $('.tab.newidtab').addClass('tab-active').css('display', 'block');
  
        var tabs = $('.cstm-slider-img .tab');
        var seen = {};
  
        tabs.each(function() {
          var value = $(this).attr('open_tab_cstm');
          if (seen[value]) {
            // $(this).remove();
          } else {
            seen[value] = true;
          }
        });
      }
    }, 210);
  
    $('.tab-a').click(function() {
      if ($(this).attr('data-id') != 'viewall') {
        $('.main_tab_wrapper.cstm-viewall').hide();
      } else {
        setTimeout(function() {
          var tabs = $('.cstm-slider-img .tab');
          var seen = {};
  
          tabs.each(function() {
            var value = $(this).attr('open_tab_cstm');
            if (seen[value]) {
              $(this).remove();
            } else {
              seen[value] = true;
            }
          });
          $('.main_tab_wrapper.cstm-viewall').show();
        }, 110);
      }
    });
  
    setTimeout(function() {
      var windowUrl = window.location.href;
      if ((windowUrl).includes('name=')) {
        var sliturlVal = windowUrl.split('name=')[1];
        $(`a.cstm_ingredient_read[open_text_handle="${sliturlVal}"]`).trigger('click');
      }
    }, 300);
  
    var getSlcikindex = '';
    var sliderImages = $('.cstm-slider-img').html();

    $('.tab-a').click(function() {
      if ($('.main_tab_wrapper.cstm-slider-img').hasClass('slick-initialized')) {
        $(".main_tab_wrapper.cstm-slider-img").slick("unslick");
      }
      $('.cstm-slider-img').html(sliderImages);
      var cstmn_tab = $(this).attr('data-id');
  
      $('.cstm-slider-img .tab').each(function() {
        var tabElement = $(this);
        var new_data_attribute = tabElement.attr('data-id');
  
        setTimeout(function() {
          if (new_data_attribute == cstmn_tab || cstmn_tab == 'viewall') {
            tabElement.show();
            tabElement.addClass('tab-active');
          } else {
            tabElement.removeClass('tab-active');
            tabElement.remove();
          }
        }, 500);
      });
    }); 
  
    $('.cstm-metaobject-add .metafield-rich_text_field').addClass('new_appended_text');
    $('.cstm_new_popup').removeClass('open__popup');
    $('.body_ingredients').removeClass('cstm_popup--cls');
  
    $('.cstm_ingredient_read').click(function() {
      var getIndex = $(this).parents('.inner_wrapper_tab.cstm-metaobject-add').attr('data-index');
      var getIndex2 = $(this).attr('open_text');
  
      var $parentShopifySection = $(this).parents('.shopify-section');
  
      $parentShopifySection.find('.cstm_new_popup').css("visibility", "visible");
      $parentShopifySection.find('.cstm_new_popup').show();
  
      $parentShopifySection.find('.tab.newidtab.tab-active').each(function(index) {
        var gteText = $(this).attr('open_tab_cstm');
        if (getIndex2 == gteText) {
          getSlcikindex = index;
        }
      });
  
      var $slider = $parentShopifySection.find('.cstm-slider-img');
  
      if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var total_length;
  
        setTimeout(function() {
          var sliderCounter = document.createElement('div');
          sliderCounter.classList.add('slider__counter');
  
          var updateSliderCounter = function(slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $(sliderCounter).text(currentSlide + '/' + total_length);
          };
  
          var updateTotalLength = function() {
            total_length = $parentShopifySection.find('.newidtab').length;
            $(sliderCounter).text(currentSlide + '/' + total_length);
          };
  
          updateTotalLength();
  
          $slider.on('init', function(event, slick) {
            $parentShopifySection.find('.e_count').append(sliderCounter);
            updateSliderCounter(slick);
          });
  
          $slider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
          });
  
          $parentShopifySection.find('.cstm_ingredient_read').click(function() {
            updateTotalLength();
          });
  
        }, 400);
  
        setTimeout(function() {
          slickFun();
          $parentShopifySection.find('.cstm-slider-img').slick('slickGoTo', getSlcikindex);
        }, 500);
  
        function slickFun() {
          $slider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: true,
            fade: true
          });
          $slider.on('afterChange', function(event, slick, currentSlide) {
            $('.fullknon').hide();
            $('.halfknown').show();
            $('.fullknon1').hide();
            $('.halfknown1').show();
            $('.fullknon2').hide();
            $('.halfknown2').show();
          });
        }
  
        if ($parentShopifySection.find('.main_tab_wrapper.cstm-slider-img').hasClass('slick-initialized')) {
          $parentShopifySection.find(".main_tab_wrapper.cstm-slider-img").slick("unslick");
        } else {
          setTimeout(function() {
            slickFun();
            $parentShopifySection.find('.cstm-slider-img').slick('slickGoTo', getSlcikindex);
          }, 500);
        }
      }
  
      setTimeout(function() {
        $parentShopifySection.find('.cstm_new_popup').addClass('open__popup');
        $('.body_ingredients').addClass('cstm_popup--cls');
      }, 500);
  
      $(document).on('click', '.cstm_popup--cls', function(event) {
        $('.cstm-slider-img').hide();
        $('.cstm_slider_wrapper').css("visibility", "hidden");
        $('.cstm_new_popup').removeClass('open__popup');
        $('.body_ingredients').removeClass('cstm_popup--cls');
      });
  
      var cstm_data = $(this).attr('data-id');
      var cstm_tab = $parentShopifySection.find('.active-a').attr('data-id');
  
      if (cstm_data == cstm_tab || cstm_tab == 'viewall') {
        $parentShopifySection.find('.cstm-slider-img').show();
        $parentShopifySection.find('.cstm_slider_wrapper').css("visibility", "visible");
      } else {
        $parentShopifySection.find('.cstm-slider-img').hide();
        $parentShopifySection.find('.cstm_slider_wrapper').hide();
      }
    });
  
    $('.tab-a').click(function() {
      $('.body_ingredients').removeClass('cstm_popup--cls');
      $('.cstm-slider-img').hide();
      $('.cstm_slider_wrapper').hide();
      $('.cstm_new_popup').removeClass('open__popup');
    });
  
    $('.new_appended_text').each(function() {
      var oneLineDesc = $(this).first().text().trim();
      var xyz = oneLineDesc.slice(0, 100);
      $(this).text((xyz + "..."));
    });
  
    $('.new_appended_slidetext').each(function() {
      var oneLineDesc = $(this).first().text().trim();
      var xyn = oneLineDesc.slice(0, 500);
      $(this).text((xyn + "..."));
    });
  
    var tabId = $('.tab-a').attr('data-id');
  
    if (tabId === 'viewall') {
      $(".cstm-viewall .tab").addClass("tab-active");
      $('[data-id="viewall"]').addClass('active-a');
    } else {
      $('.tab-a').first().addClass('active-a');
    }
  
    $('.tab-a').click(function() {
      var tabId = $(this).attr('data-id');
      $(".tab").removeClass('tab-active');
      $(".tab-a").removeClass('active-a');
  
      if (tabId === 'viewall') {
        $(".cstm-viewall .tab").addClass("tab-active");
        $(this).addClass('active-a');
      } else {
        $(".tab[data-id='" + tabId + "']").addClass("tab-active");
        $(this).addClass('active-a');
      }
    });
  
    $(".prev-btn").click(function() {
      $(".cstm-slider-img.slick-slider").slick("slickPrev");
    });
  
    $(".next-btn").click(function() {
      $(".cstm-slider-img.slick-slider").slick("slickNext");
    });
  
    $('.cstm-popup-btn').click(function() {
      $('.cstm-slider-img').hide();
      $('.cstm_slider_wrapper').css("visibility", "hidden");
      $('.cstm_new_popup').removeClass('open__popup');
      $('.body_ingredients').removeClass('cstm_popup--cls');
    });
  
    // free product code
    var pro_title = $('.cstm-free-product').attr('pro-title');
    var pro_image = $('.cstm-free-product').attr('pro-image');
    var pro_url = $('.cstm-free-product').attr('pro-url');
    var productId = $('.cstm-free-product').attr('product-id');
  
    function appendHtmlData() {
      var htmlData = `
        <div
          class="data_defualt_product_id cart__item is-animated cstm-free-product-add"
          data-item="48437773009173:72768848e762a86f516c1add1172ebfa"
          data-item-title=""
          data-animation="cart-items-fade"
          data-animation-duration="500"
          data-animation-delay="0"
        >
          <div class="cart__item__image">
            <a href="${pro_url}" aria-label="${pro_title}">
              <div class="lazy-image">
                <img
                  src="${pro_image}"
                  alt=""
                  width="180"
                  height="139"
                  loading="lazy"
                  sizes="90px"
                  class=""
                >
              </div>
            </a>
          </div>
          <div class="cart__item__content">
            <div class="cart__item__content-inner">
              <h4 class="cart__item__title">
                <a href="${pro_url}">${pro_title}</a>
              </h4>
            </div>
            <p class="cart__price">Free</p>
          </div>
        </div>
      `;
      if ($('.cstm-free-product-add').length < 1) {
        $('.drawer__items').prepend(htmlData);
      }
    }
  
    function AddProduct() {
      jQuery.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: {
          id: productId,
          quantity: 1,
        },
        dataType: 'json',
        success: function() {
          jQuery.ajax({
            type: 'GET',
            url: '/cart',
            dataType: 'html',
            success: function() {}
          });
        }
      });
    }
  
    function removeGift() {
      jQuery.ajax({
        type: 'POST',
        url: '/cart/change.js',
        data: {
          id: productId,
          quantity: 0,
        },
        dataType: 'json',
        success: function() {
          jQuery.ajax({
            type: 'GET',
            url: '/cart',
            dataType: 'html',
            success: function() {}
          });
        }
      });
    }
  
    function cartProductUpdate() {
      jQuery.ajax({
        type: "GET",
        url: "/cart",
        dataType: "json",
        success: function(cartNew) {
          var productInCart = cartNew.items.some(item => item.id === parseInt(productId));
          if (!productInCart) {
            if ($('.cstm--primary').length) {
              AddProduct();
              if ($('.product--' + productId).length) {
                //$('.cstm-free-product-add').remove();
              } else {
                //appendHtmlData();
              }
            }
          } else {
            console.log("Product is already in the cart.");
          }
          if (!$('.cstm--primary').length) {
            removeGift();
            //$('.product--' + productId).remove();
          }
        },
        error: function(xhr, status, error) {
          console.error("Error fetching cart:", error);
        }
      });
    }
  
    // cartProductUpdate();
  
    // $(document).on('click keyup enter', '.drawer__items', function() {
    //   setTimeout(function() {
    //     cartProductUpdate();
    //   }, 2000);
    // });
  
    // $('button[type="submit"]').click(function() {
    //   setTimeout(function() {
    //     cartProductUpdate();
    //   }, 1500);
    // });
  });