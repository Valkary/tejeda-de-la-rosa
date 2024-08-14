import { ReactNode, useEffect, useState } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

import { PenIcon, BookOpenIcon, FactoryIcon, FileLock2Icon, HandshakeIcon, ScaleIcon, ShoppingCartIcon, HousePlusIcon, Building2Icon, LandmarkIcon } from "lucide-react";

type Service = {
    title: string,
    description: string,
    icon: ReactNode
};

const services: Service[] = [
    {
        title: "DERECHO CORPORATIVO",
        description: "Constitución y estructuración de sociedades civiles, mercantiles, financieras, agrarias y especiales, así como llevar el control societario.",
        icon: <PenIcon />
    },
    {
        title: "PROPIEDAD INDUSTRIAL",
        description: "Registro de marcas, avisos comerciales, patentes, diseños industriales y modelos de utilidad, así como derechos de autor.",
        icon: <FactoryIcon />
    },
    {
        title: "FUSIONES Y ADQUISICIONES",
        description: "Acompañamiento y asesoría en el proceso y gestión de compra y/o venta de la empresa.",
        icon: <BookOpenIcon />
    },
    {
        title: "PROTECCIÓN DE DATOS PERSONALES",
        description: "Auditoria en el manejo y la protección de datos personales.",
        icon: <FileLock2Icon />
    },
    {
        title: "CONTRACTUAL",
        description: "Negociaciones contractuales y comerciales; contratos mercantiles, civiles y administrativos, entre otros.",
        icon: <HandshakeIcon />
    },
    {
        title: "LITIGIO Y SOLUCIÓN DE CONTROVERSIAS",
        description: "Litigios en las materias civil y mercantil. Procedimientos alternativos de solución de controversias, tales como el arbitraje, la mediación y la conciliación.",
        icon: <ScaleIcon />
    },
    {
        title: "COMERCIO ELECTRÓNICO",
        description: "Auditoría legal de páginas web respecto a la prestación de servicios de información y comercio electrónico.",
        icon: <ShoppingCartIcon />
    },
    {
        title: "LITIGIO PENAL",
        description: "Atención de delitos patrimoniales, fraude, abuso de confianza, administración fraudulenta, despojo.",
        icon: <LandmarkIcon />
    },
    {
        title: "ADMINISTRACIÓN DE INMUEBLES",
        description: "Elaboración de los contratos de arrendamiento, usufructo, comodato, fideicomiso entre otros, conforme a las necesidades comerciales del cliente.",
        icon: <HousePlusIcon />
    },
    {
        title: "INMOBILIARIO E INFRAESTRUCTURA",
        description: "Adquisición o transmisión de inmuebles, gravámenes y auditoría legal de inmuebles y desarrollos inmobiliarios.",
        icon: <Building2Icon />
    }
];

export default function Services() {
    const [isInView, setIsInView] = useState(false);
    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: "-400px",
    });

    useEffect(() => {
        if (entry && entry.isIntersecting) setIsInView(true);
    }, [entry])

    return (
        <section id="servicios" className="flex flex-col gap-5 w-full min-h-[80vh] relative sm:py-10 sm:px-20">
            <h2 className="z-10 text-4xl text-white font-bold uppercase tracking-wider text-center mb-5 underline underline-offset-4 decoration-tejeda-accent">
                Servicios
            </h2>

            <img
                className="h-full w-full absolute object-cover object-center top-0 left-0"
                src="/fondo-servicios.png"
                alt="Fondo servicios"
            />

            <div className="z-10 w-full h-full">
                <ul
                    ref={ref}
                    className={`container max-w-7xl grid grid-cols-1 md:grid-cols-2 items-start gap-4 transition-opacity duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}
                >
                    {services.map(({ title, icon, description }, index) => (
                        <li
                            key={index}
                            className={`flex items-center text-white transform transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                            style={{ transitionDelay: `${index * 0.3}s` }}
                        >
                            <div className="w-1/5 flex items-center justify-center">
                                <div className="w-12 aspect-square rounded-full bg-white text-black flex items-center justify-center">
                                    {icon}
                                </div>
                            </div>
                            <div className="w-4/5 flex flex-col gap-2">
                                <h4 className="text-tejeda-accent uppercase tracking-wider font-bold">{title}</h4>
                                <p className="text-justify">{description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
