import StudentLayout from "@/components/StudentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, TrendingUp } from "lucide-react";

const StudentHome = () => {
  return (
    <StudentLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back, Student!</h1>
          <p className="text-muted-foreground">Here's your academic overview</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Attendance</CardTitle>
              <CheckCircle2 className="w-4 h-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <Progress value={87} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">174 of 200 days present</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Overall Grade</CardTitle>
              <TrendingUp className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">A</div>
              <Progress value={92} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">92% average score</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
              <Clock className="w-4 h-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground mt-2">2 assignments, 3 activities</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Academic Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { subject: "Mathematics", score: 95, grade: "A+" },
                { subject: "Physics", score: 88, grade: "A" },
                { subject: "Chemistry", score: 92, grade: "A+" },
                { subject: "English", score: 85, grade: "B+" },
                { subject: "Computer Science", score: 98, grade: "A+" },
              ].map((subject) => (
                <div key={subject.subject} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{subject.subject}</span>
                      <Badge variant="secondary">{subject.grade}</Badge>
                    </div>
                    <Progress value={subject.score} />
                  </div>
                  <span className="text-sm font-bold w-12">{subject.score}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cultural Participation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-1">Drama Club</h4>
                <p className="text-sm text-muted-foreground">Active Member - 2 productions</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-1">Music Society</h4>
                <p className="text-sm text-muted-foreground">Participant - 3 events</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-1">Sports Team</h4>
                <p className="text-sm text-muted-foreground">Basketball - 8 matches</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-1">Tech Club</h4>
                <p className="text-sm text-muted-foreground">Member - 5 workshops</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
};

export default StudentHome;
