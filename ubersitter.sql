-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 15 mars 2021 à 20:22
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ubersitter`
--

-- --------------------------------------------------------

--
-- Structure de la table `us_users`
--

CREATE TABLE `us_users` (
  `id` int(11) NOT NULL,
  `email` varchar(160) NOT NULL,
  `password` varchar(250) NOT NULL,
  `token` varchar(255) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `role` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`role`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `us_users_children`
--

CREATE TABLE `us_users_children` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `gender` varchar(30) NOT NULL,
  `birthdate` date NOT NULL,
  `docUrl` varchar(255) NOT NULL,
  `note` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `us_users_payment_method`
--

CREATE TABLE `us_users_payment_method` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `digit` varchar(255) NOT NULL,
  `cvv` varchar(255) NOT NULL,
  `expires_at` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `us_users_professional`
--

CREATE TABLE `us_users_professional` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `compagny_adress` varchar(255) NOT NULL,
  `compagny_city` varchar(255) NOT NULL,
  `compagny_country` varchar(255) NOT NULL,
  `doc_url` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `us_users_reservation`
--

CREATE TABLE `us_users_reservation` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `professional_id` int(11) NOT NULL,
  `start_at` datetime NOT NULL,
  `end_at` datetime NOT NULL,
  `status` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `us_users`
--
ALTER TABLE `us_users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `us_users_children`
--
ALTER TABLE `us_users_children`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `us_users_payment_method`
--
ALTER TABLE `us_users_payment_method`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `us_users_professional`
--
ALTER TABLE `us_users_professional`
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `us_users_reservation`
--
ALTER TABLE `us_users_reservation`
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `professional_id` (`professional_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `us_users`
--
ALTER TABLE `us_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `us_users_children`
--
ALTER TABLE `us_users_children`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `us_users_payment_method`
--
ALTER TABLE `us_users_payment_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `us_users_children`
--
ALTER TABLE `us_users_children`
  ADD CONSTRAINT `us_users_children_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `us_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `us_users_payment_method`
--
ALTER TABLE `us_users_payment_method`
  ADD CONSTRAINT `us_users_payment_method_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `us_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `us_users_professional`
--
ALTER TABLE `us_users_professional`
  ADD CONSTRAINT `us_users_professional_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `us_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `us_users_reservation`
--
ALTER TABLE `us_users_reservation`
  ADD CONSTRAINT `us_users_reservation_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `us_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `us_users_reservation_ibfk_2` FOREIGN KEY (`professional_id`) REFERENCES `us_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
