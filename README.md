# AlgoAid
[![React](https://img.shields.io/badge/Frontend-React-blue)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green)](https://nodejs.org/)
[![Gemini](https://img.shields.io/badge/AI-Gemini%202.0%20Flash-purple)](https://deepmind.google/technologies/gemini/)
[![Markdown](https://img.shields.io/badge/Rendering-Markdown-lightgrey)](https://github.com/remarkjs/react-markdown)

**AlgoAid** is an AI-powered platform that helps you analyze and improve your DSA (Data Structures and Algorithms) code.  
It uses **Gemini 2.0 Flash** for fast and intelligent feedback, providing **readability analysis**, **time/space complexity estimation**, and **optimization suggestions**.  
You can also chat with Gemini to clarify concepts and explore problem-solving strategies.


## Table of Contents
- [Features](#features)
- [Demo](#live-demo)
- [Folder Structure](#folder-structure)
- [Tech Stack](#tech-stack)
- [Deployment Maintenance](#deployment-maintenance)
- [Links & References](#links-references)
- [Contact](#contact)


## Features
- 📄 **Code Feedback** – Writing style, readability, and comments.
- ⏳ **Complexity Analysis** – Time and space complexity insights.
- 🚀 **Optimization Suggestions** – AI-driven performance tips.
- 💬 **AI Chat with Gemini 2.0 Flash** – Instant answers to coding doubts.
- 📝 **Markdown Rendering** – Clean and structured AI responses.


## Live Demo
![AlgoAid Demo](./client/src/assets/ScreenRecording.gif)  


## Links & References
- **GitHub Repo link:** https://github.com/KashishJuneja101003/AlgoAid
- **Deployment link (Netlify):** https://algoaid.netlify.app/

## Folder Structure
![Folder Structure](./client/src/assets/Folder%20Structure.png)

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Markdown Rendering:** [react-markdown](https://github.com/remarkjs/react-markdown)
- **Backend:** Node.js + Express (Hosted on Render)
- **AI Model:** [Gemini 2.0 Flash](https://deepmind.google/technologies/gemini/)
- **Deployment:**
  - **Frontend:** [Netlify](https://www.netlify.com/)
  - **Backend:** [Render](https://render.com/)

## Deployment Maintenance
Since the backend is hosted on Render’s free tier, it can enter sleep mode after a short period of inactivity, leading to slow responses during cold starts. **To maintain responsiveness, an UptimeRobot monitor pings a lightweight /ping endpoint every 5 minutes.** This prevents the server from idling and ensures faster response times for users. The monitor is configured with a 15-second timeout to avoid false downtime alerts.

## Contact
For any questions or feedback, feel free to reach out to me at [kashishjuneja1010@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=kashishjuneja1010@gmail.com) or connect on [Linkedin](https://www.linkedin.com/in/kashish-juneja-756673209).

---

*Thank you for visiting this project!*