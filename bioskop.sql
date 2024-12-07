-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 03 Des 2024 pada 13.25
-- Versi server: 10.11.8-MariaDB-0ubuntu0.24.04.1
-- Versi PHP: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bioskop`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `films`
--

CREATE TABLE `films` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `synopsis` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Now-Showing',
  `duration` varchar(255) NOT NULL,
  `rating` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `producer` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `director` varchar(255) NOT NULL,
  `writer` varchar(255) NOT NULL,
  `cast` varchar(255) NOT NULL,
  `link_trailers` varchar(255) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `films`
--

INSERT INTO `films` (`id`, `title`, `synopsis`, `status`, `duration`, `rating`, `type`, `genre`, `producer`, `image`, `director`, `writer`, `cast`, `link_trailers`, `deleted_at`) VALUES
(1, 'Interstellar', 'When Earth faces extinction, a team of astronauts ventures beyond our solar system in search of a new home for humanity. A gripping tale of love, survival, and the power of exploration.', 'Now-Showing', '169 minutes', 'PG-13', '3D', '[\"Action\",\"Sci-Fi\",\"Adventure\"]', 'Emma Thomas', '1732907561hallo.jpg', 'Christopher Nolan', 'Jonathan Nolan, Christopher Nolan', 'Matthew McConaughey, Anne Hathaway', 'https://youtube.com/trailer/interstellar', NULL),
(2, 'Inception', 'A skilled thief who can enter peoples dreams is tasked with planting an idea into a targets subconscious. As the mission unfolds, the lines between dream and reality blur in a thrilling race against time.', 'Now-Showing', '148 minutes', 'PG-13', '2D', '[\"Action\",\"Horror\"]', 'Emma Thomas', '1732726043MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg', 'Christopher Nolan', 'Christopher Nolan', 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page', 'https://youtube.com/trailer/inception', NULL),
(3, 'The Dark Knight', 'As Gothams protector, Batman confronts his most dangerous adversary yet—the anarchistic Joker, who pushes him to his limits in a battle of wits and chaos.', 'Now-Showing', '152 minutes', 'PG-13', '2D', '[\"Action\"]', 'Emma Thomas', '1732726062MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg', 'Christopher Nolan', 'Jonathan Nolan, Christopher Nolan', 'Christian Bale, Heath Ledger, Aaron Eckhart', 'https://youtube.com/trailer/darkknight', NULL),
(4, 'Avatar', 'On the alien moon of Pandora, a former Marine becomes part of an indigenous tribe through a revolutionary avatar program, leading to a clash of cultures and a fight for survival.', 'Now-Showing', '162 minutes', 'PG-13', '2D', '[\"Action\",\"Adventure\",\"Fantasy\",\"Romance\"]', 'James Cameron', '1732726090MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'James Cameron', 'James Cameron', 'Sam Worthington, Zoe Saldana, Sigourney Weaver', 'https://youtube.com/trailer/avatar', NULL),
(5, 'The Matrix', 'A hacker discovers the shocking truth about reality and humanitys enslavement by machines. He joins a rebellion to fight for freedom in a world beyond imagination.', 'Now-Showing', '136 minutes', 'R', '3D', '[\"Action\",\"Sci-Fi\",\"Cyberpunk\"]', 'Joel Silver', '1732726119MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Lana Wachowski, Lilly Wachowski', 'Lana Wachowski, Lilly Wachowski', 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss', 'https://youtube.com/trailer/matrix', NULL),
(6, 'Forrest Gump', 'Follow the life of Forrest Gump, an extraordinary man with a simple outlook, as he inadvertently influences some of the most significant events of the 20th century.', 'Now-Showing', '142 minutes', 'PG-13', '3D', '[\"Drama\"]', 'Wendy Finerman', '1732726143MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Robert Zemeckis', 'Eric Roth', 'Tom Hanks, Robin Wright, Gary Sinise', 'https://youtube.com/trailer/forrestgump', NULL),
(7, 'The Godfather', 'The story of the Corleone family, a powerful mafia dynasty, as they navigate loyalty, betrayal, and the struggle to maintain power in the criminal underworld.', 'Up-Coming', '175 minutes', 'R', '3D', '[\"Drama\"]', 'Albert S. Ruddy', '1732726164MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg', 'Francis Ford Coppola', 'Mario Puzo, Francis Ford Coppola', 'Marlon Brando, Al Pacino, James Caan', 'https://youtube.com/trailer/godfather', NULL),
(8, 'Star Wars: A New Hope', 'A farm boy named Luke Skywalker embarks on an epic journey to save a princess, destroy a deadly space station, and restore hope to a galaxy oppressed by the Empire.', 'Up-Coming', '121 minutes', 'PG', '2D', '[\"Action\",\"Fantasy\",\"Sci-Fi\",\"Adventure\",\"Romance\",\"Comedy\"]', 'Gary Kurtz', '1732726191MV5BZDFlM2YzMTctZTExNy00ZGJmLTk5M2QtZTJhOTcxNzk1Zjk0XkEyXkFqcGc@._V1_.jpg', 'George Lucas', 'George Lucas', 'Mark Hamill, Harrison Ford, Carrie Fisher', 'https://youtube.com/trailer/starwars', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `fnbdetails`
--

CREATE TABLE `fnbdetails` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `transaction_id` bigint(20) UNSIGNED NOT NULL,
  `menu_id` bigint(20) UNSIGNED NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `fnbdetails`
--

INSERT INTO `fnbdetails` (`id`, `transaction_id`, `menu_id`, `price`, `quantity`) VALUES
(5, 4, 7, 35000, 1),
(6, 5, 7, 35000, 1),
(10, 9, 8, 40000, 2),
(11, 10, 12, 20000, 2),
(12, 10, 5, 13000, 1),
(13, 10, 4, 18000, 1),
(14, 10, 18, 18000, 1),
(15, 11, 7, 35000, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `menus`
--

CREATE TABLE `menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `menus`
--

INSERT INTO `menus` (`id`, `name`, `description`, `image`, `price`, `type`, `deleted_at`) VALUES
(1, 'Nasi Goreng Spesial', 'Classic Indonesian fried rice served with a fried egg, chicken satay, and prawn crackers.', '1732793985WhatsApp Image 2024-11-28 at 18.39.22_20145c5c.jpg', 30000, 'Food', NULL),
(2, 'Mie Goreng', 'Stir-fried noodles with vegetables, chicken, and a flavorful blend of spices.', '1732794199WhatsApp Image 2024-11-28 at 18.42.59_a097b1cd.jpg', 27000, 'Food', NULL),
(3, 'Kentang Goreng', 'Golden, crispy French fries served with ketchup and mayonnaise.', '1732793198picture-1610701668.jpg', 20000, 'Snack', NULL),
(4, 'Popcorn Caramel', 'Sweet and crunchy caramel-coated popcorn, perfect for movie nights.', '1732794605delicious-popcorn_144627-12656.png', 18000, 'Snack', NULL),
(5, 'Matcha', 'Refreshing green tea brewed to perfection, served hot or iced.', '1732794029WhatsApp Image 2024-11-28 at 18.39.57_ee25d47c.jpg', 13000, 'Drinks', NULL),
(6, 'Es Kopi Susu', 'Creamy iced coffee with a hint of sweetness, perfect for coffee lovers.', '1732794100WhatsApp Image 2024-11-28 at 18.40.58_da337fd1.jpg', 18000, 'Drinks', NULL),
(7, 'Combo 1: Nasi Goreng & Es Teh Manis', 'A hearty fried rice meal paired with a refreshing iced sweet tea.', '1732797566123131sda.jpg', 35000, 'Combo', NULL),
(8, 'Combo 2: Mie Goreng & Es Kopi Susu', 'Delicious stir-fried noodles served with a creamy iced coffee.', '1732797595esadsadawe.jpg', 40000, 'Combo', NULL),
(9, 'Combo 3: Popcorn Caramel & Matcha', 'A sweet snack combo featuring caramel popcorn and refreshing green tea.', '1732797620sdasdaw.jpg', 28000, 'Combo', NULL),
(10, 'Coca Cola', 'Classic and refreshing soft drink, served chilled.', '1732792996coke-glass_1203-7209.png', 10000, 'Drinks', NULL),
(11, 'Sprite', 'Crisp and clear lemon-lime soft drink, served cold.', '1732794562mojito-alcoholic-drink_144627-20295.png', 10000, 'Drinks', NULL),
(12, 'Popcorn Cheese', 'Savory and cheesy popcorn, a perfect movie-time snack.', '1732794766front-view-fresh-popcorn-movie-light-desk-snack-rusk-cips_140725-89509.png', 20000, 'Snack', NULL),
(13, 'Popcorn Spicy', 'Hot and spicy popcorn for those who love bold flavors.', '1732794730tasty-caramel-candies-bowl-trivet-marble-surface_114579-83766.png', 20000, 'Snack', NULL),
(14, 'Combo 4: Popcorn Cheese & Matcha', 'Cheesy popcorn accompanied by a soothing green tea.', '1732797657sdasdewad.jpg', 30000, 'Combo', NULL),
(15, 'Combo 5: Popcorn Spicy & Es Kopi Susu', 'Spicy popcorn complemented by creamy iced coffee.', '1732797681sdaw3r.jpg', 32000, 'Combo', NULL),
(16, 'Combo 6: Kentang Goreng & Sprite', 'Golden fries paired with a fizzy Sprite.', '1732797712sdasdaew.jpg', 28000, 'Combo', NULL),
(17, 'Lemon Tea', 'Refreshing iced tea infused with a hint of zesty lemon.', '1732794519glass-ice-lemon-tea_1339-91982.png', 15000, 'Drinks', NULL),
(18, 'Mango Juice', 'Sweet and tangy mango juice made from fresh fruit.', '1732794366fresh-mango-smoothies_1339-12332.png', 18000, 'Drinks', NULL),
(19, 'Combo 7: Kentang Goreng & Lemon Tea', 'Crispy French fries with a glass of refreshing lemon tea.', '1732797743waeda.jpg', 30000, 'Combo', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2024_11_22_160017_bioskop', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `playtimes`
--

CREATE TABLE `playtimes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `time` varchar(255) NOT NULL,
  `theatres_id` bigint(20) UNSIGNED NOT NULL,
  `films_id` bigint(20) UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `playtimes`
--

INSERT INTO `playtimes` (`id`, `time`, `theatres_id`, `films_id`, `deleted_at`) VALUES
(1, '08:00:00', 1, 1, NULL),
(2, '10:00:00', 1, 1, NULL),
(3, '12:00:00', 1, 1, NULL),
(4, '14:00:00', 1, 1, NULL),
(5, '16:00:00', 1, 1, NULL),
(6, '18:00:00', 1, 1, NULL),
(7, '08:30:00', 1, 2, NULL),
(8, '10:30:00', 1, 2, NULL),
(9, '12:30:00', 1, 2, NULL),
(10, '14:30:00', 1, 2, NULL),
(11, '16:30:00', 1, 2, NULL),
(12, '18:30:00', 1, 2, NULL),
(13, '09:00:00', 1, 3, NULL),
(14, '11:00:00', 1, 3, NULL),
(15, '13:00:00', 1, 3, NULL),
(16, '15:00:00', 1, 3, NULL),
(17, '17:00:00', 1, 3, NULL),
(18, '19:00:00', 1, 3, NULL),
(19, '09:30:00', 1, 4, NULL),
(20, '11:30:00', 1, 4, NULL),
(21, '13:30:00', 1, 4, NULL),
(22, '15:30:00', 1, 4, NULL),
(23, '17:30:00', 1, 4, NULL),
(24, '19:30:00', 1, 4, NULL),
(25, '10:00:00', 1, 5, NULL),
(26, '12:00:00', 1, 5, NULL),
(27, '14:00:00', 1, 5, NULL),
(28, '16:00:00', 1, 5, NULL),
(29, '18:00:00', 1, 5, NULL),
(30, '20:00:00', 1, 5, NULL),
(31, '10:30:00', 1, 6, NULL),
(32, '12:30:00', 1, 6, NULL),
(33, '14:30:00', 1, 6, NULL),
(34, '16:30:00', 1, 6, NULL),
(35, '18:30:00', 1, 6, NULL),
(36, '20:30:00', 1, 6, NULL),
(37, '11:00:00', 1, 7, NULL),
(38, '13:00:00', 1, 7, NULL),
(39, '15:00:00', 1, 7, NULL),
(40, '17:00:00', 1, 7, NULL),
(41, '19:00:00', 1, 7, NULL),
(42, '21:00:00', 1, 7, NULL),
(43, '11:30:00', 1, 8, NULL),
(44, '13:30:00', 1, 8, NULL),
(45, '15:30:00', 1, 8, NULL),
(46, '17:30:00', 1, 8, NULL),
(47, '19:30:00', 1, 8, NULL),
(48, '21:30:00', 1, 8, NULL),
(49, '08:00:00', 2, 1, NULL),
(50, '10:00:00', 2, 1, NULL),
(51, '12:00:00', 2, 1, NULL),
(52, '14:00:00', 2, 1, NULL),
(53, '16:00:00', 2, 1, NULL),
(54, '18:00:00', 2, 1, NULL),
(55, '09:00:00', 2, 3, NULL),
(56, '11:00:00', 2, 3, NULL),
(57, '13:00:00', 2, 3, NULL),
(58, '15:00:00', 2, 3, NULL),
(59, '17:00:00', 2, 3, NULL),
(60, '19:00:00', 2, 3, NULL),
(61, '09:30:00', 2, 4, NULL),
(62, '11:30:00', 2, 4, NULL),
(63, '13:30:00', 2, 4, NULL),
(64, '15:30:00', 2, 4, NULL),
(65, '17:30:00', 2, 4, NULL),
(66, '19:30:00', 2, 4, NULL),
(67, '10:00:00', 2, 5, NULL),
(68, '12:00:00', 2, 5, NULL),
(69, '14:00:00', 2, 5, NULL),
(70, '16:00:00', 2, 5, NULL),
(71, '18:00:00', 2, 5, NULL),
(72, '20:00:00', 2, 5, NULL),
(73, '10:30:00', 2, 6, NULL),
(74, '12:30:00', 2, 6, NULL),
(75, '14:30:00', 2, 6, NULL),
(76, '16:30:00', 2, 6, NULL),
(77, '18:30:00', 2, 6, NULL),
(78, '20:30:00', 2, 6, NULL),
(79, '11:00:00', 2, 7, NULL),
(80, '13:00:00', 2, 7, NULL),
(81, '15:00:00', 2, 7, NULL),
(82, '17:00:00', 2, 7, NULL),
(83, '19:00:00', 2, 7, NULL),
(84, '21:00:00', 2, 7, NULL),
(85, '08:00:00', 3, 1, NULL),
(86, '10:00:00', 3, 1, NULL),
(87, '12:00:00', 3, 1, NULL),
(88, '14:00:00', 3, 1, NULL),
(89, '16:00:00', 3, 1, NULL),
(90, '18:00:00', 3, 1, NULL),
(91, '08:30:00', 3, 2, NULL),
(92, '10:30:00', 3, 2, NULL),
(93, '12:30:00', 3, 2, NULL),
(94, '14:30:00', 3, 2, NULL),
(95, '16:30:00', 3, 2, NULL),
(96, '18:30:00', 3, 2, NULL),
(97, '09:00:00', 3, 3, NULL),
(98, '11:00:00', 3, 3, NULL),
(99, '13:00:00', 3, 3, NULL),
(100, '15:00:00', 3, 3, NULL),
(101, '17:00:00', 3, 3, NULL),
(102, '19:00:00', 3, 3, NULL),
(103, '09:30:00', 3, 4, NULL),
(104, '11:30:00', 3, 4, NULL),
(105, '13:30:00', 3, 4, NULL),
(106, '15:30:00', 3, 4, NULL),
(107, '17:30:00', 3, 4, NULL),
(108, '19:30:00', 3, 4, NULL),
(109, '10:00:00', 3, 5, NULL),
(110, '12:00:00', 3, 5, NULL),
(111, '14:00:00', 3, 5, NULL),
(112, '16:00:00', 3, 5, NULL),
(113, '18:00:00', 3, 5, NULL),
(114, '20:00:00', 3, 5, NULL),
(115, '10:30:00', 3, 6, NULL),
(116, '12:30:00', 3, 6, NULL),
(117, '14:30:00', 3, 6, NULL),
(118, '16:30:00', 3, 6, NULL),
(119, '18:30:00', 3, 6, NULL),
(120, '20:30:00', 3, 6, NULL),
(121, '11:30:00', 3, 8, NULL),
(122, '13:30:00', 3, 8, NULL),
(123, '15:30:00', 3, 8, NULL),
(124, '17:30:00', 3, 8, NULL),
(125, '19:30:00', 3, 8, NULL),
(126, '21:30:00', 3, 8, NULL),
(127, '08:30:00', 4, 2, NULL),
(128, '10:30:00', 4, 2, NULL),
(129, '12:30:00', 4, 2, NULL),
(130, '14:30:00', 4, 2, NULL),
(131, '16:30:00', 4, 2, NULL),
(132, '18:30:00', 4, 2, NULL),
(133, '09:00:00', 4, 3, NULL),
(134, '11:00:00', 4, 3, NULL),
(135, '13:00:00', 4, 3, NULL),
(136, '15:00:00', 4, 3, NULL),
(137, '17:00:00', 4, 3, NULL),
(138, '19:00:00', 4, 3, NULL),
(139, '09:30:00', 4, 4, NULL),
(140, '11:30:00', 4, 4, NULL),
(141, '13:30:00', 4, 4, NULL),
(142, '15:30:00', 4, 4, NULL),
(143, '17:30:00', 4, 4, NULL),
(144, '19:30:00', 4, 4, NULL),
(145, '10:00:00', 4, 5, NULL),
(146, '12:00:00', 4, 5, NULL),
(147, '14:00:00', 4, 5, NULL),
(148, '16:00:00', 4, 5, NULL),
(149, '18:00:00', 4, 5, NULL),
(150, '20:00:00', 4, 5, NULL),
(151, '10:30:00', 4, 6, NULL),
(152, '12:30:00', 4, 6, NULL),
(153, '14:30:00', 4, 6, NULL),
(154, '16:30:00', 4, 6, NULL),
(155, '18:30:00', 4, 6, NULL),
(156, '20:30:00', 4, 6, NULL),
(157, '11:00:00', 4, 7, NULL),
(158, '13:00:00', 4, 7, NULL),
(159, '15:00:00', 4, 7, NULL),
(160, '17:00:00', 4, 7, NULL),
(161, '19:00:00', 4, 7, NULL),
(162, '21:00:00', 4, 7, NULL),
(163, '11:30:00', 4, 8, NULL),
(164, '13:30:00', 4, 8, NULL),
(165, '15:30:00', 4, 8, NULL),
(166, '17:30:00', 4, 8, NULL),
(167, '19:30:00', 4, 8, NULL),
(168, '21:30:00', 4, 8, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `theatres`
--

CREATE TABLE `theatres` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `theatres`
--

INSERT INTO `theatres` (`id`, `name`, `image`, `address`, `description`, `price`, `deleted_at`) VALUES
(1, 'IMAX Theatre', '1732769683istockphoto-458541801-612x612.jpg', 'Jl. Sultan Iskandar Muda, Kebayoran Lama Jakarta Selatan Jakarta', 'Immerse yourself in a premium cinematic experience with floor-to-ceiling screens, crystal-clear visuals, and a powerful surround sound system that brings movies to life like never before.', 45000, NULL),
(2, 'CGV Cinemas', '1732769701images.jpeg', 'Jl. Sudirman No. 1, Jakarta', 'Experience cutting-edge entertainment with state-of-the-art Dolby Atmos sound, comfortable seating, and a modern aesthetic, perfect for enjoying the latest blockbusters.', 50000, NULL),
(3, 'XXI Plaza Senayan', '1732769726plaza-senayan-xxi-jakarta.jpg', 'Plaza Senayan, Jakarta', 'Relive the magic of classic cinema with high-definition screens, top-notch sound quality, and an elegant atmosphere, all conveniently located in Plaza Senayan.', 45000, NULL),
(4, 'Platinum Cineplex', '17327697431710500394.png', 'Mall of Indonesia, Jakarta', 'Enjoy affordable and family-friendly movie entertainment in a cozy and welcoming setting, offering great value without compromising comfort.', 35000, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactiondetails`
--

CREATE TABLE `transactiondetails` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `transaction_id` bigint(20) UNSIGNED NOT NULL,
  `seat` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `transactiondetails`
--

INSERT INTO `transactiondetails` (`id`, `transaction_id`, `seat`, `price`) VALUES
(103, 6, 'C6', 45000),
(104, 6, 'C5', 45000),
(105, 7, 'B4', 45000),
(106, 7, 'B5', 45000),
(107, 8, 'E6', 45000),
(108, 9, 'D3', 45000),
(109, 9, 'D4', 45000),
(110, 9, 'D5', 45000),
(111, 10, 'H6', 45000),
(112, 10, 'G6', 45000),
(113, 11, 'A1', 45000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactionfnbs`
--

CREATE TABLE `transactionfnbs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoice` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `pickup_time` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `date_transaction` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `payment_method` varchar(255) NOT NULL,
  `payment_total` varchar(255) NOT NULL,
  `theatres_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `transactionfnbs`
--

INSERT INTO `transactionfnbs` (`id`, `invoice`, `status`, `pickup_time`, `token`, `user_id`, `date_transaction`, `payment_method`, `payment_total`, `theatres_id`) VALUES
(4, 'food-CGV Cinemas-17331988113699', 'completed', '11:06', 'https://app.sandbox.midtrans.com/snap/v4/redirection/64846d3e-b0b3-49b2-a284-688fc4f1fe44', 9, '2024-12-03 04:07:50', 'qris', '35000', 2),
(5, 'food-XXI Plaza Senayan-173320207476712', 'completed', '03:05', 'https://app.sandbox.midtrans.com/snap/v4/redirection/fda826b4-bd97-4321-8f70-5696353ee1a2', 12, '2024-12-03 05:01:24', 'qris', '35000', 3),
(9, 'food-IMAX Theatre-173322889969917', 'completed', '19:30', 'https://app.sandbox.midtrans.com/snap/v4/redirection/258fdb47-3ebf-44b6-9239-ae46504fd96b', 17, '2024-12-03 12:28:42', 'qris', '80000', 1),
(10, 'food-IMAX Theatre-173322933244115', 'completed', '19:40', 'https://app.sandbox.midtrans.com/snap/v4/redirection/c137aac0-5655-4eb1-ba54-c4ad68f19b6e', 15, '2024-12-03 12:36:01', 'bank_transfer', '89000', 1),
(11, 'food-IMAX Theatre-173323046731618', 'completed', '21:54', 'https://app.sandbox.midtrans.com/snap/v4/redirection/e7c36cdc-44a6-42a8-89f0-34409ddf9df6', 18, '2024-12-03 12:54:54', 'qris', '35000', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoice` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `date_transaction` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `payment_method` varchar(255) NOT NULL,
  `payment_total` varchar(255) NOT NULL,
  `playtime_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `invoice`, `status`, `token`, `user_id`, `date_transaction`, `payment_method`, `payment_total`, `playtime_id`, `quantity`) VALUES
(6, 'IMAX Theatre-1733201904479121', 'completed', 'https://app.sandbox.midtrans.com/snap/v4/redirection/aeaa36c1-9439-49d8-87bc-b43807e47abd', 12, '2024-12-03 04:59:14', 'qris', '90000', 1, 2),
(7, 'IMAX Theatre-173320260780394', 'completed', 'https://app.sandbox.midtrans.com/snap/v4/redirection/8aa86f1f-9d95-43a4-a539-63945266392b', 9, '2024-12-03 05:10:40', 'qris', '90000', 4, 2),
(8, 'IMAX Theatre-173320267404694', 'completed', 'https://app.sandbox.midtrans.com/snap/v4/redirection/7b0a37e6-3a6c-44b8-be41-7ce2e33f4df1', 9, '2024-12-03 05:15:39', 'qris', '45000', 4, 1),
(9, 'IMAX Theatre-17332287723961530', 'completed', 'https://app.sandbox.midtrans.com/snap/v4/redirection/6abeb29f-2b61-4fa5-b257-69d548c2831c', 15, '2024-12-03 12:26:37', 'bank_transfer', '135000', 30, 3),
(10, 'IMAX Theatre-17332290111451530', 'completed', 'https://app.sandbox.midtrans.com/snap/v4/redirection/7f004364-6973-47bb-ba2e-705a25b856c9', 15, '2024-12-03 12:31:14', 'bank_transfer', '90000', 30, 2),
(11, 'IMAX Theatre-1733230514730181', 'completed', 'https://app.sandbox.midtrans.com/snap/v4/redirection/f9672d90-3893-4876-84b6-00756c0ca75a', 18, '2024-12-03 12:55:40', 'qris', '45000', 1, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `otp_verify` varchar(255) DEFAULT NULL,
  `otp_reminder` varchar(255) DEFAULT NULL,
  `otp_password` varchar(255) DEFAULT NULL,
  `otp_password_reminder` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `status`, `username`, `email`, `password`, `type`, `image`, `phone`, `token`, `otp_verify`, `otp_reminder`, `otp_password`, `otp_password_reminder`, `created_at`, `updated_at`) VALUES
(1, 'true', 'Violet admin', 'admin@gmail.com', '$2y$10$gVBBOIt2fkNPxAKvVc3TBeRkEeZg.gOFA8YeABDuMqhDNMngvnLj6', 'admin', '/images/defaultLogo.jpg', '0821332543451', NULL, NULL, NULL, NULL, NULL, '2024-11-28 03:54:02', '2024-11-28 03:54:02'),
(2, 'true', 'Drian', 'user@gmail.com', '$2y$10$yaCa752PD16p/ctrEacjl.4eZ7Lo.KOdEod3EcSVZm51uEdBqxdsW', 'customer', '/images/defaultLogo.jpg', '0821332543451', NULL, NULL, NULL, NULL, NULL, '2024-11-28 03:54:02', '2024-11-28 03:54:02'),
(4, 'false', 'nizwa', 'nizwa@gmail.com', '$2b$10$r9d6kT6r1YbnP.EZ1xYrMOxL3BIlZlkmIQhNf3KmIOEAmuOPZZ4S2', 'customer', '/images/defaultLogo.jpg', '082109092323', NULL, NULL, NULL, NULL, NULL, '2024-11-30 14:37:39', '2024-11-30 14:37:39'),
(5, 'false', 'nizwa', 'm.nizwa01@gmail.com', '$2b$10$Vly8JQlpn5hzxb1CcLQjseTLmDE7T18BfTty0mcB7.iklaWgNYypK', 'customer', '/images/defaultLogo.jpg', '0872382372', NULL, NULL, NULL, NULL, NULL, '2024-11-30 14:38:38', '2024-11-30 14:38:38'),
(6, 'false', 'MatchaLatte', 'raflyraflyramadhan7477@gmail.com', '$2b$10$NnARSCV7G2PjXjeKK8xpF.4LEMIfsTiZOlQZgp8eY7hWXLAVRAgXi', 'customer', '/images/defaultLogo.jpg', '082117376956', NULL, NULL, NULL, NULL, NULL, '2024-11-30 14:40:28', '2024-11-30 14:40:28'),
(8, 'false', 'sonn', 'jason.gouw@binus.ac.id', '$2b$10$plgmP2pWyOJP/JArSoF8NuYr5bV37eqvwZh5FsCGxmGI0Ulvp4UFK', 'customer', '/images/defaultLogo.jpg', '081111111111', NULL, NULL, NULL, NULL, NULL, '2024-12-03 04:02:11', '2024-12-03 04:02:11'),
(9, 'true', 'sonn', 'aku.sonn28@gmail.com', '$2b$10$9Q8JxwV/JEynuLBumdMrVemm3f1cO0vNBh.qGJui6xrjjE3CAd1Bu', 'customer', '/images/thumb-4489146296.jpg', '0', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzMyMDIyODZ9.80XGnBT99RdpRKAQe7ueoQxzaUV5B-HAGQKiOfFtUis', NULL, NULL, NULL, NULL, '2024-12-03 04:03:35', '2024-12-03 04:03:35'),
(10, 'false', 'Picaro', 'pierochristian10@gmail.com', '$2b$10$.jFggjKB6pVVl0CHwr6W3O82I61IqHKO09WlMf6b8XmsUHnaN6cPG', 'customer', '/images/defaultLogo.jpg', '087871112607', NULL, NULL, NULL, NULL, NULL, '2024-12-03 04:13:19', '2024-12-03 04:13:19'),
(11, 'true', 'MEMEK DJANDA GUATEL', 'memekgatalbanget@gmail.com', '$2b$10$g0VTaB9uhH/yzy77KSYxF.CubnsCorB/l6RfESHtvRtvml4kjJxZy', 'customer', '/images/defaultLogo.jpg', '6969696969', NULL, NULL, NULL, NULL, NULL, '2024-12-03 04:48:31', '2024-12-03 04:48:31'),
(12, 'true', 'darren', 'darrenmaverickz@gmail.com', '$2b$10$N0hBDIEFo8jA8koBR8zWcO3XKK48frKzyLK2jdsu355.KT/gLKP/K', 'customer', '/images/defaultLogo.jpg', '000000000000', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzMyMDE0ODd9.Kvc27cxuWiDNjmKF5N5ix-_feRwIa87FWjNrTRFXyuo', NULL, NULL, NULL, NULL, '2024-12-03 04:50:36', '2024-12-03 04:50:36'),
(14, 'false', 'Dri', 'mrpartys05@gmail.com', '$2b$10$mmgTMJoGucZsPMbq7Js3EOgOi3V2ZBOIV28gHcKKyR53mGkCq8yYS', 'customer', '/images/defaultLogo.jpg', '082123928824', NULL, NULL, NULL, NULL, NULL, '2024-12-03 12:08:42', '2024-12-03 12:08:42'),
(15, 'true', 'Kevira', 'kucingkejepit4646@gmail.com', '$2b$10$ywi2CfoSlzf23Xp9Jt1bJe7udwts69VLN1bg7JBfsETUDWW/x5LLG', 'customer', '/images/defaultLogo.jpg', '082117376956', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzMyMjg2NjZ9.qFbs9SSYWtTNwzBySNOr_gi1qxp-JSPTeUy5PhAeWY0', NULL, NULL, NULL, NULL, '2024-12-03 12:18:08', '2024-12-03 12:18:08'),
(16, 'false', 'MatchaLatte', 'dainsleif404@gmail.com', '$2b$10$zfJ4jhiOx99utEfl9Ri2KummJJYpbsAXmDGupP9Ewr4xhQ5JxGCrO', 'customer', '/images/defaultLogo.jpg', '085775508920', NULL, NULL, NULL, NULL, NULL, '2024-12-03 12:21:52', '2024-12-03 12:21:52'),
(17, 'true', 'ayam', 'aeroblastdummy7@gmail.com', '$2b$10$THuoSAa8HBXjtCDnjvNabeSou/0CXTqzQvEDqav5j8AtSdNuvsNra', 'customer', '/images/thumb-8829314961.png', '4567891234', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzMyMjg4MjN9.ck23HCZFItCHRiHAHs-wChlyTDL7qDGjfgFlB8ZDGg8', NULL, NULL, NULL, NULL, '2024-12-03 12:22:07', '2024-12-03 12:22:07'),
(18, 'true', 'Drian', 'andrianpratama843@gmail.com', '$2b$10$LiHYLYiYpVLsTsK7QW8YrepBu8ctLDFVWb658ezyI4.8M9UGThMEi', 'customer', '/images/defaultLogo.jpg', '082123928824', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzMyMzE5ODJ9.dUpUv0MfC5njglhuMvgE74oIYa9RC6jNVLDwil-ZkwY', NULL, NULL, NULL, NULL, '2024-12-03 12:49:12', '2024-12-03 12:49:12');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `fnbdetails`
--
ALTER TABLE `fnbdetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fnbdetails_transaction_id_foreign` (`transaction_id`),
  ADD KEY `fnbdetails_menu_id_foreign` (`menu_id`);

--
-- Indeks untuk tabel `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `playtimes`
--
ALTER TABLE `playtimes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `playtimes_theatres_id_foreign` (`theatres_id`),
  ADD KEY `playtimes_films_id_foreign` (`films_id`);

--
-- Indeks untuk tabel `theatres`
--
ALTER TABLE `theatres`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transactiondetails`
--
ALTER TABLE `transactiondetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactiondetails_transaction_id_foreign` (`transaction_id`);

--
-- Indeks untuk tabel `transactionfnbs`
--
ALTER TABLE `transactionfnbs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactionfnbs_user_id_foreign` (`user_id`),
  ADD KEY `transactionfnbs_theatre_id_foreign` (`theatres_id`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_user_id_foreign` (`user_id`),
  ADD KEY `transactions_playtime_id_foreign` (`playtime_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `films`
--
ALTER TABLE `films`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `fnbdetails`
--
ALTER TABLE `fnbdetails`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `playtimes`
--
ALTER TABLE `playtimes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=169;

--
-- AUTO_INCREMENT untuk tabel `theatres`
--
ALTER TABLE `theatres`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `transactiondetails`
--
ALTER TABLE `transactiondetails`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT untuk tabel `transactionfnbs`
--
ALTER TABLE `transactionfnbs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `fnbdetails`
--
ALTER TABLE `fnbdetails`
  ADD CONSTRAINT `fnbdetails_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fnbdetails_transaction_id_foreign` FOREIGN KEY (`transaction_id`) REFERENCES `transactionfnbs` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `playtimes`
--
ALTER TABLE `playtimes`
  ADD CONSTRAINT `playtimes_films_id_foreign` FOREIGN KEY (`films_id`) REFERENCES `films` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `playtimes_theatres_id_foreign` FOREIGN KEY (`theatres_id`) REFERENCES `theatres` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transactiondetails`
--
ALTER TABLE `transactiondetails`
  ADD CONSTRAINT `transactiondetails_transaction_id_foreign` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transactionfnbs`
--
ALTER TABLE `transactionfnbs`
  ADD CONSTRAINT `transactionfnbs_theatre_id_foreign` FOREIGN KEY (`theatres_id`) REFERENCES `theatres` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `transactionfnbs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_playtime_id_foreign` FOREIGN KEY (`playtime_id`) REFERENCES `playtimes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `transactions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
