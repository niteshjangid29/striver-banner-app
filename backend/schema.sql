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

-- INSERT INTO banners (name, description, end_time, link, is_visible) VALUES
-- ('Banner 1', 'Description 1', NOW() + INTERVAL 1 DAY + INTERVAL 1 HOUR + INTERVAL 30 MINUTE + INTERVAL 25 SECOND, 'https://www.google.com', 1),
-- ('Banner 2', 'Description 2', '2024-08-12 17:10:15', 'https://www.google.com', 1);

INSERT INTO banners (name, description, end_time, link, is_visible) VALUES
( 'Seasonal Sale', 'Huge discounts on all items! Up to 50% off!', '2024-08-31T04:00:00.000Z', 'https://niteshjangid.me', 0),
( 'New Arrivals', 'Check out our latest arrivals in fashion and electronics.', '2024-08-30T02:30:00.000Z', 'https://finearts.iitr.ac.in/', 0),
( 'Summer Collection', 'Explore our new summer collection with exclusive designs.', '2024-08-28T01:15:00.000Z', 'https://motorsports.iitr.ac.in/', 0),
( 'Holiday Specials', 'Special discounts for the holiday season. Shop now!', '2024-08-17T19:00:00.000Z', 'https://raasiya.onrender.com/', 0),
( 'Portfolio Website', 'To view my portfolio, click the below button 🙂.', '2025-08-11T23:00:00.000Z', 'https://niteshjangid.me', 0),
( 'Finearts IIT Roorkee', 'A group of art enthusiasts based at IIT Roorkee.', '2024-12-11T21:00:00.000Z', 'https://finearts.iitr.ac.in/', 0),
( 'Motorsports IIT Roorkee', 'A group of car enthusiasts who participate in Formula Bharat.', '2024-09-07T13:00:00.000Z', 'https://motorsports.iitr.ac.in', 0),
( 'Raasiya', 'An e-commerce platform with an admin dashboard, blog posts, and payment integration.', '2024-08-14T18:55:00.000Z', 'https://raasiya.onrender.com', 1),
( 'Dummy Banner', 'Go check my portfolio', '2024-08-11T23:40:00.000Z', 'https://niteshjangid.me', 0),
( 'fdvdssd', 'fsdfds', '2024-08-11T18:28:00.000Z', 'https://niteshjangid.me', 0);
