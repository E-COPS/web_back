import PropTypes from 'prop-types';
import styles from './Recruitment_Button.module.css';
import {Link} from 'react-router-dom';

function Button({text}) {
  return(
    <button className={styles.btn}>
        12기 알림 신청하기
      <Link to=''>{text}</Link>
    </button>
  );
}

//prop-types
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;