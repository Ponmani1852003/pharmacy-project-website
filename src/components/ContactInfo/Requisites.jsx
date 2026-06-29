function Requisites() {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-5">Bank Details</h3>

      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <p>
          <span className="font-bold text-gray-800">Tax ID / KPP</span>
          <br />
          7451432180 / 745101001
        </p>

        <p>
          <span className="font-bold text-gray-800">Settlement account</span>{" "}
          40702810010000281954 at JSC "TINKOFF BANK"
        </p>

        <p>
          <span className="font-bold text-gray-800">BIC</span> 044525974{" "}
          <br />
          Correspondent account 30101810145250000974
        </p>
      </div>
    </div>
  );
}

export default Requisites;
