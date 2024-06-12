import { Calendar as BigCalendar, CalendarProps } from "react-big-calendar";
import moment from "moment";
impor Cal

const localizer = momentLocalizer(moment);

export default function Calendar(props) {
  // Remove type information from props
  return <BigCalendar {...props} localizer={localizer} />;
}