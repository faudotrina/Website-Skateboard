
CREATE DATABASE 'mydb'   

CREATE TABLE `products` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `user_id` varchar(255),
  `quantity` integer,
  `price` float,
  `description` varchar(255),
  `updated_at` DATETIME DEFAULT NOW(),
  `created_at` DATETIME DEFAULT NOW()
);

ALTER TABLE `products` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);