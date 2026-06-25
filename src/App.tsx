import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { DashboardPage } from './features/dashboard/DashboardPage';
import { TasksPage } from './features/tasks/TasksPage';
import { AppsPage } from './features/apps/AppsPage';
import { ChatsPage } from './features/chats/ChatsPage';
import { UsersPage } from './features/users/UsersPage';
import { ClerkPage } from './features/clerk/ClerkPage';
import { AuthPage } from './features/auth/AuthPage';
import { ErrorsPage } from './features/errors/ErrorsPage';
import { SettingsPage } from './features/settings/SettingsPage';
import { HelpCenter } from './features/help-center/HelpCenter';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/secured-by-clerk" element={<ClerkPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/errors" element={<ErrorsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help-center" element={<HelpCenter />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
