import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Activity2.module.css';
import ProfileBox from '../components/ProfileBox';

function Challenger(){
    return (
      <body>
      <header>
          <NavBar isWhite={true}/>
      </header>
      <main className={styles.mainContainer}>   
      <div className={styles.beginContainer}>
        <div className = {styles.beginBox}>
          <div className ={styles.firstContainer}>
            <div className ={styles.firstText}><br></br>E-COP'S------<br></br>Challenger Track</div>
          </div>
        </div>
      </div>
      <div className={styles.begin2Container}>
        <div className = {styles.begin2Box}>
          <div className = {styles.secondContainer}>
            <div className = {styles.secondText}>2022 Garallery</div>
          </div>
          <div className ={styles.rowContainer}>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
          </div>
          <div className ={styles.rowContainer}>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
          </div>
          <div className ={styles.rowContainer}>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU' style ="max-width:100%;height:auto;"/>
          </div>
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
  
 export default Challenger;