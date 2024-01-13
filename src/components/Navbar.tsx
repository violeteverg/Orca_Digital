import { Icons } from "./Icons";
import NavItems from "./NavItems";
import WidthWrapper from "./WidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

export default function Navbar() {
  const user = null;

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <WidthWrapper>
          <div className="border-b border-gray-300">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile dev */}

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8  lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden md:mr-6 lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-6">
                  {/* if user doesnt sign in it will be appears */}
                  {user ? null : (
                    <Link
                      href="/sign_in"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign In
                    </Link>
                  )}

                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/sign_up"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Create account
                    </Link>
                  )}

                  {user ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  ) : null}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WidthWrapper>
      </header>
    </div>
  );
}
