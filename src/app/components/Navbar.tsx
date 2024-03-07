import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

import Button from './Button';

// import { NAV_LINKS } from '@constants';
//need help in importing NAV_LINKS as a constant-rini

// Defining NAV_LINKS here (temporary)
const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'how_we_work', label: 'How we Work?' },
  { href: '/', key: 'services', label: 'Services' },
  { href: '/', key: 'pricing ', label: 'Pricing ' },
  { href: '/', key: 'contact_us', label: 'Contact Us' },
];

const Navbar = () => {
  return (
    <nav className='border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image src='/logo.png' alt='logo' width={74} height={29} />
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        {/* list of navigation links declared in constants folder */}
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className='lg:flexCenter hidden'>
        {/* using button component for login / check globals.css to check the color defined for "btn_dark_green" */}
        {/* using button component for login / check globals.css to check the color defined for "btn_dark_green" */}
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
          {/* <MobileNav /> */}
        </SignedIn>
        <SignedOut>
          <Link href='/sign-in'>
            <Button
              type='button'
              title='Login'
              icon='/user.svg'
              variant='btn_dark_green'
            ></Button>
          </Link>
        </SignedOut>
      </div>
      {/* Menu Icon for mobile view */}
      <Image
        src='menu.svg'
        alt='menu'
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
      />
    </nav>
  );
};

export default Navbar;
