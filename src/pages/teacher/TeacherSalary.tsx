import TeacherLayout from "@/components/TeacherLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const TeacherSalary = () => {
  const salaryHistory = [
    { month: "December 2024", amount: 75000, status: "paid" },
    { month: "November 2024", amount: 75000, status: "paid" },
    { month: "October 2024", amount: 75000, status: "paid" },
  ];

  const tasks = [
    { title: "Grade Semester Exams", deadline: "Jan 20, 2025", priority: "high", completed: false },
    { title: "Submit Research Paper", deadline: "Jan 15, 2025", priority: "medium", completed: false },
    { title: "Prepare Lab Materials", deadline: "Jan 10, 2025", priority: "high", completed: true },
    { title: "Faculty Meeting Preparation", deadline: "Jan 8, 2025", priority: "low", completed: true },
  ];

  return (
    <TeacherLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Salary & Tasks</h1>
          <p className="text-muted-foreground">Track your compensation and assignments</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Current Salary</p>
                <p className="text-3xl font-bold text-foreground">₹75,000</p>
                <p className="text-xs text-muted-foreground mt-2">per month</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Last Increment</p>
                <div className="flex items-center justify-center gap-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <p className="text-3xl font-bold text-success">15%</p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">July 2024</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Pending Tasks</p>
                <p className="text-3xl font-bold text-warning">2</p>
                <p className="text-xs text-muted-foreground mt-2">active assignments</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Salary Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {salaryHistory.map((payment, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-lg border border-border"
                >
                  <div>
                    <h3 className="font-semibold mb-1">{payment.month}</h3>
                    <p className="text-sm text-muted-foreground">Regular monthly payment</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground">₹{payment.amount.toLocaleString()}</p>
                    <Badge variant="default" className="mt-1">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Paid
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Task Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Completion Rate</span>
                <span className="font-semibold">50%</span>
              </div>
              <Progress value={50} />
            </div>
            <div className="space-y-3">
              {tasks.map((task, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 p-4 rounded-lg border ${task.completed ? 'bg-muted/50' : 'border-border'}`}
                >
                  <CheckCircle2 className={`w-5 h-5 mt-0.5 ${task.completed ? 'text-success' : 'text-muted-foreground'}`} />
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {task.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">Due: {task.deadline}</p>
                  </div>
                  <Badge 
                    variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Promotion History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">Senior Lecturer</h4>
                    <p className="text-sm text-muted-foreground">Current Position</p>
                  </div>
                  <Badge>Active</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Promoted: July 2024</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">Lecturer</h4>
                    <p className="text-sm text-muted-foreground">Previous Position</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">2022 - 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </TeacherLayout>
  );
};

export default TeacherSalary;
