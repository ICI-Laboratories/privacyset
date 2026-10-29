# Revisión de privacidad y preparación Google — 28 de octubre de 2026

## Resultado

Las páginas eran públicas y navegables, pero NO estaban listas para presentarse como avisos integrales terminados ni como aprobación de Google. Se corrigió contenido y se conservaron las rutas públicas. La revisión no equivale a dictamen jurídico ni a auditoría completa de seguridad.

El operador confirmó que el club decide y opera por su cuenta y autorizó identificar a **Pedro Antonio Ibarra Facio** como responsable. Tras la primera revisión, autorizó expresamente publicar el domicilio de su último mensaje. Ese dato sustituye cualquier dirección anterior y se mantiene en una única fuente de contenido: `src/data/controller.ts` del repositorio privacyset. No se copia el domicilio en este informe. La publicación discreta en los avisos no implica confidencialidad.

## Google: observado y pendiente

- Proyecto `ici-identity-mail`, cuenta del laboratorio: el Centro de verificación indica que no requiere verificación porque sigue en estado **Prueba**. Eso NO significa aprobación de producción.
- Observado en Información de marca: nombre público **ICI Identity Mail**, soporte del laboratorio, dominio autorizado **ici-labs.com**, pero los tres campos de homepage, política y términos están vacíos. Estar en dominios autorizados no acredita por sí solo propiedad en Search Console. Completar esos campos y verificar propiedad con Owner/Editor.
- Homepage prevista: `https://auth.ici-labs.com/`; política canónica: `https://privacy.ici-labs.com/sara-id/`; términos: `https://auth.ici-labs.com/terms`.
- `gmail.send` es sensible, no restringido. La revisión de marca no sustituye a la revisión del uso del scope. Preparar justificación y video si los solicita Google. No atribuir automáticamente a este scope una auditoría CASA.
- Completar la revisión aplicable y el paso a producción; renovar conexión del remitente después. No se cambiaron scopes, credenciales, estado de publicación ni se envió una solicitud de revisión durante este trabajo.
- La condición de uso interno de Google Workspace no se deduce de ser club escolar; una cuenta Gmail personal no convierte el proyecto en aplicación interna de una organización Workspace.

## Correcciones realizadas

- Aviso canónico de SARA ID en ES/EN: cuenta, perfil educativo y dirección realmente soportados, membresías y permisos, cookies, proveedor Google, Cloudflare, Gmail y uso limitado de datos Google.
- Se distingue Google Sign-In del envío desde el buzón operativo; se informa que Google procesa destinatario y contenido del mensaje.
- Se corrigen afirmaciones no acreditadas sobre purgas, cifrado total, alertas de login, avatar Google, revocación y eliminación inmediata.
- Se retiran deslindes totales de universidades y menciones del asesor como si acreditaran responsabilidad o respaldo institucional.
- Responsable identificado por nombre; domicilio publicado posteriormente por autorización expresa, en el bloque final de los avisos completos.
- Procedimiento de privacidad ES/EN: ARCO, limitación, revocación, acreditación proporcional, plazos legales 20/15 días hábiles y posibles ampliaciones justificadas. El equipo debe operar efectivamente este procedimiento.
- SARA y Eventos dejan de presumir excepciones universitarias, expedientes oficiales, conservación permanente y borrado automático no demostrados. Retención/proveedores de IA continúan pendientes de definir y verificar.
- El portal de acceso enlaza directamente al aviso canónico; `/privacy` redirige con 308. Información antes de proporcionar datos y términos sin atribuir automáticamente toda actividad al titular.
- Se retira la solicitud externa de Google Fonts del centro de privacidad; fuentes alternativas del sistema. Se mantienen las preferencias locales de tema.
- Se excluye el HTML público de la ofuscación de correo de Cloudflare con su mecanismo `email_off`: el contacto y los enlaces `mailto:` quedan legibles sin depender de JavaScript. Se comprobó el resultado público.

## Bloqueos pendientes antes de ampliar el servicio

1. **Responsable/domicilio:** domicilio autorizado y código postal confirmado incorporados a los avisos completos. Completar la presentación del domicilio en el aviso simplificado al recabar datos. No considerar cerrado este último punto por añadirlo únicamente al aviso integral.
2. **Operación ARCO:** designar quién atiende, registrar fecha de recepción, verificación, respuesta, ejecución y evidencia; canal proporcional para documentos de identidad cuando sea necesario, sin pedirlos indiscriminadamente por correo.
3. **Retención y eliminación:** inventario y calendario por categoría; implementar borrado/bloqueo, respaldo y restauración coherentes. No hay evidencia de borrado general de cuentas ni rotación de auditoría a 30–90 días.
4. **Minimización y aplicaciones:** la introspección actual puede exponer perfil amplio, incluidos campos de domicilio; diseñar proyección por cliente/finalidad y consentimiento aplicable antes de abrir a aplicaciones de alumnos. No cambiar silenciosamente el contrato de clientes existentes. Considerar dejar de recabar domicilio de usuarios si no existe una finalidad necesaria acreditada.
5. **Universidad:** si en el futuro opera por encargo, documentar responsables/encargados, instrucciones, seguridad, incidentes, subcontratación y devolución/borrado. Un aviso del club no determina obligaciones de una universidad pública ni sustituye sus acuerdos.
6. **Menores:** definir público y mecanismo de representación/autorización aplicable, sin asumir que autorización docente siempre basta ni importar un umbral de edad extranjero.
7. **IA/proveedores:** verificar proveedores y condiciones reales, transferencias internacionales, conservación, subencargados y uso para entrenamiento; no prometer acuerdos o exclusiones sin evidencia.
8. **Autenticación:** la revisión de código encontró administración de TOTP/passkeys pero no su exigencia integrada en los flujos de login inspeccionados; verificar por separado antes de anunciar protección MFA completa. No fue prueba activa de explotación ni auditoría exhaustiva.
9. **Avisos del catálogo:** confirmar por versión las afirmaciones de operación local/telemetría de SARA MD e InSituLab; esta entrega no audita esas aplicaciones.

## Recomendación jurídica práctica

Mantener el centro compartido de privacidad y SARA ID como autoridad de cuenta. Formalizar las decisiones entre mantenedores y consultar a un profesional mexicano en privacidad sobre responsable, domicilio de atención, transferencias y acuerdos institucionales antes de escalar. No hace falta afirmar que el club es una empresa ni que está exento por ser educativo. La constitución de una persona moral es una decisión distinta, no una condición que Google imponga por defecto a toda aplicación.

### Corrección editorial y opción de domicilio FIME

Por indicación del operador, se retiraron de las páginas públicas ES/EN las notas de auditoría, pendientes, instrucciones de revisión y comentarios sobre falta de domicilio o certificación Google. Quedan en este informe y en el README. Se conservaron datos compartidos, alcance de las integraciones, límites reales de eliminación y ejercicio de derechos. Los cambios son editoriales; no resuelven por sí mismos los pendientes legales ni técnicos.

La LFPDPPP, artículo 15.I, exige identidad y domicilio del responsable; no establece que se publique necesariamente la vivienda. El lineamiento vigésimo primero del aviso de privacidad precisa un domicilio completo para oír y recibir notificaciones. La Secretaría de Economía continúa incluyendo estos lineamientos en su marco normativo de abril de 2026.

El domicilio de FIME podría evaluarse como domicilio de notificaciones únicamente si la institución autoriza ese uso y realmente recibe y canaliza comunicaciones dirigidas a Pedro Antonio Ibarra Facio / ICI Laboratories. No se verificaron las facultades de una autoridad concreta ni las normas internas de la facultad. La participación de un asesor o el carácter estudiantil del club no se toman como autorización.

Recomendación operativa: obtener autorización documentada de quien tenga facultades, precisando oficina y dirección completas, responsable de recepción y remisión, atención durante vacaciones y alcance del uso. La recomendación de documentarlo no se presenta como una formalidad escrita impuesta expresamente por esos artículos. La autorización de domicilio no debe describirse como encargo, respaldo institucional ni sustitución del responsable del servicio. No se publicó domicilio de FIME ni domicilio particular.

Pendientes internos que se mantienen: completar el aviso simplificado; identificación y condiciones de proveedores de IA; calendario de retención por categoría y respaldos; acuerdos e información por evento; minimización y selección de datos por cliente; evidencia de verificación de correos heredados. La limpieza editorial no cambia estas obligaciones de implementación.

Validación de esta corrección: build Astro de 15 páginas; enlaces internos resueltos; comprobación HTTP de las 14 rutas de contenido en ES/EN, sin las notas internas retiradas y conservando la identificación del responsable. Publicado en `/home/peter/privacyset-site/` sin eliminar rutas ajenas al build. Respaldo previo: `/home/peter/privacy-review-backup-20261028/site-before-editorial.tar.gz`. Evidencia visual local: `docs/evidence/privacy-sara-id-editorial-2026-10-28.png`. No se modificó el backend ni se publicaron domicilios.

Fuentes de esta precisión:

- [LFPDPPP vigente, artículos 15–16](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf).
- [Lineamientos del aviso de privacidad, DOF 17-01-2013, vigésimo primero](https://sidof.segob.gob.mx/notas/docFuente/5284966).
- [Marco normativo de Secretaría de Economía, abril de 2026](https://www.gob.mx/se/acciones-y-programas/lineamientos-420952).

### Publicación posterior del domicilio autorizado

El operador eligió publicar su propio domicilio y pidió una presentación discreta. Se incorpora como texto legible al final del aviso integral, bajo «Responsable y contacto», accesible desde los índices móvil y de escritorio. El mismo bloque se incluye al final del procedimiento ARCO en ES/EN. No se coloca en la portada, tarjetas, metadatos SEO ni pie general. El texto permanece disponible sin JavaScript, sin acordeón cerrado, ocultación CSS ni barreras de autenticación. Fuente única: `src/data/controller.ts`; componente: `ControllerContact.astro`.

La dirección incluye únicamente los datos del último mensaje autorizado y el código postal confirmado por el operador. El domicilio previo de la conversación no se publica. El atributo `data-nosnippet` se aplica al bloque de dirección para excluirlo de fragmentos de Google; no impide indexación, lectura, copia ni extracción por terceros. [Documentación de Google sobre fragmentos](https://developers.google.com/search/docs/appearance/snippet).

La evaluación anterior de FIME queda como antecedente; no se ejecutó ni se atribuye respaldo a la facultad. Esta publicación tampoco completa por sí sola el aviso simplificado del portal, cuya presentación del domicilio debe resolverse sin ocultar información requerida al recabar datos.

Validación y publicación: build de 15 páginas y `git diff --check` correctos; verificadas por HTTP las 12 páginas de aviso/procedimiento con un bloque de domicilio y las dos portadas sin él. Dirección ausente de metadatos SEO; ancla del índice y legibilidad comprobadas en Chrome. Publicado en `/home/peter/privacyset-site/` preservando rutas ajenas. Respaldo previo: `/home/peter/privacy-review-backup-20261028/site-before-controller-contact.tar.gz`. Captura de comprobación en archivo temporal local, fuera del repositorio. No se modificó el backend ni se transfirió el dominio.

## Fuentes oficiales consultadas

- LFPDPPP vigente (ley de 20-03-2025, reforma 14-11-2025): https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf — arts.15–16 aviso; 24–25 cancelación; 27–34 ARCO; 35–36 transferencias; 18–20 seguridad.
- Régimen de sujetos obligados y encargados: https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf — revisar si una institución pública determina el tratamiento.
- Marca Google: https://developers.google.com/identity/protocols/oauth2/production-readiness/brand-verification
- Scopes sensibles: https://developers.google.com/identity/protocols/oauth2/production-readiness/sensitive-scope-verification
- Scopes Gmail: https://developers.google.com/workspace/gmail/api/auth/scopes
- Política Google API: https://developers.google.com/terms/api-services-user-data-policy
- Política Workspace: https://developers.google.com/workspace/workspace-api-user-data-developer-policy

## Validación y despliegue

- Build Astro: 15 páginas, rutas internas comprobadas sin destinos inexistentes.
- Build frontend Vinext y TypeScript correctos; 143 pruebas frontend aprobadas.
- Publicación estática en `cite-server:/home/peter/privacyset-site/`; se conservaron rutas ajenas al build, incluido `agentagenda`.
- Frontend desplegado con imagen `ici-identity-portal:privacy-review-20261028` (`c314696812aa`), también etiquetada con referencia activa. Sólo se recreó frontend; no se aplicaron migraciones ni cambios de backend.
- HTTP público comprobado en raíz, SARA ID ES/EN y solicitudes ES/EN, con responsable presente y sin antiguo deslinde. Redirección de privacidad y enlaces del portal comprobados.
- Comprobación final: Chrome y curl acceden al aviso y al procedimiento, con contacto directo. Solicitudes con agente `Python-urllib/3.12` reciben 403; con curl normal y cadena `Googlebot`, 200. Cambiar esa cadena no reproduce un rastreador Google verificado ni acredita aprobación; comprobar acceso del verificador real al presentar la solicitud, sin desactivar protecciones indiscriminadamente.
- Backup privado: `/home/peter/privacy-review-backup-20261028/` (fuente anterior, sitio anterior). Imagen previa: `ici-identity-portal:before-privacy-review-20261028`.
- Rollback: restaurar contenido desde `site-before` preservando rutas ajenas; para portal, reetiquetar imagen previa como referencia activa y recrear sólo frontend con `--no-deps --no-build`.
- Fuentes locales modificadas sin commit; se sincronizaron las fuentes de frontend/docs con el servidor. El portal estático del servidor contiene el build, no un checkout del repositorio privacyset.

## Dominio, accesos y centralización

Revisión de sólo lectura en el perfil de Chrome indicado por el operador. No se modificaron DNS, permisos, propietario, registrante, pagos ni estado de transferencia.

| Capa | Estado observado | Recomendación |
| --- | --- | --- |
| Registro y renovación | Squarespace; Pedro Antonio Ibarra Facio figura como único propietario en Permisos | Delegar acceso al laboratorio mediante una cuenta propia antes de decidir una transferencia |
| DNS autoritativo | Cloudflare (`hazel.ns.cloudflare.com` y `milan.ns.cloudflare.com`) | Mantener la zona existente |
| Publicación de servicios | Nueve túneles en la cuenta Cloudflare actual; registros de auth, privacy, fime y demás servicios presentes | Conservar cuenta y túneles; asignar miembros y alcance necesario |
| Proyecto OAuth de correo | Proyecto `ici-identity-mail`, cuenta del laboratorio, estado Prueba | Verificar propiedad del dominio con una cuenta Owner/Editor del proyecto y completar marca |

Squarespace muestra renovación automática activa, privacidad WHOIS y bloqueo del dominio activos. En la revisión mostraba vencimiento el 7 de enero de 2027 y cobro previsto de MXN 360 el 23 de diciembre de 2026. Son datos observados, no una garantía de precio futuro. La pantalla DNS advierte que no hay MX para correo `@ici-labs.com`; esto no impide enviar desde el buzón Gmail actual. Contratar correo con dominio propio sería una decisión adicional.

Centralizar significa documentar responsables, renovación, recuperación y accesos, no compartir contraseñas ni trasladar necesariamente la zona. Proponer `icilaboratories@gmail.com` como administrador no crea una persona moral ni transfiere automáticamente la titularidad legal. Mantener accesos nominales y MFA para los responsables. Reservar administración completa de Cloudflare a quien deba controlar también miembros y facturación.

Transferir el registro a Cloudflare es opcional y podría consolidar facturación; requiere revisar elegibilidad e importe concreto. No mover la zona a otra cuenta sólo para cambiar quién la administra. Si se decide transferir pronto, revisar antes los bloqueos de 60 días aplicables: cambios de contacto del registrante pueden afectar la elegibilidad. Una transferencia de propietario dentro de Squarespace es otra operación y tiene efectos propios sobre permisos y pago.

Orden sugerido: verificar dominio para Google; acordar y delegar accesos; guardar inventario y respaldo de zona/túneles; comparar renovación y precio de transferencia; ejecutar sólo la operación elegida y verificar continuidad de los servicios. Google no exige trasladar el registrador ni que éste use el mismo correo que el proyecto OAuth.

Fuentes oficiales:

- [Permisos de dominios Squarespace](https://support.squarespace.com/hc/en-us/articles/25974568684557-Managing-domain-permissions).
- [Cambio de propietario Squarespace](https://support.squarespace.com/hc/en-us/articles/31344259220877-Changing-domain-ownership).
- [Bloqueos de dominio Squarespace](https://support.squarespace.com/hc/en-us/articles/360034059332-Domain-locks).
- [Transferencia a Cloudflare Registrar](https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/).
- [Administración de miembros Cloudflare](https://developers.cloudflare.com/fundamentals/manage-members/manage/).
- [Verificación de propiedad Search Console](https://support.google.com/webmasters/answer/9008080?hl=en).
- [Ofuscación de correo Cloudflare](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/).
