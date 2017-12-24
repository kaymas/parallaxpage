function createRemap(inMin, inMax, outMin, outMax) {
    return function remaper(x) {
        return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };
}

$(window).scroll(function(){

  $('header').css({
    'width': '320px',
    'height': '320px',
    'border-radius' : '50%',
    'margin-top' : '50px',
    'background-position' : 'center center'
  });

  var wScroll = $(this).scrollTop();
  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.15)){
    $('.clothes-pics img').each(function(i){
      setTimeout(function(){
        $('.clothes-pics img').eq(i).addClass('is-showing');
      },100 * i);
    });
  }

  if(wScroll > ($('.blogpost').offset().top - $(window).height() + 200)){

    var mapping_element = wScroll - $('.blogpost').offset().top + $(window).height() - 200;
    mapping_element = Math.max(0,mapping_element);
    var offsetmapx = createRemap(0,$(window).height(),0,240);
    var offsetmapy = createRemap(0,$(window).height(),0,100);
    var offsetx = offsetmapx(mapping_element);
    var offsety = offsetmapy(mapping_element);
    if(120 - offsetx < 0)offsetx = 120;
    if(50 - offsety < 0)offsety = 50;
    $('.blog-1').css({
      'transform': 'translate('+ (120 - offsetx)+'px,'+ (50 - offsety) +'px)'
    });
    $('.blog-3').css({
      'transform': 'translate(-'+ (120 - offsetx)+'px,'+ (50 - offsety) +'px)'
    });
  }

});
