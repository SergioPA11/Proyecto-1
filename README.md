![enter image description here](https://img.shields.io/badge/Author-Sergio_Peñate_Alejo-cyan)

# 💻 Proyecto-1
First project on obesity in the Canary Islands

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

After the meeting with Gillermo, he told us that he needs something simple, something fast and easy to use, that the teachers who use it do not spend more than x time to enter the data in the app

* [Mockup Images](https://github.com/SergioPA11/Proyecto-1/tree/master/Mockup) Mockup del Proyecto
* [Prototype](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Prototype%201.vp) Prototipado del Proyecto

## 📋 Documentation

* [Documentación](https://github.com/SergioPA11/Proyecto-1/blob/master/Documentaci%C3%B3n.pdf) Documentación del Proyecto
* [Mockup](#Mockup) Explicado en el apartado 6.1 de la documentación
* [Usability](#Usability) Explicado en el apartado 6.2 de la documentación
* [Postman](https://documenter.getpostman.com/view/12915849/TVspjUH7)

* [Data model](#Data-Model)
* [User Requirements](#User-Requirements)
* [Use Case](#Use-Case)
* [Interfaces](#Interfaces)

## Data Model

### Statement

You want to register the data of the students of several institutes of the sila of Gran Canaria, for this we have the table School where the institutes of the island would be stored, and from the institutes, we have the table of students where the data of the body mass, visceral mass, age or group, sex, in order to obtain a statistic where we will look at the obesity index in the Canary Islands.

### E/R Diagram
![e/r](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/er.PNG)

* To go up to the start:
* [Go up](#-Proyecto-1)
* [Go to Documentation](#-Documentation)

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

School (**id**, idTeacher, Name, Street, municipality)

Student (**id**, Fat_mass, Vesicular_mass, sex, year)

### Relational Model
![realtional model](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Uml.PNG)

* To go up to the start:
* [Go up](#-Proyecto-1)
* [Go to Documentation](#-Documentation)

## User Requirements

### R1 Plataform

* R1.1 The application is mobile, both ios and android
* R1.2 It can be web too, but in principle it is mobile
* R1.3 It is about 6 simple interfaces, with a menu

### R2 User

* R2.1 The only user who has to register is the teacher
* R2.2 External users only see the map, only the map will appear in the app
* R2.3 Registered teacher can add, edit and view the map

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
* [Go to Documentation](#-Documentation)

## Interfaces

### Mockup
![login](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Mockup_scale/login1.PNG)

This is the first screen when starting the application, on this screen we will log in where we will register to use the App, We have 3
fields to fill in, where it asks us for the name, username and password.

![login error](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Mockup_scale/login2.PNG)

This is also the first screen when starting the application, on this screen we performed the login but in this case the registration goes wrong. We have 3
fields to fill in, where we are asked for the name, username and password, but they are not filled in correctly and that is why it comes out this way.

![Menu](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Mockup_scale/menu.PNG)

After successfully logging in, it will show us this screen, on this screen we find 2 icons at the top where one is a login icon, which when touched will take us back to the initial screen, on the right is the icon of configuration, in the center of the screen we find three buttons that tell us the following:
Enter Data (Explanation in image 4), Edit Data (Explanation in image 5), View Map (Explanation in image 6).

![IntroData](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Mockup_scale/intruDatos.PNG)

When pressing the Enter Data button, it will show us this screen where we have already explained what was previously explained with the blue bar at the top, but in that case an icon of an arrow is added that is to go to the menu screen when it is pressed, We see the tanita icon that is the brand of the scales where teachers take the data to be able to enter them in the following fields, Body Fat, Visceral Fat, BMI and the age to be able to compare, this field is not taken out by the tanita I have put it I additionally, when entering all the data we press the "Add Data" button.

![EditData](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Mockup_scale/editDatos.PNG)

When pressing the Edit Data button, it will show us this screen where we have already explained what was explained above with the blue bar at the top, we see the tanita icon the same as in Enter Data, the difference with the screen to enter data, is that the data the following fields are already occupied, Body Fat, Visceral Fat, BMI and age, you can modify the data and press the button to edit it.

![Map](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Mockup_scale/mapa.PNG)

When pressing the button See Map, this screen will show us where we have the map of Gran Canaria, and we can look at each municipality to see the statistics,
of the institutes, and if we want to go back we have the menu already explained above.

* To go up to the start:
* [Go up](#-Proyecto-1)
* [Go to Documentation](#-Documentation)

### Usability

### Mockup usability

![Usability](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Mockup_scale/usability.PNG)

The application shown as we can see in the three images provided, we see a very simple design where we have 1 button to log in, and another 3 buttons to use the application, the application meets the following characteristics:
* Useful: for what has been done since the application shows the statistics of each municipality to see the obesity rates in each of them.
* Easy to use: thanks to its simple design, it is easy to use due to the simplicity shown in the images such as the implementation of 3 buttons to access 3 different screens as needed by the user. The buttons are so simple that only the user would have to press them to use them.
* Easy to learn: basically you do not have to learn to use the application due to its simplicity, the user uses it intuitively making it much easier for the user, each button is well specified indicating where each of them is directed.
* Elegant in its design: Trying to be an application in principle for Gran Canaria I have decided to use a color palette based on the Canarian flag including the colors: white, blue, yellow.
* It is Efficient: in its use, due to the little time it takes to use the application, it has a fast interface, thus appreciating its use.
* Forecast of errors: as we see in image 2 and in the explanation of the mockup, if the user performs the form incorrectly or leaves it blank, that screen would appear.
* Simplicity in its design: as I have already emphasized, the most that stands out is its simple design, thus helping the user.

### Proyect usability

![UsabilityProyect](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Mockup_scale/Usabilidad.PNG)

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

![mapa](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Mockup_scale/map.PNG)

* Simplicity of design: As we see in the image that I have given, we see that we do not saturate the user with many buttons or a lot of information on the screen so that he does not feel lost at any time
* Minimal surprise: The application is created in such a way so that it is used without any problem and nothing happens that the user cannot react at the moment

* Writing text in the interface: The blocks of the buttons, letters or all kinds of text formatting, are very brief so that the user does not delay in carrying out their operations.
In the first image we see the menu buttons

* Visual design: The visual design is designed so that the user focuses on the most fundamental functions of the application, such as viewing the data, adding or editing it.

![registro](https://github.com/SergioPA11/Proyecto-1/blob/master/Mockup/Mockup_scale/registre.PNG)

* Layout of form windows: The position of the forms are placed in such a way that, as we see in the image above, we have the registration form in the center so that the user pays the maximum attention, just as at login and the two remaining forms are located on top


* To go up to the start:
* [Go up](#-Proyecto-1)
* [Go to Documentation](#-Documentation)

## Manuals

## 🖥️ Backend

In order to use the server we need to install Node.Js and a sql service such as Sql Workbench or Xampp
And install git to be able to use the git clone

To load the project we will use the following line:

```
$ git clone https://github.com/SergioPA11/Proyecto-1
```

To install all the packages of the project we use the following line:

```
$ npm install
```

To start the server in Node.Js we will use the following line:

```
$ node server.js
```

## 🖥️ Frontend

To load the project we will use the following line:

```
$ git clone https://github.com/SergioPA11/Proyecto-1
```

To install all the packages of the project we use the following line:

```
$ npm install
```

To start the server in Node.Js we will use the following line:

```
$ ionic serve

Or this line if we want to see it as mobile

$ ionic serve --lab
```

In order to use the previous line we need to install the following:
```
$ npm install @ionic/lab --save-dev
```

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

## Technology comparison

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
* [Justinmind]( https://www.justinmind.com/)
* [Visual Paradigm]( https://www.visual-paradigm.com/)
* [Ionic](https://ionicframework.com/)
* [Angular](https://angular.io/api/common/http/HttpClient)

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

To go up to the start:
* [Go up](#-Proyecto-1)

## 👉🏽 Thanks to

* [Néstor Batista](https://github.com/Nestorbd)
* [Tiburcio Cruz](https://github.com/tcrurav)
* [Eliel Bruna](https://github.com/elbrus19)

## 🙏🏽 Thanks for your visit

* To go up to the start:
* [Go up](#-Proyecto-1)
