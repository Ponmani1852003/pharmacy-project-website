const banks = [
  "VBRR", "Uralsib", "Sberbank", "Raiffeisen", "VTB",
  "Pochta Bank", "MTS Bank", "Gazprombank", "Citibank", "Alfa Bank",
];

function BankLogos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
      {banks.map((bank) => (
        <div
          key={bank}
          className="border border-gray-200 rounded-lg px-3 py-2.5 text-center text-xs font-semibold text-gray-600"
        >
          {bank}
        </div>
      ))}
    </div>
  );
}

export default BankLogos;
