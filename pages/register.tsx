import EyeIcon from "@/icons/EyeIcon";
import RegisterImg from "@/icons/RegisterImg";
import WarningIcon from "@/icons/WarningIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";

const Register = () => {

  const router = useRouter();

  const [pswStyle1, setPswStyle1] = useState(false);

  const handleButtonEye1 = () => {
    setPswStyle1(!pswStyle1);
  };

  const [pswStyle2, setPswStyle2] = useState(false);

  const handleButtonEye2 = () => {
    setPswStyle2(!pswStyle2);
  };

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {

    if (data.password !== data.repeatPassword) {
      setError('repeatPassword', { type: 'custom', message: 'custom message' })
      return;
    }

    const registerData = {
      first_name: data.name,
      last_name: data.lastname,
      email: data.email,
      telephone: data.telephone,
      localidad: data.city,
      codigo_postal: data.zipcode,
      password: data.password,
    }

    // fetch
    console.log(registerData)

    fetch('http://localhost:3030/api/users/register', {
      method: 'POST',
      body: JSON.stringify(registerData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((result) => {
        if (result.status === 201) {
          console.log(result)
          result.json();
          // mensaje de confirmación
          alert('Usuario creado con exito!');
          reset()
          router.push('/login')
          return;
        }
        // mensaje de error
        console.log(result)
        alert('No se pudo crear el usuario!');
      })
    // 
  };


  return (
    <>
      <div className="p-4 bg-background min-h-full lg:flex lg:justify-center lg:gap-24">

        <div className="hidden lg:block">

          <RegisterImg />
        </div>

        <div>

          <div className="mb-8">
            <h1 className="text-3xl text-center mb-2">Registrate</h1>
            <h2 className="text-base text-center">Completá tus datos para comenzar.</h2>
          </div>

          <form
            className="grid gap-6 grid-cols-1 sm:mx-36 lg:mx-0 lg:grid-cols-2 lg:gap-y-6 lg:gap-x-2"
            onSubmit={(e) => {
              e.preventDefault();
              void handleSubmit(onSubmit)();
            }}
          >

            <label className={`${errors.name && "text-[#FF0000] relative"} flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-1`} htmlFor="name">Nombre
              <input {...register("name", { required: true })} className={`${errors.name && "border-[1.5px] border-[#FF0000]"} rounded py-2 px-4 placeholder:text-neutro placeholder:text-base hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)] transition-all focus:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]`} type="text" placeholder="Ej.: Juan" />
              {errors.name && <div
                className="absolute right-1 bottom-1"
              >
                <WarningIcon />
              </div>}
            </label>

            <label className={`${errors.lastname && "text-[#FF0000] relative"} flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-2`} htmlFor="lastname">Apellido
              <input {...register("lastname", { required: true })} className={`${errors.lastname && "border-[1.5px] border-[#FF0000]"} rounded py-2 px-4 placeholder:text-neutro placeholder:text-base hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)] transition-all focus:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]`} type="text" placeholder="Ej.: Gómez" />
              {errors.lastname && <div
                className="absolute right-1 bottom-1"
              >
                <WarningIcon />
              </div>}
            </label>

            <label className={`${errors.email && "text-[#FF0000] relative"} flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-1`} htmlFor="email">Email
              <input {...register("email", { required: true })} className={`${errors.email && "border-[1.5px] border-[#FF0000]"} rounded py-2 px-4 placeholder:text-neutro placeholder:text-base hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)] transition-all focus:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]`} type="text" placeholder="Ej.: nombre@gmail.com" />
              {errors.email && <div
                className="absolute right-1 bottom-1"
              >
                <WarningIcon />
              </div>}
            </label>

            <label className={`${errors.telephone && "text-[#FF0000] relative"} flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-2`} htmlFor="telephone">Teléfono celular
              <input {...register("telephone", { required: true })} className={`${errors.telephone && "border-[1.5px] border-[#FF0000]"} rounded py-2 px-4 placeholder:text-neutro placeholder:text-base hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)] transition-all focus:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]`} type="text" placeholder="Ej.: 1123456789" />
              {errors.telephone && <div
                className="absolute right-1 bottom-1"
              >
                <WarningIcon />
              </div>}
            </label>

            <label className={`${errors.city && "text-[#FF0000] relative"} flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-1`} htmlFor="city">Localidad
              <input {...register("city", { required: true })} className={`${errors.city && "border-[1.5px] border-[#FF0000]"} rounded py-2 px-4 placeholder:text-neutro placeholder:text-base hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)] transition-all focus:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]`} type="text" placeholder="Ej.: Santa Fe" />
              {errors.city && <div
                className="absolute right-1 bottom-1"
              >
                <WarningIcon />
              </div>}
            </label>

            <label className={`${errors.zipcode && "text-[#FF0000] relative"} flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-2`} htmlFor="zipcode">Código postal
              <input {...register("zipcode", { required: true })} className={`${errors.zipcode && "border-[1.5px] border-[#FF0000]"} rounded py-2 px-4 placeholder:text-neutro placeholder:text-base hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)] transition-all focus:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]`} type="text" placeholder="Ej.: 3000" />
              {errors.zipcode && <div
                className="absolute right-1 bottom-1"
              >
                <WarningIcon />
              </div>}
            </label>

            <label className={`${errors.password && "text-[#FF0000] relative"} flex flex-col gap-2 text-xs text-gray relative col-auto lg:col-start-1`} htmlFor="password">Contraseña
              <input {...register("password", { required: true })} className={`${errors.password && "border-[1.5px] border-[#FF0000]"} rounded py-2 px-4 placeholder:text-neutro placeholder:text-base hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)] transition-all focus:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]`} type={`${pswStyle1 ? 'text' : 'password'}`} />

              <button
                className="absolute right-1 bottom-1"
                type="button"
                onClick={handleButtonEye1}
              >
                <EyeIcon />
              </button>

            </label>

            <label className={`${errors.repeatPassword && "text-[#FF0000] relative"} flex flex-col gap-2 text-xs text-gray relative col-auto lg:row-start-4 lg:col-start-2`} htmlFor="repeatPassword">Repetir contraseña
              <input {...register("repeatPassword", { required: true })} className={`${errors.repeatPassword && "border-[1.5px] border-[#FF0000]"} rounded py-2 px-4 placeholder:text-neutro placeholder:text-base hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)] transition-all focus:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]`} type={`${pswStyle2 ? 'text' : 'password'}`} />

              <button
                className="absolute right-1 bottom-1"
                type="button"
                onClick={handleButtonEye2}
              >
                <EyeIcon />
              </button>

            </label>

            <label htmlFor="tyc" className="text-xs flex gap-2 text-center mb-11 lg:col-span-2 lg:mb-1 lg:mt-6">
              <input {...register("tyc", { required: true })} type="radio" className={`w-6 h-6 rounded accent-primary block hover:drop-shadow-[0px_4px_8px_rgba(0,_0,_0,_0.1)] transition-all focus:drop-[0px_1px_2px_rgba(0,_0,_0,_0.3)]`} />
              Acepto los <Link className="text-link contents" href="#">Términos y condiciones</Link>, la <Link className="text-link contents" href="#">Política de privacidad</Link> y la <Link className="text-link contents" href="#">Política de Cookies</Link>.
            </label>
            {errors.tyc && <p className="text-sm text-red-500 mt-[-60px] lg:col-span-2 lg:mt-1 lg:mb-8 lg:text-center ">Por favor acepta los términos y condiciones</p>}

            <button type="submit" className="bg-primary text-stone-50 px-12 py-3 rounded-2xl mb-4 sm:mx-auto sm:mt-[-2rem] sm:mb-8 md:w-48 md:self-center lg:col-span-2 lg:place-self-center lg:mt-4 transition-all active:bg-[#d25c5c] hover:bg-[#a22424] hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)]">Registrarme</button>
          </form>
          <div className="text-sm text-center">
            <p>¿Ya tenés una cuenta? <Link className="text-link underline" href="/login">Iniciá sesión</Link></p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Register;
