import PropTypes from "prop-types";
import React, { useState } from 'react';
const PASSWORD = 'ChristIsKing'; 

export default function AddProjectModal({ isOpen, onClose, onAddProject }) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tools: '',
    repoLink: '',
    liveLink: '',
  });
  const [loading, setLoading] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchImage = async (query) => {
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=placeholder&per_page=1`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        return data.results[0].urls.small;
      }
    } catch (error) {
      console.error('Unsplash API failed, using fallback');
    }
    // Fallback to Lorem Picsum
    return `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const imgSrc = await fetchImage(formData.title);
    const newProject = { ...formData, imgSrc };
    onAddProject(newProject);
    setFormData({ title: '', description: '', tools: '', repoLink: '', liveLink: '' });
    setIsAuthenticated(false);
    setPassword('');
    onClose();
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        {!isAuthenticated ? (
          <form onSubmit={handlePasswordSubmit}>
            <h2 className="text-xl font-bold mb-4">Enter Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              placeholder="Password"
              required
            />
            <div className="flex justify-end space-x-2">
              <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <h2 className="text-xl font-bold mb-4">Add New Project</h2>
            <input
              name="title"
              value={formData.title}
              onChange={handleFormChange}
              className="w-full p-2 border rounded mb-2"
              placeholder="Title"
              required
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleFormChange}
              className="w-full p-2 border rounded mb-2"
              placeholder="Description"
              required
            />
            <input
              name="tools"
              value={formData.tools}
              onChange={handleFormChange}
              className="w-full p-2 border rounded mb-2"
              placeholder="Tools used"
              required
            />
            <input
              name="repoLink"
              value={formData.repoLink}
              onChange={handleFormChange}
              className="w-full p-2 border rounded mb-2"
              placeholder="GitHub Repo Link"
              required
            />
            <input
              name="liveLink"
              value={formData.liveLink}
              onChange={handleFormChange}
              className="w-full p-2 border rounded mb-2"
              placeholder="Live Demo Link"
              required
            />
            <div className="flex justify-end space-x-2">
              <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
              <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-500 text-white rounded">
                {loading ? 'Adding...' : 'Add Project'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

AddProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddProject: PropTypes.func.isRequired,
};
