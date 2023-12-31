"use client";

import ReactQueryProvider from "~/providers/tanstack-provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </div>
  );
}
