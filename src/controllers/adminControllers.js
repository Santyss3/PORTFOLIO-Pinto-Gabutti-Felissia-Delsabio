const { getProjects, saveProjects } = require('../models/projectsModel');

module.exports = {
  admin: (req, res) => {
    const projects = getProjects();
    res.render('admin/admin', { projects });
  },

  createView: (req, res) => res.render('admin/create'),

  createItem: (req, res) => {
    const projects = getProjects();
    const newProject = {
      id: Date.now(),
      nombre: req.body.nombre,
      descripcion: req.body.descripcion
    };
    projects.push(newProject);
    saveProjects(projects);
    res.redirect('/admin');
  },

  editView: (req, res) => {
    const projects = getProjects();
    const project = projects.find(p => p.id == req.params.id);
    res.render('admin/edit', { project });
  },

  editItem: (req, res) => {
    const projects = getProjects();
    const index = projects.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
      projects[index].nombre = req.body.nombre;
      projects[index].descripcion = req.body.descripcion;
      saveProjects(projects);
    }
    res.redirect('/admin');
  },

  delete: (req, res) => {
    const projects = getProjects();
    const filtered = projects.filter(p => p.id != req.params.id);
    saveProjects(filtered);
    res.redirect('/admin');
  }
};
