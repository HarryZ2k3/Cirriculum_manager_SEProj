CREATE DATABASE STUDENTRECORDS
GO
	
USE STUDENTRECORDS; 
GO
/*sau khi tạo và use database thì xóa và bắt đầu chạy các commands khác sau dòng này*/ 

/* phần tạo schema này thì tạo từng dòng*/
CREATE SCHEMA LECTURERS
CREATE SCHEMA ACCOUNT
CREATE SCHEMA DEPARTMENTS
CREATE SCHEMA COURSES
CREATE SCHEMA SEMESTERS
CREATE SCHEMA STUDENT





CREATE TABLE ACCOUNT.AdminAccounts(
AdminID bigint not null primary key, 
Username varchar(50) not null,
Password varchar(50) not null
)
GO


CREATE TABLE ACCOUNT.LecturerAccounts(
LAID bigint not null primary key, 
Username varchar(50) not null,
Password varchar(50) not null
)
GO

CREATE TABLE ACCOUNT.StudentAccounts(
SAID bigint not null primary key, 
Username varchar(50) not null,
Password varchar(50) not null
)
GO

CREATE TABLE DEPARTMENTS.InforList(
DepartmentID bigint identity(1,1) not null,
DepartmentName varchar (50) not null, 
primary key(DepartmentID),
)
ALTER TABLE DEPARTMENTS.InforList
ADD UNIQUE (DepartmentName);
GO

CREATE TABLE LECTURERS.InforList (
	LID BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
	LName VARCHAR(35) not null ,
	Gender VARCHAR(6) not null,
	Position VARCHAR(50) not null, 
             AccountID bigint not null
             foreign key (AccountID) references ACCOUNT.LecturerAccounts(LAID)
);
GO
	
CREATE TABLE STUDENT.InforList (
StudentID bigint identity(1,1) not null,
StudentName varchar(50) not null,
AchievedCredit int,
GPA decimal(3,2),
Gender varchar(6) not null,
SAID bigint not null, 
DepartmentID bigint not null,
primary key(StudentID),
foreign key (SAID) references ACCOUNT.StudentAccounts(SAID),
foreign key (DepartmentID) references DEPARTMENTS.InforList(DepartmentID)
)
GO 
	
CREATE TABLE COURSES.InforList (
CourseID bigint identity(1,1) not null,
CourseName varchar(50) not null,
Credit int not null,
primary key(CourseID)
)
GO
	
ALTER TABLE COURSES.InforList
ADD UNIQUE (CourseName);
GO 


CREATE TABLE SEMESTERS.InforList(
SemesterID bigint identity(1,1) not null primary key, 
SemesterNumber int not null,
StartDate date not null,
EndDate date not null,
Year int not null
)
GO 

	
CREATE TABLE DEPARTMENTS.Room(
RoomID bigint not null,
RoomNumber varchar(50) not null,
primary key(RoomID)
)
GO

ALTER table departments.room 
add unique (RoomNumber)
GO

	
CREATE TABLE DEPARTMENTS.curriculum(
DepartmentID bigint not null, 
CourseID bigint not null,
primary key(DepartmentID, CourseID),
foreign key (DepartmentID) references DEPARTMENTS.InforList(DepartmentID),
foreign key (CourseID) references COURSES.InforList(CourseID)
)
GO

CREATE TABLE STUDENT.Grades(
StudentID bigint not null, 
CourseID bigint not null,
SemesterID bigint not null,
primary key(StudentID,CourseID,SemesterID),
foreign key (StudentID) references STUDENT.InforList(StudentID),
foreign key (CourseID) references COURSES.InforList(CourseID),
foreign key (SemesterID) references SEMESTERS.InforList(SemesterID)
)
GO
	
ALTER TABLE STUDENT.Grades
ADD Midterm DECIMAL(5,2) CHECK (Midterm >= 0 AND Midterm <= 100),
    Final DECIMAL(5,2) CHECK (Final >= 0 AND Final <= 100),
    Inclass DECIMAL(5,2) CHECK (Inclass >= 0 AND Inclass <= 100)
GO

ALTER TABLE STUDENT.InforList
ADD CONSTRAINT unique_sa unique(SAID); 
GO 

ALTER TABLE LECTURERS.InforList
ADD CONSTRAINT unique_la unique(AccountID);
GO

/*xem curriculum*/
SELECT CourseName, Credit
FROM DEPARTMENTS.curriculum e
JOIN COURSES.InforList c  ON c.CourseID = e.CourseID
JOIN DEPARTMENTS.InforList i ON e.DepartmentID = i.DepartmentID
JOIN STUDENT.InforList u ON e.DepartmentID = u.DepartmentID
WHERE u.StudentID = (SELECT s.StudentID 
FROM STUDENT.InforList s
JOIN ACCOUNT.StudentAccounts d ON s.SAID = d.SAID
WHERE d.Username = 'Anh12')

/*xem điểm*/
SELECT CourseName, Inclass,Midterm, Final 
FROM STUDENT.Grades g
JOIN COURSES.InforList c  ON c.CourseID = g.CourseID
WHERE g.StudentID = (SELECT StudentID 
FROM STUDENT.InforList s
JOIN ACCOUNT.StudentAccounts d ON s.SAID = d.SAID
WHERE d.Username = 'Anh12') AND SemesterID = (
SELECT SemesterID
FROM SEMESTERS.InforList
WHERE SemesterNumber = 2 AND YEAR =2020 )


/*xác định studentid từ username*/
SELECT s.StudentID 
FROM STUDENT.InforList s
JOIN ACCOUNT.StudentAccounts d ON s.SAID = d.SAID
WHERE d.Username = 'Anh12'

