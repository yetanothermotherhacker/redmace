# RedMace - Cybersecurity Team Website

Hacker-style website for a cybersecurity team with Matrix-inspired binary rain effect.

## Features

- Black and green color scheme
- Animated binary (0/1) background effect
- Terminal-style interface
- Responsive design
- Smooth animations and hover effects

## Deployment to GitHub Pages

1. Initialize git repository (if not already done):
```bash
git init
```

2. Add all files:
```bash
git add .
```

3. Commit your changes:
```bash
git commit -m "Initial commit: RedMace cybersecurity team website"
```

4. Create a new repository on GitHub (name it whatever you want, e.g., "redmace")

5. Add remote and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

6. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"

7. Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Customization

- Edit team member names and roles in `index.html`
- Modify colors in `style.css` (search for `#00ff00` to change green color)
- Adjust binary rain speed in `script.js` (change interval value)
- Add your contact information in the Contact section

## File Structure

```
.
├── index.html    # Main HTML file
├── style.css     # Styling and animations
├── script.js     # Binary rain effect and interactions
└── README.md     # This file
```

## License

Free to use and modify for your team.
