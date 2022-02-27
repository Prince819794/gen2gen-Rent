import React from "react";
import QRCode from "react-qr-code";
import styles from "./style.module.css";
var keys=[];
for(var i=1;i<=50;i++)
keys.push(i);
const Qr = () => {
  function makeid(length,key) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopQrstuvwxyz0123456789";
    
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if(key>=10)
    result = "cycle" + result +"00"+ key + "/NITS";
    else
    result = "cycle" + result +"000"+ key + "/NITS";
    return result;
  }

  
  return (

    <div className={styles.qr_container}>
    {keys.map(key=>(
      <div className={styles.grid}>
      <QRCode value={makeid(5,key)} /></div>))}
      
    </div>
  );
};

export default Qr;
