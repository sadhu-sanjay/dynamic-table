"use client";
import Header from "~/components/Organisms/header";
import NavBar from "~/components/Organisms/nav-bar";
import { FilterProvider } from "~/providers/filter-provider";
import navData from "~/data/nav-data";
import { useSignInModal } from "~/app/(auth)/login/sign-in-modal";
import UserDropdown from "~/components/Organisms/user-dropdown";
import { useSession } from "next-auth/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const { data: session } = useSession();

  return (
    <FilterProvider>
      <SignInModal />
      <div
        className="container bg-white
      dark:bg-gray-900 
        box-border h-screen min-h-screen w-full grid grid-cols-12"
      >
        <NavBar navData={navData} className="col-span-2 " />
        <div className="main flex flex-col col-span-10 overflow-hidden">
          <Header
            title="Proposals"
            onSubmit={() => console.log("search")}
            onAvatarClick={() => setShowSignInModal(true)}
            session={session}
          />
          <main className="rounded-4px flex flex-1 flex-col p-4 md:p-6 overflow-hidden ">
            <div className="rounded-4px subContainer border shadow-sm overflow-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </FilterProvider>
  );
}
