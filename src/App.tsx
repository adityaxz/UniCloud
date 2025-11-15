import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import StudentHome from "./pages/student/StudentHome";
import StudentProfile from "./pages/student/StudentProfile";
import StudentSupport from "./pages/student/StudentSupport";
import StudentClassroom from "./pages/student/StudentClassroom";
import StudentCalendar from "./pages/student/StudentCalendar";
import StudentResults from "./pages/student/StudentResults";
import StudentFees from "./pages/student/StudentFees";
import StudentLeave from "./pages/student/StudentLeave";

import TeacherSyllabus from "./pages/teacher/TeacherSyllabus";
import TeacherTimetable from "./pages/teacher/TeacherTimetable";
import TeacherSupport from "./pages/teacher/TeacherSupport";
import TeacherSalary from "./pages/teacher/TeacherSalary";
import TeacherCalendar from "./pages/teacher/TeacherCalendar";
import TeacherLeave from "./pages/teacher/TeacherLeave";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route path="/student/home" element={<StudentHome />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/support" element={<StudentSupport />} />
          <Route path="/student/classroom" element={<StudentClassroom />} />
          <Route path="/student/calendar" element={<StudentCalendar />} />
          <Route path="/student/results" element={<StudentResults />} />
          <Route path="/student/fees" element={<StudentFees />} />
          <Route path="/student/leave" element={<StudentLeave />} />
          
          <Route path="/teacher/syllabus" element={<TeacherSyllabus />} />
          <Route path="/teacher/timetable" element={<TeacherTimetable />} />
          <Route path="/teacher/support" element={<TeacherSupport />} />
          <Route path="/teacher/salary" element={<TeacherSalary />} />
          <Route path="/teacher/calendar" element={<TeacherCalendar />} />
          <Route path="/teacher/leave" element={<TeacherLeave />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
