$(function (){


   $('a').click (function () {
        var id  =$(this).attr('href');
        var	top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
   /*end scroll;*/

   $('button').mouseenter(function(){
   		$(this).css({
   			'box-shadow' : '0 2px 2px 0 rgba(0,0,0,0.75)'
   		})

   });
    $('button').mouseout(function(){
   		$(this).css({
   			'box-shadow' : 'none'
   		})

   });

/*end button*/

      $('h1, h2, h3').mouseenter(function(){
   		$(this).animate({'fontSize' : '4.75em','fontWeight' : 'bold'
   		}, "slow")

   });
    $('h1, h2, h3').mouseout(function(){
   		$(this).animate({'fontSize' : '3.75em','fontWeight' : 'normal'
   		}, "slow")

   });
    /*end zagolovki*/


});
