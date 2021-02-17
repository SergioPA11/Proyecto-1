Drop database if exists healthdb;
Create database healthdb;
use healthdb;

drop table if exists teacher;
create table teacher (
id int primary key auto_increment,
name varchar(100),
email varchar(40),
password varchar(50)
);

drop table if exists school;
create table school (
id int primary key auto_increment,
name varchar(40),
direction varchar(80)

);

drop table if exists municipality;
create table municipality (
id int primary key auto_increment,
name varchar(40)

);

drop table if exists district;
create table district (
id int primary key auto_increment,
name varchar(40)

);

drop table if exists district_municipality;
create table district_municipality ( 
id_district int not null,
id_municipality int not null,

primary key (id_district, id_municipality),
foreign key (id_district) references district (id)
on update cascade
on delete cascade,
foreign key (id_municipality) references municipality (id)
on update cascade
on delete cascade
);

drop table if exists Teacher_School;
create table Teacher_School ( 
id_Teacher int not null,
id_School int not null,

primary key (id_Teacher, id_School),
foreign key (id_School) references school (id)
on update cascade
on delete cascade,
foreign key (id_Teacher) references teacher (id)
on update cascade
on delete cascade
);

drop table if exists course;
create table course (
Id int not null,
id_School int not null,
name varchar(40),

primary key (Id, id_School, name),
foreign key (id_School) references school (id)
on update cascade
on delete cascade
);

drop table if exists student;
create table student (
studentId int not null,
courseId int not null,
Year int,
Metabolic_age float,
Average_of_fat float,
Average_of_Hydration float,
Muscle_weight float,
Muscle_mass_level float,
Bone_weight float,
Kilocalories float,
Sex varchar(15),
BMI int,
Weight float,
Height float,
Abdominal_perimeter float,
physical_activity_level int,

primary key(studentId, courseId),
foreign key (courseId) references course (Id)
on update cascade
on delete cascade
);