# 🎨 HobbyHub

**Live URL:** [https://test-new-a8773.web.app](https://test-new-a8773.web.app)

---

## 📌 Project Theme

**HobbyHub** is a dynamic and engaging web platform where users can **discover**, **join**, or **create** local hobby-based communities. Whether you're into **book clubs**, **hiking groups**, **painting circles**, or any other passion, HobbyHub connects like-minded individuals to build strong and fun social connections through shared interests.

---

## 🚀 Key Features

- 🔍 Discover local hobby groups by interest and location
- 🧑‍💻 Create an account to access personalized features
- ✍️ Create your own group with name, description, and category
- 🙋 Join other users' groups instantly with one click
- 🛠️ Update or edit the groups you’ve created
- ⏳ Prevent joining a group after its join deadline has passed
- 💬 Explore hobby details with smooth UI animations
- 🔒 Secure authentication using Firebase
- 🎨 Beautiful and clean UI with Tailwind CSS and DaisyUI
- 📲 Fully responsive on mobile, tablet, and desktop devices


---

## 🛠️ Tech Stack

### 🧩 Frontend

| Category       | Tools Used                                     |
|----------------|------------------------------------------------|
| Framework      | React 19                                       |
| Build Tool     | Vite 6                                         |
| Styling        | Tailwind CSS 4, DaisyUI                        |
| Routing        | React Router DOM v7                            |
| Animations     | Framer Motion, React Awesome Reveal            |
| Icons          | Lucide React, React Icons                      |
| Auth/Backend   | Firebase                                       |
| Notifications  | React Hot Toast                                |
| Typing Effect  | React Simple Typewriter                        |
| Tooltip        | React Tooltip                                  |
| Lottie Support | Lottie React, DotLottie React                  |
| Counting Anim. | React CountUp                                  |

---

### 🔧 Backend

| Category         | Tools Used             |
|------------------|------------------------|
| Runtime          | Node.js                |
| Framework        | Express.js 5           |
| Database         | MongoDB 6              |
| Middleware       | CORS, dotenv           |
| Hosting (Opt.)   | Vercel                 |

---

## 📁 Folder Structure
```
HobbyHub/
├── public/ # Static files (favicon, screenshot, etc.)
├── src/
│ ├── assets/ # Images and static assets
│ ├── components/ # Reusable UI components
│ ├── firebase/ # Firebase config
│ ├── pages/ # Page-level components
│ ├── Provider/ # Context/state providers
│ ├── Router/ # Routes and navigation
│ ├── App.jsx # Root component
│ ├── index.css # Tailwind base styles
│ └── main.jsx # App entry point
├── .env.local # Firebase or other environment variables
├── package.json # Project dependencies and scripts
├── vite.config.js # Vite build configuration
└── README.md # Project documentation```
```


## Installation

```
git clone https://github.com/abdullahalnirob/hobbyhub.git
cd hobbyhub
npm install
```

## Setup environment variables
```
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

## Run Project 

```
npm run dev
```
