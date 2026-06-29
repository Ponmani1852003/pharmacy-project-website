const filler = `A diverse and rich body of experience starting from day-to-day work on
shaping a position contributes to the preparation and implementation of a
staff training system that matches urgent needs. Likewise, the framework
and venue for staff training provides a wide range of specialists.`;

const periods = [
  "2005–2008",
  "2008–2012",
  "2012–2016",
  "2016–2018",
  "2018–2020",
  "2020–2021",
];

function DevelopmentTimeline() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Development History</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
        {periods.map((period) => (
          <div key={period}>
            <h3 className="font-bold text-gray-800 mb-3">{period}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{filler}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DevelopmentTimeline;
