'use client';

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './NavigationBar.module.css'


export const NavigationBar = () => {
    return (
        <Navbar expand='lg' className={styles.nav}>
            <Container>
                <Nav.Link className={styles.navLink} href='/'>Home</Nav.Link>
            </Container>
        </Navbar>
    );
};
