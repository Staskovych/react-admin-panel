import type { ReactNode } from 'react';
import { useState } from 'react';
import { AppSidebar } from './AppSidebar';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

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
                <div className='flex justify-end px-4 pt-4'>
                <Button type="button" onClick={toggleSidebar}>
                    {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
                </Button>
                </div>
                <AppSidebar isCollapsed={isCollapsed}/>
            </aside>
            <main className="flex-1 bg-slate-950 text-slate-100">
                {children}
            </main>
        </div>
    );
}