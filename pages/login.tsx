import EyeIcon from '@/icons/EyeIcon';
import LoginImg from '@/icons/LoginImg';
import Logo from '@/icons/Logo';
import WarningIcon from '@/icons/WarningIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm, type FieldValues } from 'react-hook-form';

const Login = () => {
  const [pswStyle, setPswStyle] = useState<boolean>(false);

  const handleButtonEye = () => {
    setPswStyle(!pswStyle);
  };

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {

    const loginData = {
      email: data.email,
      password: data.password
    }

    // fetch
    fetch('http://localhost:3030/api/users/login', {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((json) => {
            console.log("token: ", json)
          });
          // mensaje de confirmación
          reset()
          alert("Ingresando...")
          router.push('/')
          return;
        }
        // mensaje de error
        console.log(res)
        alert('Credenciales invalidas');
      })
    // 
  };



  return (
    <div className="flex justify-center items-center w-[100%] bg-background pb-24 px-4">
      <div className="md:flex justify-center items-center w-[50%] min-w-[320px] hidden">
        <LoginImg />
      </div>
      <div className="flex flex-col justify-center items-center md:w-[50%] w-full">
        <form
          className="flex flex-col justify-center items-center gap-6 max-w-[27rem] min-w-[18rem] w-[80%]"
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit(onSubmit)();
          }}
        >
          <Link href={'/'} className="md:hidden mt-14">
            <Logo />
          </Link>
          <h1 className="text-4xl mb-2">Iniciar sesión</h1>
          <p className="md:hidden text-base">
            Completá tus datos para comenzar.
          </p>
          <div className="flex flex-col gap-2 w-full">

            <label className={`${errors.email && "text-[#FF0000] relative"} flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-1`} htmlFor="email">Email
              <input {...register("email", { required: true })} className={`${errors.email && "border-[1.5px] border-[#FF0000]"} rounded py-2 px-4 placeholder:text-neutro placeholder:text-base hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)] transition-all focus:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]`} type="text" placeholder="Ingrese su email" />
              {errors.email && <div
                className="absolute right-1 bottom-1"
              >
                <WarningIcon />
              </div>}
            </label>

            <label className={`${errors.password && "text-[#FF0000] relative"} flex flex-col gap-2 text-xs text-gray relative col-auto lg:col-start-1`} htmlFor="password">Contraseña
              <input {...register("password", { required: true })} className={`${errors.password && "border-[1.5px] border-[#FF0000]"} rounded py-2 px-4 placeholder:text-neutro placeholder:text-base hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)] transition-all focus:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]`} type={`${pswStyle ? 'text' : 'password'}`} placeholder="Ingrese su contraseña" />

              <button
                className="absolute right-1 bottom-1"
                type="button"
                onClick={handleButtonEye}
              >
                <EyeIcon />
              </button>

            </label>

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
          <button type="submit" className="bg-primary text-stone-50 px-8 py-3 sm:mt-4 rounded-2xl mb-4 sm:mx-auto sm:mt-[-2rem] sm:mb-8 md:w-48 md:self-center lg:col-span-2 lg:place-self-center transition-all active:bg-[#d25c5c] hover:bg-[#a22424] hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)]">Iniciar Sesión</button>
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
