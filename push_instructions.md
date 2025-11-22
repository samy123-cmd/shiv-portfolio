# Steps to Push the `shiv-portfolio` Folder to GitHub

These instructions assume you have already initialized a Git repository in the project folder (if not, see step 1).

## 1. Initialize Git (if not done yet)
```bash
cd C:\Users\pmish\Downloads\shiv-portfolio
git init
```

## 2. Add All Files
```bash
git add .
```

## 3. Commit Your Changes
```bash
git commit -m "Initial commit – set up portfolio with visual & interactive enhancements"
```

## 4. Add the Remote Repository
```bash
git remote add origin https://github.com/samy123-cmd/shiv-portfolio.git
```

## 5. Verify the Remote URL (optional)
```bash
git remote -v
```
You should see something like:
```
origin  https://github.com/samy123-cmd/shiv-portfolio.git (fetch)
origin  https://github.com/samy123-cmd/shiv-portfolio.git (push)
```

## 6. Push to GitHub
```bash
git push -u origin master
```
If your default branch on GitHub is `main`, you can push to `main` instead:
```bash
git push -u origin main
```
You may be prompted for your GitHub credentials or a personal access token.

## 7. Set the Upstream Branch (if you used a different branch name)
```bash
git branch -M main   # rename local branch to 'main' if needed
git push -u origin main
```

## 8. Verify on GitHub
Open the repository URL in your browser:
```
https://github.com/samy123-cmd/shiv-portfolio
```
You should see all your project files.

---
**Tip:** After the initial push, for subsequent changes you can simply run:
```bash
git add .
git commit -m "Your message"
git push
```
