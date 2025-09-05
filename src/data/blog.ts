import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Como Avaliar um Imóvel Antes da Compra',
    excerpt: 'Descubra os principais fatores que você deve considerar ao avaliar um imóvel para fazer o melhor investimento.',
    content: 'Avaliar um imóvel corretamente é fundamental para fazer um bom negócio. Neste artigo, vamos abordar os principais aspectos que você deve observar...',
    author: 'Josivan Sousa',
    publishedAt: '2024-01-25',
    image: 'https://placehold.co/800x400?text=Avaliacao+imovel+dicas+compra+investimento',
    tags: ['Compra', 'Investimento', 'Dicas'],
    slug: 'como-avaliar-imovel-antes-compra'
  },
  {
    id: '2',
    title: 'Mercado Imobiliário no Rio: Tendências 2024',
    excerpt: 'Análise completa das tendências do mercado imobiliário carioca e perspectivas para este ano.',
    content: 'O mercado imobiliário do Rio de Janeiro apresenta sinais de recuperação em 2024. Analisamos os principais indicadores...',
    author: 'Josivan Sousa',
    publishedAt: '2024-01-20',
    image: 'https://placehold.co/800x400?text=Mercado+imobiliario+Rio+Janeiro+tendencias+2024',
    tags: ['Mercado', 'Tendências', 'Rio de Janeiro'],
    slug: 'mercado-imobiliario-rio-tendencias-2024'
  },
  {
    id: '3',
    title: 'Financiamento Imobiliário: Guia Completo',
    excerpt: 'Tudo o que você precisa saber sobre financiamento imobiliário, desde a documentação até a aprovação.',
    content: 'O financiamento imobiliário é uma das principais formas de realizar o sonho da casa própria. Veja o passo a passo completo...',
    author: 'Josivan Sousa',
    publishedAt: '2024-01-18',
    image: 'https://placehold.co/800x400?text=Financiamento+imobiliario+guia+completo+aprovacao',
    tags: ['Financiamento', 'Casa Própria', 'Documentação'],
    slug: 'financiamento-imobiliario-guia-completo'
  },
  {
    id: '4',
    title: 'Investir em Imóveis: Vale a Pena em 2024?',
    excerpt: 'Análise dos prós e contras do investimento imobiliário no cenário econômico atual.',
    content: 'Com a economia em recuperação, muitos investidores se perguntam se vale a pena investir em imóveis. Analisamos os fatores...',
    author: 'Josivan Sousa',
    publishedAt: '2024-01-15',
    image: 'https://placehold.co/800x400?text=Investimento+imoveis+rentabilidade+2024+analise',
    tags: ['Investimento', 'Rentabilidade', 'Economia'],
    slug: 'investir-imoveis-vale-pena-2024'
  },
  {
    id: '5',
    title: 'Documentação para Compra de Imóvel',
    excerpt: 'Lista completa dos documentos necessários para comprar um imóvel sem complicações.',
    content: 'A documentação é uma das partes mais importantes na compra de um imóvel. Confira nossa lista completa...',
    author: 'Josivan Sousa',
    publishedAt: '2024-01-12',
    image: 'https://placehold.co/800x400?text=Documentacao+compra+imovel+checklist+completo',
    tags: ['Documentação', 'Compra', 'Processo Legal'],
    slug: 'documentacao-compra-imovel'
  },
  {
    id: '6',
    title: 'Bairros em Alta no Rio de Janeiro',
    excerpt: 'Conheça os bairros que estão em alta no mercado imobiliário carioca e as oportunidades de investimento.',
    content: 'Alguns bairros do Rio estão passando por um processo de valorização. Descubra quais são e por quê...',
    author: 'Josivan Sousa',
    publishedAt: '2024-01-10',
    image: 'https://placehold.co/800x400?text=Bairros+alta+Rio+Janeiro+valorizacao+investimento',
    tags: ['Bairros', 'Valorização', 'Oportunidades'],
    slug: 'bairros-alta-rio-janeiro'
  }
];

export const getFeaturedBlogPosts = (): BlogPost[] => {
  return blogPosts.slice(0, 3);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};