"use client";

import './NavFooter.css'

import { Footer } from "flowbite-react";

export function NavFooter() {
  return (
    <Footer container className='my-4'>
      <Footer.Copyright href="#" by="Astra" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default NavFooter