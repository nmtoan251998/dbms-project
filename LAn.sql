-- SHOW DATABASES;
-- CREATE DATABASE STUDENTMANAGER3;
-- USE STUDENTMANAGER3;
-- SELECT * FROM SUBJECT;
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

-- CREATE TABLE FALCULTY(
-- 	Id CHAR(10) ,
-- 	FalName VARCHAR(50),
-- 	Dean VARCHAR(50),
-- 	CONSTRAINT PK_FAL PRIMARY KEY(Id)
-- );

-- INSERT INTO FALCULTY VALUES ('CNTTTT', 'Khoa Cong Nghe Thong Tin Va Truyen Thong', 'Nguyen Huu Hoa');
-- INSERT INTO FALCULTY VALUES ('KT', 'Khoa Kinh Te', 'Nguyen Duy Lan');
-- INSERT INTO FALCULTY VALUES ('KH', 'Khoa Khoa Hoc Tu Nhien', 'Nguyen Thai Ngoc');
-- INSERT INTO FALCULTY VALUES ('MT', 'Khoa Chinh Tri', 'Nguyen Minh Toan');
-- INSERT INTO FALCULTY VALUES ('XH', 'Khoa Xa Hoi Va Nhan Van', 'Nguyen Anh Tu');
-- INSERT INTO FALCULTY VALUES ('TC', 'Khoa The Chat', 'Nguyen Hoang Huy');
-- INSERT INTO FALCULTY VALUES ('SP', 'Khoa Su Pham', 'Nguyen Quang Khai');
-- INSERT INTO FALCULTY VALUES ('DB', 'Khoa Du Bi Dan Toc', 'Nguyen Van Loi');
-- INSERT INTO FALCULTY VALUES ('MTR', 'Khoa Moi Truong', 'Nguyen Thu Trang');
-- INSERT INTO FALCULTY VALUES ('TS', 'Khoa Thuy San', 'Nguyen Thanh Thao');


-- DELETE FROM FALCULTY
-- 	LIMIT 3;    
-- SELECT * FROM FALCULTY;
-- DROP TABLE FALCULTY;

-- DELETE FROM FALCULTY WHERE id = 'CNTTTT';
-- CREATE TABLE MAJOR(
-- 	Id CHAR(10),
-- 	FalId CHAR(10),
-- 	MajorName VARCHAR(50),
-- 	CONSTRAINT PK_MAJOR PRIMARY KEY(Id),
-- 	CONSTRAINT FK_MAJOR_FAL_ID FOREIGN KEY (FalId) REFERENCES  FALCULTY(Id) ON DELETE CASCADE
-- );


-- DESC MAJOR;

-- INSERT INTO MAJOR
-- 	VALUES('CNTT', 'CNTTTT','Cong Nghe Thong Tin');
-- INSERT INTO MAJOR
-- 	VALUES('CNTTCLC', 'CNTTTT', 'Cong Nghe Thong Tin CLC');
-- INSERT INTO MAJOR
-- 	VALUES('KHMTCLC', 'CNTTTT','Khoa Hoc May Tinh CLC');
-- INSERT INTO MAJOR
-- 	VALUES('TTMMT', 'CNTTTT','Truyen Thong Mang May Tinh');
-- INSERT INTO MAJOR
-- 	VALUES('KDQT', 'KT', 'Kinh Doanh Quoc Te');
-- INSERT INTO MAJOR
-- 	VALUES('QTKD', 'KT', 'Quan Tri Kinh Doanh');
-- INSERT INTO MAJOR
-- 	VALUES('KDQTCLC', 'KT','Kinh Doanh Quoc Te CLC');
-- INSERT INTO MAJOR
-- 	VALUES('TH', 'MT','Triet Hoc');
-- INSERT INTO MAJOR
-- 	VALUES('NTTS', 'TS','Nuoi Trong Thuy San');
-- INSERT INTO MAJOR
-- 	VALUES('SPTH', 'SP','Su Pham Toan Hoc');
-- INSERT INTO MAJOR
-- 	VALUES('KTTNN', 'MTR','Ky Thuat Tai Nguyen Nuoc');


-- DELETE FROM MAJOR
-- 	LIMIT 5;
-- SELECT * FROM MAJOR;
-- DROP TABLE MAJOR;

-- CREATE TABLE CLASS(
-- 	Id CHAR(10), 
-- 	MajorId CHAR(4),
-- 	ClassName VARCHAR(40),
-- 	HeadTeacher VARCHAR(50),
-- 	CONSTRAINT PK_CLASS PRIMARY KEY(Id),
--   CONSTRAINT FK_CLASS_MAJOR_ID FOREIGN KEY (MajorId) REFERENCES MAJOR(Id)
-- );

-- INSERT INTO CLASS VALUES ('DI16V7F1','CNTTCLC','CNTT Chat Luong Cao 1','Nguyen Thi Diem');
-- INSERT INTO CLASS VALUES ('DI16V7F2','CNTTCLC','CNTT Chat Luong Cao 2','Nguyen Ngoc My');
-- INSERT INTO CLASS VALUES ('KT16V7F3','KT','Kinh Doanh Quoc Te Chat Luong Cao 3','Nguyen Toan Minh');
-- INSERT INTO CLASS VALUES ('MT15V7F1','TH','Triet Hoc 1','Nguyen Thi Diem Tran');
-- INSERT INTO CLASS VALUES ('MTR14V7F1','KTTNN','Ky Thuat Tai Nguyen Nuoc 1','Nguyen Thi Van');
-- INSERT INTO CLASS VALUES ('SP13V7F2','SPTH','Su Pham Toan Hoc 2','Nguyen Thi Diem');
-- INSERT INTO CLASS VALUES ('TS17V7F2','NTTS','Nuoi Trong Thuy San 2','Tran Van An');
-- INSERT INTO CLASS VALUES ('KT12V7F1','QTKD','Quan Tri Kinh Doanh 1','Le Cong Cong');
-- INSERT INTO CLASS VALUES ('DI15V7F1','KHMT','Khoa Hoc May Tinh 1','Pham Nguyen Khang');
-- INSERT INTO CLASS VALUES ('DI17V7F1','KHMTCLC','Khoa Hoc May Tinh Chat Luong Cao 1','Nguyen Huu Hoa');
-- DELETE FROM CLASS
-- 	LIMIT 3;    
-- SELECT * FROM CLASS;
-- DROP TABLE CLASS;

-- CREATE TABLE COURSE(
--   	Id CHAR(4),
--     CourseName CHAR(10) NOT NULL,
--     StartYear DATE,
--     EndYear DATE,
--     CONSTRAINT PK_COURSE PRIMARY KEY(Id)
-- );

-- INSERT INTO COURSE VALUES('K42','Khoa 42','2016-1-1','2020-1-1');
-- INSERT INTO COURSE VALUES('K43','Khoa 43','2017-1-1','2021-1-1');
-- INSERT INTO COURSE VALUES('K44','Khoa 44','2018-1-1','2022-1-1');
-- INSERT INTO COURSE VALUES('K45','Khoa 45','2019-1-1','2023-1-1');
-- INSERT INTO COURSE VALUES('K40','Khoa 40','2014-1-1','2018-1-1');
-- INSERT INTO COURSE VALUES('K41','Khoa 41','2015-1-1','2019-1-1');
-- INSERT INTO COURSE VALUES('K46','Khoa 46','2020-1-1','2024-1-1');
-- INSERT INTO COURSE VALUES('K47','Khoa 47','2021-1-1','2025-1-1');
-- INSERT INTO COURSE VALUES('K48','Khoa 48','2022-1-1','2026-1-1');
-- INSERT INTO COURSE VALUES('K39','Khoa 40','2013-1-1','2017-1-1');
-- INSERT INTO COURSE VALUES('K38','Khoa 40','2012-1-1','2016-1-1');
-- SELECT * FROM COURSE;
-- DROP TABLE COURSE;

-- CREATE TABLE COURSE_HAS_MAJOR(
-- 	CourseId CHAR(4),
--     MajorId CHAR(10),
--     CONSTRAINT FK_COURSE_HAS_MAJOR_MAJOR_Id FOREIGN KEY (MajorId) REFERENCES MAJOR(Id),
--     CONSTRAINT FK_COURSE_HAS_MAJOR_COURSE_Id FOREIGN KEY (CourseId) REFERENCES COURSE(Id),
--     CONSTRAINT PK_COURSE PRIMARY KEY(CourseId,MajorId)
-- );

-- INSERT INTO COURSE_HAS_MAJOR VALUES ('K42','CNTT'),
-- 						('K42','CNTTCLC'),
--                         ('K42','QTKD'),
--                         ('K40','CNTTCLC');
                        
-- INSERT INTO COURSE_HAS_MAJOR VALUES ('K42','KDQTCLC');
-- INSERT INTO COURSE_HAS_MAJOR VALUES ('K43','NTTS'),
-- 									('K41','TH'),
--                                     ('K39','SPTH'),
--                                     ('K38','QTKD'),
--                                     ('K40','KTTNN');

-- SELECT * FROM COURSE_HAS_MAJOR;
-- DROP TABLE COURSE_HAS_MAJOR;

-- CREATE TABLE STUDENT(
-- 	Id CHAR(10),
-- 	ClassId CHAR(10),
-- 	StudentName VARCHAR(50),
-- 	CONSTRAINT PK_STUDENT PRIMARY KEY(Id),
-- 	CONSTRAINT FK_STUDENT_CLASS_ID FOREIGN KEY (ClassId) REFERENCES  CLASS(Id)
-- );

-- INSERT INTO STUDENT
-- 	VALUES('B1605369','DI16V7F1','Nguyen Minh Toan');
-- INSERT INTO STUDENT
-- 	VALUES('B1405404', 'DI16V7F2','Nguyen Thai Ngoc');
-- INSERT INTO STUDENT
-- 	VALUES('B1605396','DI16V7F1',  'Le Phuc Loc');
-- INSERT INTO STUDENT
-- 	VALUES('B1605383','KT16V7F3', 'Nguyen Thu Trang');
-- INSERT INTO STUDENT
-- 	VALUES('B1605333','DI16V7F1',' Mai Ngoc Tuong Minh');
-- INSERT INTO STUDENT
-- 	VALUES('B1709588','TS17V7F2','Nguyen Van Tu'); 
-- INSERT INTO STUDENT
-- 	VALUES('B1505369','MT15V7F1','Le Thi Kim Binh');
-- INSERT INTO STUDENT
-- 	VALUES('B1305069','SP13V7F2','Tran Hung Dao');
-- INSERT INTO STUDENT
-- 	VALUES('B1200369','KT12V7F1','Nguyen Minh Tinh');
-- INSERT INTO STUDENT
-- 	VALUES('B1405569','MTR14V7F1','Ninh Phuoc Thu');
-- ALTER TABLE STUDENT ADD COLUMN AcademicWarning INT DEFAULT 0;

-- UPDATE STUDENT SET Course='K42' WHERE Id = 'B1605383';
    
    
-- DELETE FROM STUDENT
-- 	LIMIT 4;
-- SELECT * FROM STUDENT;
-- DROP TABLE STUDENT;


-- CREATE TABLE STUDENT_DETAIL(
-- 	Id CHAR(10),
-- 	DoB DATE,
-- 	Gender CHAR(5),
-- 	City VARCHAR(50),
-- 	Address VARCHAR(50),
-- 	Phone CHAR(11),
-- 	CONSTRAINT PK_STUDENT_DETAIL PRIMARY KEY(Id),
-- 	CONSTRAINT FK_STUDENT_DETAIL_STUDENT_ID FOREIGN KEY (Id) REFERENCES  STUDENT(Id)
-- );

-- INSERT INTO STUDENT_DETAIL
-- 	VALUES('B1605369', '1998-05-02', 'Nam', 'Can Tho', '12/54A Quang Trung', '0987654321');
-- INSERT INTO STUDENT_DETAIL
-- 	VALUES('B1605383', '1998-09-14', 'Nam', 'Ca Mau', '22/54AE/78B Ho Tung Mau', '0987654322');
-- INSERT INTO STUDENT_DETAIL
-- 	VALUES('B1605396', '1998-05-12', 'Nam', 'Can Tho', '132A 3/2 Ninh Kieu', '0987654323');
-- INSERT INTO STUDENT_DETAIL
-- 	VALUES('B1405404', '1996-01-01', 'Nam', 'Can Tho', '121A 30/4 Ninh Kieu', '0987654324');
-- INSERT INTO STUDENT_DETAIL
-- 	VALUES('B1605333', '1998-01-01', 'Nu', 'Kien Giang', '158A 3/2 Phu Cuong', '0987654325');
-- INSERT INTO STUDENT_DETAIL
-- 	VALUES('B1709588', '1999-10-22', 'Nam', 'Kien Giang', '30/4', '0987555555');
-- INSERT INTO STUDENT_DETAIL
-- 	VALUES('B1505369', '1997-01-01', 'Nu', 'Soc Trang', 'Cu Lao Dung', '0879654555');
-- INSERT INTO STUDENT_DETAIL
-- 	VALUES('B1305069', '1995-10-01', 'Nam', 'Vinh Long', '15A 3/2', '0976543425');
-- INSERT INTO STUDENT_DETAIL
--   VALUES('B1200369', '1994-01-10', 'Nam', 'Kien Giang', '1A 3/2 Phu Cuong', '0966654325');
-- INSERT INTO STUDENT_DETAIL
-- 	VALUES('B1405569', '1996-11-11', 'Nam', 'Tien Giang', 'Hung Vuong', '0986541225');

-- SELECT * FROM STUDENT_DETAIL;
-- DROP TABLE STUDENT_DETAIL;

-- CREATE TABLE SUBJECT(
-- 	Id CHAR(10),
-- 	MajorId CHAR(10),
-- 	SubjectName VARCHAR(50),
-- 	Credit INTEGER NOT NULL,
-- 	CONSTRAINT PK_SUBJECT PRIMARY KEY(Id),
-- 	CONSTRAINT FK_SUBJECT_MAJOR_ID FOREIGN KEY (MajorId) REFERENCES  MAJOR(Id)
-- );


-- INSERT INTO SUBJECT
-- 	VALUES('CT313H','CNTT', 'Cong nghe va dich vu Web', 3);
-- INSERT INTO SUBJECT
-- 	VALUES('CT201H','TTMMT', 'An ninh may tinh', 3);
-- INSERT INTO SUBJECT
-- 	VALUES('CT107H','CNTT','Lap trinh can ban',3);
-- INSERT INTO SUBJECT
-- 	VALUES('MT106','TH','Triet Hoc',2);
-- INSERT INTO SUBJECT
-- 	VALUES('TS104','NTTS','Nuoi Ca',4);
-- INSERT INTO SUBJECT
-- 	VALUES('CT104H','CNTT','Oracle',3);
-- INSERT INTO SUBJECT
-- 	VALUES('MT107','TH','Mac Lenin',3);
-- INSERT INTO SUBJECT
-- 	VALUES('MTR100','KTTNN','O nhiem nuoc',3);
-- INSERT INTO SUBJECT
-- 	VALUES('SP127','SPTH','Toan Cao Cap',3);
-- INSERT INTO SUBJECT
-- 	VALUES('SP107','SPTH','Toan Roi Rac',4);


-- SELECT * FROM SUBJECT;
-- DROP TABLE SUBJECT;

-- CREATE TABLE SCORE_RECORD(
-- 	SubjectId CHAR(10),
-- 	StudentId CHAR(10),
-- 	Year INTEGER,
-- 	Semester INTEGER,
-- 	Score FLOAT,
-- 	CONSTRAINT FK_SCORE_RECORD_SUBJECT_ID FOREIGN KEY (SubjectId) REFERENCES  SUBJECT(Id),
-- 	CONSTRAINT FK_SCORE_RECORD_STUDENT_ID FOREIGN KEY (StudentId) REFERENCES  STUDENT(Id),
-- 	CONSTRAINT PK_SCORE_RECORD PRIMARY KEY(SubjectId,StudentId,Year,Semester) 
-- );

-- INSERT INTO SCORE_RECORD
-- 	VALUES('CT313H', 'B1605369', 3, 1, 3.9);
-- INSERT INTO SCORE_RECORD
-- 	VALUES('CT201H', 'B1405404', 3, 1, 3.6);
-- INSERT INTO SCORE_RECORD
-- 	VALUES('CT201H', 'B1605369', 3, 1, 2.5);
-- INSERT INTO SCORE_RECORD
-- 	VALUES('CT313H', 'B1605396', 3, 1, 0.9);
-- INSERT INTO SCORE_RECORD
-- 	VALUES('CT313H', 'B1405404', 3, 1, 3.9);
-- INSERT INTO SCORE_RECORD
-- 	VALUES('CT107H', 'B1605369', 1, 2, 1.4);
-- INSERT INTO SCORE_RECORD
-- 	VALUES('SP107', 'B1709588', 2, 2, 4.0);
-- INSERT INTO SCORE_RECORD
-- 	VALUES('MT107', 'B1200369', 3, 2, 2.4);
-- INSERT INTO SCORE_RECORD
-- 	VALUES('MTR100', 'B1405569', 1, 2, 2.6);
-- INSERT INTO SCORE_RECORD
-- 	VALUES('TS104', 'B1305069', 3, 1, 3.3);
-- SELECT * FROM SCORE_RECORD;
-- DROP TABLE SCORE_RECORD;


-- -- procedure find student
-- delimiter //
-- CREATE PROCEDURE findStudentWithId(StdId varchar(50))
-- 	BEGIN 
-- 		SELECT * FROM STUDENT WHERE Id = StdId;
--     END//

-- -- this function can find anything in the world muhahahahaa
-- delimiter //
-- CREATE PROCEDURE findAnything(TableName varchar(20),ColumnName varchar(20),Value1 varchar(50))
-- 	BEGIN 
--         SET @TableName = TableName;
--         SET @ColumnName = ColumnName;
--         SET @Value1 = Value1;
--         SET @A = CONCAT('SELECT * FROM ',@TableName, ' WHERE ',@ColumnName,' LIKE "',@Value1,'"');
--         PREPARE STMT1 FROM @A;
--         EXECUTE STMT1;
--         DEaLLOCATE PREPARE STMT1;
--     END//
-- -- PROCEDURE delete student with id
-- CREATE PROCEDURE deleteAnyThing(TableName varchar(20),ColumnName varchar(20),Value1 varchar(50))
-- 	BEGIN 
--         SET @TableName = TableName;
--         SET @ColumnName = ColumnName;
--         SET @Value1 = Value1;
--         SET @A = CONCAT('DELETE FROM ',@TableName, ' WHERE ',@ColumnName,' = "',@Value1,'"');
--         PREPARE STMT1 FROM @A;
--         EXECUTE STMT1;
--         DEaLLOCATE PREPARE STMT1;
--     END//

-- -- PROCIDURE modify anything 
-- CREATE PROCEDURE modifyAnything(TableName varchar(20),ColumnModify varchar(20),NewValue varchar(50) ,ConditionColumn varchar(20),ValueCondition varchar(50))
-- 	BEGIN
-- 		SET @TableName = TableName;
--         SET @ColumnModify = ColumnModify;
--         SET @NewValue = NewValue;
--         SET @ConditionColumn = ConditionColumn;
--         SET @ValueCondition = ValueCondition;
--         SET @A = CONCAT('UPDATE ',@TableName, ' SET ',@ColumnModify,' = "',@NewValue,'" WHERE ',@ConditionColumn,' = "',ValueCondition,'"');
--         PREPARE STMT1 FROM @A;
--         EXECUTE STMT1;
--         DEaLLOCATE PREPARE STMT1;
--     END//


-- CREATE PROCEDURE filterAcademicWarning()
-- 	BEGIN
-- 	SELECT * FROM STUDENT INNER JOIN SCORE_RECORD ON STUDENT.Id = SCORE_RECORD.StudentId WHERE AcademicWarning > 1 AND Score < 1.0;
--     END//

-- CREATE PROCEDURE countNumberStudentEachFalculty(FalcultyId char(10))
-- 	BEGIN
-- 		SELECT *,COUNT(*) AS NumberStudent FROM FALCULTY INNER JOIN MAJOR
--         ON FALCULTY.Id = MAJOR.FalId INNER JOIN STUDENT 
--         ON MAJOR.Id = STUDENT.MajorId GROUP BY FALCULTY.Id HAVING FALCULTY.Id = FalcultyId;
--     END//
-- -- as the name of function
-- CREATE PROCEDURE countNumberStudentHaveTheSameFalcultyHometownAndCourse()
-- 	BEGIN
-- 		SELECT CourseId,FalId,City,COUNT(*) FROM STUDENT JOIN COURSE
-- 		 ON STUDENT.CourseId = COURSE.Id JOIN MAJOR 
-- 		 ON MAJOR.Id = STUDENT.MajorId JOIN STUDENT_DETAIL
-- 		 ON STUDENT.Id = STUDENT_DETAIL.Id
-- 		 GROUP BY CourseId,FalId,City;
-- 	END//
    
-- -- count avg according to studentid, year and semester
-- CREATE FUNCTION avgWithStudentIdYearAndSemester(StdId CHAR(10),Y INT, Seme INT)
-- 	RETURNS FLOAT  DETERMINISTIC
-- 	BEGIN
-- 		DECLARE RESULT FLOAT DEFAULT 1;
-- 		SELECT ROUND(AVG(SCORE),2) INTO RESULT FROM SCORE_RECORD JOIN STUDENT 
--         ON SCORE_RECORD.StudentId = STUDENT.Id 
--         WHERE StudentId = StdId AND SCORE_RECORD.Year = Y AND SCORE_RECORD.semester = Seme;
--         RETURN RESULT;
--     END//
-- DROP FUNCTION avgWithStudentIdYearAndSemester//
-- delimiter ;
-- SELECT * FROM MAJOR;
-- SELECT * FROM COURSE;
-- SELECT * FROM SCORE_RECORD;

-- SELECT ROUND(AVG(SCORE),2) FROM SCORE_RECORD JOIN STUDENT ON SCORE_RECORD.StudentId = STUDENT.Id WHERE StudentId = 'B1605369' and year = 3 and semester = 1;

-- CALL findStudentWithId('B1605404');
-- CALL findAnything('STUDENT','StudentName','N%');
-- CALL findAnything('STUDENT_DETAIL','GENDER','NAM');
-- CALL findAnything('STUDENT_DETAIL','GENDER','N%');
-- CALL modifyAnything('STUDENT','AcademicWarning','2','Id','B1605369');
-- CALL modifyAnything('STUDENT','AcademicWarning','2','Id','B1605396');
-- CALL deleteAnyThing('STUDENT','Id','B1605404');
-- CALL filterAcademicWarning();
-- CALL countNumberStudentEachFalculty('KT');
-- CALL countNumberStudentHaveTheSameFalcultyHometownAndCourse();
-- set @a= avgWithStudentIdYearAndSemester('B1605369',3,1);
-- select @a;
-- SELECT * FROM STUDENT;
-- DROP PROCEDURE findStudentWithId;
-- DROP PROCEDURE findAnything;


