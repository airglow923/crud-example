import http from '../http-common.js';

const TutorialDataService = {
  getAll: () => http.get('/tutorials'),

  get: (id) => http.get(`/tutorials/${id}`),

  create: (data) => http.post('/tutorials', data),

  update: (id, data) => http.put(`/tutorials/${id}`, data),

  delete: (id) => http.delete(`/tutorials/${id}`),

  deleteAll: () => http.delete('/tutorials'),

  findByTitle: (title) => http.get(`/tutorials?title=${title}`),
};

export default TutorialDataService;
