import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Dock, DockIcon } from '@/components/ui/dock';
import { BadgeInfo, Contact2Icon, Facebook, Home, Instagram, Tractor } from 'lucide-react';
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
        <div>
          <Image
          src={'https://placehold.co/40'}
          alt='logo'
          width={100}
          height={100}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2 group-hover:brightness-110"

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
                  <AnimatedThemeToggler/>
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
