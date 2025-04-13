
# Candidate Search App

> 👩‍💼 A React + TypeScript candidate review platform that mimics a swipe-style interface. Shortlist candidates with a "+" and skip with a "-".

---

## 📘 Description

This is a **frontend-only candidate selection app** that helps employers browse and save potential candidates. One profile is shown at a time, with options to save or skip. All saved candidates are persisted locally in the browser and can be reviewed later.

### 💡 Motivation

This project demonstrates **stateful UI logic**, simple user interaction, and data persistence using modern web technologies—all without requiring a backend.

---

## 🚀 Features

- View candidate profiles: name, username, location, email, avatar, company, bio
- Save candidates using "+"
- Skip candidates using "-"
- View saved candidates on a separate page
- Data persists using `localStorage`
- TypeScript + Vite + React stack
- Clean routing and navigation

---

## 📦 TL;DR Summary Table

| Name                  | Role                                                             |
|-----------------------|------------------------------------------------------------------|
| `CandidateSearch`     | Displays candidate info with save/skip options                   |
| `SavedCandidates`     | Renders list of saved candidates from localStorage               |
| `Nav`                 | Allows switching between pages                                   |
| `dummyCandidates.ts`  | Static mock data source for candidates                          |
| `vite-env.d.ts`       | Enables support for `import.meta.env` in TypeScript              |

---

## 📁 File Structure

```
CandidateSearchApp/
├── src/
│   ├── api/               # (Reserved for future API logic)
│   ├── assets/            # App assets (e.g. logos)
│   ├── components/        # Nav bar
│   ├── data/              # Contains dummyCandidates.ts
│   ├── interfaces/        # Candidate TypeScript interface
│   ├── pages/             # CandidateSearch and SavedCandidates
│   ├── App.tsx            # Route setup
│   ├── main.tsx           # React entry
│   └── vite-env.d.ts      # Vite environment types
├── package.json           # Scripts and dependencies
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── .env                   # (Optional) Environment config
└── README.md              # You’re reading it!
```

---

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/howellea/CandidateSearchApp.git
   cd CandidateSearchApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in dev mode**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🧪 Usage

Once the app is running:

- One candidate is shown at a time
- Click `+` to save a candidate
- Click `-` to skip to the next candidate
- Saved candidates can be viewed from the "Potential Candidates" page
- Saved list persists after refreshing the browser

---

## 📝 Example Candidate

```json
{
  "name": "Erina Everhart",
  "username": "Ee1110",
  "location": "Tokyo, Japan",
  "email": "ee110@gmail.com",
  "company": "Microsoft",
  "bio": "JavaScript obsessed. Typical coffee lover. Hardcore travel buff.",
  "avatar": "https://randomuser.me/api/portraits/women/50.jpg",
  "html_url": "https://github.com/Ee1110"
}
```

---

## 🧠 What I Learned

- How to structure a React + TypeScript app
- State and localStorage persistence
- Designing clean component and data flow
- Building user-friendly navigation and feedback messages

---

## 🎓 Credits

- GitHub: [@howellea](https://github.com/howellea)  
- Author: **Eddy Howell**

---

## ❓ Questions

Got feedback or want to collaborate?

- GitHub: [howellea](https://github.com/howellea)
- Email: [howelleddy@gmail.com](mailto:howelleddy@gmail.com)
