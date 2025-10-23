
---

# Firebase Guide Example: `my-firebase-project`

This example uses a project called `my-firebase-project` to demonstrate **all Firebase commands and features** step by step.

---

## 1️⃣ Prerequisites

* **Node.js** installed (v16+)

```bash
node -v
npm -v
```

* **Firebase CLI** installed globally:

```bash
npm install -g firebase-tools
```

* **Google account** ready

---

## 2️⃣ Login to Firebase

```bash
firebase login
```

* Opens a browser to sign in with your Google account.

---

## 3️⃣ Create a New Project

Option 1: CLI

```bash
firebase projects:create my-firebase-project
```

Option 2: Firebase Console

* Go to [Firebase Console](https://console.firebase.google.com/) → Click **Add project** → Name it `my-firebase-project`

---

## 4️⃣ Initialize Firebase Locally

```bash
mkdir my-firebase-project
cd my-firebase-project
firebase init
```

During init:

1. Select features: **Hosting, Firestore, Functions, Storage**
2. Choose your project: `my-firebase-project`
3. Hosting folder: `public`
4. Single-page app? **Yes/No** (choose based on your project)
5. Install dependencies: **Yes**

---

## 5️⃣ Hosting Commands

* **Deploy website**

```bash
firebase deploy --only hosting
```

* **Disable hosting**

```bash
firebase hosting:disable
```

* **Test locally**

```bash
firebase serve
```

---

## 6️⃣ Firestore Commands

* Open Firestore Console:

```bash
firebase firestore:open
```

* Delete collection (example: `users`) recursively:

```bash
firebase firestore:delete users --recursive
```

---

## 7️⃣ Functions Commands

* Deploy functions:

```bash
firebase deploy --only functions
```

* Delete a function (example: `sendEmail`):

```bash
firebase functions:delete sendEmail
```

---

## 8️⃣ Storage Commands

* Upload a file to storage:

```bash
firebase storage:upload ./images/logo.png /images/logo.png
```

* Delete folder/files recursively:

```bash
firebase storage:delete images --recursive
```

---

## 9️⃣ Other Useful Commands

* List projects:

```bash
firebase projects:list
```

* Select project for CLI:

```bash
firebase use my-firebase-project
```

* Logout:

```bash
firebase logout
```

---

## 🔒 Deleting the Project Completely

1. Go to **Firebase Console** → **my-firebase-project** → Project Settings
2. Scroll down → Click **Delete Project**
3. Type `my-firebase-project` to confirm

> This deletes Hosting, Firestore, Storage, Functions – **irreversible**.

---

### Beginner Tips

* Always **deploy** after changes with `firebase deploy`.
* Use `firebase serve` to test locally before deploying.
* If errors appear, check your **internet connection** and CLI version:

```bash
firebase --version
```

---


# my-firebase-app
