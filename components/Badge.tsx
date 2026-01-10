import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  className?: string
}

const variantStyles = {
  primary: 'bg-primary-100 text-primary-700',
  secondary: 'bg-secondary-100 text-secondary-700',
  accent: 'bg-accent-100 text-accent-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-amber-100 text-amber-700',
  neutral: 'bg-neutral-100 text-neutral-700',
}

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
}

export default function Badge({ 
  children, 
  variant = 'neutral', 
  size = 'md',
  icon,
  className 
}: BadgeProps) {
  return (
    <span 
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span>{icon}</span>}
      {children}
    </span>
  )
}

export function VerifiedBadge() {
  return (
    <Badge variant="success" icon="✓" size="sm">
      Verificato
    </Badge>
  )
}

export function PremiumBadge() {
  return (
    <Badge variant="primary" icon="⭐" size="sm">
      Premium
    </Badge>
  )
}

export function EnterpriseBadge() {
  return (
    <Badge variant="warning" icon="🏆" size="sm">
      Enterprise
    </Badge>
  )
}
