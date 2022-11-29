import React from 'react';
import styles from './index.less';
import { LoginCard } from './components/LoginCard';

export default function Page() {
  return (
    <div className={styles.login}>
      <LoginCard />
    </div>
  );
}
