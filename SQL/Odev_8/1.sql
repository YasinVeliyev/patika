CREATE TABLE IF NOT EXISTS employee 
			(id Serial PRIMARY KEY,
			 name VARCHAR(50) NOT NULL,
			 birthday DATE NOT NULL,
			 email VARCHAR(100))