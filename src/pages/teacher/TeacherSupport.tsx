import TeacherLayout from "@/components/TeacherLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const TeacherSupport = () => {
  const students = [
    { name: "John Doe", class: "CS-3A", status: "online" },
    { name: "Jane Smith", class: "CS-3A", status: "offline" },
    { name: "Mike Johnson", class: "CS-3B", status: "online" },
    { name: "Sarah Williams", class: "CS-3B", status: "offline" },
    { name: "David Brown", class: "CS-3A", status: "online" },
  ];

  return (
    <TeacherLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Student Support</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Your Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {students.map((student) => (
                  <div
                    key={student.name}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                  >
                    <Avatar>
                      <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{student.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{student.class}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${student.status === 'online' ? 'bg-success' : 'bg-muted-foreground'}`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">John Doe</CardTitle>
                  <p className="text-sm text-muted-foreground">CS-3A</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-[400px] bg-muted/30 rounded-lg p-4 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex gap-3 justify-end">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[70%]">
                        <p className="text-sm">I have a question about the calculus assignment.</p>
                        <p className="text-xs opacity-80 mt-1">10:32 AM</p>
                      </div>
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">JD</AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">YO</AvatarFallback>
                      </Avatar>
                      <div className="bg-card p-3 rounded-lg max-w-[70%]">
                        <p className="text-sm">Sure! Which part are you having trouble with?</p>
                        <p className="text-xs text-muted-foreground mt-1">10:35 AM</p>
                      </div>
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
    </TeacherLayout>
  );
};

export default TeacherSupport;
