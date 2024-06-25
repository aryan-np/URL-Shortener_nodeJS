<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>URL Shortener</title>
</head>
<body>

<h1>URL Shortener Service</h1>

<p>This project is a basic URL shortener service built using Express.js and MongoDB.</p>

<h2>Author</h2>
<p>Aryan Neupane</p>

<h2>Features</h2>
<ul>
    <li>Shorten long URLs</li>
    <li>Redirect to the original URL using the shortened link</li>
    <li>Track visit history with timestamps</li>
</ul>

<h2>Requirements</h2>
<ul>
    <li>Node.js</li>
    <li>MongoDB</li>
    <li>npm (Node Package Manager)</li>
</ul>

<h2>Installation</h2>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/yourusername/url-shortener.git</code></pre>
    </li>
    <li>Navigate to the project directory:
        <pre><code>cd url-shortener</code></pre>
    </li>
    <li>Install dependencies:
        <pre><code>npm install</code></pre>
    </li>
</ol>

<h2>Configuration</h2>
<p>Update the MongoDB connection string in <code>connect.js</code>:</p>
<pre><code>connectMongoDB("mongodb+srv://&lt;username&gt;:&lt;password&gt;@&lt;cluster-url&gt;/urlDb")</code></pre>

<h2>Usage</h2>
<ol>
    <li>Start the server:
        <pre><code>npm start</code></pre>
    </li>
    <li>To shorten a URL, make a POST request to <code>/url</code> with a JSON body containing the URL to be shortened:
        <pre><code>{
    "url": "https://www.example.com"
}</code></pre>
        <p>This will return a JSON response with the shortened URL ID.</p>
    </li>
    <li>To access the original URL, navigate to <code>http://localhost:8001/&lt;shortId&gt;</code>.</li>
</ol>

<h2>File Structure</h2>
<pre><code>.
├── models
│   └── url.js
├── routes
│   └── url.js
├── connect.js
├── server.js
├── package.json
└── README.md
</code></pre>

<h2>Endpoints</h2>
<ul>
    <li><code>POST /url</code>: Generates a short URL.</li>
    <li><code>GET /:shortId</code>: Redirects to the original URL and tracks the visit.</li>
</ul>

<h2>License</h2>
<p>MIT License</p>

</body>
</html>
