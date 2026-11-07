import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'
import { useMotionValue, useSpring } from 'motion/react'

const MOVEMENT_DAMPING = 1400

const GLOBE_CONFIG = {
  width: 1000,
  height: 1000,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1.1,
  diffuse: 3,
  mapSamples: 8000,
  mapBrightness: 1.8,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.05 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.01 },
    { location: [19.4326, -99.1332], size: 0.01 },
    { location: [40.7128, -74.006], size: 0.01 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
}

const Globe = ({ className = '', config = GLOBE_CONFIG }) => {
  const canvasRef = useRef(null)
  const phiRef = useRef(0)
  const widthRef = useRef(0)
  const pointerInteracting = useRef(null)

  const rotation = useMotionValue(0)
  const springRotation = useSpring(rotation, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? 'grabbing' : 'grab'
    }
  }

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteracting.current = clientX
      rotation.set(rotation.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const updateSize = () => {
      widthRef.current = canvas.offsetWidth
    }

    const resizeObserver = 'ResizeObserver' in window
      ? new ResizeObserver(updateSize)
      : null

    updateSize()
    window.addEventListener('resize', updateSize)
    resizeObserver?.observe(canvas)

    const globe = createGlobe(canvas, {
      ...config,
      width: Math.max(1, widthRef.current) * 2,
      height: Math.max(1, widthRef.current) * 2,
      onRender: (state) => {
        if (pointerInteracting.current === null) phiRef.current += 0.005
        state.phi = phiRef.current + springRotation.get()
        state.width = Math.max(1, widthRef.current) * 2
        state.height = Math.max(1, widthRef.current) * 2
      },
    })

    requestAnimationFrame(() => {
      canvas.style.opacity = '1'
    })

    return () => {
      globe.destroy()
      resizeObserver?.disconnect()
      window.removeEventListener('resize', updateSize)
    }
  }, [config, springRotation])

  return (
    <div className={`absolute inset-0 mx-auto aspect-square w-full max-w-[600px] ${className}`}>
      <canvas
        ref={canvasRef}
        className="size-full cursor-grab opacity-0 transition-opacity duration-500 contain-[layout_paint_size] touch-none"
        aria-label="Interactive globe"
        role="img"
        onPointerDown={(event) => {
          updatePointerInteraction(event.clientX)
          event.currentTarget.setPointerCapture(event.pointerId)
        }}
        onPointerUp={(event) => {
          updatePointerInteraction(null)
          event.currentTarget.releasePointerCapture(event.pointerId)
        }}
        onPointerCancel={() => updatePointerInteraction(null)}
        onPointerMove={(event) => updateMovement(event.clientX)}
      />
    </div>
  )
}

export default Globe
