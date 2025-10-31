// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
    title: "3D Printing Filament Tier List",
    description:
        "Pros, cons, safety notes, and use cases for 3D printing filaments.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body className="bg-background text-foreground">
                {children}
            </body>
        </html>
    );
}
