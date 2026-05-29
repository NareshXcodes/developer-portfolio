import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

const DEFAULT_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1.1,
  diffuse: 3,
  mapSamples: 16000,
  mapBrightness: 1.8,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 }
  ]
}

const Globe = ({ className = '', config = DEFAULT_CONFIG }) => {
  const canvasRef = useRef(null)
  const phiRef = useRef(0)
  const widthRef = useRef(0)

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener('resize', onResize)
    onResize()

    if (!canvasRef.current) return undefined

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: Math.max(1, widthRef.current) * 2,
      height: Math.max(1, widthRef.current) * 2,
      onRender: (state) => {
        phiRef.current += 0.005
        state.phi = phiRef.current
        state.width = Math.max(1, widthRef.current) * 2
        state.height = Math.max(1, widthRef.current) * 2
      }
    })

    requestAnimationFrame(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = '1'
    })

    return () => {
      globe.destroy()
      window.removeEventListener('resize', onResize)
    }
  }, [config])

  return (
    <div className={`absolute inset-0 mx-auto aspect-square w-full max-w-[520px] ${className}`}>
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size] pointer-events-none"
      />
    </div>
  )
}

export default Globe
