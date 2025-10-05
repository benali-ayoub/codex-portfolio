import MetricCounter from './components/MetricCounter.jsx';
import ParticleCanvas from './components/ParticleCanvas.jsx';

const metrics = [
  { label: 'Deployed ML Products', value: 12 },
  { label: 'TB Data modeled', value: 7.5 },
  { label: 'Executive Dashboards', value: 28 },
];

const skillPills = [
  'Python & R',
  'Machine Learning Ops',
  'Bayesian Modeling',
  'Causal Inference',
  'Deep Learning',
  'NLP & LLMs',
  'Interactive Dashboards',
  'Data Storytelling',
];

const skillHighlights = [
  {
    title: 'Model Architecture',
    description:
      'Production-grade experimentation with feature stores, hyperparameter search, and continuous training pipelines.',
  },
  {
    title: 'Decision Intelligence',
    description:
      'Probabilistic forecasting and uplift models that empower executives with cost-aware scenario planning.',
  },
  {
    title: 'Human Insight',
    description:
      'Immersive dashboards and narrative visuals that translate complex models into confident action.',
  },
];

const projects = [
  {
    title: 'Helios Demand Engine',
    tag: 'Time Series',
    description:
      'A global demand forecasting platform leveraging probabilistic ensembles and Monte Carlo simulation, reducing stockouts by 32%.',
    stack: 'Python · Prophet · Vertex AI',
  },
  {
    title: 'PulseCare',
    tag: 'Healthcare',
    description:
      'Explainable risk stratification for hospital readmission using SHAP and counterfactual dashboards, cutting readmissions by 18%.',
    stack: 'PyTorch · SHAP · Dash',
  },
  {
    title: 'NeonSignals',
    tag: 'Streaming',
    description:
      'Real-time anomaly detection across IoT telemetry with a self-healing pipeline and sub-second alerting.',
    stack: 'Kafka · Flink · Grafana',
  },
];

const insights = [
  {
    date: 'Apr 2024',
    title: 'Designing guardrails for LLM-powered analytics teams',
    description:
      'How to orchestrate retrieval pipelines, prompt evaluations, and human-in-the-loop reviews for trustworthy AI insights.',
  },
  {
    date: 'Mar 2024',
    title: 'When uncertainty matters more than accuracy',
    description:
      'Lessons from Bayesian decision science on communicating the confidence intervals that executives can act on.',
  },
  {
    date: 'Jan 2024',
    title: 'Animating telemetry in 3D',
    description:
      'A tour of GPU-accelerated storytelling that turns streaming data into luminous experiences for operations teams.',
  },
];

const contactLinks = [
  { label: 'hello@novaquinn.ai', href: 'mailto:hello@novaquinn.ai' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
];

const currentYear = new Date().getFullYear();

function App() {
  return (
    <>
      <ParticleCanvas />
      <div className="app-shell">
        <header className="navbar">
          <div className="logo">NQ</div>
          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#insights">Insights</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <section className="hero" id="about">
            <div className="hero__overlay" />
            <div className="hero__content">
              <p className="eyebrow">Data Scientist &amp; Storyteller</p>
              <h1>Transforming signal into luminous insight.</h1>
              <p className="hero__text">
                I’m <strong>Nova Quinn</strong>, a data scientist crafting predictive systems and interactive analytics for mission-critical decisions. From production-ready pipelines to immersive visual narratives, I illuminate the story hidden in every dataset.
              </p>
              <div className="cta-group">
                <a className="btn primary" href="#projects">
                  Explore Work
                </a>
                <a className="btn secondary" href="#contact">
                  Schedule a Chat
                </a>
              </div>
              <div className="metrics">
                {metrics.map(metric => (
                  <div key={metric.label} className="metric">
                    <MetricCounter value={metric.value} />
                    <span className="metric__label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero__visual">
              <div className="orb orb--one" />
              <div className="orb orb--two" />
              <div className="orb orb--three" />
              <div className="grid" />
            </div>
          </section>

          <section className="section" id="skills">
            <h2 className="section__title">Full-Stack Data Science Arsenal</h2>
            <div className="pill-row">
              {skillPills.map(skill => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
            <div className="skill-grid">
              {skillHighlights.map(highlight => (
                <article key={highlight.title} className="skill-card">
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="projects">
            <h2 className="section__title">Highlighted Projects</h2>
            <div className="projects">
              {projects.map(project => (
                <article key={project.title} className="project-card">
                  <div className="project-card__header">
                    <h3>{project.title}</h3>
                    <span className="tag">{project.tag}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-card__footer">
                    <span>{project.stack}</span>
                    <a href="#" className="icon-link" aria-label={`View ${project.title} case study`}>
                      ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section insights" id="insights">
            <div className="section__header">
              <h2 className="section__title">Fresh Insights</h2>
              <p className="section__subtitle">
                Thought experiments, visual essays, and open-source experiments released weekly.
              </p>
            </div>
            <div className="timeline">
              {insights.map(item => (
                <article key={item.title} className="timeline__item">
                  <span className="timeline__date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section contact" id="contact">
            <div className="contact__card">
              <h2>Let’s Illuminate Your Next Challenge</h2>
              <p>
                Ready to collaborate on a product launch, accelerate decision intelligence, or make data sing for your customers? Drop me a line and let’s prototype the future.
              </p>
              <form className="contact__form">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Ada Lovelace" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="hello@luminar.io" required />
                </div>
                <div className="field">
                  <label htmlFor="message">How can I help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Let’s build a generative analytics copilot…"
                  />
                </div>
                <button type="submit" className="btn primary">
                  Send Transmission
                </button>
              </form>
            </div>
            <div className="contact__links">
              {contactLinks.map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>© {currentYear} Nova Quinn · Data science with a neon pulse.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
