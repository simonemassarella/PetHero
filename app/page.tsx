import Link from 'next/link'
import Image from 'next/image'
import { 
  ShieldCheck, 
  Heart, 
  Award, 
  Clock, 
  ArrowRight, 
  Quote, 
  Star,
  Users,
  Home as HomeIcon,
  GraduationCap,
  Building2,
  Dog,
  Sparkles,
  CheckCircle2,
  Smile,
  Facebook,
  Instagram,
  Twitter,
  Zap,
  PawPrint
} from 'lucide-react'
import { professionals, serviceTypeLabels, ServiceType } from '@/data/professionals'
import CardProfessionista from '@/components/CardProfessionista'
import AnimatedSection, { StaggeredChildren, AnimatedCounter } from '@/components/AnimatedSection'

const services: { type: ServiceType; description: string; icon: React.ElementType }[] = [
  { type: 'pet_sitter', icon: Dog, description: 'Affida il tuo pet a professionisti esperti per custodia e compagnia quotidiana.' },
  { type: 'pensione', icon: HomeIcon, description: 'Strutture sicure e confortevoli per quando sei in viaggio o al lavoro.' },
  { type: 'toelettatura', icon: Sparkles, description: 'Lavaggio, tosatura e cura del pelo per il benessere del tuo animale.' },
  { type: 'veterinario', icon: Heart, description: 'Cliniche e ambulatori veterinari per la salute del tuo pet.' },
]

const benefits = [
  { icon: ShieldCheck, title: 'Professionisti Verificati', description: 'Tutti i professionisti sono verificati e recensiti dalla community di pet lovers.' },
  { icon: Heart, title: 'Cura Personalizzata', description: 'Ogni animale riceve attenzioni su misura per le sue esigenze specifiche.' },
  { icon: Sparkles, title: 'Qualità Garantita', description: 'Solo i migliori professionisti entrano nella nostra rete selezionata.' },
  { icon: Smile, title: 'Esperienza Stress-Free', description: 'Ambiente rilassato e staff esperto per un\'esperienza positiva.' },
  { icon: CheckCircle2, title: 'La Cura è la Nostra Specialità', description: 'Dal bagno alle coccole, i nostri servizi esaltano il benessere del tuo pet.' },
]

const featuredProfessionals = professionals.slice(0, 3)

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile-first design from Figma with animations */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center bg-serenade overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:py-20">
        {/* Background Decorations with animations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Paw prints */}
          <PawPrint size={48} className="absolute top-20 left-4 text-violet opacity-10 animate-float" strokeWidth={1.5} />
          <PawPrint size={40} className="absolute bottom-20 right-4 text-violet opacity-10 animate-float" style={{ animationDelay: '1s' }} strokeWidth={1.5} />
          <PawPrint size={56} className="absolute top-[40%] right-[5%] text-violet opacity-10 animate-float hidden sm:block" style={{ animationDelay: '0.5s' }} strokeWidth={1.5} />
          <PawPrint size={48} className="absolute bottom-[30%] left-[8%] text-violet opacity-10 animate-float hidden sm:block" style={{ animationDelay: '1.5s' }} strokeWidth={1.5} />
          {/* Animated Gradient blurs */}
          <div className="absolute top-56 right-10 w-40 h-40 bg-violet/10 rounded-full blur-[32px] animate-pulse-slow" />
          <div className="absolute bottom-40 left-5 w-32 h-32 bg-golden/10 rounded-full blur-[32px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center flex flex-col items-center gap-4">
          
          {/* Main Title with staggered animation */}
          <h1 className="font-display uppercase leading-[0.85]">
            <span className="block text-[4.9rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-violet leading-[0.85] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              IL MIGLIOR
            </span>
            <span className="block text-[4.9rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-violet leading-[0.85] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              PET CARE
            </span>
            <span className="block text-[3.3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem] leading-[0.85] mt-1 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <span className="text-violet">PER IL TUO </span>
              <span className="text-teal animate-pulse-slow">AMICO</span>
            </span>
          </h1>

          {/* Payoff with animation */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-coal font-medium max-w-xs sm:max-w-lg md:max-w-2xl mx-auto animate-fade-in-up text-center" style={{ animationDelay: '0.4s' }}>
            Chi si prende cura del tuo{' '}
            <span className="text-violet font-bold relative inline-block hover:scale-110 transition-transform cursor-default">
              pet
              <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-violet/40 rounded-full" />
            </span>
            , come<br className="sm:hidden" />{' '}
            faresti{' '}
            <span className="text-golden font-bold relative inline-block hover:scale-110 transition-transform cursor-default">
              tu
              <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-golden/50 rounded-full" />
            </span>
            .
          </p>

          {/* CTA Button with shimmer effect */}
          <div className="animate-fade-in-up pt-4" style={{ animationDelay: '0.5s' }}>
            <Link 
              href="/cerca" 
              className="group relative inline-flex items-center gap-2 bg-golden text-coal px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg md:text-xl border-b-4 border-violet shadow-xl hover:shadow-2xl hover:bg-golden-light hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative">Trova Professionista</span>
              <ArrowRight size={20} strokeWidth={2.5} className="relative group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Happy Paws Badge with hover effects */}
          <div className="pt-4 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default group">
              <div className="relative h-8 w-20">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full overflow-hidden border-2 border-violet transition-transform duration-300 group-hover:scale-110 group-hover:z-10">
                  <Image src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=100" alt="Pet" fill className="object-cover" />
                </div>
                <div className="absolute left-4 top-0 w-8 h-8 rounded-full overflow-hidden border-2 border-violet transition-transform duration-300 group-hover:scale-110 group-hover:z-20" style={{ transitionDelay: '50ms' }}>
                  <Image src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100" alt="Pet" fill className="object-cover" />
                </div>
                <div className="absolute left-8 top-0 w-8 h-8 rounded-full overflow-hidden border-2 border-violet transition-transform duration-300 group-hover:scale-110 group-hover:z-30" style={{ transitionDelay: '100ms' }}>
                  <Image src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=100" alt="Pet" fill className="object-cover" />
                </div>
              </div>
              <span className="text-coal text-xs font-semibold whitespace-nowrap">
                <AnimatedCounter end={2500} duration={2000} suffix="+ Happy Paws" />
              </span>
            </div>
          </div>
        </div>

        {/* Social Icons - Desktop only with animations */}
        <div className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
          <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-violet hover:bg-golden hover:text-coal transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 hover:rotate-12 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Facebook size={20} strokeWidth={2.5} />
          </a>
          <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-violet hover:bg-golden hover:text-coal transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 hover:rotate-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Instagram size={20} strokeWidth={2.5} />
          </a>
          <a href="#" className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-violet hover:bg-golden hover:text-coal transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 hover:rotate-12 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <Twitter size={20} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* About Section - Groomer Style */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-52 rounded-3xl overflow-hidden border-b-4 border-violet/20 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <Image src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400" alt="Dog" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative h-72 rounded-3xl overflow-hidden border-b-4 border-violet/20 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <Image src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400" alt="Dogs" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="relative h-72 rounded-3xl overflow-hidden border-b-4 border-violet/20 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <Image src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400" alt="Cat" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative h-52 rounded-3xl overflow-hidden border-b-4 border-violet/20 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <Image src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400" alt="Dog grooming" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block bg-violet/10 text-violet px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-8">
                Chi Siamo
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-display uppercase tracking-tight leading-[0.9] mb-10">
                <span className="text-violet">CONOSCI</span><br />
                <span className="text-violet">PET</span><span className="text-golden">LIFE</span>
              </h2>
              <p className="text-xl md:text-2xl text-coal leading-relaxed mb-6">
                Ciao! Siamo <span className="text-violet font-semibold">Pet</span><span className="text-golden font-semibold">Life</span>, il nuovo migliore amico del tuo pet. Crediamo nelle <span className="text-golden font-semibold">coccole soffici</span>, nelle code felici e nel far sembrare i tuoi animali assolutamente favolosi.
              </p>
              <p className="text-lg text-coal-light mb-12 leading-relaxed">
                Come amanti degli animali, PetLife è nato da una visione semplice ma profonda: offrire una piattaforma dove i pet non sono solo clienti ma <span className="text-teal font-medium">membri preziosi della famiglia</span>. La nostra missione è unire competenza e amore, garantendo cure personalizzate per ogni pet.
              </p>
              <Link href="/professionisti" className="group inline-flex items-center gap-3 bg-golden text-coal px-8 py-4 rounded-2xl font-bold text-lg border-b-4 border-violet hover:bg-golden-light transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                Scopri di Più
                <ArrowRight size={20} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Violet Background with Animated Counters */}
      <section className="py-20 bg-violet relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <PawPrint className="absolute top-10 left-[10%] w-20 h-20 text-serenade animate-float" />
          <PawPrint className="absolute bottom-10 right-[15%] w-16 h-16 text-serenade animate-float-slow" />
          <PawPrint className="absolute top-1/2 left-[80%] w-12 h-12 text-serenade animate-bounce-slow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="group cursor-default">
                <div className="text-3xl md:text-5xl font-display uppercase text-serenade group-hover:text-golden transition-colors duration-300">
                  Dal 2010
                </div>
                <div className="text-serenade/70 font-medium text-lg mt-2">Attivi</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="group cursor-default">
                <div className="text-3xl md:text-5xl font-display uppercase text-serenade group-hover:text-golden transition-colors duration-300 flex items-center justify-center gap-2">
                  <AnimatedCounter end={5} duration={1500} />
                  <Star className="w-8 h-8 fill-golden text-golden animate-pulse-slow" />
                </div>
                <div className="text-serenade/70 font-medium text-lg mt-2">Valutazione</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="group cursor-default">
                <div className="text-3xl md:text-5xl font-display uppercase text-serenade group-hover:text-golden transition-colors duration-300">
                  <AnimatedCounter end={2500} duration={2000} suffix="+" />
                </div>
                <div className="text-serenade/70 font-medium text-lg mt-2">Pet Felici</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="group cursor-default">
                <div className="text-3xl md:text-5xl font-display uppercase text-serenade group-hover:text-golden transition-colors duration-300">
                  <AnimatedCounter end={50} duration={1500} suffix="+" />
                </div>
                <div className="text-serenade/70 font-medium text-lg mt-2">Professionisti</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section - Groomer Style with Animations */}
      <section className="py-28 bg-serenade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge + Title */}
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <span className="inline-block bg-violet/10 text-violet px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-8 hover:bg-violet hover:text-serenade transition-all duration-300 cursor-default">
              I Nostri Servizi
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-display uppercase tracking-tight leading-[0.9]">
              <span className="text-violet">AVVENTURE DI </span>
              <span className="text-golden">CURA</span><br />
              <span className="text-violet">PER IL TUO </span>
              <span className="text-teal">PET</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ type, description, icon: Icon }, index) => (
              <AnimatedSection key={type} animation="fade-up" delay={index * 100}>
                <Link
                  href={`/cerca?service=${type}`}
                  className="group bg-white rounded-3xl p-8 text-center border-b-4 border-violet/20 shadow-card hover:shadow-card-hover hover:-translate-y-3 hover:rotate-1 transition-all duration-300 block"
                >
                  <div className="w-20 h-20 bg-golden/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-golden group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon size={40} strokeWidth={2} className="text-violet group-hover:animate-wiggle" />
                  </div>
                  <h3 className="font-display text-xl uppercase text-violet mb-3 group-hover:text-golden transition-colors">
                    {serviceTypeLabels[type]}
                  </h3>
                  <p className="text-coal-light text-sm leading-relaxed">{description}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={500} className="text-center mt-12">
            <Link href="/cerca" className="inline-flex items-center gap-2 text-violet font-semibold hover:text-golden transition-colors group">
              Vedi Tutti i Servizi
              <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us - Violet Section - Groomer Style with Animations */}
      <section className="py-28 bg-violet relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-golden rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-serenade rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Badge + Title */}
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <span className="inline-block bg-serenade/20 text-golden px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-8 hover:bg-golden hover:text-coal transition-all duration-300 cursor-default">
              Le Nostre Specialità
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-display uppercase tracking-tight leading-[0.9]">
              <span className="text-serenade">LA </span>
              <span className="text-golden">PERFEZIONE</span>
              <span className="text-serenade"> INIZIA QUI:</span><br />
              <span className="text-serenade">PERCHÉ </span>
              <span className="text-golden">SCEGLIERCI?</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={i} animation="scale" delay={i * 100}>
                <div className="group bg-serenade/10 backdrop-blur-sm rounded-3xl p-8 border border-serenade/20 hover:bg-serenade/20 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 cursor-default h-full">
                  <div className="w-16 h-16 bg-golden rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <benefit.icon size={32} strokeWidth={2.5} className="text-coal" />
                  </div>
                  <h3 className="font-display text-xl uppercase text-serenade mb-3 group-hover:text-golden transition-colors">{benefit.title}</h3>
                  <p className="text-serenade/80 leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Banner - Golden */}
      <section className="py-6 bg-golden overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="text-2xl font-display uppercase text-coal">✦ QUALITÀ</span>
              <span className="text-2xl font-display uppercase text-coal">✦ PROFESSIONISTI ESPERTI</span>
              <span className="text-2xl font-display uppercase text-coal">✦ CURA</span>
              <span className="text-2xl font-display uppercase text-coal">✦ AMORE</span>
              <span className="text-2xl font-display uppercase text-coal">✦ QUALITÀ</span>
              <span className="text-2xl font-display uppercase text-coal">✦ PROFESSIONISTI ESPERTI</span>
              <span className="text-2xl font-display uppercase text-coal">✦ CURA</span>
              <span className="text-2xl font-display uppercase text-coal">✦ AMORE</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - Groomer Style with Animations */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge + Title */}
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <span className="inline-block bg-violet/10 text-violet px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-8 hover:bg-violet hover:text-serenade transition-all duration-300 cursor-default">
              Testimonianze
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-display uppercase tracking-tight leading-[0.9]">
              <span className="text-violet">ELOGI </span>
              <span className="text-golden">ZAMPA-STICI!</span><br />
              <span className="text-violet">I PET PARENT CONDIVIDONO </span>
              <span className="text-teal">L&apos;AMORE</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Marco B.', city: 'Gaeta', title: 'Il Nostro Labrador Adora!', text: 'Ho trovato una dog sitter fantastica per il mio Labrador. Il servizio è stato impeccabile e il mio cane era felicissimo! Torneremo sicuramente!' },
              { name: 'Giulia R.', city: 'Formia', title: 'Vacanze Perfette!', text: 'La pensione che ho trovato su PetLife è stata perfetta per le vacanze. Il mio cane è tornato rilassato e coccolato. Consigliatissimo!' },
              { name: 'Andrea M.', city: 'Terracina', title: 'Progressi Incredibili!', text: 'Grazie all\'educatore trovato qui, il mio cane ha fatto progressi incredibili. Professionalità e competenza al top!' },
            ].map((testimonial, i) => (
              <AnimatedSection key={i} animation="slide-left" delay={i * 150}>
                <div className="group bg-serenade rounded-3xl p-8 relative border-b-4 border-violet/20 hover:-translate-y-3 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="absolute -top-5 left-8">
                    <div className="w-12 h-12 bg-violet rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Quote size={24} strokeWidth={2.5} className="text-serenade" />
                    </div>
                  </div>

                  <div className="pt-6">
                    <h4 className="font-display text-xl uppercase text-violet mb-4 group-hover:text-golden transition-colors">{testimonial.title}</h4>
                    <p className="text-coal mb-6 leading-relaxed text-lg">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-violet/10">
                      <div className="w-14 h-14 rounded-full bg-violet/20 flex items-center justify-center group-hover:bg-violet group-hover:text-serenade transition-all duration-300">
                        <span className="text-2xl font-display text-violet group-hover:text-serenade transition-colors">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-bold text-coal-dark text-lg">{testimonial.name}</p>
                        <p className="text-coal-light">{testimonial.city}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Professionals - Groomer Style with Animations */}
      <section className="py-28 bg-serenade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge + Title */}
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <span className="inline-block bg-violet/10 text-violet px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-8 hover:bg-violet hover:text-serenade transition-all duration-300 cursor-default">
              I Migliori
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-display uppercase tracking-tight leading-[0.9]">
              <span className="text-violet">PROFESSIONISTI IN </span>
              <span className="text-golden">EVIDENZA</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProfessionals.map((professional, index) => (
              <AnimatedSection key={professional.id} animation="fade-up" delay={index * 150}>
                <CardProfessionista professional={professional} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={500} className="text-center mt-12">
            <Link href="/cerca" className="group inline-flex items-center gap-3 bg-violet text-serenade px-8 py-4 rounded-2xl font-bold text-lg hover:bg-violet-dark transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-glow">
              Vedi Tutti i Professionisti
              <ArrowRight size={20} strokeWidth={2.5} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section - Groomer Style with Animations */}
      <section className="py-32 bg-violet relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <Dog size={120} className="absolute top-10 left-10 text-serenade animate-float" strokeWidth={1} />
          <PawPrint size={120} className="absolute bottom-10 right-10 text-serenade animate-bounce-slow" strokeWidth={1} />
          <Heart size={80} className="absolute top-1/2 left-1/4 text-serenade animate-pulse-slow" strokeWidth={1} />
          <Star size={70} className="absolute top-1/3 right-1/4 text-serenade animate-wiggle-slow" strokeWidth={1} />
        </div>

        <AnimatedSection animation="scale" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-serenade/20 text-golden px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-10 hover:bg-golden hover:text-coal transition-all duration-300 cursor-default">
            Inizia Ora
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display uppercase tracking-tight leading-[0.85] mb-10">
            <span className="text-serenade">CHE LA </span>
            <span className="text-golden animate-pulse-slow">DOLCEZZA</span><br />
            <span className="text-serenade">ABBIA </span>
            <span className="text-golden animate-pulse-slow">INIZIO!</span>
          </h2>
          <p className="text-xl md:text-2xl text-serenade/80 mb-14 max-w-2xl mx-auto leading-relaxed">
            Pronto a regalare al tuo pet un&apos;esperienza adorabile? Clicca il pulsante qui sotto per iniziare un viaggio di <span className="text-golden font-semibold">coccole</span> e <span className="text-golden font-semibold">felicità</span>!
          </p>
          <Link href="/cerca" className="group inline-flex items-center gap-3 bg-golden text-coal px-12 py-6 rounded-2xl font-bold text-xl border-b-4 border-coal/20 hover:bg-golden-light transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl animate-glow">
            Prenota un Appuntamento
            <ArrowRight size={24} strokeWidth={2.5} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </AnimatedSection>
      </section>

      {/* FAQ Preview - Groomer Style with Animations */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge + Title */}
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <span className="inline-block bg-violet/10 text-violet px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-8 hover:bg-violet hover:text-serenade transition-all duration-300 cursor-default">
              FAQ
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-display uppercase tracking-tight leading-[0.9]">
              <span className="text-violet">DOMANDE </span>
              <span className="text-golden">PELOSE</span><br />
              <span className="text-teal">ANTICIPATE!</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              { q: 'Come funziona PetLife?', a: 'Cerca professionisti nella tua zona, confronta profili e recensioni, e contatta direttamente chi preferisci. È semplice e veloce!' },
              { q: 'I professionisti sono verificati?', a: 'Sì, tutti i professionisti vengono verificati prima di essere pubblicati sulla piattaforma. La sicurezza del tuo pet è la nostra priorità.' },
              { q: 'Quanto costa usare PetLife?', a: 'Per i proprietari di animali è completamente gratuito. I professionisti possono scegliere tra diversi piani di abbonamento.' },
              { q: 'Cosa devo fare prima di portare il mio pet?', a: 'Assicurati che il tuo pet sia rilassato e abbia fatto una breve passeggiata. Porta con te eventuali documenti sanitari e informazioni utili.' },
            ].map((faq, i) => (
              <AnimatedSection key={i} animation="slide-right" delay={i * 100}>
                <div className="group bg-serenade rounded-2xl p-6 border-b-4 border-violet/20 hover:shadow-lg hover:-translate-x-2 transition-all duration-300 cursor-pointer">
                  <h4 className="font-display text-lg uppercase text-violet mb-3 group-hover:text-golden transition-colors flex items-center gap-2">
                    <Zap size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-golden" />
                    {faq.q}
                  </h4>
                  <p className="text-coal leading-relaxed">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={500} className="text-center mt-12">
            <Link href="/faq" className="group inline-flex items-center gap-2 text-violet font-semibold hover:text-golden transition-colors">
              Vedi tutte le FAQ 
              <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
