import Link from "next/link";

export default function MobileNavLink({ href, text, isActive, onClick, iconActive, iconInactive }) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center p-2 ${isActive ? 'text-yellow-600' : 'text-gray-700'}`}
      onClick={onClick}
    >
      {isActive ? iconActive : iconInactive}
      <span className="text-xs mt-1">{text}</span>
    </Link>
  );
}
