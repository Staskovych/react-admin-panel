import type { ReactNode } from 'react';
import { AppSidebar } from './AppSidebar';
import { cn } from '@/lib/utils';
import { Header } from './Header';
import { useState } from 'react';

type LayoutProps = {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(prev => !prev);
    }

    return (
        <div className="flex min-h-screen">
            <aside className={cn(
                "bg-slate-900 transition-all duration-300 ease-in-out",
                 isCollapsed ? "w-16" : "w-64"
                 )}> 
                <AppSidebar isCollapsed={isCollapsed}/>
            </aside>
            <main className="flex flex-col flex-1 bg-slate-950 text-slate-100"> 
                <Header toggleSidebar={toggleSidebar} isCollapsed={isCollapsed}/>
                {children}
            </main>
        </div>
    );
}