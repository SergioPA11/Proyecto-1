![enter image description here](https://img.shields.io/badge/Author-Sergio_Peñate_Alejo-cyan)

# 💻 Proyecto-1

Project based on obesity in the Canary Islands, in order to reach every point of the island to lower the obesity index

![logo Ies El Rincon](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/rincon.png)

# 💬 Index

* [App content](#-App-content)
* [Documentation](#-Documentation)
* [Prerequisites](#-Prerequisites)
* [Built with](#-Built-with)
* [Thanks for](#-Thanks-for)

# 📱 App content

The need comes after an analysis carried out by the government of Spain where it registers the Canary Islands in the second most overweight community in Spain.
In this case it is not a company, it is a Physical Education Teacher at the Felo Monzón institute.

The main idea of the development is to visualize with some statistics introduced by the physical education teacher, in the application I would add the following data: Height, Weight, Age, Center, Municipality in order to get a statistic by municipality, it is done in that mode to see it on a graph or map of the island, and when selecting the municipality, show some statistics.

In the second part that will be published, we see a radical change in statics, operation and easier to use by the user, soon it will be possible to interact with the map to include data, see the institutes, the media and everything that the user wants to see in that moment

* [Mockup Images](https://github.com/SergioPA11/Proyecto-1/tree/master/Mockup) Mockup del Proyecto
* [Prototype](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Prototype%201.vp) Prototipado del Proyecto

## 📋 Documentation

  This is the official documentation of this work, in the following sections you will see each section of the project
* [Postman](https://documenter.getpostman.com/view/12915849/TVspjUH7)
  
* [Mockup](#Mockup) Explained in the 6.1 documentation section
* [Usability](#Usability) Explained in the 6.2 documentation section
* [Proyect Usability](#Proyect-Usability)
* [Manuals](#-Manuals)
* [Technology Stack](#Technology-Stack)
* [Technology Comparison](#Technology-Comparison)
* [Data model](#Data-Model)
* [User Requirements](#User-Requirements)
* [Use Case](#Use-Case)
* [Interfaces](#Interfaces)

## Data Model

### Statement

You want to register the data of the students of several institutes of the sila of Gran Canaria, for this we have the table School where the institutes of the island would be stored, and from the institutes, we have the table of students where the data of the body mass, visceral mass, age or group, sex, in order to obtain a statistic where we will look at the obesity index in the Canary Islands.

### E/R Diagram
![e/r](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/ERFinish.png)

* To go up to the start:
* [Go up](#-Proyecto-1)

### Medium step
```
Legend 
The word that is in bold would be the primary keys, 
the ones with the * symbol are foreign
```

Teacher (**id**, Name, Username, Password)

Teacher_School (**id_Teacher**, **id_School**)

Primary key from **id_Teacher** and foreing **id_School***

Primary key from **id_School** and foreing **id_Teacher***


District(**id**, Name)

Municipality (**id**, Name)

School (**id**, Name, Street)

District_School(**id_School**, **id_District**)

Primary key from **id_School** and foreing **id_District***

Primary key from **id_District** and foreing **id_School***


Course(**Name**, **id_School***)

Student (**studentId**, **courseId***, **id_School***, metabolic_age, average_of_fat, average_of_Hydration, muscle_weight, muscle_mass_level, bone_weight, kilocalories, 
    registration_date, BMI, weight, height, abdominal_perimeter, physical_activity_level, year, sex)

Primary key from **courseId** and foreing **course**

Primary key from **id_School** and foreing **id_School***


### Relational Model
![realtional model](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/UML%20Healht.png)

* To go up to the start:
* [Go up](#-Proyecto-1)

## User Requirements

### R1 Plataform

* R1.1 The application is mobile, both ios and android
* R1.2 It can be web too, but in principle it is mobile
* R1.3 It is an interactive application, for the map

### R2 User

* R2.1 Any user who can manipulate data can be registered
* R2.2 External users only see the map, only the map will appear in the app
* R2.3 Registered teacher can add, edit and view the map
* R2.4 No need to register to enter the application

### R3 App

* R3.1 External users only see the map, only the map will appear in the app
* R3.2 The edit section, delete will be enabled but will not be used at first
* R3.3 When starting the app, we have a login, if the login fails, a wrong login will appear
* R3.4 It has a menu, with three buttons where we have to add, edit and view
* R3.5 The edit and delete function does not yet have functionality at the moment, but it is included for future use

* To go up to the start:
* [Go up](#-Proyecto-1)
* [Go to Documentation](#-Documentation)

## Use Case
![Use case](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/CasosDeUsos.PNG)

* To go up to the start:
* [Go up](#-Proyecto-1)

## Arquitecture

The user will install this app on his mobile phone, whether it is Ios or Android, the main function of the application is to see data on the map, add data from the samples taken in the institutes

The server would be hosted on the institute's server at first, or in the town hall depending on whether it is approved by the sports council, the server will save all the data collected from the Las Palmas schools, the teacher will register in the application to enter the data, if he is not a teacher, no registration is necessary to access it.

## Interfaces

### Mockup
![login](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/NewMockup/Login.png)

This is the first screen when starting the application, on this screen we will log in where we will register to use the App, We have 3
fields to fill in, where it asks us for the name, username and password.

![login error](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/NewMockup/LoginMal.png)

This is also the first screen when starting the application, on this screen we performed the login but in this case the registration goes wrong. We have 3
fields to fill in, where we are asked for the name, username and password, but they are not filled in correctly and that is why it comes out this way.

![Menu](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/NewMockup/Menu.png)

After successfully logging in, it will show us this screen, on this screen we find 2 icons at the top where one is a login icon, which when touched will take us back to the initial screen, on the right is the icon of configuration, in the center of the screen we find three buttons that tell us the following:
Enter Data (Explanation in image 4), Edit Data (Explanation in image 5), View Map (Explanation in image 6).

![add](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/NewMockup/AddSchool.png)
![add1](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/NewMockup/addCourse.png)
![IntroData](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/NewMockup/a%C3%B1adirDAtos.png)

When pressing the Enter Data button, it will show us this screen where we have already explained what was previously explained with the blue bar at the top, but in that case an icon of an arrow is added that is to go to the menu screen when it is pressed, We see the tanita icon that is the brand of the scales where teachers take the data to be able to enter them in the following fields, Body Fat, Visceral Fat, BMI and the age to be able to compare, this field is not taken out by the tanita I have put it I additionally, when entering all the data we press the "Add Data" button.

![EditData](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/NewMockup/EditDatos.png)

When pressing the Edit Data button, it will show us this screen where we have already explained what was explained above with the blue bar at the top, we see the tanita icon the same as in Enter Data, the difference with the screen to enter data, is that the data the following fields are already occupied, Body Fat, Visceral Fat, BMI and age, you can modify the data and press the button to edit it.

![Map](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/NewMockup/Mapa.png)

When pressing the button See Map, this screen will show us where we have the map of Gran Canaria, and we can look at each municipality to see the statistics,
of the institutes, and if we want to go back we have the menu already explained above.

Here I leave the prototype where you can see how it works [Prototype](https://www.fluidui.com/editor/live/preview/cF9oV2wzTGJ4N3phWGd0WlZsUE1vYzF2ZTVXU2kzZmRJQw==)

* To go up to the start:
* [Go up](#-Proyecto-1)

### Usability

### Mockup Usability

![Usability](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/NewMockup/MockupUsability.png)

The application shown as we can see in the three images provided, we see a very simple design where we have 1 button to log in, and another 3 buttons to use the application, the application meets the following characteristics:
* Useful: for what has been done since the application shows the statistics of each municipality to see the obesity rates in each of them.
* Easy to use: thanks to its simple design, it is easy to use due to the simplicity shown in the images such as the implementation of 3 buttons to access 3 different screens as needed by the user. The buttons are so simple that only the user would have to press them to use them.
* Easy to learn: basically you do not have to learn to use the application due to its simplicity, the user uses it intuitively making it much easier for the user, each button is well specified indicating where each of them is directed.
* Elegant in its design: Trying to be an application in principle for Gran Canaria I have decided to use a color palette based on the Canarian flag including the colors: white, blue, yellow.
* It is Efficient: in its use, due to the little time it takes to use the application, it has a fast interface, thus appreciating its use.
* Forecast of errors: as we see in image 2 and in the explanation of the mockup, if the user performs the form incorrectly or leaves it blank, that screen would appear.
* Simplicity in its design: as I have already emphasized, the most that stands out is its simple design, thus helping the user.

* To go up to the start:
* [Go up](#-Proyecto-1)
* [Go to Documentation](#-Documentation)

# Proyect Usability

## Color palette

<div>
  <img src="https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/ImgProyect/EditPaleta%20de%20colores.jpg" width="500">
</div>

<br/>
<br/>

* To go up to the start:
* [Go up](#-Proyecto-1)
* [Go to Documentation](#-Documentation)

## Usability

![UsabilityProyect](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/ImgProyect/menu_desple.png)

* Useful: for what has been done since the application shows the statistics of each municipality to see the obesity rates in each of them
* Easy to use: thanks to its simple design, it is easy to use due to the simplicity shown in the images such as the implementation of 3 buttons to access 3 different screens as needed by the user. The buttons are so simple that only the user would have to press them to use them
* Easy to learn: basically you do not have to learn to use the application due to its simplicity, the user uses it intuitively making it much easier for the user, each button is well specified indicating where each of them is directed
* Elegant in its design: Trying to be an application in principle for Gran Canaria I have decided to use a color palette based on the Canarian flag including the colors: white, blue, yellow
* It is Efficient: in its use, due to the little time it takes to use the application, it has a fast interface, thus appreciating its use
* Forecast of errors: If the user fills in the registration forms incorrectly or makes a failed login, an error will appear on the screen with words in red where it will tell the user that they have failed in any registration or login operation

![Codigo](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Mockup_scale/Codigo2.png)

* Simplicity in its design: as I have already emphasized, the most that stands out is its simple design, thus helping the user
* The user must be able to customize the interface: The user can change from mode to night mode just by touching a button in the settings

![Codigo](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Mockup_scale/codigo1.png)

* Interface consistency: To facilitate the use of the application, it has been designed with a simple design, quick to learn since it is used intuitively, a great speed of use behind its menu that facilitates information to the user
* Feedback: The answers are appropriate to the user, if you add data, modify or want to see the map, the application will do it

![mapa](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/ImgProyect/menu_mapa.png)

* Simplicity of design: As we see in the image that I have given, we see that we do not saturate the user with many buttons or a lot of information on the screen so that he does not feel lost at any time
* Minimal surprise: The application is created in such a way so that it is used without any problem and nothing happens that the user cannot react at the moment

* Writing text in the interface: The blocks of the buttons, letters or all kinds of text formatting, are very brief so that the user does not delay in carrying out their operations.
In the first image we see the menu buttons

* Visual design: The visual design is designed so that the user focuses on the most fundamental functions of the application, such as viewing the data, adding or editing it.

![registro](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/ImgProyect/login_register.png)

* Layout of form windows: The position of the forms are placed in such a way that, as we see in the image above, we have the registration form in the center so that the user pays the maximum attention, just as at login and the two remaining forms are located on top


* To go up to the start:
* [Go up](#-Proyecto-1)
* [Go to Documentation](#-Documentation)

# 📖 Manuals

## 📙 Installation Manual

### 🖥️ Backend

In order to use the server we need to install Node.Js and a sql service such as Sql Workbench or Xampp
And install git to be able to use the git clone

In order to use the application you will have to modify the .env and adapt your passwords
```
JWT_SECRET=V3RY#1MP0RT@NT$3CR3T#

MYSQL_DATABASE=health_db
MYSQL_USER=root
MYSQL_PASSWORD="your password"
MYSQL_ROOT_PASSWORD="your password"

DB_HOST=localhost

NODE_ENV=development
```

To load the project we will use the following line:

```
$ git clone https://github.com/SergioPA11/Proyecto-1
```

To install all the packages of the project we use the following line:

```
$ npm install
```

To start the server in Node.Js we will use the following line:
The First:
  - To go to the directory where the server is located
  
```
$ cd Backend
```
  - After going to the directory we do:
  
```
$ node server.js
```

To start the report generator server we will follow the following steps:
The First:
  - To go to the directory where the server is located
  
```
$ cd Backend/app/jsreportapp
```
  - After going to the directory we do:
  
```
$ jsreport start
```

* To go up to the start:
* [Go up](#-Proyecto-1)
* [Go to Documentation](#-Documentation)

## 🖥️ Frontend

To load the project we will use the following line:

```
$ git clone https://github.com/SergioPA11/Proyecto-1
```

To install all the packages of the project we use the following line:

```
$ npm install
```

In order to use the previous line we need to install the following:
```
$ npm install @ionic/lab --save-dev
```

To start the server in Node.Js we will use the following line:

```
$ ionic serve

Or this line if we want to see it as mobile

$ ionic serve --lab
```

* To go up to the start:
* [Go up](#-Proyecto-1)
* [Go to Documentation](#-Documentation)

## ℹ️ HelpNdoc

Let's start the help, for this we use HelpNdoc, here I will leave the link of the file or if the project is cloned it will be in the folder called Help

First we need to download the program at the following link:
[HelpNdoc Donwload](https://www.helpndoc.com/es/descarga/)

Follow the recommendations given on the installation page once installed. 

To upload the file we will go here:
[HelpNdocFile](https://github.com/SergioPA11/Proyecto-1/tree/master/Ayuda)

Once loaded, we go to tools and we will find this icon, we start the server and it would be:
![HelpNdocServer](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/iniciar_help.png)

* To go up to the start:
* [Go up](#-Proyecto-1)
* [Go to Documentation](#-Documentation)

## 📗 User manual

When we start with this app we will find this initial screen, which will appear as you start the app, we have a navigator tabs or a menu with three sections where we can access each page much easier

![Menu Principal](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/ImgProyect/tabs.png)

If we look at the top left, we see a button with three stripes, which if we press it, a side menu with various options is displayed, to see help, activate dark mode...

![Menu](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/ImgProyect/menu.png)

If we are a teacher, we give the floating button to add the data, We select from the drop-down the fields we want to enter

![addData](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/ImgProyect/add_data1.png)

We select again from another drop-down the fields we want to enter

![addData2](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/ImgProyect/add_data2.png)

Once we have selected the school and the course where we want to enter the data, we see the rest of the data that can be entered from the sample

![addData3](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/ImgProyect/add_data3.png)

To see the data already entered we will go to the Data page, where some data cards are shown

![datos](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/ImgProyect/menu_datos.png)

Then we have the map to consult the municipality and in the future we will see the data on the map

![map](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/ImgProyect/menu_mapa.png)

And finally, to create an account we register, once we have registered we can start session in the app

![login](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/ImgProyect/login_register.png)

* To go up to the start:
* [Go up](#-Proyecto-1)

## Technology Stack

* **Backend:** 
Node.Js
MySql(BD)
Sequalize(ORM)

* **Frontend:**
Angular with Ionic

* **Web Service**
RestFull

* To go up to the start:
* [Go up](#-Proyecto-1)

## Technology Comparison

* Frontend technology comparison

The technology that I use for my project is Ionic Framework, which as we already know we can start or create our project on several platforms, in this case we have 3 different ones: Ios, Android and web page, when creating an app in this technology it offers us more ease for programmers since we work for 3 services at the same time in a single code, this is thanks to the fact that it is hybrid, if it were native we would have to change the code for what we are going to do in a specific format

* PowerApp
The main advantage of Microsoft PowerApps is that they are very simple: companies will be able to create applications without having much technical knowledge of app development. You will only need a minimal computer base.


| Comparative | Hybrid applications | Native apps | Web applications |
| --- | --- | --- | --- |
| Learning curve | Simple to learn, and only one curve for all developments | More complicated, and requires learning for each platform separately | Save hardware and software costs |
| Export to different platforms | Very simple, it is developed once and exported to all | Requires development for each programming language | Easy to use |
| Development cost | Lower cost, requiring only one development and being this simpler | Higher cost, you have to develop more times and in more complex languages | They facilitate collaborative and remote work |
| Ease of finding developers | Very simple, and a single person can export to multiple platforms | Somewhat less simple, and normally requires one person for each platform | Scalable and fast update |
| Performance | Very good, except maybe for very demanding applications, games, 3D | Optimum | They cause fewer errors and problems |
| Access to device features | Very spacious, although not complete | Full | Data is more secure | 
| Visual appearance and user experience | Very good, simulating behaviors with HTML5 and CSS3, although it may not be optimal | May be optimal |

* To go up to the start:
* [Go up](#-Proyecto-1)

## Planification

* [Proyect planning](https://github.com/SergioPA11/Proyecto-1/projects/1)

## 🧰 Prerequisites

* [Git]( https://git-scm.com/)
* [MySql]( https://www.mysql.com/)
* [Node.Js]( https://nodejs.org/en/)
* [Ionic](https://ionicframework.com/)
* [Angular](https://angular.io/api/common/http/HttpClient)
* [HelpNdoc](https://www.helpndoc.com/es/)

* To go up to the start:
* [Go up](#-Proyecto-1)

## 🛠️ Built with

* [Postman](https://www.postman.com/)
* [Justinmind]( https://www.justinmind.com/)
* [Visual Paradigm]( https://www.visual-paradigm.com/)
* [MySql]( https://www.mysql.com/)
* [Node.Js]( https://nodejs.org/en/)
* [Ionic](https://ionicframework.com/)
* [Angular](https://angular.io/api/common/http/HttpClient)
* [Leaflet](https://leafletjs.com/)
* [HelpNdoc](https://www.helpndoc.com/es/)

To go up to the start:
* [Go up](#-Proyecto-1)

## 👉🏽 Thanks to

* [Néstor Batista](https://github.com/Nestorbd)
* [Tiburcio Cruz](https://github.com/tcrurav)

## 🙏🏽 Thanks for your visit

* To go up to the start:
* [Go up](#-Proyecto-1)
