SHOW DATABASES;
CREATE DATABASE STUDENTMANAGER3;
USE STUDENTMANAGER3;
DROP DATABASE STUDENTMANAGER3;
SELECT * FROM SUBJECT;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

CREATE TABLE FALCULTY(
	Id CHAR(10) ,
	FalName VARCHAR(50),
	Dean VARCHAR(50),
	CONSTRAINT PK_FAL PRIMARY KEY(Id)
);

INSERT INTO FALCULTY VALUES ('CNTTTT', 'Khoa Cong Nghe Thong Tin Va Truyen Thong', 'Nguyen Huu Hoa');
INSERT INTO FALCULTY VALUES ('KT', 'Khoa Kinh Te', 'Nguyen Duy Lan');
INSERT INTO FALCULTY VALUES ('KH', 'Khoa Khoa Hoc Tu Nhien', 'Nguyen Thai Ngoc');
INSERT INTO FALCULTY VALUES ('MT', 'Khoa Chinh Tri', 'Nguyen Minh Toan');
INSERT INTO FALCULTY VALUES ('XH', 'Khoa Xa Hoi Va Nhan Van', 'Nguyen Anh Tu');
INSERT INTO FALCULTY VALUES ('TC', 'Khoa The Chat', 'Nguyen Hoang Huy');
INSERT INTO FALCULTY VALUES ('SP', 'Khoa Su Pham', 'Nguyen Quang Khai');
INSERT INTO FALCULTY VALUES ('DB', 'Khoa Du Bi Dan Toc', 'Nguyen Van Loi');
INSERT INTO FALCULTY VALUES ('MTR', 'Khoa Moi Truong', 'Nguyen Thu Trang');
INSERT INTO FALCULTY VALUES ('TS', 'Khoa Thuy San', 'Nguyen Thanh Thao');

SELECT * FROM FALCULTY;
DROP TABLE FALCULTY;
DELETE FROM FALCULTY WHERE id = 'CNTTTT';

CREATE TABLE MAJOR(
	Id CHAR(10),
	FalId CHAR(10),
	MajorName VARCHAR(50),
	CONSTRAINT PK_MAJOR PRIMARY KEY(Id),
	CONSTRAINT FK_MAJOR_FAL_ID FOREIGN KEY (FalId) REFERENCES  FALCULTY(Id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

INSERT INTO MAJOR
	VALUES('CNTT', 'CNTTTT','Cong Nghe Thong Tin');
INSERT INTO MAJOR
	VALUES('CNTTCLC', 'CNTTTT', 'Cong Nghe Thong Tin CLC');
INSERT INTO MAJOR
	VALUES('KHMTCLC', 'CNTTTT','Khoa Hoc May Tinh CLC');
INSERT INTO MAJOR
	VALUES('TTMMT', 'CNTTTT','Truyen Thong Mang May Tinh');
INSERT INTO MAJOR
	VALUES('KDQT', 'KT', 'Kinh Doanh Quoc Te');
INSERT INTO MAJOR
	VALUES('QTKD', 'KT', 'Quan Tri Kinh Doanh');
INSERT INTO MAJOR
	VALUES('KDQTCLC', 'KT','Kinh Doanh Quoc Te CLC');
INSERT INTO MAJOR
	VALUES('TH', 'MT','Triet Hoc');
INSERT INTO MAJOR
	VALUES('NTTS', 'TS','Nuoi Trong Thuy San');
INSERT INTO MAJOR
	VALUES('SPTH', 'SP','Su Pham Toan Hoc');
INSERT INTO MAJOR
	VALUES('KTTNN', 'MTR','Ky Thuat Tai Nguyen Nuoc');

DELETE FROM MAJOR
	LIMIT 5;
SELECT * FROM MAJOR;
DROP TABLE MAJOR;

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

INSERT INTO CLASS VALUES ('DI16V7F1','CNTTCLC','CNTT Chat Luong Cao 1','Nguyen Thi Diem');
INSERT INTO CLASS VALUES ('DI16V7F2','CNTTCLC','CNTT Chat Luong Cao 2','Nguyen Ngoc My');
INSERT INTO CLASS VALUES ('KT16V7F3','KDQTCLC','Kinh Doanh Quoc Te Chat Luong Cao 3','Nguyen Toan Minh');
INSERT INTO CLASS VALUES ('MT15V7F1','TH','Triet Hoc 1','Nguyen Thi Diem Tran');
INSERT INTO CLASS VALUES ('MTR14V7F1','KTTNN','Ky Thuat Tai Nguyen Nuoc 1','Nguyen Thi Van');
INSERT INTO CLASS VALUES ('SP13V7F2','SPTH','Su Pham Toan Hoc 2','Nguyen Thi Diem');
INSERT INTO CLASS VALUES ('TS17V7F2','NTTS','Nuoi Trong Thuy San 2','Tran Van An');
INSERT INTO CLASS VALUES ('KT12V7F1','QTKD','Quan Tri Kinh Doanh 1','Le Cong Cong');
INSERT INTO CLASS VALUES ('DI15V7F1','KHMT','Khoa Hoc May Tinh 1','Pham Nguyen Khang');
INSERT INTO CLASS VALUES ('DI17V7F1','KHMTCLC','Khoa Hoc May Tinh Chat Luong Cao 1','Nguyen Huu Hoa');

DELETE FROM CLASS
	LIMIT 3;    
SELECT * FROM CLASS;
DROP TABLE CLASS;

CREATE TABLE COURSE(
  	Id CHAR(4),
    CourseName CHAR(10) NOT NULL,
    StartYear DATE,
    EndYear DATE,
    CONSTRAINT PK_COURSE PRIMARY KEY(Id)
);

INSERT INTO COURSE VALUES('K42','Khoa 42','2016-1-1','2020-1-1');
INSERT INTO COURSE VALUES('K43','Khoa 43','2017-1-1','2021-1-1');
INSERT INTO COURSE VALUES('K44','Khoa 44','2018-1-1','2022-1-1');
INSERT INTO COURSE VALUES('K45','Khoa 45','2019-1-1','2023-1-1');
INSERT INTO COURSE VALUES('K40','Khoa 40','2014-1-1','2018-1-1');
INSERT INTO COURSE VALUES('K41','Khoa 41','2015-1-1','2019-1-1');
INSERT INTO COURSE VALUES('K46','Khoa 46','2020-1-1','2024-1-1');
INSERT INTO COURSE VALUES('K47','Khoa 47','2021-1-1','2025-1-1');
INSERT INTO COURSE VALUES('K48','Khoa 48','2022-1-1','2026-1-1');
INSERT INTO COURSE VALUES('K39','Khoa 39','2013-1-1','2017-1-1');
INSERT INTO COURSE VALUES('K38','Khoa 38','2012-1-1','2016-1-1');

SELECT * FROM COURSE;
DROP TABLE COURSE;

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

INSERT INTO COURSE_HAS_MAJOR VALUES ('K42','CNTT'),
									('K42','CNTTCLC'),
									('K42','QTKD'),
									('K40','CNTTCLC');                        
INSERT INTO COURSE_HAS_MAJOR VALUES ('K43','NTTS'),
									('K41','TH'),
                                    ('K39','SPTH'),
                                    ('K38','QTKD'),
                                    ('K40','KTTNN'),
                                    ('K42','KDQTCLC');

SELECT * FROM COURSE_HAS_MAJOR;
DROP TABLE COURSE_HAS_MAJOR;

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

INSERT INTO STUDENT
	VALUES('B1605369','DI16V7F1','Nguyen Minh Toan',1);
INSERT INTO STUDENT
	VALUES('B1405404', 'DI16V7F2','Nguyen Thai Ngoc',0);
INSERT INTO STUDENT
	VALUES('B1605396','DI16V7F1',  'Le Phuc Loc',2);
INSERT INTO STUDENT
	VALUES('B1605383','KT16V7F3', 'Nguyen Thu Trang',0);
INSERT INTO STUDENT
	VALUES('B1605333','DI16V7F1',' Mai Ngoc Tuong Minh',0);
INSERT INTO STUDENT
	VALUES('B1709588','TS17V7F2','Nguyen Van Tu',0); 
INSERT INTO STUDENT
	VALUES('B1505369','MT15V7F1','Le Thi Kim Binh',0);
INSERT INTO STUDENT
	VALUES('B1305069','SP13V7F2','Tran Hung Dao',2);
INSERT INTO STUDENT
	VALUES('B1200369','KT12V7F1','Nguyen Minh Tinh',2);
INSERT INTO STUDENT
	VALUES('B1405569','MTR14V7F1','Ninh Phuoc Thu',0);


DELETE FROM STUDENT
	LIMIT 4;
SELECT * FROM STUDENT;
DROP TABLE STUDENT;


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

INSERT INTO STUDENT_DETAIL
	VALUES('B1605369', '1998-05-02', 'Nam', 'Can Tho', '12-54A Quang Trung', '0987654321');
INSERT INTO STUDENT_DETAIL
	VALUES('B1605383', '1998-09-14', 'Nam', 'Ca Mau', '22-54AE-78B Ho Tung Mau', '0987654322');
INSERT INTO STUDENT_DETAIL
	VALUES('B1605396', '1998-05-12', 'Nam', 'Can Tho', '132A 3-2 Ninh Kieu', '0987654323');
INSERT INTO STUDENT_DETAIL
	VALUES('B1405404', '1996-01-01', 'Nam', 'Can Tho', '121A 30-4 Ninh Kieu', '0987654324');
INSERT INTO STUDENT_DETAIL
	VALUES('B1605333', '1998-01-01', 'Nu', 'Kien Giang', '158A 3-2 Phu Cuong', '0987654325');
INSERT INTO STUDENT_DETAIL
	VALUES('B1709588', '1999-10-22', 'Nam', 'Kien Giang', '30-4', '0987555555');
INSERT INTO STUDENT_DETAIL
	VALUES('B1505369', '1997-01-01', 'Nu', 'Soc Trang', 'Cu Lao Dung', '0879654555');
INSERT INTO STUDENT_DETAIL
	VALUES('B1305069', '1995-10-01', 'Nam', 'Vinh Long', '15A 3-2', '0976543425');
INSERT INTO STUDENT_DETAIL
  VALUES('B1200369', '1994-01-10', 'Nam', 'Kien Giang', '1A 3-2 Phu Cuong', '0966654325');
INSERT INTO STUDENT_DETAIL
	VALUES('B1405569', '1996-11-11', 'Nam', 'Tien Giang', 'Hung Vuong', '0986541225');

SELECT * FROM STUDENT_DETAIL;
DROP TABLE STUDENT_DETAIL;

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


INSERT INTO SUBJECT
	VALUES('CT313H','CNTT', 'Cong nghe va dich vu Web', 3);
INSERT INTO SUBJECT
	VALUES('CT201H','TTMMT', 'An ninh may tinh', 3);
INSERT INTO SUBJECT
	VALUES('CT107H','CNTT','Lap trinh can ban',3);
INSERT INTO SUBJECT
	VALUES('MT106','TH','Triet Hoc',2);
INSERT INTO SUBJECT
	VALUES('TS104','NTTS','Nuoi Ca',4);
INSERT INTO SUBJECT
	VALUES('CT104H','CNTT','Oracle',3);
INSERT INTO SUBJECT
	VALUES('MT107','TH','Mac Lenin',3);
INSERT INTO SUBJECT
	VALUES('MTR100','KTTNN','O nhiem nuoc',3);
INSERT INTO SUBJECT
	VALUES('SP127','SPTH','Toan Cao Cap',3);
INSERT INTO SUBJECT
	VALUES('SP107','SPTH','Toan Roi Rac',4);


SELECT * FROM SUBJECT;
DROP TABLE SUBJECT;

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

INSERT INTO SCORE_RECORD
	VALUES('CT313H', 'B1605369', 3, 1, 3.9);
INSERT INTO SCORE_RECORD
	VALUES('CT201H', 'B1405404', 3, 1, 3.6);
INSERT INTO SCORE_RECORD
	VALUES('CT201H', 'B1605369', 3, 1, 2.5);
INSERT INTO SCORE_RECORD
	VALUES('CT313H', 'B1605396', 3, 1, 0.9);
INSERT INTO SCORE_RECORD
	VALUES('CT313H', 'B1405404', 3, 1, 3.9);
INSERT INTO SCORE_RECORD
	VALUES('CT107H', 'B1605369', 1, 2, 1.4);
INSERT INTO SCORE_RECORD
	VALUES('SP107', 'B1709588', 2, 2, 4.0);
INSERT INTO SCORE_RECORD
	VALUES('MT107', 'B1200369', 3, 2, 2.4);
INSERT INTO SCORE_RECORD
	VALUES('MTR100', 'B1405569', 1, 2, 2.6);
INSERT INTO SCORE_RECORD
	VALUES('TS104', 'B1305069', 3, 1, 3.3);
INSERT INTO SCORE_RECORD
	VALUES('SP107', 'B1305069', 3, 1, 1.3);
INSERT INTO SCORE_RECORD
	VALUES('SP107', 'B1405404', 3, 1, 1.3);
SELECT * FROM SCORE_RECORD;
DROP TABLE SCORE_RECORD;


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
    
DROP PROCEDURE filterAcademicWarning//
    
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
    
DROP FUNCTION avgWithStudentIdYearAndSemester//

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
    
DROP PROCEDURE showBadSubjectWithMajorNamePerSemester;


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
    DROP PROCEDURE showTop2FalcultyStudent//
    

-- show student include id, student name, class name, faculty name
CREATE PROCEDURE showFullStudentInfo(StdId CHAR(10))
    BEGIN
		SELECT STUDENT.ID,STUDENT.STUDENTNAME,CLASS.CLASSNAME,MAJOR.MAJORNAME,FALCULTY.FALNAME FROM FALCULTY JOIN MAJOR 
        ON FALCULTY.ID = MAJOR.FalId JOIN CLASS
        ON CLASS.MajorId = MAJOR.Id JOIN STUDENT 
        ON STUDENT.ClassId = CLASS.Id
        WHERE STUDENT.ID = StdId;
    END//
    DROP PROCEDURE showFullStudentInfo//

-- get total student each faculty by faculty id    
CREATE FUNCTION getTotalStudentWithFalcultyId(FalId CHAR(10))
	RETURNS INT  DETERMINISTIC
	BEGIN
		DECLARE RESULT INT DEFAULT 1;
		SELECT COUNT(*) INTO RESULT FROM FALCULTY JOIN MAJOR 
        ON FALCULTY.ID = MAJOR.FalId JOIN CLASS
        ON CLASS.MajorId = MAJOR.Id JOIN STUDENT 
        ON STUDENT.ClassId = CLASS.Id
        WHERE FALCULTY.Id = FalId;
        RETURN RESULT;
    END//
    
DROP FUNCTION getTotalStudentWithFalcultyId//
delimiter ;

SELECT * FROM MAJOR;
SELECT * FROM COURSE;
SELECT * FROM SCORE_RECORD;
SELECT * FROM STUDENT;

-- testing
	-- find student with studentid is b1605404
CALL findStudentWithId('B1605404');
	

CALL findAnything('falculty','falname','Khoa Du Bi Dan Toc');
CALL findAnything('STUDENT_DETAIL','GENDER','NAM');
CALL findAnything('STUDENT_DETAIL','GENDER','N%');

CALL modifyAnything('STUDENT','AcademicWarning','2','Id','B1605369');
CALL modifyAnything('STUDENT','AcademicWarning','2','Id','B1605396');

CALL deleteAnyThing('STUDENT','Id','B1605404');

CALL filterAcademicWarning(2,1);

CALL showTop2FalcultyStudent('khoa cong nghe thong tin va truyen thong',3,1);

CALL showBadSubjectWithMajorNamePerSemester('cong nghe thong tin',3,1);

CALL showFullStudentInfo('B1605369');

SELECT avgWithStudentIdYearAndSemester('B1605369',3,1) AS AVG;

SELECT getTotalStudentWithFalcultyId('KT') AS Total;



