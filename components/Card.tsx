import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CardProps {
  title: string
  subtitle?: string
  description?: string
  image?: string
  href?: string
  tags?: string[]
  icon?: React.ReactNode
}

export default function Card({
  title,
  subtitle,
  description,
  image,
  href,
  tags,
  icon,
}: CardProps) {
  const content = (
    <div className={`h-full bg-white rounded-xl border border-gray-200 overflow-hidden transition-all ${href ? 'hover:shadow-xl hover:border-primary-300 cursor-pointer' : ''}`}>
      {image && (
        <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden">
          {/* Placeholder for image */}
          <div className="absolute inset-0 flex items-center justify-center text-primary-600">
            {icon || <div className="text-6xl">📊</div>}
          </div>
        </div>
      )}
      
      <div className="p-6">
        {subtitle && (
          <p className="text-sm text-primary-600 font-semibold mb-2">{subtitle}</p>
        )}
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {href && (
          <div className="flex items-center text-primary-600 font-medium">
            <span className="mr-2">了解更多</span>
            <ArrowRight size={16} />
          </div>
        )}
      </div>
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

