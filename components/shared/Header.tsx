import Logo from '@/icons/Logo';
import Link from 'next/link';
import Search from "./search"
import Image from "next/image";

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const closeMenu = () => setIsMenuOpen(false);
  //const handleSubmit = (query: string) => {
    // aquí puedes hacer lo que desees con la query
    //console.log(`Buscando: ${query}`)
  //}

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
          <div className="container mx-auto">
      <Search  />
        </div>
        <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary hover:opacity-75"
                href={'/profile'}
              >
                 <Image
              src="/Button.png"
              alt="perfil"
              width={140}
              height={140}
              quality={100}
              
            />
              </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
