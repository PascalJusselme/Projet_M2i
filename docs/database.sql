-- Script de création de la base de données pour Les Éclaireurs Solidaires
-- Version 1.0
-- --------------------------------------------------------------------------

-- Supprime la base de données si elle existe déjà pour repartir de zéro
DROP DATABASE IF EXISTS `eclaireurs_solidaires`;

-- Crée la base de données avec le bon encodage
CREATE DATABASE `eclaireurs_solidaires` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Sélectionne la base de données pour que toutes les commandes suivantes s'y appliquent
USE `eclaireurs_solidaires`;

-- =============================================================================
-- 1. TABLES SIMPLES (SANS DÉPENDANCES EXTERNES)
-- =============================================================================

-- Table pour les rôles (Admin, Bénévole, etc.)
CREATE TABLE `role` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `libelle` VARCHAR(50) NOT NULL UNIQUE
) ENGINE=InnoDB;

-- Table pour les villes
CREATE TABLE `city` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nom` VARCHAR(100) NOT NULL,
  `pays` VARCHAR(100) NOT NULL DEFAULT 'France'
) ENGINE=InnoDB;

-- Table pour les thématiques des missions
CREATE TABLE `thematic` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `libelle` VARCHAR(50) NOT NULL UNIQUE,
  `description` TEXT NULL
) ENGINE=InnoDB;

-- Table pour les compétences
CREATE TABLE `competences` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `libelle` VARCHAR(100) NOT NULL UNIQUE,
  `description` TEXT NULL
) ENGINE=InnoDB;

-- Table pour les statuts d'inscription à une mission
CREATE TABLE `status_inscrip` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `libelle` VARCHAR(50) NOT NULL UNIQUE
) ENGINE=InnoDB;


-- =============================================================================
-- 2. TABLE D'AUTHENTIFICATION (Centrale pour les utilisateurs)
-- =============================================================================

CREATE TABLE `auth` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL, -- Sera un hash, jamais du texte brut
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;


-- =============================================================================
-- 3. TABLES DES ENTITÉS PRINCIPALES (Bénévoles, Admins, Missions)
-- =============================================================================

CREATE TABLE `benevolent` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `uuid` VARCHAR(36) NOT NULL UNIQUE,
  `prenom` VARCHAR(100) NOT NULL,
  `nom` VARCHAR(100) NOT NULL,
  `avatar` VARCHAR(255) NULL,
  `auth_id` INT NOT NULL UNIQUE,
  `city_id` INT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  -- Déclaration des contraintes
  CONSTRAINT `fk_benevolent_auth` FOREIGN KEY (`auth_id`) REFERENCES `auth`(`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_benevolent_city` FOREIGN KEY (`city_id`) REFERENCES `city`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE `admin` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `uuid` VARCHAR(36) NOT NULL UNIQUE,
  `prenom` VARCHAR(100) NOT NULL,
  `nom` VARCHAR(100) NOT NULL,
  `telephone` VARCHAR(20) NULL,
  `auth_id` INT NOT NULL UNIQUE,
  `role_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT `fk_admin_auth` FOREIGN KEY (`auth_id`) REFERENCES `auth`(`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_admin_role` FOREIGN KEY (`role_id`) REFERENCES `role`(`id`)
) ENGINE=InnoDB;

CREATE TABLE `missions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `uuid` VARCHAR(36) NOT NULL UNIQUE,
  `libelle` VARCHAR(150) NOT NULL,
  `description` TEXT NOT NULL,
  `date_debut` DATETIME NOT NULL,
  `date_fin` DATETIME NOT NULL,
  `localisation` VARCHAR(255) NOT NULL,
  `nb_participants_requis` SMALLINT NOT NULL DEFAULT 1,
  `thematic_id` INT NULL,
  `city_id` INT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT `fk_missions_thematic` FOREIGN KEY (`thematic_id`) REFERENCES `thematic`(`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_missions_city` FOREIGN KEY (`city_id`) REFERENCES `city`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB;


-- =============================================================================
-- 4. TABLES DE JONCTION (Many-to-Many)
-- =============================================================================

CREATE TABLE `competences_benevolent` (
  `benevolent_id` INT NOT NULL,
  `competence_id` INT NOT NULL,
  
  PRIMARY KEY (`benevolent_id`, `competence_id`),
  CONSTRAINT `fk_cb_benevolent` FOREIGN KEY (`benevolent_id`) REFERENCES `benevolent`(`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_cb_competence` FOREIGN KEY (`competence_id`) REFERENCES `competences`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `competences_missions` (
  `mission_id` INT NOT NULL,
  `competence_id` INT NOT NULL,

  PRIMARY KEY (`mission_id`, `competence_id`),
  CONSTRAINT `fk_cm_mission` FOREIGN KEY (`mission_id`) REFERENCES `missions`(`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_cm_competence` FOREIGN KEY (`competence_id`) REFERENCES `competences`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB;


-- =============================================================================
-- 5. TABLES DE LOGIQUE "MÉTIER" (Inscriptions, messages...)
-- =============================================================================

CREATE TABLE `validation_mission` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `benevolent_id` INT NOT NULL,
  `mission_id` INT NOT NULL,
  `admin_id` INT NULL, -- L'admin qui valide
  `status_inscrip_id` INT NOT NULL,
  `date_inscription` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_validation` DATETIME NULL, -- Date à laquelle l'admin a validé/refusé
  `note_avis` SMALLINT NULL,
  `contenu_avis` TEXT NULL,

  UNIQUE KEY `inscription_unique` (`benevolent_id`, `mission_id`), -- Un bénévole ne peut s'inscrire qu'une fois à la même mission
  CONSTRAINT `fk_vm_benevolent` FOREIGN KEY (`benevolent_id`) REFERENCES `benevolent`(`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_vm_mission` FOREIGN KEY (`mission_id`) REFERENCES `missions`(`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_vm_admin` FOREIGN KEY (`admin_id`) REFERENCES `admin`(`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_vm_status` FOREIGN KEY (`status_inscrip_id`) REFERENCES `status_inscrip`(`id`)
) ENGINE=InnoDB;

CREATE TABLE `contact_message` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `sender_name` VARCHAR(100) NOT NULL,
  `sender_email` VARCHAR(255) NOT NULL,
  `subject` VARCHAR(200) NOT NULL,
  `content` TEXT NOT NULL,
  `benevolent_id` INT NULL, -- Si le message vient d'un bénévole connecté
  `is_read` BOOLEAN NOT NULL DEFAULT FALSE,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT `fk_contact_benevolent` FOREIGN KEY (`benevolent_id`) REFERENCES `benevolent`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB;