import React from 'react';
import styles from './index.less';
import { LoginCard } from './components/LoginCard';

export default function Page() {
  return (
    <div className="w-full h-full flex justify-center">
      <LoginCard />
    </div>
  );
}
