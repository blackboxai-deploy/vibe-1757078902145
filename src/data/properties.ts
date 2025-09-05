import { Property } from '@/types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Apartamento Luxuoso em Copacabana',
    description: 'Magnífico apartamento de 3 quartos com vista deslumbrante para o mar de Copacabana. Localizado em prédio de alto padrão com portaria 24h, piscina e academia. Totalmente reformado com acabamentos de primeira qualidade.',
    price: 1200000,
    type: 'apartment',
    status: 'sale',
    area: 120,
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    address: {
      street: 'Av. Atlântica, 1500',
      neighborhood: 'Copacabana',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '22021-000'
    },
    images: [
      'https://placehold.co/800x600?text=Apartamento+luxuoso+Copacabana+sala+vista+mar',
      'https://placehold.co/800x600?text=Cozinha+moderna+gourmet+apartamento+Copacabana',
      'https://placehold.co/800x600?text=Quarto+suite+apartamento+vista+mar+Copacabana',
      'https://placehold.co/800x600?text=Banheiro+luxo+marmore+apartamento+Copacabana',
      'https://placehold.co/800x600?text=Varanda+vista+praia+Copacabana+apartamento'
    ],
    features: ['Vista para o mar', 'Portaria 24h', 'Piscina', 'Academia', 'Elevador', 'Ar condicionado', 'Varanda'],
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Casa Moderna na Barra da Tijuca',
    description: 'Belíssima casa de alto padrão em condomínio fechado na Barra da Tijuca. 4 suítes, piscina privativa, churrasqueira e amplo jardim. Ideal para famílias que buscam segurança e tranquilidade.',
    price: 2500000,
    type: 'house',
    status: 'sale',
    area: 300,
    bedrooms: 4,
    bathrooms: 5,
    parking: 3,
    address: {
      street: 'Rua das Américas, 8000',
      neighborhood: 'Barra da Tijuca',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '22793-000'
    },
    images: [
      'https://placehold.co/800x600?text=Casa+moderna+Barra+Tijuca+fachada+contemporanea',
      'https://placehold.co/800x600?text=Sala+estar+casa+Barra+pe+direito+alto',
      'https://placehold.co/800x600?text=Cozinha+gourmet+casa+Barra+ilha+central',
      'https://placehold.co/800x600?text=Piscina+area+gourmet+casa+Barra+Tijuca',
      'https://placehold.co/800x600?text=Suite+master+casa+Barra+closet+integrado'
    ],
    features: ['Piscina', 'Churrasqueira', 'Jardim', 'Portaria 24h', 'Playground', 'Suíte', 'Closet', 'Garagem'],
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10'
  },
  {
    id: '3',
    title: 'Apartamento Aconchegante em Ipanema',
    description: 'Charmoso apartamento de 2 quartos no coração de Ipanema. Localização privilegiada a poucos metros da praia. Prédio com estilo arquitetônico clássico e vista lateral para o mar.',
    price: 950000,
    type: 'apartment',
    status: 'sale',
    area: 85,
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    address: {
      street: 'Rua Visconde de Pirajá, 400',
      neighborhood: 'Ipanema',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '22410-000'
    },
    images: [
      'https://placehold.co/800x600?text=Apartamento+Ipanema+sala+estar+decoracao+moderna',
      'https://placehold.co/800x600?text=Cozinha+americana+apartamento+Ipanema+funcional',
      'https://placehold.co/800x600?text=Quarto+casal+apartamento+Ipanema+vista+lateral',
      'https://placehold.co/800x600?text=Banheiro+apartamento+Ipanema+azulejo+portugues'
    ],
    features: ['Vista lateral mar', 'Portaria', 'Elevador', 'Ar condicionado', 'Próximo à praia'],
    createdAt: '2024-01-08',
    updatedAt: '2024-01-08'
  },
  {
    id: '4',
    title: 'Sala Comercial no Centro',
    description: 'Excelente sala comercial no centro do Rio de Janeiro, próxima ao metrô e principais vias de acesso. Ideal para escritórios, consultórios ou pequenas empresas. Prédio comercial moderno.',
    price: 350000,
    type: 'commercial',
    status: 'sale',
    area: 45,
    address: {
      street: 'Av. Rio Branco, 200',
      neighborhood: 'Centro',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '20040-020'
    },
    images: [
      'https://placehold.co/800x600?text=Sala+comercial+Centro+RJ+ampla+moderna',
      'https://placehold.co/800x600?text=Recepcao+sala+comercial+Centro+profissional',
      'https://placehold.co/800x600?text=Vista+janela+sala+comercial+Centro+cidade'
    ],
    features: ['Elevador', 'Ar condicionado', 'Próximo ao metrô', 'Portaria', 'Internet fibra'],
    createdAt: '2024-01-05',
    updatedAt: '2024-01-05'
  },
  {
    id: '5',
    title: 'Apartamento Familiar na Tijuca',
    description: 'Apartamento espaçoso de 3 quartos na Tijuca, bairro tradicional e bem localizado. Próximo a escolas, comércio e transporte público. Ideal para famílias que buscam praticidade no dia a dia.',
    price: 6500,
    type: 'apartment',
    status: 'rent',
    area: 95,
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    address: {
      street: 'Rua Conde de Bonfim, 800',
      neighborhood: 'Tijuca',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '20530-000'
    },
    images: [
      'https://placehold.co/800x600?text=Apartamento+Tijuca+sala+estar+familiar',
      'https://placehold.co/800x600?text=Cozinha+apartamento+Tijuca+armarios+planejados',
      'https://placehold.co/800x600?text=Quartos+apartamento+Tijuca+iluminacao+natural',
      'https://placehold.co/800x600?text=Area+servico+apartamento+Tijuca+funcional'
    ],
    features: ['Portaria', 'Elevador', 'Próximo a escolas', 'Transporte público', 'Área de serviço'],
    createdAt: '2024-01-12',
    updatedAt: '2024-01-12'
  },
  {
    id: '6',
    title: 'Terreno para Construção em Santa Teresa',
    description: 'Terreno plano em Santa Teresa com 400m², ideal para construção de casa ou pequeno edifício. Localização privilegiada com vista parcial da cidade. Documentação em ordem.',
    price: 800000,
    type: 'land',
    status: 'sale',
    area: 400,
    address: {
      street: 'Rua Monte Alegre, 150',
      neighborhood: 'Santa Teresa',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '20240-000'
    },
    images: [
      'https://placehold.co/800x600?text=Terreno+Santa+Teresa+plano+construcao',
      'https://placehold.co/800x600?text=Vista+terreno+Santa+Teresa+cidade+parcial',
      'https://placehold.co/800x600?text=Localizacao+terreno+Santa+Teresa+rua+tranquila'
    ],
    features: ['Terreno plano', 'Vista da cidade', 'Documentação regular', 'Área nobre'],
    createdAt: '2024-01-03',
    updatedAt: '2024-01-03'
  },
  {
    id: '7',
    title: 'Cobertura Duplex no Leblon',
    description: 'Magnífica cobertura duplex no Leblon com 4 suítes, terraço privativo com piscina e vista panorâmica. Acabamentos de luxo, cozinha gourmet e área de lazer completa no terraço.',
    price: 4800000,
    type: 'apartment',
    status: 'sale',
    area: 250,
    bedrooms: 4,
    bathrooms: 5,
    parking: 2,
    address: {
      street: 'Av. Delfim Moreira, 500',
      neighborhood: 'Leblon',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '22441-000'
    },
    images: [
      'https://placehold.co/800x600?text=Cobertura+Leblon+sala+estar+pe+direito+duplo',
      'https://placehold.co/800x600?text=Terraço+cobertura+Leblon+piscina+vista+mar',
      'https://placehold.co/800x600?text=Cozinha+gourmet+cobertura+Leblon+luxuosa',
      'https://placehold.co/800x600?text=Suite+master+cobertura+Leblon+closet+banheira',
      'https://placehold.co/800x600?text=Vista+panoramica+cobertura+Leblon+Cristo+Redentor'
    ],
    features: ['Piscina', 'Terraço', 'Vista panorâmica', 'Suíte', 'Closet', 'Churrasqueira', 'Elevador privativo'],
    createdAt: '2024-01-20',
    updatedAt: '2024-01-20'
  },
  {
    id: '8',
    title: 'Casa Térrea em Vila Isabel',
    description: 'Casa térrea de 3 quartos em Vila Isabel, bairro tradicional com excelente infraestrutura. Quintal espaçoso, garagem para 2 carros e localização próxima ao metrô.',
    price: 4200,
    type: 'house',
    status: 'rent',
    area: 140,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    address: {
      street: 'Rua Teodoro da Silva, 300',
      neighborhood: 'Vila Isabel',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '20560-000'
    },
    images: [
      'https://placehold.co/800x600?text=Casa+terrea+Vila+Isabel+fachada+tradicional',
      'https://placehold.co/800x600?text=Sala+casa+Vila+Isabel+ampla+iluminada',
      'https://placehold.co/800x600?text=Quintal+casa+Vila+Isabel+gramado+arvores',
      'https://placehold.co/800x600?text=Cozinha+casa+Vila+Isabel+armarios+madeira'
    ],
    features: ['Quintal', 'Garagem', 'Próximo ao metrô', 'Área de serviço', 'Jardim'],
    createdAt: '2024-01-18',
    updatedAt: '2024-01-18'
  },
  {
    id: '9',
    title: 'Loft Moderno em Botafogo',
    description: 'Loft moderno e despojado em Botafogo, com conceito aberto e design contemporâneo. Ideal para jovens profissionais que buscam praticidade e estilo em localização central.',
    price: 3800,
    type: 'apartment',
    status: 'rent',
    area: 55,
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    address: {
      street: 'Rua Voluntários da Pátria, 400',
      neighborhood: 'Botafogo',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '22270-000'
    },
    images: [
      'https://placehold.co/800x600?text=Loft+Botafogo+conceito+aberto+moderno',
      'https://placehold.co/800x600?text=Cozinha+integrada+loft+Botafogo+contemporaneo',
      'https://placehold.co/800x600?text=Quarto+loft+Botafogo+mezanino+design',
      'https://placehold.co/800x600?text=Banheiro+loft+Botafogo+minimalista+elegante'
    ],
    features: ['Conceito aberto', 'Design moderno', 'Mobiliado', 'Ar condicionado', 'Próximo ao metrô'],
    createdAt: '2024-01-22',
    updatedAt: '2024-01-22'
  },
  {
    id: '10',
    title: 'Apartamento de Alto Padrão no Flamengo',
    description: 'Elegante apartamento de 3 quartos no Flamengo com vista deslumbrante para a Baía de Guanabara. Prédio clássico restaurado, hall social e acabamentos refinados.',
    price: 1450000,
    type: 'apartment',
    status: 'sale',
    area: 130,
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    address: {
      street: 'Praia do Flamengo, 200',
      neighborhood: 'Flamengo',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '22210-000'
    },
    images: [
      'https://placehold.co/800x600?text=Apartamento+Flamengo+sala+vista+Baia+Guanabara',
      'https://placehold.co/800x600?text=Sala+jantar+apartamento+Flamengo+classico+elegante',
      'https://placehold.co/800x600?text=Quarto+suite+apartamento+Flamengo+vista+mar',
      'https://placehold.co/800x600?text=Hall+social+predio+Flamengo+marmore+classico'
    ],
    features: ['Vista para a Baía', 'Hall social', 'Portaria 24h', 'Elevador', 'Próximo ao Aterro'],
    createdAt: '2024-01-25',
    updatedAt: '2024-01-25'
  }
];

export const getFeaturedProperties = (): Property[] => {
  return properties.filter(property => 
    ['1', '2', '7', '10'].includes(property.id)
  );
};

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const filterProperties = (filters: any): Property[] => {
  return properties.filter(property => {
    if (filters.type && property.type !== filters.type) return false;
    if (filters.status && property.status !== filters.status) return false;
    if (filters.minPrice && property.price < filters.minPrice) return false;
    if (filters.maxPrice && property.price > filters.maxPrice) return false;
    if (filters.minArea && property.area < filters.minArea) return false;
    if (filters.maxArea && property.area > filters.maxArea) return false;
    if (filters.bedrooms && property.bedrooms !== filters.bedrooms) return false;
    if (filters.bathrooms && property.bathrooms !== filters.bathrooms) return false;
    if (filters.neighborhood && property.address.neighborhood !== filters.neighborhood) return false;
    
    return true;
  });
};