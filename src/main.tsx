import 'sanitize.css';
Promise.all([import('@/Root'), import('@/AppWithErrorHandling')]).then(([{ default: render }, { default: App }]) => {
  render(App);
});
export {};
