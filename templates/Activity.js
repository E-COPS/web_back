import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Activity.module.css';
import ActivityButton from '../components/ActivityButton';
import ProfileBox from '../components/ProfileBox';
import { useMediaQuery } from 'react-responsive';


function Activity(){
  const isNormal = useMediaQuery({minWidth: 319});
  return (
    <body>
    {isNormal?
    <>
    <header>
        <NavBar/>
    </header>
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.columnContainer}>
          <text className={styles.titleText}>
            Sessions
          </text>
          <text className={styles.contentText}>
            E-COPS의 정규 세션은 Beginner Track과 Challenger Track으로 나뉘어서 이루어집니다.<br></br>자유롭게 선택해 보세요.
          </text>  
          <div className={styles.rowContainer1}>
            <div className={styles.mintWhiteContainer}>
              <div className={styles.whiteBox}></div>
              <div className={styles.mintBox1}>
                <text className={styles.boxText}>
                  Beginner Track
                </text>
                <div className={styles.clickButton}>
                <ActivityButton url='/Beginner'/>
              </div>
                </div>
              </div>          
            <div className={styles.mintBox1c}>
              <text className={styles.boxText}>
                Challenger Track
              </text>
              <div className={styles.clickButton}>
                <ActivityButton url='/Challenger'/>
              </div>
            </div>
          </div>
          <text className={styles.titleText}>
              Teams
          </text>
          <text className={styles.contentText}>
          방학 세션은 Team을 이루어 진행됩니다. <br></br>심화학습을 원하는 Team에 들어가 자신의 능력을 뽐내보세요!
          </text>
          <div className={styles.rowContainer2}>
            <div className={styles.mintBox2}>
              <text className={styles.boxText}>
                Web Hacking
              </text>
              <text className={styles.boxContentText}>
              무슨 모의 해킹<br></br>웹 환경 구현하여 모의 해킹하기
              </text>
              <div className={styles.clickButton2}>
                <ActivityButton url='/Webhacking'/>
              </div>
            </div>
            <div className={styles.mintBox2}>
              <text className={styles.boxText}>
                Reversing
              </text>
              <text className={styles.boxContentText}>
              무슨 모의 해킹<br></br>웹 환경 구현하여 모의 해킹하기
              </text>
              <div className={styles.clickButton2}>
                <ActivityButton url='/Reversing'/>
              </div>
            </div>
            <div className={styles.mintBox2}>
              <text className={styles.boxText}>
                Forensics
              </text>
              <text className={styles.boxContentText}>
              무슨 모의 해킹<br></br>웹 환경 구현하여 모의 해킹하기
              </text>
              <div className={styles.clickButton2}>
                <ActivityButton url='/Forensic'/>
              </div>
            </div>
            <div className={styles.mintBox2}>
              <text className={styles.boxText}>
                development
              </text>
              <text className={styles.boxContentText}>
              무슨 모의 해킹<br></br>웹 환경 구현하여 모의 해킹하기
              </text>
              <div className={styles.clickButton2}>
                <ActivityButton url='/Development'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    {/* bottom bars */}
    <footer>
      <NavBar/>
      <BottomBar/>
    </footer>
    </> 
    :
    <span>화면 크기를 조정해주세요.</span>
    }
    </body>
  );
}

export default Activity;