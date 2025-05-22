class TicTacToe {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.scores = {
            X: 0,
            O: 0,
            tie: 0
        };
        
        this.winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        this.initializeGame();
    }
    
    initializeGame() {
        this.bindEvents();
        this.updateDisplay();
        this.loadScores();
    }
    
    bindEvents() {
        const cells = document.querySelectorAll('.cell');
        const resetGameBtn = document.getElementById('reset-game');
        const resetScoreBtn = document.getElementById('reset-score');
        
        cells.forEach(cell => {
            cell.addEventListener('click', (e) => this.handleCellClick(e));
        });
        
        resetGameBtn.addEventListener('click', () => this.resetGame());
        resetScoreBtn.addEventListener('click', () => this.resetScores());
    }
    
    handleCellClick(e) {
        const cellIndex = parseInt(e.target.getAttribute('data-index'));
        
        if (this.board[cellIndex] !== '' || !this.gameActive) {
            return;
        }
        
        this.makeMove(cellIndex);
    }
    
    makeMove(index) {
        this.board[index] = this.currentPlayer;
        this.updateCellDisplay(index);
        
        if (this.checkForWinner()) {
            this.endGame(this.currentPlayer);
            return;
        }
        
        if (this.checkForTie()) {
            this.endGame('tie');
            return;
        }
        
        this.switchPlayer();
        this.updateDisplay();
    }
    
    updateCellDisplay(index) {
        const cell = document.querySelector(`[data-index="${index}"]`);
        cell.textContent = this.currentPlayer;
        cell.classList.add(this.currentPlayer.toLowerCase());
    }
    
    checkForWinner() {
        for (let condition of this.winningConditions) {
            const [a, b, c] = condition;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.highlightWinningCells(condition);
                return true;
            }
        }
        return false;
    }
    
    highlightWinningCells(winningCondition) {
        winningCondition.forEach(index => {
            const cell = document.querySelector(`[data-index="${index}"]`);
            cell.classList.add('winning');
        });
    }
    
    checkForTie() {
        return this.board.every(cell => cell !== '');
    }
    
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
    
    endGame(result) {
        this.gameActive = false;
        
        if (result === 'tie') {
            this.scores.tie++;
            this.updateGameStatus("It's a tie! 🤝", 'tie');
        } else {
            this.scores[result]++;
            this.updateGameStatus(`Player ${result} wins! 🎉`, 'winner');
        }
        
        this.updateScoreDisplay();
        this.saveScores();
        
        // Auto reset after 3 seconds
        setTimeout(() => {
            this.resetGame();
        }, 3000);
    }
    
    updateGameStatus(message, className = '') {
        const statusElement = document.getElementById('game-status');
        statusElement.textContent = message;
        statusElement.className = `game-status ${className}`;
    }
    
    updateDisplay() {
        this.updateCurrentPlayerDisplay();
        this.updateGameStatus('Make your move!');
    }
    
    updateCurrentPlayerDisplay() {
        const currentPlayerElement = document.getElementById('current-player');
        currentPlayerElement.textContent = this.currentPlayer;
        currentPlayerElement.style.color = this.currentPlayer === 'X' ? '#e53e3e' : '#3182ce';
    }
    
    updateScoreDisplay() {
        document.getElementById('score-x').textContent = this.scores.X;
        document.getElementById('score-o').textContent = this.scores.O;
        document.getElementById('score-tie').textContent = this.scores.tie;
    }
    
    resetGame() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        
        // Clear all cells
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.className = 'cell';
        });
        
        this.updateDisplay();
    }
    
    resetScores() {
        this.scores = { X: 0, O: 0, tie: 0 };
        this.updateScoreDisplay();
        this.saveScores();
        this.updateGameStatus('Scores reset! Start playing! 🚀');
    }
    
    saveScores() {
        localStorage.setItem('ticTacToeScores', JSON.stringify(this.scores));
    }
    
    loadScores() {
        const savedScores = localStorage.getItem('ticTacToeScores');
        if (savedScores) {
            this.scores = JSON.parse(savedScores);
            this.updateScoreDisplay();
        }
    }
}

// Game controls for better UX
document.addEventListener('DOMContentLoaded', () => {
    const game = new TicTacToe();
    
    // Add keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key >= '1' && e.key <= '9') {
            const index = parseInt(e.key) - 1;
            const cell = document.querySelector(`[data-index="${index}"]`);
            if (cell && game.gameActive && game.board[index] === '') {
                game.makeMove(index);
            }
        }
        
        if (e.key === 'r' || e.key === 'R') {
            game.resetGame();
        }
    });
    
    // Add visual feedback for keyboard controls
    const container = document.querySelector('.container');
    const keyboardHint = document.createElement('div');
    keyboardHint.innerHTML = `
        <div style="margin-top: 15px; padding: 10px; background: rgba(0,0,0,0.05); border-radius: 8px; font-size: 0.8rem; color: #666;">
            💡 <strong>Keyboard shortcuts:</strong> Press 1-9 to play, R to reset
        </div>
    `;
    container.appendChild(keyboardHint);
    
    // Add sound effects (optional - only if user interaction allows)
    const addSoundEffects = () => {
        const playSound = (frequency, duration) => {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + duration);
        };
        
        // Override the makeMove method to add sound
        const originalMakeMove = game.makeMove.bind(game);
        game.makeMove = function(index) {
            try {
                playSound(800, 0.1); // Click sound
            } catch (e) {
                // Ignore audio errors
            }
            originalMakeMove(index);
        };
        
        // Override endGame to add win/tie sounds
        const originalEndGame = game.endGame.bind(game);
        game.endGame = function(result) {
            try {
                if (result === 'tie') {
                    playSound(400, 0.3); // Tie sound
                } else {
                    playSound(1000, 0.5); // Win sound
                }
            } catch (e) {
                // Ignore audio errors
            }
            originalEndGame(result);
        };
    };
    
    // Add sound effects after first user interaction
    let soundsEnabled = false;
    document.addEventListener('click', () => {
        if (!soundsEnabled) {
            addSoundEffects();
            soundsEnabled = true;
        }
    }, { once: true });
}); 