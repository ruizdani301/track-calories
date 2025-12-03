# Contador de calorias

![This is an alt text.](/calorie-tracker-api-context/image/image.png "This is a sample image.")


Aplicación desarrollada con React + TypeScript, utilizando Context API y useReducer para la gestión de estado global.
Permite registrar actividades, calcular calorías y reiniciar la aplicación cuando existan datos guardados.
La interfaz está diseñada con TailwindCSS.

## Tecnologías utilizadas

React

TypeScript

Context API

useReducer

TailwindCSS

LocalStorage para persistencia de datos

## Descripción del funcionamiento

El componente principal App:

Consume el estado global mediante el hook useActivity().

Guarda automáticamente las actividades en localStorage usando useEffect.

Calcula si es posible reiniciar la app usando useMemo.

Renderiza los siguientes componentes:

Form → formulario para agregar actividades.

CalorieTracker → resumen de calorías consumidas y quemadas.

ActivityList → listado de actividades registradas.

El botón "Reiniciar App" se habilita solo si existen actividades en el estado global.

## Estructura principal de componentes

```
src/
│
├── components/
│   ├── Form.tsx
│   ├── ActivityList.tsx
│   └── CalorieTracker.tsx
│
├── hooks/
│   └── useActivity.ts
│
├── context/
│   └── ActivityContext.tsx   # Context + useReducer
│
└── App.tsx

```


## Estado global

El proyecto utiliza:

Context Provider para exponer estado y dispatch.

useReducer para manejar acciones como:

agregar actividad

eliminar actividad

filtrar

reiniciar aplicación

El estado completo queda disponible en todos los componentes a través de:

```
const { state, dispatch } = useActivity();

