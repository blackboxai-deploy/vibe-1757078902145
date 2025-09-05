import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Venda de Imóveis',
    description: 'Serviços completos para venda do seu imóvel com avaliação gratuita, marketing profissional e acompanhamento durante todo o processo.',
    icon: 'home',
    features: [
      'Avaliação gratuita do imóvel',
      'Fotografia profissional',
      'Marketing digital personalizado',
      'Acompanhamento jurídico',
      'Negociação especializada',
      'Documentação completa'
    ]
  },
  {
    id: '2',
    title: 'Locação de Imóveis',
    description: 'Encontre o inquilino ideal para seu imóvel ou o imóvel perfeito para locação. Processo seguro e transparente.',
    icon: 'key',
    features: [
      'Análise de perfil de inquilinos',
      'Contratos personalizados',
      'Vistoria detalhada',
      'Garantias flexíveis',
      'Administração de locação',
      'Suporte pós-locação'
    ]
  },
  {
    id: '3',
    title: 'Consultoria Imobiliária',
    description: 'Consultoria especializada para investimentos imobiliários, análise de mercado e orientação para melhores oportunidades.',
    icon: 'chart',
    features: [
      'Análise de investimentos',
      'Estudo de viabilidade',
      'Consultoria financeira',
      'Análise de mercado',
      'Projeção de rentabilidade',
      'Orientação estratégica'
    ]
  },
  {
    id: '4',
    title: 'Avaliação Profissional',
    description: 'Laudos técnicos e avaliações profissionais para diversos fins: financiamento, seguro, inventário e mais.',
    icon: 'calculator',
    features: [
      'Laudo técnico completo',
      'Avaliação para financiamento',
      'Avaliação para seguro',
      'Avaliação judicial',
      'Relatório fotográfico',
      'Entrega em 48h'
    ]
  },
  {
    id: '5',
    title: 'Acompanhamento Jurídico',
    description: 'Suporte jurídico completo em todas as transações imobiliárias, garantindo segurança e tranquilidade.',
    icon: 'shield',
    features: [
      'Análise de documentação',
      'Elaboração de contratos',
      'Acompanhamento em cartório',
      'Consultoria jurídica',
      'Resolução de pendências',
      'Segurança jurídica total'
    ]
  },
  {
    id: '6',
    title: 'Financiamento Imobiliário',
    description: 'Auxílio completo para financiamento imobiliário com as melhores condições do mercado e acompanhamento personalizado.',
    icon: 'credit-card',
    features: [
      'Simulação de financiamento',
      'Negociação com bancos',
      'Análise de crédito',
      'Documentação necessária',
      'Acompanhamento do processo',
      'Melhores condições do mercado'
    ]
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};