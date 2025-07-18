import Image from "next/image";
import Link from "next/link";
const user = {};

const Navbar = () => {
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
        </Link>

        {user && (
          <figure>
            <button>
              <Image
                src="/assets/images/dummy.jpg"
                alt="User"
                width={32}
                height={32}
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
