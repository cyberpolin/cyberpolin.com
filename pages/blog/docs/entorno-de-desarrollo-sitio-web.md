---
title: Configurando tu entorno de desarrollo para web
author: Dr Kondo (Carlos González)
date: '2021-02-18T12:00:00.000Z'
lang: es
pos: 2
hook_text: Configurar tu entorno de desarrollo es cosa facil, sigue estos sencillos pasos y estaras listo para desarrollar facilmente.
yt_url: https://youtu.be/E5iLs8ICW9g
---

Configurar tu entorno de desarrollo es cosa facil, sigue estos sencillos pasos y estaras listo para desarrollar facilmente.

“Si Dispusiera De Ocho Horas Para Cortar Un Árbol, Emplearía Seis En Afilar El Hacha” -- Abrham Lincoln.

Lo mas importante antes de empezar a desarrollar cualquier proyecto es la preparación, y esto es muy cierto, si nosotros empezamos desde en medio, y no al principio, en algun momento necesitaremos complementar lo faltante, esto sin contar que el preparar las herramientas, tambien nos ayuda a entrar en el estado mental necesario para hacer las cosas de la mejor manera posible.

Te voy a enseñar como preparar un ambiente de desarrollo *basico* para un sitio web, necesitaremos:

 - Python (Generalmente ya instalado)
 - Ngrok (Gratis, es necesarios hacer una cuenta)

 Vamos a usar Python para crear un servidor web, algo super sencillo que nos brinde un servidor y podamos acceder a los recursos por medio de este y no desde el sistema de archivos, con esto luego podremos enrutarlo con Ngrok. Si no sabes que es Ngrok no comas ansias, ahora te lo explico...

 ## Iniciando el proyecto

 Antes que nada hagamos una carpeta del proyecto en la cual pondremos una carpeta "img", otra "css" y una mas "assets", no es necesario que usemos las 3 pero siempre es buena idea usar la misma nomenclatura para ellas.

 ![creating html basic tree](../static/021821/html-basic-tree.gif)


 Asi quedaría...

 ![html basic tree](../static/021821/html-basic-tree.png)

 Ahora crearemos los archivos para cada carpeta, para que quede de la siguiente manera...

 ![html basic tree](../static/021821/add-files-basic-html.png)

 Haremos uso de la herramienta `touch` en nuestra terminal y crearemos archivos, recuerden `touch` es para crear archivos y `mkdir` para directorios.


 ![creating html basic tree](../static/021821/html-basic-tree-files.gif)

 Por ultimo creemos contenido basico para nuestra pagina, un `<h1>` y un parrafo sera suficiente...

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi sitio web</title>
</head>
<body>
    <h1>Ambiente basico de desarrollo web</h1>
    <p>Este sitio funcionara dentro de un servidor básico en Python y saldra a internet por medio de Ngrok</p>
</body>
</html>
```

Agregemos tambien algo de estilos, una buena fuente y un background :)

```
<link rel="stylesheet" type="text/css" href="./css/style.css">
```

y dentro del archivo `css/style.css` pondremos lo siguiente...

```css
body {
    background: #AADDCC;
    font-family: 'Helvetica';
}

```

Se vera asi.

 ![Vista previa](../static/021821/index-html.png)

 ## Corramos el servidor y Ngrok

 Como ya te comente antes, es mejor sacar los archivos desde un servidor y no desde el sistema de archivos, ademas necesitaremos tener un servidor https, eso lo lograremos con Ngrok, asi que primero hagamos el servidor.

 ### Servidor web básico con Python

 Actualmente casi todos los sistemas operativos usan Python en alguna parte por lo que tendras python disponible en tu terminal, y con eso sera suficiente, situemonos en la raiz del proyecto y escribamos el siguiente comando.

```cli
python -m http.server
```

Si esto no funciona quiere decir que tienes Python 2 y deberas usar.

```cli
python -m simpleHTTPServer
```

Por defecto esto arrancara el servidor en el puerto 8000, si deseas correrlo en otro puerto, puedes agregarlo al final del comando.

```cli
python -m http.server 8081
```

 ![Python http basic server](../static/021821/python-basic-server.gif)

 Ahora podemos ingresar al sitio desde `http://localhost:8000` pero aun no tenemos `https`, eso lo lograremos gracias a Ngrok, asi que vamos al sitio de ngrok y creemos una cuenta, o podemos logearnos con gmail, o github.

 A descargar el archivo y lo vamos a poner en la carpeta `/bin` donde se ponen los ejecutables en sistemas UNIX.

![Python http basic server](../static/021821/installing-and-runing-ngrok.gif)

Por ultimo teniendo el servidor python en ejecución hay que ejecutar el ngrok haciendo tunel al puerto `8000` y listo tenemos un sitio que sale a la web y ademas por `https`


De aqui en adelante solo falta que uses tus habilidades y hagas un sitio bello y funcional.

![Python http basic server](../static/021821/all-together.gif)


Puedes [usar Font Awesome](./font-awesome-como-usarlo) en tu sitio con esta configuración.

Déjame tus comentarios y comparte!

Saludos cordiales y recuerda que tu imaginación es el límite.


