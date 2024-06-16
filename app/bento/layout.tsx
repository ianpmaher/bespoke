// app/layout.tsx
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-100 p-4 mt-40 text-black text-center">
            
            <div className="mt-4">{children}</div>
        </div>
    );
};

export default Layout;
