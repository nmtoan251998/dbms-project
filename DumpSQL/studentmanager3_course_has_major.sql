-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: studentmanager3
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `course_has_major`
--

DROP TABLE IF EXISTS `course_has_major`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `course_has_major` (
  `CourseId` char(4) NOT NULL,
  `MajorId` char(10) NOT NULL,
  PRIMARY KEY (`CourseId`,`MajorId`),
  KEY `FK_COURSE_HAS_MAJOR_MAJOR_Id` (`MajorId`),
  CONSTRAINT `FK_COURSE_HAS_MAJOR_COURSE_Id` FOREIGN KEY (`CourseId`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_COURSE_HAS_MAJOR_MAJOR_Id` FOREIGN KEY (`MajorId`) REFERENCES `major` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_has_major`
--

LOCK TABLES `course_has_major` WRITE;
/*!40000 ALTER TABLE `course_has_major` DISABLE KEYS */;
INSERT INTO `course_has_major` VALUES ('TK1','TMAJOR1'),('TK10','TMAJOR1'),('TK2','TMAJOR1'),('TK3','TMAJOR1'),('TK4','TMAJOR1'),('TK5','TMAJOR1'),('TK6','TMAJOR1'),('TK7','TMAJOR1'),('TK8','TMAJOR1'),('TK9','TMAJOR1'),('TK1','TMAJOR10'),('TK10','TMAJOR10'),('TK2','TMAJOR10'),('TK3','TMAJOR10'),('TK4','TMAJOR10'),('TK5','TMAJOR10'),('TK6','TMAJOR10'),('TK7','TMAJOR10'),('TK8','TMAJOR10'),('TK9','TMAJOR10'),('TK1','TMAJOR11'),('TK10','TMAJOR11'),('TK2','TMAJOR11'),('TK3','TMAJOR11'),('TK4','TMAJOR11'),('TK5','TMAJOR11'),('TK6','TMAJOR11'),('TK7','TMAJOR11'),('TK8','TMAJOR11'),('TK9','TMAJOR11'),('TK1','TMAJOR12'),('TK10','TMAJOR12'),('TK2','TMAJOR12'),('TK3','TMAJOR12'),('TK4','TMAJOR12'),('TK5','TMAJOR12'),('TK6','TMAJOR12'),('TK7','TMAJOR12'),('TK8','TMAJOR12'),('TK9','TMAJOR12'),('TK1','TMAJOR13'),('TK10','TMAJOR13'),('TK2','TMAJOR13'),('TK3','TMAJOR13'),('TK4','TMAJOR13'),('TK5','TMAJOR13'),('TK6','TMAJOR13'),('TK7','TMAJOR13'),('TK8','TMAJOR13'),('TK9','TMAJOR13'),('TK1','TMAJOR14'),('TK10','TMAJOR14'),('TK2','TMAJOR14'),('TK3','TMAJOR14'),('TK4','TMAJOR14'),('TK5','TMAJOR14'),('TK6','TMAJOR14'),('TK7','TMAJOR14'),('TK8','TMAJOR14'),('TK9','TMAJOR14'),('TK1','TMAJOR15'),('TK10','TMAJOR15'),('TK2','TMAJOR15'),('TK3','TMAJOR15'),('TK4','TMAJOR15'),('TK5','TMAJOR15'),('TK6','TMAJOR15'),('TK7','TMAJOR15'),('TK8','TMAJOR15'),('TK9','TMAJOR15'),('TK1','TMAJOR16'),('TK10','TMAJOR16'),('TK2','TMAJOR16'),('TK3','TMAJOR16'),('TK4','TMAJOR16'),('TK5','TMAJOR16'),('TK6','TMAJOR16'),('TK7','TMAJOR16'),('TK8','TMAJOR16'),('TK9','TMAJOR16'),('TK1','TMAJOR17'),('TK10','TMAJOR17'),('TK2','TMAJOR17'),('TK3','TMAJOR17'),('TK4','TMAJOR17'),('TK5','TMAJOR17'),('TK6','TMAJOR17'),('TK7','TMAJOR17'),('TK8','TMAJOR17'),('TK9','TMAJOR17'),('TK1','TMAJOR18'),('TK10','TMAJOR18'),('TK2','TMAJOR18'),('TK3','TMAJOR18'),('TK4','TMAJOR18'),('TK5','TMAJOR18'),('TK6','TMAJOR18'),('TK7','TMAJOR18'),('TK8','TMAJOR18'),('TK9','TMAJOR18'),('TK1','TMAJOR19'),('TK10','TMAJOR19'),('TK2','TMAJOR19'),('TK3','TMAJOR19'),('TK4','TMAJOR19'),('TK5','TMAJOR19'),('TK6','TMAJOR19'),('TK7','TMAJOR19'),('TK8','TMAJOR19'),('TK9','TMAJOR19'),('TK1','TMAJOR2'),('TK10','TMAJOR2'),('TK2','TMAJOR2'),('TK3','TMAJOR2'),('TK4','TMAJOR2'),('TK5','TMAJOR2'),('TK6','TMAJOR2'),('TK7','TMAJOR2'),('TK8','TMAJOR2'),('TK9','TMAJOR2'),('TK1','TMAJOR20'),('TK10','TMAJOR20'),('TK2','TMAJOR20'),('TK3','TMAJOR20'),('TK4','TMAJOR20'),('TK5','TMAJOR20'),('TK6','TMAJOR20'),('TK7','TMAJOR20'),('TK8','TMAJOR20'),('TK9','TMAJOR20'),('TK1','TMAJOR3'),('TK10','TMAJOR3'),('TK2','TMAJOR3'),('TK3','TMAJOR3'),('TK4','TMAJOR3'),('TK5','TMAJOR3'),('TK6','TMAJOR3'),('TK7','TMAJOR3'),('TK8','TMAJOR3'),('TK9','TMAJOR3'),('TK1','TMAJOR4'),('TK10','TMAJOR4'),('TK2','TMAJOR4'),('TK3','TMAJOR4'),('TK4','TMAJOR4'),('TK5','TMAJOR4'),('TK6','TMAJOR4'),('TK7','TMAJOR4'),('TK8','TMAJOR4'),('TK9','TMAJOR4'),('TK1','TMAJOR5'),('TK10','TMAJOR5'),('TK2','TMAJOR5'),('TK3','TMAJOR5'),('TK4','TMAJOR5'),('TK5','TMAJOR5'),('TK6','TMAJOR5'),('TK7','TMAJOR5'),('TK8','TMAJOR5'),('TK9','TMAJOR5'),('TK1','TMAJOR6'),('TK10','TMAJOR6'),('TK2','TMAJOR6'),('TK3','TMAJOR6'),('TK4','TMAJOR6'),('TK5','TMAJOR6'),('TK6','TMAJOR6'),('TK7','TMAJOR6'),('TK8','TMAJOR6'),('TK9','TMAJOR6'),('TK1','TMAJOR7'),('TK10','TMAJOR7'),('TK2','TMAJOR7'),('TK3','TMAJOR7'),('TK4','TMAJOR7'),('TK5','TMAJOR7'),('TK6','TMAJOR7'),('TK7','TMAJOR7'),('TK8','TMAJOR7'),('TK9','TMAJOR7'),('TK1','TMAJOR8'),('TK10','TMAJOR8'),('TK2','TMAJOR8'),('TK3','TMAJOR8'),('TK4','TMAJOR8'),('TK5','TMAJOR8'),('TK6','TMAJOR8'),('TK7','TMAJOR8'),('TK8','TMAJOR8'),('TK9','TMAJOR8'),('TK1','TMAJOR9'),('TK10','TMAJOR9'),('TK2','TMAJOR9'),('TK3','TMAJOR9'),('TK4','TMAJOR9'),('TK5','TMAJOR9'),('TK6','TMAJOR9'),('TK7','TMAJOR9'),('TK8','TMAJOR9'),('TK9','TMAJOR9');
/*!40000 ALTER TABLE `course_has_major` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-30 15:20:27