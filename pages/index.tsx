import Spiral from '@/icons/Spiral';
import Spiral2 from '@/icons/Spiral2';
import Waves from '@/icons/Waves';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();


  return (
    <div className="bg-white relative">
      <div className="absolute top-0 left-0 z-0">
        <Spiral />
      </div>

      <div className="flex items-center justify-evenly">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-8xl relative z-10">
            Dales un{' '}
            <span className="text-primary">
              nuevo
              <br />
              propósito
            </span>
            ❤️
          </h1>

          <p className="text-lg relative z-10">
            Somos Donare, un espacio para que las cosas que ya no usas <br />{' '}
            obtengan una segunda vida. Dona y ayuda a construir un <br /> futuro
            mas solidario y sustentable.
          </p>
          <div className="relative z-10">
            <button className="bg-primary p-3 px-20 rounded-2xl cursor-pointer text-lg text-white font-bold hover:bg-red-900 transition-colors" onClick={() => { router.push('/donation') }} >
              Quiero donar
            </button>
          </div>
        </div>
        <div>
          <Image src="/hero.png" alt="hero" width={600} height={600} />
        </div>
      </div>
      <div className="pt-8">
        <h2 className="text-4xl text-center p-4">¿Cómo funciona Donare?</h2>
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center text-lg">
            <Image src="/home1.png" alt="home1" width={150} height={150} />
            <p>Crea una cuenta</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/home2.png" alt="home2" width={150} height={150} />
            <p className="text-center">
              Elegi el producto que <br /> quieras donar
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/home3.png" alt="home3" width={150} height={150} />
            <p>Publicalo</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/home4.png" alt="home4" width={150} height={150} />
            <p className="text-center">
              Espera que alguien <br /> se contacte con vos
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/home5.png" alt="home5" width={150} height={150} />
            <p className="text-center">
              Acorda horario y <br /> punto de encuentro <br /> para entregar tu{' '}
              <br /> producto
            </p>
          </div>
        </div>
      </div>
      <div className="pt-16 relative">
        <div className="absolute right-0 z-10">
          <Spiral2 />
        </div>
        <div className="relative z-20">
          <h2 className="text-4xl text-center p-4">
            ¿Por qué donar a través <br />
            de Donare?
          </h2>
          <div className="p-8">
            <div className="flex flex-row gap-x-4 justify-center">
              <div className="">
                <div className="bg-secondary rounded-3xl mb-4 p-8 pr-0 w-[600px] h-[400px]">
                  <div className="flex">
                    <div>
                      <p className="text-3xl font-bold pb-4">Impacto real</p>
                      <p className="w-3/4 text-lg">
                        Tu donación transforma vidas. Cada producto donado puede
                        hacer la diferencia en la vida de alguien más.
                      </p>
                    </div>
                    <div>
                      <Image
                        src="/empathy1.png"
                        alt="impacto"
                        width={800}
                        height={400}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-[#FACCC9] rounded-3xl p-8 pr-0 w-[600px] h-[400px]">
                  <div className="flex">
                    <div>
                      <p className="text-3xl font-bold pb-4">
                        Sostenibilidad y <br /> reutilización
                      </p>
                      <p className="text-lg">
                        Ayudá a reducir el desperdicio y creá un impacto
                        positivo en tu entorno.
                      </p>
                    </div>
                    <div>
                      <Image
                        src="/cajaPlanta1.png"
                        alt="impacto"
                        width={800}
                        height={400}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className=" bg-[#FFC4C7] rounded-3xl mb-4 p-8 pr-0 w-[600px] h-[400px]">
                  <div className="flex">
                    <div>
                      <p className="text-3xl font-bold pb-4">
                        Comodidad y <br /> facilidad
                      </p>
                      <p className="w-3/4 text-lg">
                        Publicá los productos que querés donar de manera fácil y
                        encontrá a personas interesadas en ellos en minutos.
                      </p>
                    </div>
                    <div>
                      <Image
                        src="/Donar1.png"
                        alt="impacto"
                        width={800}
                        height={400}
                      />
                    </div>
                  </div>
                </div>
                <div className=" bg-[#FF9E94] rounded-3xl p-8 pr-0 w-[600px] h-[400px]">
                  <div className="flex">
                    <div>
                      <p className="text-3xl font-bold pb-4">
                        Gratitud y <br /> reconocimiento
                      </p>
                      <p className="w-3/4 text-lg">
                        Celebramos tu generosidad y te ofrecemos nuestro
                        agradecimiento sincero por contribuir a construir un
                        mundo mejor.
                      </p>
                    </div>
                    <div>
                      <Image
                        src="/mutual_donation.png"
                        alt="impacto"
                        width={800}
                        height={400}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Waves />
        <div className="pt-16">
          <h2 className="text-4xl text-center p-4">Lo mas buscado</h2>
        </div>
      </div>
    </div>
  );
}
