/* ==========================================================================
   INTERACTIVE DEV TERMINAL (CLI ENGINE)
   ========================================================================== */

class DevTerminal {
  constructor(outputId, inputId) {
    this.output = document.getElementById(outputId);
    this.input = document.getElementById(inputId);
    this.history = [];
    this.historyIndex = -1;

    this.bindEvents();
  }

  bindEvents() {
    if (!this.input) return;

    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = this.input.value.trim();
        if (cmd) {
          this.executeCommand(cmd);
          this.history.push(cmd);
          this.historyIndex = this.history.length;
          this.input.value = '';
        }
      } else if (e.key === 'ArrowUp') {
        if (this.historyIndex > 0) {
          this.historyIndex--;
          this.input.value = this.history[this.historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.input.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          this.input.value = '';
        }
      }
    });
  }

  printLine(text, isPrompt = false, isError = false) {
    if (!this.output) return;

    const line = document.createElement('div');
    line.className = 'terminal-line';

    if (isError) {
      line.style.color = '#ef4444';
    }

    if (isPrompt) {
      const user = localStorage.getItem('rishav_user_name') || 'visitor';
      line.innerHTML = `<span class="terminal-prompt">${user}@rishav-portfolio:~$</span> ${text}`;
    } else {
      line.innerHTML = text;
    }

    this.output.appendChild(line);
    this.output.scrollTop = this.output.scrollHeight;
  }

  executeCommand(rawCmd) {
    const cmd = rawCmd.toLowerCase();
    this.printLine(rawCmd, true);
    
    if (window.soundFx) window.soundFx.playClick();

    switch (cmd) {
      case 'help':
        this.printLine(
          `Available CLI Commands:\n` +
          `  <span style="color:#00f0ff">summary</span>     - Show professional overview\n` +
          `  <span style="color:#00f0ff">experience</span>  - View Bandhan Bank & microservices achievements\n` +
          `  <span style="color:#00f0ff">gaia</span>        - Detailed breakdown of GAIA Climate AI Platform\n` +
          `  <span style="color:#00f0ff">nanogpt</span>     - Detailed breakdown of nanoGPT Shakespeare AI\n` +
          `  <span style="color:#00f0ff">tiktokenizer</span> - LLM Tokenizer & BPE Visualizer playground\n` +
          `  <span style="color:#00f0ff">parallel</span>    - Parallel Universe Multiverse simulation\n` +
          `  <span style="color:#00f0ff">aios</span>        - AI-OS Intelligent Operating System platform\n` +
          `  <span style="color:#00f0ff">resume</span>      - Download official 1-page recruiter resume (PDF)\n` +
          `  <span style="color:#00f0ff">skills</span>      - List technical stack & tools\n` +
          `  <span style="color:#00f0ff">education</span>   - Display BIT Mesra degree & grades\n` +
          `  <span style="color:#00f0ff">contact</span>     - Show email, phone & social handles\n` +
          `  <span style="color:#00f0ff">whoami</span>      - Display current visitor profile\n` +
          `  <span style="color:#00f0ff">sudo hire</span>   - Unlock direct interview dispatcher\n` +
          `  <span style="color:#00f0ff">clear</span>       - Clear terminal screen`
        );
        break;

      case 'summary':
        this.printLine(RISHAV_RESUME_KNOWLEDGE.summary);
        break;

      case 'experience':
        this.printLine(`<b style="color:#00f0ff">${RISHAV_RESUME_KNOWLEDGE.experience.role}</b> @ ${RISHAV_RESUME_KNOWLEDGE.experience.company} (${RISHAV_RESUME_KNOWLEDGE.experience.period})`);
        RISHAV_RESUME_KNOWLEDGE.experience.highlights.forEach(h => {
          this.printLine(`• ${h}`);
        });
        break;

      case 'gaia':
        const gaia = RISHAV_RESUME_KNOWLEDGE.projects[0];
        this.printLine(`<b style="color:#a855f7">${gaia.name}</b>`);
        this.printLine(`Tech: ${gaia.tech}`);
        this.printLine(`Live URL: <a href="${gaia.liveUrl}" target="_blank" style="color:#00f0ff">${gaia.liveUrl}</a>`);
        gaia.highlights.forEach(h => this.printLine(`- ${h}`));
        break;

      case 'nanogpt':
      case 'shakespeare':
        const nanogpt = RISHAV_RESUME_KNOWLEDGE.projects.find(p => p.name.includes('nanoGPT')) || RISHAV_RESUME_KNOWLEDGE.projects[1];
        this.printLine(`<b style="color:#c084fc">${nanogpt.name}</b>`);
        this.printLine(`Tech: ${nanogpt.tech}`);
        this.printLine(`Live URL: <a href="${nanogpt.liveUrl}" target="_blank" style="color:#00f0ff">${nanogpt.liveUrl}</a>`);
        nanogpt.highlights.forEach(h => this.printLine(`- ${h}`));
        break;

      case 'tiktokenizer':
      case 'tokenizer':
        const tik = RISHAV_RESUME_KNOWLEDGE.projects.find(p => p.name.includes('TikTokenizer')) || RISHAV_RESUME_KNOWLEDGE.projects[2];
        this.printLine(`<b style="color:#00f0ff">${tik.name}</b>`);
        this.printLine(`Tech: ${tik.tech}`);
        this.printLine(`Live URL: <a href="${tik.liveUrl}" target="_blank" style="color:#00f0ff">${tik.liveUrl}</a>`);
        tik.highlights.forEach(h => this.printLine(`- ${h}`));
        break;

      case 'parallel':
      case 'paralleluniverse':
      case 'multiverse':
        const pu = RISHAV_RESUME_KNOWLEDGE.projects.find(p => p.name.includes('Parallel Universe')) || RISHAV_RESUME_KNOWLEDGE.projects[3];
        this.printLine(`<b style="color:#34d399">${pu.name}</b>`);
        this.printLine(`Tech: ${pu.tech}`);
        this.printLine(`Live URL: <a href="${pu.liveUrl}" target="_blank" style="color:#00f0ff">${pu.liveUrl}</a>`);
        pu.highlights.forEach(h => this.printLine(`- ${h}`));
        break;

      case 'aios':
      case 'ai-os':
      case 'os':
        const aios = RISHAV_RESUME_KNOWLEDGE.projects.find(p => p.name.includes('AI-OS')) || RISHAV_RESUME_KNOWLEDGE.projects[4];
        this.printLine(`<b style="color:#38bdf8">${aios.name}</b>`);
        this.printLine(`Tech: ${aios.tech}`);
        this.printLine(`Live URL: <a href="${aios.liveUrl}" target="_blank" style="color:#00f0ff">${aios.liveUrl}</a>`);
        aios.highlights.forEach(h => this.printLine(`- ${h}`));
        break;

      case 'resume':
      case 'cv':
      case 'pdf':
      case 'download':
        this.printLine(`<span style="color:#34d399">📄 Triggering download for Official Resume PDF (Rishav_Raj_Resume.pdf)...</span>`);
        this.printLine(`Direct link: <a href="Rishav_Raj_Resume.pdf" download="Rishav_Raj_Resume.pdf" target="_blank" style="color:#00f0ff; text-decoration:underline;">Click to download Rishav_Raj_Resume.pdf</a>`);
        const dl = document.createElement('a');
        dl.href = 'Rishav_Raj_Resume.pdf';
        dl.download = 'Rishav_Raj_Resume.pdf';
        document.body.appendChild(dl);
        dl.click();
        document.body.removeChild(dl);
        break;

      case 'skills':
        this.printLine(`Backend: ${RISHAV_RESUME_KNOWLEDGE.skills.backend.join(', ')}`);
        this.printLine(`Frontend: ${RISHAV_RESUME_KNOWLEDGE.skills.frontend.join(', ')}`);
        this.printLine(`Cloud & Serverless: ${RISHAV_RESUME_KNOWLEDGE.skills.cloud.join(', ')}`);
        this.printLine(`Messaging & DBs: Apache Kafka, RabbitMQ, Redis, SQL Server, PostgreSQL, MongoDB`);
        break;

      case 'education':
        RISHAV_RESUME_KNOWLEDGE.education.forEach(e => {
          this.printLine(`${e.institution} | ${e.degree || e.level} | ${e.score} (${e.duration})`);
        });
        break;

      case 'contact':
        this.printLine(`Email: ${RISHAV_RESUME_KNOWLEDGE.email}`);
        this.printLine(`Phone: ${RISHAV_RESUME_KNOWLEDGE.phone}`);
        this.printLine(`LinkedIn: ${RISHAV_RESUME_KNOWLEDGE.linkedin}`);
        this.printLine(`GitHub: ${RISHAV_RESUME_KNOWLEDGE.github}`);
        break;

      case 'whoami':
        const name = localStorage.getItem('rishav_user_name') || 'Guest';
        const title = localStorage.getItem('rishav_user_title') || 'Sir';
        this.printLine(`Active Visitor: <span style="color:#34d399">${name} ${title}</span>`);
        break;

      case 'sudo hire':
        this.printLine(`<span style="color:#34d399">🚀 ACCESS GRANTED! Opening direct contact form...</span>`);
        const contactSection = document.getElementById('contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'clear':
        this.output.innerHTML = '';
        break;

      default:
        this.printLine(`Command not found: '${rawCmd}'. Type <span style="color:#00f0ff">'help'</span> for available commands.`, false, true);
        break;
    }
  }
}

window.DevTerminal = DevTerminal;
