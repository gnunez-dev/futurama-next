import { Button, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';


export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <nav className={styles.Navbar__container} style={{backgroundColor: theme?.colors.gray200.value}}>
      <Link href='/'>
        <Image src="/futurama_logo.png" alt="Futurama" width={200} height={33.59}/>
      </Link>
      <Link href='/favorites'
      >
        Favorites
      </Link>
    </nav>
  )
}
