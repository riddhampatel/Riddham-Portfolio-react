/**
 * API Client Utility
 * Centralized API calls with authentication
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

class APIClient {
  constructor() {
    this.baseURL = API_URL;
    this.token = localStorage.getItem('accessToken');
  }

  /**
   * Get authorization headers
   */
  getHeaders(contentType = 'application/json') {
    const headers = {
      'Content-Type': contentType,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  /**
   * Update token
   */
  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('accessToken', token);
    } else {
      localStorage.removeItem('accessToken');
    }
  }

  /**
   * Make API request
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      headers: this.getHeaders(options.contentType),
    };

    try {
      const response = await fetch(url, config);

      // Handle 401 - Token expired
      if (response.status === 401) {
        this.setToken(null);
        window.location.href = '/login';
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error(`API Error: ${error.message}`);
      throw error;
    }
  }

  // GET request
  get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  // POST request
  post(endpoint, body) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  // PUT request
  put(endpoint, body) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  // PATCH request
  patch(endpoint, body) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }

  // DELETE request
  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }

  // ============ AUTH ============

  register(data) {
    return this.post('/auth/register', data);
  }

  login(email, password) {
    return this.post('/auth/login', { email, password });
  }

  logout() {
    return this.post('/auth/logout', {});
  }

  getCurrentUser() {
    return this.get('/auth/me');
  }

  refreshToken(refreshToken) {
    return this.post('/auth/refresh-token', { refreshToken });
  }

  // ============ PROJECTS ============

  getProjects(params = {}) {
    const query = new URLSearchParams(params);
    return this.get(`/projects?${query}`);
  }

  getProject(id) {
    return this.get(`/projects/${id}`);
  }

  createProject(data) {
    return this.post('/projects', data);
  }

  updateProject(id, data) {
    return this.put(`/projects/${id}`, data);
  }

  deleteProject(id) {
    return this.delete(`/projects/${id}`);
  }

  // ============ SKILLS ============

  getSkills(params = {}) {
    const query = new URLSearchParams(params);
    return this.get(`/skills?${query}`);
  }

  createSkill(data) {
    return this.post('/skills', data);
  }

  updateSkill(id, data) {
    return this.put(`/skills/${id}`, data);
  }

  deleteSkill(id) {
    return this.delete(`/skills/${id}`);
  }

  // ============ BLOGS ============

  getBlogs(params = {}) {
    const query = new URLSearchParams(params);
    return this.get(`/blogs?${query}`);
  }

  getBlog(id) {
    return this.get(`/blogs/${id}`);
  }

  createBlog(data) {
    return this.post('/blogs', data);
  }

  updateBlog(id, data) {
    return this.put(`/blogs/${id}`, data);
  }

  deleteBlog(id) {
    return this.delete(`/blogs/${id}`);
  }

  publishBlog(id) {
    return this.patch(`/blogs/${id}/publish`, {});
  }

  // ============ CONTACT ============

  submitContactMessage(data) {
    return this.post('/contact', data);
  }

  getContactMessages() {
    return this.get('/contact');
  }

  markMessageAsRead(id) {
    return this.patch(`/contact/${id}/read`, {});
  }

  respondToMessage(id, response) {
    return this.patch(`/contact/${id}/respond`, { response });
  }

  deleteMessage(id) {
    return this.delete(`/contact/${id}`);
  }

  // ============ ANALYTICS ============

  getAnalytics(params = {}) {
    const query = new URLSearchParams(params);
    return this.get(`/analytics?${query}`);
  }
}

export default new APIClient();
