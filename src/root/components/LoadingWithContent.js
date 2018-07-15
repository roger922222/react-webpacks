import React from 'react'
import { Portal } from 'react-ultra-select'
import styles from './LoadingWithContent.css'

const LoadingWithContent = props => {
    const { children } = props

    return (
      <Portal className={styles['loading-bg']}>
          <div className={styles['loading-box']}>
              <div className={styles['loading-container']}>
                  <img className={styles['loading-loop']} alt="loading" src={require('../../images/loading_loop.png')} />
                  <img className={styles['loading-logo']} alt="loop" src={require('../../images/loading_logo.png')} />
              </div>
              <div className={styles['loading-content-children']}>
                  {children}
              </div>
          </div>
      </Portal>
  )

}

export default LoadingWithContent