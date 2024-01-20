import styles from "./alertMsg.module.css";

function AlertMsg() {
  return (
    <>
        <div className={`${styles.boxAlertMsg}`}>
          <p>CEP não encontrado...</p>
        </div>
    </>
  );
}

export default AlertMsg;
