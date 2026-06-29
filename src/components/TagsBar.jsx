import { Percent, Tag } from 'lucide-react'

const tags = ['COVID-19', 'Allergy', 'Medicated cosmetics', 'Digestive health', 'Thrush', 'Joints', 'More (52)']

export default function TagsBar() {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 px-6 py-4 flex items-center gap-3 overflow-x-auto no-scrollbar">
        <button className="flex items-center gap-1.5 rounded-full bg-sky-50 text-sky-500 text-sm font-semibold px-4 py-2 shrink-0 hover:bg-sky-100 transition-colors">
          <Percent className="w-4 h-4" />
          Promotions
        </button>
        <button className="flex items-center gap-1.5 rounded-full bg-brand-orange text-white text-sm font-semibold px-4 py-2 shrink-0 hover:bg-orange-500 transition-colors">
          <Tag className="w-4 h-4" />
          Discounts
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            className="rounded-full border border-gray-200 text-gray-600 text-sm font-medium px-4 py-2 shrink-0 hover:border-brand-teal hover:text-brand-teal transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
