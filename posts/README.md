# Blog Posts

This directory contains all your blog posts written in Markdown.

## How to Add a New Post

1. **Create a new Markdown file** in this directory (e.g., `my-new-post.md`)

2. **Write your post** using Markdown syntax. You can use:
   - Headers (`#`, `##`, `###`)
   - **Bold** and *italic* text
   - [Links](https://example.com)
   - Lists (ordered and unordered)
   - Code blocks
   - Images
   - And more!

3. **Add the post to `posts.json`**:
   ```json
   {
       "file": "my-new-post.md",
       "title": "My New Post Title",
       "date": "January 2025"
   }
   ```
   
   Add this entry to the array in `posts.json`. Posts are displayed in the order they appear in the JSON file.

4. **Sync to blog.html**: Run the sync script to update the blog page:
   ```bash
   python3 sync-blog.py
   ```
   
   This embeds the markdown content into `blog.html` so it works when opening the file directly (no server needed!).

## Example Post Structure

```markdown
# My Post Title

**Date:** January 2025

Your content here...

## Section Header

More content...
```

That's it! Your new post will appear on the blog page and work even when opening the HTML file directly.
