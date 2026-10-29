---
title: "SARA ID — Cuenta SARA"
shortDescription: "Servicio central de identidad, credenciales protegidas, sesiones unificadas y acceso seguro a las aplicaciones de ICI Laboratories."
category: "Identidad y Autenticación"
lastUpdated: "28 de octubre de 2026"
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
  responsible: "Pedro Antonio Ibarra Facio"
offlineOnly: false
---

## 01. Responsable y alcance

**Pedro Antonio Ibarra Facio** es el responsable del tratamiento de datos del servicio operado bajo el nombre **ICI Laboratories**, un club educativo independiente. Contacto: [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com).

SARA significa **Sistema de Aprendizaje y Retroalimentación Asistida**. SARA ID administra la Cuenta SARA y el acceso a las aplicaciones conectadas del ecosistema.

## 02. Datos tratados y finalidades

Utilizamos los datos de cuenta para autenticarte, mantener el perfil compartido, gestionar sesiones y accesos, verificar correos, atender recuperaciones y solicitudes, y registrar eventos de seguridad:

- **Cuenta:** identificador UUID, nombre, correo principal y correos adicionales registrados, estado de la cuenta y verificación de direcciones.
- **Perfil:** nombres de presentación, información educativa y de organización que completes, nivel educativo, institución, facultad, programa, campus y periodo. El perfil actual también admite dirección, municipio, entidad, código postal y país. Estos últimos no son necesarios para enviar correos de verificación; evita completarlos si no hay una finalidad concreta explicada por el servicio que utilizas.
- **Accesos:** membresías, roles, permisos y módulos habilitados, conforme a las asignaciones registradas.
- **Credenciales:** hash de contraseña, identificadores de proveedores externos y datos necesarios para funciones de autenticación configuradas. No guardamos la contraseña local en texto plano. Las funciones de llaves de paso almacenan datos de credencial y claves públicas, no huellas ni imágenes faciales.
- **Sesiones y seguridad:** identificadores y caducidad de sesión, fechas de actividad, registros de auditoría y, según la solicitud, dirección IP e información de navegador o dispositivo.

El registro no está destinado a recopilar datos sensibles como salud, religión o biometría. No incluyas esos datos en nombres, campos de perfil o solicitudes de soporte. Los contenidos que entregues a otras aplicaciones tienen su propio aviso.

No destinamos estos datos a venta de bases, publicidad personalizada ni elaboración de perfiles comerciales. Puedes solicitar limitación del uso o divulgación, oposición o revocación del consentimiento mediante el [procedimiento de privacidad](/solicitudes/). Algunas solicitudes pueden afectar funciones que dependen de esos datos; te explicaremos su alcance.

## 03. Inicio de sesión con Google

Cuando eliges acceder con Google, SARA ID recibe datos básicos de identidad: identificador de Google, nombre, correo y datos de verificación emitidos por ese proveedor. Los usamos para autenticar y gestionar la cuenta vinculada. Esta función no solicita lectura de Gmail, Drive, contactos ni calendarios. No envía a Google tu contraseña local de SARA.

Los datos de identidad vinculada se guardan en la base de SARA ID. Puedes consultar las conexiones y opciones de desvinculación disponibles en tu cuenta. Desvincular un proveedor no borra automáticamente la Cuenta SARA ni sus datos históricos. También puedes gestionar el permiso desde tu cuenta Google. No desvincules tu único método de acceso sin disponer de una alternativa.

## 04. Correo transaccional — ICI Identity Mail / ICI Identity Mail Backend

La aplicación de Google se presenta como **ICI Identity Mail** y su cliente técnico se denomina **ICI Identity Mail Backend**. Esta integración utiliza Gmail API con el permiso **gmail.send** para enviar verificaciones de correo, enlaces de recuperación y confirmaciones de cambio de contraseña desde **icilaboratories@gmail.com**. El administrador del buzón autoriza esta conexión; los usuarios que reciben mensajes no conceden acceso a sus propios buzones.

Google procesa el remitente, destinatario y contenido del mensaje para enviarlo. El permiso no permite a esta integración leer la bandeja de entrada del destinatario ni del buzón operativo. Esta conexión no se utiliza para publicidad.

La credencial de renovación del buzón se conserva cifrada en el servidor. Los mensajes pendientes se guardan cifrados en una cola; su contenido se elimina de la cola al completar, cancelar o caducar el envío. Los enlaces tienen caducidad y sólo pueden completarse una vez. Esta limpieza no elimina copias ya entregadas ni las que conserve el proveedor o el destinatario.

El administrador puede desconectar el remitente desde el portal, lo que elimina la credencial de renovación almacenada en la conexión activa. También puede retirar el permiso desde la cuenta Google. Desconectar el buzón detiene el envío desde esa conexión; no elimina los registros de cuenta o de auditoría.

El uso y la transferencia de información obtenida de las API de Google se ajustarán a la [Política de Datos de Usuario de los Servicios de API de Google](https://developers.google.com/terms/api-services-user-data-policy), incluidos sus requisitos de **Uso Limitado (Limited Use)**, y a la [política de datos de las API de Google Workspace](https://developers.google.com/workspace/workspace-api-user-data-developer-policy). No utilizamos esa información para publicidad ni para entrenar modelos generales de inteligencia artificial.

## 05. Aplicaciones conectadas y proveedores

Las aplicaciones registradas reciben datos según su integración con SARA ID. Además de UUID, nombre y correo, pueden recibir perfil educativo, campos de dirección completados, membresías, roles, permisos y módulos habilitados. En algunas integraciones estos datos se comparten como un conjunto de perfil, sin una elección individual de cada campo al iniciar sesión.

El inicio de sesión identifica la cuenta; los permisos registrados en SARA ID y las reglas de cada aplicación determinan los accesos. Las aplicaciones conservan sus datos funcionales conforme a su propio aviso. Revisa quién opera una aplicación antes de acceder; no debe interpretarse la existencia de una cuenta como consentimiento para cualquier finalidad nueva.

El servicio utiliza infraestructura propia de alojamiento, Cloudflare para entrega y protección de conexiones y Google para las funciones descritas. Estos proveedores procesan información técnica o del mensaje necesaria para prestar sus servicios y pueden operar fuera de México. Una institución o aplicación de otro responsable debe identificar su finalidad y las condiciones del intercambio; las transferencias que requieran consentimiento deben informarse y obtenerlo antes de efectuarse.

## 06. Sesiones y almacenamiento en el navegador

El portal utiliza cookies para mantener sesiones y completar intentos de autorización, además de preferencias locales como el tema visual. Estas funciones son distintas de la publicidad. Al solicitar imágenes de perfil alojadas externamente, tu navegador puede comunicar información técnica al servidor que las aloja.

Puedes cerrar sesiones desde las opciones disponibles de la cuenta. El cierre no elimina documentos o datos ya conservados por otras aplicaciones, ni supone por sí solo una prohibición permanente de volver a iniciar sesión. La propagación de un cierre depende de que cada aplicación valide correctamente la sesión central.

## 07. Conservación y seguridad

Conservamos el perfil mientras sea necesario para prestar el servicio y atender solicitudes; la cancelación se tramita conforme al procedimiento indicado abajo. Las sesiones caducan o se revocan, pero eso no equivale a borrar de inmediato sus registros.

Los registros técnicos de envíos completados y verificaciones antiguas se depuran a los 30 días; los contadores antiguos de limitación de solicitudes, a los dos días. Estos plazos corresponden al servicio de correo y no implican la eliminación de la cuenta, sus registros de seguridad o sus copias de respaldo. Para solicitar la cancelación de tus datos, utiliza el [procedimiento de privacidad](/solicitudes/).

Aplicamos controles de acceso, HTTPS, hash de contraseñas y cifrado de credenciales de correo y payloads de la cola. Esto no significa que todos los datos o respaldos estén cifrados en reposo ni elimina todos los riesgos de seguridad. Si detectas un incidente, comunícalo al contacto de privacidad sin adjuntar contraseñas o enlaces de recuperación.

## 08. Derechos, solicitudes y menores

Puedes solicitar acceso, rectificación, cancelación u oposición (ARCO), limitar uso o divulgación y revocar consentimiento mediante [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com). Consulta el [procedimiento completo](/solicitudes/), que explica acreditación de identidad y los plazos legales de respuesta y ejecución.

El servicio no debe usarse para incorporar datos de menores por decisión de un tercero sin verificar la representación, información y autorización que correspondan. Una autorización docente no sustituye automáticamente la de quienes legalmente deban intervenir.

## 09. Eliminación de Cuenta SARA

<div id="eliminacion-de-cuenta"></div>

Solicita la eliminación por el canal de privacidad e indica si pides cancelar la Cuenta SARA o sólo datos de una aplicación. Verificaremos la solicitud y comunicaremos su alcance, procedencia y, en su caso, los motivos de bloqueo o conservación aplicables.

Eliminar la cuenta central afecta el acceso a las aplicaciones conectadas. Las tareas, archivos o inscripciones almacenados por esas aplicaciones requieren atención conforme a su propio aviso de privacidad. Indica en tu solicitud qué servicios y datos deseas cancelar para que podamos orientarte sobre su alcance.

## 10. Cambios y contacto

Publicaremos las actualizaciones en esta misma URL con su fecha de revisión. Los cambios de finalidad o tratamientos que requieran consentimiento no se autorizan sólo por actualizar este texto. Contacto: [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com).
