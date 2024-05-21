"use client";
/* eslint-disable @next/next/no-img-element */

import './NavHeader.css'
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { Button } from 'flowbite-react';
import { MouseEventHandler } from 'react';

interface NavHeaderProps {
    setOpenModal: () => void;
}

export function NavHeader( { setOpenModal } : NavHeaderProps) {
    return (
        <Navbar fluid rounded className='my-4'>
            <Navbar.Brand as={Link} href="https://flowbite-react.com">
                <img src="/fav-icon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Astro World</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Button onClick={ setOpenModal } color="purple">Choose Another Sign..</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavHeader