---
title: "SARA ID — SARA Account"
shortDescription: "Core identity service, cryptographically protected credentials, unified sessions, and secure access across ICI Laboratories applications."
category: "Identity & Authentication"
lastUpdated: "28 October 2026"
platforms: ["Web", "Android", "iOS", "API"]
developer: "ICI Laboratories"
contactEmail: "icilaboratories@gmail.com"
order: 1
isCoreAccount: true
icon: "identity"
summary:
  whatIs: "SARA ID is the central identity service operated by ICI Laboratories to create, authenticate, and manage your SARA Account across connected applications."
  dataUsed: "Unique user identifier (UUID), full name, primary email address, cryptographically protected credentials, active sessions, and security logs."
  purposes: "Authenticate users, maintain secure sessions, verify email ownership, facilitate access recovery, and protect accounts against unauthorized intrusion."
  contact: "icilaboratories@gmail.com"
accountDeletion:
  supported: true
  email: "icilaboratories@gmail.com"
  subject: "SARA Account Deletion Request - SARA ID"
  responsible: "Pedro Antonio Ibarra Facio"
offlineOnly: false
---

## 01. Controller and scope

**Pedro Antonio Ibarra Facio** is the data controller for this service, operated under the name **ICI Laboratories**, an independent educational club. Contact: [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com).

SARA stands for **Sistema de Aprendizaje y Retroalimentación Asistida**. SARA ID manages the SARA Account and access to connected applications in the ecosystem.

## 02. Data and purposes

We use account data to authenticate users, maintain shared profiles, manage sessions and access, verify addresses, handle recovery and requests, and record security events:

- **Account:** UUID, name, primary and additional registered email addresses, account status and address verification.
- **Profile:** display and full names, education and organizational information you provide, education level, institution, faculty, program, campus and period. The current profile also supports street address, municipality, state, postal code and country. These fields are not needed to send verification emails; avoid completing them without a concrete purpose explained by the service you use.
- **Access:** memberships, roles, permissions and enabled modules according to recorded assignments.
- **Credentials:** password hash, external provider identifiers and data needed for configured authentication features. Local passwords are not stored as plaintext. Passkey features store credential data and public keys, not fingerprints or facial images.
- **Sessions and security:** session identifiers and expiry, activity timestamps, audit records and, depending on the request, IP address and browser or device information.

Registration is not intended to collect sensitive data such as health, religion or biometrics. Do not include such data in names, profile fields or support requests. Content supplied to other applications is covered by their respective notices.

We do not use these data for selling databases, personalized advertising or commercial profiling. You may request limits on use or disclosure, object to processing or withdraw consent using the [privacy procedure](/en/requests/). Some requests may affect features that depend on those data; we will explain their scope.

## 03. Google sign-in

When you choose Google sign-in, SARA ID receives basic identity data: Google identifier, name, email and verification information issued by that provider. These are used to authenticate and manage the linked account. This feature does not request access to Gmail messages, Drive, contacts or calendars. It does not send your local SARA password to Google.

Linked identity data are stored in SARA ID's database. You can review available connection and unlinking options in your account. Unlinking a provider does not automatically delete the SARA Account or historical records. You may also manage the permission in your Google account. Do not unlink your only sign-in method without an alternative.

## 04. Transactional email — ICI Identity Mail / ICI Identity Mail Backend

The Google application is named **ICI Identity Mail**, and its technical client is **ICI Identity Mail Backend**. This integration uses Gmail API with **gmail.send** to send email verifications, recovery links and password-change confirmations from **icilaboratories@gmail.com**. The mailbox administrator authorizes this connection; recipients do not grant access to their own mailboxes.

Google processes the sender, recipient and message content to deliver email. This permission does not let this integration read the recipient's or operational mailbox's inbox. This connection is not used for advertising.

The mailbox refresh credential is stored encrypted on the server. Pending messages are encrypted in a queue; their content is removed from that queue after completion, cancellation or expiry. Links expire and can only be completed once. Queue cleanup does not delete delivered copies or copies retained by providers or recipients.

An administrator can disconnect the sender in the portal, removing the refresh credential from the active connection. They can also revoke permission in the Google account. Disconnecting stops sending from that connection; it does not delete account or audit records.

Use and transfer of information received from Google APIs will comply with the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including **Limited Use** requirements, and the [Google Workspace API user data policy](https://developers.google.com/workspace/workspace-api-user-data-developer-policy). We do not use this information for advertising or training general-purpose AI models.

## 05. Connected applications and providers

Registered applications receive data according to their integration with SARA ID. In addition to UUID, name and email, they may receive education profiles, completed address fields, memberships, roles, permissions and enabled modules. Some integrations share these data as a profile set, without individual field selection at sign-in.

Sign-in identifies the account; SARA ID's recorded permissions and each application's rules determine access. Applications retain functional data under their own notices. Check who operates an application before accessing it; holding an account is not consent to every new purpose.

The service uses its own hosting infrastructure, Cloudflare for connection delivery and protection, and Google for the features described. Providers process technical or message information needed to provide their services and may operate outside Mexico. An institution or independently operated application must identify the purpose and conditions of data exchange; transfers requiring consent must be disclosed and authorized before taking place.

## 06. Sessions and browser storage

The portal uses cookies to maintain sessions and complete authorization attempts, along with local preferences such as visual theme. These functions are separate from advertising. Fetching externally hosted profile images may disclose technical connection information to the image host.

You can close sessions using the available account controls. This does not delete documents or data retained by other applications, nor permanently prevent future sign-in. Propagation depends on each application correctly validating the central session.

## 07. Retention and security

We retain profiles as needed to provide the service and handle requests; cancellation follows the procedure below. Sessions expire or are revoked, but this does not immediately erase their records.

Technical records of completed deliveries and old verifications are cleaned after 30 days; old request-limit counters are cleaned after two days. These periods apply to the email service and do not delete the account, its security records or backups. To request cancellation of your data, use the [privacy procedure](/en/requests/).

Controls include access restrictions, HTTPS, password hashing and encryption of mail credentials and queue payloads. This does not mean all data or backups are encrypted at rest or that all security risks are eliminated. Report incidents to the privacy contact without attaching passwords or recovery links.

## 08. Rights, requests and minors

You may request access, rectification, cancellation or opposition (ARCO), limits on use or disclosure, and withdrawal of consent through [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com). The [full procedure](/en/requests/) explains identity verification and statutory response and implementation periods.

The service must not be used by a third party to enroll minors without verifying the applicable representation, information and authorization requirements. A teacher's authorization does not automatically replace that of the legally appropriate representative.

## 09. Deleting a SARA Account

<div id="eliminacion-de-cuenta"></div>

Request deletion through the privacy channel and specify whether it concerns the central SARA Account or data in a particular application. We will verify the request and explain its scope, outcome and the grounds for any applicable blocking or retention.

Deleting the central account affects access to connected applications. Assignments, files and registrations stored by those applications are handled under their own privacy notices. Specify the services and data you wish to cancel so we can explain the scope of your request.

## 10. Changes and contact

Updates will be published at this URL with a revision date. New purposes or processing requiring consent are not authorized merely by changing this text. Contact: [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com).
