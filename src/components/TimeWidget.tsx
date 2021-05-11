import React, { useState } from 'react';

import styles from '../assets/styles/components/timeWidget.module.scss';

function TimeWidget() {
  const [time, setTime] = useState({ date: new Date() });

  setTimeout(() => {
    setTime({ date: new Date() });
  }, 1000);

  return (
    <div className={styles.timeContainer}>
      <span className={styles.time}>
        {time.date.getHours().toString().padStart(2, '0')}:
        {time.date.getMinutes().toString().padStart(2, '0')}
        <span className={styles.timeSeconds}>
          :{time.date.getSeconds().toString().padStart(2, '0')}
        </span>
      </span>
      <span className={styles.date}>Seg, 10 Maio 2021</span>
    </div>
  );
}

export default TimeWidget;
