Absolutely! Below is a **Challenge 13 Checklist** you can follow to stay on track while completing the **Candidate Search** application.

---

# Module 13 Challenge Checklist: Candidate Search ✅

### **1. Project Setup**
- [x] Clone the starter code from the repository  
- [x] Install dependencies:  
  ```bash
  npm install
  ```
- [x] Create a **fine-grained GitHub Personal Access Token (PAT)**  
- [x] Create a `.env` file in the `/environment` directory  
  - [x] Add `VITE_GITHUB_TOKEN=your_personal_access_token`

---

### **2. API Setup**
- [x] Review `./Develop/src/api/API.tsx` for existing API calls  
- [x] Ensure that the API function calls the GitHub API correctly with your token  
- [x] Confirm rate limits are increased with token authentication  

---

### **3. CandidateSearch Page**
- [x] Import and call the API to **fetch candidate data**  
- [x] Display:
  - [x] Candidate's **name**
  - [x] Candidate's **username**
  - [x] Candidate's **location**
  - [x] Candidate's **avatar**
  - [x] Candidate's **email**
  - [x] Candidate's **GitHub URL** (html_url)
  - [x] Candidate's **company**
- [x] Create buttons:
  - [x] **"+" button** to save candidate and show the next candidate  
  - [x] **"- button"** to reject and show the next candidate  
- [x] When there are **no more candidates**, display a message (e.g., "No more candidates available.")  
- [x] Save accepted candidates to **localStorage**  

---

### **4. SavedCandidates Page**
- [x] Retrieve saved candidates from **localStorage**  
- [x] Display a **list of potential candidates**  
  - [x] Show name, username, location, avatar, email, GitHub link, and company  
- [x] If **no saved candidates**, display a message (e.g., "No candidates have been accepted.")  
- [x] Optional: Add **delete/reject** buttons to remove a candidate from the saved list  

---

### **5. Local Storage**
- [x] Use `localStorage` to persist the **potential candidates** list  
- [x] Ensure that the list **persists on page reload**  
- [x] Test `localStorage` functionality in **different browsers**  

---

### **6. Routing and Navigation**
- [x] Set up **React Router** with at least two routes:
  - [x] `/candidate-search` page  
  - [x] `/saved-candidates` page  
- [x] Provide **links/buttons** for navigation between pages  
- [x] Ensure navigation works **without page reloads**

---

### **7. Styling and UX**
- [x] Create a **clean and polished UI**  
- [x] Display **candidate cards** or components consistently  
- [x] Use **responsive design** for mobile and desktop  
- [x] Add **loading indicators** if API calls are slow  
- [x] Show **error messages** if the API call fails  

---

### **8. Deployment**
- [x] Push your project to GitHub with a **unique repository name**  
- [x] Deploy the app to **Render**  
- [x] Set `VITE_GITHUB_TOKEN` as an **environment variable** in Render  
- [x] Confirm deployment URL works and no errors appear on load  
- [x] Confirm data fetch works in the deployed environment  

---

### **9. Bonus (Optional +10 Points)**
- [x] Implement **sorting** of potential candidates  
- [x] Implement **filtering** of candidates by location, company, or other fields  
- [x] Create an intuitive **filter UI (dropdowns, search bars, etc.)**  

---

### **10. Repository and README**
- [x] Repository follows best practices:
  - [x] Clean folder structure  
  - [x] Consistent naming conventions  
  - [x] Quality comments and indentation  
  - [x] Multiple, descriptive commit messages  
- [x] Create a **high-quality README.md** that includes:
  - [x] Project description  
  - [x] Screenshot or demo of the app  
  - [x] Link to the deployed Render app  
  - [x] Link to the GitHub repo  
  - [x] Installation and usage instructions  

---

### **11. Review Submission**
- [x] Submit the **URL** of the deployed app on Render  
- [x] Submit the **URL** of the GitHub repository  
- [x] Confirm both are accessible and ready for review  

---

## 💡 Tips
- Check your **rate limits** on GitHub's API if your candidates stop showing  
- Use `useEffect()` and `useState()` properly to manage API calls and data state  
- Keep `localStorage` updates in **sync** with your component state  
- Use **TypeScript interfaces** to define candidate data types clearly  
- Test everything **before deployment**, including error states (no data, no network, etc.)

---

Let me know if you want me to draft the README.md or help with **sorting and filtering logic**!