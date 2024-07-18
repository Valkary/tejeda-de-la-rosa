import {
    Menu,
    Package2,
} from "lucide-react"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type RouteNames = "nosotros" | "servicios" | "valor" | "contacto";
type Routes = Record<RouteNames, {
    route: string,
    title: string,
}>;

const routes: Routes = {
    nosotros: {
        route: "#nosotros",
        title: "Nosotros"
    },
    servicios: {
        route: "#servicios",
        title: "Servicios"
    },
    valor: {
        route: "#valor-agregado",
        title: "Valor agregado"
    },
    contacto: {
        route: "#contacto",
        title: "Contacto"
    }
}

export function Navbar() {
    return <header className="sticky top-0 flex h-16 md:h-24 items-center gap-4 border-b bg-background px-4 md:px-6 bg-tejeda-primary">
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
                    <nav className="grid gap-6 text-lg uppercase font-bold tracking-tight">
                        <a
                            href="#"
                            className="flex items-center gap-2 text-lg font-semibold md:text-base"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">TEJEDA DE LA ROSA</span>
                        </a>

                        {
                            Object.keys(routes).map(key => {
                                return <a href={routes[key].route} className="hover:text-foreground">
                                    {routes[key].title}
                                </a>
                            })
                        }
                    </nav>
                </SheetContent>
            </Sheet>
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                {
                    Object.keys(routes).map(key => {
                        return <a
                            href={routes[key].route}
                            className="text-white transition-colors hover:text-foreground uppercase font-bold tracking-tight"
                        >
                            {routes[key].title}
                        </a>
                    })
                }
            </nav>
        </div>
    </header>
}
