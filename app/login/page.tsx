'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react'
import { authenticateUser } from '@/data/users'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    const user = authenticateUser(email, password)
    
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      
      if (user.role === 'professional') {
        router.push('/dashboard')
      } else if (user.role === 'admin') {
        router.push('/admin')
      } else {
        router.push('/')
      }
    } else {
      setError('Email o password non corretti')
    }
    
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-serenade flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 justify-center">
            <span className="text-4xl">🐾</span>
            <span className="font-display text-3xl uppercase text-violet">PetHero</span>
          </Link>
          <h1 className="mt-8 heading-2">
            Bentornato!
          </h1>
          <p className="mt-3 text-coal-light">
            Accedi al tuo account per continuare
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl shadow-card p-8 border-b-4 border-violet/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-200">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-coal-dark mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="nome@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-coal-dark mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pr-12"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-coal-light hover:text-violet"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-coal/30 text-violet focus:ring-violet"
                />
                <span className="text-sm text-coal">Ricordami</span>
              </label>
              <Link href="/password-dimenticata" className="text-sm text-violet hover:text-violet-dark font-semibold">
                Password dimenticata?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary justify-center disabled:opacity-50"
            >
              {loading ? 'Accesso in corso...' : 'Accedi'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-violet/10 rounded-xl">
            <p className="text-sm text-violet font-semibold mb-2">Demo Credentials:</p>
            <p className="text-xs text-coal">Email: demo@pethero.it</p>
            <p className="text-xs text-coal">Password: demo123</p>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-coal/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-coal-light">oppure continua con</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-coal/20 rounded-xl hover:border-violet hover:bg-violet/5 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-coal-dark font-semibold">Continua con Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-coal/20 rounded-xl hover:border-violet hover:bg-violet/5 transition-colors">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-coal-dark font-semibold">Continua con Facebook</span>
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="mt-8 text-center text-coal">
          Non hai un account?{' '}
          <Link href="/signup" className="text-violet hover:text-violet-dark font-semibold">
            Registrati gratis
          </Link>
        </p>
      </div>
    </div>
  )
}
