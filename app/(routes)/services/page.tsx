import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container-page";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid  justify-center items-center max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px]">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis <span className="font-bold text-secondary"> Servicios</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300">
            Ofrezco servicios de desarrollo web frontend para la creación de
            sitios web y aplicaciones atractivas y funcionales. Utilizando las
            últimas tecnologías, NextJS, NestJs, React,typescript,Node, diseño
            interfaces de usuario intuitivas y responsivas que reflejan la
            identidad de marca y mejoran los procesos de negocio.
          </p>
          <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
            Contacta conmigo
          </button>
        </div>

        <div>
          <SliderServices />
        </div>
      </div>
    </ContainerPage>
  );
};

export default ServicesPage;
