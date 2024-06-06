CREATE DATABASE STUDENTRECORDS; /** CREATE DATABASE VÀ CREATE SCHEMA KHÔNG THỂ CÙNG THỰC HIỆN TRONG 1 QUERY NÊN PHẢI TẠO QUERY MỚI CHO CREATE DATABASE VÀ RUN */

/** SAU ĐÓ TIẾP TỤC TẠO QUERY MỚI ĐỂ THỰC HIỆN CHỨC NĂNG CREATE SCHEMA VÀ CREATE TABLE CHO DATABASE */
/**QUERY MỚI SẼ LẤY TOÀN BỘ SQL COMMANDS BẮT ĐẦU TỪ DÒNG COMMENT NÀY ĐỔ XUỐNG*/

/* connecting to "STUDENTRECORDS" database... */
DROP DATABASE STUDENTRECORDS;

CREATE SCHEMA SEMESTERS;

CREATE TABLE SEMESTERS.Semesters(
SemesterID bigint GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) not null primary key, 
SemesterNumber int not null,
StartDate date not null,
EndDate date not null,
Year int not null
);


CREATE SCHEMA COURSES;

CREATE TABLE COURSES.InforList (
CourseID bigint GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) not null,
CourseName varchar(50) not null,
Credit int not null,
Major varchar(50) not null,
primary key(CourseID)
);

ALTER TABLE COURSES.InforList
ADD UNIQUE (CourseName);


CREATE SCHEMA STUDENT;

CREATE TABLE ACCOUNT.AdminAccounts(
    AdminID SERIAL PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    "Password" VARCHAR(50) NOT NULL
);

CREATE TABLE ACCOUNT.LecturerAccounts(
    LAID SERIAL PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    "Password" VARCHAR(50) NOT NULL
);

CREATE TABLE ACCOUNT.StudentAccounts(
    SAID SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    email VARCHAR (50) NOT NULL
);

CREATE TABLE DEPARTMENTS.InforList(
    DepartmentID SERIAL PRIMARY KEY,
    DepartmentName VARCHAR(50) NOT NULL
);

CREATE INDEX idx_department_name ON DEPARTMENTS.InforList(DepartmentName);

CREATE TABLE LECTURERS.InforList (
    LID SERIAL PRIMARY KEY, 
    LName VARCHAR(35) NOT NULL,
    Gender VARCHAR(6) NOT NULL,
    Position VARCHAR(50) NOT NULL,
    AccountID BIGINT NOT NULL,
    FOREIGN KEY (AccountID) REFERENCES ACCOUNT.LecturerAccounts(LAID)
);

CREATE TABLE STUDENT.InforList (
    studentcode SERIAL PRIMARY KEY,
    StudentName VARCHAR(50) NOT NULL,
    AchievedCredit INT,
    GPA DECIMAL(3,2),
    Gender VARCHAR(6) NOT NULL,
    SAID BIGINT,
    DepartmentID BIGINT NOT NULL,
    FOREIGN KEY (SAID) REFERENCES ACCOUNT.StudentAccounts(SAID),
    FOREIGN KEY (DepartmentID) REFERENCES DEPARTMENTS.InforList(DepartmentID)
);

CREATE TABLE COURSES.InforList (
    CourseID SERIAL PRIMARY KEY,
    CourseName VARCHAR(50) NOT NULL,
    Credit INT NOT NULL
);

CREATE INDEX idx_course_name ON COURSES.InforList(CourseName);

CREATE TABLE SEMESTERS.InforList(
    SemesterID SERIAL PRIMARY KEY,
    SemesterNumber INT NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    Year INT NOT NULL
);

CREATE TABLE DEPARTMENTS.Room(
    RoomID SERIAL PRIMARY KEY,
    RoomNumber VARCHAR(50) NOT NULL
);

CREATE INDEX idx_room_number ON DEPARTMENTS.Room(RoomNumber);

CREATE TABLE DEPARTMENTS.curriculum(
    DepartmentID BIGINT NOT NULL,
    CourseID BIGINT NOT NULL,
    PRIMARY KEY(DepartmentID, CourseID),
    FOREIGN KEY (DepartmentID) REFERENCES DEPARTMENTS.InforList(DepartmentID),
    FOREIGN KEY (CourseID) REFERENCES COURSES.InforList(CourseID)
);

CREATE TABLE STUDENT.Grades(
    StudentID BIGINT NOT NULL,
    CourseID BIGINT NOT NULL,
    SemesterID BIGINT NOT NULL,
    PRIMARY KEY(StudentID, CourseID, SemesterID),
    FOREIGN KEY (StudentID) REFERENCES STUDENT.InforList(StudentID),
    FOREIGN KEY (CourseID) REFERENCES COURSES.InforList(CourseID),
    FOREIGN KEY (SemesterID) REFERENCES SEMESTERS.InforList(SemesterID),
    Midterm DECIMAL(5,2) CHECK (Midterm >= 0 AND Midterm <= 100),
    Final DECIMAL(5,2) CHECK (Final >= 0 AND Final <= 100),
    Inclass DECIMAL(5,2) CHECK (Inclass >= 0 AND Inclass <= 100)
);

ALTER TABLE STUDENT.InforList ADD CONSTRAINT unique_sa UNIQUE(SAID); 

ALTER TABLE LECTURERS.InforList ADD CONSTRAINT unique_la UNIQUE(AccountID);

CREATE TABLE STUDENT.TA(
    CourseID BIGINT NOT NULL,
    TAID BIGINT NOT NULL,
    PRIMARY KEY(TAID, CourseID),
    FOREIGN KEY (TAID) REFERENCES STUDENT.InforList(StudentID),
    FOREIGN KEY (CourseID) REFERENCES COURSES.InforList(CourseID)
);


-- insert vào thì chỉ update bản ghi đó thôi:
