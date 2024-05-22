"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { Button } from 'flowbite-react';

interface NavHeaderProps {
    setOpenModal: () => void;
}

export function NavHeader({ setOpenModal }: NavHeaderProps) {
    return (
        <Navbar fluid rounded className='my-4 position: relative bg-black border-2 border-white'>
            <Navbar.Brand>
                <img src="/fav-icon.svg" className="mr-3 h-6 sm:h-11" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-3xl font-semibold text-white">Horos[ Cope ]
                 </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Button
                    id="new-starsign-btn"
                    onClick={setOpenModal}
                    gradientDuoTone={"purpleToBlue"}
                >
                    <span className="mr-1">✩</span>
                    <span>Choose Another Sign</span>
                    <span className="ml-1">☽</span>
                </Button>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavHeader