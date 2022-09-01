import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="assets/plugins/fontawesome-free/css/all.min.css"/>
        <link rel="stylesheet" href="assets/dist/css/adminlte.min.css"/>
      </Head>
      <body className="hold-transition sidebar-mini">
        <Main />
        <NextScript/>
          <script src="assets/plugins/jquery/jquery.min.js"></script>
          <script src="assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="assets/dist/js/adminlte.min.js"></script>
          {/* <script src="assets/dist/js/demo.js"></script> */}
      </body>
    </Html>
  );
}
