import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Dock, DockIcon } from '@/components/ui/dock';
import { Contact2Icon, Facebook, Home, Instagram, Tractor } from 'lucide-react';
import Link from 'next/link';
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler';
import Image from 'next/image';

const DATA = {
  navbar: [
    { href: '/', icon: <Home />, label: 'Home' },
    { href: '/products', icon: <Tractor/>, label: 'Products' },
    { href: '/contact', icon: <Contact2Icon />, label: 'Contact' },
  ],
  contact: {
    social: {
      Instagram: {
        name: 'Instagram',
        url: '#',
        icon: <Instagram />
      },
      Facebook: {
        name: 'Facebook',
        url: '#',
        icon: <Facebook />
      },
    }
  }
};

function Header() {
  return (
    <nav className="fixed w-full z-[999] px-8 ">      
      <div className="flex items-center justify-center">
        <div className='sm:block hidden' >
          <Image
          src={'/logo.png'}
          alt='logo'
          width={70}
          height={70}
          className="object-fit"

          />
        </div>
        <TooltipProvider>
          <Dock direction="middle">
            {DATA.navbar.map((item) => (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12 rounded-full')}>
                      {item.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      aria-label={social.name}
                      className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12 rounded-full ')}>
                      {social.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <p aria-label="Theme" className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12 rounded-full cusror-pointer')}>
                  <AnimatedThemeToggler defaultTheme='light'/>
                    </p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </div>
    </nav>
  );
}

export default Header;
