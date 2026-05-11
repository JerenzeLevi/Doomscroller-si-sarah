# 🧠 The Hugot Engine (JavaScript)

> *"Logic will get you from A to B. Imagination (and a bit of korni) will take you everywhere."*

This is the "brain" of the project. It powers the infinite scroll and ensures that no matter how long she scrolls, she never runs out of reasons to smile.

---

## ⚙️ Core Modules

### 1. The Infinite Feed
Monitors the `window.scrollY` and `document.body.offsetHeight`. When the user is 200px from the bottom, it triggers `createCard()` to add 6 more random hugots.

### 2. The Heart Canvas
A high-performance HTML5 Canvas class that clears and re-renders floating particles to keep the UI lightweight but magical.

### 3. The Corny Explosion 💥
A custom function that:
* Calculates a 360-degree radial blast for emojis.
* Triggers a CSS-variable-based screen shake.
* Displays the hidden "Baliw!" message.

---

## 📝 Adding New Lines
To add more lines to the scroll, simply push a new object into the `hugots` array:
```javascript
{ text: "Your new line here", emoji: "✨" }
{ text: "I'm sorry if I ever pissed you", emoji: "😔" }
