---
title: "SARA ID — Cuenta SARA"
shortDescription: "Servicio central de identidad, credenciales protegidas, sesiones unificadas y acceso seguro a las aplicaciones de ICI Laboratories."
category: "Identidad y Autenticación"
lastUpdated: "Octubre 2026"
platforms: ["Web", "Android", "iOS", "API"]
developer: "ICI Laboratories"
contactEmail: "icilaboratories@gmail.com"
order: 1
isCoreAccount: true
icon: "identity"
summary:
  whatIs: "SARA ID es el servicio de identidad central operado por ICI Laboratories para crear, autenticar y gestionar tu Cuenta SARA en las aplicaciones conectadas."
  dataUsed: "Identificador único (UUID), nombre, correo electrónico, credenciales protegidas criptográficamente, sesiones activas y registros de seguridad."
  purposes: "Autenticar usuarios, mantener sesiones seguras, verificar titularidad de correo, restablecer accesos y registrar auditoría contra intrusiones."
  contact: "icilaboratories@gmail.com"
accountDeletion:
  supported: true
  email: "icilaboratories@gmail.com"
  subject: "Solicitud de eliminación de Cuenta SARA - SARA ID"
  processingDays: 15
  responsible: "Equipo de Privacidad y Cumplimiento de ICI Laboratories"
offlineOnly: false
---

Esta Política de Privacidad describe el tratamiento de datos personales en **SARA ID**, el servicio central de gestión de identidad de **ICI Laboratories**, y define las condiciones de uso, seguridad y soberanía aplicables a tu **Cuenta SARA**.

Al registrar una Cuenta SARA o acceder a cualquier aplicación conectada mediante SARA ID, comprendes y aceptas las disposiciones que se explican a continuación.

---

## 01. Quién administra tu cuenta

Tu Cuenta SARA es administrada y operada de manera independiente por **ICI Laboratories**, un **club educativo** e iniciativa de desarrollo tecnológico creada por estudiantes apasionados por la ingeniería de software y la inteligencia artificial.

- **Operador responsable:** ICI Laboratories (Club educativo independiente).
- **Canal de atención y privacidad:** [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com).
- **Portal de gestión de cuenta:** [https://auth.ici-labs.com](https://auth.ici-labs.com).

### Deslinde de responsabilidad institucional (UdeC y FIME)
ICI Laboratories opera de forma autónoma. Todas las aplicaciones, plataformas, códigos fuente, bases de datos y tratamientos de información asociados a la Cuenta SARA son gestionados con exclusividad por el club educativo. **Se deslinda totalmente a la Universidad de Colima (UdeC) y a la Facultad de Ingeniería Electromecánica (FIME)** de cualquier responsabilidad institucional, legal, técnica, administrativa o de resguardo de datos derivada del uso de este servicio o de las aplicaciones conectadas.

### Asesoramiento académico
Las actividades, estándares técnicos y buenas prácticas de ingeniería de ICI Laboratories cuentan con el asesoramiento académico y la mentoría del **Dr. Walter Alexander Mata López**, profesor investigador y quien además se desempeña como **Director de la Facultad de Ingeniería Electromecánica (FIME)**.

### Relación entre SARA e ICI Laboratories
**ICI Laboratories** es la iniciativa y club desarrollador que diseña, programa y aloja la infraestructura del ecosistema. **SARA** (Sistema de Aprendizaje y Rendimiento Académico) es la marca y el entorno de aplicaciones educativas creadas por el club. **SARA ID** constituye la capa transversal de identidad que permite a los usuarios utilizar una única cuenta segura para interactuar con los diferentes proyectos sin duplicar credenciales ni dispersar contraseñas.

---

## 02. Qué información usamos

En SARA ID recopilamos y procesamos únicamente los datos indispensables para autenticarte, proteger el acceso a tus servicios y cumplir con los estándares de seguridad informática aplicables. Conforme a la arquitectura real del sistema, estos datos se clasifican en:

### Datos de cuenta y perfil
- **Identificador de usuario (UUID):** Un identificador universal único, inmutable y generado aleatoriamente por nuestro backend, utilizado para asociar tus registros sin exponer datos sensibles entre componentes.
- **Nombre visible:** Tu nombre y apellidos para identificarte en las pantallas de bienvenida y en las aplicaciones conectadas a las que ingreses.
- **Correo electrónico principal:** Utilizado como dirección canónica de contacto, identificación de inicio de sesión y recepción de comunicaciones de seguridad. Registramos además su estado de verificación.
- **Avatar o fotografía de perfil:** Si decides sincronizarlo voluntariamente desde tu cuenta vinculada de Google o cargarlo en el portal.

### Credenciales protegidas
- Si creas una contraseña directa en SARA ID, ésta **nunca se almacena en texto plano**. Se procesa mediante algoritmos criptográficos robustos de derivación de claves con sal (salt) individualizada (como Argon2id o PBKDF2). El personal técnico de ICI Laboratories no tiene la capacidad matemática ni operativa de leer tu contraseña.

### Sesiones y registros de seguridad
Para proteger tu cuenta contra suplantaciones y permitirte auditar los accesos, nuestro backend registra de forma automática:
- **Identificadores de sesión:** Tokens criptográficos opacos o firmados con tiempo de expiración definido.
- **Metadatos de conexión:** Dirección IP de origen, tipo de dispositivo, navegador web o aplicación cliente (*User-Agent*), y marcas de tiempo (*timestamps*) del inicio de sesión y última actividad registrada.
- **Eventos de auditoría de seguridad:** Intentos fallidos de autenticación, solicitudes de recuperación de credenciales y cambios de contraseña, conservados para prevenir ataques automatizados de fuerza bruta y accesos no autorizados.

---

## 03. Cómo funciona el acceso con Google

SARA ID ofrece la opción de autenticación mediante el proveedor de identidad de **Google** utilizando el estándar de la industria OAuth 2.0 / OpenID Connect.

### Qué datos solicita este inicio de sesión
Cuando seleccionas "Continuar con Google" o "Iniciar sesión con Google", solicitamos exclusivamente los permisos mínimos de identidad básica (*scopes* `openid`, `email`, `profile`):
- Tu dirección de correo electrónico validada por Google.
- Tu nombre de perfil registrado en Google.
- El identificador numérico único de usuario emitido por Google (`sub`).
- Tu avatar de perfil público de Google (opcional).

### Para qué utilizamos estos datos
- Verificar de manera inmediata y confiable que eres el legítimo titular de la dirección de correo proporcionada.
- Crear o enlazar de forma transparente tu Cuenta SARA central, permitiéndote acceder sin necesidad de recordar una contraseña adicional.

### Límites estrictos
- **No solicitamos ni tenemos acceso a tu bandeja de entrada personal de Gmail, archivos de Google Drive, contactos, calendarios ni ningún otro servicio privado de tu cuenta Google.**
- No compartimos tus credenciales de SARA ID con Google.
- Google no recibe información sobre tus actividades académicas, tareas, notas o eventos dentro de las aplicaciones del ecosistema SARA.

---

## 04. Cómo enviamos correos (ICI Identity Mail Backend)

Para garantizar la seguridad de tu cuenta, SARA ID requiere enviarte mensajes de correo electrónico transaccionales en las siguientes situaciones:
- Confirmación y verificación de la dirección de correo registrada.
- Enlaces de un solo uso para la recuperación o restablecimiento de contraseña.
- Notificaciones de seguridad ante inicios de sesión sospechosos o cambios de credenciales.

### Infraestructura operativa y buzón autorizado
Estos correos se despachan de forma automatizada mediante una integración de servidor con la **API de Gmail (Google Workspace)**, conectada de manera exclusiva al buzón operativo oficial de ICI Laboratories: **`icilaboratories@gmail.com`**.

> **Identificación técnica en Google:**  
> En las pantallas de autorización interna de Google Cloud Platform y registros de auditoría del servidor, esta integración técnica se denomina **“ICI Identity Mail Backend”** (asociada al proyecto `ici-identity-mail` y al permiso operativo `gmail.send`).

### Lo que esto significa para ti como usuario
- **Tú no autorizas tu correo personal:** El permiso de envío pertenece únicamente al servidor de ICI Laboratories sobre su propio buzón de correo. Los usuarios que inician sesión con su Cuenta SARA **no otorgan ningún permiso sobre su propio Gmail ni permiten que SARA ID lea, modifique o envíe correos desde sus buzones personales**.
- No enviamos boletines comerciales, promociones ni publicidad no solicitada.

---

## 05. Qué reciben las aplicaciones conectadas

Tu Cuenta SARA te permite identificarte en distintas aplicaciones del laboratorio, tales como:
- **SARA (Plataforma educativa):** Entorno web y móvil de gestión académica y estudio.
- **SARA Eventos:** Plataforma de conferencias, congresos y semanas académicas (ej. TecnoFIME).
- **Otras herramientas institucionales autorizadas.**

### Datos autorizados y necesarios
Al ingresar a una aplicación conectada mediante SARA ID, la aplicación recibe únicamente el paquete de datos imprescindible para reconocer tu identidad:
- Tu identificador único universal (UUID).
- Tu nombre visible.
- Tu dirección de correo electrónico confirmada.
- Tu identificador de rol institucional básico si aplica (estudiante, docente, organizador).

### Distinción fundamental: Autenticación vs. Permisos de la aplicación
SARA ID es responsable de la **autenticación** (certificar quién eres). SARA ID **no administra ni determina los permisos internos de cada aplicación**. Por ejemplo:
- Qué cursos o materias tienes asignados dentro de la plataforma educativa SARA es determinado por los docentes y coordinadores de esa plataforma.
- En qué talleres estás inscrito o qué constancias te corresponden en SARA Eventos es determinado por el comité organizador de dicho evento.
- Cada aplicación almacena y procesa sus propios registros funcionales conforme a su propia política de privacidad.

---

## 06. Cómo retirar el acceso de una aplicación

Puedes solicitar en cualquier momento la desconexión de una aplicación o la terminación de sesiones activas:
- Desde el portal de administración de tu cuenta en [https://auth.ici-labs.com](https://auth.ici-labs.com).
- Escribiendo al equipo de privacidad en [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com) para revocar tokens de acceso asociados.

### Efecto real y sus límites técnicos
- **Efecto de la revocación:** Al desvincular una aplicación o cerrar su sesión, SARA ID invalida los tokens de autenticación activos. La aplicación no podrá renovar tu sesión ni volver a identificarte hasta que inicies sesión nuevamente de manera explícita.
- **Límites:** La revocación de acceso en SARA ID impide nuevos inicios de sesión, pero **no elimina automáticamente los registros históricos, tareas, constancias o datos que ya hubieran sido procesados y guardados previamente dentro de la base de datos de esa aplicación**. Para ejercer la supresión de datos locales en una aplicación específica, debes dirigir tu solicitud según la política de ese servicio.

---

## 07. Cuánto conservamos los datos

Aplicamos criterios comprobables y proporcionales de retención de datos en nuestros servidores:

| Categoría de datos | Criterio de conservación | Justificación |
|---|---|---|
| **Datos de perfil y Cuenta SARA** | Mientras la cuenta permanezca activa. | Mantener la disponibilidad del acceso unificado. |
| **Tokens de sesión cerrados** | Depuración automática tras expiración o cierre. | Higiene criptográfica y liberación de memoria. |
| **Registros de seguridad y auditoría** | Entre 30 y 90 días naturales en rotación continua. | Detección de incidentes, prevención de intrusiones y trazabilidad de seguridad. |
| **Copias de seguridad del sistema** | Rotación periódica cifrada con sobreescritura sistemática. | Recuperación ante fallos de hardware y desastres operativos. |

No conservamos datos personales por tiempo indefinido una vez concluida su finalidad técnica o solicitada su baja definitiva.

---

## 08. Cómo solicitar acceso, corrección o eliminación

Garantizamos el ejercicio efectivo y transparente de tus derechos de acceso, rectificación, cancelación y oposición (derechos ARCO):

### 1. Acceso y Rectificación directa
Puedes consultar tus datos y actualizar información básica de tu perfil ingresando al portal de SARA ID en [https://auth.ici-labs.com](https://auth.ici-labs.com).

### 2. Procedimiento formal para solicitudes de privacidad
Si deseas ejercer una solicitud formal de acceso detallado, corrección de correo institucional o eliminación de tu Cuenta SARA:

1. Envía un correo electrónico a **[icilaboratories@gmail.com](mailto:icilaboratories@gmail.com)**.
2. En el asunto, especifica: **"Solicitud de Privacidad - SARA ID"**.
3. En el cuerpo del mensaje, proporciona:
   - Nombre completo.
   - Correo electrónico registrado en la Cuenta SARA.
   - Descripción clara y específica de tu petición (acceso, corrección de datos o eliminación de cuenta).
4. Nuestro equipo verificará tu titularidad mediante un mecanismo seguro de comprobación al correo registrado.
5. **Plazo de respuesta:** Toda solicitud será atendida y procesada en un plazo máximo de **15 días hábiles**.

---

## 09. Qué ocurre al eliminar la Cuenta SARA

<div id="eliminacion-de-cuenta" class="compliance-card">

### Consecuencias de la eliminación central de Cuenta SARA

Solicitar la eliminación definitiva de tu Cuenta SARA conlleva la supresión irreversible de tu identidad digital en SARA ID:

#### Lo que se elimina de inmediato e irreversiblemente en SARA ID:
- Tu perfil de usuario, UUID, nombre y dirección de correo registrada.
- Tus credenciales criptográficas de inicio de sesión y claves de acceso.
- Todas las sesiones activas y autorizaciones de conexión en todas las plataformas.

#### Consecuencia directa en el acceso:
- **Perderás de forma permanente el acceso unificado a todas las aplicaciones conectadas del laboratorio** que dependan de SARA ID para autenticarte.

#### Diferenciación con datos conservados por servicios conectados:
- La supresión de la Cuenta SARA central no implica la destrucción automática de documentos o registros históricos que las aplicaciones conectadas (como la plataforma educativa SARA o SARA Eventos) estén obligadas a conservar por mandato legal, normativas universitarias o reglamentos académicos oficiales (tales como actas de evaluación escolar, expedientes de calificaciones o constancias con valor curricular previamente emitidas). Dichos registros se regirán por las disposiciones normativas de la facultad o institución correspondiente.

</div>

---

## 10. Cambios y contacto

Esta Política de Privacidad podrá actualizarse para reflejar mejoras funcionales, despliegue de nuevos servicios o modificaciones en las regulaciones de protección de datos.

Cualquier cambio sustancial será publicado oportunamente en este portal, indicando la versión revisada al calce. En caso de cambios críticos que afecten los derechos sobre tu cuenta, te notificaremos mediante un aviso en el portal o a través de tu correo registrado.

### Canales oficiales de contacto
Para resolver cualquier duda sobre esta política o el tratamiento de tus datos personales:

- **Operador:** ICI Laboratories (Club educativo independiente)
- **Asesoramiento académico:** Dr. Walter Alexander Mata López (Director FIME)
- **Atención de Privacidad y Derechos ARCO:** [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com)
- **Centro de Privacidad:** [https://privacy.ici-labs.com](https://privacy.ici-labs.com)
