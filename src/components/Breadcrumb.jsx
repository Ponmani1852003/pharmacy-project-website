import { Link } from 'react-router-dom'
import { Home, ChevronRight } from 'lucide-react'

export default function Breadcrumb({ trail = [] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-4 sm:pt-6 flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500">
      <Link to="/" aria-label="Home" className="flex items-center">
        <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 hover:text-brand-teal transition-colors" />
      </Link>
      {trail.map((item, i) => (
        <span key={item} className="flex items-center gap-1.5 sm:gap-2">
          {i > 0 && <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />}
          {i === 0 ? (
            <Link to="/" className="text-brand-navy font-medium hover:text-brand-teal transition-colors">
              {item}
            </Link>
          ) : (
            <span className={i === trail.length - 1 ? 'text-gray-500' : 'text-brand-navy font-medium'}>
              {item}
            </span>
          )}
        </span>
      ))}
    </div>
  )
}