$(function(){

  $('.carousel__inner').slick({
    arrows:false,
    dots:true,
    slidesToShow:3,
    responsive: [
      {
        breakpoint: 805,
        settings: {
          slidesToShow: 2,
        }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
  }]
  });
});