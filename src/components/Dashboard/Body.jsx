import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import UserProfileCard from "./UserProfileCard";
import DashboardWidgets from "./DashboardWidgets";
import SystemStatus from "./SystemStatus";
import PerformanceMetrics from "./PerformanceMetrics";
import ResourceUsage from "./ResourceUsage";
import DataTables from "./DataTables";
import AnalyticsCharts from "./AnalyticsCharts";
import RecentActivities from "./RecentActivities";
import TaskManager from "./TaskManager";
import CalendarEvents from "./CalendarEvents";
import QuickActions from "./QuickActions";
import MessageCenter from "./MessageCenter";
import NotificationsPanel from "./NotificationsPanel";
import SettingsPanel from "./SettingsPanel";

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <NavigationSidebar />
      <main className="dashboard-main">
        <UserProfileCard />
        <DashboardWidgets />
        <SystemStatus />
        <PerformanceMetrics />
        <ResourceUsage />
        <DataTables />
        <AnalyticsCharts />
        <RecentActivities />
        <TaskManager />
        <CalendarEvents />
        <QuickActions />
        <MessageCenter />
        <NotificationsPanel />
        <SettingsPanel />
      </main>
    </div>
  );
};

export default DashboardLayout;
