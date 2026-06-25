import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard } from "lucide-react";
import { ListTodo } from 'lucide-react';
import { Box } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';
import { SquareUserRound} from 'lucide-react';
import { UserCog } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { Bug } from 'lucide-react';
import { Settings } from 'lucide-react';
import { CircleQuestionMark } from 'lucide-react';
import type { LucideIcon } from "lucide-react";

type NavItem = {
    title: string;
    url: string;
    icon: LucideIcon;
}

type NavGroup = {
    title: string;
    items: NavItem[];
}

type AppSidebarProps = {
    isCollapsed: boolean;
}

const navGroups: NavGroup[] = [
    {
        title: 'General',
        items: [
            {
                title: 'Dashboard',
                url: '/',
                icon: LayoutDashboard,
            },
            {
                title: 'Tasks',
                url: '/tasks',
                icon: ListTodo,
            },
            {
                title: 'Apps',
                url: '/apps',
                icon: Box,
            },
            {
                title: 'Chats',
                url: '/chats',
                icon: MessageSquareMore,
            },
            {
                title: 'Users',
                url: '/users',
                icon: SquareUserRound,
            },
            {
                title: 'Secured by Clerk',
                url: '/secured-by-clerk',
                icon: UserCog,
            }
        ]
    },
    {
        title: 'Pages',
        items: [
            {
                title: 'Auth',
                url: '/auth',
                icon: ShieldCheck,
            },
            {
                title: 'Errors',
                url: '/errors',
                icon: Bug,
            }
        ]
    },
    {
        title: 'Other',
        items: [
            {
                title: 'Settings',
                url: '/settings',
                icon: Settings,
            },
            {
                title: 'Help Center',
                url: '/help-center',
                icon: CircleQuestionMark,
            }
        ]
    }
]

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