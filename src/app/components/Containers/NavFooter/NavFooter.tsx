"use client";

import './NavFooter.css'

import { Button, Checkbox, Footer, Label, Modal, TextInput } from "flowbite-react";
import { useState } from 'react';

export function NavFooter() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Footer container className='my-4 position: relative bg-black border-2 border-white'>
      <Footer.Copyright href="#" className='text-white' by="HorosCope" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#" onClick={() => {
          setOpenModal(true)
        }} className='text-white'>About</Footer.Link>
      </Footer.LinkGroup>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Created By...</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Simone" value="Informationsarkitekt" />
              </div>
              <span>Simone Jönsson</span>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Hannah" value="Informationsarkitekt" />
              </div>
              <span>Hannah Lindbäck</span>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Vincent" value="Systemutvecklare" />
              </div>
              <span>Vincent Westlund</span>
            </div>

          </div>
        </Modal.Body>
      </Modal>
    </Footer>
  );
}

export default NavFooter