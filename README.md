# Web Now Products
# Nota
* Yo recomiendo realizar todo desde la consola de comandos para una instalacion mas limpia, yo uso CMD de Git, pero cualquier consola que permita los comandos de node esta bien *


              Deploy Local

Realizamos primero la instalacion de Nodejs (https://nodejs.org/es/download)
Una vez instalado Abrimos una consola(cmd) y ejecutamos el siguiente comando

              npm install -g @angular/cli

Esto instalara Angular de Forma global

              Clonar Repositorio de Git

Clonamos el Repositorio en la carpeta de que sea por ejemplo C://users/usuario/desktop/"nombre de la carpeta del proyecto"

              git clone http://192.168.1.227/DefaultCollection/Pagina%20Web%20Now%20Products/_git/Pagina%20Web%20Now%20Products

Ingresamos nuestras credenciales para por crear el clone

entramos a la carpeta web-lifeproducts
              cd C://users/usuario/desktop/"nombre_carpeta"/"carpeta_proeycto"

una vez descargado nos aseguramos que estemos en la rama que vamos a trabajar (Solo en caso de tener varias ramas en el repositorio)

Instalar dependencias de Node js

              npm i

Luego corremos el servidor de Angular con el codigo

              ng serve -o

# Solucion de Errores
Si nos arroja el error de que tenemos una version diferente el @angular-devkit
ejecutamos el siguiente comando

            npm install -g @angular-devkit/core

Y luego verificamos con el siguiente comando

            npm install --save @angular-devkit/core

Listo podemos ver nuestra pagina desplegada en nuestro navegador web


# Deploy En Github Pages

corremos el comando
            ng build --configuration-production
ejecutamos los comandos para subir a Git, y una vez en git cambiamos en la seccion de Github pages la carpeta a donde redireccionara el proyecto en este caso debemos reenombrar la carpeta de "Dist" por el nombre de "Docs"

# Instalacion en Mac

Agregar permisos a la carpeta de .npm
damos un cd .. hasta la carpata inicial saliendo de la carpeta usuarios y ejecutamos el siguiente comando

            sudo chown -R 502:20 "/Users/usuario/.npm"

Volvemos a la carpeta de nuestro proyecto y realizamos la instalacion normalmentes
            Seguir la instalacion principal de este documento
Instalamos de nuevo las dependencias en nuestro proyecto
            sudo npm i
ahora volvemos a instalar Angular
            sudo npm i -g @angular/cli

Corremos nuestro proyecto y deberia abrir nuestro navegador con el proyecto

            ng serve -o
