import StudentLayout from "@/components/StudentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const StudentResults = () => {
  const semesters = [
    {
      semester: "Semester 5",
      year: "2024-25",
      results: [
        { subject: "Advanced Mathematics", marks: 95, grade: "A+", credits: 4 },
        { subject: "Data Structures", marks: 92, grade: "A+", credits: 4 },
        { subject: "Database Systems", marks: 88, grade: "A", credits: 3 },
        { subject: "Operating Systems", marks: 90, grade: "A+", credits: 4 },
        { subject: "Software Engineering", marks: 87, grade: "A", credits: 3 },
      ],
      sgpa: 9.1,
    },
    {
      semester: "Semester 4",
      year: "2023-24",
      results: [
        { subject: "Mathematics III", marks: 89, grade: "A", credits: 4 },
        { subject: "Computer Networks", marks: 93, grade: "A+", credits: 4 },
        { subject: "Algorithms", marks: 91, grade: "A+", credits: 4 },
        { subject: "Web Technologies", marks: 95, grade: "A+", credits: 3 },
        { subject: "Theory of Computation", marks: 86, grade: "A", credits: 3 },
      ],
      sgpa: 9.2,
    },
  ];

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Academic Results</h1>
          <p className="text-muted-foreground">Your complete result history</p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Cumulative GPA</p>
                <p className="text-4xl font-bold text-primary">8.9</p>
              </div>
              <div className="text-center p-6 bg-success/10 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Overall Grade</p>
                <p className="text-4xl font-bold text-success">A</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {semesters.map((sem) => (
          <Card key={sem.semester}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{sem.semester}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Academic Year {sem.year}</p>
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  SGPA: {sem.sgpa}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead className="text-center">Credits</TableHead>
                    <TableHead className="text-center">Marks</TableHead>
                    <TableHead className="text-center">Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sem.results.map((result) => (
                    <TableRow key={result.subject}>
                      <TableCell className="font-medium">{result.subject}</TableCell>
                      <TableCell className="text-center">{result.credits}</TableCell>
                      <TableCell className="text-center font-semibold">{result.marks}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant={result.grade.includes('+') ? 'default' : 'secondary'}>
                          {result.grade}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>
    </StudentLayout>
  );
};

export default StudentResults;
