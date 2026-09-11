import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Check, ChevronRight, CircleAlert, LayoutDashboard, Menu, MessageSquare, PanelLeft, Sparkles, X } from 'lucide-react';
import './styles.css';

const lessons = [
  { id: 'why-react', number: '01', title: 'Why React?', summary: 'Components turn a messy interface into named, reusable decisions.', concept: 'Components, JSX, props', task: 'Find the repeated patterns in this screen and name three components.' },
  { id: 'state', number: '02', title: 'State & events', summary: 'The interface changes because the user changes something.', concept: 'useState, events, controlled inputs', task: 'Switch the active learning phase. Notice how one state value changes the whole view.' },
  { id: 'data', number: '03', title: 'Data & rendering', summary: 'Arrays become lists, filters, and useful summaries.', concept: 'map, filter, keys, conditional UI', task: 'Filter the implementation checklist, then add a new item.' },
  { id: 'ux', number: '04', title: 'UX in React', summary: 'Good component code still needs clear hierarchy, feedback, and recovery.', concept: 'loading, empty, error, accessible UI', task: 'Open the UX checklist and inspect the recovery states before shipping.' },
  { id: 'architecture', number: '05', title: 'Product architecture', summary: 'A strong build begins with a shared product model, not a clever component.', concept: 'PRD, TRD, boundaries, tools', task: 'Read the WhatsApp agent brief before designing its implementation.' }
];

const initialChecklist = [
  { id: 1, label: 'Subscribe to the WhatsApp messages field', group: 'connect', done: true },
  { id: 2, label: 'Verify webhook signatures', group: 'secure', done: false },
  { id: 3, label: 'Replay the last 20 conversation turns', group: 'memory', done: false },
  { id: 4, label: 'Guard booking writes with confirmation + idempotency', group: 'tools', done: false },
  { id: 5, label: 'Test “31st of February” and injection attempts', group: 'test', done: false }
];

function App() {
  const [activeLesson, setActiveLesson] = useState('why-react');
  const [activePhase, setActivePhase] = useState('plan');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [checklist, setChecklist] = useState(initialChecklist);
  const [filter, setFilter] = useState('all');
  const [toast, setToast] = useState('');

  const selectedLesson = lessons.find((lesson) => lesson.id === activeLesson);
  const visibleChecklist = checklist.filter((item) => filter === 'all' || item.group === filter);
  const completed = checklist.filter((item) => item.done).length;

  function selectLesson(id) {
    setActiveLesson(id);
    setMobileNavOpen(false);
  }

  function toggleChecklist(id) {
    setChecklist((items) => items.map((item) => item.id === id ? { ...item, done: !item.done } : item));
    setToast('Checklist progress updated');
    window.setTimeout(() => setToast(''), 1800);
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="React Product Studio home"><span className="brand-mark"><Sparkles size={18} /></span><span>React Product <strong>Studio</strong></span></a>
        <button className="icon-button mobile-menu" onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'}>{mobileNavOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <nav className={mobileNavOpen ? 'topnav is-open' : 'topnav'} aria-label="Primary navigation">
          <a href="#curriculum">Curriculum</a><a href="#brief">Product brief</a><a href="#checklist">Build board</a><a className="nav-cta" href="README.md">Read the guide <ArrowRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-wrap">
          <div className="hero-copy"><p className="eyebrow">A build-first React curriculum</p><h1>Design the product.<br /><em>Then make it move.</em></h1><p className="hero-description">Learn React by building the control room for a WhatsApp AI agent. You will practice component thinking, state, data, accessibility, and UX decisions against a real product narrative.</p><div className="hero-actions"><a className="primary-button" href="#curriculum">Start learning <ArrowRight size={17} /></a><a className="text-link" href="#brief">See the brief <ChevronRight size={16} /></a></div></div>
          <div className="hero-visual" aria-label="Conversation command center preview"><div className="window-bar"><span></span><span></span><span></span><small>agent / command center</small></div><div className="visual-grid"><div className="visual-sidebar"><div className="mini-logo"><MessageSquare size={15} /></div><div className="mini-line active"></div><div className="mini-line"></div><div className="mini-line short"></div></div><div className="visual-main"><div className="mini-kicker">LIVE CONVERSATION</div><div className="mini-title">Maya wants to book<br />a discovery call.</div><div className="message message-in">Do you have anything next Thursday?</div><div className="message message-out">I can check that for you.</div><div className="visual-footer"><span>Tool: Cal.com availability</span><span className="status-dot">● Online</span></div></div></div></div>
        </section>

        <section id="curriculum" className="studio-layout section-pad">
          <aside className="lesson-rail"><div className="rail-heading"><span>THE PATH</span><strong>React foundations</strong></div>{lessons.map((lesson) => <button key={lesson.id} className={activeLesson === lesson.id ? 'lesson-link active' : 'lesson-link'} onClick={() => selectLesson(lesson.id)}><span className="lesson-number">{lesson.number}</span><span><strong>{lesson.title}</strong><small>{lesson.concept}</small></span>{activeLesson === lesson.id && <ChevronRight size={16} />}</button>)}<div className="rail-note"><CircleAlert size={17} /><p>React is the tool. Product judgment is the skill.</p></div></aside>
          <section className="lesson-stage" aria-live="polite"><div className="stage-heading"><div><p className="eyebrow">Lesson {selectedLesson.number} / {selectedLesson.concept}</p><h2>{selectedLesson.title}</h2></div><span className="status-chip"><Check size={14} /> in progress</span></div><p className="stage-summary">{selectedLesson.summary}</p><div className="lesson-demo"><div className="demo-top"><span className="demo-label">TODAY'S BUILD</span><span className="demo-context"><LayoutDashboard size={14} /> agent command center</span></div><div className="phase-tabs" role="tablist" aria-label="Project phases">{['plan', 'connect', 'reason', 'ship'].map((phase) => <button key={phase} className={activePhase === phase ? 'phase-tab active' : 'phase-tab'} onClick={() => setActivePhase(phase)} role="tab" aria-selected={activePhase === phase}>{phase}</button>)}</div><PhaseContent phase={activePhase} /></div><div className="task-callout"><div className="task-icon"><Sparkles size={17} /></div><div><span className="callout-label">Your move</span><p>{selectedLesson.task}</p></div></div></section>
        </section>

        <section id="brief" className="brief-section section-pad"><div className="section-intro"><p className="eyebrow">The anchor project</p><h2>From message to <em>meaningful action.</em></h2><p>The curriculum follows one system from a deliberate plan to a production-shaped architecture. Read the requirements before writing the components.</p></div><div className="brief-grid"><BriefCard number="01" title="PRD" label="What are we making?" body="A WhatsApp assistant that answers from trusted business knowledge, remembers recent context, and helps customers request bookings without pretending it knows what it does not." link="docs/PRD.md" /><BriefCard number="02" title="TRD" label="How will it work?" body="A provider-flexible model gateway, phone-number identity, capped memory, guarded tools, signature verification, and logs that explain every turn." link="docs/TRD.md" /><BriefCard number="03" title="UX" label="How should it feel?" body="Clear status, visible uncertainty, useful recovery, confirmation before irreversible actions, and a calm command center for the team." link="docs/UX-PLAYBOOK.md" /></div></section>

        <section id="checklist" className="board-section section-pad"><div className="section-intro compact"><p className="eyebrow">Interactive practice</p><h2>Build board</h2><p>React state drives this checklist. Toggle a task, filter the work, and inspect the source to see the pattern.</p></div><div className="board"><div className="board-toolbar"><div className="filter-group" role="group" aria-label="Filter build tasks">{['all', 'connect', 'memory', 'tools', 'secure', 'test'].map((value) => <button key={value} className={filter === value ? 'filter active' : 'filter'} onClick={() => setFilter(value)}>{value}</button>)}</div><span className="board-count">{completed} / {checklist.length} complete</span></div><div className="board-list">{visibleChecklist.map((item) => <label className={item.done ? 'board-item done' : 'board-item'} key={item.id}><input type="checkbox" checked={item.done} onChange={() => toggleChecklist(item.id)} /><span className="checkmark"><Check size={14} /></span><span><strong>{item.label}</strong><small>{item.group}</small></span></label>)}</div>{visibleChecklist.length === 0 && <div className="empty-state">No tasks in this view yet. That is a real state worth designing.</div>}</div></section>
      </main>
      {toast && <div className="toast" role="status"><Check size={15} /> {toast}</div>}
      <footer className="footer"><span>React Product Studio / 2026</span><span>Build with intent. Test the edges.</span></footer>
    </div>
  );
}

function PhaseContent({ phase }) {
  const content = { plan: { title: 'Plan before pixels', text: 'Define the business, the customer, the agent boundary, and the failure cases. A component cannot repair an unclear product.', code: 'const brief = { user: “customer”, boundary: “trusted knowledge” };' }, connect: { title: 'Connect the conversation', text: 'WhatsApp is a delivery channel with rules: subscribe to messages, verify signatures, and respect the 24-hour customer-service window.', code: 'webhook.on("messages", receiveMessage);' }, reason: { title: 'Reason with guardrails', text: 'The model can decide what to say, but application code owns dates, permissions, confirmation, and idempotency.', code: 'if (booking.write && !customer.confirmed) askForConfirmation();' }, ship: { title: 'Ship with evidence', text: 'Production means public TLS, process management, logs, failure tests, and an explanation for every unexpected answer.', code: 'logger.info({ phone, tool, decision, outcome });' } }[phase];
  return <div className="phase-content"><div><h3>{content.title}</h3><p>{content.text}</p></div><code>{content.code}</code></div>;
}

function BriefCard({ number, title, label, body, link }) {
  return <a className="brief-card" href={link}><div className="brief-card-top"><span>{number}</span><span className="brief-arrow"><ArrowRight size={17} /></span></div><h3>{title}</h3><p className="brief-label">{label}</p><p>{body}</p><span className="read-link">Open document <ArrowRight size={14} /></span></a>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
