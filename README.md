- **Core Features**:

  - Random text generation for the typing test.
  - Timer to measure typing duration.
  - Real-time typing input monitoring.
  - Accuracy calculation (percentage of correctly typed characters).
  - Words Per Minute (WPM) or Characters Per Minute (CPM) calculation.
  - Restart functionality.

- **Optional Features**:

  - Difficulty levels (e.g., easy, medium, hard with varying text complexity).
  - Leaderboard to store user scores locally (using `localStorage`).
  - Dark/Light mode toggle.
  - Mobile responsiveness.

- **Ui Design**:

  - **Text Display**
  - **Input Box**
  - **Timer & State**
  - **Start & Reset Button**
  - **Menu**

- **Event Flow**:
  - **Page Load**:
    - Generate random text (can be static or dynamic).
    - Display the text and reset stats.
  - **Start Typing**:
    - Start the timer when the user begins typing.
    - Track user input in real-time.
    - Compare user input with the target text to highlight mistakes.
  - **Completion**:
    - Stop the timer when the user finishes typing.
    - Calculate stats (WPM, accuracy) and display results.
  - **Restart**:
    - Reset everything (text, timer, stats).

> sample app https://hangman-game-eight-lovat.vercel.app/
