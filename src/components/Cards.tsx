import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import styled from "styled-components"

export default function ScrollTriggered() {
    return (
        <Container>
            {food.map(([emoji, hueA, hueB], i) => (
                <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
            ))}
        </Container>
    )
}

interface CardProps {
    emoji: string
    hueA: number
    hueB: number
    i: number
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
    return (
        <CardContainer className={`card-container-${i}`} initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.8 }}>
            <Splash $hueA={hueA} $hueB={hueB} />
            <CardBody variants={cardVariants} className="card">
                {emoji}
            </CardBody>
        </CardContainer>
    )
}

const cardVariants: Variants = {
    offscreen: { y: 300 },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styled Components   ================
 */

const Container = styled.div`
    margin: 100px auto;
    max-width: 500px;
    padding-bottom: 100px;
    width: 100%;
`

const CardContainer = styled(motion.div)`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 20px;
    margin-bottom: -120px;
`

const Splash = styled.div<{ $hueA: number; $hueB: number }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(306deg, ${({ $hueA }) => hue($hueA)}, ${({ $hueB }) => hue($hueB)});
    clip-path: path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z");
`

const CardBody = styled(motion.div)`
    font-size: 164px;
    width: 300px;
    height: 430px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #f5f5f5;
    box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
        0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075);
    transform-origin: 10% 60%;
`

/**
 * ==============   Data   ================
 */

const food: [string, number, number][] = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320],
]
