$('.point-carausal').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  vertical: true,
  verticalSwiping: true,
  //   slidesToScroll: 1, 
  prevArrow: "<span class='slick-arrow prev-arrow'> <img src='assets/images/bottom-arrow.png' /> </span>",
  nextArrow: '<span class="slick-arrow next-arrow"><img src="assets/images/top-arrow.png" /></span>'
});

$('.publisher-carausal').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  //   slidesToScroll: 1, 
  prevArrow: '<span class="slick-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12"><path fill-rule="evenodd" d="M1.952 6.003L7.006.974l-.98-.975-6.034 6.004 6.034 6.004.98-.975-5.054-5.029z"/></svg></span>',
  nextArrow: '<span class="slick-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12"><path fill-rule="evenodd" d="M5.048 6.003L-.007.974l.98-.975 6.034 6.004-6.034 6.004-.98-.975 5.055-5.029z"/></svg></span>'
});


$('.brand-logo-carausal').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});

/*  Testimonials */
$('.testimonials-carausal').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1,
  prevArrow: '<span class="slick-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="38"><path fill-rule="evenodd" d="M22.007 36.677L2.876 19.004 22.007 1.331 20.571.006.002 19.004l20.569 18.998 1.436-1.325z"/></svg></span>',
  nextArrow: '<span class="slick-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="38"><path fill-rule="evenodd" d="M-.007 36.677l19.131-17.673L-.007 1.331 1.429.006l20.569 18.998L1.429 38.002l-1.436-1.325z"/></svg></span>'
});


/* File Uplaod */

$('input[type="file"]').on('change', function (e) {
  var filename = e.target.files[0].name;
  // console.log(filename)
  var getParent = $(this).closest('label');
  getParent.children('.content').text(filename)
});


$('#tab-list ul li').on('click', function () {
  $('#tab-list ul li').removeClass('active');
  $(this).addClass('active');
  let getData = $(this).attr('data-tab');
  $('.tabs-details').removeClass('active');
  $('#' + getData).addClass(' active');

})
