import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, ShieldCheck, Zap, Navigation, Phone, Clock, MapPin, Star, Menu, X } from 'lucide-react';

// Reusable components
const SectionHeader = ({ tag, title, subtitle }: { tag: string; title: string; subtitle: string }) => (
  <div className="mb-20 relative z-10">
    <div className="flex items-center gap-4 mb-6">
      <div className="font-mono text-xs text-[var(--color-blueprint-text)] bg-[#1a1a1a] px-3 py-1 rounded-full border border-[var(--color-blueprint-line)]">
        {tag}
      </div>
      <div className="h-px bg-[var(--color-blueprint-line)] flex-1 max-w-[80px]"></div>
    </div>
    <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight mb-6">
      {title}
    </h2>
    <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl">
      {subtitle}
    </p>
  </div>
);

const Section = ({ children, className = '', id = '' }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-28 px-6 md:px-12 lg:px-24 mx-auto max-w-[1600px] relative ${className}`}>
    {children}
  </section>
);

const WHATSAPP_URL = 'https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Autoescola%20909.';

const HeroLogo = () => (
  <div className="mb-6 relative w-full max-w-[720px] px-4">
    <div className="relative mx-auto aspect-[16/7] w-full max-w-[680px]">
      <img
        src="/07.svg"
        alt="Logo Autoescola 909"
        className="pointer-events-none h-full w-full object-contain opacity-20 [filter:brightness(2)_grayscale(1)]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 hover:opacity-100">
        <img
          src="/07.svg"
          alt="Logo Autoescola 909 em destaque"
          className="h-full w-full object-contain [filter:sepia(1)_saturate(7)_hue-rotate(350deg)_brightness(1.08)]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,185,90,0.2),transparent_65%)] mix-blend-screen"></div>
    </div>
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[var(--color-brand-black)] text-white min-h-screen font-sans selection:bg-[var(--color-brand-gold)] selection:text-black">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-[var(--color-brand-black)]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <img src="/06.png" alt="Autoescola 909" className="h-8 w-8 object-contain" />
          <span className="font-display font-semibold text-lg tracking-tight">Autoescola <span className="gold-gradient-text">909</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase text-gray-400">
          <a href="#cursos" className="hover:text-white transition-colors">Cursos</a>
          <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
          <a href="#identidade" className="hover:text-white transition-colors">A Marca</a>
          <a href="#contato" className="hover:text-white transition-colors">Contato</a>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[var(--color-brand-gold)] text-black px-5 py-2.5 rounded-full font-mono text-xs tracking-widest uppercase font-medium hover:bg-[var(--color-brand-gold-light)] transition-colors"
        >
          <Phone className="w-3 h-3" />
          WhatsApp
        </a>
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMenuOpen(v => !v)} aria-label="Abrir menu">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-brand-black)] flex flex-col items-center justify-center gap-10 font-display text-3xl" onClick={() => setMenuOpen(false)}>
          <a href="#cursos" className="hover:text-[var(--color-brand-gold)] transition-colors">Cursos</a>
          <a href="#como-funciona" className="hover:text-[var(--color-brand-gold)] transition-colors">Como Funciona</a>
          <a href="#identidade" className="hover:text-[var(--color-brand-gold)] transition-colors">A Marca</a>
          <a href="#contato" className="hover:text-[var(--color-brand-gold)] transition-colors">Contato</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-[var(--color-brand-gold)] text-black px-8 py-4 rounded-full font-mono text-sm tracking-widest uppercase font-medium"
          >
            Fale pelo WhatsApp
          </a>
        </div>
      )}

      {/* 1. HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--color-brand-gold)] rounded-full blur-[180px] opacity-10 z-0 pointer-events-none"></div>

        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 font-mono text-[var(--color-brand-gold)] text-xs md:text-sm tracking-[0.2em] uppercase flex items-center gap-4"
          >
            <span>Sistema Online</span>
            <span className="w-1.5 h-1.5 bg-[var(--color-brand-gold)] rounded-full animate-pulse"></span>
            <span>Desde 2018</span>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, filter: 'blur(10px)', opacity: 0 }}
            animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="mb-6 relative w-full"
          >
            <HeroLogo />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl md:text-4xl font-light tracking-wide text-gray-300 md:leading-snug max-w-3xl"
          >
            Sua CNH com <span className="font-semibold text-white italic">confiança</span>, sem medo de dirigir.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-white text-black px-8 py-5 rounded-full font-mono font-medium tracking-widest text-sm uppercase overflow-hidden"
            >
              <div className="absolute inset-0 bg-[var(--color-brand-gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              <span className="relative z-10">Começar Agora</span>
              <ChevronRight className="w-4 h-4 relative z-10" />
            </a>
            <a href="#cursos" className="font-mono text-xs tracking-widest uppercase text-gray-500 hover:text-white transition-colors px-4 py-2">
              Ver Cursos →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-gray-600">Role para descobrir</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-gray-500 to-transparent"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. NÚMEROS / STATS */}
      <div className="border-t border-white/5 bg-[#0A0A0C]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '+3.000', label: 'Aprovados' },
            { num: '97%', label: 'Taxa de Aprovação' },
            { num: '+6 anos', label: 'de Experiência' },
            { num: '5★', label: 'Avaliação Média' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-bold gold-gradient-text mb-2">{s.num}</div>
              <div className="font-mono text-xs tracking-widest uppercase text-gray-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. CURSOS */}
      <Section id="cursos" className="border-t border-white/5">
        <SectionHeader
          tag="01 — Formação"
          title="Escolha sua Categoria"
          subtitle="Da primeira habilitação à renovação, temos o curso certo para o seu momento."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              cat: 'B',
              title: 'Categoria B',
              desc: 'Automóveis e camionetes. O ponto de partida para a maioria dos motoristas.',
              detail: 'Aulas teóricas + 25 aulas práticas',
            },
            {
              cat: 'A',
              title: 'Categoria A',
              desc: 'Motocicletas e ciclomotores. Agilidade com segurança e técnica.',
              detail: 'Aulas teóricas + 20 aulas práticas',
            },
            {
              cat: 'AB',
              title: 'Adição de Categoria',
              desc: 'Já tem CNH? Adicione a categoria A ou B de forma rápida e simplificada.',
              detail: 'Processo ágil e personalizado',
            },
          ].map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-panel rounded-3xl p-10 group hover:border-[var(--color-brand-gold)]/30 transition-all duration-500 border border-white/5 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-gold)]/10 border border-[var(--color-brand-gold)]/20 flex items-center justify-center mb-8">
                <span className="font-display font-bold text-xl text-[var(--color-brand-gold)]">{course.cat}</span>
              </div>
              <h3 className="font-display text-2xl font-medium mb-3 group-hover:text-[var(--color-brand-gold)] transition-colors">{course.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed flex-1 mb-8">{course.desc}</p>
              <div className="font-mono text-xs text-[var(--color-blueprint-text)] border-t border-white/5 pt-6 flex items-center gap-2">
                <Clock className="w-3 h-3" />
                {course.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. COMO FUNCIONA */}
      <Section id="como-funciona" className="bg-[#0A0A0C]">
        <SectionHeader
          tag="02 — Processo"
          title="Como Funciona"
          subtitle="Três etapas para você sair do zero e chegar com a CNH na mão."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-10">
          {[
            {
              icon: ShieldCheck,
              step: 'Etapa 01',
              title: 'Matrícula & Exames Médicos',
              desc: 'Fazemos todo o processo burocrático junto com você. Sem estresse, sem filas. Do DETRAN à biometria, a 909 cuida de tudo.',
            },
            {
              icon: Navigation,
              step: 'Etapa 02',
              title: 'Aulas Teóricas',
              desc: 'Conteúdo objetivo e atualizado com os instrutores da 909. Aprenda o Código de Trânsito Brasileiro de forma clara e eficiente.',
            },
            {
              icon: Zap,
              step: 'Etapa 03',
              title: 'Aulas Práticas & Prova',
              desc: 'Dirija com calma e confiança. Nossos instrutores adaptam o ritmo ao seu perfil. Você só presta a prova quando estiver pronto.',
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="border-t-2 border-[var(--color-brand-gold)]/30 pt-10 hover:border-[var(--color-brand-gold)] transition-colors duration-500"
            >
              <feature.icon className="w-8 h-8 text-[var(--color-brand-gold)] mb-8 stroke-1" />
              <div className="font-mono text-xs text-gray-500 mb-4 tracking-[0.2em]">{feature.step}</div>
              <h3 className="font-display text-2xl font-light mb-5">{feature.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. GALERIA / IDENTIDADE VISUAL */}
      <Section id="identidade" className="relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        <SectionHeader
          tag="03 — Identidade"
          title="A Marca 909"
          subtitle="Uma identidade visual premium inspirada em dashboards automotivos e precisão de engenharia."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Imagem grande - branding principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 rounded-3xl overflow-hidden aspect-video relative group"
          >
            <img src="/01.png" alt="Identidade Visual Autoescola 909" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 font-mono text-xs text-gray-400 tracking-widest uppercase">Identidade da Marca</div>
          </motion.div>

          {/* Logo / ícone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-5 rounded-3xl overflow-hidden relative glass-panel flex items-center justify-center aspect-video md:aspect-auto group"
          >
            <img src="/06.png" alt="Logotipo Autoescola 909" className="w-2/3 object-contain group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 blueprint-grid opacity-30"></div>
            <div className="absolute bottom-6 left-6 font-mono text-xs text-gray-500 tracking-widest uppercase">Logotipo</div>
          </motion.div>

          {/* Branding veicular */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 rounded-3xl overflow-hidden aspect-video relative group"
          >
            <img src="/03.png" alt="Frota Autoescola 909" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 font-mono text-xs text-gray-400 tracking-widest uppercase">Identidade Veicular</div>
          </motion.div>

          {/* Mockup / aplicações */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-7 rounded-3xl overflow-hidden aspect-video relative group"
          >
            <img src="/02.png" alt="Aplicações da Marca 909" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 font-mono text-xs text-gray-400 tracking-widest uppercase">Aplicações da Marca</div>
          </motion.div>
        </div>
      </Section>

      {/* 6. DIFERENCIAIS */}
      <Section className="bg-[#0A0A0C]">
        <SectionHeader
          tag="04 — Diferenciais"
          title="Por Que a 909?"
          subtitle="Mais do que uma autoescola. Uma experiência construída para você vencer."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: ShieldCheck, title: 'Sem Medo de Dirigir', desc: 'Metodologia própria para alunos com ansiedade ao volante. Construímos o motorista antes de colocá-lo na estrada.' },
            { icon: Star, title: 'Instrutores Certificados', desc: 'Profissionais com anos de experiência e avaliação 5 estrelas pelos alunos. Paciência e técnica no mesmo pacote.' },
            { icon: Clock, title: 'Horários Flexíveis', desc: 'Aulas teóricas online e práticas em horários que cabem na sua agenda. Você estuda no seu ritmo.' },
            { icon: MapPin, title: 'Localização Estratégica', desc: 'Pistas de treinamento modernas e percursos diversificados para preparar você para qualquer situação.' },
          ].map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-3xl p-10 flex gap-6 items-start group hover:border-[var(--color-brand-gold)]/20 transition-all duration-500 border border-white/5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[var(--color-brand-gold)]/10 border border-[var(--color-brand-gold)]/20 flex items-center justify-center">
                <d.icon className="w-5 h-5 text-[var(--color-brand-gold)] stroke-1.5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-medium mb-3 group-hover:text-[var(--color-brand-gold)] transition-colors">{d.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 7. MATERIAIS / MOCKUP FÍSICO */}
      <Section>
        <SectionHeader
          tag="05 — Materiais"
          title="Presença Real"
          subtitle="Da frota às peças gráficas, a identidade 909 imprime confiança em cada detalhe."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden aspect-[4/3] relative group"
          >
            <img src="/04.png" alt="Materiais Impressos Autoescola 909" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-1">Materiais Impressos</div>
              <p className="text-white font-display text-xl">Cartões, Pastas & Uniformes</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel rounded-3xl p-10 flex-1 border border-white/5"
            >
              <h4 className="font-mono text-xs tracking-widest uppercase text-[var(--color-brand-gold)] mb-6">Frota Identificada</h4>
              <p className="text-gray-300 font-light leading-relaxed text-lg">
                Veículos com envelopamento matte preto e apliques dourados reflexivos. Presença máxima nas vias, reconhecimento imediato da marca.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel rounded-3xl p-10 flex-1 border border-white/5"
            >
              <h4 className="font-mono text-xs tracking-widest uppercase text-[var(--color-brand-gold)] mb-6">Identidade Completa</h4>
              <p className="text-gray-300 font-light leading-relaxed text-lg">
                Papelaria, uniformes e materiais de comunicação alinhados. Cada ponto de contato reforça a credibilidade e o profissionalismo da 909.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 8. DEPOIMENTOS */}
      <Section id="depoimentos" className="bg-[#0A0A0C]">
        <SectionHeader
          tag="06 — Depoimentos"
          title="O Que Dizem Nossos Alunos"
          subtitle="Mais de 3.000 histórias de sucesso. Veja o que dizem quem já passou pela 909."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Mariana S.', text: 'Tinha muito medo de dirigir. A 909 mudou completamente minha relação com o volante. Passei na primeira tentativa!', stars: 5 },
            { name: 'Rafael T.', text: 'Processo simples do começo ao fim. Os instrutores são excelentes e os horários são super flexíveis. Recomendo demais.', stars: 5 },
            { name: 'Juliana M.', text: 'Fiz a adição de categoria A na 909 e foi rápido e tranquilo. Atendimento impecável e ambiente profissional.', stars: 5 },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-panel rounded-3xl p-10 border border-white/5"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]" />
                ))}
              </div>
              <p className="text-gray-300 font-light leading-relaxed text-lg mb-8 italic">"{t.text}"</p>
              <div className="font-mono text-xs text-[var(--color-blueprint-text)] tracking-widest uppercase">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 9. CTA / CONTATO */}
      <section id="contato" className="py-40 px-6 relative overflow-hidden flex justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C] to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[var(--color-brand-gold)] blur-[250px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 glass-panel p-12 md:p-20 rounded-[3rem] w-full max-w-5xl text-center border border-[var(--color-brand-gold)]/20">
          <div className="flex justify-center mb-8">
            <img src="/06.png" alt="Logo 909" className="h-16 w-16 object-contain" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
            Pronto para <span className="italic text-[var(--color-brand-gold)] font-medium">dar a partida?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
            Garanta sua vaga na próxima turma. Fale diretamente com nossa equipe pelo WhatsApp e comece hoje.
          </p>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center justify-center gap-5 bg-white text-black px-10 py-6 rounded-full font-mono font-medium tracking-widest text-sm uppercase overflow-hidden"
          >
            <div className="absolute inset-0 bg-[var(--color-brand-gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            <Phone className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Falar pelo WhatsApp</span>
            <ChevronRight className="w-4 h-4 relative z-10" />
          </motion.a>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 font-mono text-xs text-gray-500 tracking-widest">
            <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Rua Exemplo, 909 — Sua Cidade</span>
            <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> Seg–Sex: 8h–18h | Sáb: 8h–13h</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-6 lg:px-24 flex flex-col md:flex-row items-center justify-between font-mono text-xs text-gray-600 uppercase tracking-widest bg-black gap-6">
        <div className="flex items-center gap-3">
          <img src="/06.png" alt="Logo 909" className="h-5 w-5 object-contain opacity-50" />
          <span>© {new Date().getFullYear()} Autoescola 909. Todos os direitos reservados.</span>
        </div>
        <div className="flex gap-8">
          <a href="#cursos" className="hover:text-white transition-colors">Cursos</a>
          <a href="#como-funciona" className="hover:text-white transition-colors">Processo</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-gold)] transition-colors">WhatsApp</a>
        </div>
      </footer>

    </div>
  );
}
