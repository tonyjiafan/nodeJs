/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.5.37 : Database - yohobuy
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`yohobuy` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `yohobuy`;

/*Table structure for table `t_colandproduct` */

DROP TABLE IF EXISTS `t_colandproduct`;

CREATE TABLE `t_colandproduct` (
  `c2_id` int(11) NOT NULL AUTO_INCREMENT,
  `c2_col_id` int(10) DEFAULT NULL,
  `c2_p_id` int(10) DEFAULT NULL,
  `c2_amount` int(10) DEFAULT NULL,
  `c2_sell` int(10) DEFAULT NULL,
  `c2_stock` int(10) DEFAULT NULL,
  `c2_sz_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`c2_id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_colandproduct` */

insert  into `t_colandproduct`(`c2_id`,`c2_col_id`,`c2_p_id`,`c2_amount`,`c2_sell`,`c2_stock`,`c2_sz_id`) values (1,4,1,20,0,20,4),(2,3,1,20,0,12,4),(3,2,1,15,0,13,6),(4,1,1,25,0,17,6),(5,4,1,10,0,9,3),(6,1,1,10,0,9,5),(7,1,2,10,0,10,2),(8,2,2,10,0,10,3),(9,2,2,10,0,8,4),(10,4,2,20,0,19,2),(11,3,5,50,NULL,49,2),(12,2,3,20,NULL,20,1),(13,1,3,20,NULL,20,1),(14,2,4,20,NULL,17,2),(15,1,4,20,NULL,20,3),(16,4,4,20,NULL,17,4),(17,1,4,20,NULL,20,1),(18,2,3,20,NULL,18,4),(19,2,3,20,NULL,20,3),(20,1,3,20,NULL,20,3),(21,2,5,50,NULL,47,2),(22,4,6,50,NULL,50,4),(23,1,6,50,NULL,50,3),(24,2,7,50,NULL,50,2),(25,2,7,50,NULL,50,1),(26,2,8,100,NULL,100,2),(27,3,9,100,NULL,98,6),(28,4,10,100,NULL,98,5),(29,4,11,50,NULL,50,3),(30,2,11,50,NULL,50,2),(31,1,12,50,NULL,50,1),(32,2,12,50,NULL,50,2),(33,3,13,50,NULL,50,3),(34,3,13,50,NULL,50,2),(35,2,14,25,NULL,25,3),(36,1,14,25,NULL,25,2),(37,4,14,25,NULL,25,4),(38,3,14,25,NULL,25,4),(39,4,15,50,NULL,50,3),(40,1,15,50,NULL,50,5),(41,2,16,100,NULL,100,3),(42,4,17,100,NULL,97,5),(43,2,18,100,NULL,100,4),(44,3,19,100,NULL,100,3),(45,4,20,100,NULL,100,2),(46,3,21,100,NULL,100,2),(47,2,22,100,NULL,100,1),(48,4,23,50,NULL,50,2),(49,4,23,50,NULL,50,2),(50,3,24,30,NULL,30,3),(51,2,24,40,NULL,40,5),(52,1,24,30,NULL,30,4),(53,2,25,100,NULL,100,3),(54,4,26,100,NULL,100,2),(55,2,27,100,NULL,100,1),(56,3,28,50,NULL,50,2),(57,3,28,50,NULL,50,3),(58,2,29,40,NULL,40,4),(59,2,29,30,NULL,30,5),(60,4,29,30,NULL,30,4),(61,2,30,100,NULL,100,3),(62,2,31,50,NULL,50,2),(63,4,31,50,NULL,50,1),(64,3,32,25,NULL,25,4),(65,2,32,25,NULL,25,3),(66,2,32,25,NULL,25,2),(67,1,32,25,NULL,25,1);

/*Table structure for table `t_color` */

DROP TABLE IF EXISTS `t_color`;

CREATE TABLE `t_color` (
  `col_id` int(11) NOT NULL AUTO_INCREMENT,
  `col_name` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`col_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_color` */

insert  into `t_color`(`col_id`,`col_name`) values (1,'çº¢è‰²'),(2,'é»‘è‰²'),(3,'ç°è‰²'),(4,'é»„è‰²'),(5,'ç™½è‰²');

/*Table structure for table `t_hot` */

DROP TABLE IF EXISTS `t_hot`;

CREATE TABLE `t_hot` (
  `h_id` int(10) NOT NULL AUTO_INCREMENT,
  `h_p_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`h_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_hot` */

insert  into `t_hot`(`h_id`,`h_p_id`) values (1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(12,12),(13,13),(14,14),(15,15),(16,16),(17,17),(18,18),(19,19),(20,20),(21,21),(22,22),(23,23),(24,24),(25,25),(26,26),(27,27),(28,28),(29,29),(30,30),(31,31),(32,32);

/*Table structure for table `t_m_product` */

DROP TABLE IF EXISTS `t_m_product`;

CREATE TABLE `t_m_product` (
  `p_mid` int(50) NOT NULL AUTO_INCREMENT,
  `p_sex_mid` int(50) DEFAULT NULL,
  `p_t_id` int(40) DEFAULT NULL,
  `p_s_id` int(50) DEFAULT NULL,
  `p_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_newPrice` decimal(10,2) DEFAULT NULL,
  `p_indexSrc` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_infoSrcMin` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_infoSrcMid` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_infoSrcLar` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_infoIntro` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_comment` decimal(10,0) DEFAULT NULL,
  `p_amount` int(10) DEFAULT NULL,
  `p_sellAmount` int(10) DEFAULT NULL,
  `p_stock` int(10) DEFAULT NULL,
  PRIMARY KEY (`p_mid`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_m_product` */

insert  into `t_m_product`(`p_mid`,`p_sex_mid`,`p_t_id`,`p_s_id`,`p_name`,`p_newPrice`,`p_indexSrc`,`p_infoSrcMin`,`p_infoSrcMid`,`p_infoSrcLar`,`p_infoIntro`,`p_comment`,`p_amount`,`p_sellAmount`,`p_stock`) values (88,1,1,1,' ç¾Žå¼æ‹¼æŽ¥ç¯®çƒéž‹ ç”·æ¬¾','200.00','msn1.png','mi11,mi12,mi13,mi14,mi15,mi16','mc1',NULL,'è¿™åŒéž‹æ¬¾åœ¨Chuck Taylor ALL STARçš„åŸºç¡€ä¸Šåšäº†è®¸å¤šå˜åŒ–ï¼Œå»¶ç»­CTASçš„ç»å…¸éž‹å¤´ï¼Œé‡‡ç”¨æ‹¼æŽ¥æè´¨è¿›è¡Œè®¾è®¡ï¼Œå†…éƒ¨åŠ ç»’ï¼Œæ˜¯ä¸€åŒå¾ˆå…·æœ‰é£Žåº¦çš„éž‹æ¬¾ã€‚é«˜å¸®ï¼Œäººé€ é©/çººç»‡ç»‡ç‰©ï¼Œæžšçº¢è‰²ã€‚',NULL,NULL,NULL,NULL),(89,1,2,1,'å­£èŠ‚å›¾æ¡ˆå°èŠ±é•¿è¢–Tæ¤ ç”·æ¬¾','300.00','msn2.png','mi21,mi22',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(90,1,2,1,'å°èŠ±è¿žå¸½æ‹‰é“¾è¡« ç”·æ¬¾','140.00','msn3.png','mi31,mi32',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(91,1,2,3,'å°èŠ±è¿žå¸½æ‹‰é“¾è¡« ç”·æ¬¾','650.00','msn4.png','mi41,mi42',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(92,1,2,3,' å°èŠ±è¿žå¸½æ‹‰é“¾è¡« ç”·æ¬¾','760.00','msn5.png','mi51,mi52',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(93,1,2,3,' å°èŠ±è¿žå¸½æ‹‰é“¾è¡« ç”·æ¬¾','909.00','msn6.png','mi61,mi62',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(94,1,2,3,'å°èŠ±è¿žå¸½æ‹‰é“¾è¡« ç”·æ¬¾','888.00','msn7.png','',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(95,1,2,2,'å°èŠ±è¿žå¸½æ‹‰é“¾è¡« ç”·æ¬¾','666.00','msn8.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(96,1,2,1,'å°èŠ±è¿žå¸½æ‹‰é“¾è¡« ç”·æ¬¾','222.00','msn9.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(97,1,3,2,'æ’žè‰²æ˜Ÿæ˜Ÿå°èŠ±å°æŒŽåŒ… ä¸­æ€§','636.00','msn11.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(98,2,4,3,'ç²¾è‡´ç¾Šçš®æ‹‰é“¾ å¥³æ¬¾','888.00','msu1.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(99,2,4,2,'ç²¾è‡´ç¾Šçš®æ‹‰é“¾ å¥³æ¬¾','778.00','msu2.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(100,2,4,4,'ç²¾è‡´ç¾Šçš®æ‹‰é“¾ å¥³æ¬¾','667.00','msu3.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(101,2,5,3,'æ‹‰é“¾é’ˆç»‡å¤–å¥— å¥³æ¬¾','776.00','msu4.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(102,2,4,2,'ç²¾è‡´ç¾Šçš®æ‹‰é“¾ å¥³æ¬¾','999.00','msu5.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(103,2,5,1,'æ‹‰é“¾é’ˆç»‡å¤–å¥— å¥³æ¬¾','44.00','msu6.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(104,2,4,2,'ç²¾è‡´ç¾Šçš®æ‹‰é“¾ å¥³æ¬¾','333.00','msu7.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(105,2,4,3,'ç²¾è‡´ç¾Šçš®æ‹‰é“¾ å¥³æ¬¾','99.00','msu8.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(106,2,6,2,'è¿·å½©å›¾æ¡ˆå¹³æ²¿å¸½ ä¸­æ€§','333.00','msu9.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(107,2,6,1,'è¿·å½©å›¾æ¡ˆå¹³æ²¿å¸½ ä¸­æ€§','222.00','msu10.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `t_m_type` */

DROP TABLE IF EXISTS `t_m_type`;

CREATE TABLE `t_m_type` (
  `t_id` int(50) NOT NULL AUTO_INCREMENT,
  `t_name` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `t_src` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `t_sex_id` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_m_type` */

insert  into `t_m_type`(`t_id`,`t_name`,`t_src`,`t_sex_id`) values (1,'ç”·çš„è¸©çš„','iHot1.png','1'),(2,'ç”·çš„ç©¿çš„','iHot2.png','1'),(3,'ç”·çš„æˆ´çš„','iHot6.png','1'),(4,'å¥³çš„è¸©çš„','iHot4.png','2'),(5,'å¥³çš„ç©¿çš„','iHot5.png','2'),(6,'å¥³çš„æˆ´çš„','iHot3.png','2');

/*Table structure for table `t_newproduct` */

DROP TABLE IF EXISTS `t_newproduct`;

CREATE TABLE `t_newproduct` (
  `p_id` int(50) NOT NULL AUTO_INCREMENT,
  `p_t_id` int(50) DEFAULT NULL,
  `p_s_id` int(50) DEFAULT NULL,
  `p_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_newPrice` decimal(10,2) DEFAULT NULL,
  `p_indexSrc` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_infoSrcMin` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_infoSrcMid` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_infoSrcLar` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_infoIntro` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_m_indexSrc` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_amount` int(10) DEFAULT NULL,
  `p_stock` int(10) DEFAULT NULL,
  `p_sex_id` int(10) DEFAULT NULL,
  `p_m_searchSrc` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_m_infoSrcLar` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_m_infoSrcMin` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_newproduct` */

/*Table structure for table `t_product` */

DROP TABLE IF EXISTS `t_product`;

CREATE TABLE `t_product` (
  `p_id` int(11) NOT NULL AUTO_INCREMENT,
  `p_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_price` decimal(10,2) DEFAULT NULL,
  `p_brand` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_index_imgLIST` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_detail_imgDA` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_detail_imgXIAO` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_detail_imgINFO` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_detail_imgCHIMA` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_discountZHEKOU` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_intro_imgJIESHAO` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_t_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_product` */

insert  into `t_product`(`p_id`,`p_name`,`p_price`,`p_brand`,`p_index_imgLIST`,`p_detail_imgDA`,`p_detail_imgXIAO`,`p_detail_imgINFO`,`p_detail_imgCHIMA`,`p_discountZHEKOU`,`p_intro_imgJIESHAO`,`p_t_id`) values (1,'Shapeless休闲 时尚 质感布裤收腿型','499.00','shapeless','list1.jpg','infoda1.jpg@infoda2.jpg','infoxiao1.jpg@infoxiao2.jpg','zhekou1.jpg','small.jpg','【优品推介】满￥799享7.8折@【优品推介】满￥499享8.8折@【全场99元加价购】@【全场59元加价购】@【全场39元加价购】','zhanshib (1).jpg@zhanshib (2).jpg@zhanshib (3).jpg@zhanshib (4).jpg@zhanshib (5).jpg@zhanshib (6).jpg@zhanshib (7).jpg@zhanshib (8).jpg',6),(2,'ShapelesS 时尚 质感 修身 英伦丝光长裤','329.00','shapeless','shop3-LIST.jpg','SHP3info1DA.jpg@SHP3info2DA.jpg@SHP3info3DA.jpg','SHP3info1XIAO.jpg@SHP3info2XIAO.jpg@SHP3info3XIAO.jpg','zhekou1.jpg','shop3small.jpg','【优品推介】满￥799享7.8折@【优品推介】满￥499享8.8折@【全场99元加价购】@【全场59元加价购】@【全场39元加价购】','BOT-LIST (1).jpg@BOT-LIST (2).jpg@BOT-LIST (3).jpg@BOT-LIST (4).jpg@BOT-LIST (5).jpg@BOT-LIST (6).jpg@BOT-LIST (7).jpg@BOT-LIST (8).jpg@BOT-LIST (9).jpg@BOT-LIST (10).jpg@BOT-LIST (11).jpg@BOT-LIST (12).jpg@',6),(3,'Wuss机车眼镜 时尚 007同款','1200.00','Wuss','shop4LIST.jpg','shop4info1DA.jpg@shop4info2DA.jpg','shop4info1XIAO.jpg@shop4info2XIAO.jpg','zhekou1.jpg','shop4SMALL.jpg','【优品推介】满￥799享7.8折@【优品推介】满￥499享8.8折@【全场99元加价购】@【全场59元加价购】@【全场39元加价购】','SHOP4zhanshi (1).jpg@SHOP4zhanshi (2).jpg@SHOP4zhanshi (3).jpg@SHOP4zhanshi (4).jpg@SHOP4zhanshi (5).jpg@SHOP4zhanshi (6).jpg',9),(4,'Shapeless 时尚 双肩背包 漆皮','280.00','Shapeless','shop5LIST .jpg','shop5infoDA (1).jpg@shop5infoDA (2).jpg','shop5infoXIAO (1).jpg@shop5infoXIAO (2).jpg','zhekou1.jpg','shop5SMALL.jpg','【优品推介】满￥799享7.8折@【优品推介】满￥499享8.8折@【全场99元加价购】@【全场59元加价购】@【全场39元加价购】','sh5zhanshi (1).jpg@sh5zhanshi (2).jpg@sh5zhanshi (3).jpg@sh5zhanshi (4).jpg@sh5zhanshi (5).jpg@sh5zhanshi (6).jpg@sh5zhanshi (7).jpg@',9),(5,'Shapeless 男士纯色立体剪裁夹克 ','629.00','shapeless','shop6LIST.jpg','SHOP6DA (1).jpg@SHOP6DA (2).jpg','SHOP6XIAO (1).jpg@SHOP6XIAO (2).jpg','SH6zhekou.jpg','SHOP6small.jpg',NULL,'sh6BOTTOM (1).jpg@sh6BOTTOM (2).jpg@sh6BOTTOM (3).jpg@sh6BOTTOM (4).jpg@sh6BOTTOM (5).jpg@sh6BOTTOM (6).jpg',1),(6,'adidasOriginals 5 PANEL CAP RUN 棒球帽','279.00','adidas Originals','shop7LIST.jpg','SH7DA1.jpg','SH7XIAO1.jpg','SH7zhekou.jpg','SHOP7small.jpg',NULL,'SH7bottom (1).jpg@SH7bottom (2).jpg@SH7bottom (3).jpg@SH7bottom (4).jpg',9),(7,'adidasOriginals TUBULAR RUNNER 运动鞋 ','1299.00','adidas Originals','sh8LIST.jpg','sh8DA.jpg','sh8XIAO.jpg','SH7zhekou.jpg','SH8SMALL.jpg',NULL,'SH8BOTT (1).jpg@SH8BOTT (2).jpg@SH8BOTT (3).jpg@SH8BOTT (4).jpg',10),(8,'WUSSA舞时 探索系列波浪纹理男表 ','2899.00','WUSSA舞时','sh9LIST2.jpg','sh9DA (1).jpg@sh9DA (2).jpg','SH9xiao (1).jpg@SH9xiao (2).jpg','SH7zhekou.jpg','sh9small.jpg',NULL,'shop9BOTTOM (1).jpg@shop9BOTTOM (2).jpg@shop9BOTTOM (3).jpg@shop9BOTTOM (4).jpg@shop9BOTTOM (5).jpg@shop9BOTTOM (6).jpg@shop9BOTTOM (7).jpg@shop9BOTTOM (8).jpg@shop9BOTTOM (9).jpg@shop9BOTTOM (10).jpg@shop9BOTTOM (11).jpg@shop9BOTTOM (12).jpg@shop9BOTTOM (13).jpg@shop9BOTTOM (14).jpg',9),(9,'WUSSA舞时 时尚休闲腕表 ','14500.00','WUSSA舞时','SH10LIST.jpg','SH10DA1 (1).jpg@SH10DA1 (2).jpg','SH10XIAO1 (1).jpg@SH10XIAO1 (2).jpg','SH10ZHEKOU.jpg','SH10small.jpg',NULL,'SH10bottom (1).jpg@SH10bottom (2).jpg@SH10bottom (3).jpg@SH10bottom (4).jpg@SH10bottom (5).jpg@SH10bottom (6).jpg@SH10bottom (7).jpg@SH10bottom (8).jpg@',9);

/*Table structure for table `t_sale` */

DROP TABLE IF EXISTS `t_sale`;

CREATE TABLE `t_sale` (
  `s_id` int(11) NOT NULL AUTO_INCREMENT,
  `s_p_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_sale` */

/*Table structure for table `t_shopcar` */

DROP TABLE IF EXISTS `t_shopcar`;

CREATE TABLE `t_shopcar` (
  `sc_id` int(11) NOT NULL AUTO_INCREMENT,
  `sc_u_id` int(11) DEFAULT NULL,
  `sc_p_id` int(11) DEFAULT NULL,
  `sc_count` int(11) DEFAULT NULL,
  `sc_size` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=152 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_shopcar` */

insert  into `t_shopcar`(`sc_id`,`sc_u_id`,`sc_p_id`,`sc_count`,`sc_size`) values (134,5,3,NULL,NULL),(135,5,2,NULL,NULL),(136,5,5,NULL,NULL),(137,NULL,9,2,'L'),(139,NULL,8,3,'XL'),(142,1,8,52,'L'),(143,NULL,7,2,'M'),(145,5,6,NULL,NULL),(146,1,2,2,'M'),(147,12,2,1,'L'),(148,13,2,2,'L'),(151,15,2,1,'XL');

/*Table structure for table `t_type` */

DROP TABLE IF EXISTS `t_type`;

CREATE TABLE `t_type` (
  `t_id` int(11) NOT NULL AUTO_INCREMENT,
  `t_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_type` */

insert  into `t_type`(`t_id`,`t_name`) values (1,'外套'),(2,'风衣'),(3,'衬衫'),(4,'针织衫'),(5,'T恤'),(6,'休闲裤'),(7,'牛仔裤'),(8,'短裤'),(9,'饰品'),(10,'鞋子');

/*Table structure for table `t_user` */

DROP TABLE IF EXISTS `t_user`;

CREATE TABLE `t_user` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `u_pwd` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `t_user` */

insert  into `t_user`(`u_id`,`u_name`,`u_pwd`) values (5,'13422222222','Jia_luo1234'),(6,'15008251081','JIAjia_123'),(7,'18328720723','JIAjia_1234'),(8,'13111111111','Aa_111111'),(9,'13222222222','ABCabc_123'),(10,'13333333333','ABCabc_123'),(11,'13444444444','ABCabc_123'),(12,'13200000000','jiaJIA_1234'),(13,'13200000001','jiaJIA_1234'),(15,'13422222221','quQU_123'),(16,'15982125563','123_jiaJIA');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
