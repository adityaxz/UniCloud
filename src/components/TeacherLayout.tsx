import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  ClipboardList, Clock, MessageCircle, Wallet, 
  Calendar, FileSignature, LogOut 
} from "lucide-react";

interface TeacherLayoutProps {
  children: ReactNode;
}

const TeacherLayout = ({ children }: TeacherLayoutProps) => {
  const navItems = [
    { to: "/teacher/syllabus", icon: ClipboardList, label: "Syllabus" },
    { to: "/teacher/timetable", icon: Clock, label: "Timetable" },
    { to: "/teacher/support", icon: MessageCircle, label: "Support" },
    { to: "/teacher/salary", icon: Wallet, label: "Salary & Tasks" },
    { to: "/teacher/calendar", icon: Calendar, label: "Calendar" },
    { to: "/teacher/leave", icon: FileSignature, label: "Leave" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Teacher Portal</h1>
          <NavLink to="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </NavLink>
        </div>
      </header>
      
      <div className="flex">
        <aside className="w-64 bg-card border-r border-border min-h-[calc(100vh-73px)] p-4">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>
        
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default TeacherLayout;
