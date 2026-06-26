import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';
import { navGroups } from '@/config/navigation';

type AppSidebarProps = {
    isCollapsed: boolean;
}

export function AppSidebar( { isCollapsed }: AppSidebarProps) {
    return (
        <nav className="p-4 space-y-10">
        {navGroups.map((group) => (
            <div key={group.title} className="space-y-2">
                {!isCollapsed && <p className="text-slate-300 text-xs">{group.title}</p>}
                    {group.items.map((item) => (
                        <NavLink 
                            to={item.url} 
                            end={item.url === '/'} 
                            key={item.url}
                            className={({ isActive }) => 
                               cn(
                                "flex items-center gap-2 text-slate-100 rounded-md px-2 py-1.5",
                                isActive ? 'bg-slate-800' : 'hover:bg-slate-800/80'
                               ) 
                            }
                        >
                            <item.icon className="w-4 h-4" />
                            {!isCollapsed && item.title}
                        </NavLink>
                    ))}
            </div>
        ))}
        </nav>
    );
}