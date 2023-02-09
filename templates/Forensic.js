import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Activity2.module.css';
import ProfileBox from '../components/ProfileBox';

function Forensic(){
    return (
      <body>
      <header>
          <NavBar isWhite={true}/>
      </header>
      <main className={styles.mainContainer}>   
      <div className={styles.beginContainer}>
        <div className = {styles.beginBox}>
          <div className ={styles.firstContainer}>
            <div className ={styles.ac1Text}><br></br>Forensic ----<br></br>Team!</div>
             <div className ={styles.ac2Text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are</div>
          </div>
        </div>
      </div>
      <div className={styles.begin2Container}>
        <div className = {styles.begin2Box}>
          <div className = {styles.secondContainer}>
          </div>
          <div className ={styles.rowContainer}></div>
          <div className ={styles.rowContainer}></div>
          <div className ={styles.rowContainer}></div>
        </div>
      </div>
      <div className ={styles.begin3Container}>
        <div className ={styles.begin3Box}>
          <div className ={styles.firstContainer}>
           <div className ={styles.thirdText}>Spread your wide wrings at E-COPS</div>
           <div className ={styles.third2Text}>@E_COPS</div>
          </div>
        </div>
      </div>
      </main>
  
      {/* bottom bars */}
      <footer>
        <NavBar/>
        <BottomBar/>
      </footer>
      
      </body>
    );
  }
  
 export default Forensic;