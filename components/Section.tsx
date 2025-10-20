interface SectionProps {
  id?: string
  title: string
  description?: string
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray'
}

export default function Section({
  id,
  title,
  description,
  children,
  className = '',
  background = 'white',
}: SectionProps) {
  const bgStyles = background === 'gray' ? 'bg-gray-50' : 'bg-white'

  return (
    <section id={id} className={`py-20 ${bgStyles} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}

