
$(document).ready(function () {
  $("#flipbook").turn({
    width: 1920,
    height: 1080,
    autoCenter: true,
    duration: 2500,
    when: {

      turned: function (event, page, pageObj) {
        console.log('the current page is ' + page);
        currentPage = page;
        console.log(currentPage)
        setTimeout(animePage, 50);
      }
    }
  });
  function FadeTo(el) {
    $(el).fadeTo(1000, 1);
  }




  function animePage() {

    if (currentPage == 4 || currentPage == 5) {

      setTimeout(FadeTo, 500, "#image-Page2-1");
      setTimeout(FadeTo, 1000, "#image-Page2-2");
      setTimeout(FadeTo, 1500, "#image-Page2-3");
      setTimeout(FadeTo, 2000, "#image-Page2-4");

      setTimeout(FadeTo, 500, "#image-Page3-1");
      setTimeout(FadeTo, 1000, "#image-Page3-2");
      setTimeout(FadeTo, 1500, "#image-Page3-3");
      setTimeout(FadeTo, 2000, "#image-Page3-4");



    }

    else {
      $("#image-Page2-1").fadeOut(100, 0);
      $("#image-Page2-2").fadeOut(100, 0);
      $("#image-Page2-3").fadeOut(100, 0);
      $("#image-Page2-4").fadeOut(100, 0);

      $("#image-Page3-1").fadeOut(100, 0);
      $("#image-Page3-2").fadeOut(100, 0);
      $("#image-Page3-3").fadeOut(100, 0);
      $("#image-Page3-4").fadeOut(100, 0);


    }
    if (currentPage == 6 || currentPage == 7) {

      $("#image-Page5").animate({ top: "60px" }, 1000);

      $("#bandeau-Page6").animate({ right: "60px" }, 2000);

      $("#image-Page6").animate({ top: "360px" }, 2000)



    }

    else {

      $("#image-Page5").animate({ top: "-1000px" }, 1000);

      $("#bandeau-Page6").animate({ right: "2000px" }, 500);

      $("#image-Page6").animate({ top: "-1000px" }, 500)

    }



      
    







  }



  var book = document.getElementById("flipbook");

  var hammerBook = new Hammer(book);

  hammerBook.on("swiperight", function (ev) {
    $("#flipbook").turn("previous");
    console.log("swiipe")
  })

  hammerBook.on("swipeleft", function (ev) {
    $("#flipbook").turn("next");
    console.log("swiipe")
  })
  // Image fold //
  
  
  



  //Carousselle

  setInterval(function () {
    $(".slideshow ul").animate({ marginLeft: -350 }, 800, function () {
      $(this).css({ marginLeft: 0 }).find("li:last").after($(this).find("li:first"));
    })
  }, 3500);



});


