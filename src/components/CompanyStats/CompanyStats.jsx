import { FileText, Building2 } from "lucide-react";

const stats = [
  { icon: FileText, bold: "5,000+", text: "employees. A real big family!" },
  {
    icon: Building2,
    bold: "750+",
    text: "pharmacies in 80 cities across the Central and Northwestern federal districts of Russia",
  },
  { icon: FileText, bold: "5,000+", text: "employees. A real big family!" },
  {
    icon: Building2,
    bold: "750+",
    text: "pharmacies in 80 cities across the Central and Northwestern federal districts of Russia",
  },
];

function CompanyStats() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Today, "Pharmacy"</h2>
      <p className="text-gray-500 mb-6">...is —</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ icon: Icon, bold, text }, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-full bg-teal-400 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              More than <span className="font-bold text-gray-800">{bold}</span> {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyStats;
