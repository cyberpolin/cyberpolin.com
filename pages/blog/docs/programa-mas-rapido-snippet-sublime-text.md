---
title: Programa más rapido haciendo snippets para sublime text
author: Dr Kondo (Carlos González)
date: '2021-03-04T12:00:00.000Z'
lang: es
pos: 3
hook_text: Si estas buscando como desarrollar más rapido el uso de snippets te puede ayudar, te enseño como hacer snippets en sublime text
yt_url: https://youtu.be/E5iLs8ICW9g
---

# Que es un snippet

No es más que un texto predefinido que puedes pegar en tu editor con solo una abreviación y con la tecla tab. Estos snippets nos ayudan mucho ya que la mayor parte del tiempo lo que hacemos al desarrollar un sitio web, o un app móvil repetimos mucho código, como por ejemplo los "console.log"

## Asi que como hacemos un snippet?

Yo uso sublime text como editor predeterminado, asi que el ejemplo que daré es con ese editor, si usas alguno otro, seguramente habrá manera de hacerlos.

Abramos nuestor editor, y en el menu seleccionamos la opción: "Tools" > "Developer" > "New snippet"

![](../static/030421/create-snippet.gif)


Ahora editemos cosas básicas, como por ejemplo el texto a escribir, el ``` <content>```, despues el ```<tabTrigger>``` y por ultimo el ``` <scope>```

![](../static/030421/edit-snippet.gif)

Nota: El scope (ambito) se refiere a que tipo de archivos se aplicara el snippet.

Al final del post les dejo una lista...

El siguiente paso es guardar el snippet, esto es muy importante tiene que guardarse en la ruta `~/Library/Application\ Support/Sublime\ Text\ 3/Packages/` y con la extención `.sublime-snippet`

![Guardando el snippet](../static/030421/save-snippet.png)

Listo, ahora solo abre un archivo .js y pruebalo...

![Guardando el snippet](../static/030421/console-log-snippet-working.gif)

Una ves que tienes el primer snippet listo, ahora toca jugar un poco con sus opciones.

### Fields
Puedes usar **Fields**, que son lugares donde queremos que aparezca el cursor, y estas pueden ser uno o varios, las puedes distingir entre si con el simbolo de dinero $ y el numero de **Field**.  ```$1```, ```$2```, etc.

### Placeholders
Tambien puedes poner texto predeterinado, o instrucciones a estos fields con la siguiente sintaxis ${1:placeholder}, del mismo modo que **Fields** puedes poner mas de uno...

![Agregando placeholders a tus snippets](../static/030421/sublime-text-snippets-placeholders.gif)

Con esto estas preparado para crear tus propios snippets, no te limites y usa tu imaginación, platicame tambien como te fue y si esta información te ayudo en algo, haste entonces, bytes...



## Tipos de `<scope>` para los snippets

- ActionScript: source.actionscript.2
- AppleScript: source.applescript
- ASP: source.asp
- Batch FIle: source.dosbatch
- C#: source.cs
- C++: source.c++
- Clojure: source.clojure
- CoffeeScript: source.coffee
- CSS: source.css
- D: source.d
- Diff: source.diff
- Erlang: source.erlang
- Go: source.go
- GraphViz: source.dot
- Groovy: source.groovy
- Haskell: source.haskell
- HTML: text.html(.basic)
- JSP: text.html.jsp
- Java: source.java
- Java Properties: source.java-props
- Java Doc: text.html.javadoc
- JSON: source.json
- Javascript: source.js
- BibTex: source.bibtex
- Latex Log: text.log.latex
- Latex Memoir: text.tex.latex.memoir
- Latex: text.tex.latex
- LESS: source.css.less
- TeX: text.tex
- Lisp: source.lisp
- Lua: source.lua
- MakeFile: source.makefile
- Markdown: text.html.markdown
- Multi Markdown: text.html.markdown.multimarkdown
- Matlab: source.matlab
- Objective-C: source.objc
- Objective-C++: source.objc++
- OCaml campl4: source.camlp4.ocaml
- OCaml: source.ocaml
- OCamllex: source.ocamllex
- Perl: source.perl
- PHP: source.php
- Regular Expression(python): source.regexp.python
- Python: source.python
- R Console: source.r-console
- R: source.r
- Ruby on Rails: source.ruby.rails
- Ruby HAML: text.haml
- SQL(Ruby): source.sql.ruby
- Regular Expression: source.regexp
- RestructuredText: text.restructuredtext
- Ruby: source.ruby
- SASS: source.sass
- Scala: source.scala
- Shell Script: source.shell
- SQL: source.sql
- Stylus: source.stylus
- TCL: source.tcl
- HTML(TCL): text.html.tcl
- Plain text: text.plain
- Textile: text.html.textile
- XML: text.xml
- XSL: text.xml.xsl
- YAML: source.yaml