import fs from 'fs';

let html = fs.readFileSync('original-dashboard.html', 'utf-8');

// Extract body inner HTML
let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (!bodyMatch) {
    console.error('No body found');
    process.exit(1);
}
let body = bodyMatch[1];

// Convert class to className
body = body.replace(/class=/g, 'className=');
body = body.replace(/for=/g, 'htmlFor=');

// Convert self-closing tags
body = body.replace(/<input([^>]+)>/g, (match, attrs) => {
    if (attrs.trim().endsWith('/')) return match;
    return `<input${attrs} />`;
});

// Convert inline styles
body = body.replace(/style="([^"]+)"/g, (match, styles) => {
    let styleObj = {};
    styles.split(';').forEach(s => {
        if (!s.trim()) return;
        let [key, val] = s.split(':');
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[key] = val.trim();
    });
    return `style={${JSON.stringify(styleObj)}}`;
});

// Convert SVG attributes
body = body.replace(/stroke-width=/g, 'strokeWidth=');
body = body.replace(/stroke-linecap=/g, 'strokeLinecap=');
body = body.replace(/stroke-dasharray=/g, 'strokeDasharray=');
body = body.replace(/preserveAspectRatio=/g, 'preserveAspectRatio='); // already correct
body = body.replace(/viewBox=/g, 'viewBox='); // already correct

// Convert comments
body = body.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

let jsx = `import React, { useState } from 'react';
import './index.css';

export default function App() {
  return (
    <React.Fragment>
      ${body}
    </React.Fragment>
  );
}
`;

fs.writeFileSync('src/App.jsx', jsx);
console.log('Successfully wrote App.jsx');
