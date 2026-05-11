# 💖 Endless Hugot: The Doomscroller’s Sanctuary 🌙

<p align="center">
  <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJ6eGZpZzR6eGZpZzR6eGZpZzR6eGZpZzR6eGZpZzR6ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKoWXlo3MGuLxC0/giphy.gif" width="350">
</p>

> **"A digital space for the person who finds peace in scrolling... may these corny lines lift your mood, even if just for a second."**

---

## 📖 The Backstory
I created this as a secret corner of cyberspace for **her**. 

She often copes with her problems through "doomscrolling"—getting lost in the infinite feed of the internet. I thought, if she's going to scroll forever, why not give her a feed that is meant only to make her smile? 

I don't expect her to find this, or even to open it if she does. I’m simply hiding it here in my repository cyberspace. It’s a quiet reminder that even in her toughest moments, someone is trying to make her laugh from the background.

---

## ✨ Features
* **♾️ Infinite Hugot Feed:** A JavaScript-powered engine that generates cards forever. No end, just like a true doomscroll.
* **💖 Heart Canvas:** A background layer of floating hearts that interact with the screen.
* **💥 Corny Explosion:** A floating button that triggers a massive emoji burst and a "baliws" message.
* **📱 Mobile-First Design:** Styled with `clamp()` and flexbox to look perfect on a phone screen late at night.

---

## 🛠️ Tech Stack
* **HTML5** - Structure of the sanctuary.
* **CSS3** - Animated gradients, glassmorphism, and responsive grids.
* **Vanilla JavaScript** - The "Hugot Engine" and infinite scroll logic.

---

## 🚀 The Hugot Engine
The magic happens by monitoring the scroll position. When you reach the bottom, the engine injects new cards from a curated list of corny lines.

```javascript
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        for (let i = 0; i < 6; i++) createCard();
    }
});
