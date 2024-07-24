import Link from "next/link";
import { Dumbbell, Menu, Space, Bike, Zap, Pilcrow, Gamepad } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
    return (
        <main className="flex flex-col min-h-[100dvh]">
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <Dumbbell className="h-8 w-8" />
                    <span className="text-xl font-bold">Fitness Hub</span>
                </Link>
                <nav className="hidden md:flex items-center gap-4">
                    <Link href="#" className="hover:underline" prefetch={false}>
                        Classes
                    </Link>
                    <Link href="#" className="hover:underline" prefetch={false}>
                        Membership
                    </Link>
                    <Link href="#" className="hover:underline" prefetch={false}>
                        Contact
                    </Link>
                    <Link
                        href="/login"
                        className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        prefetch={false}
                    >
                        Login
                    </Link>
                </nav>
                <button className="md:hidden">
                    <Menu className="h-6 w-6" />
                </button>
            </header>



            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary/80">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center text-primary-foreground">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                            Elevate Your Fitness Journey
                        </h1>
                        <p className="max-w-[700px] text-lg md:text-xl">
                            Experience the best in fitness at our state-of-the-art gym. Join now and unlock your full potential.
                        </p>
                    </div>
                    <div className="mt-6">
                        <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            Join Now
                        </Link>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Classes</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                From high-intensity interval training to yoga and Pilates, we offer a diverse range of classes to
                                cater to all fitness levels.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                        <div className="grid gap-4">
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <Dumbbell className="h-12 w-12 text-primary" />
                                    <h3 className="mt-4 text-lg font-bold">Strength Training</h3>
                                    <p className="mt-2 text-muted-foreground">Build muscle and improve overall strength.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <Space className="h-12 w-12 text-primary" />
                                    <h3 className="mt-4 text-lg font-bold">Yoga</h3>
                                    <p className="mt-2 text-muted-foreground">Improve flexibility, balance, and mindfulness.</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid gap-4">
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <Bike className="h-12 w-12 text-primary" />
                                    <h3 className="mt-4 text-lg font-bold">Cycling</h3>
                                    <p className="mt-2 text-muted-foreground">Cardio-focused classes to boost your endurance.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <Zap className="h-12 w-12 text-primary" />
                                    <h3 className="mt-4 text-lg font-bold">Zumba</h3>
                                    <p className="mt-2 text-muted-foreground">Dance-inspired fitness classes for a fun workout.</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid gap-4">
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <Gamepad className="h-12 w-12 text-primary" />
                                    <h3 className="mt-4 text-lg font-bold">Kickboxing</h3>
                                    <p className="mt-2 text-muted-foreground">High-intensity cardio and martial arts-inspired moves.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <Pilcrow className="h-12 w-12 text-primary" />
                                    <h3 className="mt-4 text-lg font-bold">Pilates</h3>
                                    <p className="mt-2 text-muted-foreground">Improve core strength, flexibility, and balance.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Have a question or want to learn more about our services? Fill out the form below and we'll be in
                                touch.
                            </p>
                        </div>
                        <div className="w-full max-w-md space-y-2">
                            <form className="flex flex-col gap-4">
                                <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                                <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                                <Textarea placeholder="Message" className="max-w-lg flex-1" />
                                <Button type="submit">Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-primary text-primary-foreground py-6 px-6">
                <div className="container mx-auto max-w-5xl flex items-center justify-between">
                    <p>&copy; 2024 Fitness Hub. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
