$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      pagination: '.swiper-pagination',
      paginationClickable: true
    })

    // moving backgroung
    var x = 0;
    setInterval(function(){
        x-=1;
        $('.backgroundloop-sc').css('background-position', x + 'px 0');
    }, 50);

    // Trigger nice scroll
		$('html').niceScroll({
			cursorcolor: "#ed1c25",
			cursorwidth: "6px",
			cursorborder: "1px solid #ed1c25",
			cursorborderradius :0
		});

    // lang-change
    $(".nav-list .1-li").click(function(){
      $(".nav-list .lang-change").toggle();
    });

      $(".nav-list .2-li").click(function(){
        $(".nav-list .money-change").toggle();
    });

    // products-tabs toggel
    $('#myTabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
});


  });
