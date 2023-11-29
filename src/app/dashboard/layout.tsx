export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="h-[100dvh] w-[100dvw] bg-blue-800 flex flex-col justify-center items-center ">
        {children}
      </main>
      <aside className="bg-green-500 w-1/4 h-full">
        {/* Content of the aside goes here */}
      </aside>
    </>
  );
}
