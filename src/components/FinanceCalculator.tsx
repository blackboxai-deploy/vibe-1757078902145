'use client';

import { useState, useEffect } from 'react';
import { calculateMonthlyPayment, formatPrice } from '@/lib/formatters';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface FinanceCalculatorProps {
  propertyPrice?: number;
}

export function FinanceCalculator({ propertyPrice = 500000 }: FinanceCalculatorProps) {
  const [price, setPrice] = useState(propertyPrice);
  const [downPayment, setDownPayment] = useState(propertyPrice * 0.2); // 20% default
  const [interestRate, setInterestRate] = useState(10.5); // 10.5% default
  const [years, setYears] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    const monthly = calculateMonthlyPayment(price, downPayment, interestRate, years);
    const total = monthly * years * 12 + downPayment;
    const interest = total - price;
    
    setMonthlyPayment(monthly);
    setTotalAmount(total);
    setTotalInterest(interest);
  }, [price, downPayment, interestRate, years]);

  const downPaymentPercentage = ((downPayment / price) * 100).toFixed(1);
  const financedAmount = price - downPayment;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculadora de Financiamento</CardTitle>
        <p className="text-sm text-gray-600">
          Simule as condições do seu financiamento imobiliário
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="price">Valor do Imóvel (R$)</Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              min="50000"
              step="10000"
            />
          </div>
          
          <div>
            <Label htmlFor="downPayment">Entrada (R$)</Label>
            <Input
              id="downPayment"
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              min="0"
              step="5000"
            />
            <p className="text-xs text-gray-500 mt-1">
              {downPaymentPercentage}% do valor do imóvel
            </p>
          </div>
          
          <div>
            <Label htmlFor="interestRate">Taxa de Juros (% ao ano)</Label>
            <Input
              id="interestRate"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              min="5"
              max="20"
              step="0.1"
            />
          </div>
          
          <div>
            <Label htmlFor="years">Prazo (anos)</Label>
            <Input
              id="years"
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              min="5"
              max="35"
              step="1"
            />
          </div>
        </div>

        <Separator />

        {/* Results */}
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Parcela Mensal</p>
              <p className="text-2xl font-bold text-blue-600">
                {formatPrice(monthlyPayment)}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Valor Financiado</p>
              <p className="text-lg font-semibold text-gray-900">
                {formatPrice(financedAmount)}
              </p>
            </div>
            
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Total de Juros</p>
              <p className="text-lg font-semibold text-red-600">
                {formatPrice(totalInterest)}
              </p>
            </div>
            
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Valor Total</p>
              <p className="text-lg font-semibold text-gray-900">
                {formatPrice(totalAmount)}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Ações Rápidas:</p>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDownPayment(price * 0.2)}
            >
              20% Entrada
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDownPayment(price * 0.3)}
            >
              30% Entrada
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setYears(20)}
            >
              20 anos
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setYears(30)}
            >
              30 anos
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-gray-500 bg-yellow-50 p-3 rounded">
          <p className="font-medium mb-1">⚠️ Importante:</p>
          <p>
            Esta é uma simulação aproximada. Os valores reais podem variar conforme as 
            condições do banco, renda comprovada, score de crédito e outros fatores. 
            Consulte sempre um especialista para informações precisas.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}