
// var main = function() {
//   $('.arrow-next').click(function() {
//     var currentItem = $('.active-slide');
//     var nextItem = currentItem.next();  

//   if($(nextItem).hasClass( "slide" )) { 
//     if(nextItem.length == 0) {
//       nextItem = $('.slide').first();
//     }
    
//     currentItem.removeClass('active-slide');
//     nextItem.addClass('active-slide');
//     }  
//   });

  
//   $('.arrow-prev').click(function() {
//     var currentItem = $('.active-slide');
//     var prevItem = currentItem.prev();

//     if($(prevItem).hasClass( "slide" )) { 
//       if (prevItem.length == 0) {
//       prevItem = $('.slide').last();
//         }
    
//     currentItem.removeClass('active-slide');
//     prevItem.addClass('active-slide');
//     }
//   });


// };

// $(document).ready(main);
// 
$(document).ready(function() {

$('.arrow-next').click(function() {
    var currentItem = $('.active-slide');
    var nextItem = currentItem.next();  

  if($(nextItem).hasClass( "slide" )) { 
    if(nextItem.length == 0) {
      nextItem = $('.slide').first();
    }
    
    currentItem.removeClass('active-slide');
    nextItem.addClass('active-slide');
    }  
  });

  
  $('.arrow-prev').click(function() {
    var currentItem = $('.active-slide');
    var prevItem = currentItem.prev();

    if($(prevItem).hasClass( "slide" )) { 
      if (prevItem.length == 0) {
        prevItem = $('.slide').last();
      }
    
    currentItem.removeClass('active-slide');
    prevItem.addClass('active-slide');
    }
  });

  $('#clickable').click(function() {
    $(this).toggleClass('checked');
    $(this).toggleClass('unchecked');
  });
});
