import styles from './TextBox.module.css';

function TextBox({text}) {
  return(
    <div className={styles.container}>
      <text className={styles.title}>{text}</text>
    </div>
  );
}

export default TextBox;