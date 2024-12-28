const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', async (req, res) => {
  const data = req.body;
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (data.id === 1) {
      throw new Error('Data processing failed');
    }
    res.json({ message: 'Data processed successfully' });
  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).json({ error: 'Failed to process data' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));