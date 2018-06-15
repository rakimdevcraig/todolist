// Take the input and put it into the li

// event listener
$(document).ready(function(){
  $('form').on('submit',function(e){
    e.preventDefault()
  });
  // function for taking input
  var toDoItem
  var count = 0
  var countNone = 0
  var CountDone = 0
  var changer



  //Event listener for click add button
  $('#add').on('click',function(){
    var listItem = $('input').val()
    toDoItem = $('ul').append('<li>' +listItem+ ' <a id="edit" class="tool hidden">Edit</a>' + '<a id="remove" class="tool hidden">Remove</a>' + '</li>')
    $('input').val('');
    count += $('ul li').length
    toDoCount();
  });
  //Event listener for mouse over li
  $('ul').on("mouseenter mouseleave",'li', function(){
    $(this).find(".tool").toggleClass('hidden')
  })
  // Say how many items are left
  function toDoCount (){
    count = $('ul li').length - countNone
    $('#numInList').html(count);
    countNone = 0
  }
  // Ability to clear entire list
  $('#all').on('click',function(){
    $('li').empty();
    count = $('ul li').length
    toDoCount()
  });
  // Check off tasks completed
  $('#completed').on('click',function(){
    $('.done').remove();
    countDone = $('.done').length
    count = $('ul li').length - countDone
  });
  $('ul').on('click','li',function(){
    $(this).toggleClass('done')
    countNone = $('.done').length
    count = $('ul li').length - countNone
    toDoCount()
  });
  //Event listener for remove anchor
  $('ul').on('click', '#remove', function(ev){
    $(this).parent().remove()
  })

  //Event listener for edit anchor
  $('ul').on('click', '#edit', function(ev){
    var editListItem = $(this).parent().clone().children().remove().end().text()
    $(this).parent().html('<input type="text" name="" value="">')
    var pleaseEdit = $('ul input').val(editListItem)
    $('ul').on("keypress","input", function(e){
      var newVal = $(this).val();
       if(e.which == 13){
           $(this).parent().text(newVal).append(' <a id="edit" class="tool hidden">Edit</a>' + '<a id="remove" class="tool hidden">Remove</a>')

       }
   });

    // $(this).parent().attr('contenteditable','true')

  })

  //
});
