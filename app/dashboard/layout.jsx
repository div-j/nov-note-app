import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/SideBar";

export default function BlogLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar/>
 
      <main className="mt-4">
    <SidebarTrigger />
        {children}
        </main>

    </SidebarProvider>
  );
}
