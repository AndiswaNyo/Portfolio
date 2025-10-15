/* --- Mobile nav toggle --- */
const toggleBtn = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(open));
  });
}

/* --- Smooth in-page scroll --- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav.classList.remove('open');
      toggleBtn?.setAttribute('aria-expanded', 'false');
    }
  });
});

/* --- Footer year --- */
document.getElementById('year').textContent = new Date().getFullYear();

/* --- Projects data (edit this array) --- */
const PROJECTS = [
  {
    title: "Hydropower Generation Predictor",
    desc: "Regression models (KNN, Random Forest, Ensemble) to predict Drakensberg Gen Unit Hours.",
    tags: ["Hyperparameter Tuning"],
    github: "https://github.com/AndiswaNyo/Projects/tree/main/Renewable%20energy"
  },
  {
    title: "KPI Chatbot",
    desc: "Natural-language KPI queries: SQLite + Python pipeline; returns charts and summaries. (A link to the code will be provided once the university’s marking process is complete.)",
    tags: ["SQLite", "NLP", "FastAPI"],
    github: "https://github.com/your-github/kpi-chatbot"
  },
  {
    title: "NER Assignment (RNN & Transformer)",
    desc: "PyTorch models for Named Entity Recognition with early stopping, metrics, and masking.",
    tags: ["PyTorch", "NLP"],
    github: "https://github.com/your-github/ner-transformer"
  },
  {
    title: "Image Classification with CNN",
    desc: "CNN image classification pipeline with preprocessing, data augmentation, early stopping, and performance visualization.",
    tags: ["Python • TensorFlow"],
    github: "https://github.com/AndiswaNyo/Projects/tree/main/Detection%20of%20Pneumonia%20Using%20CNN"
  }
];

/* --- Render projects --- */
const grid = document.getElementById('projects-grid');

function projectCard({ title, desc, tags, github }) {
  const card = document.createElement('article');
  card.className = 'card project';
  card.innerHTML = `
    <h3>${title}</h3>
    <p>${desc}</p>
    <div class="links">
      <a class="btn btn-ghost" href="${github}" target="_blank" rel="noopener">GitHub Code</a>
      <span class="badge">${tags.join(" • ")}</span>
    </div>
  `;
  return card;
}

if (grid) {
  PROJECTS.forEach(p => grid.appendChild(projectCard(p)));
}

/* --- Blog data --- */
const BLOG_POSTS = [
  {
    slug: "mindful-deep-work",
    title: "Mindful Deep Work",
    date: "2025-01-20",
    excerpt:
      "How micro-rituals (breathing, journaling, phone parking) helped me ship models without burning out.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    read: "#", // later: link to #blog/mindful-deep-work or real page
  },
  {
    slug: "sql-muscle-memory",
    title: "SQL Muscle Memory in 7 Days",
    date: "2025-01-12",
    excerpt:
      "My daily reps for SELECT → WHERE → GROUP BY → JOINs, plus a few traps I hit and how I fixed them.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    read: "#",
  },
  {
    slug: "kpi-chatbot-notes",
    title: "Notes from Building a KPI Chatbot",
    date: "2024-12-28",
    excerpt:
      "Designing the SQLite schema, prompt sanity checks, and how I kept the UI simple for busy teams.",
    img: "https://images.unsplash.com/photo-1551281044-8d8d0d8d8d8d?q=80&w=1200&auto=format&fit=crop",
    read: "#",
  },
  {
    slug: "hydro-model-learnings",
    title: "Hydropower Model: What Worked",
    date: "2024-11-10",
    excerpt:
      "Feature pruning, outlier strategy (median replace), and when Random Forest beat my first NN.",
    img: "https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=1200&auto=format&fit=crop",
    read: "#",
  },
  {
    slug: "ner-transformer-vs-rnn",
    title: "NER: Transformer vs RNN",
    date: "2024-10-31",
    excerpt:
      "Masking, positional encoding, and the exact moment validation F1 told me to stop training.",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    read: "#",
  },
  {
    slug: "power-bi-tips",
    title: "Power BI: 10 Quick Wins",
    date: "2024-10-15",
    excerpt:
      "Little tweaks—data types, hierarchies, tooltips—that made my dashboards click with stakeholders.",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    read: "#",
  },
];

/* --- Render blog cards --- */
const blogGrid = document.getElementById('blog-grid');

function blogCard({ title, date, excerpt, img, read }) {
  const card = document.createElement('article');
  card.className = 'card blog-card';
  card.innerHTML = `
    <img class="blog-thumb" src="${img}" alt="${title}">
    <header>
      <h3>${title}</h3>
      <p class="blog-meta">${new Date(date).toLocaleDateString(undefined, {
        year: 'numeric', month: 'long', day: 'numeric'
      })}</p>
    </header>
    <p class="blog-excerpt">${excerpt}</p>
    <div class="blog-links">
      <a class="btn btn-ghost" href="${read}" aria-label="Read ${title}">Read</a>
      <span class="badge">Blog</span>
    </div>
  `;
  return card;
}

if (blogGrid) {
  BLOG_POSTS.forEach(p => blogGrid.appendChild(blogCard(p)));
}

