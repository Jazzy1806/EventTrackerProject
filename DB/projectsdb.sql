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
  `description` TEXT NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `created_on` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
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
INSERT INTO `project` (`id`, `name`, `description`, `category`, `status`, `created_on`) VALUES (1, 'Faerie Pot', 'Decorate terra cotta pot to look like faerie house', 'Crafts', 'One Day', '2021-09-11T14:49:45');
INSERT INTO `project` (`id`, `name`, `description`, `category`, `status`, `created_on`) VALUES (2, 'Living Wall', 'Build lattice for climbing vines and flowers along back fence', 'Gardening', 'In Progress', '2022-08-31T12:54:45');
INSERT INTO `project` (`id`, `name`, `description`, `category`, `status`, `created_on`) VALUES (3, 'Stain Storage Room Floor', 'Prep and stain concrete', 'Around The House', 'In Progress', '2022-04-23T18:46:45');
INSERT INTO `project` (`id`, `name`, `description`, `category`, `status`, `created_on`) VALUES (4, 'Install Bookshelves', 'Build out shelves in closet area for books', 'Around The House', 'One Day', '2020-05-18T11:32:45');
INSERT INTO `project` (`id`, `name`, `description`, `category`, `status`, `created_on`) VALUES (5, 'Plant Roses', 'Dig up and replace dead roses', 'Gardening', 'One Day', '2022-02-04T21:12:45');
INSERT INTO `project` (`id`, `name`, `description`, `category`, `status`, `created_on`) VALUES (6, 'Patch Drywall', 'Patch holes in ceiling', 'Around The House', 'In Progress', '2021-05-08T14:54:45');
INSERT INTO `project` (`id`, `name`, `description`, `category`, `status`, `created_on`) VALUES (7, 'Stain Deck', 'Sand/restain deck before winter', 'Around The House', 'Complete', '2022-01-17T14:54:45');
INSERT INTO `project` (`id`, `name`, `description`, `category`, `status`, `created_on`) VALUES (8, 'Peacock Mural', 'Oil painting for new art site', 'Art', 'One Day', '2022-11-26T14:54:45');
INSERT INTO `project` (`id`, `name`, `description`, `category`, `status`, `created_on`) VALUES (9, 'Plant Tree in Front Yard', 'Find drought-resistant shade tree for front yard', 'Gardening', 'One Day', '2022-04-21T14:54:45');
INSERT INTO `project` (`id`, `name`, `description`, `category`, `status`, `created_on`) VALUES (10, 'Fuel Injection Conversion', 'Convert Mustang from carb to fuel-injection', 'Automotive', 'In Progress', '2022-03-23T14:54:45');
INSERT INTO `project` (`id`, `name`, `description`, `category`, `status`, `created_on`) VALUES (11, 'New Shocks on Mazda', 'Rear shocks and alignment', 'Automotive', 'Complete', '2022-06-09T14:54:45');
INSERT INTO `project` (`id`, `name`, `description`, `category`, `status`, `created_on`) VALUES (12, 'Resurface Driveway', 'Prep old concrete and resurface', 'Around The House', 'One Day', '2021-07-14T14:54:45');
INSERT INTO `project` (`id`, `name`, `description`, `category`, `status`, `created_on`) VALUES (13, 'Portfolio Site', 'Add portfolio projects and build out About Me', 'Professional Development', 'One Day', '2020-12-24T14:54:45');

COMMIT;

