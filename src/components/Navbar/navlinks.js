import Link from "next/link";
import { RiAccountBoxFill, RiAccountBoxLine } from "react-icons/ri";

export default function NavLink({ href, text, isActive, onClick, icon = false }) {
  return (
    <Link
      href={href}
      className={`${isActive ? 'text-yellow-600 font-medium' : 'text-gray-700'} hover:text-gray-900 transition-colors flex items-center`}
      onClick={onClick}
    >
      {icon && (
        <span className="mr-1">
          {isActive ? <RiAccountBoxFill size={18} /> : <RiAccountBoxLine size={18} />}
        </span>
      )}
      {text}
    </Link>
  );
} 
