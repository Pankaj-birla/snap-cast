'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const user = {};

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={32}
            height={32}
          />
          <h1> SnapCast</h1>
        </Link>

        {user && (
          <figure>
            <button onClick={() => router.push("/profile/12345")}>
              <Image
                className="rounded-full aspect-square"
                src="/assets/images/dummy.jpg"
                alt="User"
                width={32}
                height={32}
              />
            </button>
            <button className="cursor-pointer">
              <Image src="/assets/icons/logout.svg" alt="logout" width={24} height={24} className="rotate-180"/>
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
