# Deployment Guide

This guide covers deploying Vegas All Nite to Vercel, GitHub, and integrating with Wix.

## Prerequisites

- Node.js 18+ or Bun installed
- Git installed
- GitHub account
- Vercel account (free tier is fine)
- Wix website (if integrating)

## Step 1: Push to GitHub

### Option A: Using GitHub CLI

```bash
# Navigate to project directory
cd vegas-all-nite

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Vegas All Nite website"

# Create GitHub repository and push
gh repo create vegas-all-nite --public --source=. --remote=origin --push
```

### Option B: Using GitHub Web Interface

1. Go to [github.com](https://github.com) and create a new repository
2. Name it `vegas-all-nite`
3. Don't initialize with README (we already have one)
4. Run these commands:

```bash
cd vegas-all-nite
git init
git add .
git commit -m "Initial commit: Vegas All Nite website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vegas-all-nite.git
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your `vegas-all-nite` repository
4. Configure project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./`
   - **Build Command:** `bun run build` (or leave default)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `bun install` (or leave default)
5. Click "Deploy"
6. Wait 2-3 minutes for deployment to complete
7. Your site will be live at `https://vegas-all-nite.vercel.app`

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### Vercel Environment Variables

Currently, no environment variables are needed. If you add backend features:

1. Go to your project in Vercel dashboard
2. Settings → Environment Variables
3. Add variables as needed

## Step 3: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your custom domain (e.g., `vegasallnite.com`)
4. Update your domain's DNS settings:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `cname.vercel-dns.com`
5. Wait for DNS propagation (up to 48 hours)

## Step 4: Integrate with Wix

### Method 1: Full-Page Iframe (Recommended)

1. **Deploy to Vercel first** (complete steps above)
2. In Wix Editor:
   - Click "Add" (+) button
   - Select "Embed" → "HTML iframe"
3. Paste this code:

```html
<iframe
  src="https://vegas-all-nite.vercel.app"
  width="100%"
  height="100%"
  frameborder="0"
  scrolling="yes"
  style="min-height: 100vh; border: none;"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

4. Adjust iframe settings:
   - Width: 100%
   - Height: Set to viewport height or specific pixel value
   - Position: Dock to page edges

### Method 2: Section Embed

To embed only specific sections:

1. Create a new page in your Next.js app for each section
2. Deploy updates to Vercel
3. Use separate iframes in Wix for each section

### Method 3: Wix Velo (Advanced)

For dynamic integration using Wix Velo:

```javascript
// In Wix Code/Velo
import wixWindow from 'wix-window';

$w.onReady(function () {
  // Communicate with iframe
  const iframe = $w('#iframe1');

  iframe.onMessage((event) => {
    console.log('Message from iframe:', event.data);

    // Handle messages from your Next.js app
    if (event.data.type === 'navigation') {
      wixWindow.scrollTo(0, 0);
    }
  });

  // Send messages to iframe
  iframe.postMessage({ type: 'init', data: 'Hello from Wix' });
});
```

## Step 5: Continuous Deployment

### Automatic Deployments

Vercel automatically deploys when you push to GitHub:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```
3. Vercel automatically builds and deploys
4. Check deployment status in Vercel dashboard

### Preview Deployments

For testing before production:

1. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
2. Make changes and push:
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```
3. Vercel creates a preview deployment
4. Test at the preview URL
5. Merge to main when ready

## Step 6: Performance Optimization

### Vercel Analytics (Optional)

1. In Vercel dashboard → Analytics
2. Enable Web Analytics
3. View real-time performance metrics

### Caching Strategy

Vercel automatically caches:
- Static pages: Cached at edge
- Images: Optimized and cached
- API routes: Configurable cache headers

### CDN Configuration

Vercel's global CDN is automatically enabled:
- 70+ edge locations worldwide
- Automatic HTTPS
- DDoS protection

## Troubleshooting

### Issue: Site not loading in Wix iframe

**Solution:**
1. Check `next.config.js` has CORS headers
2. Verify `X-Frame-Options` is set to `ALLOWALL`
3. Clear browser cache
4. Check Wix Content Security Policy settings

### Issue: Images not loading

**Solution:**
1. Ensure all image URLs are HTTPS
2. Check `next.config.js` remote patterns
3. Use `unoptimized: true` for external images

### Issue: Build failing on Vercel

**Solution:**
1. Check build logs in Vercel dashboard
2. Ensure all dependencies in `package.json`
3. Verify Node.js version compatibility
4. Check for TypeScript errors

### Issue: Slow loading in iframe

**Solution:**
1. Enable lazy loading for images
2. Reduce initial bundle size
3. Use Vercel Analytics to identify bottlenecks
4. Consider code splitting

## Monitoring & Maintenance

### Regular Updates

```bash
# Update dependencies
bun update

# Check for security vulnerabilities
bun audit

# Push updates
git add package.json bun.lock
git commit -m "Update dependencies"
git push origin main
```

### Backup Strategy

1. GitHub serves as primary backup
2. Vercel keeps deployment history
3. Download production build occasionally:
   ```bash
   vercel pull
   ```

### Performance Monitoring

1. Use Vercel Analytics
2. Monitor Core Web Vitals
3. Check lighthouse scores regularly
4. Review error logs in Vercel dashboard

## Security Checklist

- ✅ HTTPS enforced (automatic on Vercel)
- ✅ Environment variables secured
- ✅ Dependencies updated regularly
- ✅ No sensitive data in client code
- ✅ CORS configured properly
- ✅ Content Security Policy set

## Support Resources

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **Wix Developer Center:** [dev.wix.com](https://dev.wix.com)
- **GitHub Support:** [docs.github.com](https://docs.github.com)

## Quick Reference

| Action | Command |
|--------|---------|
| Local dev | `bun run dev` |
| Build | `bun run build` |
| Deploy | `vercel --prod` |
| Check status | `vercel ls` |
| View logs | `vercel logs` |
| Pull env | `vercel env pull` |

---

**Questions?** Check the main README.md or create an issue on GitHub.
