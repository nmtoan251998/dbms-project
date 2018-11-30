SHOW DATABASES;
CREATE DATABASE STUDENTMANAGER3;
USE STUDENTMANAGER3;
-- DROP DATABASE STUDENTMANAGER3;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
CREATE TABLE FALCULTY(
	Id CHAR(10) ,
	FalName VARCHAR(50),
	Dean VARCHAR(50),
	CONSTRAINT PK_FAL PRIMARY KEY(Id)
);

CREATE TABLE MAJOR(
	Id CHAR(10),
	FalId CHAR(10),
	MajorName VARCHAR(50),
	CONSTRAINT PK_MAJOR PRIMARY KEY(Id),
	CONSTRAINT FK_MAJOR_FAL_ID FOREIGN KEY (FalId) REFERENCES  FALCULTY(Id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

CREATE TABLE CLASS(
	Id CHAR(10), 
	MajorId CHAR(10),
	ClassName VARCHAR(40),
	HeadTeacher VARCHAR(50),
	CONSTRAINT PK_CLASS PRIMARY KEY(Id),
  CONSTRAINT FK_CLASS_MAJOR_ID FOREIGN KEY (MajorId) REFERENCES MAJOR(Id) 
  ON DELETE CASCADE
  ON UPDATE CASCADE
);

CREATE TABLE COURSE(
  	Id CHAR(4),
    CourseName CHAR(10) NOT NULL,
    StartYear DATE,
    EndYear DATE,
    CONSTRAINT PK_COURSE PRIMARY KEY(Id)
);

CREATE TABLE COURSE_HAS_MAJOR(
	CourseId CHAR(4),
    MajorId CHAR(10),
    CONSTRAINT FK_COURSE_HAS_MAJOR_MAJOR_Id FOREIGN KEY (MajorId) REFERENCES MAJOR(Id) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT FK_COURSE_HAS_MAJOR_COURSE_Id FOREIGN KEY (CourseId) REFERENCES COURSE(Id) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT PK_COURSE PRIMARY KEY(CourseId,MajorId)
);

CREATE TABLE STUDENT(
	Id CHAR(10),
	ClassId CHAR(10),
	StudentName VARCHAR(50),
    AcademicWarning INT DEFAULT 0,
	CONSTRAINT PK_STUDENT PRIMARY KEY(Id),
	CONSTRAINT FK_STUDENT_CLASS_ID FOREIGN KEY (ClassId) REFERENCES  CLASS(Id) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE STUDENT_DETAIL(
	Id CHAR(10),
	DoB DATE,
	Gender CHAR(5),
	City VARCHAR(50),
	Address VARCHAR(50),
	Phone CHAR(11),
	CONSTRAINT PK_STUDENT_DETAIL PRIMARY KEY(Id),
	CONSTRAINT FK_STUDENT_DETAIL_STUDENT_ID FOREIGN KEY (Id) REFERENCES  STUDENT(Id) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE SUBJECT(
	Id CHAR(10),
	MajorId CHAR(10),
	SubjectName VARCHAR(50),
	Credit INTEGER NOT NULL,
	CONSTRAINT PK_SUBJECT PRIMARY KEY(Id),
	CONSTRAINT FK_SUBJECT_MAJOR_ID FOREIGN KEY (MajorId) REFERENCES  MAJOR(Id) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE SCORE_RECORD(
	SubjectId CHAR(10),
	StudentId CHAR(10),
	Year INTEGER,
	Semester INTEGER,
	Score FLOAT,
	CONSTRAINT FK_SCORE_RECORD_SUBJECT_ID FOREIGN KEY (SubjectId) REFERENCES  SUBJECT(Id) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	CONSTRAINT FK_SCORE_RECORD_STUDENT_ID FOREIGN KEY (StudentId) REFERENCES  STUDENT(Id) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	CONSTRAINT PK_SCORE_RECORD PRIMARY KEY(SubjectId,StudentId,Year,Semester) 
);

-- procedure find student
delimiter //
CREATE PROCEDURE findStudentWithId(StdId varchar(50))
	BEGIN 
		SELECT * FROM STUDENT WHERE Id = StdId;
    END//

-- this function can find record by value input with column on table
delimiter //
CREATE PROCEDURE findAnything(TableName varchar(20),ColumnName varchar(20),Value1 varchar(50))
	BEGIN 
        SET @TableName = TableName;
        SET @ColumnName = ColumnName;
        SET @Value1 = Value1;
        SET @A = CONCAT('SELECT * FROM ',@TableName, ' WHERE ',@ColumnName,' LIKE "',@Value1,'"');
        PREPARE STMT1 FROM @A;
        EXECUTE STMT1;
        DEaLLOCATE PREPARE STMT1;
    END//
-- PROCEDURE delete record by value input with column on table
CREATE PROCEDURE deleteAnyThing(TableName varchar(20),ColumnName varchar(20),Value1 varchar(50))
	BEGIN 
        SET @TableName = TableName;
        SET @ColumnName = ColumnName;
        SET @Value1 = Value1;
        SET @A = CONCAT('DELETE FROM ',@TableName, ' WHERE ',@ColumnName,' = "',@Value1,'"');
        PREPARE STMT1 FROM @A;
        EXECUTE STMT1;
        DEaLLOCATE PREPARE STMT1;
    END//

-- PROCIDURE modify record by value input with column on table 
CREATE PROCEDURE modifyAnything(TableName varchar(20),ColumnModify varchar(20),NewValue varchar(50) ,ConditionColumn varchar(20),ValueCondition varchar(50))
	BEGIN
		SET @TableName = TableName;
        SET @ColumnModify = ColumnModify;
        SET @NewValue = NewValue;
        SET @ConditionColumn = ConditionColumn;
        SET @ValueCondition = ValueCondition;
        SET @A = CONCAT('UPDATE ',@TableName, ' SET ',@ColumnModify,' = "',@NewValue,'" WHERE ',@ConditionColumn,' = "',ValueCondition,'"');
        PREPARE STMT1 FROM @A;
        EXECUTE STMT1;
        DEaLLOCATE PREPARE STMT1;
    END//

-- Filter students were academic warning on semester and year
CREATE PROCEDURE filterAcademicWarning(Y INT,Seme INT)
	BEGIN
	SELECT * FROM STUDENT INNER JOIN SCORE_RECORD
    ON STUDENT.Id = SCORE_RECORD.StudentId 
    WHERE AcademicWarning > 1 AND Score < 1.6 AND SCORE_RECORD.Year = Y AND Semester = Seme;
    END//
    
-- count avg according to studentid, year and semester
CREATE FUNCTION avgWithStudentIdYearAndSemester(StdId CHAR(10),Y INT, Seme INT)
	RETURNS FLOAT  DETERMINISTIC
	BEGIN
		DECLARE RESULT FLOAT DEFAULT 1;
		SELECT ROUND(AVG(SCORE),2) INTO RESULT FROM SCORE_RECORD JOIN STUDENT 
        ON SCORE_RECORD.StudentId = STUDENT.Id 
        WHERE StudentId = StdId AND SCORE_RECORD.Year = Y AND SCORE_RECORD.semester = Seme;
        RETURN RESULT;
    END//
    
-- Return subject has highest lose student
CREATE PROCEDURE showBadSubjectWithMajorNamePerSemester(MajorName VARCHAR(50),Y INT,Seme INT)
    BEGIN
        SELECT COUNT(*) AS NUMBER,SUBJECT.SubjectName FROM MAJOR JOIN SUBJECT 
        ON MAJOR.ID = SUBJECT.MAJORID JOIN SCORE_RECORD
        ON SCORE_RECORD.SUBJECTID = SUBJECT.ID
        WHERE SCORE_RECORD.SCORE < 1.6 AND SCORE_RECORD.YEAR = Y AND SCORE_RECORD.SEMESTER = Seme AND MAJOR.MAJORNAME = MajorName
        GROUP BY SUBJECT.ID
        ORDER BY NUMBER DESC LIMIT 1;
    END//
    
-- select top 2 highest score student on faculty
CREATE PROCEDURE showTop2FalcultyStudent(FalcultyName CHAR(50),Y INT, Seme INT)
    BEGIN
		SELECT STUDENT.ID,STUDENT.STUDENTNAME,ROUND(AVG(SCORE),2) AS AVG,COUNT(*) FROM SCORE_RECORD JOIN STUDENT 
			ON SCORE_RECORD.StudentId = STUDENT.Id JOIN CLASS 
			ON CLASS.Id = STUDENT.ClassId JOIN MAJOR 
			ON MAJOR.Id = CLASS.MajorId JOIN FALCULTY 
			ON FALCULTY.Id = MAJOR.FalId
        WHERE FALCULTY.FalName = FalcultyName AND SCORE_RECORD.Year = Y AND SCORE_RECORD.Semester = Seme
        GROUP BY STUDENT.ID,STUDENT.STUDENTNAME
        ORDER BY AVG DESC
        LIMIT 2;
    END//
        
-- show student include id, student name, class name, faculty name
CREATE PROCEDURE showFullStudentInfo(StdId CHAR(10))
    BEGIN
		SELECT STUDENT.ID,STUDENT.STUDENTNAME,CLASS.CLASSNAME,MAJOR.MAJORNAME,FALCULTY.FALNAME FROM FALCULTY JOIN MAJOR 
        ON FALCULTY.ID = MAJOR.FalId JOIN CLASS
        ON CLASS.MajorId = MAJOR.Id JOIN STUDENT 
        ON STUDENT.ClassId = CLASS.Id
        WHERE STUDENT.ID = StdId;
    END//
    
-- get total student each faculty by faculty name    
CREATE FUNCTION getTotalStudentWithFalcultyName(FalName VARCHAR(50))
	RETURNS INT  DETERMINISTIC
	BEGIN
		DECLARE RESULT INT DEFAULT 1;
		SELECT COUNT(*) INTO RESULT FROM FALCULTY JOIN MAJOR 
        ON FALCULTY.ID = MAJOR.FalId JOIN CLASS
        ON CLASS.MajorId = MAJOR.Id JOIN STUDENT 
        ON STUDENT.ClassId = CLASS.Id
        WHERE FALCULTY.FalName = FalName;
        RETURN RESULT;
    END//
delimiter ;
