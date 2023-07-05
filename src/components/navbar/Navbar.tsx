import React, { FC } from 'react'

import Link from 'next/link'
import { Nav, NavLeft, NavLink, NavItems } from '@/components/navbar/_navbarStyles'

const Navbar: FC = () => {
  return (
    <Nav>
      <NavLeft>Anime List</NavLeft>
      <NavItems>
        <Link
          style={{ textDecoration: 'none' }}
          href='/'
        >
          <NavLink>Home</NavLink>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          href='#'
        >
          <NavLink>Collection</NavLink>
        </Link>
      </NavItems>
    </Nav>
  )
}

export default Navbar
