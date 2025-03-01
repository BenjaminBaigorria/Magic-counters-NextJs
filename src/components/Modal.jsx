"use client"

import Modal from "react-modal"


const customStyles = {
    overlay: {
      backgroundColor: "rgba(15, 0, 49, 0.30)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed", // Asegura que cubra toda la pantalla
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    content: {
      width: "auto",
      height: "auto",
      maxWidth: "90vw", // Evita que sea demasiado ancho en pantallas grandes
      maxHeight: "90vh", // Evita que sea demasiado alto
      backgroundColor: "#111827",
      border: "solid 2px rgba(93, 31, 236, 0.49)",
      borderRadius: "8px",
      padding: "20px",
      color: "white",
      position: "relative", // Evita que el modal se desplace
      inset: "auto", // Anula los valores predeterminados de react-modal
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }
  };

export default function NewModal({ open, setOpen, children }) {


    return (
        <div >
            <Modal style={customStyles}
                ariaHideApp={false}
                isOpen={open}
                onRequestClose={setOpen}>
                    <div  className="w-full h-auto flex flex-col items-center justify-center">

                {children}
                    </div>
            </Modal>
        </div>
    )
}