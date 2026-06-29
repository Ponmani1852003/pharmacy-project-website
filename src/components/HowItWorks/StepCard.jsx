function StepCard({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <img
        src={icon}
        alt={title}
        className="w-8 h-8 object-contain"
      />

      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        <p className="text-xs text-gray-500 leading-4">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default StepCard;