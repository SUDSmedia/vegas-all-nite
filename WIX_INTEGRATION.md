# Wix Integration Guide

Complete guide to embedding Vegas All Nite website in your Wix site.

## 📋 Prerequisites

- ✅ Site deployed to Vercel
- ✅ Vercel deployment URL (e.g., `https://vegas-all-nite.vercel.app`)
- ✅ Access to Wix Editor

---

## 🎯 Integration Methods

### Method 1: Full-Page Embed (Recommended)

**Best for:** Standalone pages, landing pages

#### Steps:

1. **Open Wix Editor**
   - Go to your Wix dashboard
   - Click "Edit Site"

2. **Add New Page** (optional)
   - Pages menu → Add Page
   - Name it "Vegas All Nite" or similar

3. **Add HTML iframe Element**
   - Click **Add (+)** button
   - Navigate to **Embed** → **HTML iframe**
   - Or search for "iframe" in Add panel

4. **Configure iframe**
   - Click on the iframe element
   - Click **"Enter Code"**
   - Paste this code:

```html
<iframe
  id="vegasAllNite"
  src="https://vegas-all-nite.vercel.app"
  width="100%"
  height="100vh"
  frameborder="0"
  scrolling="yes"
  loading="eager"
  style="
    border: none;
    min-height: 100vh;
    width: 100%;
    display: block;
  "
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
></iframe>
```

5. **Resize iframe**
   - Drag edges to fit page
   - Or set specific dimensions in Properties panel

6. **Position iframe**
   - Drag to desired location
   - Recommend: Dock to page edges for full coverage

7. **Save and Publish**

---

### Method 2: Section Embed

**Best for:** Embedding specific sections within existing pages

#### Example: Embed Gallery Only

1. Create a new page in Next.js for just the gallery
2. Deploy to Vercel
3. Use smaller iframe:

```html
<iframe
  src="https://vegas-all-nite.vercel.app/gallery"
  width="100%"
  height="600px"
  frameborder="0"
  style="border: none;"
></iframe>
```

---

### Method 3: Wix Velo (Advanced)

**Best for:** Dynamic content, custom interactions

#### Setup:

1. **Enable Wix Velo**
   - In Wix Editor: Dev Mode → Turn on Developer Tools

2. **Add iframe to page**
   - Add HTML iframe element
   - Give it an ID: `vegasIframe`

3. **Add Velo Code**

**Page Code:**
```javascript
import wixWindow from 'wix-window';

$w.onReady(function () {
  const iframe = $w('#vegasIframe');

  // Listen for messages from iframe
  iframe.onMessage((event) => {
    console.log('Message from Vegas All Nite:', event.data);

    // Handle navigation
    if (event.data.action === 'navigate') {
      wixWindow.scrollTo(0, event.data.y || 0);
    }

    // Handle booking request
    if (event.data.action === 'book') {
      // Open Wix booking form or custom handler
      openBookingForm();
    }
  });

  // Send initialization message
  iframe.postMessage({
    type: 'init',
    wixData: {
      siteName: 'My Wix Site',
      userId: wixWindow.getCurrentUser().id
    }
  });
});

function openBookingForm() {
  // Your booking logic here
  wixWindow.openLightbox('BookingForm');
}
```

**In Next.js (src/app/page.tsx):**
```typescript
useEffect(() => {
  // Listen for messages from Wix
  window.addEventListener('message', (event) => {
    if (event.data.type === 'init') {
      console.log('Wix initialized:', event.data.wixData);
    }
  });

  // Send message to Wix
  const sendToWix = (action: string, data: any) => {
    window.parent.postMessage({ action, ...data }, '*');
  };

  // Example: Send navigation event
  sendToWix('navigate', { y: 500 });
}, []);
```

---

## 🎨 Styling Options

### Responsive iframe

Make iframe responsive to different screen sizes:

```html
<style>
  @media (max-width: 768px) {
    #vegasAllNite {
      height: 100vh;
    }
  }

  @media (min-width: 769px) {
    #vegasAllNite {
      height: 100vh;
    }
  }
</style>

<iframe id="vegasAllNite" src="..." ></iframe>
```

### Remove Scrollbars

If you want seamless integration:

```html
<iframe
  src="https://vegas-all-nite.vercel.app"
  scrolling="no"
  style="
    overflow: hidden;
    height: 100vh;
    width: 100%;
  "
></iframe>
```

### Loading Placeholder

Show loading state:

```html
<div id="loading" style="
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
">
  Loading Vegas All Nite...
</div>

<iframe
  src="https://vegas-all-nite.vercel.app"
  onload="document.getElementById('loading').style.display='none'"
></iframe>
```

---

## 🔧 Common Issues & Solutions

### Issue 1: iframe Not Showing

**Solutions:**
- ✅ Check Vercel deployment is live
- ✅ Verify URL is correct (https://)
- ✅ Check Wix iframe permissions
- ✅ Disable Wix security restrictions temporarily

### Issue 2: Content Cut Off

**Solutions:**
- ✅ Increase iframe height
- ✅ Set `scrolling="yes"`
- ✅ Remove height constraints

### Issue 3: Mobile Not Responsive

**Solutions:**
- ✅ Use `width="100%"`
- ✅ Add viewport meta tag in Next.js
- ✅ Test on actual mobile device
- ✅ Use Wix mobile editor

### Issue 4: Slow Loading

**Solutions:**
- ✅ Use `loading="eager"` attribute
- ✅ Optimize images in Next.js
- ✅ Enable Vercel Edge Caching
- ✅ Reduce bundle size

### Issue 5: Security Warnings

**Solutions:**
- ✅ Ensure HTTPS (not HTTP)
- ✅ Check CORS settings in next.config.js
- ✅ Verify Content Security Policy
- ✅ Use proper sandbox attributes

---

## 📊 Advanced Features

### Track iframe Interactions

In Wix Velo:

```javascript
$w('#vegasIframe').onMessage((event) => {
  // Track with Wix Analytics
  wixAnalytics.trackEvent('vegasAllNite', {
    action: event.data.action,
    timestamp: new Date()
  });
});
```

### Dynamic URL Based on User

```javascript
$w.onReady(function () {
  const user = wixWindow.getCurrentUser();
  const iframe = $w('#vegasIframe');

  // Custom URL with user data
  const customUrl = `https://vegas-all-nite.vercel.app?user=${user.id}`;
  iframe.src = customUrl;
});
```

### Auto-resize iframe

```javascript
$w('#vegasIframe').onMessage((event) => {
  if (event.data.action === 'resize') {
    $w('#vegasIframe').height = event.data.height;
  }
});
```

In Next.js:
```typescript
useEffect(() => {
  const sendHeight = () => {
    const height = document.body.scrollHeight;
    window.parent.postMessage({
      action: 'resize',
      height
    }, '*');
  };

  sendHeight();
  window.addEventListener('resize', sendHeight);
}, []);
```

---

## 🎯 Best Practices

1. **Always use HTTPS**
   - Vercel provides this automatically

2. **Test on Multiple Devices**
   - Desktop, tablet, mobile
   - Different browsers

3. **Optimize Performance**
   - Enable lazy loading
   - Compress images
   - Minimize JavaScript

4. **Maintain Aspect Ratio**
   - Use viewport units (vh, vw)
   - Or fixed pixel values

5. **Security**
   - Use sandbox attribute
   - Limit iframe permissions
   - Verify CORS settings

6. **User Experience**
   - Add loading indicators
   - Handle errors gracefully
   - Ensure fast load times

---

## 📱 Mobile Optimization

### Wix Mobile Editor

1. Switch to Mobile view in Wix Editor
2. Adjust iframe size for mobile
3. Test scrolling behavior
4. Check touch interactions

### Mobile-Specific Code

```html
<!-- Desktop -->
<div class="desktop-only">
  <iframe src="..." height="100vh"></iframe>
</div>

<!-- Mobile -->
<div class="mobile-only">
  <iframe src="..." height="120vh"></iframe>
</div>
```

---

## 🔒 Security Checklist

- ✅ HTTPS enabled (Vercel default)
- ✅ CORS headers configured
- ✅ X-Frame-Options set to ALLOWALL
- ✅ Content Security Policy configured
- ✅ Sandbox attributes on iframe
- ✅ No sensitive data exposed
- ✅ Regular security updates

---

## 📞 Support

### Documentation
- [Wix Velo Docs](https://www.wix.com/velo/reference/)
- [Wix iframe Guide](https://support.wix.com/en/article/embedding-an-iframe-in-your-site)
- [Next.js Docs](https://nextjs.org/docs)

### Troubleshooting
1. Check browser console for errors
2. Verify Vercel deployment status
3. Test iframe code in CodePen first
4. Contact Wix support for platform issues

---

## ✅ Testing Checklist

Before going live:

- [ ] iframe loads correctly
- [ ] All sections visible
- [ ] Navigation works
- [ ] Buttons clickable
- [ ] Forms functional (if any)
- [ ] Mobile responsive
- [ ] Fast loading (< 3s)
- [ ] No console errors
- [ ] Works in all major browsers
- [ ] Analytics tracking (optional)

---

**Need help?** Create an issue on [GitHub](https://github.com/SUDSmedia/vegas-all-nite/issues)
