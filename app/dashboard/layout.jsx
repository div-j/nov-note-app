import Sidebar from "../components/SideBar";

export default function BlogLayout({ children }) {
  return (
    <section className="flex gap-4">
      <Sidebar/>
      <main className="mt-4">{children}</main>
    </section>
  );
}
