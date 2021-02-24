import Api from './Api';

export default {
  list: () => Api.get('/users'),

  search: (email) => Api.get(`/users?email=${email}`),

  register: (data) => Api.post('/users', data),

  registerMultiple: (data) => Api.post('/users', data),

  unregister: (id) => Api.delete(`/users/${id}`),

  unregisterAll: () => Api.delete('/users'),

  update: (id, data) => Api.patch(`/users/${id}`, data),
};
