export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/sw.js');
    } catch (error) {
      console.log(
        'service worker /sw.js could not be registered: error message: '
      );
    }
  }
};
