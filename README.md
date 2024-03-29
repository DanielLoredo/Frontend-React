# Shift RecSports - REACT.JS
Este es el repositorio correspondiente a la aplicacion de RecSports para generar reservaciones y visualizar aforo del gimnasio

--- 
## Archivos y Folders
<img width="162" alt="image" src="https://user-images.githubusercontent.com/70722142/230911700-62457763-5525-4b4d-a9c0-b29b89b152bf.png">
Los contenidos de cada folder son los siguientes:

- **API:** Funciones para llamadas a la API externa
- **Components:** Componentes globales o componentes que pueden ser reutilizados en distintas páginas
- **Hooks:** Custom Hooks que utilice uno o más componentes
- **Pages:** Contenido de las páginas. Para cada una de las páginas existe un subfolder correspondiente con el contenido de la página especificada
(Véase detalles en "Estructura de una página y cómo crear una nueva página")

- **Shared:** Funciones compartidas entre los componentes y páginas de la aplicación web como estilos y contextos
- **Types:** Tipos e interfaces de TypeScript compartidas para varios componentes, así como los types de respuestas de la API
- **Utils:** Funciones y utilidades adicionales para el funcionamiento de la aplicación, comúnmente para uso de una sola vez de manera global, por ejemplo el Theme, funciones de Rutas Protegidas, etc.

--- 
## Routing
El Routing está definido en App.tsx de la siguiente manera:
<img width="652" alt="image" src="https://user-images.githubusercontent.com/70722142/230913860-f83a87d4-3547-4e81-979c-ee0222a2b319.png">

Para cada una de las rutas, se debe conectar a una ruta específica como se muestra en la imagen

**Después actualizo esta sección, pues existen rutas protegidas que dependen del tipo de usuario**

--- 
## Estilos
El framework de componentes y estilos utilizados es [Material-UI](https://mui.com/material-ui/getting-started/overview/).
Existen 3 maneras de generar estilos CSS para los componentes:

### 1. Generar componentes de Estilo con la funcion Styled de @emotion/styled (Material UI)

Para crear componentes de Estilo se debe utilizar la función de Styled pasando como parámetro el componentes de Material-UI o de HTML al que se le quieren aplicar los estilos CSS como objeto.

<img width="487" alt="image" src="https://user-images.githubusercontent.com/70722142/230914757-f1c688f1-4abc-467d-8119-a15d1061bc0e.png">

Una vez que se ha creado el componente, se puede utilizar directamente como se muestra a continuación.

<img width="314" alt="image" src="https://user-images.githubusercontent.com/70722142/230915328-8809c0aa-bd3a-4dc1-af9e-d35e41ada819.png">

Se recomienda poner estos componentes de estilo en una archivos .ts adicional al componente en el que se van a aplicar, o por defecto en shared > styles.ts en caso de que el estilo pueda ser reutilizado en 2 o más componentes

<img width="143" alt="image" src="https://user-images.githubusercontent.com/70722142/230916866-0970b9ab-3e6f-4004-8a83-1ec1b822ecac.png">

### 2. Utilizar directamente las props de los componentes de Material-UI
Pasando directamente variables a las props de los componentes de Material-UI, se pueden aplicar estilos CSS como se muesta a continuación:

<img width="173" alt="image" src="https://user-images.githubusercontent.com/70722142/230915165-c09e1480-73e0-4ad4-8ba9-549831d7c908.png">

Sin embargo, no todas las variables de CSS están disponibles en las props para cada uno de los componentes. Este acercamiento es bastante útil en las Grids para esquematizar la responsii¿vidad como se verá en  el siguiente apartado.

### 3. Aplicar estilo directamente in-line con el prop "sx" de Material-UI

En ocasiones, es necesario aplicar estilos en línea, o cambiar una sola propiedad de CSS que no está disponible en las props del componente. Para eso, se puede utilizar el prop sx y pasar como objeto las variables CSS que se quieran aplicar al componente como se muestra a continuación.

<img width="176" alt="image" src="https://user-images.githubusercontent.com/70722142/230915241-34954722-fa2a-4eb6-a992-ef13fa0a2ad5.png">

A su vez, este acercamiento tiene la mayor prioridad en la jerarquía de CSS.

### IMPORTANTE: Theme

Finalmente, existen estilos globales aplicados en la **Theme** de la página que se encuentran en Utils > Theme.ts

<img width="416" alt="image" src="https://user-images.githubusercontent.com/70722142/230918957-4bb28f7d-f2e1-4a3b-bf63-3d8f8f3db7f4.png">

--- 
## Responsividad
Para el manejo de responsividad se utilizan las [**Grid**](https://mui.com/material-ui/react-grid/) de Material-UI. Se recomienda leer la documentación de este componente previo a utilizarlo. A continuación se muestra un ejemplo de la utilización de cuadrículas

<img width="308" alt="image" src="https://user-images.githubusercontent.com/70722142/230920027-280cc8a9-d362-4125-8285-fba6162c483b.png">

El resultado para una vista **md** o mayor como el de una computadora se aplican el tamaño indicado en el prop **md**

<img width="1280" alt="image" src="https://user-images.githubusercontent.com/70722142/230920101-7e9dd139-fba9-44e7-bc7a-783f56b0a686.png">

El resultado para una vista mayor a **xs** y menor a **md** como la de un dispositivo móvil es el siguiente:

<img width="299" alt="image" src="https://user-images.githubusercontent.com/70722142/230920248-e6cf4271-c42e-40dd-8a03-79728851d189.png">

### Reconocer el tamaño de la Pantalla (Computadora o Dispositivo Móvil)
A su vez, existe una Custom Hook llamada **useIsMobile** que regresa como valor booleano si la vista actual es de un dispositivo móvil o de la pantalla de una computadora. Esto permite cambiar dinámicamente el contenido de la página dependiendo del tamaño de la pantalla. A continuación se muestra un ejemplo:

<img width="577" alt="image" src="https://user-images.githubusercontent.com/70722142/230921601-7e32a941-d50f-47bb-bb02-c0f75ca48196.png">


--- 
## Estructura de una página y como crear una nueva página
(Véase el componente Pages > Home) **jeje, al rato actualizo esta parte**

<img width="145" alt="image" src="https://user-images.githubusercontent.com/70722142/230922274-2a89b29d-c7c5-4b87-a9e1-34886866fc0c.png">

--- 
## Manejo de Usuarios y Permisos
**En construcción**

<img width="549" alt="image" src="https://user-images.githubusercontent.com/70722142/230922834-9ee23d47-3d61-4b2f-8ecf-4a53c371c985.png">

