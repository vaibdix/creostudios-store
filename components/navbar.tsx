import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import Image from "next/image";
import Button from "./ui/button";
import Custom from "./custom";
import { ModeToggle } from "./Modetoggle";

import { UserButton, auth } from "@clerk/nextjs";

const Navbar = async () => {
  const categories = await getCategories();
  const { userId } = auth();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <Image
              src="/ui-icon.png"
              width={30}
              height={30}
              alt="CreoStudios"
            />
            <p className="font-bold text-xl">CreoStudios</p>
          </Link>
          <MainNav data={categories} />

          <NavbarActions />
          <Custom />
          {userId ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link
              className="bg-black text-white p-2 pl-5 pr-5 rounded-full"
              href="/sign-in"
            >
              Sign In
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
