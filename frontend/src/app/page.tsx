import Link from "next/link";
import { Dumbbell, Menu, Space, Bike, Zap, Pilcrow, Gamepad } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContainerScroll } from "@/components/ui/container-scroll-animations";
import { LampContainer } from "@/components/ui/lamp";
import Image from "next/image";

export default function Home() {
    return (
        <main className="bg-black flex flex-col min-h-[100dvh]">
            <header className="fixed z-[100] w-full bg-black bg-opacity-30 backdrop-blur-lg shadow-lg text-primary-foreground py-4 px-6 flex items-center justify-between">
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
                        className="inline-flex items-center justify-center rounded-md bg-primary-foreground
			      px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors
			      hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        prefetch={false}
                    >
                        Login
                    </Link>
                </nav>
                <button className="md:hidden">
                    <Menu className="h-6 w-6" />
                </button>
            </header>

            <div className="absolute inset-0 h-full w-full items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>

            {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary/80">
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
                href="/signup"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
                >
                Join Now
                </Link>
                </div>
                </div>
		</section> */}

            <ContainerScroll
                titleComponent={
                    <>
                        <center className="mb-8">
                            <Button
                                size={'lg'}
                                className="p-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                            >
                                <Link href="/signup" className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                                    Start For Free Today
                                </Link>
                            </Button>
                        </center>
                        <h1 className="relative text-5xl md:text-7xl md:mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                            Elevate Your Fitness Journey
                        </h1>
                    </>
                }
            >
                <Image
                    src="/images/bg-cover"
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>

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
