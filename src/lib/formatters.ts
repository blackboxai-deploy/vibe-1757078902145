export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

export const formatArea = (area: number): string => {
  return `${area.toLocaleString('pt-BR')} m²`;
};

export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  return phone;
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

export const formatDateExtended = (date: string): string => {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

export const calculateMonthlyPayment = (
  price: number,
  downPayment: number,
  interestRate: number,
  years: number
): number => {
  const principal = price - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = years * 12;
  
  if (monthlyRate === 0) {
    return principal / numberOfPayments;
  }
  
  const monthlyPayment = principal * 
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
  return monthlyPayment;
};

export const getPropertyTypeLabel = (type: string): string => {
  const types: Record<string, string> = {
    apartment: 'Apartamento',
    house: 'Casa',
    commercial: 'Comercial',
    land: 'Terreno'
  };
  return types[type] || type;
};

export const getPropertyStatusLabel = (status: string): string => {
  const statuses: Record<string, string> = {
    sale: 'Venda',
    rent: 'Aluguel'
  };
  return statuses[status] || status;
};