(function(){
	var sliderCell = document.querySelectorAll(".canvas-top__cell"),
		sliderCanvas = document.getElementById('canvas_1'),
		sliderDots = document.querySelectorAll(".dots__unit"),
		currentIndex = 0;

	var fillSlider = function(){
		for(var i = 0; i < sliderCell.length; i++){
			sliderCell[i].style.backgroundImage = 'url("img/slide_'+i+'.png")';
		}
	}
	var auto = function(){
		startSlide = setInterval(function(){
				if (currentIndex < sliderCell.length-1){
					++currentIndex
				}else{currentIndex = 0}
		sliderChange(currentIndex);
	},3000)}

	var sliderChange = function(i){
		var currentIndex = i;
		var x = -currentIndex*100;
		 sliderCanvas.style.transform = "translateX("+x+"%)" ;
		 hightLightDot(currentIndex);
	}
	var dotIndex = function(){
		for( var i = 0; i < sliderDots.length; i++){
			(function(i){
				sliderDots[i].addEventListener('click',function(){
					sliderChange(i);
					clearInterval(startSlide);
					auto();
					currentIndex = i;
				})
			})(i);
		}
	}();
	var hightLightDot = function(n){
		for(var i = 0; i < sliderDots.length; i++){
			if(i === n){
				sliderDots[i].classList.add("dots__unit--active");
			}else{
				sliderDots[i].classList.remove("dots__unit--active");
			}
		}
	}
	auto();	
	fillSlider();
})();

(function(){
	var block = document.getElementById("animation"),
		btn = document.getElementById("animation_btn");

	var addClass = function(){
		btn.classList.toggle("close_animation");
		block.classList.toggle("play_animation");
	}
	btn.addEventListener("click",addClass);
})();