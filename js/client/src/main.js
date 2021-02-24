import { createApp } from 'vue';
// import App from './App';
import UserList from './components/UserList';
import router from './router';

// createApp(App)
createApp(UserList)
  .use(router)
  .mount('#app');
