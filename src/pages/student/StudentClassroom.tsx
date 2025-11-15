import StudentLayout from "@/components/StudentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const StudentClassroom = () => {
  const clubs = [
    { name: "Drama Club", members: 45, color: "bg-purple-500" },
    { name: "Music Society", members: 32, color: "bg-pink-500" },
    { name: "Tech Club", members: 67, color: "bg-blue-500" },
    { name: "Sports Team", members: 89, color: "bg-green-500" },
  ];

  const timetable = [
    { day: "Monday", slots: [
      { time: "9:00-10:00", subject: "Mathematics", room: "A-101" },
      { time: "10:00-11:00", subject: "Physics", room: "B-205" },
      { time: "11:30-12:30", subject: "Chemistry", room: "C-301" },
      { time: "2:00-3:00", subject: "English", room: "A-105" },
    ]},
    { day: "Tuesday", slots: [
      { time: "9:00-10:00", subject: "Computer Science", room: "D-401" },
      { time: "10:00-11:00", subject: "Mathematics", room: "A-101" },
      { time: "11:30-12:30", subject: "Physics Lab", room: "B-Lab" },
    ]},
  ];

  return (
    <StudentLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Classroom</h1>

        <Tabs defaultValue="classes" className="space-y-4">
          <TabsList>
            <TabsTrigger value="classes">Class Sections</TabsTrigger>
            <TabsTrigger value="clubs">Clubs</TabsTrigger>
            <TabsTrigger value="timetable">Timetable</TabsTrigger>
          </TabsList>

          <TabsContent value="classes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Section A - Computer Science</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">Class Group Chat</p>
                      <p className="text-sm text-muted-foreground">65 students</p>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Connect with your classmates, share notes, and collaborate on group projects.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clubs" className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {clubs.map((club) => (
                <Card key={club.name}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${club.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                        {club.name[0]}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{club.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{club.members} members</p>
                        <Badge variant="outline">Group Chat</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timetable" className="space-y-4">
            {timetable.map((day) => (
              <Card key={day.day}>
                <CardHeader>
                  <CardTitle className="text-lg">{day.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {day.slots.map((slot, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <div className="flex-1">
                          <p className="font-medium">{slot.subject}</p>
                          <p className="text-sm text-muted-foreground">{slot.time} • Room {slot.room}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </StudentLayout>
  );
};

export default StudentClassroom;
