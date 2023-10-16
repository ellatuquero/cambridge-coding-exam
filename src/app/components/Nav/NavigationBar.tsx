'use client';

import React from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import styles from './NavigationBar.module.css'


export const NavigationBar = () => {
    return (
        <Navbar expand='lg' className={styles.nav}>
            <Container>
                <Row>
                    <Nav>
                        <Nav.Link className={styles.navMenu} href='/'>Home</Nav.Link>
                    </Nav>
                </Row>
            </Container>
        </Navbar>
    );
};
