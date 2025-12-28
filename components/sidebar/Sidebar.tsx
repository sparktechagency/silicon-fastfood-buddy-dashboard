import {
  LayoutGrid,
  Users,
  Store,
  CreditCard,
  FileText,
  Shield,
  User,
  LogOut,
} from "lucide-react";
import Link from "next/link";

export const menuItems = [
  {
    label: "Overview",
    icon: LayoutGrid,
    path: "/dashboard",
  },
  {
    label: "User Management",
    icon: Users,
    path: "/dashboard/users",
  },
  {
    label: "Restaurant List",
    icon: Store,
    path: "/dashboard/restaurants",
  },
  {
    label: "Subscription",
    icon: CreditCard,
    path: "/dashboard/subscription",
  },
  {
    label: "Terms & Condition",
    icon: FileText,
    path: "/dashboard/terms-condition",
  },
  {
    label: "Privacy Policy",
    icon: Shield,
    path: "/dashboard/privacy-policy",
  },
  {
    label: "My Profile",
    icon: User,
    path: "/dashboard/profile",
  },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-80 bg-[#012846] p-4 flex flex-col justify-between">
      {/* Menu */}
      <div>Logo herer</div>
      <div className="space-y-3">
        {menuItems.map(({ label, icon: Icon, path }) => (
          <Link
            href={path}
            key={label}
            className={`flex items-center gap-3 w-full px-5 py-3 rounded-full font-medium transition text-xl bg-[#054768]`}
          >
            <Icon className="w-5 h-5 text-orange-400" />
            {label}
          </Link>
        ))}
      </div>

      {/* Logout */}
      <button className="flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium bg-[#07324F] text-gray-200 hover:bg-[#0B4A6F] transition">
        <LogOut className="w-5 h-5 text-orange-400" />
        Log Out
      </button>
    </aside>
  );
}

//   ${
//                 active
//                   ? "bg-linear-to-b from-[#0B4A6F] to-[#0E6B9C] text-white"
//                   : "bg-[#07324F] text-gray-200 hover:bg-[#0B4A6F]"
//               }`}
