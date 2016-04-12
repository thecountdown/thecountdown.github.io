document.addEventListener('DOMContentLoaded', function () {

  var DAY_MILLIS = 1000 * 60 * 60 * 24;
  var HOUR_MILLIS = 1000 * 60 * 60;
  var MINUTE_MILLIS = 1000 * 60;
  var SECOND_MILLIS = 1000;

  var ALL = 0;
  var DAYS = 1;
  var HOURS = 2;
  var MINUTES = 3;
  var SECONDS = 4;
  var TARGET_DATE = new Date(2019, 0, 3, 0, 0, 0, 0);

  var displayType = 0;
  $('#unit').text("");
  $('#value').addClass('value-expanded');
  $('#value').removeClass('value-normal');

  $('#menu-button').click(function() {
    $('#menu').fadeToggle();
  })

  $('#all').click(function() {
    $('#unit').text("");
    displayType = ALL;
    $('.menu-item').removeClass('menu-item-selected');
    $('#all').addClass('menu-item-selected');
    $('#menu').fadeToggle();
    $('#value').removeClass('value-normal');
    $('#value').addClass('value-expanded');
    $('#unit').text("");
  });

  $('#days').click(function() {
    $('#unit').text("");
    displayType = DAYS;
    $('.menu-item').removeClass('menu-item-selected');
    $('#days').addClass('menu-item-selected');
    $('#value').removeClass('value-expanded');
    $('#value').addClass('value-normal');
    $('#unit').text("DAYS LEFT");
    $('#menu').fadeToggle();
  });

  $('#hours').click(function() {
    $('#unit').text("");
    displayType = HOURS;
    $('.menu-item').removeClass('menu-item-selected');
    $('#hours').addClass('menu-item-selected');
    $('#value').removeClass('value-expanded');
    $('#value').addClass('value-normal');
    $('#unit').text("HOURS LEFT");
    $('#menu').fadeToggle();
  });

  $('#minutes').click(function() {
    $('#unit').text("");
    displayType = MINUTES;
    $('.menu-item').removeClass('menu-item-selected');
    $('#minutes').addClass('menu-item-selected');
    $('#value').removeClass('value-expanded');
    $('#value').addClass('value-normal');
    $('#unit').text("MINUTES LEFT");
    $('#menu').fadeToggle();
  });

  $('#seconds').click(function() {
    $('#unit').text("");
    displayType = SECONDS;
    $('.menu-item').removeClass('menu-item-selected');
    $('#seconds').addClass('menu-item-selected');
    $('#value').removeClass('value-expanded');
    $('#value').addClass('value-normal');
    $('#unit').text("SECONDS LEFT");
    $('#menu').fadeToggle();
  });

  window.setInterval(function(){
    var timeDifference = TARGET_DATE.getTime() - (new Date()).getTime();
    var updatedValue = "";
    switch (displayType) {
      case ALL:
        var d = Math.floor(Math.abs(timeDifference / DAY_MILLIS));
        var remainder = Math.abs(timeDifference % DAY_MILLIS);

        var h = Math.floor(remainder / HOUR_MILLIS);
        remainder = remainder % HOUR_MILLIS;

        var m = Math.floor(remainder / MINUTE_MILLIS);
        remainder = remainder % MINUTE_MILLIS;

        var s = Math.floor(remainder / SECOND_MILLIS);

        updatedValue = d + ":" + h + ":" + m + ":" + s;
        break;
      case DAYS:
        updatedValue = Math.floor(Math.abs(timeDifference / 1000 / 60 / 60 / 24));
        break;
      case HOURS:
        updatedValue = Math.floor(Math.abs(timeDifference / 1000 / 60 / 60));
        break;
      case MINUTES:
        updatedValue = Math.floor(Math.abs(timeDifference / 1000 / 60));
        break;
      case SECONDS:
        updatedValue = Math.floor(Math.abs(timeDifference / 1000));
        break;
    }

    $('#value').text(updatedValue);
  }, 980);


}, false);
