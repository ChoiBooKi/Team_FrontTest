import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import * as config from '../config'

// https://fullcalendar.io/docs/google-calendar
const Calendar = () => {
  const apiKey = config.Calendar_API_KEY;
  const id = config.Calendar_ID

  return (
    <div className="cal-container">
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        googleCalendarApiKey={apiKey}
        events={{
          googleCalendarId: id,
          // events: [
          //   { title: 'event 1', date: '2022-07-15' },
          //   { title: 'event 2', date: '2022-07-02' }]
        }}
        eventDisplay={'block'}
        eventTextColor={'#FFF'}
        eventColor={'#F2921D'}
        height={'660px'}
        Toolbar
      />
    </div>
  );
}

export default Calendar