# proyecto datadashboard

# Definición del producto

- Principales usuarios:
para que los (TM)training managers puedan ver la data del progreso en el (LMS)learning management system crearemos un datadashboard.
- la logica esta implementada en ES6.

- Objetivos de los usuarios en relación al producto:
Obtener los datos de las alumnas de una manera ágil y sencilla para poder realizar el seguimiento correspondiente a su avance academico.

- Datos mas relevantes de la interfaz:
En la interfaz lo mas relevante e importante para las Training Managers(TMs) es ver el promedio del avance de los ejercicios de todas las alumnas de Laboratoria

- Frecuencia de análisis de datos:
Los datos son analizados al finalizar cada sprint y al finalizar cada projet.

- Solución de problemas:
Si, ya que en la actualidad manejan un archivo de Excel para ver el progreso de las alumnas pero no es practico de utilizar y es poco atractivo visualmente.

- Proceso de diseño:

lo primero que hicimos a nivel squat fue crear el tablero de post (backlog);en el cual creamos tarea especificas parara el primer sprint;como leer el readme ,crear el prototipo de baja fidelidad y el de alta.

luego tomamos notas sobre la entrevista global que hiso nuestra usuaria directe en este caso (tm);para despues crear el entorno y la estructura en html .luego leimos el lms el cual nos ayudo mucho para crear lo que contendra el achivo main.js el cual contiene toda la funcionalidad del dom; luego de eso se craron las funcionalidades que en este caso fueron 4 ;las que nos permitian :
-filtrar
-buscar
-ordenar
-selecionar
y asi poder solucionar algunos problemas que tiene el usuario para acceder a los datos de las alumnas.



## usuario:
se tomo notas de los pedidos que hizo el usuario de manera global
![foto](https://scontent-scl1-1.xx.fbcdn.net/v/t1.15752-9/35348807_1664476943605784_6856292960187711488_n.png?_nc_cat=0&oh=4be724a14d53b7148f5282a7965c6975&oe=5BC1A879)

# prototipo de baja fidelidad:
## el usuario tendra que abrir su cuenta :

![uno](https://scontent-scl1-1.xx.fbcdn.net/v/t1.15752-9/35265650_1664436620276483_8029700329220079616_n.jpg?_nc_cat=0&oh=e88cccba2efd8c14d9f8100371b3dc83&oe=5BAD4CD3)

## aparecera una lista de cohort de las promociones
- se selecionara una promocion (promocion 2018)la cual sera la unica q pueda abrirse ; mas adelante quisas se implemente la s demas.
- aparece una lista de cohort de alumnas .

![dos](https://scontent-scl1-1.xx.fbcdn.net/v/t1.15752-9/35416132_1664443180275827_6780019348942618624_n.jpg?_nc_cat=0&oh=4954683e01d9dbecf07717382d05f496&oe=5BA1E1B6)

## luego lista de la unidades del LMS:

![tres](https://scontent-scl1-1.xx.fbcdn.net/v/t1.15752-9/35242218_1664433620276783_2480529628473589760_n.jpg?_nc_cat=0&oh=b802803d0eccbb0db5cea720de3f3337&oe=5BB413D7) 

## apararecen los avances y el grado de complejitud:

 - con graficos:
 
![cuatro](https://scontent-scl1-1.xx.fbcdn.net/v/t1.15752-9/35264717_1664431973610281_4178843217246027776_n.jpg?_nc_cat=0&oh=f768c98fcd0e283e365b2fef1eeb0a6c&oe=5BBF7191)

 - sin graficos:

![cinco](https://scontent-scl1-1.xx.fbcdn.net/v/t1.15752-9/35362256_1664441916942620_6630528549734318080_n.jpg?_nc_cat=0&oh=15c9ecca0e47f44974d92faaf3ed7b32&oe=5BAFA2B3)

# prototipo de alta fidelidad:

https://www.figma.com/proto/0vVFpPYyTxVeyenGRzpIwSIi/pag-web?scaling=contain&node-id=14%3A9


