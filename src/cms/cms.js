import CMS from "netlify-cms-app"

import "../normalize.css"
import "../style.css"

import BlogPostPreview from "./preview-templates/blog-post-preview"

CMS.registerPreviewTemplate('blog', BlogPostPreview)