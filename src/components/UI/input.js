"use client";

export default function Input({ id, label, type = "text", value, onChange, required = false }) {
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-amber-500"
        placeholder={label}
        required={required}
      />
      <label
        htmlFor={id}
        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all peer-focus:-top-3.5 peer-focus:text-amber-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}