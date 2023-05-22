# Desafío - TB

![Front Desafio TB](https://drive.google.com/file/d/1QkqLsyAwHucoXgdzr3hseFg-28sm42MJ/view?usp=sharing)

## Instalación

Para instalar y ejecutar la aplicación, sigue estos pasos:

1. En la carpeta `api`, ejecuta el siguiente comando para instalar las dependencias:
   ```
   npm install
   ```
2. Luego, inicia el servidor API con el siguiente comando:
   ```
   npm start
   ```
3. En la carpeta `app`, ejecuta el siguiente comando para instalar las dependencias:
   ```
   npm install
   ```
4. Finalmente, inicia la aplicación cliente con el siguiente comando:
   ```
   npm start
   ```

Si deseas ejecutar las pruebas en el backend, puedes utilizar el siguiente comando:
```
npm run test
```

## Descripción

Este desafío consiste en desarrollar una aplicación Full Stack dividida en tres partes:

1. Un API utilizando Node.js + Express.js.
2. Un cliente utilizando Bootstrap + React.


En el backend, el flujo se puede resumir de la siguiente manera:

El cliente realiza una solicitud al servidor para obtener los archivos que cumplen ciertas condiciones, como la búsqueda de un archivo específico o la visualización de todos los archivos disponibles.

En el servidor, se implementa una ruta correspondiente que maneja esta solicitud. Esta ruta se encarga de realizar las llamadas necesarias al API externo para obtener los datos requeridos.

Una vez que se obtienen los datos del API externo, se procesan y se filtran según las condiciones especificadas. Por ejemplo, en el caso de una búsqueda de archivos, se realiza el filtrado adecuado para mostrar solo los archivos que coinciden con el término de búsqueda.

El servidor envía la respuesta al cliente, proporcionando los datos procesados y filtrados. La respuesta generalmente se devuelve en formato JSON para que el cliente pueda manejarla fácilmente.

En el frontend, se utiliza Redux para mantener los estados de la aplicación y facilitar la gestión de los datos. Algunas funcionalidades relacionadas con Redux en este caso específico podrían ser las siguientes:

Se utiliza un estado de Redux para almacenar la lista de archivos que cumplen las condiciones especificadas. Este estado se actualiza cada vez que se realizan solicitudes al servidor y se reciben los datos correspondientes.

El buscador implementado en el frontend se asocia con un estado de Redux que almacena el término de búsqueda ingresado por el usuario. Cada vez que se realiza una búsqueda, se envía una solicitud al servidor con el término de búsqueda y se actualiza el estado de la lista de archivos en consecuencia.

El botón de reset se asocia con una acción de Redux que restablece el estado de la lista de archivos y el término de búsqueda al estado inicial. Al hacer clic en el botón de reset, se realiza una nueva solicitud al servidor para obtener todos los archivos disponibles y se actualiza el estado en consecuencia.

El desplegable en la esquina superior derecha del frontend se relaciona con una solicitud opcional al servidor para mostrar todos los archivos disponibles. Esta solicitud se realiza cuando se selecciona una opción específica del desplegable y se actualiza el estado de la lista de archivos correspondientemente.

## Agradecimientos

Gracias por la oportunidad de participar en este desafío. Ha sido una experiencia enriquecedora y espero seguir aprendiendo y mejorando en los puntos que no logré completar.

Atentamente,

Diego Abad
