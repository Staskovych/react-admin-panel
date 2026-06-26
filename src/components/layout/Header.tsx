import { useLocation, Link } from 'react-router-dom';
import { navGroups } from '@/config/navigation';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'; 
import { Button } from '@/components/ui/button';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

type HeaderProps = {
  toggleSidebar: () => void;
  isCollapsed: boolean;
}

export function Header({ toggleSidebar, isCollapsed }: HeaderProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const currentGroup = navGroups.find(group => group.items.some(item => item.url === currentPath));
  const currentItem = currentGroup?.items.find(item => item.url === currentPath);

  return (
    <header className="flex items-center gap-4 px-4 py-2 border-b shrink-0 border-slate-800">
      <Button type="button" onClick={toggleSidebar}>
        {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
      </Button> 
      <Breadcrumb className="border-l border-slate-700 pl-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="hover:text-slate-200">
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-slate-400">{currentItem?.title}</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  )
}