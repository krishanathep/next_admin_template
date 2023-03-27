import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function bookings() {
    const myEventsList = [
        {title:"Hello Bookings 1",start:"03/10/2023",end:"03/10/2023"},
        {title:"Hello Bookings 2",start:"03/15/2023",end:"03/15/2023"},
        {title:"Hello Bookings 3",start:"03/20/2023",end:"03/20/2023"},
        {title:"Hello Bookings 4",start:"03/25/2023",end:"03/25/2023"},
        {title:"Hello Bookings 5",start:"03/29/2023",end:"03/29/2023"},
    ]
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Bookings</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Bookings</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="card">
            {/* <div className="card-header">
              <h3 className="card-title">Title</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div> */}
            <div className="card-body">
              <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
