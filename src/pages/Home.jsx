import { useState, useEffect } from 'react';
import {
  Cloud,
  Briefcase,
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import content from '../data/content.json';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/images/ictexel-systeem-netwerkbeheer-logo.png"
                alt="ICTexel Logo"
                className={`h-12 transition-all duration-300 ease-in-out ${
                  isScrolled ? '' : 'brightness-0 invert'
                }`}
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {content.navigation.main.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition-all duration-300 ease-in-out ${
                    isScrolled
                      ? 'text-slate-700 hover:text-cyan-500'
                      : 'text-white hover:text-cyan-300'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href={`tel:${content.contact.phone}`}
                className={`font-medium flex items-center space-x-2 transition-all duration-300 ease-in-out ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                <Phone size={18} />
                <span>{content.contact.phone}</span>
              </a>
              <a
                href="#contact"
                className="bg-cyan-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-cyan-600 transition-all duration-300 ease-in-out"
              >
                Contact Opnemen
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ease-in-out ${
                isScrolled
                  ? 'text-slate-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {content.navigation.main.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-slate-700 hover:text-cyan-500 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:${content.contact.phone}`}
                className="block text-slate-700 font-medium py-2"
              >
                {content.contact.phone}
              </a>
              <a
                href="#contact"
                className="block bg-cyan-500 text-white px-6 py-2.5 rounded-lg font-medium text-center hover:bg-cyan-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Opnemen
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-slate-900">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        ></div>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {content.hero.tagline.split('bedrijven op Texel')[0]}
            <span className="text-cyan-500">bedrijven op Texel</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Neem contact op
            </a>
            <a
              href="#diensten"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Bekijk onze diensten
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-cyan-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Complete IT-oplossingen{' '}
            <span className="text-cyan-500">voor uw bedrijf</span>
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Van cloudoplossingen tot cyberbeveiliging – wij bieden complete IT-diensten
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.services.map((service) => {
              const icons = {
                cloud: Cloud,
                briefcase: Briefcase,
                shield: Shield,
                phone: Phone
              };
              const Icon = icons[service.icon];

              return (
                <div
                  key={service.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 group"
                >
                  <div className="bg-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-all duration-300 ease-in-out">
                    <Icon className="text-cyan-600 group-hover:text-white transition-all duration-300 ease-in-out" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="text-cyan-500 mr-2 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projecten" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Succesvolle <span className="text-cyan-500">IT-projecten</span>
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Ontdek hoe wij bedrijven op Texel helpen met IT-oplossingen
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
              >
                <div className={`h-48 bg-gradient-to-br ${
                  index === 0 ? 'from-cyan-400 to-blue-500' :
                  index === 1 ? 'from-purple-400 to-pink-500' :
                  'from-green-400 to-cyan-500'
                }`}></div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {project.description}
                  </p>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section id="klanten" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Trots op onze <span className="text-cyan-500">samenwerkingen</span>
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Bedrijven op Texel vertrouwen op ICTexel voor hun IT-beheer
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.customers.map((customer) => (
              <div
                key={customer.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <div className="bg-gray-100 h-32 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-400">
                    {customer.name}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {customer.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  {customer.industry}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {customer.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 italic text-sm">
                  "{customer.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Wij werken met de <span className="text-cyan-500">beste merken</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {content.partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <span className="text-lg font-bold text-slate-400">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="over" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/jorian-ploegman.jpg"
                alt="Jorian Ploegman - ICTexel"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                {content.about.title.split('op Texel')[0]}
                <span className="text-cyan-500">op Texel</span>
              </h2>
              <div className="prose prose-lg text-slate-600 mb-8">
                {content.about.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-4">
                {content.about.values.map((value, idx) => (
                  <div key={idx} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
                    <div className="bg-cyan-100 p-3 rounded-lg">
                      <CheckCircle className="text-cyan-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {value.title}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Laten we <span className="text-cyan-500">samenwerken</span>
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Neem contact op voor een vrijblijvend gesprek
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-100 p-4 rounded-lg">
                    <Phone className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Telefoon</h4>
                    <a href={`tel:${content.contact.phone}`} className="text-cyan-600 hover:text-cyan-700 transition-all duration-300 ease-in-out">
                      {content.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-100 p-4 rounded-lg">
                    <Mail className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">E-mail</h4>
                    <a href={`mailto:${content.contact.email}`} className="text-cyan-600 hover:text-cyan-700 transition-all duration-300 ease-in-out">
                      {content.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-100 p-4 rounded-lg">
                    <MapPin className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Locatie</h4>
                    <p className="text-slate-600">{content.contact.location}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-100 p-4 rounded-lg">
                    <Clock className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Openingstijden</h4>
                    <p className="text-slate-600">{content.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 ease-in-out"
                    placeholder="Uw naam"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Bedrijf
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 ease-in-out"
                    placeholder="Bedrijfsnaam"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 ease-in-out"
                    placeholder="uw@email.nl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 ease-in-out"
                    placeholder="06 12345678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Bericht *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 ease-in-out resize-none"
                    placeholder="Waar kunnen wij u mee helpen?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 text-white py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 ease-in-out transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <span>Verstuur bericht</span>
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                IC<span className="text-cyan-500">Texel</span>
              </h3>
              <p className="text-gray-400">
                {content.footer.tagline}
              </p>
            </div>

            {content.footer.links.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-bold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-cyan-500 transition-all duration-300 ease-in-out"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
            <p>{content.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
