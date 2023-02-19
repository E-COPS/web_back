import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './BottomBar.module.css';
import insta from '../images/insta-icon.png';
import github from '../images/github-icon.png';
import mail from '../images/mail-icon.png';
import blog from '../images/blog-icon.png';
import feedback from '../images/feedback-icon.png';
import { FaInfoCircle } from "react-icons/fa";



function BottomBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.navStyle}>
      <Container className='px-0 justify-content-center'>
        {/* menu icon */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-0 m-2'>
          <FaInfoCircle className={styles.menuIcon}/>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* icons */}
          <Nav className="me-auto align-items-center">
            <Nav.Link className={styles.navText} href='https://www.instagram.com/ecops_ewha/'>
              <img src={insta} className={styles.iconImg} alt='instagram'/>
            </Nav.Link>
            <Nav.Link className={styles.navText} href='https://github.com/E-COPS'>
              <img src={github} className={styles.iconImg} alt='github'/>
            </Nav.Link>
            <Nav.Link className={styles.navText} href='https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=ewha.ecops@gmail.com'>
              <img src={mail} className={styles.iconImg} alt='gmail'/>
            </Nav.Link>
            <Nav.Link className={styles.navText} href='https://blog.naver.com/ecopsecops'>
              <img src={blog} className={styles.iconImg} alt='naver blog'/>
            </Nav.Link>
            <Nav.Link className={styles.navText} href='https://forms.gle/57wwA6rc2FGFsjK79'>
              <img src={feedback} className={styles.iconImg} alt='feedback'/>
            </Nav.Link>
          </Nav>
          {/* text link */}
          <Nav className='align-items-center'>
            <Nav.Link className={styles.navText} href="#" style={{fontSize: 13}}>☑️ E-COPS와 함께하기 위해 꼭 지켜주세요.</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BottomBar;