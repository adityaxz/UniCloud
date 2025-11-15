import TeacherLayout from "@/components/TeacherLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const TeacherTimetable = () => {
  const mySchedule = [
    { day: "Monday", slots: [
      { time: "9:00-10:00", subject: "Mathematics", class: "CS-3A", room: "A-101" },
      { time: "11:30-12:30", subject: "Mathematics", class: "CS-3B", room: "A-102" },
      { time: "2:00-3:00", subject: "Data Structures", class: "CS-3A", room: "D-401" },
    ]},
    { day: "Tuesday", slots: [
      { time: "10:00-11:00", subject: "Mathematics Lab", class: "CS-3A", room: "Lab-2" },
      { time: "2:00-3:00", subject: "Data Structures", class: "CS-3B", room: "D-402" },
    ]},
  ];

  const classSchedules = [
    {
      class: "CS-3A",
      schedule: [
        { day: "Monday", slots: [
          { time: "9:00-10:00", subject: "Mathematics", teacher: "You" },
          { time: "10:00-11:00", subject: "Physics", teacher: "Dr. Chen" },
          { time: "2:00-3:00", subject: "Data Structures", teacher: "You" },
        ]},
      ],
    },
  ];

  return (
    <TeacherLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Timetable Management</h1>
          <p className="text-muted-foreground">View your schedule and class timetables</p>
        </div>

        <Tabs defaultValue="my-schedule" className="space-y-4">
          <TabsList>
            <TabsTrigger value="my-schedule">My Schedule</TabsTrigger>
            <TabsTrigger value="class-schedule">Class Schedules</TabsTrigger>
          </TabsList>

          <TabsContent value="my-schedule" className="space-y-4">
            {mySchedule.map((day) => (
              <Card key={day.day}>
                <CardHeader>
                  <CardTitle className="text-lg">{day.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {day.slots.map((slot, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                        <Clock className="w-5 h-5 text-muted-foreground mt-1" />
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="font-semibold">{slot.subject}</p>
                              <p className="text-sm text-muted-foreground mt-1">
                                {slot.time} • Class {slot.class} • Room {slot.room}
                              </p>
                            </div>
                            <Badge variant="outline">{slot.class}</Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="class-schedule" className="space-y-4">
            {classSchedules.map((classData) => (
              <Card key={classData.class}>
                <CardHeader>
                  <CardTitle>Class {classData.class} Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  {classData.schedule.map((day) => (
                    <div key={day.day} className="mb-6 last:mb-0">
                      <h3 className="font-semibold mb-3">{day.day}</h3>
                      <div className="space-y-2">
                        {day.slots.map((slot, idx) => (
                          <div key={idx} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                            <div className="w-24 text-sm text-muted-foreground">{slot.time}</div>
                            <div className="flex-1">
                              <p className="font-medium">{slot.subject}</p>
                              <p className="text-sm text-muted-foreground">{slot.teacher}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </TeacherLayout>
  );
};

export default TeacherTimetable;
