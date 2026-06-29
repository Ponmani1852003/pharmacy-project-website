import { Link } from 'react-router-dom'
import { Home, ChevronRight } from 'lucide-react'

export default function Breadcrumb({ trail = [] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-6 flex items-center gap-2 text-sm text-gray-500">
      <Link to="/" aria-label="Home">
        <Home className="w-4 h-4 hover:text-brand-teal transition-colors" />
      </Link>
      {trail.map((item, i) => (
        <span key={item} className="flex items-center gap-2">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
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
