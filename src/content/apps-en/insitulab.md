---
title: "InSituLab"
shortDescription: "Educational offline-first utility for on-demand field trip logging and geotagging in practical science courses."
category: "Education & Research"
lastUpdated: "October 28, 2026"
platforms: ["Android"]
developer: "ICI Laboratories (Educational club)"
contactEmail: "icilaboratories@gmail.com"
order: 5
icon: "insitulab"
summary:
  whatIs: "InSituLab is an offline-first educational application designed for documentation, field observations, and on-demand geotagging during practical school visits."
  dataUsed: "Precise GPS coordinates (captured exclusively upon active user request), field photographs, and descriptive notes stored in the local SQLite database."
  purposes: "Facilitate scientific field study activities and generate academic visit reports exported directly by the student."
  contact: "icilaboratories@gmail.com"
accountDeletion:
  supported: false
offlineOnly: true
---

**InSituLab** is developed by **ICI Laboratories**, an independent student-led educational club.

---

## 01. "Offline-First" local privacy model

InSituLab is architected under strict principles of data sovereignty and privacy by design:

- **No User Accounts:** The application requires no account registration, login credentials, or cloud profiles.
- **100% On-Device Storage:** All observation forms, recorded coordinates, and photographs reside strictly within the device's internal storage database.
- **Zero Commercial Trackers:** The application contains no advertising modules, user profiling libraries, or behavioral tracking SDKs.

---

## 02. Device permissions and sensitive data

To enable its scientific field logging features, the application requests two hardware permissions with strict safeguards:

### Precise Geographic Location (GPS)

- **On-Demand Activation Only:** The app reads GPS latitude and longitude coordinates **only at the exact moment you tap the "Get location" button** in the visit report form.
- **Educational Purpose:** To correlate the physical location of the field study site with the active observation report.
- **No Background Tracking:** InSituLab **never tracks routes, collects background telemetry, or monitors your movements** when the application is minimized or closed.

### Camera and Local File Storage

- **Purpose:** To allow capturing visual evidence of flora, fauna, geological structures, or industrial machinery during academic visits.
- **Device Isolation:** Captured photos remain within the app's sandboxed storage. Developers have zero remote visibility into your phone's personal photo gallery.

---

## 03. User control and report export

You remain the sole custodian and owner of all information logged in InSituLab:

- Field logs never transmit from your phone automatically.
- Data leaves your device only when you deliberately select **"Export"** or **"Share"** (generating a formatted PDF or ZIP archive) to send reports to instructors or study partners via your preferred app (email, Google Drive, or messaging apps).

---

## 04. Data deletion

Because the application functions strictly offline and maintains no central server synchronization:

- There are no cloud user accounts to delete.
- You can remove individual field logs at any time from the app's visit history.
- Uninstalling generally removes application-local data, but exported files, operating-system backups or copies in other applications may remain and must be managed separately.

---

## 05. Educational use
InSituLab lets you document observations and prepare reports for educational activities.

Before sharing reports, consider whether photographs, coordinates or notes identify other people or private locations. Share only the information needed for the activity.

---

## 06. Contact information

**Data controller:** Pedro Antonio Ibarra Facio, operating the independent educational club ICI Laboratories. See the [privacy request procedure](/en/requests/) for the common contact and exercise of rights.

For inquiries or feedback regarding InSituLab:

- **Academic & Technical Contact:** [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com)
- **Privacy Center:** [https://privacy.ici-labs.com/en/](https://privacy.ici-labs.com/en/)
