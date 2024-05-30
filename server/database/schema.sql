-- Create table for users
CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- Create table for items
CREATE TABLE item (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

-- Create table for categories
CREATE TABLE category (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL
);

-- Create table for programs
CREATE TABLE program (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  synopsis TEXT NOT NULL,
  poster VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  year INT UNSIGNED NOT NULL,
  category_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category(id)
);

