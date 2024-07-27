export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="dark:bg-black dark:text-white h-[100vh] flex items-center justify-center">
            {children}
        </main>
    );
}
