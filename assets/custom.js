/*
* Broadcast Theme
* 
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/

$(document).on('click', '.addon-block__link', function (e) {
  e.preventDefault();
  let btnElement = $(this)[0];
  console.log('clicked');
  document.dispatchEvent(
    new CustomEvent("theme:cart:add", {
      detail: { button: btnElement },
    })
  );
});

$(document).on('click', '.product__block--accordion', function (e) {
  var otherBlocks = $('.product__block--accordion').not(this);
  otherBlocks.find('.accordion').attr('open', false);
})

window.addEventListener('load', () => {
  if (document.querySelector('.drawer__items .cart__error') != null && document.querySelector('.cart__foot__inner .cart__error') == null) {
    if (!document.querySelector('.checkout_btn_issue')) {
      let div = document.createElement("div");
      div.innerHTML = 'Your shopping cart needs to be corrected before purchase.';
      div.classList.add('cart__error', 'checkout_btn_issue');
      document.querySelector('.cart__foot__inner .cart__buttons__fieldset').append(div);
    }
    document.querySelector('.cart__foot__inner .cart__buttons-wrapper').classList.add('cart__buttons-wrapper--disabled');
  }
  else if (document.querySelector('.drawer__items .cart__error') == null && document.querySelector('.cart__foot__inner .cart__error') != null) {
    document.querySelector('.cart__foot__inner .cart__error').remove();
    document.querySelector('.cart__foot__inner .cart__buttons-wrapper').classList.remove('cart__buttons-wrapper--disabled');
  }
  
  if (document.querySelector('.cart__content .cart__error') != null && document.querySelector('.cart__aside .cart__error') == null) {
    if (!document.querySelector('.checkout_btn_issue')) {
      let div = document.createElement("div");
      div.innerHTML = 'Your shopping cart needs to be corrected before purchase.';
      div.classList.add('cart__error', 'checkout_btn_issue');
      document.querySelector('.cart__aside .cart__buttons__fieldset').append(div);
    }
    document.querySelector('.cart__aside .cart__buttons-wrapper').classList.add('cart__buttons-wrapper--disabled');
  }
  else if (document.querySelector('.cart__content .cart__error') == null && document.querySelector('.cart__aside .cart__error') != null) {
    document.querySelector('.cart__aside .cart__error').remove();
    document.querySelector('.cart__aside .cart__buttons-wrapper').classList.remove('cart__buttons-wrapper--disabled');
  }
  
  if(document.querySelector('[data-phills]') != null && document.querySelector('.drawer__items .cart__error') == null) {
    const phillsFormat = document.querySelector('[data-phills]').dataset.phills;
    const wrapper = document.querySelector(".cart__buttons-wrapper");
    const innerDiv = wrapper.querySelector(".cart__buttons");
    
    if (!wrapper.querySelector('.max_limit_issue')) {
      let div = document.createElement("div");
      div.innerHTML = `You've reached the limit of 8 supplements for your ${phillsFormat.toUpperCase()} packet. Please remove one ${phillsFormat.toUpperCase()} supplement to proceed.`;
      div.classList.add('cart__error', 'max_limit_issue');
      wrapper.insertBefore(div, innerDiv);
    }
  
    if(document.querySelector('.drawer__items .cart__error') == null) {
      if (!document.querySelector('.checkout_btn_issue')) {
        let div1 = document.createElement("div");
        div1.innerHTML = 'Your shopping cart needs to be corrected before purchase.';
        div1.classList.add('cart__error', 'checkout_btn_issue');
        document.querySelector('.cart__foot__inner .cart__buttons__fieldset').append(div1);
      }
    }
    
    document.querySelector('.cart__foot__inner .cart__buttons-wrapper').classList.add('cart__buttons-wrapper--disabled');
  } else if(document.querySelector('[data-phills]') == null && document.querySelector('.drawer__items .cart__error') == null) {
    if (document.querySelector('.cart__foot__inner .cart__error')) { document.querySelector('.cart__foot__inner .cart__error').remove(); }
    document.querySelector('.cart__foot__inner .cart__buttons-wrapper').classList.remove('cart__buttons-wrapper--disabled');
  }
});

$( document ).ready(function() {
    if (window.location.href.indexOf("#blog") > -1) {
      $('html, body').animate({
          scrollTop: $("main .shopify-section:nth-child(3)").offset().top
      }, 1000);
    }

    function goToPage(pageNum) {
      $(".cpagination.pagination-custom").attr("data-current-page", pageNum);
      $(".cpagination.pagination-custom .pagination-custom__page").removeClass("active");
      $(".cpagination.pagination-custom .pagination-custom__page.p" + pageNum).addClass("active");
      $("article.article.grid-item.custom-pagination-article").css("display", "none");
      $("article.article.grid-item.custom-pagination-article.page-" + pageNum).css("display", "flex");
    }

    $(document).on("click", ".cpagination.pagination-custom .pagination-custom__page", function() {
      goToPage($(this).text());
    });

    $(document).on("click", ".pagination-custom__prev", function() {
      var cur_page = $(".cpagination.pagination-custom").attr("data-current-page");
      if (cur_page - 1 >= 1) {
        goToPage(cur_page - 1);
      }
    });

    $(document).on("click", ".pagination-custom__next", function() {
      var cur_page = $(".cpagination.pagination-custom").attr("data-current-page");
      var total_page = $(".cpagination.pagination-custom").attr("data-total-page");
      if (parseInt(cur_page) + 1 <= total_page) {
        goToPage(parseInt(cur_page) + 1);
      }
    });
});
