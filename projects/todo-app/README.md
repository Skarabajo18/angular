# Nivel 1 – Fundamentos Angular

Este workspace agrupa tres ejercicios de Angular que cubren componentes standalone, data binding, directivas y enrutamiento: `todo-app`, `counter-app` y `portfolio-app`.

## Requisitos

- Node.js 20+
- Angular CLI 20.3+

Instala dependencias en la carpeta `nivel1`:

```bash
npm install
```

## Cómo ejecutar

Arranca cada demo con `ng serve` indicando el proyecto:

```bash
ng serve --project todo-app
ng serve --project counter-app --port 4201
ng serve --project portfolio-app --port 4202
```

Elige puertos distintos si deseas tenerlas abiertas simultáneamente.

## Paso a paso: creación de `todo-app`

### 1. Generar workspace y aplicación

```bash
ng new nivel1 --create-application false --standalone --routing false --style css
cd nivel1
ng generate application todo-app --standalone --routing false --style css
```

### 2. Componentes y modelo

```bash
ng generate component task-form --project todo-app --standalone true
ng generate component task-list --project todo-app --standalone true
```

Crea `projects/todo-app/src/app/models/task.model.ts`:

```ts
export interface Task {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  completed: boolean;
}

export interface TaskPayload {
  title: string;
  description: string;
}
```

### 3. Implementación

- `projects/todo-app/src/app/task-form/task-form.ts`: componente standalone que usa `FormsModule`, recibe una tarea opcional con `@Input`, emite eventos `save` y `cancel`, y normaliza el formulario en `ngOnChanges`.
- `projects/todo-app/src/app/task-form/task-form.html`: formulario con `[(ngModel)]`, muestra un encabezado dinámico para crear o editar y botones para enviar o cancelar.
- `projects/todo-app/src/app/task-form/task-form.css`: estilos para el formulario (grid, botones, inputs).
- `projects/todo-app/src/app/task-list/task-list.ts`: lista de tareas con `@Input`/`@Output`, usa `DatePipe` y `UpperCasePipe`, expone métodos `toggle`, `editTask` y `deleteTask`.
- `projects/todo-app/src/app/task-list/task-list.html`: recorre las tareas con `*ngFor`, muestra badges y fechas con pipes, y define acciones para cada tarea.
- `projects/todo-app/src/app/task-list/task-list.css`: estilos para tarjetas, badges, estados completados y mensajes vacíos.
- `projects/todo-app/src/app/app.ts`: componente raíz que usa señales (`signal`, `computed`) para manejar el estado, calcula estadísticas, administra selección y generación de IDs.
- `projects/todo-app/src/app/app.html`: orquesta el formulario y la lista, muestra totales y controla los `@Output`.
- `projects/todo-app/src/app/app.css`: estilos del layout principal.

### 4. Verificar

Compila para asegurarte de que no existan errores:

```bash
ng build todo-app
```

Inicia el servidor de desarrollo:

```bash
ng serve --project todo-app
```

Abre `http://localhost:4200/` y prueba crear, editar, marcar como completada o eliminar tareas.

## Próximos pasos

- Repite el mismo flujo para documentar `counter-app` y `portfolio-app`.
- Añade tests unitarios (`ng test todo-app`) o integra una guía de commits si quieres compartir el repo.
