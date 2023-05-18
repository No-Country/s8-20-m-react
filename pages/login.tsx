import EyeIcon from '@/icons/EyeIcon';
import LoginImg from '@/icons/LoginImg';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
  const [pswStyle, setPswStyle] = useState(false);

  const handleButtonEye = () => {
    setPswStyle(!pswStyle);
  };
  return (
    <div className="flex w-[100%] bg-background">
      <div className="flex justify-center items-center w-[50%]">
        <LoginImg />
      </div>
      <div className="flex justify-center items-center w-[50%]">
        <form
          className="flex flex-col justify-center items-center gap-6 w-[27rem]"
          action=""
        >
          <h1 className="text-4xl mb-2">Iniciar sesión</h1>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="">Email</label>
            <input
              className="h-10 rounded-md pl-4"
              type="text"
              placeholder="Ingrese su email"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="">Contraseña</label>
            <div className="flex items-center relative w-full">
              <input
                className="w-full h-10 rounded-md pl-4"
                type={`${pswStyle ? 'text' : 'password'}`}
                placeholder="Ingrese su email"
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
              <Link className="text-[#3A57E8]" href={'/login'}>
                Olvide mi Contraseña
              </Link>
            </div>
          </div>
          <button
            className="bg-primary text-stone-50 px-12 py-3 rounded-2xl mt-10"
            type="submit"
          >
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
