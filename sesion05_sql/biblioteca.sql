-- SQL: Structured Query Language
-- SQL es un estandar, el 70% ~ 80% del código
-- es compatible entre diferentes Sistemas Gestores de BD

-- Crear una base de datos
CREATE DATABASE biblioteca;

-- Eliminar una base de datos [PELIGRO!!!]
-- DROP DATABASE biblioteca;

-- DDL: Data Definition Language
-- Crear una tabla
CREATE TABLE libros (
  isbn CHAR(13) PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  editorial VARCHAR(100) NOT NULL,
  num_pag SMALLINT NOT NULL CHECK(num_pag > 0)
);

CREATE TABLE autores (
  isbn CHAR(13),
  autor VARCHAR(100),
  PRIMARY KEY (isbn, autor),
  FOREIGN KEY (isbn) REFERENCES libros(isbn)
);

-- Insertar información
INSERT INTO libros VALUES ('aaaaaaaaaaaaa', 'Juegos del Hambre', 'Trigillas', 300);

INSERT INTO autores VALUES ('aaaaaaaaaaaaa', 'Suzanne Collins');

-- Obtener TODA la información de una tabla
SELECT * FROM libros;