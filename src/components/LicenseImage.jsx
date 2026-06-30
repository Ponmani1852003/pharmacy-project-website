import { useState } from 'react'
import { ImageOff } from 'lucide-react'


export default function LicenseImage({ src, alt }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="aspect-[3/4] w-full rounded-2xl border-2 border-dashed border-gray-300 bg-brand-gray flex flex-col items-center justify-center gap-2 text-gray-400">
        <ImageOff className="w-8 h-8" />
        <p className="text-sm font-medium text-center px-6">
          Place the file "{src.replace('/', '')}" inside the <code>public/</code> folder
        </p>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-full rounded-2xl border border-gray-200 shadow-sm object-contain bg-white"
    />
  )
}
