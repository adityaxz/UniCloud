import StudentLayout from "@/components/StudentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const StudentSupport = () => {
  const teachers = [
    { name: "Dr. Sarah Johnson", subject: "Mathematics", status: "online" },
    { name: "Prof. Michael Chen", subject: "Physics", status: "offline" },
    { name: "Dr. Emily Brown", subject: "Chemistry", status: "online" },
    { name: "Prof. David Wilson", subject: "English", status: "offline" },
    { name: "Dr. Lisa Anderson", subject: "Computer Science", status: "online" },
  ];

  return (
    <StudentLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Teacher Support</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Your Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {teachers.map((teacher) => (
                  <div
                    key={teacher.name}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                  >
                    <Avatar>
                      <AvatarFallback>{teacher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{teacher.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{teacher.subject}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${teacher.status === 'online' ? 'bg-success' : 'bg-muted-foreground'}`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Dr. Sarah Johnson</CardTitle>
                  <p className="text-sm text-muted-foreground">Mathematics</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-[400px] bg-muted/30 rounded-lg p-4 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">SJ</AvatarFallback>
                      </Avatar>
                      <div className="bg-card p-3 rounded-lg max-w-[70%]">
                        <p className="text-sm">Hello! How can I help you today?</p>
                        <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 justify-end">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[70%]">
                        <p className="text-sm">I have a question about the calculus assignment.</p>
                        <p className="text-xs opacity-80 mt-1">10:32 AM</p>
                      </div>
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">JD</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Input placeholder="Type your message..." />
                  <Button size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentSupport;
