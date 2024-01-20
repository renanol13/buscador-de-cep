import { useState } from "react";
import Search from "../components/Search";
import InfoCep from "./InfoCep";

import styles from "./home.module.css";

import { dataProps } from "../types/dataCep";
import Loading from "../components/Loading";
import AlertMsg from "../components/AlertMsg";

function Home() {
  const [data, setData] = useState<dataProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSearch = async (numCep: string) => {
    setIsError(false);
    setData(null);
    try {
      setLoading(true);
      const response = await fetch(`https://viacep.com.br/ws/${numCep}/json/`);
      const data = await response.json();
      const { bairro, ddd, localidade, complemento, uf, cep, erro } = data;

      const dataCep: dataProps = {
        bairro,
        ddd,
        localidade,
        complemento,
        uf,
        cep,
      };

      if (erro) {
        setIsError(true);
        return;
      }

      setData(dataCep);
    } catch (error) {
      setIsError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.boxMain}>
      <div className={styles.boxHome}>
        <h1>Buscador de CEP!</h1>
        <Search
          handleSearch={handleSearch}
          isError={isError}
          setIsError={setIsError}
        />
        {isError && <AlertMsg />}
        {loading ? <Loading /> : data && <InfoCep {...data} />}
      </div>
    </div>
  );
}

export default Home;
