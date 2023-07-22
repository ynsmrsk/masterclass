import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
// ScrollTrigger.config({ ignoreMobileResize: true })

export { gsap, ScrollTrigger, MotionPathPlugin }
