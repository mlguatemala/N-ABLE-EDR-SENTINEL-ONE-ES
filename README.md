# N-able EDR Landing Pages

Este repositorio contiene dos landing pages para N-able EDR powered by SentinelOne®:
- `index.html` - Versión en Español
- `index-en.html` - Versión en Inglés

## Configuración del Formulario

### 1. Configuración del Endpoint

En ambos archivos HTML, necesitas reemplazar `'YOUR_API_ENDPOINT'` con la URL real de tu endpoint. Busca esta línea en el código JavaScript:

```javascript
const response = await fetch('YOUR_API_ENDPOINT', {
```

### 2. Estructura de Datos

El formulario envía los siguientes datos en formato JSON:

```json
{
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string",
    "company": "string",
    "country": "string",
    "jobTitle": "string",
    "comments": "string"
}
```

### 3. Mensajes de Respuesta

#### Español (index.html)
- Mensaje de éxito: "¡Gracias! El documento técnico será enviado a tu correo electrónico en breve."
- Mensaje de error: "Ocurrió un error. Por favor, intenta nuevamente más tarde."
- Estado de carga: "Enviando..."

#### English (index-en.html)
- Mensaje de éxito: "Thank you! The whitepaper will be sent to your email shortly."
- Mensaje de error: "An error occurred. Please try again later."
- Estado de carga: "Sending..."

Para modificar estos mensajes, busca las siguientes secciones en el código:

```javascript
messageContainer.innerHTML = '¡Gracias! El documento técnico...'; // Mensaje de éxito
messageContainer.innerHTML = 'Ocurrió un error...'; // Mensaje de error
submitButton.innerHTML = 'Enviando...'; // Estado de carga
```

### 4. Validación de Campos

Los siguientes campos son obligatorios (*):
- Nombre/First Name
- Apellido/Last Name
- Correo electrónico/Email
- Nombre de la empresa/Company Name
- País/Country
- Cargo/Job Title

El campo de teléfono y comentarios son opcionales.

### 5. Estilos de Validación

Los estilos para campos inválidos y mensajes se pueden personalizar modificando las siguientes clases CSS:

```css
input.invalid,
select.invalid,
textarea.invalid {
    border-bottom-color: #ef4444;
}

.message-fade-out {
    animation: fadeOut 0.5s ease-out forwards;
}
```

### 6. Tiempo de Visualización de Mensajes

Los mensajes de éxito y error se muestran durante 5 segundos. Para modificar este tiempo, ajusta el valor en:

```javascript
setTimeout(() => {
    messageContainer.style.display = 'none';
}, 5000); // 5000ms = 5 segundos
```

## Personalización Adicional

### Colores
- Éxito: `#4ade80` (verde)
- Error: `#ef4444` (rojo)
- Botón: `#2BCFF3` (azul)

Para modificar estos colores, busca las siguientes líneas:

```javascript
messageContainer.style.backgroundColor = '#4ade80'; // Color de éxito
messageContainer.style.backgroundColor = '#ef4444'; // Color de error
```

### Estilos del Contenedor de Mensajes

```javascript
messageContainer.style.marginTop = '1rem';
messageContainer.style.padding = '1rem';
messageContainer.style.borderRadius = '0.375rem';
```

## Notas Importantes

1. El formulario utiliza la API Fetch para enviar los datos. Asegúrate de que tu endpoint soporte CORS si está en un dominio diferente.

2. La validación del formulario es tanto del lado del cliente (HTML5) como visual (CSS).

3. El formulario incluye la propiedad `novalidate` para permitir una validación personalizada.

4. Los mensajes se eliminan automáticamente para mejorar la experiencia del usuario.

5. El botón se deshabilita durante el envío para prevenir envíos múltiples.

## Requerimientos Técnicos

- El endpoint debe aceptar solicitudes POST
- El endpoint debe aceptar Content-Type: application/json
- Se recomienda implementar rate limiting en el servidor
- El servidor debe responder con códigos de estado HTTP apropiados 