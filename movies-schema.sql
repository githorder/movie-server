CREATE TABLE movie (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	release_year INTEGER NOT NULL,
	slogan TEXT,
	country_name VARCHAR(255),
	duration_in_minutes INTEGER
);

CREATE TABLE movie_releases (
	id SERIAL PRIMARY KEY,
	premiered_in_russia TIMESTAMP,
	premiered_in_world TIMESTAMP NOT NULL,
	release_date_dvd TIMESTAMP,
	movie_id INTEGER NOT NULL,
	FOREIGN KEY (movie_id) REFERENCES movie (id)
);

CREATE TABLE movie_ratings (
	id SERIAL PRIMARY KEY,
	rating VARCHAR(10),
	allowed_age INTEGER,
	movie_id INTEGER NOT NULL,
	FOREIGN KEY (movie_id) REFERENCES movie (id)
);

CREATE TABLE person (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	role VARCHAR(255) NOT NULL,
	movie_id INTEGER NOT NULL,
	FOREIGN KEY (movie_id) REFERENCES movie (id)
);

CREATE TABLE movie_person (
	id SERIAL PRIMARY KEY,
	movie_id INTEGER NOT NULL,
	person_id INTEGER NOT NULL,
	FOREIGN KEY (movie_id) REFERENCES movie (id),
	FOREIGN KEY (person_id) REFERENCES person (id)
);

CREATE TABLE genre (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	movie_id INTEGER,
	FOREIGN KEY (movie_id) REFERENCES movie (id)
);

CREATE TABLE viewers (
	id SERIAL PRIMARY KEY,
	country_name VARCHAR(255) NOT NULL,
	viewers_count BIGINT NOT NULL,
	movie_id INTEGER NOT NULL,
	FOREIGN KEY (movie_id) REFERENCES movie (id)
);

CREATE TABLE movie_finance (
	id SERIAL PRIMARY KEY,
	budget BIGINT NOT NULL,
	marketing BIGINT,
	box_office_world BIGINT NOT NULL,
	box_office_usa BIGINT,
	movie_id INTEGER NOT NULL,
	FOREIGN KEY (movie_id) REFERENCES movie (id)
);




