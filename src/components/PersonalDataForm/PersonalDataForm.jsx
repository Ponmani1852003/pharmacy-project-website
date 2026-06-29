import { useState } from "react";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function RequiredInput({ value, onChange, placeholder, type = "text" }) {
  return (
    <div className="relative">
      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-400" />
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-full px-5 py-3.5 text-sm outline-none focus:border-teal-400"
      />
    </div>
  );
}

function PersonalDataForm() {
  const [fullName, setFullName] = useState("");
  const [day, setDay] = useState("1");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ fullName, day, month, year, gender, email, phone, password, confirm });
  }

  return (
    <section id="personal-data" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Account</h2>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <RequiredInput
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
        />

        <div>
          <p className="text-xs font-semibold text-gray-500 tracking-wide mb-3">DATE OF BIRTH</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="border border-gray-200 rounded-full px-4 py-3 text-sm outline-none focus:border-teal-400"
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="border border-gray-200 rounded-full px-4 py-3 text-sm outline-none focus:border-teal-400"
            >
              <option value="">Month</option>
              {months.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border border-gray-200 rounded-full px-4 py-3 text-sm outline-none focus:border-teal-400"
            >
              <option value="">Year</option>
              {Array.from({ length: 80 }, (_, i) => 2026 - i).map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border border-gray-200 rounded-full px-4 py-3 text-sm outline-none focus:border-teal-400"
            >
              <option value="">Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
        </div>

        <RequiredInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <RequiredInput
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />

        <RequiredInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New password"
        />

        <RequiredInput
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="Confirm password"
        />

        <button
          type="submit"
          className="bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold uppercase tracking-wide rounded-full px-8 py-3.5 transition-colors"
        >
          Save
        </button>
      </form>
    </section>
  );
}

export default PersonalDataForm;
