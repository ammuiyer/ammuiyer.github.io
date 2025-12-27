#!/usr/bin/env python3

"""
Sync script to update blog.html with markdown content from posts/ directory
This allows the blog to work when opening HTML files directly (file:// protocol)

Usage: python sync-blog.py
"""

import json
import os
import re
from pathlib import Path

# Get the directory where this script is located
script_dir = Path(__file__).parent
posts_dir = script_dir / 'posts'
blog_html_path = script_dir / 'blog.html'

# Read posts.json to get the list of posts
posts_json_path = posts_dir / 'posts.json'
posts = []

if posts_json_path.exists():
    with open(posts_json_path, 'r', encoding='utf-8') as f:
        posts = json.load(f)
else:
    print('posts/posts.json not found. Reading all .md files from posts/ directory...')
    md_files = [f for f in os.listdir(posts_dir) if f.endswith('.md') and f != 'README.md']
    posts = []
    for file in md_files:
        title = file.replace('.md', '').replace('-', ' ').title()
        posts.append({
            'file': file,
            'title': title,
            'date': 'January 2025'  # Default date
        })

# Read all markdown files
posts_data = {}
for post in posts:
    md_path = posts_dir / post['file']
    if md_path.exists():
        with open(md_path, 'r', encoding='utf-8') as f:
            posts_data[post['file']] = f.read()
    else:
        print(f"Warning: {post['file']} not found, skipping...")

# Read blog.html
with open(blog_html_path, 'r', encoding='utf-8') as f:
    blog_html = f.read()

# Generate postsData object as a string
posts_data_lines = []
for file, content in posts_data.items():
    # Escape backticks and handle multiline strings
    escaped_content = content.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    posts_data_lines.append(f"            '{file}': `{escaped_content}`")

posts_data_str = ',\n'.join(posts_data_lines)

# Generate posts array as a string
posts_lines = []
for post in posts:
    title = post['title'].replace("'", "\\'")
    posts_lines.append(f"""            {{ 
                file: '{post['file']}', 
                title: '{title}', 
                date: '{post['date']}' 
            }}""")

posts_str = ',\n'.join(posts_lines)

# Replace postsData object
posts_data_pattern = r'const postsData = \{[\s\S]*?\};'
blog_html = re.sub(posts_data_pattern, f'const postsData = {{\n{posts_data_str}\n        }};', blog_html)

# Replace posts array
posts_pattern = r'const posts = \[[\s\S]*?\];'
blog_html = re.sub(posts_pattern, f'const posts = [\n{posts_str}\n        ];', blog_html)

# Write updated blog.html
with open(blog_html_path, 'w', encoding='utf-8') as f:
    f.write(blog_html)

print(f'✓ Synced {len(posts)} post(s) to blog.html')
print(f'  Posts: {", ".join([p["file"] for p in posts])}')

