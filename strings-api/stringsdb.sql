-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2018 at 10:32 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stringsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `strings`
--

CREATE TABLE `strings` (
  `_id` int(10) NOT NULL,
  `stringName` varchar(250) NOT NULL,
  `textId` varchar(250) NOT NULL,
  `stringDesc` varchar(250) NOT NULL,
  `usage` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `strings`
--

INSERT INTO `strings` (`_id`, `stringName`, `textId`, `stringDesc`, `usage`) VALUES
(1, 'test', 'test_id', 'test_desc', 'test_usage'),
(3, 'asdf', 'safd', 'asf', 'asdf'),
(4, 'asdf', 'safd', 'asf', 'asdf'),
(5, 'sadaf', 'sadfdsf', 'saffsa', 'asfdsdf'),
(7, 'sadf', 'sadfsa', 'saf', 'sadfd'),
(8, 'asdf', 'sada', 'asdf', 'sadds');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `strings`
--
ALTER TABLE `strings`
  ADD PRIMARY KEY (`_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `strings`
--
ALTER TABLE `strings`
  MODIFY `_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
