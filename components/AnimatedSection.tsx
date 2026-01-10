'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale' | 'blur'
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, once])

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    }

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return { ...baseStyles, opacity: 0, transform: 'translateY(40px)' }
        case 'fade-in':
          return { ...baseStyles, opacity: 0 }
        case 'slide-left':
          return { ...baseStyles, opacity: 0, transform: 'translateX(-60px)' }
        case 'slide-right':
          return { ...baseStyles, opacity: 0, transform: 'translateX(60px)' }
        case 'scale':
          return { ...baseStyles, opacity: 0, transform: 'scale(0.9)' }
        case 'blur':
          return { ...baseStyles, opacity: 0, filter: 'blur(10px)' }
        default:
          return baseStyles
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1)',
      filter: 'blur(0)',
    }
  }

  return (
    <div ref={ref} className={className} style={getAnimationStyles()}>
      {children}
    </div>
  )
}

// Componente per animare elementi in sequenza
interface StaggeredChildrenProps {
  children: ReactNode[]
  className?: string
  childClassName?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale'
  staggerDelay?: number
  duration?: number
  threshold?: number
}

export function StaggeredChildren({
  children,
  className = '',
  childClassName = '',
  animation = 'fade-up',
  staggerDelay = 100,
  duration = 500,
  threshold = 0.1,
}: StaggeredChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  const getChildStyles = (index: number) => {
    const delay = index * staggerDelay
    const baseStyles = {
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    }

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return { ...baseStyles, opacity: 0, transform: 'translateY(30px)' }
        case 'fade-in':
          return { ...baseStyles, opacity: 0 }
        case 'slide-left':
          return { ...baseStyles, opacity: 0, transform: 'translateX(-40px)' }
        case 'slide-right':
          return { ...baseStyles, opacity: 0, transform: 'translateX(40px)' }
        case 'scale':
          return { ...baseStyles, opacity: 0, transform: 'scale(0.8)' }
        default:
          return baseStyles
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1)',
    }
  }

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div key={index} className={childClassName} style={getChildStyles(index)}>
          {child}
        </div>
      ))}
    </div>
  )
}

// Componente per contatore animato
interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(startValue + (end - startValue) * easeOut)
      
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

// Componente per testo che appare lettera per lettera
interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  cursor?: boolean
}

export function TypewriterText({
  text,
  className = '',
  speed = 50,
  delay = 0,
  cursor = true,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const timeout = setTimeout(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          setIsComplete(true)
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [hasStarted, text, speed, delay])

  return (
    <span ref={ref} className={className}>
      {displayText}
      {cursor && !isComplete && <span className="animate-blink">|</span>}
    </span>
  )
}
