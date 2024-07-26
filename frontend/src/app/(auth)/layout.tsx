export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="bg-black h-[100vh] flex items-center justify-center">
            {children}
        </main>
    );
}
