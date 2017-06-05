# TransPic a text-to-image-and-text-translator

## Description
A web application that presents another approach to machine translation systems that use Text-to-Image-and-Text approach. The system is just like the usual Text-to-Text systems but with a pictorial output that conveys image representation of the translated text. The system differs from traditional approaches of machine translation because it generates images together with the translated texts, which would allow the users to better understand the translation, thus avoiding misunderstandings and miscommunication. The system for now contains 936 words together with their corresponding images and are categorized into 29 different categories. As of now only English, Filipino and Cebuano Languages are supported. If you want to contribute translation of your language go to the app's website https://transpic.scalingo.io/signin

## Prerequisites (for contributing)
TransPic Requires these to run:
  - [NodeJS](https://nodejs.org/en/)
  - [MeteorJS](https://www.meteor.com/)
  - [MantraCLi](https://github.com/mantrajs/mantra-cli)
  - [MongoDB](https://www.mongodb.com/)

## Set-up
  - Clone or download the repository
  - Install the dependencies
  ```sh
  $ cd TransPic
  $ npm install 
  ```
  - Start the server
  ```sh
  $ npm run windows // If you are using Windows
  $ npm run ubuntu // If you are using Ubuntu
  ```
## Restore the database
  - Copy the "meteor" folder inside the "dump" folder
  - Paste the "meteor" folder inside the mongo dump folder located in "C:/Program Files/MongoDB/Server/*MongoDB Version*/bin/dump/" for Windows
  - Open terminal and command promt and go to mongo dump directory and run this
  ```sh
  $ mongorestore -h 127.0.0.1 --port 3001 -d meteor dump/meteor
  ```
  
## Technologies Used
  - MeteorJS
  - ReactJS
  - MongoDB

## ScreenShots
### Log-in Page
![LOG_IN](http://i.imgur.com/oO701vg.png)

### Home Page
![HOME](http://i.imgur.com/wY6CfIy.png)

### View All Words
![View All Words](http://i.imgur.com/znWgBC9.png)

### Search Word
![Search Word](http://i.imgur.com/8Wq7JHU.png)

### Add Word
![Add Word](http://i.imgur.com/7oJzJCH.png)

### Update Word
![Update Word](http://i.imgur.com/fAI0439.png)

### View Word
![View Word](http://i.imgur.com/5mnq66d.png)

### View All Categories
![View All Categories](http://i.imgur.com/qgFHUaJ.png)

### Search Category
![Search Category](http://i.imgur.com/G6zYFAz.png)

### Add Category
![Add Category](http://i.imgur.com/u5p30oB.png)

### Update Category
![Update Category](http://i.imgur.com/G9oDnm1.png)

### View Category
![View Category](http://i.imgur.com/JJrIaN2.png)

### View All Words in this Category
![View All Words in this Category](http://i.imgur.com/Pgo15kZ.png)
