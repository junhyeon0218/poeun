import Link from 'next/link';
import Clock from './Clock';

export default function Header() {
  return (
    <header className='flex justify-between items-center p-4 w-full h-[60px] fixed top-0 left-0 right-0 z-50'>
      <div className='w-20' />
      <Link href='/' className='absolute left-1/2 transform -translate-x-1/2'>
        <h1 className='text-[24px] font-bold'>poeun</h1>
      </Link>
      <div className='flex justify-end'>
        <Clock />
      </div>
    </header>
  );
}
