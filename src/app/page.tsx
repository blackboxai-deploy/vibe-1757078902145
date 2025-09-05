import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';
import { getFeaturedProperties } from '@/data/properties';
import { getFeaturedBlogPosts } from '@/data/blog';
import { getFeaturedTestimonials } from '@/data/testimonials';
import { services } from '@/data/services';
import { PropertyCard } from '@/components/PropertyCard';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  const featuredProperties = getFeaturedProperties();
  const featuredPosts = getFeaturedBlogPosts();
  const testimonials = getFeaturedTestimonials();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-500 text-black font-semibold">
              {COMPANY_INFO.creci}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Encontre o Imóvel dos<br />
              <span className="text-yellow-400">Seus Sonhos</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Com {COMPANY_INFO.owner}, você tem a experiência e dedicação necessárias 
              para encontrar o imóvel perfeito no Rio de Janeiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/imoveis">
                <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8 py-6">
                  Ver Imóveis Disponíveis
                </Button>
              </Link>
              <Link href="/contato">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6">
                  Falar com Corretor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Imóveis Vendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24h</div>
              <div className="text-gray-600">Atendimento Disponível</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Imóveis em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seleção especial dos melhores imóveis disponíveis no Rio de Janeiro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/imoveis">
              <Button size="lg">Ver Todos os Imóveis</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas para todas as suas necessidades imobiliárias
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    </div>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/servicos">
              <Button variant="outline" size="lg">Ver Todos os Serviços</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Sobre {COMPANY_INFO.owner}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Corretor de imóveis especializado com mais de 10 anos de experiência no 
                mercado imobiliário do Rio de Janeiro. Registrado no CRECI sob o número {COMPANY_INFO.creci}, 
                oferece atendimento personalizado e soluções completas para compra, venda e locação de imóveis.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Especialista em imóveis residenciais e comerciais nas principais regiões 
                da cidade, com foco em Zona Sul, Barra da Tijuca e Centro.
              </p>
              <Link href="/sobre">
                <Button size="lg">Conhecer Melhor</Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/500x600?text=Josivan+Sousa+corretor+profissional+escritorio"
                alt="Josivan Sousa - Corretor de Imóveis"
                className="w-full rounded-lg shadow-lg"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = 'https://placehold.co/500x600?text=Corretor+Profissional+Escritorio';
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{COMPANY_INFO.creci}</div>
                  <div className="text-sm text-gray-600">Registro Profissional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de clientes satisfeitos que realizaram seus sonhos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = `https://placehold.co/100x100?text=${testimonial.name.split(' ')[0]}`;
                      }}
                    />
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="mb-2">
                    <div className="text-sm font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-xs text-gray-600">{testimonial.role}</div>
                  </div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Últimas do Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dicas, tendências e novidades do mercado imobiliário
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = `https://placehold.co/400x250?text=Blog+${post.title.substring(0, 20)}`;
                    }}
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="text-xs text-gray-500">
                    Por {post.author} • {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/blog">
              <Button variant="outline" size="lg">Ver Todos os Artigos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Vamos Conversar?
              </h2>
              <p className="text-xl text-gray-600">
                Entre em contato e descubra como podemos ajudá-lo a encontrar o imóvel ideal
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Atendimento Personalizado
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Consultoria especializada gratuita
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Visitas agendadas conforme sua disponibilidade
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Acompanhamento durante todo o processo
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Suporte jurídico e financeiro
                    </p>
                  </div>
                </div>
                
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-gray-900 mb-2">{COMPANY_INFO.phone}</div>
                  <div className="text-gray-600 mb-4">WhatsApp • Ligação • SMS</div>
                  <Button
                    size="lg"
                    onClick={() => {
                      const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os imóveis.');
                      window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`, '_blank');
                    }}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Chamar no WhatsApp
                  </Button>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}