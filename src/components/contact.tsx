import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea";
import { Button } from "@/components/ui/button"
import { MailIcon } from "lucide-react";

const formSchema = z.object({
    name: z.string()
        .min(5, { message: 'Debe ser mayor a 5 caracteres' })
        .max(50, { message: 'Debe ser menor a 50 caracteres' }),
    email: z.string().email({ message: 'Ingrese un mail válido' }),
    phone: z.string()
        .min(10, { message: 'Debe ser un número de teléfono válido' })
        .max(14, { message: 'Debe ser un número de teléfono válido' }),
    message: z.string()
        .min(10, { message: 'Debe ser mayor a 10 caracteres' })
        .max(300, { message: 'Debe ser menor a 300 caracteres' }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function Contact() {
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    function onSubmit(values: FormSchemaType) {
        // Enviar mail
        console.log("Enviar mail", values)
    }

    return <section id="contacto" className="flex w-full relative sm:py-10 sm:px-20">
        <img
            className="h-full w-full absolute object-cover object-center top-0 left-0"
            src="/fondo-contacto.png"
            alt="Fondo contacto"
        />

        <Card className="z-10 w-full md:w-4/5 lg:w-3/5 rounded-none sm:rounded-sm">
            <CardHeader>
                <CardTitle className="text-4xl font-bold uppercase tracking-wider text-center mb-5 underline underline-offset-4 decoration-tejeda-accent">Contacto</CardTitle>
                <CardDescription>
                    Ponte en contacto con nuestro equipo de profesionales en servicios jurídicos.
                </CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent className="grid gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre completo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ingrese su nombre completo" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Correo electrónico</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ingrese su email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Número de teléfono</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ingrese su número telefónico" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mensaje</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Ingrese aquí su mensaje"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">
                            <MailIcon className="mr-2 h-4 w-4" />
                            Enviar
                        </Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    </section>
}