import styles from '@styles/common/default-page.module.scss';
import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404 - Page Not Found</h1>
      <p className={styles.paragraph}>
        Oops! The page you&apos;re looking for does not exist.
      </p>
      <Link href="/" passHref>
        <button className={styles.button}>Go back home</button>
      </Link>
    </div>
  );
}
