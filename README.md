# 🎮 Tic Tac Toe Game

A beautiful, fully functional web-based Tic Tac Toe game built with HTML, CSS, and JavaScript.

## 🌐 Live Demo

🎮 **[Play the game live on GitHub Pages!](https://sdingwan.github.io/tic-tac-toe-game/)**

The game is deployed and accessible online.

## ✨ Features

- **Modern UI Design**: Beautiful gradient backgrounds, smooth animations, and responsive design
- **Complete Game Logic**: Full tic-tac-toe functionality with win detection and tie handling
- **Score Tracking**: Persistent score tracking using localStorage
- **Visual Feedback**: 
  - Winning cells are highlighted with a pulse animation
  - Smooth hover effects and transitions
  - Color-coded players (X is red, O is blue)
- **Sound Effects**: Optional audio feedback for moves and game endings
- **Keyboard Support**: Play using number keys 1-9, reset with 'R'
- **Auto-Reset**: Games automatically reset after 3 seconds when finished
- **Mobile Responsive**: Works perfectly on phones, tablets, and desktops

## 🚀 How to Play

### Mouse/Touch Controls
1. Click on any empty cell to place your mark
2. Players alternate between X and O
3. First player to get 3 in a row (horizontally, vertically, or diagonally) wins
4. If all cells are filled without a winner, it's a tie

### Keyboard Controls
- **Number Keys 1-9**: Place your mark in the corresponding cell position
  ```
  1 | 2 | 3
  ---------
  4 | 5 | 6
  ---------
  7 | 8 | 9
  ```
- **R Key**: Reset the current game

### Game Controls
- **New Game**: Start a fresh game (scores are preserved)
- **Reset Score**: Clear all scores and start over

## 🛠️ Getting Started

1. Open `index.html` in any modern web browser
2. Start playing immediately!

### Running Locally
```bash
# No installation required! Just open the HTML file
open index.html

# Or serve with a simple HTTP server
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🎯 Game Rules

1. **X always goes first**
2. **Players take turns** placing their marks
3. **Win Conditions**: Get 3 marks in a row:
   - Horizontally (any row)
   - Vertically (any column) 
   - Diagonally (either diagonal)
4. **Tie**: All 9 squares filled with no winner
5. **Score Tracking**: Wins and ties are automatically tracked

## 🎨 Features Explained

### Visual Design
- **Gradient Background**: Eye-catching purple to blue gradient
- **Glass Morphism**: Semi-transparent container with backdrop blur
- **Smooth Animations**: Hover effects, win celebrations, and transitions
- **Color Coding**: X (red) vs O (blue) for easy identification

### Technical Features
- **localStorage**: Scores persist between browser sessions
- **Responsive Design**: Adapts to any screen size
- **Accessibility**: Keyboard navigation support
- **Audio**: Optional sound effects (activated after first user interaction)
- **Auto-Reset**: Games automatically restart after completion

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS/Android)

## 🔧 File Structure

```
tic-tac-toe-game/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Game logic and interactivity
└── README.md       # This file
```

## 🚀 Deployment

This game is deployed on **GitHub Pages** for easy access and sharing.

### Live URL
- **Production**: https://sdingwan.github.io/tic-tac-toe-game/

### Deployment Setup
The deployment is automatically handled by GitHub Pages:
1. Code is pushed to the `main` branch
2. GitHub Pages serves the static files directly
3. The site is available instantly at the GitHub Pages URL
4. Any updates to `main` branch automatically update the live site

### Custom Domain (Optional)
You can also set up a custom domain by:
1. Adding a `CNAME` file with your domain
2. Configuring DNS settings
3. Enabling HTTPS in repository settings

## 🎵 Sound Effects

The game includes optional sound effects:
- **Click Sound**: When placing a mark
- **Win Sound**: When a player wins
- **Tie Sound**: When the game ends in a tie

*Note: Sounds are only activated after the first user interaction due to browser autoplay policies.*

## 🏆 Enjoy Playing!

Have fun playing this classic game with friends and family. The score tracking makes it perfect for tournaments!

---

*Built with ❤️ using vanilla HTML, CSS, and JavaScript* 
