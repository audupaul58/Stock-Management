import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdAccountBalanceWallet } from "react-icons/md";
import styles from './sidebar.module.scss';



const Sidebar = ()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);

  return (
    <>
      <MdAccountBalanceWallet variant="secondary" onClick={handleShow}/>

      <Offcanvas show={show} onHide={handleClose} className={styles.sidebar}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar