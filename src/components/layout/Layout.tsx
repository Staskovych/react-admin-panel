import type { ReactNode } from 'react';
import { AppSidebar } from './AppSidebar';

type LayoutProps = {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-slate-900">
                <AppSidebar />
            </aside>
            <main className="flex-1 bg-slate-950 text-slate-100">
                {children}
            </main>
        </div>
    );
}