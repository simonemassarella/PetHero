'use client'

import { TrendingUp, TrendingDown, Users, Eye, MessageSquare, Calendar } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  change?: number
  icon: React.ReactNode
  trend?: 'up' | 'down' | 'neutral'
}

function StatCard({ title, value, change, icon, trend = 'neutral' }: StatCardProps) {
  return (
    <div className="card p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-neutral-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-neutral-900">{value}</p>
          {change !== undefined && (
            <div className={`flex items-center gap-1 mt-2 text-sm ${
              trend === 'up' ? 'text-secondary-600' : 
              trend === 'down' ? 'text-red-600' : 
              'text-neutral-500'
            }`}>
              {trend === 'up' && <TrendingUp size={16} />}
              {trend === 'down' && <TrendingDown size={16} />}
              <span>{change > 0 ? '+' : ''}{change}% vs mese scorso</span>
            </div>
          )}
        </div>
        <div className="p-3 bg-primary-50 rounded-xl text-primary-500">
          {icon}
        </div>
      </div>
    </div>
  )
}

interface DashboardStatsProps {
  stats?: {
    views: number
    viewsChange: number
    contacts: number
    contactsChange: number
    bookings: number
    bookingsChange: number
    followers: number
    followersChange: number
  }
}

export default function DashboardStats({ stats }: DashboardStatsProps) {
  // Mock stats se non forniti
  const defaultStats = {
    views: 1247,
    viewsChange: 12,
    contacts: 34,
    contactsChange: 8,
    bookings: 18,
    bookingsChange: -3,
    followers: 156,
    followersChange: 15,
  }

  const data = stats || defaultStats

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Visualizzazioni Profilo"
        value={data.views.toLocaleString('it-IT')}
        change={data.viewsChange}
        trend={data.viewsChange > 0 ? 'up' : data.viewsChange < 0 ? 'down' : 'neutral'}
        icon={<Eye size={24} />}
      />
      <StatCard
        title="Contatti Ricevuti"
        value={data.contacts}
        change={data.contactsChange}
        trend={data.contactsChange > 0 ? 'up' : data.contactsChange < 0 ? 'down' : 'neutral'}
        icon={<MessageSquare size={24} />}
      />
      <StatCard
        title="Prenotazioni"
        value={data.bookings}
        change={data.bookingsChange}
        trend={data.bookingsChange > 0 ? 'up' : data.bookingsChange < 0 ? 'down' : 'neutral'}
        icon={<Calendar size={24} />}
      />
      <StatCard
        title="Follower"
        value={data.followers}
        change={data.followersChange}
        trend={data.followersChange > 0 ? 'up' : data.followersChange < 0 ? 'down' : 'neutral'}
        icon={<Users size={24} />}
      />
    </div>
  )
}

export function RecentContacts() {
  const contacts = [
    { id: 1, name: 'Mario Rossi', service: 'Dog Sitting Giornaliero', date: '2024-01-25', status: 'new' },
    { id: 2, name: 'Laura Bianchi', service: 'Passeggiata', date: '2024-01-24', status: 'replied' },
    { id: 3, name: 'Giuseppe Verdi', service: 'Pernottamento', date: '2024-01-23', status: 'booked' },
    { id: 4, name: 'Anna Neri', service: 'Dog Sitting Giornaliero', date: '2024-01-22', status: 'replied' },
  ]

  const statusColors = {
    new: 'bg-primary-100 text-primary-700',
    replied: 'bg-accent-100 text-accent-700',
    booked: 'bg-secondary-100 text-secondary-700',
  }

  const statusLabels = {
    new: 'Nuovo',
    replied: 'Risposto',
    booked: 'Prenotato',
  }

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-neutral-900 mb-4">Contatti Recenti</h3>
      <div className="space-y-3">
        {contacts.map(contact => (
          <div key={contact.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
            <div>
              <p className="font-medium text-neutral-900">{contact.name}</p>
              <p className="text-sm text-neutral-500">{contact.service}</p>
            </div>
            <div className="text-right">
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${statusColors[contact.status as keyof typeof statusColors]}`}>
                {statusLabels[contact.status as keyof typeof statusLabels]}
              </span>
              <p className="text-xs text-neutral-400 mt-1">{contact.date}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-center text-sm text-primary-500 hover:text-primary-600 font-medium">
        Vedi tutti i contatti →
      </button>
    </div>
  )
}
