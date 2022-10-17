# The-good-shop WIP

## Tabla de contenidos

1. Concepto
2. Resumen del desarrollo
3. Estructura del proyecto
4. Ejemplos de código
5. Conclusiones
6. Agradecimientos

## Tecnologías empleadas

![image](https://img.shields.io/badge/Global-Javascript-fcee21) ![image](https://img.shields.io/badge/Global-Typescript-00a5d8) ![image](https://img.shields.io/badge/Yarn-front-009912)
![image](https://img.shields.io/badge/React-front-00eded) ![image](https://img.shields.io/badge/Next-front-1c2121) ![image](https://img.shields.io/badge/Aut0-front-2f17aa) ![image](https://img.shields.io/badge/Tailwind-front-1c2121) ![image](https://img.shields.io/badge/Axios-front-123ee0) ![image](https://img.shields.io/badge/swr-front-ea9600)
![image](https://img.shields.io/badge/Fastify-back-fcee21) ![image](https://img.shields.io/badge/Mongoose-back-319905)

## Concepto

Programar una APP que facilite el comercio de proximidad, creando una plataforma que ponga en contacto al cliente con pequeños y medianos productores.

## Resumen del desarrollo

Crear un CRUD que permita subir y editar datos (productos) desde un perfil productor, y llamarlos desde un perfil cliente.

El proyecto consta de dos fases principales.

### Fase 1.

Crear una plataforma donde se ponga en contacto agricultores y clientes, para ello:

1. Creación de un CRUD con DB en MongoDB, que permita recibir datos de usuarios.
2. Implementación de un sistema de registro con Auth0 que asigne un ID único a cada usuario.
3. Implementación de formluarios para crear productos en la DB unicamente por usuarios registrados, de forma que quede su ID en cada uno de ellos.
4. Desarrollo de un entorno que me permita llamar a éstos datos.
5. Conectar con una API de geolocalización, de forma que los productos se muestren por cercanía.
6. Subir imágenes a la DB.

### Fase 2.

Desarrollar un sistema de pago a través de la app:

1. Ampliar modelos e interfaces para aceptar nuevos terminos como: "stock", "orders"..., necesarios para una gestión eficiente.
2. Implementar un sistema de pagos funcional a través de Stripe

### Fase3.

Continuar trabajando en funcionalidades adicionales.

Actualmente el proyecto se encuentra en el punto 4 de la Fase 1.

## Estructura del proyecto

Toda la primera fase del proyecto gira en torno a Aut0 y la ID única que asigna a cada perfil que se registra en la app.

Existen 5 páginas principales.

**1. index**

En el index se verifica el usuario, de modo que que despliega un componente diferente dependiendo de: 
Si no está logueado nos pedirá que nos registremos.
Si está logueado pero no tiene perfil nos obligará a completar el perfil antes de continuar.
O si está logueado y tiene el perfil completo, lo que nos permitirá acceder a todas las funcionalidades.

**2. register_product**

Sólo es accesible para un usuario logueado y con perfil completo, ya que desde aquí se crean los nuevos productos que serán mostrados en la tienda, y se editan los existentes. Al crear un producto, se asigna automáticamente la ID del usuario, así como varios datos del perfil, de forma que se pueda realizar un seguimiento del mismo.

**3. shop, shop/product, shop/productor**

A la tienda se puede acceder sin necesidad de estar registrado, nos permite filtrar por producto o vendedor, y en sus perfiles quedan asignados sus productos gracias de nuevo a la ID de Auth0.


## Ejemplos de código

Visto lo anterior, es obligado destacar éstas dos líneas de código:

La primera es el hook de Auth0 para poder acceder a la información del usuario:

```
  const { user } = useUser()
```

En la segunda utilizamos el hook anterior para obtener el identificador y a través de SWR llamar a los datos de la base de datos en "tiempo real".
Para evitar llamar a un valor indefinido y provocar un error, los valores se llaman a través de condicionales:

```
  const { data: userProfile } = useSWR<User>(
    user?.sub ? `/users/id/${encodeURIComponent(user?.sub)}` : null, {
    refreshInterval: 5000
  })
```

## Conclusiones

Éste proyecto ha supuesto tanto un reto como un choque de realidad. En primer lugar me ha servido para terminar de familiarizarme con las Bases de datos y su estructura. Por otro lado para investigar y desarrollar componentes atractivos y funcionales a partes iguales. Por otro lado, y una lección, cuando piensas incluir Auth0 a tu desarrollo, no designer ninguno de tus elementos principales como "user"

## Agradecimientos

En primer lugar, a mis profesores Lusimi y Marc, pues sin su conocimiento y motivación no habría llegado hasta quí.
A mi compañero de clase Sergio, porque verlo siempre un paso por delante era motivación para intentar ir un paso mas allá.
Y por supuesto a mdn web docs_ por estar siempre ahí

