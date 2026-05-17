create database projetoindividual;
use projetoindividual;

create table usuario (
    idUsuario int primary key auto_increment,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    genero varchar(30) not null,
    senha varchar(100) not null
);

create table clube (
    idTime int primary key auto_increment,
    nome varchar(50) not null
);

create table desempenho (
    idPartidas int primary key auto_increment,
    partidas int,
    gols int,
    assistencias int,
    fk_time int,
    constraint fk_time
        foreign key (fk_time) references clube(idTime)
);

create table dashboard (
    idDashboard int primary key auto_increment,
    overall int,
    velocidade int,
    finalizacao int,
    passe int,
    drible int,
    defesa int,
    fisico int,
    altura varchar(20),
    peso varchar(20),
    ano int,
    fk_clube int,
    constraint fk_clube
        foreign key (fk_clube) references clube(idTime)
);

insert into clube values 
(default, "Real Madrid"), 
(default, "Man Utd"), 
(default, "Al-Nassr"), 
(default, "Juventus"), 
(default, "Man Utd"), 
(default, "Sporting"), 
(default, "Portugal");

insert into desempenho values 
(default, 438, 450, 131, 1), 
(default, 346, 145, 73, 2), 
(default, 141, 121, 24, 3), 
(default, 134, 101, 28, 4), 
(default, 31, 5, 6, 5), 
(default, 244, 149, 46, 6);

insert into dashboard values
-- Sporting
(default, 68, 78, 57, 58, 70, 22, 57, "1,80M", "75KG", 2002, 6),

-- Manchester United (2008)
(default, 91, 93, 84, 83, 94, 45, 79, "1,85M", "80KG", 2008, 2),

-- Real Madrid
(default, 94, 92, 92, 81, 91, 33, 80, "1,87M", "83KG", 2017, 1),

-- Juventus
(default, 93, 90, 93, 82, 89, 35, 78, "1,87M", "83KG", 2019, 4),

-- Manchester United (2022)
(default, 91, 87, 93, 82, 88, 34, 75, "1,87M", "85KG", 2022, 5),

-- Al-Nassr
(default, 85, 76, 88, 76, 80, 34, 76, "1,87M", "85KG", 2025, 3);

ALTER TABLE dashboard ADD COLUMN posicao VARCHAR(50);

UPDATE dashboard SET posicao = 'Ponta Direita' WHERE ano = 2002;
UPDATE dashboard SET posicao = 'Ponta Esquerda' WHERE ano = 2008;
UPDATE dashboard SET posicao = 'Ponta Esquerda' WHERE ano = 2017;
UPDATE dashboard SET posicao = 'Centroavante' WHERE ano = 2019;
UPDATE dashboard SET posicao = 'Centroavante' WHERE ano = 2022;
UPDATE dashboard SET posicao = 'Centroavante' WHERE ano = 2025;
