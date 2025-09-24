import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Dock, DockIcon } from '@/components/ui/dock';
import { BadgeInfo, Contact2Icon, Facebook, Home, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@radix-ui/react-separator';
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler';

const DATA = {
  navbar: [
    { href: '/', icon: <Home />, label: 'Home' },
    { href: '/about', icon: <BadgeInfo />, label: 'About' },
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
    <nav className="fixed w-full z-[999]">
      <div className="flex flex-col items-center justify-center">
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
            {/* <Separator/> */}
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
                  <Link href="" aria-label="Theme" className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12 rounded-full ')}>
                  <AnimatedThemeToggler/>
                    </Link>
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
