import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../contents';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={
      `${styles.paddingX} w-full flex
      items-center py-3 absolute top-0 z-20 bg-inherit`
    }>
      <div className="w-full flex justify-end items-center max-w-7xl mx-auto mr-10">
        <ul className="list-none hidden sm:flex flex-row gap-12">
          {navLinks.map((link) => (
            <li key={link.id} className="inline-block text-light-silver font-bold text-[24px] mt-6">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar