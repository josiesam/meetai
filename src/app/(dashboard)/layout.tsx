import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-col h-screen bg-muted w-screen">
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
