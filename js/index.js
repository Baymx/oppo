$(function(){
	var timer=setInterval(autoPaly,3000);
	var index=0;
	function autoPaly(){
		index++
		if(index==4){
			index=0;
		}
		console.log(index)
		$(".banner-btn li").eq(index).addClass("in").siblings().removeClass("in");
		$(".banner-img img").eq(index).fadeIn(800).siblings().fadeOut(800);
	}
})
