'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Heart, BadgeCheck, Phone } from 'lucide-react'
import { Professional, serviceTypeLabels, serviceTypeIcons } from '@/data/professionals'
import { formatPrice } from '@/lib/utils'
import { useState } from 'react'

interface CardProfessionistaProps {
  professional: Professional
  showContact?: boolean
}

export default function CardProfessionista({ professional, showContact = false }: CardProfessionistaProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  const minPrice = Math.min(...professional.services.map(s => s.price))

  return (
    <div className="card group overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={professional.coverImage}
          alt={professional.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coal-dark/60 to-transparent" />
        
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            setIsFavorite(!isFavorite)
          }}
          className="absolute top-4 right-4 p-2.5 bg-serenade/90 backdrop-blur-sm rounded-full hover:bg-golden transition-colors group/fav"
        >
          <Heart
            size={18}
            className={isFavorite ? 'fill-violet text-violet' : 'text-coal group-hover/fav:text-coal'}
          />
        </button>

        {/* Subscription Badge */}
        {professional.subscriptionTier === 'premium' && (
          <span className="absolute top-4 left-4 px-3 py-1.5 bg-violet text-serenade text-xs font-bold rounded-full">
            Premium
          </span>
        )}
        {professional.subscriptionTier === 'enterprise' && (
          <span className="absolute top-4 left-4 px-3 py-1.5 bg-golden text-coal text-xs font-bold rounded-full">
            Enterprise
          </span>
        )}

        {/* Service Types */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          {professional.serviceTypes.map(type => (
            <span
              key={type}
              className="px-3 py-1.5 bg-serenade/90 backdrop-blur-sm text-coal text-xs font-semibold rounded-full flex items-center gap-1.5"
            >
              <span>{serviceTypeIcons[type]}</span>
              {serviceTypeLabels[type]}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-violet/20 flex-shrink-0">
            <Image
              src={professional.avatar}
              alt={professional.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-coal-dark text-lg truncate">
                {professional.name}
              </h3>
              {professional.verified && (
                <BadgeCheck size={18} className="text-violet flex-shrink-0" />
              )}
            </div>
            <div className="flex items-center gap-1.5 text-sm text-coal-light">
              <MapPin size={14} />
              <span>{professional.city}</span>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1.5">
            <Star size={18} className="fill-golden text-golden" />
            <span className="font-bold text-coal-dark">{professional.rating}</span>
          </div>
          <span className="text-sm text-coal-light">
            ({professional.totalReviews} recensioni)
          </span>
        </div>

        {/* Bio */}
        <p className="text-coal line-clamp-2 mb-5">
          {professional.bio}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {professional.badges.slice(0, 3).map(badge => (
            <span
              key={badge.id}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet/10 text-violet text-xs font-semibold rounded-full"
            >
              <span>{badge.icon}</span>
              {badge.name}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-5 border-t border-coal/10">
          <div>
            <span className="text-xs text-coal-light">A partire da</span>
            <p className="font-bold text-violet text-lg">{formatPrice(minPrice)}</p>
          </div>
          
          <div className="flex gap-2">
            {showContact && (
              <a
                href={`tel:${professional.phone}`}
                className="p-2.5 bg-violet/10 text-violet rounded-xl hover:bg-violet hover:text-serenade transition-colors"
              >
                <Phone size={18} />
              </a>
            )}
            <Link
              href={`/profilo/${professional.id}`}
              className="px-5 py-2.5 bg-golden text-coal font-bold rounded-xl hover:bg-golden-light transition-colors border-b-2 border-violet/30"
            >
              Vedi Profilo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
