import { createContext, useContext } from "react";
const LevelContext = createContext(1);

export function Section({ children }: { children: React.ReactNode }) {
  const level = useContext(LevelContext);

  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

export function Heading({ children }: { children: string }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1 className="text-4xl font-bold">{children}</h1>;
    case 2:
      return <h2 className="text-3xl font-bold">{children}</h2>;
    case 3:
      return <h3 className="text-2xl font-bold">{children}</h3>;
    case 4:
      return <h4 className="text-xl font-bold">{children}</h4>;
    case 5:
      return <h5 className="text-lg font-bold">{children}</h5>;
    case 6:
      return <h6 className="text-base font-bold">{children}</h6>;
    default:
      return <p className="text-base font-bold">{children}</p>;
  }
}
