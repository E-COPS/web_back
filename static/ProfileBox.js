import styles from './ProfileBox.module.css';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

function ProfileBox({text, img, big}) {
  const isMobile = useMediaQuery({maxWidth: 1000});
  return(
    <div className={styles.container}>
      {isMobile?
      <img className={styles.profileImg} style={big? {width: 130, height: 70} : {width: 100, height: 100}} src={img} alt='프로필 이미지'/>
      :
      <img className={styles.profileImg} style={big? {width: 250, height: 130} : {width: 160, height: 160}} src={img} alt='프로필 이미지'/>
      }
      <text className={styles.profileText}>{text}</text>
    </div>
  );
}

//prop-types
ProfileBox.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProfileBox;