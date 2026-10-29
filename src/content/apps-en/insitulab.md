---
title: "InSituLab"
shortDescription: "Educational offline-first utility for on-demand field trip logging and geotagging in practical science courses."
category: "Education & Research"
lastUpdated: "October 28, 2026"
platforms: ["Android"]
developer: "ICI Laboratories"
collaboration: "School of Electromechanical Engineering (FIME) · University of Colima"
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

**InSituLab** is a free educational application designed to facilitate field observation logging and academic site visit documentation, created through academic collaboration between the **University of Colima** (School of Electromechanical Engineering - FIME) and **ICI Laboratories**.

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
- Uninstalling the application from your operating system settings **permanently and immediately destroys all database records, GPS points, and photos stored within the app sandbox**.

---

## 05. Academic notice and disclaimer

**InSituLab** is distributed strictly for **academic, educational, and scientific research purposes**:

- The **University of Colima** and **ICI Laboratories** provide this tool to support engineering and scientific education.
- The software involves no commercial transactions or subscription fees.
- It is provided "as is" to enrich practical field education without commercial warranties.

---

## 06. Contact information

For inquiries or feedback regarding InSituLab:

- **Academic & Technical Contact:** [icilaboratories@gmail.com](mailto:icilaboratories@gmail.com)
- **Privacy Center:** [https://privacy.ici-labs.com/en/](https://privacy.ici-labs.com/en/)
