import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lang, content } from './content';
import { 
  Leaf, Users, CheckCircle, Shield, FileText, Building, Heart,
  Scale, Coffee, Clock, MapPin, Phone, Mail, Globe,
  Menu, X, ChevronDown, ChevronUp, Quote
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Lang>('th');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const d = content[lang];
  const isEn = lang === 'en';
  const displayFontClass = isEn ? 'font-display-en' : 'font-display-th';

  const toggleLang = () => {
    setLang(l => l === 'th' ? 'en' : 'th');
  };

  return (
    <div className={`min-h-screen bg-[var(--color-cream)] text-[var(--color-charcoal)] ${isEn ? 'lang-en' : 'lang-th'}`}>
      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Leaf className="w-8 h-8 text-[var(--color-gold)]" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className={`text-xl font-semibold leading-tight ${displayFontClass}`}>Sunshine & Friend</span>
              <span className="text-[10px] tracking-widest text-opacity-80 uppercase font-medium">{d.hero.eyebrow}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['about', 'services', 'process', 'team', 'resources', 'faq', 'contact'].map((k, i) => (
              <a key={i} href={`#${k === 'resources' ? 'why-us' : k}`} className="hover:text-[var(--color-gold)] transition-colors">{d.nav[k as keyof typeof d.nav]}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleLang}>
              <span className={`transition-colors ${!isEn ? 'text-[var(--color-gold)]' : 'text-gray-400 hover:text-black'}`}>TH</span>
              <span className="text-gray-300">|</span>
              <span className={`transition-colors ${isEn ? 'text-[var(--color-gold)]' : 'text-gray-400 hover:text-black'}`}>EN</span>
            </div>
            <a href="#contact" className="bg-[var(--color-forest)] text-[var(--color-cream)] px-6 py-2.5 rounded-full hover:bg-[var(--color-forest-dark)] transition-colors">
              {d.nav.book}
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col gap-4 border-t"
            >
              {['about', 'services', 'process', 'team', 'resources', 'faq', 'contact'].map((k, i) => (
                <a key={i} href={`#${k === 'resources' ? 'why-us' : k}`} onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100 last:border-0">{d.nav[k as keyof typeof d.nav]}</a>
              ))}
               <div className="flex items-center gap-4 py-2">
                <span className={`font-semibold cursor-pointer ${!isEn ? 'text-[var(--color-gold)]' : ''}`} onClick={toggleLang}>TH</span> 
                <span>|</span> 
                <span className={`font-semibold cursor-pointer ${isEn ? 'text-[var(--color-gold)]' : ''}`} onClick={toggleLang}>EN</span>
               </div>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-[var(--color-forest)] text-[var(--color-cream)] px-6 py-3 rounded-full text-center font-semibold mt-2">
                {d.nav.book}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="flex items-center gap-3 text-sm font-semibold tracking-widest text-[var(--color-gold)] uppercase">
              <span className="w-8 h-[1px] bg-[var(--color-gold)]"></span>
              {d.hero.eyebrow}
            </div>
            <h1 className={`text-5xl md:text-7xl font-bold leading-[1.1] text-[var(--color-forest)] ${displayFontClass}`}>
              {d.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              {d.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="bg-[var(--color-gold)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-gold-hover)] transition-colors text-center shadow-lg shadow-yellow-900/20">
                {d.hero.btnPrimary}
              </a>
              <a href="#services" className="border-2 border-[var(--color-gold)] text-[var(--color-forest)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-gold)] hover:text-white transition-colors text-center">
                {d.hero.btnSecondary}
              </a>
            </div>
            <div className="pt-8 flex items-center gap-4">
              <div className="flex -space-x-4">
                <Users className="w-10 h-10 p-2 bg-[var(--color-card)] rounded-full text-[var(--color-gold)] border border-gray-200" />
                <Heart className="w-10 h-10 p-2 bg-[var(--color-card)] rounded-full text-[var(--color-forest)] border border-gray-200" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-forest)]">800+</div>
                <div className="text-xs uppercase tracking-wider font-semibold text-gray-500">{d.hero.stat}</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-[var(--color-cream)]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-forest)]/40 to-transparent z-20 mix-blend-multiply pointer-events-none"></div>
            <BrandImage src="/hero-hands.jpg" alt={isEn ? "Elderly and young hands gently holding together" : "มือของผู้สูงอายุและคนหนุ่มสาวจับกันอย่างอบอุ่น"} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[var(--color-forest)] text-[var(--color-cream)] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-500/30 text-center">
          <TrustStat number="12+" text={d.trust.yoe} />
          <TrustStat number="800+" text={d.trust.families} />
          <TrustStat number="96%" text={d.trust.satisfaction} />
          <TrustStat number="100%" text={d.trust.dedicated} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-[var(--color-card)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-sm font-semibold tracking-widest text-[var(--color-gold)] uppercase">{d.services.eyebrow}</h3>
            <h2 className={`text-4xl md:text-5xl font-bold text-[var(--color-forest)] ${displayFontClass}`}>{d.services.heading}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={<FileText className="w-10 h-10 stroke-[1.5]" />} title={d.services.items[0].title} desc={d.services.items[0].desc} />
            <ServiceCard icon={<Building className="w-10 h-10 stroke-[1.5]" />} title={d.services.items[1].title} desc={d.services.items[1].desc} />
            <ServiceCard icon={<Users className="w-10 h-10 stroke-[1.5]" />} title={d.services.items[2].title} desc={d.services.items[2].desc} />
            <ServiceCard icon={<Shield className="w-10 h-10 stroke-[1.5]" />} title={d.services.items[3].title} desc={d.services.items[3].desc} />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="py-24 px-6 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 space-y-4 max-w-2xl">
            <h3 className="text-sm font-semibold tracking-widest text-[var(--color-gold)] uppercase">{d.whyChooseUs.eyebrow}</h3>
            <h2 className={`text-4xl md:text-5xl font-bold text-[var(--color-forest)] ${displayFontClass}`}>{d.whyChooseUs.heading}</h2>
          </div>
          <div className="space-y-16">
            <WhyUsRow img="/why-family.jpg" icon={<Users />} title={d.whyChooseUs.items[0].title} desc={d.whyChooseUs.items[0].desc} reverse={false} fontClass={displayFontClass} />
            <WhyUsRow img="/why-expertise.jpg" icon={<Scale />} title={d.whyChooseUs.items[1].title} desc={d.whyChooseUs.items[1].desc} reverse={true} fontClass={displayFontClass} />
            <WhyUsRow img="/why-integrity.jpg" icon={<Shield />} title={d.whyChooseUs.items[2].title} desc={d.whyChooseUs.items[2].desc} reverse={false} fontClass={displayFontClass} />
            <WhyUsRow img="/why-compassion.jpg" icon={<Heart />} title={d.whyChooseUs.items[3].title} desc={d.whyChooseUs.items[3].desc} reverse={true} fontClass={displayFontClass} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 px-6 bg-[var(--color-card)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="mb-16 space-y-4">
            <h3 className="text-sm font-semibold tracking-widest text-[var(--color-gold)] uppercase">{d.process.eyebrow}</h3>
            <h2 className={`text-4xl md:text-5xl font-bold text-[var(--color-forest)] ${displayFontClass}`}>{d.process.heading}</h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 relative">
             <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gray-200 -z-10"></div>
             {d.process.items.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  key={i} 
                  className="flex-1 flex flex-col items-center text-center relative z-10 w-full"
                >
                  <div className="w-14 h-14 rounded-full bg-[var(--color-forest)] text-white flex items-center justify-center text-xl font-bold border-4 border-[var(--color-card)] shadow-md mb-6">
                    {i + 1}
                  </div>
                  <h4 className={`text-xl font-bold mb-3 text-[var(--color-charcoal)] ${displayFontClass}`}>{item.title}</h4>
                  <p className="text-sm text-gray-600 max-w-[250px]">{item.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16 space-y-4">
            <h3 className="text-sm font-semibold tracking-widest text-[var(--color-gold)] uppercase">{d.team.eyebrow}</h3>
            <h2 className={`text-4xl md:text-5xl font-bold text-[var(--color-forest)] ${displayFontClass}`}>{d.team.heading}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <TeamCard img="/team-1.png" item={d.team.items[0]} fontClass={displayFontClass} />
            <TeamCard img="/team-2.png" item={d.team.items[1]} fontClass={displayFontClass} />
            <TeamCard img="/team-3.png" item={d.team.items[2]} fontClass={displayFontClass} />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-[var(--color-forest)] text-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-semibold tracking-widest text-[var(--color-gold)] uppercase mb-12 text-center">{d.testimonials.eyebrow}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {d.testimonials.items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col gap-6"
              >
                <Quote className="w-10 h-10 text-[var(--color-gold)] opacity-50" />
                <p className="text-lg italic font-medium leading-relaxed opacity-90">"{item.quote}"</p>
                <div className="mt-auto font-bold tracking-wide uppercase text-sm text-[var(--color-gold)]">{item.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-[var(--color-card)]">
        <div className="max-w-3xl mx-auto">
           <div className="text-center mb-16">
            <h3 className="text-sm font-semibold tracking-widest text-[var(--color-gold)] uppercase mb-4">{d.faq.eyebrow}</h3>
          </div>
          <div className="space-y-4">
             {d.faq.items.map((item, i) => (
               <FAQItem key={i} item={item} isOpenDefault={i === 0} fontClass={displayFontClass} />
             ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50">
             <h3 className="text-sm font-semibold tracking-widest text-[var(--color-gold)] uppercase mb-4">{d.contact.eyebrowLeft}</h3>
             <h2 className={`text-3xl md:text-4xl font-bold text-[var(--color-forest)] mb-8 ${displayFontClass}`}>{d.contact.headingLeft}</h2>
             <ContactForm dict={d.contact.form} />
          </div>
          <div className="flex flex-col justify-center">
             <h3 className="text-sm font-semibold tracking-widest text-[var(--color-gold)] uppercase mb-4">{d.contact.eyebrowRight}</h3>
             <h2 className={`text-4xl font-bold text-[var(--color-forest)] mb-10 ${displayFontClass}`}>{d.contact.headingRight}</h2>
             
             <div className="space-y-8">
               <div className="flex gap-4 items-start">
                 <div className="bg-[var(--color-forest)]/10 p-3 rounded-full text-[var(--color-forest)] shrink-0">
                   <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                   <div className="font-bold text-lg mb-1 hidden">Address</div>
                   <p className="text-gray-700 leading-relaxed max-w-sm">{d.contact.info.address}</p>
                 </div>
               </div>
               <div className="flex gap-4 items-center">
                 <div className="bg-[var(--color-forest)]/10 p-3 rounded-full text-[var(--color-forest)] shrink-0">
                   <Phone className="w-6 h-6" />
                 </div>
                 <p className="text-gray-700 font-medium">+66 (0) 2 265 9898</p>
               </div>
               <div className="flex gap-4 items-center">
                 <div className="bg-[var(--color-forest)]/10 p-3 rounded-full text-[var(--color-forest)] shrink-0">
                   <Mail className="w-6 h-6" />
                 </div>
                 <p className="text-gray-700 font-medium">info@sunshineandfriend.com</p>
               </div>
               <div className="flex gap-4 items-center">
                 <div className="bg-[var(--color-forest)]/10 p-3 rounded-full text-[var(--color-forest)] shrink-0">
                   <Globe className="w-6 h-6" />
                 </div>
                 <p className="text-gray-700 font-medium">www.sunshineandfriend.com</p>
               </div>
               <div className="flex gap-4 items-center">
                 <div className="bg-[var(--color-forest)]/10 p-3 rounded-full text-[var(--color-forest)] shrink-0">
                   <Clock className="w-6 h-6" />
                 </div>
                 <p className="text-gray-700 font-medium">{d.contact.info.hours}</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--color-forest-dark)] text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 border-b border-gray-700/50 pb-12 mb-8">
            <div className="md:col-span-1 space-y-6">
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={1.5} />
                <span className={`text-xl font-semibold text-white leading-none ${displayFontClass}`}>Sunshine & Friend</span>
              </div>
              <p className="text-sm leading-relaxed opacity-80">{d.footer.tagline}</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] transition-colors cursor-pointer text-white">in</div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] transition-colors cursor-pointer text-white">f</div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] transition-colors cursor-pointer text-white text-xs font-bold">LINE</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">{d.footer.quickLinks}</h4>
              <ul className="space-y-3 text-sm opacity-80">
                {d.footer.links1.map((link, i) => (
                  <li key={i}><a href="#" className="hover:text-[var(--color-gold)] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">{d.footer.resources}</h4>
              <ul className="space-y-3 text-sm opacity-80">
                {d.footer.links2.map((link, i) => (
                  <li key={i}><a href="#" className="hover:text-[var(--color-gold)] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6">{d.footer.contact}</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li>Unit 15A, 15th Floor, Park Silom Building</li>
                <li>Convent Road, Silom, Bangkok 10500</li>
                <li className="pt-2">+66 (0) 2 265 9898</li>
                <li>info@sunshineandfriend.com</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
            <div>{d.footer.copyright}</div>
            <div className="mt-2 md:mt-0">{d.footer.disclaimer}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const TrustStat: React.FC<{ number: string, text: string }> = ({ number, text }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(number.replace(/\D/g, ''));
  const suffix = number.replace(/\d/g, '');
  const ref = React.useRef(null);
  
  // Use IntersectionObserver to start counting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 flex flex-col gap-2"
      ref={ref}
    >
      <div className="text-4xl md:text-5xl font-bold text-[var(--color-gold)]">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-widest font-semibold opacity-90">{text}</div>
    </motion.div>
  );
}

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col gap-6"
    >
      <div className="text-[var(--color-forest)] bg-[var(--color-cream)] w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold mb-3 text-[var(--color-charcoal)] leading-tight">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

const WhyUsRow: React.FC<{ img: string, icon: React.ReactNode, title: string, desc: string, reverse: boolean, fontClass: string }> = ({ img, icon, title, desc, reverse, fontClass }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
      <motion.div 
        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-1 w-full relative group rounded-3xl overflow-hidden aspect-[21/9] shadow-lg bg-[var(--color-cream)]"
      >
        <BrandImage src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex-1 space-y-4 py-4"
      >
        <div className="w-12 h-12 rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] flex items-center justify-center mb-6">
          {icon}
        </div>
        <h4 className={`text-2xl font-bold text-[var(--color-forest)] ${fontClass}`}>{title}</h4>
        <p className="text-gray-700 leading-relaxed">{desc}</p>
      </motion.div>
    </div>
  );
}

const TeamCard: React.FC<{ img: string, item: { name: string, role: string, expertise: string }, fontClass: string }> = ({ img, item, fontClass }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl relative bg-[var(--color-cream)]">
         <div className="absolute inset-0 bg-[var(--color-gold)]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"></div>
         <BrandImage src={img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
      </div>
      <h4 className={`text-2xl font-bold text-[var(--color-forest)] mb-2 ${fontClass}`}>{item.name}</h4>
      <div className="text-xs font-bold tracking-widest text-[var(--color-gold)] uppercase mb-4">{item.role}</div>
      <p className="text-sm text-gray-600">{item.expertise}</p>
    </motion.div>
  );
}

const FAQItem: React.FC<{ item: { q: string, a: string }, isOpenDefault: boolean, fontClass: string }> = ({ item, isOpenDefault, fontClass }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
      <button 
        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-bold text-lg text-[var(--color-forest)] ${fontClass}`}>{item.q}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-[var(--color-gold)] shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-5 text-gray-600 border-t border-gray-100 mt-2 pt-4"
          >
            {item.a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactForm({ dict }: { dict: any }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <input required type="text" placeholder={dict.name} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50 focus:border-[var(--color-gold)] transition-all" />
        <input required type="email" placeholder={dict.email} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50 focus:border-[var(--color-gold)] transition-all" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input required type="tel" placeholder={dict.phone} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50 focus:border-[var(--color-gold)] transition-all" />
        <input required type="date" placeholder={dict.date} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50 focus:border-[var(--color-gold)] transition-all" />
      </div>
      <textarea required placeholder={dict.message} rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50 focus:border-[var(--color-gold)] transition-all resize-none"></textarea>
      
      {submitted && (
        <div className="bg-green-50 text-green-700 py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-medium">
          <CheckCircle className="w-5 h-5" /> {dict.success}
        </div>
      )}
      
      <button type="submit" className="w-full bg-[var(--color-gold)] text-white font-bold py-4 rounded-xl hover:bg-[var(--color-gold-hover)] transition-colors shadow-lg shadow-yellow-900/20">
        {dict.submit}
      </button>
    </form>
  );
}

function BrandImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error) {
    return (
      <div className={`bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-gold)] ${className}`}>
        <Leaf className="w-12 h-12 opacity-30" />
      </div>
    );
  }

  return (
    <>
      {!loaded && (
        <div className={`bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-gold)] absolute inset-0 z-0`}>
          <Leaf className="w-10 h-10 opacity-30 animate-pulse" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 relative z-10`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </>
  );
}
