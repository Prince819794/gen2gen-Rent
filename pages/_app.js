import Load from "../style-guide/components/lottie/loader";
import React,{useState, useEffect} from "react";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() => setLoading(false), 1000);
    // setLoading(false),[]
   })

  return (
    <>
      {!loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <Load/>
      )}
    </>
  );
}

export default MyApp