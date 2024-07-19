import { motion } from "framer-motion";
import { ReactNode } from "react";
import { PenIcon, BookOpenIcon, FactoryIcon, FileLock2Icon, HandshakeIcon, ScaleIcon, ShoppingCartIcon, HousePlusIcon, Building2Icon, LandmarkIcon } from "lucide-react";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

type Service = {
    title: string,
    description: string,
    icon: ReactNode
}

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
    return <motion.ul
        className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 items-start gap-4"
        variants={container}
        initial="hidden"
        animate="visible"
    >
        {services.map(({ title, icon, description }, index) => (
            <motion.li key={index} className="flex items-center text-white" variants={item}>
                <div className="w-1/5 flex items-center justify-center">
                    <div className="w-12 aspect-square rounded-full bg-white text-black flex items-center justify-center">
                        {icon}
                    </div>
                </div>
                <div className="w-4/5 flex flex-col gap-2">
                    <h4 className="text-tejeda-accent uppercase tracking-wider font-bold">{title}</h4>
                    <p className="text-justify">{description}</p>
                </div>
            </motion.li>
        ))}
    </motion.ul>
}