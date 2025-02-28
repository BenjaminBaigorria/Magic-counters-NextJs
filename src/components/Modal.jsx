"use client"

import Modal from "react-modal"
import { Children, useState } from "react"

const customStyles = {
    overlay:{
        backgroundColor:"rgba(15, 0, 49, 0.30)"
    },
    content: {
        width: "30%",
        height: "50%",
        margin: "auto",
        backgroundColor: "rgba(15, 0, 49, 0.6)", // Color corregido
        border:"ridge",
        borderRadius: "8px", // Añadí borderRadius para hacerlo más estético
        padding: "20px", // Añadí un padding para que los elementos no toquen los bordes
        color: "white",
    }
  };

export default function NewModal({ open,setOpen,children}) {


    return (
        <div >
            <Modal style={customStyles}
            ariaHideApp={false}
            isOpen={open}
            onRequestClose={setOpen}>
                
                {children}
            </Modal>
        </div>
    )
}