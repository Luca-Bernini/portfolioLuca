'use client'

import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion" // Changed from "motion/react" to match your dependencies
import { useRef } from "react"
import Image from "next/image"

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function ParallaxImage({ id }: { id: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    return (
        <section className="img-container">
            <div ref={ref}>
                {/* Using placeholder images since we don't have the actual images */}
                <Image
                    src={`https://source.unsplash.com/random/300x400?cityscape&sig=${id}`}
                    alt={`Cityscape image ${id}`}
                    width={300}
                    height={400}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <motion.h2
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >{`#00${id}`}</motion.h2>
        </section>
    )
}

export default function ParallaxSection() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div id="parallax" className="parallax-container">
            {[1, 2, 3, 4, 5].map((image) => (
                <ParallaxImage key={image} id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
            
            {/* Inline styles to match the original StyleSheet component */}
            <style jsx global>{`
                /* Apply scroll-snap only to the parallax section */
                .parallax-container {
                    scroll-snap-type: y mandatory;
                }

                .img-container {
                    height: 100vh;
                    scroll-snap-align: start;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }

                .img-container > div {
                    width: 300px;
                    height: 400px;
                    margin: 20px;
                    background: #333333;
                    overflow: hidden;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .img-container img {
                    width: 300px;
                    height: 400px;
                    object-fit: cover;
                }

                @media (max-width: 500px) {
                    .img-container > div {
                        width: 150px;
                        height: 200px;
                    }

                    .img-container img {
                        width: 150px;
                        height: 200px;
                    }
                }

                .img-container h2 {
                    color: #FF0000;
                    margin: 0;
                    font-family: "Inter", sans-serif;
                    font-size: 50px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.2;
                    position: absolute;
                    display: inline-block;
                    top: calc(50% - 25px);
                    left: calc(50% + 120px);
                }

                .progress {
                    position: fixed;
                    left: 0;
                    right: 0;
                    height: 5px;
                    background: #FF0000;
                    bottom: 50px;
                    transform-origin: 0%;
                }
            `}</style>
        </div>
    )
}