const express = require('express');
const bodyParser = require('body-parser');
const excelToJson = require('convert-excel-to-json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files

// Endpoint for login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Validate user credentials (this is just an example)
    if (username === 'admin' && password === 'password') {
        // Load data from Excel file
        const result = excelToJson({
            sourceFile: 'data.xlsx', // Your Excel file path
        });
        res.json(result);
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
