---
title: "SARA MD"
shortDescription: "Fast, private, local-first Markdown editor for Android and iOS with LaTeX math formulas, Mermaid diagrams, and offline document conversions."
category: "Productivity & Utilities"
lastUpdated: "October 28, 2026"
platforms: ["Android", "iOS"]
developer: "ICI Laboratories (Educational club)"
contactEmail: "icilaboratories@gmail.com"
order: 4
icon: "docmd"
summary:
  whatIs: "SARA MD is a privacy-first mobile Markdown text editor built on a 100% on-device (local-first) architecture."
  dataUsed: "Collects zero personal data, user identifiers, or document text. All notes reside exclusively within the application's private sandbox on your phone."
  purposes: "Draft, edit, and format text notes, LaTeX equations, and Mermaid charts without requiring cloud servers, internet connectivity, or remote accounts."
  contact: "icilaboratories@gmail.com"
accountDeletion:
  supported: false
offlineOnly: true
---

**SARA MD** is developed by **ICI Laboratories**, an independent student-led educational club.

SARA MD follows a **local-first (on-device)** model for editing and storing documents. Exported files, remote content and device-level backups can involve other services under their own conditions.

---

## 01. Fundamental principle: "Local-First" architecture

Unlike cloud-dependent editors, SARA MD processes and stores everything locally on your smartphone or tablet:

- **No Account Required:** The app does not require account registration, passwords, usernames, or SARA Account linkage.
- **Exclusive Local Storage:** Every document is stored as a standard `.md` file in the private sandbox allocated to the app by your operating system.
- **No Analytics or Trackers:** SARA MD contains no third-party tracking SDKs, marketing pixels, or commercial telemetry libraries.
- **On-Device Computation:** Markdown syntax highlighting, reading statistics, LaTeX rendering, Mermaid charts, and document format conversions (HTML, CSV, PDF) execute 100% locally on your device hardware.

---

## 02. Device permissions and functional usage

To enable document creation, the app requests minimal operating system capabilities:

### File Access & System Document Picker
- **Purpose:** To allow you to import existing files (`.md`, `.txt`, `.html`, `.csv`, `.tsv`, or `.pdf`) and export your finished notes.
- **Strict Scope:** The application accesses only the specific files you consciously select via the native operating system picker (*Storage Access Framework* on Android / *Document Picker* on iOS). SARA MD never scans or indexes your broader device storage.

### Remote Image Privacy Protection
- When previewing Markdown notes containing remote internet image links, SARA MD **does not automatically download external images**, preventing third-party servers from logging your IP address or tracking when notes are opened. A private placeholder is shown unless you explicitly choose to load the image.

### External Links
- The application only opens links with allowed protocols (`http`, `https`, `mailto`), delegating navigation to your system's default browser upon deliberate interaction.

---

## 03. User sovereignty and document export

You can manage your documents and choose when to export them:

- No note or draft ever leaves your device unattended.
- Document exports utilize your operating system's native Share Sheet. Files are only shared when you consciously dispatch them to other installed apps (such as Google Drive, an email client, or local messaging apps).

---

## 04. Data deletion

Because SARA MD transmits and stores zero information on ICI Laboratories servers:

- There are no cloud databases or remote user profiles to purge.
- You can delete any note or draft at any time from within the app library.
- Uninstalling generally removes application-local data, but exported files, operating-system backups or copies in other applications may remain and must be managed separately.

---

## 05. Security

Because your files reside strictly on your mobile device, their security also depends on the configuration and protections available on your device. Use a screen lock and review your backup and export settings.

---

## 06. Children's privacy

SARA MD is a general-purpose writing and productivity tool suitable for all audiences and collects no personal data from any individual, including children.

---

## 07. Policy updates

Updates that change data processing will be communicated at this URL and in the application release notes before those changes take effect.

---

## 08. Contact information

**Data controller:** Pedro Antonio Ibarra Facio, operating the independent educational club ICI Laboratories. See the [privacy request procedure](/en/requests/) for the common contact and exercise of rights.

For questions or suggestions regarding SARA MD:

- **Support & Privacy Desk:** [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com)
- **Organization:** ICI Laboratories
- **Privacy Center:** [https://privacy.ici-labs.com/en/](https://privacy.ici-labs.com/en/)
