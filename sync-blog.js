#!/usr/bin/env node

/**
 * Sync script to update blog.html with markdown content from posts/ directory
 * This allows the blog to work when opening HTML files directly (file:// protocol)
 * 
 * Usage: node sync-blog.js
 */

const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'posts');
const blogHtmlPath = path.join(__dirname, 'blog.html');

// Read posts.json to get the list of posts
const postsJsonPath = path.join(postsDir, 'posts.json');
let posts = [];

if (fs.existsSync(postsJsonPath)) {
    posts = JSON.parse(fs.readFileSync(postsJsonPath, 'utf8'));
} else {
    console.log('posts/posts.json not found. Reading all .md files from posts/ directory...');
    const files = fs.readdirSync(postsDir);
    const mdFiles = files.filter(f => f.endsWith('.md') && f !== 'README.md');
    posts = mdFiles.map(file => ({
        file: file,
        title: file.replace('.md', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
    }));
}

// Read all markdown files
const postsData = {};
for (const post of posts) {
    const mdPath = path.join(postsDir, post.file);
    if (fs.existsSync(mdPath)) {
        postsData[post.file] = fs.readFileSync(mdPath, 'utf8');
    } else {
        console.warn(`Warning: ${post.file} not found, skipping...`);
    }
}

// Read blog.html
let blogHtml = fs.readFileSync(blogHtmlPath, 'utf8');

// Generate postsData object as a string
const postsDataStr = Object.entries(postsData)
    .map(([file, content]) => {
        // Escape backticks and handle multiline strings
        const escapedContent = content
            .replace(/\\/g, '\\\\')
            .replace(/`/g, '\\`')
            .replace(/\${/g, '\\${');
        return `            '${file}': \`${escapedContent}\``;
    })
    .join(',\n');

// Generate posts array as a string
const postsStr = posts
    .map(post => `            { 
                file: '${post.file}', 
                title: '${post.title.replace(/'/g, "\\'")}', 
                date: '${post.date}' 
            }`)
    .join(',\n');

// Replace postsData object
const postsDataRegex = /const postsData = \{[\s\S]*?\};/;
blogHtml = blogHtml.replace(postsDataRegex, `const postsData = {\n${postsDataStr}\n        };`);

// Replace posts array
const postsRegex = /const posts = \[[\s\S]*?\];/;
blogHtml = blogHtml.replace(postsRegex, `const posts = [\n${postsStr}\n        ];`);

// Write updated blog.html
fs.writeFileSync(blogHtmlPath, blogHtml, 'utf8');

console.log(`✓ Synced ${posts.length} post(s) to blog.html`);
console.log(`  Posts: ${posts.map(p => p.file).join(', ')}`);

