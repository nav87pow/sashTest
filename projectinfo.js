

$('.close').on('click', function(){
  $('.holder').removeClass( 'hide' )
  $('.arrow').removeClass( 'hide' )
  $('.moreinfo').removeClass( 'visible' )
   $('.close').removeClass( 'visible' )
})
$('.project a').on('click', function(){
  var project = $(this).attr('data-project')

  $('.holder').addClass( 'hide' )
  $(project).show()
  
  $('.arrow').addClass( 'hide' )
  $(project).addClass( 'visible' )
   $('.close').addClass( 'visible' )
  
  return false
})
