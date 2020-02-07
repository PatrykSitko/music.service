create table Users 
(user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
firstname TEXT NOT NULL,
lastname TEXT NOT NULL,
birth_date date NOT NULL,
login TEXT NOT NULL,
password TEXT NOT NULL,
token TEXT NOT NULL);

create table Regions (region VARCHAR(100) NOT NULL UNIQUE PRIMARY KEY);

create table Genres 
(genre_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
category TEXT NOT NULL,region varchar(100),foreign key (region) references Regions(region) );

create table Artists 
(artist_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
firstname TEXT NOT NULL,
lastname TEXT NOT NULL,
birthdate date NOT NULL);
create table Albums 
(album_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
title TEXT NOT NULL,
release_date date NOT NULL,
artist_id INT NOT NULL,
genre_id INT NOT NULL,
cover_url TEXT NOT NULL,
FOREIGN KEY (artist_id) REFERENCES Artists(artist_id),
FOREIGN KEY (genre_id) REFERENCES Genres(genre_id));

create table Musics 
(music_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
artist_id INT NOT NULL,
album_id INT NOT NULL,
title TEXT NOT NULL,
path TEXT NOT NULL,
FOREIGN KEY (artist_id) REFERENCES Artists(artist_id),
FOREIGN KEY (album_id) REFERENCES Albums(album_id));

create table Connection_Tokens (connection_token VARCHAR(64) NOT NULL UNIQUE PRIMARY KEY);
