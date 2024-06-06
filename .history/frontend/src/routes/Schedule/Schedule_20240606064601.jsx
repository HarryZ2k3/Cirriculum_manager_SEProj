// import Transition from '../../utils/Transition'
// import './Schedule.css';
// // import { useState, useEffect } from 'react';
// // import { Calendar, dateFnsLocalizer } from 'react-big-calendar';

// export default function Schedule() {
// 	return (
// 		<Transition className="bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100% overflow-y-auto">
// 			<div className="flex flex-grow">
// 				<table id="ContentPlaceHolderTable1" className ="classTable" cellspacing="0" cellpadding="1">
// 					<div>
// 						<tr id="ContentPlaceHolderTableRow" className ="center" >
// 							<th id="ContentPlaceHolderTableCell123"></th>

// 							<th id="ContentPlaceHolderTableCell124">
// 								<span>Mon</span>
// 							</th>
// 							<th id="ContentPlaceHolderTableCell125">
// 								<span>Tue</span>
// 							</th>
// 							<th id="ContentPlaceHolderTableCell126">
// 								<span>Wed</span>
// 							</th>
// 							<th id="ContentPlaceHolderTableCell127">
// 								<span>Thu</span>
// 							</th>
// 							<th id="ContentPlaceHolderTableCell128">
// 								<span>Fri</span>
// 							</th>
// 							<th id="ContentPlaceHolderTableCell129">
// 								<span>Sat</span>
// 							</th>
// 							<th id="ContentPlaceHolderTableCell130">
// 								<span>Sun</span>
// 							</th>
// 							{/* <td id="ContentPlaceHolderTableCell131" ></td> */}
// 						</tr>
// 					</div>
// 					<div>
// 						<tr>
// 							<td title=" 01 (từ 08:00 đến 08:50)" align="center" id="ContentPlaceHolderBody1"> 01</td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 								<td id="ContentPlaceHolderBody2"></td>
// 								<td id="ContentPlaceHolderBody2"></td>
// 								<td id="ContentPlaceHolderBody2"></td>
// 								<td id="ContentPlaceHolderBody2"></td>
// 								<td id="ContentPlaceHolderBody2"></td>
// 						</tr><tr>
// 							<td title=" 02 (từ 08:50 đến 09:40)" align="center" id="ContentPlaceHolderBody1"> 02</td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 								<td id="ContentPlaceHolderBody2"></td>
// 								<td id="ContentPlaceHolderBody2"></td>
// 								<td id="ContentPlaceHolderBody2"></td>
// 								<td id="ContentPlaceHolderBody2"></td>
// 								<td id="ContentPlaceHolderBody2"></td>
// 						</tr><tr>
// 							<td title=" 03 (từ 09:40 đến 10:30)" align="center" id="ContentPlaceHolderBody1"> 03</td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 						</tr><tr>
// 							<td title=" 04 (từ 10:35 đến 11:25)" align="center" id="ContentPlaceHolderBody1"> 04</td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 						</tr><tr>
// 							<td title=" 05 (từ 11:25 đến 12:15)" align="center" id="ContentPlaceHolderBody1"> 05</td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 						</tr><tr>
// 							<td title=" 06 (từ 12:15 đến 13:05)" align="center" id="ContentPlaceHolderBody1"> 06</td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 						</tr><tr>
// 							<td title=" 07 (từ 13:15 đến 14:05)" align="center" id="ContentPlaceHolderBody1"> 07</td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 						</tr><tr>
// 							<td title=" 08 (từ 14:05 đến 14:55)" align="center" id="ContentPlaceHolderBody1"> 08</td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 						</tr><tr>
// 							<td title=" 09 (từ 14:55 đến 15:45)" align="center" id="ContentPlaceHolderBody1"> 09</td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 						</tr><tr>
// 							<td title=" 10 (từ 15:50 đến 16:40)" align="center" id="ContentPlaceHolderBody1"> 10</td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 						</tr><tr>
// 							<td title=" 11 (từ 16:40 đến 17:30)" align="center" id="ContentPlaceHolderBody1"> 11</td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 						</tr><tr>
// 							<td title=" 12 (từ 17:30 đến 18:15)" align="center" id="ContentPlaceHolderBody1"> 12</td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 							<td id="ContentPlaceHolderBody2"></td>
// 						</tr>
// 						{/* <tr>
// 							<td id="ContentPlaceHolderBody3"></td>
// 							<td align="center" style="color:White;background-color:#idc;ContentPlaceHolderBody2">THỨ HAI</td>
// 							<td align="center" style="color:White;background-color:#idc;ContentPlaceHolderBody2">THỨ BA</td>
// 							<td align="center" style="color:White;background-color:#idc;ContentPlaceHolderBody2">THỨ TƯ</td>
// 							<td align="center" style="color:White;background-color:#idc;ContentPlaceHolderBody2">THỨ NĂM</td>
// 							<td align="center" style="color:White;background-color:#idc;ContentPlaceHolderBody2">THỨ SÁU</td>
// 							<td align="center" style="color:White;background-color:#idc;ContentPlaceHolderBody2">THỨ BẢY</td>
// 							<td align="center" style="color:White;background-color:#idc;ContentPlaceHolderBody2">CHỦ NHẬT</td>
// 						</tr> */}
// 					</div>
// 				</table>
// 			</div>

// 			<div className ="center">
// 				<p >Huy7</p>
// 			</div>
// 		</Transition>
// 	)
// }

import Transition from '../../utils/Transition'
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // Assuming you only need interaction plugin
import timeGripPlugin from "@fullcalendar/timegrid";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Schedule.css";
// Add other plugins as needed (e.g., timeGridPlugin)


function Schedule () {
    const events = [
      {
        title: "Web Application Development",
        start: "2024-05-20T08:00:00",
        end: "2024-05-20T11:25:00",
        content: "Web Application Laborary</p><p>Teacher:N.T.Nghia</p><p>Room: ONLINE"
      },
      {
        title: "Information System Management",
        start: "2024-05-21T08:00:00",
        end: "2024-05-21T10:30:00",
        content: "204"
      },
      {
        title: "Artificial Intelligence",
        start: "2024-05-21T10:35:00",
        end: "2024-05-21T13:05:00",
        content: "204"
      },
      {
        title: "Information System Management",
        start: "2024-05-21T13:15:00",
        end: "2024-05-21T15:45:00",
        content: "204"
      },
      {
        title: "Software Engineering",
        start: "2024-05-23T08:00:00",
        end: "2024-05-23T10:30:00",
        content: "204"
      },
      {
        title: "Web Application Development",
        start: "2024-05-24T08:00:00",
        end: "2024-05-24T10:30:00",
        content: "204"
      },
      {
        title: "Operating System",
        start: "2024-05-24T10:35:00",
        end: "2024-05-24T13:05:00",
        content: "204"
      },
      {
        title: "Operating System",
        start: "2024-05-25T08:00:00",
        end: "2024-05-25T10:30:00",
        content: "204"
      },
      {
        title: "Artificial Intelligence",
        start: "2024-05-25T10:35:00",
        end: "2024-05-25T13:05:00",
        content: "204"
      },
      {
        title: "Software Engineering",
        start: "2024-05-25T13:15:00",
        end: "2024-05-25T15:45:00",
        content: "204"
      },
      //
      {
        title: "Web Application Development",
        start: "2024-05-27T08:00:00",
        end: "2024-05-27T11:25:00",
        content: "204"
      },
      {
        title: "Information System Management",
        start: "2024-05-28T08:00:00",
        end: "2024-05-28T10:30:00",
        content: "204"
      },
      {
        title: "Artificial Intelligence",
        start: "2024-05-28T10:35:00",
        end: "2024-05-28T13:05:00",
        content: "204"
      },
      {
        title: "Information System Management",
        start: "2024-05-28T13:15:00",
        end: "2024-05-28T15:45:00",
        content: "204"
      },
      {
        title: "Software Engineering",
        start: "2024-05-30T08:00:00",
        end: "2024-05-230T10:30:00",
        content: "204"
      },
      {
        title: "Web Application Development",
        start: "2024-05-31T08:00:00",
        end: "2024-05-31T10:30:00",
        content: "204"
      },
      {
        title: "Operating System",
        start: "2024-05-31T10:35:00",
        end: "2024-05-31T13:05:00",
        content: "204"
      },
      {
        title: "Operating System",
        start: "2024-06-01T08:00:00",
        end: "2024-06-01T10:30:00",
        content: "204"
      },
      {
        title: "Artificial Intelligence",
        start: "2024-06-01T10:35:00",
        end: "2024-06-01T13:05:00",
        content: "204"
      },
      {
        title: "Software Engineering",
        start: "2024-06-01T13:15:00",
        end: "2024-06-01T15:45:00",
        content: "204"
      }
    ]
    const contents = [
      {
        content: "asdfa",
      },
      {
        content: "asdfa",
      },
    ]
    return (
    <Transition className="bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100% overflow-y-auto">
      
        <FullCalendar
        plugins = {[dayGridPlugin, timeGripPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // Customize header buttons
        }}
        events={
        //   [{ title: "Meeting", start: new Date("2024-05-24"), end: new Date("2024-05-25") },
        //   // Add more event objects here
        // ]
        events
      }
        height="90vh" // Set the calendar height
        eventDidMount={(info) => {
          return new bootstrap.Popover(info.el, {
            title: info.event.title,
            placement: "auto",
            trigger: "hover",
            customClass: "popoverStyle",
            // content: "<p>Subject: Software Engineering_G1_L1</p><p>Teacher: N.T.T.Loan</p><p>Room: A1.109</p>",
            //content:"<p>Web Application Laborary</p><p>Teacher:N.T.Nghia</p><p>Room: ONLINE</p>",
            html: true,
          });
        }}
        />
    </Transition>
  );
}
export default Schedule;