-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2016 at 08:33 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `seoapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `domian`
--

CREATE TABLE `domian` (
  `ma` int(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  `keyword` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `groupname`
--

CREATE TABLE `groupname` (
  `ma` int(100) NOT NULL,
  `ten` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `groupname`
--

INSERT INTO `groupname` (`ma`, `ten`) VALUES
(15, 'Seo1'),
(16, 'Seo2'),
(17, 'Seo3');

-- --------------------------------------------------------

--
-- Table structure for table `grouprank`
--

CREATE TABLE `grouprank` (
  `ma` int(10) NOT NULL,
  `tukhoa` varchar(100) NOT NULL,
  `thuhang` int(10) NOT NULL,
  `nhom` varchar(10) NOT NULL,
  `tenmien` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `grouprank`
--

INSERT INTO `grouprank` (`ma`, `tukhoa`, `thuhang`, `nhom`, `tenmien`) VALUES
(19, 'bong da', 3, 'Seo1', '24h.com.vn'),
(20, 'quan su', 6, 'Seo1', '24h.com.vn'),
(21, 'kinh te', 10, 'Seo1', '24h.com.vn'),
(22, 'chinh tri', 31, 'Seo1', '24h.com.vn'),
(23, 'tin tuc', 3, 'Seo1', '24h.com.vn'),
(24, 'the thao', 5, 'Seo1', '24h.com.vn'),
(25, 'iphone 6s', 26, 'Seo1', '24h.com.vn'),
(26, 'iphone 6s', 2, 'Seo2', 'thegioididong.com'),
(27, 'iphone 5s', 1, 'Seo2', 'thegioididong.com'),
(28, 'nokia', 1, 'Seo2', 'thegioididong.com'),
(29, 'samsung ga', 1, 'Seo2', 'thegioididong.com'),
(30, 'mua dien t', 2, 'Seo2', 'thegioididong.com'),
(31, 'lap top', 7, 'Seo3', 'phongvu.vn'),
(32, 'dien thoai ', 75, 'Seo3', 'phongvu.vn'),
(33, 'may tinh ban', 10, 'Seo3', 'phongvu.vn'),
(34, 'thiet bi ki thuat so', 1, 'Seo3', 'phongvu.vn');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `ma` int(111) NOT NULL,
  `chuoi` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`ma`, `chuoi`) VALUES
(28, '1'),
(29, '1'),
(30, '1'),
(31, '1'),
(32, '1'),
(33, '1'),
(34, '1'),
(35, '2'),
(36, '2');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `Ma` int(200) NOT NULL,
  `Taikhoan` varchar(10) NOT NULL,
  `Matkhau` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Ma`, `Taikhoan`, `Matkhau`) VALUES
(1, 'admin', 'admin'),
(2, 'teo', '123'),
(4, 'qwe', 'qweqwe'),
(5, 'qwe', 'qweqwe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `domian`
--
ALTER TABLE `domian`
  ADD PRIMARY KEY (`ma`);

--
-- Indexes for table `groupname`
--
ALTER TABLE `groupname`
  ADD PRIMARY KEY (`ma`);

--
-- Indexes for table `grouprank`
--
ALTER TABLE `grouprank`
  ADD PRIMARY KEY (`ma`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`ma`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Ma`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `domian`
--
ALTER TABLE `domian`
  MODIFY `ma` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `groupname`
--
ALTER TABLE `groupname`
  MODIFY `ma` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `grouprank`
--
ALTER TABLE `grouprank`
  MODIFY `ma` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `ma` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `Ma` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
