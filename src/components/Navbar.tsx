import React, { FC } from 'react'

import styled from '@emotion/styled'
import Link from "next/link";

const Navbar: FC = () => {
    const Nav = styled.nav`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 30px;
      background-color: #f4f4f4;
    `
    const NavLeft = styled.h4`
      font-size: 20px;
    `
    const NavItems = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
    `
    const NavLink = styled.p`
      color: black;
      text-decoration: none;
      margin: 0 15px;
    `

    return (
        <Nav>
            <NavLeft>
                Anime List
            </NavLeft>
            <NavItems>
                <Link style={{textDecoration: 'none'}} href='#'>
                    <NavLink>Home</NavLink>
                </Link>
                <Link style={{textDecoration: 'none'}} href='#'>
                    <NavLink>Anime List</NavLink>
                </Link>
                <Link style={{textDecoration: 'none'}} href='#'>
                    <NavLink>Collection</NavLink>
                </Link>
            </NavItems>
        </Nav>
    )
}

export default Navbar