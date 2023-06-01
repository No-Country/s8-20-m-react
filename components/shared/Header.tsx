import Logo from '@/icons/Logo';
import { Avatar } from '@material-tailwind/react';
import Link from 'next/link';

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-headerBg mb-3 shadow-[0px_6px_10px_4px_rgba(0,0,0,0.05),0px_2px_3px_rgba(0,0,0,0.04)]">
      <div className="container px-4 flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <Link href={'/'}>
            <Logo />
          </Link>
        </div>
        <div className="lg:flex flex-grow items-center">
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary hover:opacity-75"
                href={'/'}
              >
                <span className="ml-2">Inicio</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary hover:opacity-75"
                href={'/categorias'}
              >
                <span className="ml-2">Categorías</span>
              </Link>
            </li>
          </ul>
          <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
            <input type="text" className="" placeholder="Search" />
          </div>
          <Link href="/profile">
            <Avatar
              variant="circular"
              size="sm"
              alt="candice wu"
              className="border border-blue-500 p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
