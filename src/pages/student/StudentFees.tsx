import StudentLayout from "@/components/StudentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const StudentFees = () => {
  const feeHistory = [
    { term: "Semester 5", year: "2024-25", amount: 50000, paid: 50000, date: "Oct 15, 2024", status: "paid" },
    { term: "Semester 4", year: "2023-24", amount: 50000, paid: 50000, date: "Apr 20, 2024", status: "paid" },
    { term: "Semester 3", year: "2023-24", amount: 50000, paid: 50000, date: "Oct 18, 2023", status: "paid" },
    { term: "Semester 2", year: "2022-23", amount: 50000, paid: 50000, date: "Apr 25, 2023", status: "paid" },
    { term: "Semester 1", year: "2022-23", amount: 55000, paid: 55000, date: "Oct 20, 2022", status: "paid" },
  ];

  const totalPaid = feeHistory.reduce((sum, fee) => sum + fee.paid, 0);

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Fee Payment History</h1>
          <p className="text-muted-foreground">Track all your fee payments</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Total Paid</p>
                <p className="text-3xl font-bold text-foreground">₹{totalPaid.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Payment Status</p>
                <Badge className="text-lg px-4 py-2" variant="default">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  All Clear
                </Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Outstanding</p>
                <p className="text-3xl font-bold text-success">₹0</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {feeHistory.map((fee, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{fee.term}</h3>
                    <p className="text-sm text-muted-foreground">
                      Paid on {fee.date} • Academic Year {fee.year}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground">₹{fee.amount.toLocaleString()}</p>
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
            <CardTitle>Fee Structure Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">Tuition Fee</span>
                <span className="font-semibold">₹35,000</span>
              </div>
              <div className="flex justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">Laboratory Fee</span>
                <span className="font-semibold">₹5,000</span>
              </div>
              <div className="flex justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">Library Fee</span>
                <span className="font-semibold">₹3,000</span>
              </div>
              <div className="flex justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">Sports & Activities</span>
                <span className="font-semibold">₹4,000</span>
              </div>
              <div className="flex justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">Development Fee</span>
                <span className="font-semibold">₹3,000</span>
              </div>
              <div className="flex justify-between p-4 bg-primary/10 rounded-lg border-2 border-primary">
                <span className="font-semibold">Total Per Semester</span>
                <span className="font-bold text-lg">₹50,000</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
};

export default StudentFees;
