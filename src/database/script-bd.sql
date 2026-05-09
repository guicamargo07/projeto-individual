create database projetoindividual;
use projetoindividual;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (30),
email varchar (30),
genero varchar (30),
senha varchar (30)
);

create table clube (
idTime int primary key auto_increment,
nome varchar (30)
);

create table desempenho (
idPartidas int primary key auto_increment,
partidas int,
gols int,
assistencias int,
fk_time int,
constraint fk_time
foreign key (fk_time) references clube (idTime)
);

create table conquistas (
idConquista int primary key auto_increment,
premio varchar (20),
ano year,
fk_clube int,
constraint fk_clube
foreign key (fk_clube) references clube (idTime)
);

insert into usuario values 
(default, "Gui", "gui@gmail.com", "Masculino", "1234Gui");

insert into clube values 
(default, "Real Madrid");

insert into desempenho values
(default, 438, 450, 131, 1);

insert into conquistas values 
(default, "Bola de ouro", 2014, 1);

select * from conquistas;


