import SvgLoading from '../svg/loading (2).svg'

import styles from './loading.module.css'

function Loading() {
  return (
      <div className={styles.boxLoading}>
          <img src={`${SvgLoading}`} alt="loading" />
    </div>

  )
}

export default Loading