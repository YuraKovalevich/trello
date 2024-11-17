import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell, FaInfoCircle, FaUserCircle } from 'react-icons/fa';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className={styles.navbar}>
            <nav className={styles.navbar__container}>
                <Link to="/" className={styles.navbar__logo}>
                    <span className={styles.logo__text}>Trello</span>
                </Link>
                <div className={styles.navbar__menu}>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>Workspaces</li>
                        <li className={styles.menu__item}>Recent</li>
                        <li className={styles.menu__item}>Starred</li>
                        <li className={styles.menu__item}>Templates</li>
                        <button className={`${styles.menu__item} ${styles.menuBtn}`}>Create</button>
                    </ul>
                    <ul className={styles.menu__list}>
                        <li className={styles.search__container}>
                            <FaSearch className={styles.search__icon} />
                            <input
                                type="text"
                                className={styles.search__input}
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </li>
                        <li className={styles.menu__item}>
                            <FaBell className={styles.icon} title="Notifications" />
                        </li>
                        <li className={styles.menu__item}>
                            <FaInfoCircle className={styles.icon} title="Information" />
                        </li>
                        <li className={styles.menu__item}>
                            <FaUserCircle className={styles.icon} title="Account" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
