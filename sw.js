<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <title>HireFast AI | Professional Resume Builder</title>
    <meta name="description" content="The world's most advanced AI career engine. Build ATS-optimized resumes instantly." />
    
    <!-- PWA Meta Tags -->
    <meta name="theme-color" content="#6366f1" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <link rel="manifest" href="manifest.json">
    
    <!-- Icons -->
    <link rel="apple-touch-icon" href="https://cdn-icons-png.flaticon.com/512/9437/9437567.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="https://cdn-icons-png.flaticon.com/512/9437/9437567.png" />
  </head>
  <body>
    <div id="root"></div>
    <!-- Entry point for the React application -->
    <script type="module" src="src/main.tsx"></script>
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          // Register the sw.js using a relative path
          navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW registered in root'))
            .catch(err => console.error('SW registration failed:', err));
        });
      }
    </script>
  </body>
</html>
