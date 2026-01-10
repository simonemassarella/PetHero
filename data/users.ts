export type UserRole = 'dog_owner' | 'professional' | 'admin'

export interface User {
  id: string
  email: string
  password: string // In produzione, questo sarebbe hashato
  name: string
  avatar: string
  role: UserRole
  phone?: string
  city?: string
  createdAt: string
  professionalId?: string // Se l'utente è un professionista
}

export interface DogOwner extends User {
  role: 'dog_owner'
  dogs: Dog[]
  favorites: string[] // IDs dei professionisti preferiti
}

export interface Dog {
  id: string
  name: string
  breed: string
  age: number
  size: 'small' | 'medium' | 'large' | 'giant'
  notes?: string
}

export const users: User[] = [
  {
    id: 'u1',
    email: 'mario.rossi@email.com',
    password: 'password123',
    name: 'Mario Rossi',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    role: 'dog_owner',
    phone: '+39 333 1111111',
    city: 'Gaeta',
    createdAt: '2024-01-01',
  },
  {
    id: 'u2',
    email: 'maria.rossi@email.com',
    password: 'password123',
    name: 'Maria Rossi',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    role: 'professional',
    phone: '+39 333 1234567',
    city: 'Gaeta',
    createdAt: '2023-06-15',
    professionalId: '1',
  },
  {
    id: 'u3',
    email: 'admin@doghero.it',
    password: 'admin123',
    name: 'Admin Dog Hero',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    role: 'admin',
    createdAt: '2023-01-01',
  },
  {
    id: 'u4',
    email: 'laura.bianchi@email.com',
    password: 'password123',
    name: 'Laura Bianchi',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    role: 'dog_owner',
    phone: '+39 340 2222222',
    city: 'Formia',
    createdAt: '2024-01-10',
  },
  {
    id: 'u5',
    email: 'paolo.esposito@educatore.it',
    password: 'password123',
    name: 'Dott. Paolo Esposito',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    role: 'professional',
    phone: '+39 328 9876543',
    city: 'Terracina',
    createdAt: '2021-09-20',
    professionalId: '3',
  },
]

export const dogOwners: DogOwner[] = [
  {
    id: 'u1',
    email: 'mario.rossi@email.com',
    password: 'password123',
    name: 'Mario Rossi',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    role: 'dog_owner',
    phone: '+39 333 1111111',
    city: 'Gaeta',
    createdAt: '2024-01-01',
    dogs: [
      { id: 'd1', name: 'Rocky', breed: 'Labrador Retriever', age: 3, size: 'large', notes: 'Molto giocherellone, ama l\'acqua' },
    ],
    favorites: ['1', '2'],
  },
  {
    id: 'u4',
    email: 'laura.bianchi@email.com',
    password: 'password123',
    name: 'Laura Bianchi',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    role: 'dog_owner',
    phone: '+39 340 2222222',
    city: 'Formia',
    createdAt: '2024-01-10',
    dogs: [
      { id: 'd2', name: 'Luna', breed: 'Golden Retriever', age: 2, size: 'large' },
      { id: 'd3', name: 'Milo', breed: 'Beagle', age: 5, size: 'medium', notes: 'Timido con gli estranei' },
    ],
    favorites: ['2', '3', '4'],
  },
]

export const getUserByEmail = (email: string): User | undefined => {
  return users.find(u => u.email.toLowerCase() === email.toLowerCase())
}

export const getUserById = (id: string): User | undefined => {
  return users.find(u => u.id === id)
}

export const authenticateUser = (email: string, password: string): User | null => {
  const user = getUserByEmail(email)
  if (user && user.password === password) {
    return user
  }
  return null
}
