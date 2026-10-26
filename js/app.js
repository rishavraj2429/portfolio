/* ==========================================================================
   MAIN APP CONTROLLER
   Multi-Website Clone Transformer (Google, Zomato, Netflix, Spotify, Cyber UI)
   Detailed Information Card Modal Engine, 4-Slider GAIA Climate Sandbox, Theme Switcher
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initParticlesCanvas();
  initAvatarParticles();

  window.mascot = new MascotController('hero-mascot', 'mascot-speech');

  if (window.DevTerminal) {
    window.terminal = new DevTerminal('terminal-output', 'terminal-input');
    window.terminal.printLine(`Welcome to Rishav Raj Portfolio Shell v2.5. Type <span style="color:var(--primary)">'help'</span> for commands.`);
  }

  initOnboardingModal();
  initAIChatWidget();
  initViewSwitcher();
  initGoogleSearchLogic();
  initAudioControls();
  initDetailModal();
  initMicroserviceSimulator();
  initGAIASandbox();
  initNanoGPTSandbox();
  initTikTokenizerSandbox();
  initParallelUniverseSandbox();
  initAIOSSandbox();
  initThemeSwitcher();
  initCalendarBooker();

  const navResumeBtn = document.getElementById('nav-resume-btn');
  if (navResumeBtn) {
    navResumeBtn.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.playGreetingChime();
    });
  }

  checkOnboarding();
});

/* Higgsfield Avatar Orbiting Particles */
function initAvatarParticles() {
  const container = document.getElementById('avatar-particles');
  if (!container) return;
  const colors = ['#00f0ff', '#7c3aed', '#f43f5e', '#10b981', '#f59e0b'];
  const count = 14;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'avatar-particle';
    const size = Math.random() * 5 + 3;
    const radius = 130 + Math.random() * 40;
    const duration = 6 + Math.random() * 10;
    const delay = -(Math.random() * duration);
    const color = colors[i % colors.length];
    p.style.cssText = `
      width: ${size}px; height: ${size}px;
      background: ${color};
      box-shadow: 0 0 ${size * 3}px ${color};
      top: 50%; left: 50%;
      margin-top: -${size / 2}px; margin-left: -${size / 2}px;
      --r: ${radius}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      transform-origin: 0 0;
    `;
    container.appendChild(p);
  }
}



/* Canvas Particles System */
function initParticlesCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(60, Math.floor(width / 20));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    const primaryColor = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#00f0ff';

    particles.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = primaryColor;
      ctx.globalAlpha = 0.5;
      ctx.fill();

      for (let j = idx + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = primaryColor;
          ctx.globalAlpha = (1 - dist / 120) * 0.25;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* Theme Switcher for Cyber UI */
function initThemeSwitcher() {
  const btn = document.getElementById('theme-toggle-btn');
  const menu = document.getElementById('theme-menu');
  const opts = document.querySelectorAll('.theme-opt');

  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('hidden');
      if (window.soundFx) window.soundFx.playClick();
    });

    document.addEventListener('click', () => {
      menu.classList.add('hidden');
    });

    opts.forEach(opt => {
      opt.addEventListener('click', () => {
        const theme = opt.dataset.theme;
        setTheme(theme);
        menu.classList.add('hidden');
      });
    });
  }

  const savedTheme = localStorage.getItem('rishav_theme') || 'cyber';
  setTheme(savedTheme);
}

function setTheme(theme) {
  document.body.className = '';
  if (theme !== 'cyber') {
    document.body.classList.add(`theme-${theme}`);
  }
  localStorage.setItem('rishav_theme', theme);
  if (window.soundFx) window.soundFx.playPop();
}

/* Detailed Information Card Modal Engine */
function initDetailModal() {
  const modal = document.getElementById('detail-modal');
  const closeBtn = document.getElementById('detail-modal-close');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
}

function openDetailModal(type) {
  const modal = document.getElementById('detail-modal');
  const content = document.getElementById('detail-modal-content');
  if (!modal || !content) return;

  if (window.soundFx) window.soundFx.playPop();

  let title = '';
  let bodyHtml = '';
  let ttsText = '';

  switch (type) {
    case 'bandhan':
      title = '💼 Bandhan Bank — .NET Full Stack Developer (Manager)';
      ttsText = 'Rishav Raj serves as .NET Full Stack Manager at Bandhan Bank. He engineered 12 microservices on NEEV platform supporting 500+ branches and 100K customer accounts.';
      bodyHtml = `
        <div style="font-size:1.4rem; font-weight:800; color:var(--primary); margin-bottom:12px;">${title}</div>
        <p style="color:var(--text-muted); margin-bottom:16px;"><b>Period:</b> Jun 2025 -- Present | <b>Location:</b> India</p>
        <ul style="line-height:1.8; margin-bottom:20px; list-style:square; padding-left:20px;">
          <li><b>Microservice Platform (35% Boost):</b> Engineered 12+ ETB/NTB reporting microservices on NEEV using ASP.NET MVC, C#, AngularJS, React.js, and SQL Server for 500+ branches.</li>
          <li><b>Role-Based Dashboards:</b> Designed real-time dashboards for 1,200+ Branch & Cluster Heads monitoring 100K+ customer accounts.</li>
          <li><b>API Integration (80% Effort Cut):</b> Integrated TransUnion Bureau Trigger APIs with NEEV LMS using RESTful Web APIs, EF, ADO.NET, and Dapper.</li>
          <li><b>10K+ Lead Processing & DevOps:</b> Streamlined CIF/MRN lead pipelines via C#, LINQ, Node.js, and Python (99.9% uptime), cutting release cycles by 50% using Docker and AWS EKS.</li>
          <li><b>Auth & Security:</b> Implemented JWT and OAuth2 authentication with RBAC across all core dashboards securing 100K+ customer records.</li>
          <li><b>Messaging & Caching:</b> Configured Apache Kafka & RabbitMQ with Redis caching for 10,000+ daily concurrent requests with sub-100ms API response times.</li>
        </ul>
        <div style="display:flex; gap:10px;">
          <button class="btn-primary" onclick="document.getElementById('detail-modal').classList.add('hidden'); document.getElementById('contact').scrollIntoView({behavior:'smooth'});"><i class="fa-solid fa-paper-plane"></i> Hire Rishav</button>
        </div>
      `;
      break;

    case 'gaia':
      title = '🌍 GAIA (Governance Assistant for Intelligent Climate Action)';
      ttsText = 'GAIA is an agentic AI climate planning platform integrating 5 climate data layers, Leaflet geospatial heatmaps, and LangChain RAG pipelines.';
      bodyHtml = `
        <div style="font-size:1.4rem; font-weight:800; color:#c084fc; margin-bottom:12px;">${title}</div>
        <p style="color:var(--text-muted); margin-bottom:16px;"><b>Tech Stack:</b> React.js, FastAPI, Python, PostgreSQL, Leaflet.js, OpenAI LLMs, LangChain, LangGraph, RAG</p>
        <ul style="line-height:1.8; margin-bottom:20px; list-style:square; padding-left:20px;">
          <li><b>Climate Planning Platform:</b> AI-powered platform integrating 5+ climate and geospatial data layers.</li>
          <li><b>Geospatial Dashboards:</b> Interactive geospatial dashboards visualizing urban heat hotspots across 1000+ mapped locations.</li>
          <li><b>Simulation Models:</b> Models for tree plantation, cool roofs, rooftop greening, and green space expansion evaluating 4 sustainability interventions.</li>
          <li><b>Agentic AI Assistant:</b> Developed an Agentic AI assistant using LangChain, LangGraph, and RAG pipelines cutting manual analysis effort by 60%.</li>
        </ul>
        <div style="display:flex; gap:10px;">
          <a href="https://codex-hack-ugrh.vercel.app/" target="_blank" class="btn-primary" style="text-decoration:none;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open Live Platform Demo</a>
        </div>
      `;
      break;

    case 'nanogpt':
    case 'shakespeare':
      title = '🎭 nanoGPT — Shakespeare Generative AI Transformer';
      ttsText = 'nanoGPT Shakespeare is a generative deep learning transformer model trained on the Tiny Shakespeare dataset, deployed as an interactive Streamlit application.';
      bodyHtml = `
        <div style="font-size:1.4rem; font-weight:800; color:#c084fc; margin-bottom:12px;">${title}</div>
        <p style="color:var(--text-muted); margin-bottom:16px;"><b>Tech Stack:</b> PyTorch, Transformer Architecture, nanoGPT, Python, Streamlit, Generative AI</p>
        <ul style="line-height:1.8; margin-bottom:20px; list-style:square; padding-left:20px;">
          <li><b>Deep Learning Transformer:</b> Built an autoregressive decoder-only Transformer based on nanoGPT repository with causal self-attention mechanisms and multi-head projection layers.</li>
          <li><b>Dataset Training:</b> Trained on the Tiny Shakespeare corpus (1MB text) using PyTorch, achieving a competitive cross-entropy loss of ~1.47 with customized context block size and positional embeddings.</li>
          <li><b>Real-Time Token Sampling:</b> Implemented customizable temperature scaling, top-k filtering, and seed prompt conditioning for high-fidelity text generation.</li>
          <li><b>Interactive Streamlit Cloud Deployment:</b> Packaged and hosted on Streamlit Cloud for instant real-time browser-based Shakespearean verse generation.</li>
        </ul>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <a href="https://nanogpt-shakespeare-fbkhytvvfjpnvxyn3omrxx.streamlit.app/" target="_blank" class="btn-primary" style="text-decoration:none;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open Live Streamlit App</a>
        </div>
      `;
      break;

    case 'tiktokenizer':
    case 'tokenizer':
      title = '🔤 TikTokenizer — LLM Tokenizer & Visualizer';
      ttsText = 'TikTokenizer is an interactive playground for exploring Byte Pair Encoding tokenization in large language models using WebAssembly and tiktoken.';
      bodyHtml = `
        <div style="font-size:1.4rem; font-weight:800; color:#00f0ff; margin-bottom:12px;">${title}</div>
        <p style="color:var(--text-muted); margin-bottom:16px;"><b>Tech Stack:</b> Next.js, TypeScript, WebAssembly, tiktoken, BPE Encodings, Tailwind CSS</p>
        <ul style="line-height:1.8; margin-bottom:20px; list-style:square; padding-left:20px;">
          <li><b>Tokenization Playground:</b> Real-time browser playground demonstrating how Byte Pair Encoding (BPE) breaks down prompts across OpenAI encodings including cl100k_base and o200k_base.</li>
          <li><b>High-Performance WebAssembly:</b> Runs OpenAI tiktoken via WebAssembly in-browser for instantaneous zero-latency client-side token calculation.</li>
          <li><b>Detailed Token Inspection:</b> Renders distinct color-coded token boundaries, numerical token IDs, character-to-token compression ratios, and byte sequences.</li>
          <li><b>Cost & Latency Estimator:</b> Calculates exact prompt cost estimates and token footprints for GPT-4o, GPT-4, and GPT-3.5 API calls.</li>
        </ul>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <a href="https://tiktokenizer.vercel.app/" target="_blank" class="btn-primary" style="text-decoration:none;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open Live TikTokenizer</a>
        </div>
      `;
      break;

    case 'paralleluniverse':
    case 'parallel':
    case 'multiverse':
      title = '🌌 Parallel Universe — Interactive Multiverse Platform';
      ttsText = 'Parallel Universe is an interactive multiverse exploration platform simulating branching quantum timelines and dimensional realities.';
      bodyHtml = `
        <div style="font-size:1.4rem; font-weight:800; color:#34d399; margin-bottom:12px;">${title}</div>
        <p style="color:var(--text-muted); margin-bottom:16px;"><b>Tech Stack:</b> React.js, WebGL, Canvas Animations, Quantum Timeline Simulation, Tailwind CSS, Vercel</p>
        <ul style="line-height:1.8; margin-bottom:20px; list-style:square; padding-left:20px;">
          <li><b>Multiverse Visualization:</b> Interactive digital experience exploring parallel timelines, branching quantum realities, and dimensional divergence.</li>
          <li><b>Reactive Canvas & WebGL:</b> High-frame-rate spatial particle effects and interactive dimensional nodes rendering responsive timeline branches.</li>
          <li><b>Coherence & Entropy Tracking:</b> Dynamic calculations of quantum coherence, timeline divergence, and entropy fluctuations across alternate realities.</li>
          <li><b>Serverless Cloud Deployment:</b> Deployed with rapid edge caching and high availability on Vercel.</li>
        </ul>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <a href="https://paralleluniverse-one.vercel.app/" target="_blank" class="btn-primary" style="text-decoration:none;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open Live Parallel Universe</a>
        </div>
      `;
      break;

    case 'aios':
    case 'ai-os':
      title = '💻 AI-OS — Intelligent Agentic Operating System';
      ttsText = 'AI-OS is an autonomous cognitive desktop operating system frontend featuring multi-agent process scheduling and streaming tool execution.';
      bodyHtml = `
        <div style="font-size:1.4rem; font-weight:800; color:#38bdf8; margin-bottom:12px;">${title}</div>
        <p style="color:var(--text-muted); margin-bottom:16px;"><b>Tech Stack:</b> Next.js, TypeScript, Agentic AI, Multi-Agent IPC, Cognitive Desktop, Tailwind CSS, Vercel</p>
        <ul style="line-height:1.8; margin-bottom:20px; list-style:square; padding-left:20px;">
          <li><b>Autonomous Cognitive Desktop:</b> Web-based AI Operating System environment with multitasking window orchestration, dynamic layout snapping, and multi-agent process scheduling.</li>
          <li><b>Multi-Agent IPC Architecture:</b> Integrated inter-process communication message bus enabling concurrent reasoning agents, background tool dispatchers, and memory vector bridges.</li>
          <li><b>Context Memory Management:</b> Dynamic context window allocator adjusting real-time working memory and token footprints across active desktop processes.</li>
          <li><b>Vercel Edge Deployment:</b> Hosted with rapid streaming responses and global serverless distribution.</li>
        </ul>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <a href="https://ai-os-frontend-2xvfmd0bk-rishav-raj-s-projects4.vercel.app/" target="_blank" class="btn-primary" style="text-decoration:none;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open Live AI-OS Platform</a>
        </div>
      `;
      break;

    case 'education':
      title = '🎓 Education & Academic Record';
      ttsText = 'Rishav Raj completed his BTech in Computer Science and Engineering from BIT Mesra with an 8.1 CGPA.';
      bodyHtml = `
        <div style="font-size:1.4rem; font-weight:800; color:#34d399; margin-bottom:12px;">${title}</div>
        <div style="line-height:1.8; margin-bottom:20px;">
          <div style="margin-bottom:12px;">
            <b>Birla Institute of Technology (BIT), Mesra, Ranchi, India</b> (2021 – 2025)<br>
            <i>BTech in Computer Science and Engineering</i> — <span class="tag">CGPA: 8.1</span>
          </div>
          <div style="margin-bottom:12px;">
            <b>Class 12 (PCM)</b> – SD ACAD (May 2020) — <span class="tag" style="border-color:#a855f7; color:#a855f7;">92.6%</span>
          </div>
          <div>
            <b>Class 10</b> – GD DAV Public School (May 2018) — <span class="tag" style="border-color:#34d399; color:#34d399;">96.8%</span>
          </div>
        </div>
      `;
      break;

    default:
      title = '💡 Rishav Raj Resume Detail';
      bodyHtml = `<p>${RISHAV_RESUME_KNOWLEDGE.summary}</p>`;
      break;
  }

  content.innerHTML = bodyHtml;
  modal.classList.remove('hidden');

  if (window.voiceSynth && ttsText) {
    window.voiceSynth.speak(ttsText);
  }
}

window.openDetailModal = openDetailModal;

/* Multi-View Switcher */
function initViewSwitcher() {
  const viewBtns = document.querySelectorAll('.view-btn');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });
}

function switchView(viewName) {
  const views = document.querySelectorAll('.view-container');
  const btns = document.querySelectorAll('.view-btn');

  views.forEach(v => v.classList.remove('active'));
  btns.forEach(b => b.classList.remove('active'));

  const targetContainer = document.getElementById(`view-${viewName}`);
  const targetBtn = document.querySelector(`.view-btn[data-view="${viewName}"]`);

  if (targetContainer) targetContainer.classList.add('active');
  if (targetBtn) targetBtn.classList.add('active');

  // Play the active view's background video (muted); pause the others
  document.querySelectorAll('.view-bg-video').forEach(v => { v.muted = true; v.pause(); });
  const activeBg = targetContainer ? targetContainer.querySelector('.view-bg-video') : null;
  if (activeBg) { const pr = activeBg.play(); if (pr && pr.catch) pr.catch(() => {}); }

  if (window.soundFx) window.soundFx.playPop();
  localStorage.setItem('rishav_active_view', viewName);
}

/* Google Search View Logic */
function initGoogleSearchLogic() {
  const searchInput = document.getElementById('g-search-input');
  const searchBtn = document.getElementById('g-search-btn');
  const luckyBtn = document.getElementById('g-lucky-btn');
  const micBtn = document.getElementById('g-mic-trigger');

  const executeGoogleSearch = (query) => {
    if (window.soundFx) window.soundFx.playClick();
    if (searchInput) searchInput.value = query;

    if (query.toLowerCase().includes('gaia')) {
      openDetailModal('gaia');
    } else if (query.toLowerCase().includes('nanogpt') || query.toLowerCase().includes('shakespeare')) {
      openDetailModal('nanogpt');
    } else if (query.toLowerCase().includes('tiktoken') || query.toLowerCase().includes('tokenizer')) {
      openDetailModal('tiktokenizer');
    } else if (query.toLowerCase().includes('parallel') || query.toLowerCase().includes('universe') || query.toLowerCase().includes('multiverse')) {
      openDetailModal('paralleluniverse');
    } else if (query.toLowerCase().includes('aios') || query.toLowerCase().includes('ai-os') || query.toLowerCase().includes('operating system')) {
      openDetailModal('aios');
    } else if (query.toLowerCase().includes('bank') || query.toLowerCase().includes('microservice')) {
      openDetailModal('bandhan');
    } else {
      const aiDrawer = document.getElementById('ai-fab');
      if (aiDrawer) aiDrawer.click();
      if (window.aiEngine) {
        setTimeout(() => window.aiEngine.query(query), 400);
      }
    }
  };

  if (searchBtn) searchBtn.addEventListener('click', () => executeGoogleSearch(searchInput ? searchInput.value : 'Rishav Raj'));
  if (luckyBtn) luckyBtn.addEventListener('click', () => {
    alert('🎉 Instant Hire Triggered! Opening Rishav Raj contact form...');
    switchView('classic');
  });

  if (micBtn && window.aiEngine?.recognition) {
    micBtn.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.playPop();
      window.aiEngine.recognition.start();
      window.aiEngine.recognition.onresult = (e) => executeGoogleSearch(e.results[0][0].transcript);
    });
  }
}

/* Microservice Live Event Simulator */
function initMicroserviceSimulator() {
  const btnLead = document.getElementById('sim-btn-leads');
  const btnApi = document.getElementById('sim-btn-api');
  const btnCache = document.getElementById('sim-btn-cache');

  const reqVal = document.getElementById('sim-req-sec');
  const latVal = document.getElementById('sim-latency');
  const loadVal = document.getElementById('sim-load');
  const statusLbl = document.getElementById('sim-status-text');

  if (btnLead) {
    btnLead.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.playGreetingChime();
      animateCounter(reqVal, 0, 10240, ' req/s');
      animateCounter(latVal, 180, 42, ' ms');
      animateCounter(loadVal, 10, 68, ' %');
      if (statusLbl) statusLbl.innerHTML = '⚡ Event Pipeline Processing: <b style="color:var(--primary);">10,000+ CIF/MRN Leads Streamed via Kafka & Redis!</b>';
    });
  }

  if (btnApi) {
    btnApi.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.playPop();
      animateCounter(reqVal, 1000, 4500, ' req/s');
      animateCounter(latVal, 120, 38, ' ms');
      animateCounter(loadVal, 30, 45, ' %');
      if (statusLbl) statusLbl.innerHTML = '🔌 TransUnion Bureau APIs: <b style="color:#34d399;">Automated Lead Generation Batch Completed! (80% Effort Cut)</b>';
    });
  }

  if (btnCache) {
    btnCache.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.playClick();
      animateCounter(reqVal, 4500, 1200, ' req/s');
      animateCounter(latVal, 40, 12, ' ms');
      animateCounter(loadVal, 45, 18, ' %');
      if (statusLbl) statusLbl.innerHTML = '💾 Redis Cache Synced: <b style="color:#c084fc;">PostgreSQL & SQL Server Queries Optimized (Sub-100ms)</b>';
    });
  }
}

function animateCounter(el, start, end, suffix = '') {
  if (!el) return;
  let current = start;
  const step = Math.ceil((end - start) / 15);
  const timer = setInterval(() => {
    current += step;
    if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
      current = end;
      clearInterval(timer);
    }
    el.textContent = current.toLocaleString() + suffix;
  }, 40);
}

/* ENHANCED GAIA CLIMATE SANDBOX (4 Interactive Simulation Sliders + 4 Metric Displays) */
function initGAIASandbox() {
  const treeSlider = document.getElementById('gaia-slider-trees');
  const roofSlider = document.getElementById('gaia-slider-roofs');
  const greenSlider = document.getElementById('gaia-slider-green');
  const gridSlider = document.getElementById('gaia-slider-grid');

  const treeVal = document.getElementById('gaia-val-trees');
  const roofVal = document.getElementById('gaia-val-roofs');
  const greenVal = document.getElementById('gaia-val-green');
  const gridVal = document.getElementById('gaia-val-grid');

  const tempDropEl = document.getElementById('gaia-result-temp');
  const co2El = document.getElementById('gaia-result-co2');
  const savingsEl = document.getElementById('gaia-result-savings');
  const aqiEl = document.getElementById('gaia-result-aqi');

  function updateGAIA() {
    const trees = parseInt(treeSlider?.value || 10000);
    const roofs = parseInt(roofSlider?.value || 30);
    const green = parseInt(greenSlider?.value || 200);
    const grid = parseInt(gridSlider?.value || 40);

    if (treeVal) treeVal.textContent = trees.toLocaleString() + ' Trees';
    if (roofVal) roofVal.textContent = roofs + '% Coverage';
    if (greenVal) greenVal.textContent = green.toLocaleString() + ' Hectares';
    if (gridVal) gridVal.textContent = grid + '% Green Grid';

    const tempDrop = ((trees / 10000) * 0.8 + (roofs / 100) * 1.2 + (green / 200) * 0.9 + (grid / 100) * 0.5).toFixed(1);
    const co2Offset = Math.round((trees * 0.025) + (roofs * 150) + (green * 45) + (grid * 180));
    const savings = Math.round(co2Offset * 14.5);
    const aqiGain = Math.round((trees / 1000) * 1.5 + (green / 50) * 2 + (grid / 10) * 1.8);

    if (tempDropEl) tempDropEl.textContent = `-${tempDrop}°C`;
    if (co2El) co2El.textContent = `${co2Offset.toLocaleString()} Tons`;
    if (savingsEl) savingsEl.textContent = `$${savings.toLocaleString()}`;
    if (aqiEl) aqiEl.textContent = `+${aqiGain} Points`;
  }

  [treeSlider, roofSlider, greenSlider, gridSlider].forEach(slider => slider?.addEventListener('input', updateGAIA));
}

/* nanoGPT Shakespeare Interactive Live Generation Sandbox */
function initNanoGPTSandbox() {
  const seedChips = document.querySelectorAll('.nano-seed-chip');
  const promptInput = document.getElementById('nanogpt-prompt-input');
  const tempSlider = document.getElementById('nano-slider-temp');
  const tokensSlider = document.getElementById('nano-slider-tokens');
  const tempVal = document.getElementById('nano-val-temp');
  const tokensVal = document.getElementById('nano-val-tokens');
  const genBtn = document.getElementById('nanogpt-generate-btn');
  const outputBox = document.getElementById('nanogpt-output-box');
  const tpsMetric = document.getElementById('nano-metric-tps');
  const lossMetric = document.getElementById('nano-metric-loss');

  const shakespeareCorpus = {
    'to be, or not to be:': `To be, or not to be: that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take arms against a sea of troubles,
And by opposing end them? To die: to sleep;
No more; and by a sleep to say we end
The heart-ache and the thousand natural shocks
That flesh is heir to, 'tis a consummation
Devoutly to be wish'd.`,
    'o romeo, romeo!': `O Romeo, Romeo! wherefore art thou Romeo?
Deny thy father and refuse thy name;
Or, if thou wilt not, be but sworn my love,
And I'll no longer be a Capulet.
'Tis but thy name that is my enemy;
Thou art thyself, though not a Montague.
What's in a name? that which we call a rose
By any other name would smell as sweet.`,
    'friends, romans, countrymen:': `Friends, Romans, countrymen, lend me your ears;
I come to bury Caesar, not to praise him.
The evil that men do lives after them;
The good is oft interred with their bones;
So let it be with Caesar. The noble Brutus
Hath told you Caesar was ambitious:
If it were so, it was a grievous fault,
And grievously hath Caesar answer'd it.`
  };

  const genericVerses = [
    `Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date:
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd.`,

    `Now is the winter of our discontent
Made glorious summer by this sun of York;
And all the clouds that lour'd upon our house
In the deep bosom of the ocean buried.
Now are our brows bound with victorious wreaths;
Our bruised arms hung up for monuments.`,

    `All the world's a stage,
And all the men and women merely players:
They have their exits and their entrances;
And one man in his time plays many parts,
His acts being seven ages.`
  ];

  if (tempSlider && tempVal) {
    tempSlider.addEventListener('input', () => {
      tempVal.textContent = parseFloat(tempSlider.value).toFixed(2);
    });
  }

  if (tokensSlider && tokensVal) {
    tokensSlider.addEventListener('input', () => {
      tokensVal.textContent = `${tokensSlider.value} Tokens`;
    });
  }

  seedChips.forEach(chip => {
    chip.addEventListener('click', () => {
      seedChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const seed = chip.dataset.seed;
      if (promptInput) promptInput.value = seed;
      if (window.soundFx) window.soundFx.playClick();
    });
  });

  if (genBtn && outputBox) {
    genBtn.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.playPop();
      const rawPrompt = (promptInput?.value || '').trim();
      const promptLower = rawPrompt.toLowerCase();
      const temp = parseFloat(tempSlider?.value || 0.8);

      genBtn.disabled = true;
      genBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sampling Tokens...';
      outputBox.innerHTML = '<span style="color:var(--text-muted);">Sampling autoregressive logits across transformer heads...</span>';

      setTimeout(() => {
        let chosenText = '';
        const matchedKey = Object.keys(shakespeareCorpus).find(k => promptLower.startsWith(k));
        if (matchedKey) {
          chosenText = shakespeareCorpus[matchedKey];
        } else if (rawPrompt) {
          const randomVerse = genericVerses[Math.floor(Math.random() * genericVerses.length)];
          chosenText = `${rawPrompt}\n\n${randomVerse}`;
        } else {
          chosenText = shakespeareCorpus['to be, or not to be:'];
        }

        if (temp > 1.1) {
          chosenText += `\n\n[Higher Temperature ${temp.toFixed(2)}: High diversity token sampling]`;
        }

        outputBox.textContent = chosenText;
        genBtn.disabled = false;
        genBtn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> Generate Shakespearean Text';

        if (tpsMetric) {
          const speed = Math.floor(135 + Math.random() * 25);
          tpsMetric.textContent = `${speed} tok/s`;
        }
        if (lossMetric) {
          const loss = (1.42 + (temp - 0.8) * 0.08).toFixed(2);
          lossMetric.textContent = `${loss} Loss`;
        }

        if (window.soundFx) window.soundFx.playGreetingChime();
      }, 300);
    });
  }
}

/* TikTokenizer Interactive Subword Visualizer Sandbox */
function initTikTokenizerSandbox() {
  const inputEl = document.getElementById('tik-input');
  const tokensDisplay = document.getElementById('tik-tokens-display');
  const countMetric = document.getElementById('tik-metric-count');
  const charsMetric = document.getElementById('tik-metric-chars');
  const ratioMetric = document.getElementById('tik-metric-ratio');
  const presetChips = document.querySelectorAll('.tik-preset-chip');
  const encChips = document.querySelectorAll('.tik-enc-chip');

  function tokenizeSimulate(text) {
    if (!text) return [];
    const regex = /[A-Z]?[a-z]+|[A-Z]+(?![a-z])|\d+|\s+|[^\s\w]+/g;
    return text.match(regex) || [text];
  }

  function updateTokenizer() {
    const text = inputEl ? inputEl.value : '';
    const tokens = tokenizeSimulate(text);
    const chars = text.length;
    const tokenCount = Math.max(1, tokens.length);
    const ratio = (chars / tokenCount).toFixed(1);

    if (tokensDisplay) {
      tokensDisplay.innerHTML = '';
      const colors = ['token-c0', 'token-c1', 'token-c2', 'token-c3', 'token-c4', 'token-c5'];
      tokens.forEach((t, i) => {
        const span = document.createElement('span');
        span.className = `tik-token ${colors[i % colors.length]}`;
        span.textContent = t;
        span.title = `Token #${i + 1} | "${t}"`;
        tokensDisplay.appendChild(span);
      });
    }

    if (countMetric) countMetric.textContent = tokenCount;
    if (charsMetric) charsMetric.textContent = chars;
    if (ratioMetric) ratioMetric.textContent = ratio;
  }

  if (inputEl) {
    inputEl.addEventListener('input', updateTokenizer);
  }

  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      presetChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (inputEl) {
        inputEl.value = chip.dataset.text;
        updateTokenizer();
      }
      if (window.soundFx) window.soundFx.playClick();
    });
  });

  encChips.forEach(chip => {
    chip.addEventListener('click', () => {
      encChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      updateTokenizer();
      if (window.soundFx) window.soundFx.playPop();
    });
  });

  updateTokenizer();
}

/* Parallel Universe Interactive Multiverse Timeline Sandbox */
function initParallelUniverseSandbox() {
  const branchesSlider = document.getElementById('pu-slider-branches');
  const rateSlider = document.getElementById('pu-slider-rate');
  const branchesVal = document.getElementById('pu-val-branches');
  const rateVal = document.getElementById('pu-val-rate');
  const stabilityMetric = document.getElementById('pu-metric-stability');
  const entropyMetric = document.getElementById('pu-metric-entropy');
  const displayContainer = document.getElementById('pu-timelines-display');

  const universePresets = [
    { id: 'Earth-Prime (α)', color: '#34d399', status: 'Canonical Base' },
    { id: 'Cyber-Nexus (β)', color: '#00f0ff', status: 'Singularity Event' },
    { id: 'Solaris-77 (γ)', color: '#a855f7', status: 'Divergent Branch' },
    { id: 'Aether-Zero (δ)', color: '#f59e0b', status: 'Quantum Fluctuation' },
    { id: 'Neo-Terra (ε)', color: '#f43f5e', status: 'Alternate History' },
    { id: 'Chronos-X (ζ)', color: '#818cf8', status: 'Temporal Loop' },
    { id: 'Void-Origin (η)', color: '#38bdf8', status: 'High Entropy' },
    { id: 'Prism-Alpha (θ)', color: '#10b981', status: 'Coherent Dimension' },
    { id: 'Starlight-9 (ι)', color: '#c084fc', status: 'Hyper-Spatial' },
    { id: 'Omni-World (κ)', color: '#fbbf24', status: 'Parallel Coordinate' },
    { id: 'Paradox-Core (λ)', color: '#fb7185', status: 'Branching Nexus' },
    { id: 'Genesis-Prime (μ)', color: '#6ee7b7', status: 'Origin Seed' }
  ];

  function updateMultiverse() {
    const branches = parseInt(branchesSlider?.value || 6);
    const divergence = parseInt(rateSlider?.value || 74);

    if (branchesVal) branchesVal.textContent = `${branches} Realities`;
    if (rateVal) rateVal.textContent = `${divergence}%`;

    const stability = (99.8 - (divergence * 0.04) - (branches * 0.15)).toFixed(1);
    const entropy = (0.10 + (divergence * 0.002) + (branches * 0.018)).toFixed(2);

    if (stabilityMetric) stabilityMetric.textContent = `${stability}%`;
    if (entropyMetric) entropyMetric.textContent = `${entropy} ΔS`;

    if (displayContainer) {
      displayContainer.innerHTML = '';
      const activeList = universePresets.slice(0, branches);
      activeList.forEach(u => {
        const badge = document.createElement('div');
        badge.className = 'pu-timeline-badge';
        badge.style.borderColor = u.color;
        badge.style.color = u.color;
        badge.innerHTML = `<span class="pulse-dot" style="width:6px; height:6px; background:${u.color}; box-shadow:0 0 6px ${u.color};"></span> <b>${u.id}</b> • <span style="opacity:0.8; font-size:0.75rem;">${u.status}</span>`;
        displayContainer.appendChild(badge);
      });
    }
  }

  [branchesSlider, rateSlider].forEach(s => s?.addEventListener('input', updateMultiverse));
  updateMultiverse();
}

/* AI-OS Interactive Cognitive Kernel Sandbox */
function initAIOSSandbox() {
  const taskButtons = document.querySelectorAll('.aios-task-btn');
  const taskInput = document.getElementById('aios-task-input');
  const memorySlider = document.getElementById('aios-slider-memory');
  const workersSlider = document.getElementById('aios-slider-workers');
  const memoryVal = document.getElementById('aios-val-memory');
  const workersVal = document.getElementById('aios-val-workers');
  const loadMetric = document.getElementById('aios-metric-load');
  const latencyMetric = document.getElementById('aios-metric-latency');
  const processList = document.getElementById('aios-process-list');

  const defaultProcesses = [
    { pid: 104, name: 'Cognitive Reasoning Core', status: 'Running', cpu: '18%', mem: '340MB', color: '#38bdf8' },
    { pid: 218, name: 'Vector Memory Cache', status: 'Active', cpu: '6%', mem: '180MB', color: '#a855f7' },
    { pid: 312, name: 'Multi-Agent IPC Bridge', status: 'Listening', cpu: '4%', mem: '95MB', color: '#34d399' },
    { pid: 405, name: 'Streaming Tool Executor', status: 'Standby', cpu: '2%', mem: '60MB', color: '#f59e0b' }
  ];

  function updateAIOS() {
    const memory = parseInt(memorySlider?.value || 1024);
    const workers = parseInt(workersSlider?.value || 4);

    if (memoryVal) memoryVal.textContent = `${memory} MB`;
    if (workersVal) workersVal.textContent = `${workers} Threads`;

    const load = Math.round(18 + (workers * 4.2) + ((memory / 2048) * 12));
    const latency = Math.max(4, Math.round(28 - (workers * 2.2)));

    if (loadMetric) loadMetric.textContent = `${load}%`;
    if (latencyMetric) latencyMetric.textContent = `${latency} ms`;

    if (processList) {
      processList.innerHTML = '';
      defaultProcesses.forEach(p => {
        const row = document.createElement('div');
        row.className = 'aios-proc-row';
        row.innerHTML = `
          <span><span style="color:#64748b;">PID ${p.pid}</span> • <b style="color:${p.color};">${p.name}</b></span>
          <span><span style="color:#34d399;">● ${p.status}</span> <span style="color:#94a3b8; font-size:0.75rem; margin-left:8px;">${p.cpu} CPU / ${p.mem}</span></span>
        `;
        processList.appendChild(row);
      });
    }
  }

  taskButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      taskButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (taskInput) {
        taskInput.value = btn.dataset.task;
      }
      if (window.soundFx) window.soundFx.playClick();
      updateAIOS();
    });
  });

  [memorySlider, workersSlider].forEach(s => s?.addEventListener('input', updateAIOS));
  updateAIOS();
}

/* Calendar & Timezone Booker */
function initCalendarBooker() {
  const form = document.getElementById('calendar-booking-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('book-name').value;
    const email = document.getElementById('book-email').value;
    const date = document.getElementById('book-date').value;
    const time = document.getElementById('book-time').value;
    const tz = document.getElementById('book-tz').value;

    if (window.soundFx) window.soundFx.playGreetingChime();

    const icsContent = 
      `BEGIN:VCALENDAR\n` +
      `VERSION:2.0\n` +
      `PRODID:-//Rishav Raj//Portfolio Meeting Booker//EN\n` +
      `BEGIN:VEVENT\n` +
      `SUMMARY:Interview / Tech Discussion with Rishav Raj (.NET & AI)\n` +
      `DESCRIPTION:Scheduled call with ${name} (${email}). Timezone: ${tz}\n` +
      `DTSTART:${date.replace(/-/g, '')}T${time.replace(':', '')}00Z\n` +
      `DTEND:${date.replace(/-/g, '')}T${(parseInt(time.split(':')[0]) + 1).toString().padStart(2, '0')}${time.split(':')[1]}00Z\n` +
      `ORGANIZER;CN=Rishav Raj:mailto:rishavrajjha24@gmail.com\n` +
      `ATTENDEE;CN=${name}:mailto:${email}\n` +
      `END:VEVENT\n` +
      `END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Rishav_Raj_Meeting_${date}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert(`🎉 Meeting scheduled for ${date} at ${time} (${tz})! Calendar invite .ics downloaded.`);
  });
}

/* Onboarding Modal Logic */
let selectedTitle = 'Sir';
let selectedLayout = 'classic';

function initOnboardingModal() {
  const modal = document.getElementById('onboarding-modal');
  const launchBtn = document.getElementById('modal-launch-btn');
  const nameInput = document.getElementById('visitor-name-input');
  const titleBtns = document.querySelectorAll('.title-btn');
  const layoutBtns = document.querySelectorAll('.layout-preset-btn');
  const greetingPill = document.getElementById('user-greeting-pill');

  titleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      titleBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedTitle = btn.dataset.title;
      if (window.soundFx) window.soundFx.playClick();
    });
  });

  layoutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      layoutBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedLayout = btn.dataset.view;
      if (window.soundFx) window.soundFx.playClick();
    });
  });

  if (launchBtn) {
    launchBtn.addEventListener('click', () => {
      const rawName = nameInput ? nameInput.value.trim() : '';
      const finalName = rawName || 'Guest';

      localStorage.setItem('rishav_user_name', finalName);
      localStorage.setItem('rishav_user_title', selectedTitle);

      updateUserGreetingDisplay();
      switchView(selectedLayout);
      modal.classList.add('hidden');

      const greetingText = `Hi ${finalName} ${selectedTitle}! Welcome to Rishav Raj's portfolio.`;
      if (window.voiceSynth) window.voiceSynth.speak(greetingText);
    });
  }

  if (greetingPill) {
    greetingPill.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  }
}

function checkOnboarding() {
  const savedName = localStorage.getItem('rishav_user_name');
  const savedView = localStorage.getItem('rishav_active_view') || 'classic';
  const modal = document.getElementById('onboarding-modal');

  if (savedName) {
    updateUserGreetingDisplay();
    switchView(savedView);
    modal.classList.add('hidden');
  } else {
    modal.classList.remove('hidden');
  }
}

function updateUserGreetingDisplay() {
  const name = localStorage.getItem('rishav_user_name') || 'Guest';
  const title = localStorage.getItem('rishav_user_title') || 'Sir';
  const pillText = document.getElementById('greeting-pill-text');
  if (pillText) pillText.textContent = `Hi, ${name} ${title}`;
}

/* AI Chat Assistant Widget Logic */
function initAIChatWidget() {
  const fab = document.getElementById('ai-fab');
  const chatBox = document.getElementById('ai-chat-box');
  const closeBtn = document.getElementById('chat-close-btn');
  const sendBtn = document.getElementById('chat-send-btn');
  const chatInput = document.getElementById('chat-input');
  const micBtn = document.getElementById('mic-btn');
  const chips = document.querySelectorAll('.chip-btn');

  if (fab && chatBox) {
    fab.addEventListener('click', () => {
      chatBox.classList.toggle('hidden');
      if (window.soundFx) window.soundFx.playPop();
    });

    closeBtn?.addEventListener('click', () => chatBox.classList.add('hidden'));
  }

  const handleSend = async (textToSend) => {
    const text = textToSend || (chatInput ? chatInput.value.trim() : '');
    if (!text) return;

    if (chatInput) chatInput.value = '';

    appendMessage(text, 'user');
    if (window.soundFx) window.soundFx.playClick();

    const typingIndicator = appendMessage('🤖 Analyzing response...', 'bot');
    const responseText = await window.aiEngine.query(text);

    typingIndicator.remove();
    appendMessage(responseText, 'bot');

    if (window.voiceSynth) {
      window.voiceSynth.speak(responseText.replace(/[*#]/g, ''));
    }
  };

  if (sendBtn) sendBtn.addEventListener('click', () => handleSend());

  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => handleSend(chip.dataset.prompt));
  });

  if (micBtn && window.aiEngine?.recognition) {
    micBtn.addEventListener('click', () => {
      micBtn.classList.add('listening');
      window.aiEngine.recognition.start();

      window.aiEngine.recognition.onresult = (event) => {
        micBtn.classList.remove('listening');
        handleSend(event.results[0][0].transcript);
      };

      window.aiEngine.recognition.onerror = () => {
        micBtn.classList.remove('listening');
      };
    });
  }
}

function appendMessage(text, sender) {
  const container = document.getElementById('chat-messages');
  if (!container) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${sender}`;
  msgDiv.innerHTML = text.replace(/\n/g, '<br>');

  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
  return msgDiv;
}

/* Audio Controls */
function initAudioControls() {
  const muteBtn = document.getElementById('mute-btn');
  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      const isMuted = window.soundFx.toggleMute();
      muteBtn.innerHTML = isMuted ? '🔇' : '🔊';
    });
  }
}
