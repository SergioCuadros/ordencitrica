import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import { useState } from 'react'
import Fear from '../assets/blueysonas/FearZero_Blueysona.png'
import Firu from '../assets/blueysonas/Firu_Blueysona.png'
import Ilar from '../assets/blueysonas/Ilar_Blueysona.png'
import Ponny from '../assets/blueysonas/Ponny_Blueysona.png'
import Osquir from '../assets/blueysonas/Osquir_Blueysona.png'
import Javi from '../assets/blueysonas/Javi_Blueysona.png'
import Stardown from '../assets/blueysonas/Stardown_Blueysona.png'
import BigPapa from '../assets/blueysonas/BigPapa_Blueysona.png'
import Chokiz from '../assets/blueysonas/Chokiz_Blueysona.png'
import Kotaro from '../assets/blueysonas/Kotaro_Blueysona.png'
import Kratos from '../assets/blueysonas/Kratos_Blueysona.png'
import Lasaña from '../assets/blueysonas/Lasaña_Blueysona.png'
import Lu from '../assets/blueysonas/Lu_Blueysona.png'
import Marbus from '../assets/blueysonas/Marbus_Blueysona.png'
import Paprika from '../assets/blueysonas/Paprika_Blueysona.png'
import Tecla from '../assets/blueysonas/Tecla_Blueysona.png'
import Who from '../assets/blueysonas/Who_Blueysona.png'

export default function ScrollTriggered() {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalContent, setModalContent] = useState<{ title: string, text: string }>({ title: '', text: '' })

    const handleCardClick = (title: string, text: string) => {
        setModalContent({ title, text })
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    return (
        <div style={container}>
            {Bluesonyan.map(([imageSrc, hueA, hueB, title, text], i) => (
                <Card 
                    key={imageSrc} 
                    i={i} 
                    imageSrc={imageSrc} 
                    hueA={hueA} 
                    hueB={hueB} 
                    title={title} 
                    text={text}
                    onClick={handleCardClick}
                />
            ))}

            {modalVisible && (
                <Modal 
                    title={modalContent.title} 
                    text={modalContent.text} 
                    onClose={closeModal} 
                />
            )}
        </div>
    )
}

interface CardProps {
    imageSrc: string
    hueA: number
    hueB: number
    i: number
    title: string
    text: string
    onClick: (title: string, text: string) => void
}

function Card({ imageSrc, hueA, hueB, i, title, text, onClick }: CardProps) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
            onClick={() => onClick(title, text)}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card">
                <img src={imageSrc} alt={`Food ${i}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </motion.div>
        </motion.div>
    )
}

const modalVariants: Variants = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        y: 50,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.3,
        },
    },
}

function Modal({ title, text, onClose }: { title: string, text: string, onClose: () => void }) {
    const [currentPage, setCurrentPage] = useState("info");

    return (
        <motion.div
            style={modalOverlay}
            onClick={onClose}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div style={modalContent} onClick={(e) => e.stopPropagation()}>
                <nav>
                    <button onClick={() => setCurrentPage("info")}>Info</button>
                    <button onClick={() => setCurrentPage("details")}>Detalles</button>
                    <button onClick={() => setCurrentPage("extra")}>Extra</button>
                </nav>

                <h2>{title}</h2>

                {currentPage === "info" && <p>{text}</p>}
                {currentPage === "details" && <p>Detalles adicionales sobre el tema...</p>}
                {currentPage === "extra" && <p>Más información aquí...</p>}

                <button style={closeButton} onClick={onClose}>Cerrar</button>
            </div>
        </motion.div>
    );
}
const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styles   ================
 */


const buttonItem : React.CSSProperties = {
    
}
const container: React.CSSProperties = {
    margin: "100px auto",
    maxWidth: "100%", 
    paddingBottom: 100,
    width: "90%", 
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Ajusta dinámicamente las columnas
    gap: "100px",
    justifyItems: "center",
    alignItems: "center",
  }
  
const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
}

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

const modalOverlay: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const modalContent: React.CSSProperties = {
    backgroundColor: "#0000",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    textAlign: "center",
}

const closeButton: React.CSSProperties = {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
}

/**
 * ==============   Data   ================
 */

const Bluesonyan: [string, number, number, string, string,][] = [
    [Fear, 340, 10, 'Fear', 'Este es el texto para Fear.'],
    [Firu, 60, 100, 'Firu', 'Este es el texto para Firu.'],
    [Ilar, 260, 280, 'Ilar', 'Este es el texto para Ilar.'],
    [Ponny, 60, 90, 'Ponny', 'Este es el texto para Ponny.'],
    [Osquir, 80, 120, 'Osquir', 'Este es el texto para Osquir.'],
    [Javi, 200, 250, 'Javi', 'Este es el texto para Javi.'],
    [Stardown, 200, 250, 'Stardown', 'Este es el texto para Stardown.'],
    [BigPapa, 50, 150, 'Big Papa', 'Este es el texto para Big Papa.'],
    [Chokiz, 24, 340, 'Chokiz', 'Este es el texto para Chokiz.'],
    [Kotaro, 160, 200, 'Kotaro', 'Este es el texto para Kotaro.'],
    [Kratos, 40, 120, 'Kratos', 'Este es el texto para Kratos.'],
    [Lasaña, 100, 200, 'Lasaña', 'Este es el texto para Lasaña.'],
    [Lu, 220, 240, 'Lu', 'Este es el texto para Lu.'],
    [Marbus, 270, 320, 'Marbus', 'Este es el texto para Marbus.'],
    [Paprika, 10, 50, 'Paprika', 'Este es el texto para Paprika.'],
    [Tecla, 191, 280, 'Tecla', 'Este es el texto para Tecla.'],
    [Who, 220, 240, 'Who', 'Este es el texto para Who.'],
]
