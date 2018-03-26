import React, { Component } from 'react';
import moment from 'moment';

class BookOnline2 extends Component {
  render() {
    (function() { // document ready

        var calendar = ('#calendar').fullCalendar({
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'agendaWeek,agendaDay'
          },
          defaultView: 'agendaWeek',
          defaultTimedEventDuration: '01:00',
          allDaySlot: false,
          scrollTime: '08:00',
          businessHours: {
            start: '9:00',
            end: '18:00',
          },
          lang: /^en-/.test(navigator.language) ? 'en' : 'zh-cn',
          eventOverlap: function(stillEvent, movingEvent) {
            return true;
          },
          events: [{
            title: '技术部周例会',
            start: '2015-05-22T15:00+08:00'
          }, {
            title: '运营部',
            start: '2015-05-22T12:00+08:00'
          }],
          editable: true,
          selectable: true,
          selectHelper: true,
          select: function(start, end) {
            var duration = (end - start) /1000;
            if(duration == 1800) {
              // set default duration to 1 hr.
                end = start.add(30, 'mins');
              return calendar.fullCalendar('select', start, end);
            }
            var title = prompt('Event Title:');
            var eventData;
            if (title && title.trim()) {
              eventData = {
                title: title,
                start: start,
                end: end
              };
              calendar.fullCalendar('renderEvent', eventData);
            }
            calendar.fullCalendar('unselect');
          },
          eventRender: function(event, element) {
            var start = moment(event.start).fromNow();
            element.attr('title', start);
          },
          loading: function() {
            
          }
        });
      
      });
    return (
<div id="page">
  <div class="page-header">
    <h1>Reservation System (<a class="text-primary" href="http://preview.uedsky.com/demo/reserving" target="_blank">interactive demo</a>)</h1>
  </div>
  <div id="calendar"></div>
</div>
    );
  }
}


export default BookOnline2;
