CREATE DATABASE STUDENTRECORDS 

CREATE SCHEMA SEMESTERS;


CREATE TABLE SEMESTERS.Semesters(
SemesterID bigint identity(1,1) not null primary key, 
SemesterNumber int not null,
StartDate date not null,
EndDate date not null,
Year int not null,
)


CREATE SCHEMA COURSES;
GO

CREATE TABLE COURSES.InforList (
CourseID bigint identity(1,1) not null,
CourseName varchar(50) not null,
Credit int not null,
Major varchar(50) not null,
primary key(CourseID),
)

ALTER TABLE COURSES.InforList
ADD UNIQUE (CourseName);


CREATE SCHEMA STUDENT;
GO

CREATE TABLE STUDENT.InforList (
StudentID bigint identity(1,1) not null,
StudentName varchar(50) not null,
primary key(StudentID),
Major varchar(50) not null,
)

ALTER TABLE STUDENT.InforList
ADD AchievedCredit INT,
    GPA DECIMAL(3,2),
    Gender VARCHAR(6);



CREATE TABLE STUDENT.ENROLLMENT(
StudentID bigint not null,
CourseID bigint not null,
primary key(StudentID, CourseID),
foreign key (StudentID) references STUDENT.InforList(StudentID),
foreign key (CourseID) references COURSES.InforList(CourseID)
)

CREATE TABLE STUDENT.TA(

CourseID bigint not null,
TAID bigint not null,
primary key(TAID, CourseID),
foreign key (TAID) references STUDENT.InforList(StudentID),
foreign key (CourseID) references COURSES.InforList(CourseID),
)

CREATE TABLE STUDENT.Grades(
StudentID bigint not null, 
CourseID bigint not null,
SemesterID bigint not null,
primary key(StudentID,CourseID,SemesterID),
foreign key (StudentID) references STUDENT.InforList(StudentID),
foreign key (CourseID) references COURSES.InforList(CourseID),
foreign key (SemesterID) references SEMESTERS.InforList(SemesterID),
)

ALTER TABLE STUDENT.Grades
ADD Midterm DECIMAL(4,2) CHECK (Midterm >= 0 AND Midterm <= 100),
    Final DECIMAL(4,2) CHECK (Final >= 0 AND Final <= 100),
    Inclass DECIMAL(4,2) CHECK (Inclass >= 0 AND Inclass <= 100);


 

CREATE SCHEMA DEPARTMENTS;
GO

CREATE TABLE DEPARTMENTS.InforList(
DepartmentID bigint identity(1,1) not null,
DepartmentName varchar (50) not null, 
primary key(DepartmentID),
)

ALTER TABLE DEPARTMENTS.InforList
ADD UNIQUE (DepartmentName);

CREATE TABLE DEPARTMENTS.Room(
RoomID bigint not null,
RoomNumber varchar(50) not null,
primary key(RoomID),
)
ALTER table DEPARTMENTS.room 
add unique (RoomNumber)


CREATE TABLE DEPARTMENTS.curriculum(
DepartmentID bigint not null, 
CourseID bigint not null,
primary key(DepartmentID, CourseID),
foreign key (DepartmentID) references DEPARTMENTS.InforList(DepartmentID),
foreign key (CourseID) references COURSES.InforList(CourseID),
)

CREATE TABLE DEPARTMENTS.TaughtPlace(
RoomID bigint not null,
CourseID bigint not null,
primary key (RoomID,CourseID),
foreign key (RoomID) references DEPARTMENTS.room(RoomID),
foreign key (CourseID) references COURSES.InforList(CourseID),
)


 

 

CREATE SCHEMA LECTURERS;
GO

CREATE TABLE LECTURERS.InforList (
	LID BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
	LName VARCHAR(35) not null ,
	Gender VARCHAR(6) not null,
	Position VARCHAR(50),
)


CREATE SCHEMA ACCOUNT;
GO

CREATE TABLE ACCOUNT.StudentAccounts(
SAID bigint not null primary key, 
Username varchar(50) not null,
Password varchar(50) not null,
)

CREATE TABLE ACCOUNT.LecturerAccounts(
LAID bigint not null primary key, 
Username varchar(50) not null,
Password varchar(50) not null,
)

CREATE TABLE ACCOUNT.AdminAccounts(
AdminID bigint not null primary key, 
Username varchar(50) not null,
Password varchar(50) not null,
)

ALTER TABLE STUDENT.Grades
ALTER COLUMN Midterm DECIMAL(5,2)

ALTER TABLE STUDENT.Grades
ALTER COLUMN Final DECIMAL(5,2)

ALTER TABLE STUDENT.Grades
ALTER COLUMN Inclass DECIMAL(5,2)
