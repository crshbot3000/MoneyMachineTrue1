export default function handler(req, res) {
  res.status(200).send(`
    <html>
      <head>
        <title>🚀 Money Machine</title>
        <style>
          body {
            font-family: sans-serif;
            padding: 2rem;
            background: #f8f9fa;
          }
          .card {
            background: #fff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>💰 Welcome to the Money Machine</h1>
          <p><strong>Status:</strong> Operational</p>
          <p><strong>Pay to Activate:</strong></p>
          <ul>
            <li><strong>BTC:</strong> bc1q6vs0ysueyffs9fa6gtnmw45wpn25wf4pw69sw7</li>
            <li><strong>SOL:</strong> 8TZhArtJNfwTYiK7NLyixkDQEjC3JTU1CCvf67Fo1Htj</li>
          </ul>
          <p>📲 After payment, message <strong>@paulyt5</strong> on Telegram for activation.</p>
        </div>
      </body>
    </html>
  `);
}
