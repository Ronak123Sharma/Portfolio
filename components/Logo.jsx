import Link from 'next/link';
import Image from 'next/image';


const Logo = () => {
  return <Link href='/'>
    <Image src ='/logo2.png' width={64} height={60} priority alt="Logo" />
  </Link>
  
};

export default Logo;
