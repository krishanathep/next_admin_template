import React, { useState, useEffect } from "react";
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  
  useEffect(() => {
    setShowChild(true);
  }, [])

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp;
