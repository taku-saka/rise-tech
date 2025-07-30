-- phpMyAdmin SQL Dump
-- version 5.2.1-1.el7.remi
-- https://www.phpmyadmin.net/
--
-- ホスト: localhost
-- 生成日時: 2025 年 7 月 30 日 13:51
-- サーバのバージョン： 10.5.17-MariaDB-log
-- PHP のバージョン: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `xs935286_rts`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `recruit`
--

CREATE TABLE `recruit` (
  `id` int(11) NOT NULL COMMENT 'ID',
  `name` varchar(30) NOT NULL COMMENT '氏名',
  `email` varchar(50) NOT NULL COMMENT 'メールアドレス',
  `phone` varchar(14) DEFAULT NULL COMMENT '電話番号',
  `address` varchar(50) NOT NULL COMMENT '住所',
  `age` varchar(3) NOT NULL COMMENT '年齢',
  `category` varchar(20) DEFAULT NULL COMMENT '募集項目',
  `experience` varchar(1000) DEFAULT NULL COMMENT '職歴・経験',
  `motivation` varchar(1000) DEFAULT NULL COMMENT '志望動機',
  `portfolio` varchar(100) DEFAULT NULL COMMENT 'ポートフォリオURL',
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '作成時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `recruit`
--
ALTER TABLE `recruit`
  ADD PRIMARY KEY (`id`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `recruit`
--
ALTER TABLE `recruit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID', AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
