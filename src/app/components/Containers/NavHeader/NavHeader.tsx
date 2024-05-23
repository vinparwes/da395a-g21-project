"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Modal, Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import NasaView from "../../Content/NasaView/NasaView";
import { useState } from "react";

import { useEffect } from "react"
import { getApod } from "@/app/api/apiNasa";


interface NavHeaderProps {
    setOpenModal: () => void;
}

export function NavHeader({ setOpenModal }: NavHeaderProps) {
    const [openNasaModal, setOpenNasaModal] = useState(false)
    const [nasaData, setNasaData] = useState('');

    useEffect(() => {
        getApod().then(response => {
            setNasaData(response!!);
        }).catch(error => {
            console.error("Error in fetch", error);
        })
    }, [])

    return (
        <Navbar
            fluid
            rounded
            className="my-4 position: relative bg-black border-2 border-white"
        >
            <Navbar.Brand>
                <img
                    src="/fav-icon.svg"
                    className="mr-3 h-6 sm:h-11"
                    alt="Flowbite React Logo"
                />
                <span className="self-center whitespace-nowrap text-3xl font-semibold text-white">
                    Horos[ Cope ]
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

                <Button
                    id="nasa-fetch"
                    onClick={() => setOpenNasaModal(true)}
                    gradientDuoTone={"purpleToBlue"}
                >
                    Fetch NASA Data
                </Button>
            </Navbar.Collapse>
            <Modal
                show={openNasaModal}
                size="md"
                popup
                onClose={() => setOpenNasaModal(false)}
            >
                <Modal.Header className="bg-black" />
                <Modal.Body
                    className="bg-black"
                >
                    <NasaView nasaData={nasaData} />
                    </Modal.Body>
            </Modal>
        </Navbar>
    );
}

export default NavHeader;
