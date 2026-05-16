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

insert into clube values 
(default, "Real Madrid");

insert into desempenho values
(default, 438, 450, 131, 1);

select * from usuario;