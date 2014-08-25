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
//= require_tree .

$(document).ready(function () {
  $('#todos-container').hide();
  $('#todos-container').append("<div id='todos'></div>");

  todos = $('#todos');

  todos.append("<h2>Todo!</h2><div id='flash'></div><ul id='todo-list'></ul>");
  flash = $('#flash');

  $('#form').append("<h1>Todoly</h1><input type='text' id='todo'/><br><button id='submit'>Create Todo</button>");

  $('#submit').on('click', function () {
    flash.show();
    flash.empty();
    $('#todos-container').show();
    $('#todo-list').append("<li>" + $('#todo').val() + "<a href='#' class='close-todo'>X</a></li>");
    flash.append("<span>Todo created</span><a href='#' id='close'>X</a>");
    flash.css('background-color', 'green');

    var stopFlash = function () {
      $('#flash').slideUp();
    };
    window.setTimeout(stopFlash, 5000);
  });

  flash.on('click', '#close', function () {
    $('#flash').slideUp();
  });

  todos.on('click', '.close-todo', function () {
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

});