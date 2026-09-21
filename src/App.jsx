import React, { useEffect, useState } from 'react';
import { FiArrowUpRight, FiArrowDown, FiGithub, FiLinkedin, FiPlus, FiMinus, FiMenu, FiX } from 'react-icons/fi';
import { projects, experience } from './data/portfolio';
import OrbitalScene from './components/scene/OrbitalScene';
import ProjectVisual from './components/scene/ProjectVisual';
import portrait from './assets/me-about.jpg';
const resume = `${process.env.PUBLIC_URL}/resume/Kuldeep-Singh-2026.pdf`;
const sections = ['work', 'experience', 'about', 'contact'];
const External = ({ href, children, ...props }) => <a href={href} target="_blank" rel="noreferrer" {...props}>{children}</a>;
function Project({ project, index }) {
return <article className={`project project-${project.id}`}>
<div className="project-visual" aria-hidden="true">
<ProjectVisual id={project.id}/>
</div>
<div className="project-body">
<div className="project-meta">
<span>0{index + 1} / {project.category}</span>
<span>2026</span>
</div>
<div className="project-heading">
<h3>{project.name}</h3>
<External href={project.href} aria-label={`Explore ${project.name}`} className="round-link">
<FiArrowUpRight/>
</External>
</div>
<p>{project.description}</p>
<div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
<div className="project-result">
<strong>{project.metric}</strong>
<span>{project.unit}</span>
</div>
<details>
<summary>Behind the build <FiPlus className="plus"/>
<FiMinus className="minus"/>
</summary>
<p>{project.details}</p>
<External href={project.href} className="text-link">Explore project <FiArrowUpRight/>
</External>
</details>
</div>
</article>;
}
export default function App() {
const [filter, setFilter] = useState('All work');
const [menu, setMenu] = useState(false);
const [active, setActive] = useState('');
useEffect(() => {const observer = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting) setActive(entry.target.id);}), {rootMargin: '-15% 0px -50% 0px'}); sections.forEach(id => observer.observe(document.getElementById(id))); return () => observer.disconnect();}, []);
useEffect(() => {const close = event => {if(event.key === 'Escape') setMenu(false);}; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close);}, []);
return <>
<a className="skip-link" href="#main">Skip to content</a>
<header className="site-header">
<a className="wordmark" href="#home" aria-label="Kuldeep Singh home">k<span className="logo-star">✳</span>
<span className="wordmark-name">KULDEEP<br/>SINGH</span>
</a>
<nav id="navigation" className={menu ? 'nav open' : 'nav'} aria-label="Main navigation">{sections.map((id, i) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setMenu(false)}>
<span>0{i + 1}</span>{id}</a>)}</nav>
<a href={resume} className="resume-link" target="_blank" rel="noreferrer">Résumé <FiArrowUpRight/>
</a>
<button className="menu-button" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} aria-controls="navigation" onClick={() => setMenu(!menu)}>{menu ? <FiX/> : <FiMenu/>}</button>
</header>
<main id="main">
<section className="hero wrap" id="home">
<div className="hero-topline">
<span className="eyebrow">
<span className="status-dot"/> INDEPENDENT MIND. ENGINEER BY CRAFT.</span>
<span className="edition">CHICAGO, IL / PORTFOLIO ’26</span>
</div>
<div className="hero-copy">
<p className="hero-intro">Hey, I’m Kuldeep. I build</p>
<h1>Human<br/>experiences.<br/>
<em>Local intelligence.</em>
</h1>
<div className="hero-bottom-copy">
<p className="hero-description">iOS engineer. AI builder. Relentlessly curious.<br/>From apps in millions of hands to models<br className="desktop-break"/> running in yours.</p>
<div className="hero-actions">
<a className="button" href="#work">Discover my work <FiArrowDown/>
</a>
<a className="text-link" href="mailto:kponia05@gmail.com">Let’s connect <FiArrowUpRight/>
</a>
</div>
</div>
</div>
<OrbitalScene/>
<div className="hero-footer">
<span>SCROLL TO EXPLORE <FiArrowDown/>
</span>
<span>SWIFT AT THE SURFACE. SILICON UNDERNEATH.</span>
<span>01 — 04</span>
</div>
</section>
<div className="proof-strip wrap">
<span>BUILT FOR SCALE <strong>Walmart<span className="spark">✳</span>
</strong>
</span>
<span>
<strong>5 years<span className="metric-plus">+</span>
</strong> in software engineering</span>
<span>
<strong>100M+</strong> downloads of Walmart’s US app</span>
<span>BUILDING WHAT’S NEXT <strong>YouxAI <FiArrowUpRight/>
</strong>
</span>
</div>
<section id="work" className="section wrap">
<div className="section-top">
<p className="eyebrow">01 / SELECTED WORK</p>
<span className="small-note">PRODUCTS, EXPERIMENTS & DEEP DIVES</span>
</div>
<div className="section-intro">
<h2>Less talking.<br/>
<em>More building.</em>
<span className="heading-count">(06)</span>
</h2>
<p>I like the whole problem: the interface people touch, the systems behind it, and the details that make it fast.</p>
</div>
<div className="filters" role="group" aria-label="Filter projects">{['All work', 'Product', 'AI infrastructure', 'Developer tools'].map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}{filter === item && <span>↗</span>}</button>)}</div>
<p className="sr-only" aria-live="polite">{projects.filter(p => filter === 'All work' || p.category === filter).length} projects shown</p>
<div className="project-grid">{projects.filter(p => filter === 'All work' || p.category === filter).map(p => <Project key={p.id} project={p} index={projects.indexOf(p)}/>)}</div>
<External href="https://github.com/Ar5en1c" className="all-code text-link">
<FiGithub/> More experiments on GitHub <FiArrowUpRight/>
</External>
</section>
<section id="experience" className="section wrap">
<div className="section-top">
<p className="eyebrow">02 / EXPERIENCE</p>
<span className="small-note">FROM ENTERPRISE SCALE TO INDEPENDENT EXPLORATION</span>
</div>
<div className="section-intro">
<h2>Big systems.<br/>
<em>Real impact.</em>
</h2>
<p>Native apps, reliable systems, and measurable improvements. A few stops along the way.</p>
</div>
<div className="walmart-feature">
<div className="walmart-story">
<span className="eyebrow">IN FOCUS / WALMART</span>
<h3>Millions of people.<br/>A million little details.</h3>
<p>Guest check-in. Deep-link navigation. A leaner, faster app. I worked on the moments that make a shopping experience feel effortless.</p>
<div className="walmart-metrics">
<div>
<strong>~50%</strong>
<span>smaller team-owned modules</span>
</div>
<div>
<strong>40%</strong>
<span>less main-thread blocking<br/>on profiled flows</span>
</div>
</div>
<a className="text-link" href="#walmart-history" onClick={() => { document.getElementById('walmart-history').open = true; }}>Explore my contribution <FiArrowDown/>
</a>
</div>
<div className="native-art" aria-hidden="true">
<span className="native-caption">NATIVE THINKING / EVERY LAYER</span>
<div className="native-stack">
<div className="native-sheet sheet-back">
<span>03</span>PERFORMANCE<b>Swift Concurrency</b>
</div>
<div className="native-sheet sheet-middle">
<span>02</span>NAVIGATION<b>Coordinator Pattern</b>
</div>
<div className="native-sheet sheet-front">
<span>01</span>EXPERIENCE<b>Built around people.</b>
<div className="native-spark">✳</div>
</div>
</div>
<span className="native-bottom">iOS ENGINEERING · 2024—2025</span>
</div>
</div>
<div className="experience-list">{experience.map((job, i) => <details id={job.company === 'Walmart' ? 'walmart-history' : undefined} key={job.company} className="job" open={i === 0 ? true : undefined}>
<summary>
<span className="job-date">{job.date}</span>
<span className="job-title">
<h3>{job.company}</h3>
<span>{job.role}</span>
</span>
<span className="job-toggle">
<FiPlus className="plus"/>
<FiMinus className="minus"/>
</span>
</summary>
<div className="job-detail">
<ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
</div>
</details>)}</div>
</section>
<section id="about" className="section wrap about">
<div>
<p className="eyebrow">03 / THE PERSON BEHIND THE CODE</p>
<h2>Curiosity is<br/>
<em>the throughline.</em>
</h2>
<p className="about-lead">I’m Kuldeep, an iOS engineer and independent builder based in Chicago.</p>
<p>I’ve worked on Walmart’s flagship shopping app, modernized legacy mobile codebases, and built tools that keep AI inference on your own hardware. I’m happiest following a problem from what a user sees to why the machine behaves that way.</p>
<p>I share what I learn through open-source projects and technical writing — including the bugs, benchmarks, and tradeoffs along the way.</p>
<External className="text-link" href="https://ar5en1c.hashnode.dev">Read my engineering notes <FiArrowUpRight/>
</External>
<div className="education">
<span className="eyebrow">ALWAYS LEARNING</span>
<p>MS, Computer Science <span>University of Illinois Chicago · 2023</span>
</p>
<p>MS, Computer Information Systems · AI <span>Indiana Wesleyan University · 2026–2028, in progress</span>
</p>
<p>BTech, Computer Science <span>Vellore Institute of Technology · 2021</span>
</p>
</div>
</div>
<div className="about-right">
<figure className="portrait">
<img src={portrait} alt="Kuldeep Singh beside a towering robot sculpture at night" loading="lazy" width="768" height="768"/>
<figcaption>
<span>KULDEEP, OFF THE CLOCK.</span>
<span>STILL INTO ROBOTS. ↗</span>
</figcaption>
</figure>
<div className="toolbox">
<span className="eyebrow">MY WORKBENCH</span>{[['01', 'Native by nature', 'Swift · SwiftUI · UIKit · Combine · Swift Concurrency · XCTest · Instruments'], ['02', 'Intelligence, local', 'WebGPU · WGSL · WebLLM · MLC-AI · MCP · RAG · Ollama'], ['03', 'The connecting layers', 'React · TypeScript · Node.js · Python · AWS · Supabase · PostgreSQL']].map(([n,title,body]) => <div className="tool-group" key={n}>
<span>{n}</span>
<h3>{title}</h3>
<p>{body}</p>
</div>)}<div className="workbench-footer">
<span className="status-dot"/> ALWAYS SOMETHING IN PROGRESS</div>
</div>
</div>
</section>
<section id="contact" className="contact-section">
<div className="wrap">
<p className="eyebrow">04 / NEXT CHAPTER</p>
<h2>Have a good<br/>
<em>problem?</em>
<a href="mailto:kponia05@gmail.com" className="contact-orb" aria-label="Email Kuldeep">
<FiArrowUpRight/>
</a>
</h2>
<div className="contact-bottom">
<p>Let’s build something worth putting into the world.<br/>iOS, on-device AI, or an idea that won’t leave you alone.</p>
<a href="mailto:kponia05@gmail.com" className="contact-link">kponia05@gmail.com <FiArrowUpRight/>
</a>
</div>
</div>
</section>
</main>
<footer className="wrap footer">
<a href="#home" className="wordmark" aria-label="Back to top">ks<span>✳</span>
</a>
<span>© {new Date().getFullYear()} Kuldeep Singh · Built with intent.</span>
<div>
<External href="https://github.com/Ar5en1c">
<FiGithub/> GitHub</External>
<External href="https://linkedin.com/in/kuldeep-5ingh">
<FiLinkedin/> LinkedIn</External>
<a href={resume} download>Résumé <FiArrowUpRight/>
</a>
</div>
</footer>
</>;
}
