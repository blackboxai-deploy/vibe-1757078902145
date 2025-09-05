import Link from 'next/link';
import { Property } from '@/types';
import { formatPrice, formatArea, getPropertyTypeLabel, getPropertyStatusLabel } from '@/lib/formatters';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = `https://placehold.co/400x300?text=Imóvel+${property.type}+${property.address.neighborhood}`;
          }}
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge 
            variant={property.status === 'sale' ? 'default' : 'secondary'}
            className={property.status === 'sale' ? 'bg-green-600' : 'bg-blue-600'}
          >
            {getPropertyStatusLabel(property.status)}
          </Badge>
          <Badge variant="outline" className="bg-white/90">
            {getPropertyTypeLabel(property.type)}
          </Badge>
        </div>
        <div className="absolute bottom-3 right-3">
          <div className="bg-black/70 text-white px-2 py-1 rounded text-sm font-bold">
            {formatPrice(property.price)}
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
            {property.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            {property.address.neighborhood}, {property.address.city}
          </p>
          <p className="text-sm text-gray-700 line-clamp-2">
            {property.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <div className="flex gap-4">
            <span>{formatArea(property.area)}</span>
            {property.bedrooms && (
              <span>{property.bedrooms} quarto{property.bedrooms > 1 ? 's' : ''}</span>
            )}
            {property.bathrooms && (
              <span>{property.bathrooms} banheiro{property.bathrooms > 1 ? 's' : ''}</span>
            )}
          </div>
        </div>
        
        {property.features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {property.features.slice(0, 3).map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
              {property.features.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{property.features.length - 3}
                </Badge>
              )}
            </div>
          </div>
        )}
        
        <div className="flex gap-2">
          <Link href={`/imoveis/${property.id}`} className="flex-1">
            <Button className="w-full" size="sm">
              Ver Detalhes
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => {
              const message = encodeURIComponent(
                `Olá! Tenho interesse no imóvel: ${property.title} - ${formatPrice(property.price)}`
              );
              window.open(`https://wa.me/5521999999999?text=${message}`, '_blank');
            }}
          >
            WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}