---
title: "SARA ID — SARA Account"
shortDescription: "Core identity service, cryptographically protected credentials, unified sessions, and secure access across ICI Laboratories applications."
category: "Identity & Authentication"
lastUpdated: "October 2026"
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
  processingDays: 15
  responsible: "ICI Laboratories Privacy & Compliance Team"
offlineOnly: false
---

This Privacy Policy describes how personal data is processed within **SARA ID**, the central identity management service of **ICI Laboratories**, and establishes the terms of use, security, and data governance applicable to your **SARA Account**.

By registering a SARA Account or signing in to any connected application through SARA ID, you acknowledge and agree to the provisions described below.

---

## 01. Who manages your account

Your SARA Account is operated and administered independently by **ICI Laboratories**, a student-led **educational tech club** dedicated to software engineering innovation and applied artificial intelligence.

- **Operating Entity:** ICI Laboratories (Independent educational club).
- **Official Privacy & ARCO Desk:** [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com).
- **Account Management Portal:** [https://auth.ici-labs.com](https://auth.ici-labs.com).

### Institutional Disclaimer (UdeC & FIME)
ICI Laboratories operates with full technological and organizational autonomy. All applications, cloud platforms, source code, user databases, and data processing activities are managed exclusively by the educational club. **ICI Laboratories fully disclaims any institutional, legal, technical, or administrative liability from the University of Colima (UdeC) and the School of Electromechanical Engineering (FIME)** arising from the operation of SARA ID or connected services.

### Academic Advisory & Mentorship
The educational initiatives and engineering standards of ICI Laboratories benefit from the academic guidance and advisory of **Dr. Walter Alexander Mata López**, university research professor and current **Director / Dean of the School of Electromechanical Engineering (FIME)**.

### Relationship between SARA and ICI Laboratories
**ICI Laboratories** is the independent developing club that architects, builds, and maintains the ecosystem. **SARA** (Learning and Academic Performance System) represents the software and educational suite designed by the club. **SARA ID** is the underlying identity provider enabling users to maintain a single secure account across all projects without dispersing passwords.

---

## 02. Information we collect and process

SARA ID collects and processes only the minimum data strictly necessary to authenticate your identity, safeguard your sessions, and maintain industry-standard security protocols:

### Account & profile details
- **Unique User Identifier (UUID):** An immutable, randomly generated universal unique identifier assigned by our backend to associate your records without exposing sensitive identifiers across systems.
- **Display name:** Your given name and surname used to identify you on welcome interfaces and within connected applications.
- **Primary email address:** Used as your canonical sign-in username, communication channel for security notices, and proof of address verification.
- **Profile picture or avatar:** Synchronized voluntarily if you choose to sign in with Google or upload an image directly.

### Cryptographically protected credentials
- When you set a direct password in SARA ID, **it is never stored in plain text**. Passwords are exclusively transformed and secured using modern, salted, one-way cryptographic key derivation algorithms (such as Argon2id or PBKDF2). Technical personnel at ICI Laboratories have neither the mathematical ability nor the operational privilege to view your plaintext password.

### Sessions and security metadata
To detect suspicious activity and allow you to audit your logins, our backend automatically records:
- **Session identifiers:** Cryptographically signed or opaque access tokens with bounded lifetimes.
- **Connection metadata:** Originating IP address, device type, browser client (*User-Agent*), and timestamps marking authentication and last recorded activity.
- **Security audit trails:** Unsuccessful login attempts, password reset requests, and security-critical events, retained to mitigate automated brute-force attacks and unauthorized access attempts.

---

## 03. How Google Sign-In works

SARA ID provides an optional authentication method through **Google Identity** using standard OAuth 2.0 / OpenID Connect protocols.

### Data requested during sign-in
When you select "Continue with Google" or "Sign in with Google", we request only the basic identity scopes (`openid`, `email`, `profile`):
- Your Google-verified email address.
- Your public Google profile name.
- The unique numeric identifier assigned to you by Google (`sub`).
- Your public Google profile photo (optional).

### Why we use this data
- To reliably verify your ownership of the specified email address without requiring manual verification steps.
- To transparently create or link your central SARA Account, allowing you to access tools without remembering an additional password.

### Strict limitations
- **We never request, access, or inspect your personal Gmail inbox, Google Drive files, contacts, calendar entries, or any other private Google service.**
- We never share your SARA ID passwords with Google.
- Google does not receive data regarding your academic coursework, tasks, event attendance, or notes stored within connected applications.

---

## 04. How we send emails (ICI Identity Mail Backend)

To safeguard your account, SARA ID must deliver critical transactional emails under the following circumstances:
- Confirming and verifying your primary email address.
- One-time recovery links for forgotten passwords.
- Real-time alerts regarding unexpected logins or security-critical credential updates.

### Server-side operational mailbox
These automated notifications are dispatched using Google Workspace's official Gmail API, connected exclusively to an official operational mailbox owned and managed by ICI Laboratories: **`icilaboratories@gmail.com`**.

> **Technical identity in Google Cloud:**  
> In Google Cloud Platform administrative consoles, technical audits, and server-side consent screens, this integration is designated as **“ICI Identity Mail Backend”** (associated with project `ici-identity-mail` and the dedicated server permission `gmail.send`).

### What this means for end users
- **You do not grant access to your personal email:** The sending authorization resides strictly on the server side for ICI Laboratories' own sender account. End users signing in with their SARA Account **never grant permission over their personal Gmail accounts, and SARA ID cannot read, access, or send messages from your private inbox**.
- We never send marketing spam, promotional advertisements, or third-party solicitations.

---

## 05. What connected applications receive

Your SARA Account enables single sign-on across authorized applications in our ecosystem, including:
- **SARA (Educational Platform):** Web workspace and mobile apps for coursework and studying.
- **SARA Eventos:** Conference, symposium, and academic schedule management (e.g., *TecnoFIME*).
- **Authorized institutional and research tools.**

### Data shared with connected applications
Upon signing in to an authorized application, SARA ID transmits only the minimum profile packet required:
- Your unique user identifier (UUID).
- Your display name.
- Your verified email address.
- Your general institutional role if applicable (student, teacher, researcher).

### Key distinction: Authentication vs. In-App Permissions
SARA ID is solely responsible for **authentication** (verifying who you are). SARA ID **does not govern or manage your internal permissions within individual applications**. For example:
- Course enrollments, classroom assignments, and academic marks are administered entirely within the SARA Educational Platform.
- Workshop reservations, seating capacities, and attendance certificates are managed by the event organizing committees in SARA Eventos.
- Each application stores and maintains its functional records in accordance with its own specific privacy policy.

---

## 06. How to revoke application access

You may revoke an application's access or terminate active sessions at any time:
- Through your account settings at [https://auth.ici-labs.com](https://auth.ici-labs.com).
- By contacting our privacy desk at [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com).

### Real effects and technical boundaries
- **Effect of revocation:** Terminating a session or revoking an integration immediately invalidates active authentication tokens, preventing the app from establishing new authenticated sessions without explicit re-authorization.
- **Boundaries:** Revoking access centrally does not retroactively erase historical records, completed assignments, or certificates already logged in the application's internal database during prior legitimate use. To request the deletion of historical in-app data, consult the specific policy for that service.

---

## 07. Data retention criteria

We adhere to clear, verifiable retention criteria across our systems:

| Data Category | Retention Criterion | Technical Purpose |
|---|---|---|
| **SARA Account & profile details** | Maintained while your account remains open and active. | Ensuring persistent access to connected applications. |
| **Expired session tokens** | Automatically purged upon expiration or manual logout. | Cryptographic hygiene and resource management. |
| **Security audit logs** | Rolling retention period of 30 to 90 calendar days. | Incident detection, threat prevention, and audit traceability. |
| **System database backups** | Encrypted, periodic rotation with systematic overwriting. | Disaster recovery and hardware failover continuity. |

We do not retain personal identity data indefinitely once its technical necessity has concluded or upon verified account deletion.

---

## 08. Exercising your privacy rights (ARCO)

We guarantee accessible and transparent mechanisms to exercise your rights of Access, Rectification, Cancellation, and Objection:

### 1. Direct profile management
You can review and update basic account details by logging into the SARA ID portal at [https://auth.ici-labs.com](https://auth.ici-labs.com).

### 2. Formal privacy requests
To submit a formal request regarding personal data access, institutional email corrections, or account deletion:

1. Send an email to **[icilaboratories@gmail.com](mailto:icilaboratories@gmail.com)**.
2. Subject line: **"Privacy Request - SARA ID"**.
3. In your message, provide:
   - Full name.
   - Primary email address registered with your SARA Account.
   - Specific details regarding the request (access, correction, or deletion).
4. Our team will verify your identity via a secure confirmation challenge sent to your registered address.
5. **Turnaround time:** All verified requests will be addressed and resolved within **15 business days**.

---

## 09. Deleting your SARA Account

<div id="eliminacion-de-cuenta" class="compliance-card">

### Consequences of central SARA Account deletion

Requesting the permanent deletion of your SARA Account initiates the irreversible removal of your central identity:

#### What is immediately and permanently erased in SARA ID:
- Your user profile, UUID, display name, and registered email address.
- Your cryptographic login credentials and authentication secrets.
- All active sessions and SSO authorizations across all devices.

#### Direct consequence:
- **You will permanently lose unified access to all connected applications** that rely on SARA ID for authentication.

#### Institutional exception:
- Central account deletion does not automatically destroy historical records that educational institutions, faculties, or event organizers are legally or academically required to maintain (such as official grade rosters, examination records, or accredited course certificates issued in SARA or SARA Eventos). Those records remain governed by the applicable university and departmental regulations.

</div>

---

## 10. Modifications and contact

We may update this Privacy Policy periodically to reflect architectural updates or regulatory changes. 

Substantial updates will be published on this portal, indicating the revised version at the bottom. When critical changes affect your account governance, notifications will be provided via the portal or your registered email.

### Official contact channels
For questions, clarifications, or privacy requests:

- **Operating Entity:** ICI Laboratories (Independent educational tech club)
- **Academic Advisory:** Dr. Walter Alexander Mata López (Director of FIME)
- **Privacy & ARCO Desk:** [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com)
- **Privacy Center:** [https://privacy.ici-labs.com/en/](https://privacy.ici-labs.com/en/)
