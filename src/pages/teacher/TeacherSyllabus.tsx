import TeacherLayout from "@/components/TeacherLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const TeacherSyllabus = () => {
  const subjects = [
    {
      name: "Advanced Mathematics",
      code: "MATH301",
      progress: 75,
      topics: [
        { id: 1, name: "Differential Equations", completed: true },
        { id: 2, name: "Linear Algebra", completed: true },
        { id: 3, name: "Vector Calculus", completed: true },
        { id: 4, name: "Fourier Series", completed: false },
        { id: 5, name: "Complex Analysis", completed: false },
      ],
    },
    {
      name: "Data Structures",
      code: "CS302",
      progress: 60,
      topics: [
        { id: 1, name: "Arrays and Linked Lists", completed: true },
        { id: 2, name: "Stacks and Queues", completed: true },
        { id: 3, name: "Trees and Graphs", completed: true },
        { id: 4, name: "Hashing", completed: false },
        { id: 5, name: "Advanced Trees", completed: false },
      ],
    },
  ];

  return (
    <TeacherLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Syllabus Management</h1>
          <p className="text-muted-foreground">Track topic completion across your subjects</p>
        </div>

        {subjects.map((subject) => (
          <Card key={subject.code}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{subject.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Course Code: {subject.code}</p>
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {subject.progress}% Complete
                </Badge>
              </div>
              <Progress value={subject.progress} className="mt-4" />
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {subject.topics.map((topic) => (
                  <div
                    key={topic.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Checkbox 
                      id={`${subject.code}-${topic.id}`}
                      checked={topic.completed}
                    />
                    <label
                      htmlFor={`${subject.code}-${topic.id}`}
                      className={`flex-1 cursor-pointer ${topic.completed ? 'line-through text-muted-foreground' : 'font-medium'}`}
                    >
                      {topic.name}
                    </label>
                    {topic.completed && (
                      <Badge variant="outline" className="bg-success/10 text-success">
                        Completed
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </TeacherLayout>
  );
};

export default TeacherSyllabus;
