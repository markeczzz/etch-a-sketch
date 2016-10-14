/*globals $:false */
/*globals document:false */
/*jslint node:true */
$(document).ready(function () {
  var $box = $('<div class ="box"></div>');
  var $new_row = $('<div class ="new_row"></div>');
  for (var i = 0; i < 16; i++) {
    for (var j = 0; j < 16; j++) {
      $('.main').append($box.clone());
    }
    $('.main').append($new_row.clone());
  }
});
