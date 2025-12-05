import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Star, Award, GraduationCap, MapPin, Instagram, ChevronRight, Phone } from 'lucide-react';

// Componentes de Interface
const Button = ({ children, primary = true, className = "", onClick }) => (
  <button 
    onClick={onClick}
    className={`px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 transform hover:scale-105 shadow-lg ${
      primary 
        ? "bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-black hover:shadow-yellow-500/30" 
        : "border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
    } ${className}`}
  >
    {children}
  </button>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16 px-4">
    <span className="text-yellow-500 text-sm font-bold tracking-[0.2em] uppercase mb-2 block animate-pulse">
      {subtitle}
    </span>
    <h2 className="text-4xl md:text-5xl font-serif text-white font-medium">
      {title}
    </h2>
    <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
  </div>
);

const CourseCard = ({ title, description, features, badge }) => (
  <div className="group relative bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
    {badge && (
      <div className="absolute -top-4 right-8 bg-yellow-500 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
        {badge}
      </div>
    )}
    <div className="mb-6 p-4 bg-neutral-800 w-fit rounded-full group-hover:bg-yellow-500 transition-colors duration-300">
      <GraduationCap className="w-8 h-8 text-yellow-500 group-hover:text-black" />
    </div>
    <h3 className="text-2xl font-serif text-white mb-4">{title}</h3>
    <p className="text-neutral-400 mb-6 flex-grow">{description}</p>
    <ul className="space-y-3 mb-8">
      {features.map((item, idx) => (
        <li key={idx} className="flex items-center text-sm text-neutral-300">
          <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
    <Button primary={false} className="w-full text-center">Saiba Mais</Button>
  </div>
);

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito de scroll para a navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* Navbar Fixa */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-xl border-b border-neutral-800' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-tighter">
            Dra. Val <span className="text-yellow-500">Rangel</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Início', 'Sobre', 'Cursos', 'Depoimentos'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-yellow-500 transition-colors uppercase tracking-widest">
                {item}
              </a>
            ))}
            <a href="#contato" className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors">
              Fale Comigo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-b border-neutral-800 p-6 md:hidden flex flex-col space-y-4">
             {['Início', 'Sobre', 'Cursos', 'Depoimentos', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-serif border-b border-neutral-800 pb-2">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background com Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
            alt="Clínica Estética Luxo" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 pt-20 text-center md:text-left md:flex md:items-center">
          <div className="md:w-2/3 lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
              <Star className="w-3 h-3 mr-2" fill="currentColor" />
              Mentora de Biomédicas Estetas
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6">
              Excelência em <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600">
                Harmonização & Ensino
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed max-w-xl">
              Transforme sua carreira com a metodologia exclusiva da Dra. Val Rangel. 
              Pós-graduação, residências e mentorias reconhecidas pelo MEC.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <Button onClick={() => window.location.href='#cursos'}>Conhecer Cursos</Button>
              <Button primary={false} onClick={() => window.location.href='#sobre'}>Minha Trajetória</Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-500/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-neutral-900 border-y border-neutral-800 relative z-30">
        <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "+8.5K", label: "Seguidores" },
            { num: "MEC", label: "Reconhecimento" },
            { num: "+10", label: "Anos de Docência" },
            { num: "100%", label: "Excelência" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-serif text-yellow-500 mb-2">{stat.num}</div>
              <div className="text-xs uppercase tracking-widest text-neutral-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sobre / Bio Section */}
      <section id="sobre" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/5 blur-[120px]"></div>
        
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          {/* Coluna Imagem (Simulada com placeholder elegante) */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 border border-yellow-500/30 rounded-full md:rounded-tl-[100px] md:rounded-br-[100px] z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
              alt="Dra Val Rangel" 
              className="relative z-10 w-full rounded-3xl md:rounded-tl-[80px] md:rounded-br-[80px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[600px]"
            />
            {/* Badge Flutuante */}
            <div className="absolute bottom-10 -right-6 md:-right-10 bg-neutral-900 p-6 rounded-xl border border-yellow-500 shadow-xl z-20 max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Award className="text-yellow-500 w-6 h-6" />
                <span className="font-bold text-white">CEO Renove</span>
              </div>
              <p className="text-xs text-neutral-400">Referência em rejuvenescimento facial com naturalidade.</p>
            </div>
          </div>

          {/* Coluna Texto */}
          <div className="w-full md:w-1/2">
            <span className="text-yellow-500 font-bold tracking-widest text-sm uppercase mb-4 block">Quem Sou Eu</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Dra. Val Rangel
            </h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              Biomédica Esteta e docente do ensino superior, dedico minha carreira a elevar o padrão da estética no Brasil. Minha missão é formar profissionais capazes de entregar resultados de excelência e naturalidade.
            </p>
            
            <div className="space-y-4">
              {[
                "Pós-graduada em Estética Facial e Corporal",
                "Especialista em Pós-operatório de Cirurgia Plástica",
                "Pós-graduada em Biofotônica",
                "Docente do Ensino Superior",
                "Proprietária da Clínica Renove"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-neutral-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
               <div>
                 <p className="font-serif text-2xl text-white">Renove</p>
                 <p className="text-xs text-neutral-500 uppercase tracking-widest">Clínica de Estética</p>
               </div>
               <a href="https://instagram.com/dra.valrangel" target="_blank" rel="noreferrer" className="flex items-center text-yellow-500 hover:text-white transition-colors">
                 <Instagram className="mr-2" />
                 @dra.valrangel
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section id="cursos" className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Cursos e Mentorias" 
            subtitle="Educação de Alto Nível"
          />

          <div className="grid md:grid-cols-3 gap-8">
            <CourseCard 
              title="Residência em Biomedicina"
              description="Uma imersão prática completa para quem deseja segurança nos procedimentos injetáveis."
              features={['Prática em pacientes reais', 'Supervisão direta', 'Material didático incluso', 'Certificado']}
              badge="Matrículas Abertas"
            />
            <CourseCard 
              title="Pós-Graduação Estética"
              description="Especialize-se com profundidade teórica e validação pelo MEC. O passo definitivo para sua carreira."
              features={['Docentes renomados', 'Módulos híbridos', 'Foco em harmonização', 'Networking']}
            />
            <CourseCard 
              title="Mentoria VIP"
              description="Acompanhamento exclusivo para profissionais que desejam escalar seu negócio e aprimorar técnicas."
              features={['Análise de business', 'Técnicas avançadas', 'Suporte pós-curso', 'Estratégia de carreira']}
              badge="Exclusivo"
            />
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-neutral-400 mb-6">Dúvida sobre qual é o melhor caminho para você?</p>
             <a href="#contato" className="inline-flex items-center text-yellow-500 hover:text-white font-bold transition-colors border-b border-yellow-500 pb-1">
               Falar com a equipe de matrículas <ChevronRight className="ml-2 w-4 h-4" />
             </a>
          </div>
        </div>
      </section>

      {/* Galeria / Diferenciais */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row bg-neutral-900 rounded-3xl overflow-hidden">
             <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
               <h3 className="text-3xl md:text-4xl font-serif mb-6">Metodologia Hands-on</h3>
               <p className="text-neutral-400 mb-8 leading-relaxed">
                 Acreditamos que a estética se aprende fazendo. Nossos cursos priorizam a prática clínica supervisionada, garantindo que você saia pronta para o mercado de trabalho.
               </p>
               <div className="grid grid-cols-2 gap-6">
                 <div>
                   <h4 className="text-yellow-500 font-bold text-xl mb-1">Prática</h4>
                   <p className="text-sm text-neutral-500">Modelos reais para treinamento intensivo.</p>
                 </div>
                 <div>
                   <h4 className="text-yellow-500 font-bold text-xl mb-1">Suporte</h4>
                   <p className="text-sm text-neutral-500">Acompanhamento vitalício no grupo de alunos.</p>
                 </div>
               </div>
             </div>
             <div className="md:w-1/2 relative min-h-[400px]">
               <img 
                 src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                 alt="Procedimento Estético" 
                 className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
             </div>
           </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 bg-gradient-to-b from-neutral-950 to-black">
        <div className="container mx-auto px-6">
          <SectionTitle title="O que dizem as alunas" subtitle="Feedbacks" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800">
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-neutral-300 italic mb-6">"O curso da Dra. Val foi um divisor de águas na minha carreira. A segurança que ela passa nas aulas práticas é impagável. Hoje tenho minha própria clínica."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-neutral-700 rounded-full mr-3"></div>
                  <div>
                    <p className="text-white font-bold text-sm">Dra. Aluna Exemplo</p>
                    <p className="text-neutral-500 text-xs">Biomédica Esteta</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final / Contato */}
      <section id="contato" className="py-24 relative">
        <div className="absolute inset-0 bg-yellow-600/10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-4xl mx-auto">
            Pronta para se tornar uma referência em Estética?
          </h2>
          <p className="text-xl text-neutral-300 mb-10">
            Garanta sua vaga na próxima turma ou agende sua mentoria.
          </p>
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center px-10 py-5 rounded-full bg-green-600 text-white font-bold text-lg hover:bg-green-500 transition-all transform hover:scale-105 shadow-xl shadow-green-900/20"
          >
            <Phone className="mr-3 w-5 h-5" />
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-serif font-bold text-white mb-6">
                Dra. Val <span className="text-yellow-500">Rangel</span>
              </div>
              <p className="text-neutral-400 max-w-sm">
                Transformando profissionais através do conhecimento e da técnica refinada. Referência em pós-graduação e cursos de extensão.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-3 text-neutral-400">
                <li><a href="#cursos" className="hover:text-yellow-500 transition-colors">Cursos</a></li>
                <li><a href="#sobre" className="hover:text-yellow-500 transition-colors">Sobre</a></li>
                <li><a href="#depoimentos" className="hover:text-yellow-500 transition-colors">Alunas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contato</h4>
              <ul className="space-y-3 text-neutral-400">
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-yellow-500"/> Clínica Renove</li>
                <li className="flex items-center"><Instagram className="w-4 h-4 mr-2 text-yellow-500"/> @dra.valrangel</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-900 pt-8 text-center text-neutral-600 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Dra. Val Rangel. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Desenvolvido com excelência.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}