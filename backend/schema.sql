CREATE DATABASE banner_app;
USE banner_app;

CREATE TABLE IF NOT EXISTS banners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    end_time DATETIME NOT NULL,
    link VARCHAR(255) NOT NULL,
    is_visible BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO banners (name, description, end_time, link, is_visible) VALUES
('Banner 1', 'Description 1', NOW() + INTERVAL 1 DAY + INTERVAL 1 HOUR + INTERVAL 30 MINUTE + INTERVAL 25 SECOND, 'https://www.google.com', 1),
('Banner 2', 'Description 2', '2024-08-12 17:10:15', 'https://www.google.com', 1);