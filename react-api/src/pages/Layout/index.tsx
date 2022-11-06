import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <p>App</p>
        <Link to={'/'}>Home</Link>
      </header>
      <div className={styles.container}>
        <Outlet />
      </div>
      <footer>2022</footer>
    </>
  );
};

export default Layout;
