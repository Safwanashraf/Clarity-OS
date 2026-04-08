import mongoose from 'mongoose';

const TemplateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  description: { type: String, required: true }, // Long SEO description
  price: { type: Number, required: true },
  category: { type: String, required: true }, // e.g., 'Productivity', 'Finance'
  features: [{ type: String }],
  coverImage: { type: String },
  screenshots: [{ type: String }],
  demoVideoUrl: { type: String },
  caseStudyContent: { type: String }, // Can store JSON stringification of blocks or robust HTML
  notionUrl: { type: String, required: true }, // Secret duplicated link
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Template', TemplateSchema);
