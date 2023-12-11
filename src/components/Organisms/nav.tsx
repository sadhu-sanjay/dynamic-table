type NavBarProps = {
  title: string;
  items: string[];
  children: React.ReactNode;
};

const NavBar: React.FC<NavBarProps> = ({ title, items, children }) => {
  return (
    <div className="flex flex-col items-stretch min-h-screen">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]" />
      <div className="flex flex-col items-center justify-center flex-1 px-4 py-8 bg-white dark:bg-gray-800 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="w-auto h-12 mx-auto"
              src="/fronyface.svg"
              alt="FronyFace"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900 dark:text-white">
              {title}
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
