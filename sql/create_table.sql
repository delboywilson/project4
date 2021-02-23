DROP TABLE IF EXISTS userInformation;

CREATE TABLE IF NOT EXISTS userInformation (
        ID SERIAL PRIMARY KEY,
        fName VARCHAR(50) NOT NULL, 
        lName VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(50) NOT NULL,
);