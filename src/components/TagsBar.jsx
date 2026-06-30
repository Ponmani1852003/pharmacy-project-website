import { Percent, Tag } from 'lucide-react'

const tags = ['COVID-19', 'Allergy', 'Medicated cosmetics', 'Digestive health', 'Thrush', 'Joints', 'More (52)']

export default function TagsBar() {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-2 sm:flex sm:flex-wrap lg:flex-nowrap items-center gap-2 sm:gap-3 lg:overflow-x-auto no-scrollbar">
        <button className="flex items-center justify-center gap-1 sm:gap-1.5 rounded-full bg-sky-50 text-sky-500 text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 shrink-0 hover:bg-sky-100 transition-colors">
          <Percent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Promotions
        </button>
        <button className="flex items-center justify-center gap-1 sm:gap-1.5 rounded-full bg-brand-orange text-white text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 shrink-0 hover:bg-orange-500 transition-colors">
          <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Discounts
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            className="rounded-full border border-gray-200 text-gray-600 text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 shrink-0 hover:border-brand-teal hover:text-brand-teal transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}