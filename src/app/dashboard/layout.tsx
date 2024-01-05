import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RECORDS_FETCH_URL } from "~/common/config";
import Header from "~/components/Organisms/header";
import NavBar from "~/components/Organisms/nav-bar";
import { FilterProvider } from "~/providers/filter-provider";
import navData from "~/data/nav-data";
import { useSignInModal } from "~/app/(auth)/login/sign-in-modal";
import UserDropdown from "~/components/Organisms/user-dropdown";
import { getServerSession } from "next-auth/next";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resp = useQuery({
    queryKey: ["data"],
    queryFn: () => axios(RECORDS_FETCH_URL).then((res) => res.data),
    refetchOnWindowFocus: false,
  });

  const session = await getServerSession();

  const { SignInModal, setShowSignInModal } = useSignInModal();

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
          />
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div>
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
