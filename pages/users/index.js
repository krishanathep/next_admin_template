import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

export default function users() {
  const users = [
    {
      id: 1,
      fname: "Karn",
      lname: "Yong",
      username: "karn.yong@mecallapi.com",
      avatar: "https://www.mecallapi.com/users/1.png",
    },
    {
      id: 2,
      fname: "Ivy",
      lname: "Cal",
      username: "ivy.cal@mecallapi.com",
      avatar: "https://www.mecallapi.com/users/2.png",
    },
    {
      id: 3,
      fname: "Walter",
      lname: "Beau",
      username: "walter.beau@mecallapi.com",
      avatar: "https://www.mecallapi.com/users/3.png",
    },
    {
      id: 4,
      fname: "Gayla",
      lname: "Bertrand",
      username: "gayla.bertrand@mecallapi.com",
      avatar: "https://www.mecallapi.com/users/4.png",
    },
    {
      id: 5,
      fname: "Benjamin",
      lname: "Chaz",
      username: "benjamin.chaz@mecallapi.com",
      avatar: "https://www.mecallapi.com/users/5.png",
    },
    {
      id: 6,
      fname: "Delia",
      lname: "Robin",
      username: "delia.robin@mecallapi.com",
      avatar: "https://www.mecallapi.com/users/6.png",
    },
    {
      id: 7,
      fname: "Hector",
      lname: "Graves",
      username: "hector.graves@mecallapi.com",
      avatar: "https://www.mecallapi.com/users/7.png",
    },
    {
      id: 8,
      fname: "Diego",
      lname: "Greene",
      username: "diego.greene@mecallapi.com",
      avatar: "https://www.mecallapi.com/users/8.png",
    },
    {
      id: 9,
      fname: "Izzie",
      lname: "Mooney",
      username: "izzie.mooney@mecallapi.com",
      avatar: "https://www.mecallapi.com/users/9.png",
    },
    {
      id: 10,
      fname: "Romeo",
      lname: "Garner",
      username: "romeo.garner@mecallapi.com",
      avatar: "https://www.mecallapi.com/users/10.png",
    },
    {
      id: 11,
      fname: "Adrian",
      lname: "Faisal",
      username: "adrian.faisal@mecallapi.com",
      avatar: "https://www.mecallapi.com/users/11.png",
    },
    {
      id: 12,
      fname: "Katarina",
      lname: "Aba",
      username: "katarina.aba@mecallapi.com",
      avatar: "https://www.mecallapi.com/users/12.png",
    },
  ];

  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "fname",
      text: "First Name",
    },
    {
      dataField: "lname",
      text: "Last Name",
    },
    {
      dataField: "username",
      text: "Email",
    },
    {
      dataField: "avatar",
      text: "Avatar",
    },
  ];
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Users</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Users</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="card">
            <div className="card-header">
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
            </div>
            <div className="card-body">
            <BootstrapTable keyField="id" data={users} columns={columns} pagination={ paginationFactory() } />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
