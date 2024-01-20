import { useState } from "react";
import styles from "./alertMsg.module.css";

function AlertMsg() {
  const [visibilityMsg, setisVisibilityMsg] = useState<boolean>(true);
  console.log(visibilityMsg);

  setTimeout(() => {
    setisVisibilityMsg(false);
  }, 3000);

  return (
    <>
      {visibilityMsg && (
        <div className={`${styles.boxAlertMsg}`}>
          <p>CEP não encontrado...</p>
        </div>
      )}
    </>
  );
}

export default AlertMsg;
