import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Recruitment.module.css';
import Button from '../components/Recruitment_Button';
import logo from '../images/logo-img.png';
/*import { Button } from 'bootstrap';*/
/*import toggleButton from '../components/Toggle_Button';*/
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function Recruitment(){
  const isNormal = useMediaQuery({minWidth: 319});
  const [btnClick_1, setBtnClick_1] = useState(false);
  const [btnClick_2, setBtnClick_2] = useState(false);
  const [btnClick_3, setBtnClick_3] = useState(false);

  return (
    <body>
    {isNormal?
    <>
    <header>
      <NavBar/>
    </header>
    <main className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        {/* header text */}
        <div className = {styles.headerContainer}>
          <text className = {styles.headerText}>WELCOME👋<br></br>WE ARE EWHA’S CLUB</text>
          <div className = {styles.txtBtw}>
            <text className = {styles.headerText}>12TH</text>
            <img src={logo} className={styles.logoImg} alt='e-cops'/>
          </div>
          <text className = {styles.headerText}>ROOKIE RECRUITING</text>
          <div className = {styles.txtEnd}>
            <text className = {styles.headerText}>IS COMING!</text>
          </div>
        </div>
        {/* content 1 - 12기 모집 */}
        <div className={`${styles.columnContainer} ${styles.columnContainer2}`}>
          <text className ={`${styles.midText} ${styles.leftText}`}>E-COPS 12기 모집</text>
          <div className={styles.rowContainer2}>
            <text className={styles.contentText}>
            E-COPS 12기에서 1년간 활동할 신입 부원을 모집합니다.<br></br>
            보안에 관심이 많고 ~~~<br></br>
            열정이 있다면 누구나 지원 가능~*
            </text>
            <div className={styles.midTextButton}>
                <Button/>
            </div>
          </div>
        </div>  
        {/* content 2 - Recruiting Process */}
        <div className={styles.content3Container}>
          <text className={styles.midText}>RECRUITING PROCESS</text>
        </div>
        <div className={styles.rowContainer}>
          <div className={styles.circleBox}>
            <div className={styles.miniCircle}></div>
            <div className={styles.miniCircle2}></div>
            <text className={styles.contentTitleText}>&nbsp;&nbsp;서류접수</text>
            <text className={styles.contentWhiteText}>00.00(W)~00.00(W)<br></br>00시 마감</text>
          </div> 
          <div className={styles.circleBox}>
            <div className={styles.miniCircle}></div>
            <div className={styles.miniCircle2}></div>
            <text className={styles.contentTitleText}>서류 결과 발표</text>
            <text className={styles.contentWhiteText}>00.00(W) 00시</text>
          </div> 
          <div className={styles.circleBox}>
            <div className={styles.miniCircle}></div>
            <div className={styles.miniCircle2}></div>
            <text className={styles.contentTitleText}>오프라인 면접</text>
            <text className={styles.contentWhiteText}>00.00(W)~00.00(W)<br></br>개별 연락 예정</text>
          </div> 
          <div className={styles.circleBox}>
            <div className={styles.miniCircle}></div>
            <div className={styles.miniCircle2}></div>
            <text className={styles.contentTitleText}>&nbsp;&nbsp;&nbsp;면접</text>
            <text className={styles.contentWhiteText}>00.00(W) 00시</text>
          </div> 
        </div>
        {/* content 3 - 자주 묻는 질문 */}
        <div className={styles.content3Container}>
          <text className={styles.midText}>자주 묻는 질문</text>
        </div>
        <div className={styles.columnContainer}>
          {/* 질문 1 */}
          <div className={styles.toggle}>
            <button 
            className={styles.btnRow}
            onClick={()=>setBtnClick_1(!btnClick_1)}
            >
              <text className={styles.contentBigText}>E-COPS는 어떤 동아리인가요?</text>
              <text className={styles.contentBigText}>
                {/* 버튼 클릭 여부에 따라 모양 다르게*/}
                {btnClick_1 ? '▲' : '▼'}
              </text>
            </button>
            {/* 버튼 클릭 여부에 따라 답변 text 렌더링*/}
            {btnClick_1 ? 
            (<div className={styles.textBox}>
              <text style={{fontSize: 18}}>답변 1</text>
            </div>)
            : 
            <div></div>}
          </div>
          {/* 질문 2 */}
          <div className={styles.toggle}>
            <button 
            className={styles.btnRow}
            onClick={()=>setBtnClick_2(!btnClick_2)}
            >
              <text className={styles.contentBigText}>E-COPS는 어떤 동아리인가요?</text>
              <text className={styles.contentBigText}>
                {btnClick_2 ? '▲' : '▼'}
              </text>
            </button>
            {btnClick_2 ? 
            (<div className={styles.textBox}>
              <text style={{fontSize: 18}}>답변 2</text>
            </div>)
            : 
            <div></div>}
          </div>
          {/* 질문 3 */}
          <div className={styles.toggle}>
            <button 
            className={styles.btnRow}
            onClick={()=>setBtnClick_3(!btnClick_3)}
            >
              <text className={styles.contentBigText}>E-COPS는 어떤 동아리인가요?</text>
              <text className={styles.contentBigText}>
                {btnClick_3 ? '▲' : '▼'}
              </text>
            </button>
            {btnClick_3 ? 
            (<div className={styles.textBox}>
              <text style={{fontSize: 18}}>답변 3</text>
            </div>)
            : 
            <div></div>}
          </div>
        </div> 
        {/* content 4 - 문의사항 */}
        <div className ={styles.grayContainer}>
          <div className ={styles.greenBox}>
            <div className ={styles.midContainer}>
              <text className ={styles.midText}>더 궁금한 내용이나<br></br>문의사항이 있으신가요?</text>
            </div>
            <div className = {styles.midContainer}>
              <text className ={styles.contentText2}>동아리--,궁금한점--,언제든지 문의주세요</text>
            </div>
            <div className ={styles.midContainer}>
              <button className ={styles.qButton}>문의하기</button>
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

export default Recruitment;