
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 ml-4 rounded-lg bg-gray-800 text-white h-[80vh] p-4 mt-4">
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="hover:underline">Overview</Link>
        <Link href="/dashboard/profile" className="hover:underline">Profile</Link>
        <Link href="/dashboard/settings" className="hover:underline">Settings</Link>
      </nav>
    </aside>
  );
}
