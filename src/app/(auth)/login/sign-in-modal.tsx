"use client";

import Modal from "~/components/layouts/modal";
import { signIn } from "next-auth/react";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import LoadingDots from "~/icons/loading-dots-icon";

import Image from "next/image";
import Google from "~/icons/google-icon";
import LoginButton from "../../../components/Atoms/github-login-button";
import GithubIcon from "~/icons/github-icon";

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="bg-w-full overflow-hidden shadow-xl md:max-w-md md:rounded-4px md:border md:border-gray-200 ">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 dark:bg-gray-900 px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://travel.lbd.ventures">
            <Image
              src="/logo.png"
              alt="Logo"
              className="h-16 w-16 rounded-full"
              width={64}
              height={64}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Itne inc</h3>
          <p className="text-sm text-gray-500">
            This is strictly for demo purposes - No Information will be stored.
          </p>
        </div>

        <div
          className="flex flex-col  bg-gray-50 dark:bg-gray-800
         px-4 py-8 md:px-16"
        >
          <LoginButton >
            <GithubIcon className="h-5 w-5" />
          </LoginButton>
          <button
            disabled={signInClicked}
            className={`${
              signInClicked
                ? "cursor-not-allowed border-gray-200 bg-gray-100"
                : "border border-gray-200 bg-white dark:bg-black text-black hover:bg-gray-50"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              setSignInClicked(true);
              signIn("google");
            }}
          >
            {signInClicked ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <Google className="h-5 w-5" />
                <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
                Sign In with Google
          </p>
              </>
            )}
          </button>
          
        </div>
      </div>
    </Modal>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback]
  );
}
