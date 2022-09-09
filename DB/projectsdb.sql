-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema projectsdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `projectsdb` ;

-- -----------------------------------------------------
-- Schema projectsdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projectsdb` DEFAULT CHARACTER SET utf8 ;
USE `projectsdb` ;

-- -----------------------------------------------------
-- Table `project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `project` ;

CREATE TABLE IF NOT EXISTS `project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(90) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `created_on` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS user@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'user'@'localhost' IDENTIFIED BY 'user';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'user'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `project`
-- -----------------------------------------------------
START TRANSACTION;
USE `projectsdb`;
INSERT INTO `project` (`id`, `name`, `category`, `status`, `created_on`) VALUES (1, 'Faerie Pot', 'Crafts', 'One Day', NULL);
INSERT INTO `project` (`id`, `name`, `category`, `status`, `created_on`) VALUES (2, 'Living Wall', 'Gardening', 'In Progress', NULL);
INSERT INTO `project` (`id`, `name`, `category`, `status`, `created_on`) VALUES (3, 'Stain Storage Room Floor', 'Around The House', 'In Progress', NULL);
INSERT INTO `project` (`id`, `name`, `category`, `status`, `created_on`) VALUES (4, 'Install Bookshelves', 'Around The House', 'One Day', NULL);
INSERT INTO `project` (`id`, `name`, `category`, `status`, `created_on`) VALUES (5, 'Plant Roses', 'Gardening', 'One Day', NULL);
INSERT INTO `project` (`id`, `name`, `category`, `status`, `created_on`) VALUES (6, 'Patch Drywall', 'Around The House', 'In Progress', NULL);
INSERT INTO `project` (`id`, `name`, `category`, `status`, `created_on`) VALUES (7, 'Stain Deck', 'Around The House', 'Complete', NULL);
INSERT INTO `project` (`id`, `name`, `category`, `status`, `created_on`) VALUES (8, 'Peacock Mural', 'Art', 'One Day', NULL);
INSERT INTO `project` (`id`, `name`, `category`, `status`, `created_on`) VALUES (9, 'Plant Tree in Front Yard', 'Gardening', 'One Day', NULL);
INSERT INTO `project` (`id`, `name`, `category`, `status`, `created_on`) VALUES (10, 'Fuel Injection Conversion', 'Automotive', 'In Progress', NULL);
INSERT INTO `project` (`id`, `name`, `category`, `status`, `created_on`) VALUES (11, 'New Shocks on Mazda', 'Automotive', 'Complete', NULL);
INSERT INTO `project` (`id`, `name`, `category`, `status`, `created_on`) VALUES (12, 'Resurface Driveway', 'Around The House', 'One Day', NULL);
INSERT INTO `project` (`id`, `name`, `category`, `status`, `created_on`) VALUES (13, 'Portfolio Site', 'Professional Development', 'One Day', NULL);

COMMIT;

