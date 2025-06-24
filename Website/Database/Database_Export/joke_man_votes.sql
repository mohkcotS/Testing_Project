-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: joke_man
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `votes`
--

DROP TABLE IF EXISTS `votes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `votes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `joke_id` int NOT NULL,
  `user_token` varchar(255) NOT NULL,
  `vote_type` enum('like','dislike') NOT NULL,
  `voted_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `joke_id` (`joke_id`,`user_token`),
  CONSTRAINT `votes_ibfk_1` FOREIGN KEY (`joke_id`) REFERENCES `jokes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votes`
--

LOCK TABLES `votes` WRITE;
/*!40000 ALTER TABLE `votes` DISABLE KEYS */;
INSERT INTO `votes` VALUES (1,1,'269cefcb-62f9-4234-95bd-d6bb315cd42e','like','2025-06-24 17:44:03'),(2,2,'269cefcb-62f9-4234-95bd-d6bb315cd42e','dislike','2025-06-24 17:44:18'),(3,3,'269cefcb-62f9-4234-95bd-d6bb315cd42e','like','2025-06-24 17:44:19'),(4,4,'269cefcb-62f9-4234-95bd-d6bb315cd42e','dislike','2025-06-24 17:44:20'),(5,1,'ab76c5c3-e23b-4f5e-9ff2-15a9301f7b1c','dislike','2025-06-24 17:53:25'),(6,2,'ab76c5c3-e23b-4f5e-9ff2-15a9301f7b1c','like','2025-06-24 17:53:26'),(7,3,'ab76c5c3-e23b-4f5e-9ff2-15a9301f7b1c','dislike','2025-06-24 17:53:28'),(8,4,'ab76c5c3-e23b-4f5e-9ff2-15a9301f7b1c','like','2025-06-24 17:53:28'),(9,1,'058888be-2bff-498a-8e12-3644840951ab','dislike','2025-06-24 17:53:58'),(10,2,'058888be-2bff-498a-8e12-3644840951ab','dislike','2025-06-24 17:54:02'),(11,3,'058888be-2bff-498a-8e12-3644840951ab','like','2025-06-24 17:54:04'),(12,4,'058888be-2bff-498a-8e12-3644840951ab','like','2025-06-24 17:54:07'),(13,1,'6379fd10-1f04-4e79-a054-789390e27fbd','dislike','2025-06-24 20:28:36'),(14,2,'6379fd10-1f04-4e79-a054-789390e27fbd','like','2025-06-24 20:28:37'),(15,3,'6379fd10-1f04-4e79-a054-789390e27fbd','dislike','2025-06-24 20:28:38'),(16,4,'6379fd10-1f04-4e79-a054-789390e27fbd','like','2025-06-24 20:28:39'),(17,1,'076a6287-dc38-4820-ac8c-33d1008010d1','dislike','2025-06-24 20:43:53'),(18,2,'076a6287-dc38-4820-ac8c-33d1008010d1','like','2025-06-24 20:43:54'),(19,3,'076a6287-dc38-4820-ac8c-33d1008010d1','dislike','2025-06-24 21:30:52'),(20,4,'076a6287-dc38-4820-ac8c-33d1008010d1','like','2025-06-24 21:30:53');
/*!40000 ALTER TABLE `votes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-24 21:31:54
