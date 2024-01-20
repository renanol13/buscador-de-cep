import { dataProps } from "../types/dataCep";

import styles from './InfoCep.module.css'

function InfoCep({ bairro, complemento, ddd, localidade, uf, cep }: dataProps) {
    return (
        <div className={styles.boxInfoCep}>
            <h2>CEP: {cep}</h2>
            <p id={styles.localidade}>{localidade}</p>
            {complemento && <p><strong>Complemento:</strong> {complemento}</p>}
            {bairro && <p><strong>Bairro:</strong> {bairro}</p>}
            <div>
                <p><strong>UF:</strong> {uf}</p>
                <p><strong>DDD:</strong> ({ddd})</p>
            </div>
        </div>
    )
}

export default InfoCep;
