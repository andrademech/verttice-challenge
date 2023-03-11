import styles from './Header.module.css';
import todo from '../assets/todo.svg'

export function HeaderTask() {
  return <h1 className={styles.header}>
    <img src={todo} />
  </h1>
}
