import { useState } from "react";
import { DashboardHeader } from "./components/DashboardHeader";
import { SummaryCards } from "./components/SummaryCards";
import { ServicesTable } from "./components/ServicesTable";
import { TrafficCharts } from "./components/TrafficCharts";
import { AIControlPanel } from "./components/AIControlPanel";
import { AlertsPanel } from "./components/AlertsPanel";
import { ServicesPage } from "./components/ServicesPage";
import { LogsPage } from "./components/LogsPage";
import { AIDecisionsPage } from "./components/AIDecisionsPage";
import { SettingsPage } from "./components/SettingsPage";

type Page = "Dashboard" | "Services" | "Logs" | "AI Decisions" | "Settings";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("Dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return (
          <div className="space-y-6">
            {/* Summary Cards */}
            <SummaryCards />
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left/Main Section - 2 columns */}
              <div className="lg:col-span-2 space-y-6">
                <ServicesTable />
                <TrafficCharts />
              </div>
              
              {/* Right Sidebar - 1 column */}
              <div className="space-y-6">
                <AIControlPanel />
                <AlertsPanel />
              </div>
            </div>
          </div>
        );
      case "Services":
        return <ServicesPage />;
      case "Logs":
        return <LogsPage />;
      case "AI Decisions":
        return <AIDecisionsPage />;
      case "Settings":
        return <SettingsPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <DashboardHeader currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="p-6 max-w-[1440px] mx-auto">
        {renderPage()}
      </main>
    </div>
  );
}
