import {
    Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DialogTitle } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useAnimationControls } from "framer-motion";

type RouteNames = "nosotros" | "servicios" | "valor" | "contacto";
type Routes = Record<RouteNames, {
    route: string,
    title: string,
}>;

const routes: Routes = {
    nosotros: {
        route: "/#nosotros",
        title: "Nosotros"
    },
    servicios: {
        route: "/#servicios",
        title: "Servicios"
    },
    valor: {
        route: "/#valor-agregado",
        title: "Valor agregado"
    },
    contacto: {
        route: "/#contacto",
        title: "Contacto"
    }
}

export function Navbar() {
    const [currSection, setCurrSection] = useState<RouteNames>("nosotros");
    const [y, setY] = useState(0);

    const sectionControls = useAnimationControls();
    const rectRef = useRef<HTMLDivElement>();

    useEffect(() => {
        const anchor: HTMLAnchorElement = document.querySelector(`#section-${currSection}`);

        if (!anchor || !anchor.parentElement || !rectRef) {
            // sectionControls.set({ opacity: 0 })
            return;
        };

        const parent_rect = anchor.parentElement.getBoundingClientRect();
        const anchor_rect = anchor.getBoundingClientRect();
        const offset_x = anchor_rect.x - parent_rect.x - parent_rect.width + anchor_rect.width;

        sectionControls.start({
            x: offset_x,
            width: anchor_rect.width,
            opacity: 1,
            transition: {
                duration: 0.3
            }
        });
    }, [currSection]);

    useEffect(() => {
        window.addEventListener("scroll", (e) => setY(window.scrollY));
        // @ts-ignore
        const sections: HTMLElement[] = Array.from(document.getElementsByTagName("section"));

        let tmpSection = HTMLElement = null;
        for (let i = 0; i < sections.length; i++) {
            const dy = sections[i].offsetTop - y;
            if (dy < 500)
                tmpSection = sections[i];
        }
        setCurrSection(tmpSection?.id as RouteNames);

        return () => {
            window.removeEventListener("scroll", (e) => setY(window.scrollY));
        };
    }, [y]);

    return <header className="z-50 sticky top-0 flex h-16 md:h-24 items-center gap-4 border-b bg-background px-4 md:px-6 bg-tejeda-primary">
        <a
            href="#"
            className="flex items-center gap-2 text-lg md:text-xl uppercase tracking-tighter font-bold w-full md:w-fit"
        >
            <div className="h-14 aspect-square md:hidden">
                <img
                    alt="Tejeda de la Rosa"
                    src="/logo-sm.png"
                />
            </div>
            <div className="h-20 hidden md:block">
                <img
                    alt="Tejeda de la Rosa"
                    src="/logo-lg.png"
                    className="h-full object-center object-cover"
                />
            </div>
            <span className="md:hidden text-white">TEJEDA DE LA ROSA</span>
        </a>
        <div className="flex justify-end items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Menú de navegación</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <nav className="grid gap-6 text-lg uppercase font-semibold tracking-tight">
                        <a
                            href="#"
                            className="flex items-center gap-2 text-lg font-bold md:text-base"
                        >
                            <div className="h-10 aspect-square md:hidden">
                                <img
                                    alt="Tejeda de la Rosa"
                                    src="/logo-sm.png"
                                />
                            </div>
                            <DialogTitle>
                                TEJEDA DE LA ROSA
                            </DialogTitle>
                        </a>

                        {
                            Object.keys(routes).map(key => {
                                return <a key={key} href={routes[key].route} className="hover:text-foreground">
                                    {routes[key].title}
                                </a>
                            })
                        }
                    </nav>
                </SheetContent>
            </Sheet>

            <motion.div
                ref={rectRef}
                className="z-20 bottom-0 absolute h-2 bg-tejeda-accent"
                animate={sectionControls}
                initial={{ opacity: 1 }}
            />

            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                {
                    Object.keys(routes).map(key => {
                        return <a
                            id={`section-${key}`}
                            key={key}
                            href={routes[key].route}
                            className={`${key === currSection ? "text-tejeda-accent" : "text-white"} transition-colors uppercase font-semibold tracking-widest hover:text-tejeda-accent`}
                        >
                            {routes[key].title}
                        </a>
                    })
                }
            </nav>
        </div>
    </header>
}
