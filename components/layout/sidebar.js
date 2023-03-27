import Link from 'next/link'
import { useRouter } from 'next/router'

export default function sidebar() {
  const router = useRouter();
  
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="#" className="brand-link">
        <img
          src="assets/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="assets/dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link href="/">
              <a className={router.pathname == "/" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                </p>
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/bookings">
              <a className={router.pathname == "/bookings" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-calendar" />
                <p>
                  Bookings
                  <span className="right badge badge-success">Cool</span>
                </p>
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/repair">
              <a className={router.pathname == "/repair" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-tools" />
                <p>
                  Repair
                  <span className="right badge badge-danger">New</span>
                </p>
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/users">
              <a className={router.pathname == "/users" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-users" />
                <p>
                  Users
                  <span className="right badge badge-danger">New</span>
                </p>
              </a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="/blank">
              <a className={router.pathname == "/blank" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-file" />
                <p>
                  Blank
                </p>
              </a>
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
