'use client';

import { useState } from 'react';
import { ContactForm as ContactFormType } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ContactFormProps {
  title?: string;
  propertyId?: string;
  propertyTitle?: string;
  onSubmit?: (data: ContactFormType) => void;
}

export function ContactForm({ 
  title = "Entre em Contato", 
  propertyId, 
  propertyTitle,
  onSubmit 
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    email: '',
    phone: '',
    message: propertyTitle 
      ? `Olá! Tenho interesse no imóvel: ${propertyTitle}. Gostaria de mais informações.`
      : '',
    propertyId
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // In a real app, you would send this to an API
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          propertyId
        });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mensagem Enviada!</h3>
            <p className="text-gray-600 mb-4">
              Obrigado pelo seu interesse. Entraremos em contato em breve.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsSubmitted(false)}
            >
              Enviar Nova Mensagem
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome completo"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(21) 99999-9999"
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <Label htmlFor="message">Mensagem *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Conte-nos como podemos ajudá-lo..."
              rows={4}
              disabled={isSubmitting}
            />
          </div>
          
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </Button>
          
          <p className="text-sm text-gray-600 text-center">
            * Campos obrigatórios. Seus dados estão protegidos e não serão compartilhados.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}