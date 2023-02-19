import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo-img.png';
import { FiMenu } from "react-icons/fi";
import styles from './NavBar.module.css';

function NavBar({isWhite}) {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.navStyle} style={{backgroundColor: isWhite && '#E5E5E5'}}>
      <Container className='px-0 align-items-center'>
        {/* logo */}
        <Navbar.Brand href="/">
          <img src={logo} className={styles.logoImg} alt='e-cops'/>
        </Navbar.Brand>
        {/* menu icon */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-0 mx-2'>
          <FiMenu className={styles.menuIcon}/>
        </Navbar.Toggle>
        {/* menu */}
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav className="ml-auto align-items-center">
          <Nav.Link className={styles.navText} href="/program">PROGRAM</Nav.Link>
          <Nav.Link className={styles.navText} href="/member">MEMBER</Nav.Link>
          <Nav.Link className={styles.navText} href="/activity">ACTIVITY</Nav.Link>
          <Nav.Link className={styles.navText} href="/recruitment">RECRUITMENT</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;