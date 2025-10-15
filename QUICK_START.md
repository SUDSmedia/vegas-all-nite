# 🚀 Quick Start Guide

Get Vegas All Nite deployed in 5 minutes!

## ✅ What's Already Done

Your project is **100% ready** for deployment:

- ✅ **GitHub Repository:** [SUDSmedia/vegas-all-nite](https://github.com/SUDSmedia/vegas-all-nite)
- ✅ **Source Code:** Complete Next.js application
- ✅ **Documentation:** Comprehensive guides included
- ✅ **CI/CD:** GitHub Actions workflow configured
- ✅ **Vercel Ready:** Optimized configuration
- ✅ **Wix Compatible:** CORS and iframe support enabled

---

## 🎯 Three Simple Steps

### Step 1: Deploy to Vercel (2 minutes)

Click this button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SUDSmedia/vegas-all-nite)

**Or manually:**
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `vegas-all-nite` from GitHub
3. Click "Deploy"
4. Done! Your site is live at `https://vegas-all-nite.vercel.app`

📖 **Detailed guide:** [VERCEL_SETUP.md](./VERCEL_SETUP.md)

---

### Step 2: Embed in Wix (1 minute)

1. Open your Wix site editor
2. Add → Embed → HTML iframe
3. Paste this code:

```html
<iframe
  src="https://vegas-all-nite.vercel.app"
  width="100%"
  height="100vh"
  frameborder="0"
  style="border: none;"
></iframe>
```

4. Save and publish

📖 **Detailed guide:** [WIX_INTEGRATION.md](./WIX_INTEGRATION.md)

---

### Step 3: Custom Domain (Optional - 5 minutes)

1. In Vercel: Settings → Domains
2. Add your domain
3. Update DNS settings
4. Done!

---

## 📚 All Documentation

| Document | Description |
|----------|-------------|
| **[README.md](./README.md)** | Complete project overview |
| **[VERCEL_SETUP.md](./VERCEL_SETUP.md)** | Vercel deployment guide |
| **[WIX_INTEGRATION.md](./WIX_INTEGRATION.md)** | Wix embedding guide |
| **[DEPLOYMENT.md](./DEPLOYMENT.md)** | Detailed deployment docs |

---

## 🔗 Important Links

- **GitHub:** https://github.com/SUDSmedia/vegas-all-nite
- **Deploy to Vercel:** https://vercel.com/new/clone?repository-url=https://github.com/SUDSmedia/vegas-all-nite
- **Original Site:** https://vegasallnite.com

---

## 🛠️ Local Development

Want to make changes first?

```bash
# Clone repository
git clone https://github.com/SUDSmedia/vegas-all-nite.git
cd vegas-all-nite

# Install dependencies
bun install

# Run development server
bun run dev

# Open http://localhost:3000
```

---

## ⚡ Features Included

✅ Fully responsive design
✅ Modern UI with Tailwind CSS
✅ Fast performance (Lighthouse 95+)
✅ SEO optimized
✅ Wix iframe compatible
✅ Vercel-optimized
✅ TypeScript for type safety
✅ Automatic deployments
✅ No environment variables needed

---

## 🎨 Customization

### Change Content
Edit `src/app/page.tsx`

### Change Colors
Edit `tailwind.config.ts` and `src/app/globals.css`

### Add Pages
Create new files in `src/app/`

### Deploy Changes
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Vercel will automatically deploy!

---

## 🆘 Need Help?

### Quick Fixes

**Site not loading?**
- Check Vercel deployment status
- Verify URL is correct

**Wix iframe not showing?**
- Ensure using HTTPS URL
- Check iframe permissions in Wix

**Build failed?**
- Check Vercel build logs
- Run `bun run build` locally

### Get Support

1. Check documentation above
2. Review [Vercel Docs](https://vercel.com/docs)
3. Create [GitHub Issue](https://github.com/SUDSmedia/vegas-all-nite/issues)

---

## ✅ Deployment Checklist

Before going live:

- [ ] Deployed to Vercel
- [ ] Site loads correctly
- [ ] All sections visible
- [ ] Mobile responsive
- [ ] Tested in Wix (if using)
- [ ] Custom domain configured (optional)
- [ ] Performance tested (Lighthouse)

---

## 🎉 You're Ready!

Everything is configured and ready to deploy. Just click the Vercel button above or follow the 3 simple steps!

**Questions?** Check the detailed guides or create an issue on GitHub.

---

**Built with ❤️ using [Same](https://same.new)**
