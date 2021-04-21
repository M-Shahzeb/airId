-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2021 at 08:19 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `airid`
--

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `pic` varchar(11) NOT NULL,
  `about` text DEFAULT NULL,
  `age` varchar(10) DEFAULT NULL,
  `weight` decimal(24,0) DEFAULT NULL,
  `height` decimal(24,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `userId`, `fullname`, `pic`, `about`, `age`, `weight`, `height`) VALUES
(1, 7, 'shahzeb', 'xzmzklnx/xz', 'Its my frist entry!', '22', '78', '6'),
(2, 8, 'shahzeb', 'xzmzklnx/xz', 'Its my frist entry!', '22', '78', '6'),
(3, 1, 'shahzebkhan', 'xzmzklnx/xz', 'Its my frist entry!', '22', '78', '6'),
(14, 0, 'shahzebkhan', 'xzmzklnx/xz', 'Its my first entry!', '22', '78', '6');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(50) NOT NULL,
  `country_code` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `username` varchar(225) DEFAULT NULL,
  `password` varchar(225) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `pic` varchar(225) DEFAULT NULL,
  `about` text DEFAULT NULL,
  `weight` decimal(10,0) DEFAULT NULL,
  `age` decimal(10,0) DEFAULT NULL,
  `height` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `country_code`, `phone`, `username`, `password`, `nickname`, `pic`, `about`, `weight`, `age`, `height`) VALUES
(28, '+92', '31499055878', 'Muhammad Shahzeb', '$2b$10$RkbC.t0rJC2RzbxCuxIMB.Lmwa5I/gyxBerPLKhcoiAk24LvuM8WO', 'shahi khan', 'http://localhost:3000/imgs/1616659788231.jpeg', 'shahzeb is a vanella js developer!', '80', '24', '6'),
(31, '+92', '3499254100', 'Muhammad Shahzeb', '$2b$10$elMf8FXNO3UhIrrwcN/CW.BVhzvU88YTghqBbX.SLXa7n2UZ7MMBS', 'shahi khan', 'http://localhost:3000/imgs/1617357626818.jpg', 'shahzeb is a vanella js developer!', '80', '24', '6'),
(32, '+92', '3149905587', 'Muhammad Shahzeb', '$2b$10$lIHvImDcDx6v6SFn0nqI1.Ke9eH8ZOyWe.hCOanGQXxLD4XM2UpU.', 'shahi khan', 'http://localhost:3000/imgs/1617358391016.png', 'shahzeb is a vanella js developer!', '80', '24', '6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
