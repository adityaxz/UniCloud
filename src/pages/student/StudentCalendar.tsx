import StudentLayout from "@/components/StudentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, PartyPopper } from "lucide-react";

const StudentCalendar = () => {
  const events = [
    { date: "Jan 15, 2025", title: "Republic Day", type: "holiday" },
    { date: "Feb 5, 2025", title: "Annual Sports Day", type: "event" },
    { date: "Feb 14, 2025", title: "Science Fair", type: "event" },
    { date: "Mar 8, 2025", title: "Mid-Semester Break", type: "holiday" },
    { date: "Mar 20, 2025", title: "Cultural Fest", type: "event" },
    { date: "Apr 15, 2025", title: "Final Exams Begin", type: "exam" },
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "holiday": return "default";
      case "event": return "secondary";
      case "exam": return "destructive";
      default: return "outline";
    }
  };

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Academic Calendar</h1>
          <p className="text-muted-foreground">Stay updated with holidays and college events</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="w-16 text-center">
                    <div className="bg-primary text-primary-foreground rounded-lg p-2">
                      <div className="text-xs font-semibold">
                        {event.date.split(' ')[0]}
                      </div>
                      <div className="text-lg font-bold">
                        {event.date.split(' ')[1].replace(',', '')}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold mb-1">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <Badge variant={getBadgeVariant(event.type)}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  {event.type === "event" && <PartyPopper className="w-5 h-5 text-primary" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <p className="text-sm text-muted-foreground">Holidays This Month</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">7</div>
              <p className="text-sm text-muted-foreground">Upcoming Events</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">45</div>
              <p className="text-sm text-muted-foreground">Days Until Exams</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentCalendar;
