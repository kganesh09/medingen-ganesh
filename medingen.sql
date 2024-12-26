-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2024 at 03:05 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medingen`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `product_id`, `quantity`) VALUES
(4, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `descriptions`
--

CREATE TABLE `descriptions` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `uses` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`uses`)),
  `howtouse` text NOT NULL,
  `sideEffects` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`sideEffects`)),
  `question` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`question`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `descriptions`
--

INSERT INTO `descriptions` (`id`, `product_id`, `productname`, `content`, `uses`, `howtouse`, `sideEffects`, `question`) VALUES
(1, 1, 'Dolo 650 mg', 'UDILIV 300MG TABLET 15S (UDCA) is a naturally occurring bile acid derived from bear bile, and it is also produced synthetically. It has been used for several decades as a therapeutic agent to manage various liver disorders. UDCA is primarily known for its hepatoprotective properties and is used in the treatment of gallstones, primary biliary cholangitis (PBC), and other cholestatic liver conditions. This tablet works by reducing cholesterol absorption, improving bile flow, and exerting anti-inflammatory effects, thereby promoting liver health.', '[\"Helps in dissolving gallstones\", \"Used in the treatment of primary biliary cholangitis (PBC)\", \"Aids in managing other cholestatic liver disorders\", \"Can be used to prevent gallstone formation\", \"Assists in improving liver function\"]', 'The dosage depends on the patient’s body weight and specific condition being treated. For children, the dosage is prescribed by a pediatrician or gastroenterologist. For adults, the standard dosage is 10-15 mg/kg of body weight per day, divided into two or three doses. For gallstone dissolution, the dose ranges from 6-10 mg/kg body weight per day. Always follow the instructions provided by your healthcare provider.', '[\"Diarrhea\", \"Nausea\", \"Abdominal discomfort\", \"Headache\", \"Rash\", \"Hair loss (rare)\"]', ' [\r\n            {\r\n                \"question\": \"What if I vomit after taking Paracetamol?\",\r\n                \"answer\": \"If you vomit in less than 30 minutes after having a dose of Paracetamol tablets or syrup, retake the same dose again. If you vomit after 30 minutes of a dose, you do not need to take another one until the next standard dose.\"\r\n            },\r\n            {\r\n                \"question\": \"When will I feel better after taking Paracetamol?\",\r\n                \"answer\": \"Usually, you will start feeling better after about half an hour of taking a Paracetamol.\"\r\n            },\r\n            {\r\n                \"question\": \"How often can I take the Paracetamol?\",\r\n                \"answer\": \"You should only take four doses of Paracetamol in 24 hours. There should be a gap of at least 4 hours between two doses. Do not take Paracetamol for more than 3 days without consulting a doctor first.\"\r\n            },\r\n            {\r\n                \"question\": \"Does Paracetamol make babies sleepy?\",\r\n                \"answer\": \"No, Paracetamol does not make babies sleepy. It is a pain-relieving medicine that is also used to control high fever.\"\r\n            },\r\n            {\r\n                \"question\": \"Is Paracetamol safe for children?\",\r\n                \"answer\": \"Paracetamol is considered safe for children only when used as directed by the doctor.\"\r\n            },\r\n            {\r\n                \"question\": \"Is Paracetamol an antibiotic?\",\r\n                \"answer\": \"No, Paracetamol is not an antibiotic. It works as a painkiller and fever-reducing medicine.\"\r\n            },\r\n            {\r\n                \"question\": \"Can I take Paracetamol and ibuprofen together?\",\r\n                \"answer\": \"Ibuprofen and Paracetamol are safe medicines, but both should not be used together. Consult your doctor if you are not sure.\"\r\n            },\r\n            {\r\n                \"question\": \"How long does a Paracetamol take to work?\",\r\n                \"answer\": \"Paracetamol takes around 30-45 min to start working and show its effects. It is advised to take this medicine for the duration suggested by the doctor. Consult your doctor if you experience any bothersome side effects.\"\r\n            },\r\n            {\r\n                \"question\": \"What are the serious side effects of taking an excess of the Paracetamol?\",\r\n                \"answer\": \"Overdose of Paracetamol may cause severe life-threatening liver injury. Taking more than the prescribed dose may also cause kidney injury, decreased platelet count, and even coma. Early symptoms of an overdose include nausea, vomiting, and general tiredness. Immediately consult a doctor or reach an emergency in case of a suspected overdose.\"\r\n            }\r\n        ]'),
(2, 2, 'Acetaminophen', 'Acetaminophen, also known as paracetamol, is widely used to treat mild to moderate pain such as headaches, toothaches, and muscle aches, as well as to reduce fever. It works by blocking pain signals and reducing inflammation.', '[\"Fever reduction\", \"Relieves mild pain like headaches and muscle pain\"]', 'Take 1-2 tablets every 4-6 hours. Do not exceed 8 tablets in 24 hours.', '[\"Nausea\", \"Liver damage if overdosed\", \"Rare allergic reactions\"]', '[{\"question\": \"How does Acetaminophen work?\", \"answer\": \"It blocks pain signals and reduces fever.\"}]'),
(3, 3, 'Hydrocodone', 'Hydrocodone is a potent opioid prescribed for severe pain that cannot be managed with over-the-counter medications. It works by binding to pain receptors in the brain, providing relief for injuries, surgeries, or chronic pain conditions.', '[\"Relief from severe pain\", \"Cough suppression in specific cases\"]', 'Follow the prescribed dose, typically 1 tablet every 4-6 hours as needed for pain.', '[\"Drowsiness\", \"Constipation\", \"Addiction risk if misused\"]', '[{\"question\": \"What is Hydrocodone used for?\", \"answer\": \"It treats severe pain.\"}]'),
(4, 4, 'Aspirin', 'Aspirin is an anti-inflammatory and blood-thinning medication that alleviates pain, reduces swelling, and prevents blood clots. It is often used for heart attack and stroke prevention in at-risk patients.', '[\"Pain relief\", \"Inflammation reduction\", \"Blood clot prevention\"]', 'Take 1 tablet with water after meals. Do not exceed 4 tablets daily without medical advice.', '[\"Stomach irritation\", \"Increased bleeding risk\", \"Allergic reactions\"]', '[{\"question\": \"Why is Aspirin prescribed?\", \"answer\": \"For pain relief and clot prevention.\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `avgprice` decimal(10,0) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `labname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `avgprice`, `price`, `image_url`, `labname`) VALUES
(1, 'Dolo 650 mg', 50, 34.00, 'https://cdn.farmako.in/inventory/images/377cae24af8ce310bec7551fa6589e30d669ac9f/af3b5a930410780737589b77ff7f2ac0abb75b38.png', 'Micro Lab Limited'),
(2, 'Acetaminophen', 60, 58.00, 'https://cdn.britannica.com/23/130223-050-99065995/acetaminophen-suppositories.jpg', 'Micro bio Lab'),
(3, 'Hydrocodone', 600, 580.00, 'https://longislandinterventions.com/wp-content/uploads/2022/07/Hydrocodone.jpg', 'Lakshimi biotech Lab'),
(4, 'Aspirin', 95, 87.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdXZzKOhrUr234DqrHclM6T0_BzCaEiQB9g&s', 'deepak Lab of Bio Strength');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `rating` decimal(2,1) NOT NULL CHECK (`rating` >= 0 and `rating` <= 5),
  `comment` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `product_id`, `rating`, `comment`) VALUES
(1, 1, 4.5, 'Effective for reducing fever.'),
(2, 1, 4.0, 'Good but a bit expensive.'),
(3, 2, 3.5, 'Works fine but slower effect.'),
(4, 2, 3.8, 'Good but needs improvement.'),
(5, 3, 4.2, 'Very useful and reliable.'),
(6, 3, 3.9, 'Satisfactory performance.'),
(7, 4, 4.8, 'Excellent product with fast results.'),
(8, 4, 4.1, 'Great but could be cheaper.');

-- --------------------------------------------------------

--
-- Table structure for table `salts`
--

CREATE TABLE `salts` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `chemicalname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `salts`
--

INSERT INTO `salts` (`id`, `product_id`, `name`, `chemicalname`) VALUES
(1, 1, 'paracetamol 650g', 'CH02 || CH02'),
(2, 2, 'Tylenol and Panadol', 'C8H9NO2'),
(3, 3, 'Vicodin', 'C18H21NO3'),
(4, 4, 'acetylsalicylic', 'CH3COOC6H4COOH');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `descriptions`
--
ALTER TABLE `descriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `salts`
--
ALTER TABLE `salts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `descriptions`
--
ALTER TABLE `descriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `salts`
--
ALTER TABLE `salts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `descriptions`
--
ALTER TABLE `descriptions`
  ADD CONSTRAINT `descriptions_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `salts`
--
ALTER TABLE `salts`
  ADD CONSTRAINT `salts_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
