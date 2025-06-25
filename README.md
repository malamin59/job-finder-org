# 💼 JobTrack

**JobTrack** is a React-based web application designed to make job searching easy.  
Users can browse job listings from various companies and apply directly through company websites.

---

## 🚀 Features

- 🔐 **User Authentication:** Email/password and Google Sign-in via Firebase Auth
- 📱 **Responsive Design:** Tailwind CSS + daisyUI for modern UI across all devices
- 🔒 **Private Routes:** Protect routes like profile & company details using React Router
- 📝 **Job Application Modal:** View and apply for jobs in a modal popup
- 👤 **Profile Update:** Users can edit and update their profile
- 🔑 **Forgot Password:** Password recovery via Firebase
- 🚧 **404 Page:** Custom "Page Not Found" screen
- 💫 **Animations:** Smooth transitions using Framer Motion
- ✅ **SweetAlert:** Beautiful alert popups for actions
- 🗓️ **Date Management:** Handle & format dates with `date-fns`

---

## 🛠️ Tech Stack

| Technology         | Description                               |
|--------------------|-------------------------------------------|
| **React**          | Frontend Framework                        |
| **React Router**   | Page routing & navigation                 |
| **Firebase Auth**  | User authentication (email/Google)        |
| **Tailwind CSS**   | Utility-first responsive CSS framework    |
| **daisyUI**        | Tailwind-based UI component library       |
| **Framer Motion**  | Animations and transitions                |
| **SweetAlert2**    | Alert and notification popups             |
| **date-fns**       | Lightweight date formatting library       |

---

## 🔧 How It Works

1. **Authentication:**
   - Users can register and log in using email/password or Google.
   - Firebase handles secure authentication.

2. **Routing:**
   - React Router is used to manage pages: Home, Jobs, Login, Register, My Profile, etc.
   - Some routes are protected and only visible to logged-in users.

3. **Job Application:**
   - Job cards have an "Apply" button that opens a modal with more details.
   - Users are redirected to company websites for application.

---



## 📁 Project Structure

## 🌐 Live Site

🔗 [Visit JobTrack Live]( https://my-assignment-auth-aac9b.web.app)

## GitHub Repository
[JobTrack GitHub Repository]( https://console.firebase.google.com/project/my-assignment-auth-aac9b/overview)

## Conclusion
JobTrack is an easy-to-use and responsive platform for job searching. Future features will be added, such as job filtering, search functionality, and a user rating system.
