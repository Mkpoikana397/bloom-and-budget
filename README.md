# 🌿 Bloom & Budget — Finance Blog

A clean, Pinterest-style personal finance blog built with Next.js 14. Ready to deploy on Vercel for free.

---

## 🚀 Deploy to Vercel (3 steps)

### 1. Install Node.js
Download from https://nodejs.org (LTS version)

### 2. Push to GitHub
- Create a free account at https://github.com
- Create a new repository (name it `bloom-and-budget`)
- Upload this entire project folder

### 3. Deploy on Vercel
- Sign up at https://vercel.com
- Click **Add New Project** → select your GitHub repo
- Click **Deploy** — done! You'll get a live URL in ~60 seconds

---

## ✏️ How to Add, Edit, or Remove Blog Posts

All posts live in one file: **`data/posts.js`**

Open that file and you'll see each post as an object like this:

```js
{
  id: 1,
  title: "Your Post Title",
  excerpt: "A short description shown on the blog card.",
  category: "Budgeting",        // shown as the tag
  emoji: "💰",                   // shown on the card image
  color: "green",               // card color: green, gold, pink, blue, tan, lavender
  date: "May 15, 2025",
  slug: "your-post-url",        // becomes /blog/your-post-url
},
```

**To add a post:** Copy one block, paste it at the top of the array, fill in your details.
**To edit a post:** Find it in the list and change any field.
**To remove a post:** Delete the whole block.

After saving, push to GitHub → Vercel automatically republishes.

---

## 🎨 Customizing the Blog Name & Colors

- **Blog name:** Search for `Bloom&Budget` in the code and replace it with yours
- **Colors:** Open `app/globals.css` and edit the variables at the top under `:root`
- **About page:** Edit `app/about/page.js` to add your own name, story, and photo

---

## 💻 Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000
