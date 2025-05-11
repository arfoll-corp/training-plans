# 🏃‍♂️ Trail Plans — Static Site with Authenticated Access

This project is a **static site built with Docusaurus** to share **trail running training plans** securely with authenticated users via **Netlify Identity**.

## 📦 What's inside

- ⚛️ Built with [Docusaurus](https://docusaurus.io/)
- 📄 Plans written in Markdown (`docs/`)
- 🔒 Private access to plans via `/private` page
- 🔐 Authentication managed by Netlify Identity
- 🚀 Deployable for free on [Netlify](https://www.netlify.com/)

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/trail-plans.git
cd trail-plans
npm install
```

### 2. Add your training plans

Edit or add Markdown files in the `docs/` directory. Example plans:
- `plan-u96.md`: 96 km mountain ultra
- `plan-v42.md`: classic trail marathon

### 3. Configure Docusaurus

Edit `docusaurus.config.js`:
- Replace `your-username` with your actual GitHub username
- Adjust `url` and `baseUrl` if needed

### 4. Deploy to Netlify

1. Push the repo to GitHub
2. Create a Netlify site from the repo
3. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
4. Enable Netlify Identity
5. Invite users via the Identity panel
6. Done ✅

---

## 🔐 Accessing private plans

Only authenticated users can access the `/private` page. Netlify Identity is initialized on load and redirects unauthenticated users to the login/signup modal.

---

## 📜 Licenses

- **Code**: MIT License (see `LICENSE`)
- **Training content**: [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) (see `content-license.md`)

Please **do not redistribute or modify** the training plans without permission.

---

## 🙌 Acknowledgments

This project was initiated by [Julien Le Foll](https://github.com/julienlefollofficial), ultra-trail runner and coach.

Feel free to fork, contribute, and adapt for your own coaching needs!
