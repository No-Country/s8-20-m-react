import EyeIcon from '@/icons/EyeIcon';
import LoginImg from '@/icons/LoginImg';
import Logo from '@/icons/Logo';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
  const [pswStyle, setPswStyle] = useState<boolean>(false);

  const handleButtonEye = () => {
    setPswStyle(!pswStyle);
  };
  return (
    <div className="flex justify-center items-center w-[100%] bg-background">
      <div className="md:flex justify-center items-center w-[50%] min-w-[320px] hidden">
        <LoginImg />
      </div>
      <div className="flex flex-col justify-center items-center md:w-[50%] w-full">
        <form
          className="flex flex-col justify-center items-center gap-6 max-w-[27rem] min-w-[18rem] w-[80%]"
          action=""
        >
          <Link href={'/'} className="md:hidden mt-14">
            <Logo />
          </Link>
          <h1 className="text-4xl mb-2">Iniciar sesión</h1>
          <p className="md:hidden text-base">
            Completá tus datos para comenzar.
          </p>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-gray" htmlFor="">
              Email
            </label>
            <input
              className="h-10 rounded-md pl-4"
              type="text"
              placeholder="Ingrese su email"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-gray" htmlFor="">
              Contraseña
            </label>
            <div className="flex items-center relative w-full">
              <input
                className="w-full h-10 rounded-md pl-4"
                type={`${pswStyle ? 'text' : 'password'}`}
                placeholder="Ingrese su contraseña"
              />
              <button
                className="absolute right-1"
                type="button"
                onClick={handleButtonEye}
              >
                <EyeIcon />
              </button>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex gap-2">
              <input type="checkbox" />
              <p>Recordarme</p>
            </div>
            <div>
              <Link className="text-link" href={'/login'}>
                Olvide mi Contraseña
              </Link>
            </div>
          </div>
          <button
            className="bg-primary text-stone-50 px-12 py-3 rounded-2xl mt-10 md:w-[12rem] w-full"
            type="submit"
          >
            Iniciar Sesion
          </button>
        </form>
        <p className="mt-8 mb-14">
          No tienes cuenta?
          <Link className="text-link ml-2" href={'/register'}>
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
