import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../PageNav/PageNav.scss';
import Button from '@material-ui/core/Button';

const PageNav = () => (
  <nav className={styles.component}>
    <Button className={styles.link} component={React.forwardRef(
      (props, ref) => (
        <NavLink to={`${process.env.PUBLIC_URL}/`} activeClassName='active' {...props} innerRef={ref} />
      )
    )}>Dashboard</Button>
    <Button className={styles.link} component={React.forwardRef(
      (props, ref) => (
        <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active' {...props} innerRef={ref} />
      )
    )}>Login</Button>
  </nav>
);

export default PageNav;



