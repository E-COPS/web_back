import PropTypes from 'prop-types';
import styles from './Button.module.css';
import {Link} from 'react-router-dom';

function Button({text}) {
  return(
    <button className={styles.btn}>
      <Link to='/activity'>{text}</Link>
    </button>
  );
}

//prop-types
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
