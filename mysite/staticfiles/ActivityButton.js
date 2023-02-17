import PropTypes from 'prop-types';
import styles from './ActivityButton.module.css';
import {Link} from 'react-router-dom';

function ActivityButton({url}) {
  return(
    <button className={styles.btn}>
      <Link to={url} className={styles.linkText}>click!</Link>
    </button>
  );
}

//prop-types
ActivityButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ActivityButton;