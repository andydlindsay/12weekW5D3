DROP TABLE IF EXISTS cats;

CREATE TABLE cats (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    breed VARCHAR(50)
);

INSERT INTO movie_villains 
    (name, breed)
VALUES
    ('Fred', 'Persian'),
    ('Joni', 'Siamese'),
    ('Tuna', 'Calico'),
    ('Precious', 'DSH');
