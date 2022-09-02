import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

export default function repair() {
  const products = [
    { id: 1, name: "Green Tree", price: 50 },
    { id: 2, name: "Black Tree", price: 50 },
    { id: 3, name: "Lemon Tree", price: 50 },
    { id: 4, name: "Black Coffee", price: 50 },
    { id: 5, name: "Lihgt Coffee", price: 50 },
  ];

  const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "name",
      text: "Product Name",
    },
    {
      dataField: "price",
      text: "Product Price",
    },
  ];

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Repair</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Repair</li>
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
              <BootstrapTable keyField="id" data={products} columns={columns} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
