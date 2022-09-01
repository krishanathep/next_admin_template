import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const loginPageHeader = router.pathname === "/login" ? false : true;
  const registerPageHeader = router.pathname === "/register" ? false : true;

  return (
    <div className="wrapper">
      {loginPageHeader && registerPageHeader && <Navbar />}
      {loginPageHeader && registerPageHeader && <Sidebar />}
      <main>{children}</main>
      {loginPageHeader && registerPageHeader && <Footer />}
    </div>
  );
}
