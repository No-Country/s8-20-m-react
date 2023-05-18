import RegisterImg from "@/icons/RegisterImg";
import Link from "next/link";

const Register = () => {
  return (<div className="p-4 bg-background min-h-full lg:flex lg:justify-center lg:gap-24">

    <div className="hidden lg:block">

      <RegisterImg />
    </div>

    <div>

      <div className="mb-8">
        <h1 className="text-3xl text-center mb-2">Registrate</h1>
        <h2 className="text-base text-center">Completá tus datos para comenzar.</h2>
      </div>

      <form className="grid gap-6 grid-cols-1 sm:mx-36 lg:mx-0 lg:grid-cols-2 lg:gap-y-6 lg:gap-x-2">

        <label className="flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-1" htmlFor="">Nombre
          <input className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type="text" placeholder="Ej.: Juan" />
        </label>

        <label className="flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-2" htmlFor="">Apellido
          <input className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type="text" placeholder="Ej.: Gómez" />
        </label>

        <label className="flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-1" htmlFor="">Email
          <input className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type="text" placeholder="Ej.: nombre@gmail.com" />
        </label>

        <label className="flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-2" htmlFor="">Teléfono celular
          <input className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type="text" placeholder="Ej.: 1123456789" />
        </label>

        <label className="flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-1" htmlFor="">Localidad
          <input className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type="text" placeholder="Ej.: Santa Fé" />
        </label>

        <label className="flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-2" htmlFor="">Cédigo postal
          <input className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type="text" placeholder="Ej.: 3000" />
        </label>

        <label className="flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-1" htmlFor="">Contraseña
          <input className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type="text" />
        </label>

        <label className="flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-2" htmlFor="">Repetir contraseña
          <input className="rounded py-2 px-4 placeholder:text-neutro placeholder:text-base" type="text" />
        </label>

        <label htmlFor="" className="text-xs flex gap-2 text-center mb-11 lg:col-span-2 lg:mb-7 lg:mt-6">
          <input type="radio" className="w-6 h-6 block" />
          Acepto los <Link className="text-link contents" href="#">Términos y condiciones</Link>, la <Link className="text-link contents" href="#">Política de privacidad</Link> y la <Link className="text-link contents" href="#">Política de Cookies</Link>.
        </label>

        <button type="submit" className="bg-primary text-stone-50 px-12 py-3 rounded-2xl mb-4 sm:mx-auto sm:mt-[-2rem] sm:mb-8 md:w-48 md:self-center lg:col-span-2 lg:place-self-center">Registrarme</button>
      </form>
      <div className="text-sm text-center">
        <p>¿Ya tenés una cuenta? <Link className="text-link underline" href="/login">Iniciá sesión</Link></p>
      </div>
    </div>

  </div>);
};

export default Register;
