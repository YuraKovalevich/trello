import React from 'react';
import styles from '../styles/sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebar__list}>
                <li className={styles.sidebar__item}>Boards</li>
                <li className={styles.sidebar__item}>Templates</li>
                <li className={styles.sidebar__item}>Home</li>
            </ul>
            <div className={styles.workspace}>
                <h3 className={styles.workspace__title}>Workspaces</h3>
                <ul className={styles.workspace__list}>
                    <li className={styles.workspace__item}>
                        <span>Kovalevich Yura</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
