# Quick Vercel Deployment Guide

Your GitHub repository is ready! Follow these steps to deploy to Vercel in under 5 minutes.

## 🚀 Deploy to Vercel (3 Steps)

### Step 1: Import Project

1. Go to **[vercel.com/new](https://vercel.com/new)**
2. Click **"Import Git Repository"**
3. Select **`vegas-all-nite`** from the list
   - If you don't see it, click "Import from GitHub" and authorize Vercel

### Step 2: Configure Project

Vercel will auto-detect Next.js. **No changes needed!**

Default settings are perfect:
- ✅ Framework: Next.js
- ✅ Root Directory: `./`
- ✅ Build Command: `bun run build`
- ✅ Output Directory: `.next`

### Step 3: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes
3. Done! 🎉

Your site will be live at: `https://vegas-all-nite.vercel.app`

---

## 🎨 Wix Integration (After Deployment)

### Quick Embed Code

Once deployed, add this to your Wix site:

```html
<iframe
  src="https://vegas-all-nite.vercel.app"
  width="100%"
  height="100vh"
  frameborder="0"
  style="border: none; min-height: 100vh;"
></iframe>
```

### How to Add in Wix:

1. Open Wix Editor
2. Click **Add (+)** → **Embed** → **HTML iframe**
3. Paste the code above
4. Adjust size to fit your page
5. Publish your Wix site

---

## 🔧 Custom Domain (Optional)

### In Vercel:

1. Go to **Settings** → **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `vegasallnite.com`)
4. Follow DNS instructions

### DNS Settings:

Add these records to your domain:

**For root domain (@):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 📊 Next Steps

After deployment, you can:

- ✅ View your site at the Vercel URL
- ✅ Monitor performance in Vercel Analytics
- ✅ Set up custom domain
- ✅ Configure environment variables (if needed)
- ✅ Enable automatic deployments (already active!)

---

## 🔄 Automatic Deployments

Every time you push to GitHub:
1. Vercel automatically builds
2. Runs tests (via GitHub Actions)
3. Deploys to production
4. Updates your live site

**No manual deployment needed!**

---

## 📱 Preview URLs

For each pull request, Vercel creates a preview URL:
- Test changes before merging
- Share with team for review
- Automatic cleanup after merge

---

## 🆘 Troubleshooting

### Build Failed?

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify no TypeScript errors locally

### Site Not Loading?

1. Clear browser cache
2. Check Vercel deployment status
3. Verify DNS settings (if using custom domain)

### Wix Iframe Issues?

1. Ensure Vercel deployment is complete
2. Check CORS headers in `next.config.js`
3. Verify iframe URL is HTTPS
4. Check Wix iframe settings allow external content

---

## 📞 Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **GitHub Repo:** [github.com/SUDSmedia/vegas-all-nite](https://github.com/SUDSmedia/vegas-all-nite)
- **Issues:** Create an issue on GitHub

---

**Ready to deploy?** Click here: **[Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/SUDSmedia/vegas-all-nite)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SUDSmedia/vegas-all-nite)
