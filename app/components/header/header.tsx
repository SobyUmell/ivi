import Link from '@/node_modules/next/link';
import styles from './header.module.scss'
const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <li><Link href='/'>Главная</Link></li>
        <li><Link href='/popular'>Популярное</Link></li>
        <li><Link href='/artists'>Художники</Link></li>
        <li><Link href='/genres'>Жанры</Link></li>
        <li><Link href='/pictures'>Картины</Link></li>
      </nav>
    </header>
  )
}

export default Header;