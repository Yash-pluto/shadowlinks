# 🔗 shadowlinks

Your personal dev-oriented **Linktree killer** — built using **React + Vite + TailwindCSS**, hosted on **Vercel**.  
Showcase your GitHub, LinkedIn, Discord, Portfolio, and whatever else you want — **with full control**, no limits, no paywalls.

> Built by [@Yash-pluto](https://github.com/yashvardhan3105) aka **Pluto**  
> _Long live Shadowlinks._ ☠️

---

## ⚙️ Tech Stack

| Tool | Purpose |
|------|---------|
| 🛠️ Vite | Super fast dev environment |
| ⚛️ React | Frontend library |
| 🎨 TailwindCSS | Utility-first CSS styling |
| 🖼 SVG Icons | For GitHub, LinkedIn, Discord, etc. |
| 🚀 Vercel | Free deployment with custom subdomain |

---

## 🚀 Getting Started

```bash
git clone https://github.com/Yash-pluto/shadowlinks.git
cd shadowlinks
npm install
npm run dev
```
> Visit https://localhost:5173

---

## 🧩 Folder Structure
```plaintext
shadowlinks/
 ┣ public/
 ┃ ┗ icons/        → SVGs for all your social links
 ┣ src/
 ┃ ┣ components/    → LinkItem, Header, etc.
 ┃ ┣ data.js        → All your link data here
 ┃ ┣ App.jsx
 ┃ ┗ index.css      → Tailwind setup
 ┣ vite.config.js
 ┗ README.md
```
---

📂 Add/Edit Links
All your links live inside src/data.js.
Example format:

```js
export const links = [
  {
    name: "GitHub",
    url: "https://github.com/Yash-pluto",
    icon: "/icons/github.svg",
  },
  {
  name: "LinkedIn",
    url: "https://linkedin.com/in/vardhan-yash3105",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/yourID",
    icon: "/icons/discord.svg",
  }
];
```

---

## 🧠 Future Ideas
+ Spotify Now Playing widget
+ Resume PDF download
+ Typewriter intro text
+ Dark glow effect on hover
+ Framer Motion animations
+ SEO Meta + OG image

---

## 📡 Live URL
https://yashpluto.vercel.app

---

## 🐺 License
MIT — use it, remix it, flex it. Just don’t be a b*tch and sell it like it’s yours 💀

---

# ⭐ Show Some Love
If you like the project:

- ⭐ Star it on GitHub
- 🔁 Fork it
- 🛠️ Build your own version

💬 Connect With Me
You can hit me up anytime for collabs, mentoring, or questions:

- 🧠 [LinkedIn](https://www.linkedin.com/in/vardhan-yash3105/)
- 🐙 [GitHub](https://github.com/Yash-pluto)
- 📧 Email: vardhan.yash3105@gmail.com
