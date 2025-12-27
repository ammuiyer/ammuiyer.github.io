#!/usr/bin/env node

/**
 * Helper script to update blog.html with markdown posts from the posts/ directory
 * Run this after creating/editing markdown files: node update-blog.js
 */

const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'posts');
const blogHtmlPath = path.join(__dirname, 'blog.html');

// Read all markdown files from posts directory
const markdownFiles = fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.md') && file !== 'README.md')
    .sort()
    .reverse(); // Newest first

// Read blog.html
let blogHtml = fs.readFileSync(blogHtmlPath, 'utf8');

// Build postsData object
let postsDataContent = '        const postsData = {\n';
const posts = [];

for (const file of markdownFiles) {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Escape backticks and backslashes for JavaScript string
    const escapedContent = content
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\${/g, '\\${');
    
    // Extract title from first line (usually # Title)
    const firstLine = content.split('\n')[0];
    const title = firstLine.replace(/^#+\s*/, '').trim() || file.replace('.md', '');
    
    // Try to extract date from content (look for **Date:** pattern)
    let date = 'Unknown date';
    const dateMatch = content.match(/\*\*Date:\*\*\s*(.+)/i) || content.match(/Date:\s*(.+)/i);
    if (dateMatch) {
        date = dateMatch[1].trim();
    }
    
    postsDataContent += `            '${file}': \`${escapedContent}\`,\n`;
    posts.push({ file, title, date });
}

postsDataContent += '        };\n\n';

// Build posts array
let postsArrayContent = '        const posts = [\n';
posts.forEach((post, index) => {
    postsArrayContent += `            { \n                file: '${post.file}', \n                title: '${post.title.replace(/'/g, "\\'")}', \n                date: '${post.date.replace(/'/g, "\\'")}' \n            }`;
    if (index < posts.length - 1) postsArrayContent += ',';
    postsArrayContent += '\n';
});
postsArrayContent += '        ];\n';

// Replace the postsData and posts sections in blog.html
const postsDataRegex = /const postsData = \{[\s\S]*?\};\n\n/;
const postsRegex = /const posts = \[[\s\S]*?\];\n/;

blogHtml = blogHtml.replace(postsDataRegex, postsDataContent);
blogHtml = blogHtml.replace(postsRegex, postsArrayContent);

// Write updated blog.html
fs.writeFileSync(blogHtmlPath, blogHtml, 'utf8');

console.log(`✅ Updated blog.html with ${posts.length} post(s):`);
posts.forEach(post => {
    console.log(`   - ${post.title} (${post.file})`);
});

