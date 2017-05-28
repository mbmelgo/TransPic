# TransPic a text-to-image-and-text-translator

## Description
A web application that presents another approach to machine translation systems that use Text-to-Image-and-Text approach. The system is just like the usual Text-to-Text systems but with a pictorial output that conveys image representation of the translated text. The system differs from traditional approaches of machine translation because it generates images together with the translated texts, which would allow the users to better understand the translation, thus avoiding misunderstandings and miscommunication. The system for now contains 936 words together with their corresponding images and are categorized into 29 different categories. As of now only English, Filipino and Cebuano Languages are supported. If you want to contribute translation of your language contact me through email, mbmelgo1@up.edu.ph

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
![LOG_IN](https://lh3.googleusercontent.com/xNk2Di8Grr3Ben2AZySGgKYzbM6RRxNi7P5zlJNCm8as7uekA4So4lit8S_w7RXECuFrvPMWkX3xqoQ=w1280-h590-rw)

### Home Page
![HOME](https://lh3.googleusercontent.com/S9EwIbGecqzid2vXDzETCm53GugaObB_GYjFREHL16QVl1FkuF9LlBpzlgVPrC7x_nB2jk_G_yYj5XU=w1280-h590-rw)

### View All Words
![View All Words](https://lh6.googleusercontent.com/tZ6sWsCjsDrMRTF5zzGosOwteJu1Itzz-Z5MhGajKhQoCi_1Pe4KR8Y8siRRxBt2ZcmQQnAqTLo8kHA=w1280-h590-rw)

### Search Word
![Search Word](https://lh6.googleusercontent.com/T72y8W2EJDV_ql6nhYiQr87kqPW4kRI7oEnoJClyBbYCcqekeglgAW100Jy3-TUcoCt3UKWiYpLD_Uk=w1280-h590-rw)

### Add Word
![Add Word](https://lh5.googleusercontent.com/wVFwZa7ops6bbbrLtiHvfkN6Y8qacrr3jIE0rwX6wv3SYPS2v_Wigd5SRKEMB8ZQuFqQP2u_hwIuz9Q=w1280-h590-rw)

### Update Word
![Update Word](https://lh5.googleusercontent.com/dl4p6eCXVQRroSZ2U16TWKpc5nZIjg2lifXXNnkEqzUHZ8Ibi_TUp2t5PheCmXfwTkSfpnntsm39GO8=w1280-h590-rw)

### View Word
![View Word](https://lh6.googleusercontent.com/MYBj2jJs6OCOL5GPYg0emebOVWAt8F3cwEKeISlVeV_UWRZmrXpOnvwvcBVv9CEVtsyaycR5oM3ARfw=w1280-h590-rw)

### View All Categories
![View All Categories](https://lh6.googleusercontent.com/IV61R7npy0sNAvweKY-v-ui4q7G-hscXvg3xfGEgjPCHfYCEh0eDp3v7rbwKfCyR97p0v_O9HMiYmzA=w1280-h590-rw)

### Search Category
![Search Category](https://lh3.googleusercontent.com/z5bDV6ZuJWyC_qe3TKwuXaJCMJFjeEy718XS1fLcQZXU-RNJYf86vGLBkmFIIBlgDTxjBq33MH19VzE=w1280-h590-rw)

### Add Category
![Add Category](https://lh6.googleusercontent.com/Q0YxsFAEfb4Nwq6nqIcAtqfOxKARB6XlWzrv8K3-9FiX72ysAi_X4eTYPIAdiHD2Aif6F_j5aRYKNEY=w1280-h590-rw)

### Update Category
![Update Category](https://lh4.googleusercontent.com/tsL7gzqZ_1avEoKxlYnF2-3bXgc2LplPdgWntbh5NkpqTIfZFMDXL05cS0CAtT_0psWSlNN0ogjqkOo=w1280-h590-rw)

### View Category
![View Category](https://lh6.googleusercontent.com/OgoGrbD42PiN1DaI_EwgUgwwzPl28hoRbymg3acjBFXeWrcdRHpBQGrAZ8twFkDpdih4NRI6c3fjBDg=w1280-h590-rw)

### View All Words in this Category
![View All Words in this Category](https://lh4.googleusercontent.com/z7wpkTpdIXRM_Eswb40-UeVrqIWX00u2ph1kJL4O4nPXt3ejle7Y62-Q6T0j-mVTxaoHKpuYBRk6TXA=w1280-h590-rw)
