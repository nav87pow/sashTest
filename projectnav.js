var currentSlide = 0

var totalSlide= $('.projects div').length

var moveSlide = function (slide) {
    var leftPositin = (-slide * 100) + 'vw'
  $('.project').css('left', leftPositin)
  
}

var nextSlide = function(){
currentSlide = currentSlide + 1
  
  if(currentSlide >= totalSlide) {
     currentSlide = 0
  }
  moveSlide(currentSlide)
}
var previousSlide = function(){
currentSlide = currentSlide - 1
  
  if(currentSlide < 0) {
     currentSlide = totalSlide - 1
  }
  
  moveSlide(currentSlide)

}

var autoSlide = setInterval(function() {
  nextSlide()
}, 3000 )

$('.next').on('click', function(){
  clearInterval(autoSlide)
    nextSlide() 
})

$('.prev').on('click', function(){
   clearInterval(autoSlide)
 previousSlide()
})
 var slideNumber=currentSlide + 1

$('body').on('keydown', function(event){
  var keyCode = event.keyCode
  if(keyCode == 37){
   clearInterval(autoSlide)
    previousSlide()
  }else if(keyCode == 39){
clearInterval(autoSlide)
nextSlide() 
}
})
