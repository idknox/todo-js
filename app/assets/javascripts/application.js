// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

$(document).ready(function () {

//  Create and hide HTML

  $('#todos-container').hide();
  $('#completed-container').hide();

  $('#todos-container').append("<div id='todos'><h2>Todo!</h2><div class='flash'></div><ul id='todo-list'></ul></div>");
  $('#completed-container').append("<div id='todos-completed'><h2>Complete</h2><div class='flash-completed'></div><ul id='todo-list-completed'></ul></div>");

  flash = $('.flash');
  flashCompleted = $('.flash-completed');

  $('#form').append("<h1>Todoly</h1><input type='text' id='todo'/><br><button id='submit'>Create Todo</button>");

//  Create

  $('#submit').on('click', function () {
    flash.show();
    flash.empty();
    $('#todos-container').show();
    $('#todo-list').append("<li>" + $('#todo').val() + "<a href='#' class='close-todo'>X</a><a href='#' class='complete-todo'>✓</a></li>");
    flash.append("<span>Todo created</span><a href='#' id='close'>X</a>");
    flash.css('background-color', 'green');

    var stopFlash = function () {
      $('.flash').slideUp();
    };
    window.setTimeout(stopFlash, 5000);
  });

//  Manual Flash Close

  flash.on('click', '#close', function () {
    $('#flash').slideUp();
  });
// Delete

  $('#todos-container').on('click', '.close-todo', function () {
    $(this).parent().remove();
    flash.show();
    flash.children('span').remove();
    flash.removeAttr('background-color');
    flash.css('background-color', 'red');
    flash.append('<span>Todo deleted</span>');

    var stopFlash = function () {
      $('#flash').slideUp();
    };
    window.setTimeout(stopFlash, 5000);
  });

//  Completed

  $('#todos-container').on('click', '.complete-todo', function () {
    $('#completed-container').show();
    $('#todo-list-completed').append($(this).parent());
    $(this).remove();
    $(this).siblings('#close-todo').css('color', 'black');

    flashCompleted.show();
    flashCompleted.empty();
    flashCompleted.append("<span>Todo completed</span><a href='#' id='close'>X</a>");
    flashCompleted.css('background-color', 'green');

    var stopFlash = function () {
      $('.flash-completed').slideUp();
    };
    window.setTimeout(stopFlash, 5000);
  });

  $('#completed-container').on('click', '.close-todo', function () {
    $(this).parent().remove();
    flashCompleted.show();
    flashCompleted.children('span').remove();
    flashCompleted.removeAttr('background-color');
    flashCompleted.css('background-color', 'red');
    flashCompleted.append('<span>Todo deleted</span>');

    var stopFlash = function () {
      $('.flash-completed').slideUp();
    };
    window.setTimeout(stopFlash, 5000);

    if ($('#todo-list-completed').is(':empty')) {
      $('#completed-container').hide();
    }
  });


});