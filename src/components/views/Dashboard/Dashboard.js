import React from 'react';
import styles from '../Dashboard/Dashboard.scss';
import { NavLink } from 'react-router-dom';

const Dashboard = () => (
    <div className={styles.component}>
        <h2>Dashboard view</h2>
        <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active'>Ordering</NavLink>
    </div>
)

export default Dashboard;