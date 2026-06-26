import { LayoutDashboard } from "lucide-react";
import { ListTodo } from 'lucide-react';
import { Box } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';
import { SquareUserRound } from 'lucide-react';
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

export const navGroups: NavGroup[] = [
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