CREATE DATABASE STUDENTRECORDS /** CREATE DATABASE VÀ CREATE SCHEMA KHÔNG THỂ CÙNG THỰC HIỆN TRONG 1 QUERY NÊN PHẢI TẠO QUERY MỚI CHO CREATE DATABASE VÀ RUN */

/** SAU ĐÓ TIẾP TỤC TẠO QUERY MỚI ĐỂ THỰC HIỆN CHỨC NĂNG CREATE SCHEMA VÀ CREATE TABLE CHO DATABASE */
/**QUERY MỚI SẼ LẤY TOÀN BỘ SQL COMMANDS BẮT ĐẦU TỪ DÒNG COMMENT NÀY ĐỔ XUỐNG*/

USE STUDENTRECORDS; 
GO

CREATE SCHEMA SEMESTERS;
GO

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

CREATE TABLE ACCOUNT.AdminAccounts(
    AdminID SERIAL PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL
);

CREATE TABLE ACCOUNT.LecturerAccounts(
    LAID SERIAL PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL
);

CREATE TABLE ACCOUNT.StudentAccounts(
    SAID SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR (50) NOT NULL
);

CREATE TABLE DEPARTMENTS.InforList(
    DepartmentID SERIAL PRIMARY KEY,
    DepartmentName VARCHAR(50) NOT NULL
);

CREATE UNIQUE INDEX idx_department_name ON DEPARTMENTS.InforList(DepartmentName);

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
<<<<<<< HEAD
	dateofbirth date not null,
	studentid varchar, 
=======
    batch bigint not null,	
    dateofbirth date not null,
    studentid varchar, 
>>>>>>> 10ad3967edf3b143bbc7f4768b4aa7a5757bab65
    FOREIGN KEY (SAID) REFERENCES ACCOUNT.StudentAccounts(SAID),
    FOREIGN KEY (DepartmentID) REFERENCES DEPARTMENTS.InforList(DepartmentID)
);

CREATE TABLE COURSES.InforList (
    CourseID SERIAL PRIMARY KEY,
    CourseName VARCHAR(50) NOT NULL,
    Credit INT NOT NULL
);

CREATE UNIQUE INDEX idx_course_name ON COURSES.InforList(CourseName);

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

CREATE UNIQUE INDEX idx_room_number ON DEPARTMENTS.Room(RoomNumber);

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
CREATE OR REPLACE FUNCTION update_all_studentid()
RETURNS TRIGGER AS $$
BEGIN
  NEW.studentid = 'IU' || (SELECT TRIM(shortname) FROM departments.inforlist WHERE departmentid = NEW.departmentid) || NEW.Batch || NEW.studentcode;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_all_combined_info_trigger
BEFORE INSERT ON student.inforlist
FOR EACH ROW
EXECUTE FUNCTION update_all_studentid();

-- tự động update student account
CREATE OR REPLACE FUNCTION update_student_account()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO account.studentaccounts (username, password) 
    VALUES (NEW.studentid, TO_CHAR((SELECT NEW.dateofbirth FROM student.inforlist WHERE studentid = NEW.studentid), 'DDMMYYYY'));
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_studentid_insert_or_update
AFTER INSERT OR UPDATE OF studentid ON student.inforlist
FOR EACH ROW EXECUTE FUNCTION update_student_account();

-- tự động update cột said cho student.inforlist:
CREATE OR REPLACE FUNCTION update_student_inforlist()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE student.inforlist
    SET said = NEW.said
    WHERE studentid = NEW.username;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_account_insert
AFTER INSERT ON account.studentaccounts
FOR EACH ROW EXECUTE FUNCTION update_student_inforlist();


