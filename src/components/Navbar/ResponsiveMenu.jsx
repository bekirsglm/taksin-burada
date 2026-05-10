import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { navlinks } from "./Navlinks";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-full"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-dark dark:text-white px-8 pb-6 pt-16 text-black duration-300 md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        {/* user top section */}
        <div className="flex items-center justify-start gap-3 ">
          <FaUserCircle className="text-5xl" />
          <div>
            <h1>Merhaba Bekir</h1>
            <h1 className="text-sm text-slate-500">Premium Kullanıcı</h1>
          </div>
        </div>

        {/* navigation links  section */}
        <nav className="mt-12">
          <ul>
            {navlinks.map(({ id, name, link }) => {
              return (
                <li key={id} className="py-4">
                  <Link
                    href={link}
                    onClick={() => setShowMenu(false)}
                    className="text-xl font-medium text-black dark:text-white duration-300"
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* bottom footer section*/}
      <div className="footer">
        <h1>
          Developed by{" "}
          <a className="text-primary" href="https://bekirsaglam.com/">
            BEKİR SAĞLAM
          </a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
