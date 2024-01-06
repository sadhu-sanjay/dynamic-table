"use client";

import LoadingDots from "~/icons/loading-dots-icon";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";

type LoginButtonProps = {
  children?: React.ReactNode;
};

const LoginButton: React.FC<LoginButtonProps> = ({ children }) => {
  // Get error message added by next/auth in URL.
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");
  const [signInClicked, setClicked] = useState(false);

  useEffect(() => {
    const errorMessage = Array.isArray(error) ? error.pop() : error;
    errorMessage && toast.error(errorMessage);
  }, [error]);

  return (
    <button
      disabled={signInClicked}
      onClick={() => {
        setClicked(true);
        signIn("github");
      }}
      className={`${
        signInClicked
          ? "cursor-not-allowed bg-stone-50 dark:bg-stone-800"
          : "bg-white hover:bg-stone-50 active:bg-stone-100 dark:bg-black dark:hover:border-white dark:hover:bg-black"
      } group my-2 flex h-10 w-full items-center justify-center space-x-2 rounded-md border border-stone-200 transition-colors duration-75 focus:outline-none dark:border-stone-700`}
    >
      {signInClicked ? (
        <LoadingDots color="#A8A29E" />
      ) : (
        <>
          {children}
          <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
            Login with GitHub
          </p>
        </>
      )}
    </button>
  );
};

export default LoginButton;
