import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, Star, Phone, Mail, Clock, BadgeCheck, ArrowLeft, Share2, ExternalLink } from 'lucide-react'
import { getProfessionalById, serviceTypeLabels, serviceTypeIcons } from '@/data/professionals'
import { formatPrice, formatDate } from '@/lib/utils'
import FormContatto from '@/components/FormContatto'

interface ProfiloPageProps {
  params: { id: string }
}

export default function ProfiloPage({ params }: ProfiloPageProps) {
  const professional = getProfessionalById(params.id)

  if (!professional) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 lg:h-96">
        <Image
          src={professional.coverImage}
          alt={professional.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Back Button */}
        <Link
          href="/cerca"
          className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-neutral-700 hover:bg-white transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="hidden sm:inline">Torna alla ricerca</span>
        </Link>

        {/* Share Button */}
        <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full text-neutral-700 hover:bg-white transition-colors">
          <Share2 size={18} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header Card */}
            <div className="card p-6">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Avatar */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                  <Image
                    src={professional.avatar}
                    alt={professional.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-2xl font-display font-bold text-neutral-900">
                          {professional.name}
                        </h1>
                        {professional.verified && (
                          <BadgeCheck size={24} className="text-primary-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-neutral-600 mb-3">
                        <MapPin size={16} />
                        <span>{professional.address}, {professional.city}</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Types */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {professional.serviceTypes.map(type => (
                      <span
                        key={type}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {serviceTypeIcons[type]} {serviceTypeLabels[type]}
                      </span>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star size={20} className="fill-amber-400 text-amber-400" />
                      <span className="font-bold text-lg">{professional.rating}</span>
                    </div>
                    <span className="text-neutral-500">
                      {professional.totalReviews} recensioni
                    </span>
                    <span className="text-neutral-300">|</span>
                    <span className="text-neutral-500">
                      Membro dal {formatDate(professional.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">Chi Sono</h2>
              <p className="text-neutral-700 leading-relaxed">{professional.bio}</p>
            </div>

            {/* Services */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">Servizi Offerti</h2>
              <div className="space-y-4">
                {professional.services.map(service => (
                  <div
                    key={service.id}
                    className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                  >
                    <div>
                      <h3 className="font-medium text-neutral-900">{service.name}</h3>
                      <p className="text-sm text-neutral-600">{service.description}</p>
                      <div className="flex items-center gap-1 mt-1 text-sm text-neutral-500">
                        <Clock size={14} />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary-600">{formatPrice(service.price)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {professional.gallery.length > 0 && (
              <div className="card p-6">
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Galleria</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {professional.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden">
                      <Image
                        src={image}
                        alt={`${professional.name} gallery ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Badges */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">Badge e Certificazioni</h2>
              <div className="flex flex-wrap gap-3">
                {professional.badges.map(badge => (
                  <div
                    key={badge.id}
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-xl"
                  >
                    <span className="text-xl">{badge.icon}</span>
                    <span className="font-medium text-neutral-700">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaborations */}
            {professional.collaborations.length > 0 && (
              <div className="card p-6">
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Collaborazioni</h2>
                <div className="flex flex-wrap gap-2">
                  {professional.collaborations.map((collab, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-2 bg-accent-50 text-accent-700 rounded-lg text-sm"
                    >
                      <ExternalLink size={14} />
                      {collab}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-neutral-900">
                  Recensioni ({professional.totalReviews})
                </h2>
                <div className="flex items-center gap-2">
                  <Star size={20} className="fill-amber-400 text-amber-400" />
                  <span className="font-bold text-lg">{professional.rating}</span>
                </div>
              </div>
              <div className="space-y-6">
                {professional.reviews.map(review => (
                  <div key={review.id} className="border-b border-neutral-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-start gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={review.authorAvatar}
                          alt={review.authorName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-neutral-900">{review.authorName}</h4>
                          <span className="text-sm text-neutral-500">{formatDate(review.date)}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'}
                            />
                          ))}
                        </div>
                        <p className="text-neutral-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="card p-6 sticky top-24">
              <FormContatto professional={professional} />

              {/* Quick Contact */}
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <p className="text-sm text-neutral-500 mb-3">Oppure contatta direttamente:</p>
                <div className="space-y-2">
                  <a
                    href={`tel:${professional.phone}`}
                    className="flex items-center gap-3 p-3 bg-secondary-50 text-secondary-700 rounded-xl hover:bg-secondary-100 transition-colors"
                  >
                    <Phone size={18} />
                    <span className="font-medium">{professional.phone}</span>
                  </a>
                  <a
                    href={`mailto:${professional.email}`}
                    className="flex items-center gap-3 p-3 bg-accent-50 text-accent-700 rounded-xl hover:bg-accent-100 transition-colors"
                  >
                    <Mail size={18} />
                    <span className="font-medium text-sm">{professional.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
