import StudentLayout from "@/components/StudentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Upload } from "lucide-react";

const StudentLeave = () => {
  const leaveHistory = [
    { date: "Dec 20-22, 2024", reason: "Medical", status: "approved", days: 3 },
    { date: "Nov 15, 2024", reason: "Personal", status: "approved", days: 1 },
    { date: "Oct 5-6, 2024", reason: "Family Function", status: "approved", days: 2 },
  ];

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Leave Application</h1>
          <p className="text-muted-foreground">Apply for leave or view your leave history</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-foreground mb-2">6</div>
              <p className="text-sm text-muted-foreground">Days Used</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">14</div>
              <p className="text-sm text-muted-foreground">Days Remaining</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-success mb-2">20</div>
              <p className="text-sm text-muted-foreground">Total Allowed</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Apply for Leave</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="from-date">From Date</Label>
                  <Input id="from-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="to-date">To Date</Label>
                  <Input id="to-date" type="date" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Leave</Label>
                <Textarea 
                  id="reason" 
                  placeholder="Please explain your reason for leave..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="document">Attach Document (Optional)</Label>
                <div className="flex gap-2">
                  <Input id="document" type="file" className="flex-1" />
                  <Button type="button" variant="outline" size="icon">
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Attach medical certificate or supporting documents if applicable
                </p>
              </div>

              <Button type="submit" className="w-full">Submit Leave Application</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leave History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaveHistory.map((leave, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-lg border border-border"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{leave.date}</h3>
                    <p className="text-sm text-muted-foreground">
                      {leave.reason} • {leave.days} {leave.days === 1 ? 'day' : 'days'}
                    </p>
                  </div>
                  <Badge variant="default">
                    {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
};

export default StudentLeave;
