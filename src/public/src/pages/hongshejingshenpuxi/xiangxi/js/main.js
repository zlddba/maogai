$(document).ready(function() {
	$("body").parent().css("overflow-y","hidden");
	setTimeout(picopa,2000)
	function picopa(){
        $(".content_box").css("opacity","1");
    }
	var $tishi=$('.tishi');
	var $pageBox=$('.pageBox');
	var $arrow=$(".arrow");
	var $copyright=$(".copyright");
    var swiper = new Swiper('.swiper-container-p1', {
		pagination : '.pagination1',
        paginationClickable: true,
        mousewheelControl: true,
        keyboardControl: true,
        effect: 'slide',
        direction: 'vertical',
        onInit: function (swiper) {
            $pageBox.hide();
			$arrow.css("bottom","20%")
        },
        onSlideChangeStart: function(swiper){
            if(swiper.activeIndex==0){
                $pageBox.hide();
                $pageBox.css("display","none")
				$arrow.css("bottom","28%")
            }else{
				$arrow.css("bottom","10%")
                $pageBox.css("display","flex")
				$pageBox.show();
				//$('.navList ul li').removeClass('active');
		        //$('.navList ul li').eq(swiper.activeIndex-1).addClass('active');
				//console.log($('.navList ul li').eq(swiper.activeIndex-1).text())				
				if($('.navList ul li').eq(swiper.activeIndex-1).text().length > 1){
					$tishi.text($('.navList ul li').eq(swiper.activeIndex-1).text())
					if($tishi.text().length > 11){
						$tishi.addClass("xiaoz");
					}else{
						$tishi.removeClass("xiaoz");
					}
					$tishi.css("top",$(".pagination1 .swiper-pagination-bullet-active").offset().top)
					if($(".pagination1").is(":hover")){
						$tishi.css("opacity","1");
					}
				}else{
					$tishi.text($('.navList ul li').eq(swiper.activeIndex-1).text())
					$tishi.css("opacity","0");
				}
			}
			if(swiper.activeIndex>=6){
				$copyright.show();
			}else{
				$copyright.hide();
			}
        }
    });
	$(".pagination1").mouseenter(function(){
	  //console.log($tishi.text())	
	  if($tishi.text().length > 1){
		if($tishi.text().length > 11){
			$tishi.addClass("xiaoz");
		}else{
			$tishi.removeClass("xiaoz");
		}
	  	$tishi.css("top",$(".pagination1 .swiper-pagination-bullet-active").offset().top)
      	$tishi.css("opacity","1");
	  }
    }).mouseleave(function(){ 
      $tishi.css("opacity","0");
    });    
	$(".title img").click(function(){
      	swiper.slideTo(0,10,false);
    });
	$(".gjcbg span").each(function(index, element){
      	$(this).click(function(evt){
			var index = $(".gjcbg span").index(this);
			$(".tcbox").eq(index).fadeIn(200);
 			$(".tanchu").fadeIn(300);
			$("body").css({overflow:'hidden'});
        });
    });
	$(".tanchu .close").click(function(){
      	$(".tcbox").hide();
 		$(".tanchu").hide();
		$("body").css({overflow:'auto'});
    });
	$('.navList ul li').on('click',function(){
		  var index = $(this).index();
		  $('.navList ul li').removeClass('active');
		  $(this).addClass('active');
		  swiper.slideTo(index+1, 1000, false);
	})
	$('.p3tit img').on('click',function(){
		  var index = $(this).index();
		  swiper.slideTo(index+3, 1000, false);
	})
	
	var w1 = document.body.offsetWidth;
    //console.log(w1)
    if(w1 < 1200 && !/Android|iPhone/i.test(navigator.userAgent)){
        $(".pageBox").css({
          "display":"none",
          "position":"static"
        });
    }
});
console.log(window.screen.height)
if (!/Android|iPhone/i.test(navigator.userAgent) && window.screen.height < 901) {
    var scale = 1;
    var scale2 = 1;
	
    scale = window.screen.height / 1080
    scale2 = window.innerHeight/1080;

    $('.content_box2').css({
      'transform': 'scale(' + scale + ')',
      'margin-top': window.innerHeight / 2 - 420
    })
	$('.content_box3').css({
      'transform': 'scale(' + scale2 + ')',
      'margin-top':window.innerHeight / 2 - 420,
	  //'top':scale*70+"%",
    })
	$('.tcny').css({
      'transform': 'scale(' + scale + ')',
	  //'margin':'0 auto',
      //'margin-top':window.innerHeight / 2 - 500,
	  //'top':scale*70+"%",
	  //'left':0,
	  //'right':0,
    })
}
