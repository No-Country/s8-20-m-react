import EyeIcon from "@/icons/EyeIcon";
import RegisterImg from "@/icons/RegisterImg";
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
      city: data.city,
      zipcode: data.zipcode,
      password: data.password,
      tyc: data.tyc
    }

    // fetch
    console.log(registerData)

    fetch('/api/users/register', {
      method: 'POST',
      body: JSON.stringify(registerData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((result) => {
        if (result.status === 201) {
          result.json();
          // mensaje de confirmación
          alert('Usuario creado con exito!');
          reset()
          router.push('/login')
        }
        // mensaje de error
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

            <label className="flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-1" htmlFor="name">Nombre
              <input {...register("name", { required: true })} className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type="text" placeholder="Ej.: Juan" />
              {errors.name && <p className="text-sm text-red-500">Por favor ingresa tu nombre</p>}
            </label>

            <label className="flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-2" htmlFor="lastname">Apellido
              <input {...register("lastname", { required: true })} className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type="text" placeholder="Ej.: Gómez" />
              {errors.lastname && <p className="text-sm text-red-500">Por favor ingresa tu apellido</p>}
            </label>

            <label className="flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-1" htmlFor="email">Email
              <input {...register("email", { required: true })} className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type="text" placeholder="Ej.: nombre@gmail.com" />
              {errors.email && <p className="text-sm text-red-500">Por favor ingresa tu email</p>}
            </label>

            <label className="flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-2" htmlFor="telephone">Teléfono celular
              <input {...register("telephone", { required: true })} className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type="text" placeholder="Ej.: 1123456789" />
              {errors.telephone && <p className="text-sm text-red-500">Por favor ingresa tu teléfono celular</p>}
            </label>

            <label className="flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-1" htmlFor="city">Localidad
              <input {...register("city", { required: true })} className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type="text" placeholder="Ej.: Santa Fe" />
              {errors.city && <p className="text-sm text-red-500">Por favor ingresa tu localidad</p>}
            </label>

            <label className="flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-2" htmlFor="zipcode">Código postal
              <input {...register("zipcode", { required: true })} className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type="text" placeholder="Ej.: 3000" />
              {errors.zipcode && <p className="text-sm text-red-500">Por favor ingresa tu código postal</p>}
            </label>

            <label className="flex flex-col gap-2 text-xs text-gray relative col-auto lg:col-start-1" htmlFor="password">Contraseña
              <input {...register("password", { required: true })} className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type={`${pswStyle1 ? 'text' : 'password'}`} />

              <button
                className="absolute right-1 bottom-1"
                type="button"
                onClick={handleButtonEye1}
              >
                <EyeIcon />
              </button>

            </label>
            {errors.password && <p className="text-sm text-red-500 col-auto lg:col-start-1">Por favor ingresa tu contraseña</p>}

            <label className="flex flex-col gap-2 text-xs text-gray relative col-auto lg:row-start-4 lg:col-start-2" htmlFor="repeatPassword">Repetir contraseña
              <input {...register("repeatPassword", { required: true })} className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type={`${pswStyle2 ? 'text' : 'password'}`} />

              <button
                className="absolute right-1 bottom-1"
                type="button"
                onClick={handleButtonEye2}
              >
                <EyeIcon />
              </button>

            </label>
            {errors.repeatPassword && <p className="text-sm text-red-500 col-auto lg:col-start-2">Por favor repite tu contraseña y asegurate que coincide con el campo anterior</p>}

            <label htmlFor="tyc" className="text-xs flex gap-2 text-center mb-11 lg:col-span-2 lg:mb-7 lg:mt-6">
              <input {...register("tyc", { required: true })} type="radio" className="w-6 h-6 block" />
              Acepto los <Link className="text-link contents" href="#">Términos y condiciones</Link>, la <Link className="text-link contents" href="#">Política de privacidad</Link> y la <Link className="text-link contents" href="#">Política de Cookies</Link>.
            </label>
            {errors.tyc && <p className="text-sm text-red-500 mt-[-60px]">Por favor acepta los términos y condiciones</p>}

            <button type="submit" className="bg-primary text-stone-50 px-12 py-3 rounded-2xl mb-4 sm:mx-auto sm:mt-[-2rem] sm:mb-8 md:w-48 md:self-center lg:col-span-2 lg:place-self-center">Registrarme</button>
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
