'use client'

import page1 from '@/public/page1.svg';
import page2 from '@/public/page2.svg';
import page3 from '@/public/page3.svg';
import page4 from '@/public/page4.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
   {
      name: 'Page 1',
      href: '/',
      icon: page1,
   },
   {
      name: 'Page 2',
      href: '/page2',
      icon: page2
   },
   {
      name: 'Page 3',
      href: '/page3',
      icon: page3
   },
   {
      name: 'Page 4',
      href: '/page4',
      icon: page4
   },
];

export default function Navlinks () {
   const pathname = usePathname();
   console.log(links);
   
   return (
      <>
         {links.map(l => {
            const linkIcon = l.icon;
            return (
               <Link key={l.name} href={l.href} className={` flex flex-col items-center justify-center ${pathname === l.href? 'text-[#D15439]': 'text-[#B5B5B580]'}`}>
                  <Image
                     className={`${pathname === l.href? 'text-[#D15439]': 'text-[#B5B5B580]'}`}
                     src={linkIcon}
                     width={40}
                     height={40}
                     alt={`${l.name} icon`}
                  />
                  <p className={`text-xs ${pathname === l.href? 'text-[#D15439]': 'text-[#B5B5B580]'}`}>{l.name}</p>
               </Link>
            )
         })}
      </>
   )
}