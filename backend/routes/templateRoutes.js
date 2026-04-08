import express from 'express';
import Template from '../models/Template.js';
import { authMiddleware } from './authRoutes.js';

const router = express.Router();

// Admin Middleware Check
const adminMiddleware = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ msg: 'Admin access only' });
  }
};

// GET all active templates
router.get('/', async (req, res) => {
  try {
    const templates = await Template.find({ isActive: true }).select('-notionUrl -caseStudyContent');
    res.json(templates);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// GET template by ID (with case study content, without secret URL)
router.get('/:id', async (req, res) => {
  try {
    const template = await Template.findById(req.params.id).select('-notionUrl');
    if (!template) return res.status(404).json({ msg: 'Template not found' });
    res.json(template);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Admin Routes
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const template = new Template(req.body);
    await template.save();
    res.json(template);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const template = await Template.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(template);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    await Template.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Template deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

export default router;
