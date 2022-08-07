---
title: ¿Que es un RESTful API y por que debo usarlo?
author: Dr Kondo (Carlos González)
date: '2021-03-12T12:00:00.000Z'
lang: es
pos: 4
hero_image: ../static/031221/restful-api.jpg
hook_text: Que dos o mas aplicativos se comuniquen entre si nunca fue más fácil, pero hay que seguir ciertas reglas para hacernos la vida más amena, aqui, te digo como...
yt_url: https://youtu.be/E5iLs8ICW9g
---

# ¿Alguna ves has hecho un sandwich?

Estoy seguro que si, y es un proceso muy fácil para ti, aunque te aseguro que no sabes como hacer pan, o como hacer jamon, sin embargo puedes hacer un sandwich sin problema alguno, esto es gracias a el *encapsulamiento*. Este es el concepto más importante y poderoso de la informatica moderna y es que nos permite utilizar el trabajo de otros en nuestro beneficio, acortando asi tiempos y fragmentado el trabajo.

Podemos lograr lo anterior de varias maneras, pero una de las más comunes es usando un API (Aplication Programing Interface) o Interfase de Programacion de Aplicaciones, que es justo lo que se lee una interfase para que puedas programar una aplicacion, aun si no tienes acceso a su codigo fuente, asi que no importa realmente que arquitectura, lenguaje de programación se haya usado para su construcción, ademas que asi protejemos la aplicación con la que vamos a interactuar.

# Necesitamos reglas...

Como en toda relación la comunicación es básica, asi que para poder hacer uso de un API necesitamos reglas, para esto gente con más experiencia que nosotros ha hecho ya un conjunto de ellas a las que llamamos arquitecturas, entre las que se usan con mayor incidencia estan SOAP y REST, esta ultima es la que explico ya que es la que tiene mas usuarios y a mi parecer se puede usar en la mayoria de los casos.


Entonces un API es "algo" que nos permite interactuar con un servidor, a traves de un cliente. Se que se escucha muy simple pero asi es, un cliente puede ser tu computadora, un navegador web, un telefono, un refrigerador etc. Y todo esto sucede siguiendo un conjunto de reglas que a las que les llamamos arquitectura, en nuestro caso REST

![diagrama restful api](../static/031221/restful-api-diagram.png)

# Que es REST?

Por sus siglas en ingles Representational State Transfer.

Como dije antes, un conjunto de reglas que nos ayudaran a tener un orden mientras interactuamos con un servidor a traves de el protocolo *http*, estas reglas se basan en las siguientes premisas.

1. Debe ser cliente/servidor
2. Sin estado (stateles)
3. Cacheable
4. Basado en capas
5. Bajo demanda
6. Interfase uniforme

No voy a hacer un estudio a fondo de REST en este post, pero te quiero dar los conceptos mas importantes para que lo puedas poner en practica, asi que tratare de abstraer lo más posible el conocimiento.

# Elementos de REST

- Recurso
- URI
- Métodos

Cuando accedemos a un API a traves de rest lo nombramos RESTful API, es decir un API totalmente REST. La necesidad de esto es para acceder a información, generalmente de un Base de Datos, pero eso no importa, por que no necesitamos saber donde esta la información ni como esta organizada. Para poder pensar en la información de manera ordenada la clasificaremos en *recursos.*

Imaginemos que accederemos a el API de una biblioteca, entonces podemos pensar en varios recursos: libros, autores, editoriales. Cada clasificación agrupa los datos por alguna caracteristica, de tal forma que si queremos obtener un recurso, digamos, libros, necesitamos una *dirección* de donde obtenerlo.

Una URI (Uniform Resource Identifier) es una direccion web que debe llevar cierto formato para que sea uniforme, de tal manera que siempre sabremos como acceder a los *recursos* de la misma manera. Por ejemplo.

## Para acceder a *libros*

`https://mirestapi.com/libros` Sabremos que este URI o endpoint, nos desplegara todos los libros.
`https://mirestapi.com/libros/1` Sabremos que este URI o endpoint, nos desplegara un libro con el id equivalente a 1.

Lo mismo pasaria con cualquier otro recurso, pero, ¿que pasa si quiero obtener los autores de un libro?

`https://mirestapi.com/libros/1/autores`

Esto nos daria los autores o el autor, segun sea el caso, y si agregamos el id del autor, nos devolvería solo el autor con ese id. Podras notar que de esta manera no tenemos que averiguar los URIs de un API si ya conocemos los *recursos*

Asi que, con REST podemos acceder a los recursos a traves de un URI con un  formato preestablecido, pero, ¿que podemos hacer con los recursos?

- Leerlos
- Agregarlos
- Editarlos
- Eliminarlos

Para esto utilizaremos los *métodos*

- GET: Se usa para leer
- POST: Se usa para agregar un elemento
- PUT: Se usa para editar un elemento del recurso
- DELETE: Se usa para eliminar un elemento

Hay otros métodos, pero estos son los principales, y se usan con el mismo formato, de tal manera que si quieres leer un recurso:

metodo: GET
uri: `https://mirestapi.com/libros/`

metodo: POST
uri: `https://mirestapi.com/libros/`
body: {
    'nombre': 'El amor en los tiempos del cólera',
    'autores': ['Gabriel']
}

Nota como agregamos un *body* donde enviaremos los datos a agregar...

metodo: PUT
uri: `https://mirestapi.com/libros/2`
body: {
    'nombre': 'El amor en los tiempos del cólera',
    'autores': ['Gabriel García Márquez']
}

Nota que agregamos el id del elemento y mandamos la información actualizada

metodo: DELETE
uri: `https://mirestapi.com/libros/2`


Por supuesto el como usas estos recursos dependera del cliente, ya sea JS o móvil, cada lenguaje tiene su propia implemetación de ello. Si te interesa [en este video](https://www.youtube.com/watch?v=5tCt2I7OX9s) explico como acceder aun RESTful API usando react.

# Resumiendo...

Un API es una interfase para leer y editar recursos que se accede a traves de http usando la arquitectura REST, mediante los URIs y usando el metodo necesario segun sea el caso.

Como bono te dejo el formato general para crear URIs

`{protocolo}://{hostname}[:puerto (opcional)]/{recurso}/{id_del_recurso (opcional)/?{filtrado}`

P.S. Se que no aborde el filtrado de recursos, pero estoy seguro que podrás ingeniartelas :)

