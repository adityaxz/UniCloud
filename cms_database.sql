CREATE DATABASE IF NOT EXISTS cms;
USE cms;

-- STUDENT TABLE (only 1 student needed)
CREATE TABLE students(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(20),
  rollno VARCHAR(30)
);

INSERT INTO students(id,name,email,phone,rollno) VALUES
(1,'Student One','student@mail.com','9999999999','CS001');


-- TEACHER TABLE (only 1 teacher needed)
CREATE TABLE teachers(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(20),
  subject_code VARCHAR(20),
  position VARCHAR(50),
  salary INT
);

INSERT INTO teachers(id,name,email,phone,subject_code,position,salary) VALUES
(1,'Teacher One','teacher@mail.com','8888888888','py1500','Assistant Professor',45000);


-- CHAT MESSAGES
CREATE TABLE messages(
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_type VARCHAR(10),
  user_id INT,
  message TEXT
);


-- MARKS TABLE
CREATE TABLE marks(
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  subject_code VARCHAR(20),
  exam_type VARCHAR(10),
  marks INT
);

-- Optional: Pre-fill marks (all 0)
INSERT INTO marks(student_id,subject_code,exam_type,marks) VALUES
(1,'py1500','mid',0),(1,'py1500','end',0),
(1,'ds2253','mid',0),(1,'ds2253','end',0),
(1,'wt2258','mid',0),(1,'wt2258','end',0),
(1,'dccn2251','mid',0),(1,'dccn2251','end',0),
(1,'coa2257','mid',0),(1,'coa2257','end',0),
(1,'mat2501','mid',0),(1,'mat2501','end',0),
(1,'fin1002','mid',0),(1,'fin1002','end',0),
(1,'apt4002','mid',0),(1,'apt4002','end',0);


-- FEES TABLE
CREATE TABLE fees(
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  total INT,
  paid INT
);

INSERT INTO fees(student_id,total,paid) VALUES
(1,60000,25000);


-- LEAVE TABLE
CREATE TABLE leaves(
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_type VARCHAR(10),
  user_id INT,
  from_date DATE,
  to_date DATE,
  reason TEXT
);
