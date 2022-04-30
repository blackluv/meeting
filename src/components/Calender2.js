import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

const schedulerData = [
    { startDate: '2022-04-12T09:45', endDate: '2022-04-12T11:00', title: 'Dogecoin Integration' },
    { startDate: '2022-04-13T12:00', endDate: '2022-04-13T13:30', title: 'Podcast Appearance' },
];

const Calendar = () => {

    const saveAppointment = (data) => {
        console.log('committing changes');
        console.log(data);
    }

    return (<div id="calender">
      <Scheduler data={schedulerData}>
        <ViewState />
        <EditingState onCommitChanges={saveAppointment} />
        <IntegratedEditing />
        <WeekView startDayHour={9} endDayHour={19}/>
        <Appointments />
        <AppointmentForm />
      </Scheduler>
    </div>);
}

export default Calendar;