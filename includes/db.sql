-- Krijimi i bazës së të dhënave
CREATE DATABASE IF NOT EXISTS roadfix_gjilan;
USE roadfix_gjilan;

-- Tabela e përdoruesve
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(20),
    password VARCHAR(255) NOT NULL, -- Do të ruajmë hash-in e fjalëkalimit
    role ENUM('admin', 'user', 'guest') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela e lajmeve
CREATE TABLE news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    summary TEXT NOT NULL,
    content TEXT,
    category ENUM('punime', 'bllokime', 'devijime', 'projekte') NOT NULL,
    source_url VARCHAR(500),
    burimi VARCHAR(150), -- Burimi njerëzor (para se të publikohet)
    location_lat DECIMAL(10, 7),
    location_lng DECIMAL(10, 7),
    status ENUM('published', 'draft', 'archived') DEFAULT 'draft',
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela për njoftimet (për regjistrimin e pajisjeve për push notifications)
CREATE TABLE subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    subscription_data JSON, -- Të dhënat e pajisjes nga front-end
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Fut një përdorues admin default (fjalëkalimi: admin123)
-- Fjalëkalimi i hash-uar me password_hash() është i gjatë, kështu që do ta krijojmë përmes PHP më vonë.
-- INSERT INTO users (name, surname, email, password, role) VALUES ('Admin', 'User', 'admin@roadfixgjilan.com', '$2y$10$...', 'admin');
