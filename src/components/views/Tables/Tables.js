import React from 'react';
import styles from '../Tables/Tables.scss';
import { NavLink } from 'react-router-dom';

const Tables = () => (
    <div className={styles.component}>
        <h2>Tables view</h2>
        <NavLink to={`${process.env.PUBLIC_URL}/tables/booking/123abc`} activeClassName='active'>Booking</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New booking</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/tables/events/123abc`} activeClassName='active'>Events</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New event</NavLink>
    </div>
)

export default Tables;