'use client';
import styles from '@styles/common/default-page.module.scss';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Offline() {
  const router = useRouter();

  //redirect to home if user is connected to network
  useEffect(() => {
    if (navigator.onLine) {
      return router.push('/');
    }
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>503 - You are offline</h1>
      <p className={styles.paragraph}>
        Oops! Seems like you are facing some network issue
      </p>

      <button className={styles.button} onClick={refreshPage}>
        Refresh the page
      </button>
    </div>
  );
}
