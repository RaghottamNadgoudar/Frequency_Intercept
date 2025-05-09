const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (if you were to send JSON to backend)
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to serve the main game page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Placeholder for validating the final code (Not used by the frontend in this version)
app.post('/validate_code', (req, res) => {
  const { code } = req.body;
  console.log('Received code for validation:', code);
  // In a real scenario, you'd compare 'code' against the expected solution
  const expectedSolution = "DELTA5ECHO91"; // Example solution
  if (code === expectedSolution) {
    res.json({ success: true, message: 'Code correct! Next level unlocked.' });
  } else {
    res.json({ success: false, message: 'Code incorrect. Try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});