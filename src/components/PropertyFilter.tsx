'use client';

import { useState } from 'react';
import { PropertyFilter as PropertyFilterType } from '@/types';
import { PROPERTY_TYPES, PROPERTY_STATUS, NEIGHBORHOODS, BEDROOM_OPTIONS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

interface PropertyFilterProps {
  onFilterChange: (filters: PropertyFilterType) => void;
  initialFilters?: PropertyFilterType;
}

export function PropertyFilter({ onFilterChange, initialFilters = {} }: PropertyFilterProps) {
  const [filters, setFilters] = useState<PropertyFilterType>(initialFilters);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    initialFilters.minPrice || 100000, 
    initialFilters.maxPrice || 5000000
  ]);
  const [areaRange, setAreaRange] = useState<[number, number]>([
    initialFilters.minArea || 30, 
    initialFilters.maxArea || 500
  ]);

  const handleFilterChange = (key: keyof PropertyFilterType, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
    handleFilterChange('minPrice', values[0]);
    handleFilterChange('maxPrice', values[1]);
  };

  const handleAreaChange = (values: number[]) => {
    setAreaRange([values[0], values[1]]);
    handleFilterChange('minArea', values[0]);
    handleFilterChange('maxArea', values[1]);
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  const clearFilters = () => {
    const emptyFilters: PropertyFilterType = {};
    setFilters(emptyFilters);
    setPriceRange([100000, 5000000]);
    setAreaRange([30, 500]);
    onFilterChange(emptyFilters);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filtrar Imóveis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Tipo e Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="type">Tipo de Imóvel</Label>
            <Select value={filters.type || ''} onValueChange={(value) => handleFilterChange('type', value || undefined)}>
              <SelectTrigger>
                <SelectValue placeholder="Todos os tipos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todos os tipos</SelectItem>
                {PROPERTY_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="status">Finalidade</Label>
            <Select value={filters.status || ''} onValueChange={(value) => handleFilterChange('status', value || undefined)}>
              <SelectTrigger>
                <SelectValue placeholder="Venda e Aluguel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Venda e Aluguel</SelectItem>
                {PROPERTY_STATUS.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Faixa de Preço */}
        <div>
          <Label>Faixa de Preço</Label>
          <div className="mt-2">
            <Slider
              value={priceRange}
              onValueChange={handlePriceChange}
              max={5000000}
              min={100000}
              step={50000}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>
        </div>

        {/* Área */}
        <div>
          <Label>Área (m²)</Label>
          <div className="mt-2">
            <Slider
              value={areaRange}
              onValueChange={handleAreaChange}
              max={500}
              min={30}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>{areaRange[0]} m²</span>
              <span>{areaRange[1]} m²</span>
            </div>
          </div>
        </div>

        {/* Quartos e Banheiros */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="bedrooms">Quartos</Label>
            <Select 
              value={filters.bedrooms ? filters.bedrooms.toString() : ''} 
              onValueChange={(value) => handleFilterChange('bedrooms', value ? parseInt(value) : undefined)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Qualquer quantidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Qualquer quantidade</SelectItem>
                {BEDROOM_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value.toString()}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="bathrooms">Banheiros</Label>
            <Select 
              value={filters.bathrooms ? filters.bathrooms.toString() : ''} 
              onValueChange={(value) => handleFilterChange('bathrooms', value ? parseInt(value) : undefined)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Qualquer quantidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Qualquer quantidade</SelectItem>
                <SelectItem value="1">1 banheiro</SelectItem>
                <SelectItem value="2">2 banheiros</SelectItem>
                <SelectItem value="3">3 banheiros</SelectItem>
                <SelectItem value="4">4+ banheiros</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Bairro */}
        <div>
          <Label htmlFor="neighborhood">Bairro</Label>
          <Select 
            value={filters.neighborhood || ''} 
            onValueChange={(value) => handleFilterChange('neighborhood', value || undefined)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Todos os bairros" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todos os bairros</SelectItem>
              {NEIGHBORHOODS.map((neighborhood) => (
                <SelectItem key={neighborhood} value={neighborhood}>
                  {neighborhood}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <Button onClick={applyFilters} className="flex-1">
            Aplicar Filtros
          </Button>
          <Button variant="outline" onClick={clearFilters}>
            Limpar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}