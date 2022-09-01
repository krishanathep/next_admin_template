import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
