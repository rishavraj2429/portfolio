/* ==========================================================================
   ANIMATED CARTOON MASCOT ("Byte") - SVG / Canvas Rendered Interactive Character
   ========================================================================== */

class MascotController {
  constructor(containerId, speechBubbleId) {
    this.container = document.getElementById(containerId);
    this.speechBubble = document.getElementById(speechBubbleId);
    this.state = 'idle'; // 'idle', 'talking', 'happy', 'thinking', 'excited'
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this.mouthOpen = false;
    this.mouthTimer = null;
    
    this.render();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.updateEyePosition();
    });
  }

  setState(newState, text = null) {
    this.state = newState;
    if (text && this.speechBubble) {
      this.speechBubble.textContent = text;
      this.speechBubble.style.display = 'block';
    }
    this.updateFacialExpression();
  }

  startTalking(text) {
    this.setState('talking', text);
    if (this.mouthTimer) clearInterval(this.mouthTimer);
    
    this.mouthTimer = setInterval(() => {
      this.mouthOpen = !this.mouthOpen;
      const mouth = document.getElementById('mascot-mouth');
      if (mouth) {
        mouth.setAttribute('d', this.mouthOpen ? 'M 40 68 Q 50 82 60 68 Z' : 'M 42 70 Q 50 74 58 70');
      }
    }, 150);
  }

  stopTalking() {
    if (this.mouthTimer) clearInterval(this.mouthTimer);
    this.mouthOpen = false;
    this.setState('idle');
    const mouth = document.getElementById('mascot-mouth');
    if (mouth) {
      mouth.setAttribute('d', 'M 42 70 Q 50 78 58 70');
    }
  }

  updateEyePosition() {
    if (!this.container) return;
    const rect = this.container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(this.mouseY - centerY, this.mouseX - centerX);
    const distance = Math.min(6, Math.hypot(this.mouseX - centerX, this.mouseY - centerY) / 30);

    const pupilDx = Math.cos(angle) * distance;
    const pupilDy = Math.sin(angle) * distance;

    const leftPupil = document.getElementById('left-pupil');
    const rightPupil = document.getElementById('right-pupil');

    if (leftPupil) {
      leftPupil.setAttribute('cx', 38 + pupilDx);
      leftPupil.setAttribute('cy', 45 + pupilDy);
    }
    if (rightPupil) {
      rightPupil.setAttribute('cx', 62 + pupilDx);
      rightPupil.setAttribute('cy', 45 + pupilDy);
    }
  }

  updateFacialExpression() {
    const leftEye = document.getElementById('left-eye-shape');
    const rightEye = document.getElementById('right-eye-shape');
    const cheekLeft = document.getElementById('cheek-left');
    const cheekRight = document.getElementById('cheek-right');
    const antennaLight = document.getElementById('antenna-light');

    if (!leftEye || !rightEye) return;

    if (this.state === 'happy' || this.state === 'excited') {
      cheekLeft?.setAttribute('opacity', '0.8');
      cheekRight?.setAttribute('opacity', '0.8');
      antennaLight?.setAttribute('fill', '#34d399');
    } else if (this.state === 'thinking') {
      antennaLight?.setAttribute('fill', '#a855f7');
    } else {
      cheekLeft?.setAttribute('opacity', '0.3');
      cheekRight?.setAttribute('opacity', '0.3');
      antennaLight?.setAttribute('fill', '#00f0ff');
    }
  }

  render() {
    if (!this.container) return;
    
    this.container.innerHTML = `
      <svg width="180" height="180" viewBox="0 0 100 100" class="mascot-svg">
        <!-- Glow Aura -->
        <circle cx="50" cy="55" r="40" fill="url(#mascot-glow)" opacity="0.6" />
        
        <defs>
          <radialGradient id="mascot-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e293b"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
          <linearGradient id="screen-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#070913"/>
            <stop offset="100%" stop-color="#1e1e38"/>
          </linearGradient>
        </defs>

        <!-- Antenna Stem & Bulb -->
        <line x1="50" y1="20" x2="50" y2="10" stroke="#00f0ff" stroke-width="3" stroke-linecap="round" />
        <circle id="antenna-light" cx="50" cy="8" r="5" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)">
          <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
        </circle>

        <!-- Main Robot Head Outer Frame -->
        <rect x="18" y="20" width="64" height="60" rx="18" fill="url(#body-grad)" stroke="#00f0ff" stroke-width="2.5" filter="drop-shadow(0 4px 12px rgba(0,240,255,0.3))" />

        <!-- Screen Face Area -->
        <rect x="24" y="28" width="52" height="46" rx="12" fill="url(#screen-grad)" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />

        <!-- Cute Cheeks -->
        <circle id="cheek-left" cx="30" cy="58" r="4" fill="#f43f5e" opacity="0.4" />
        <circle id="cheek-right" cx="70" cy="58" r="4" fill="#f43f5e" opacity="0.4" />

        <!-- Left Eye Socket & Pupil -->
        <circle id="left-eye-shape" cx="38" cy="45" r="9" fill="#0f172a" stroke="#00f0ff" stroke-width="1.5" />
        <circle id="left-pupil" cx="38" cy="45" r="4.5" fill="#00f0ff" filter="drop-shadow(0 0 4px #00f0ff)" />
        <circle cx="36" cy="43" r="1.5" fill="#ffffff" />

        <!-- Right Eye Socket & Pupil -->
        <circle id="right-eye-shape" cx="62" cy="45" r="9" fill="#0f172a" stroke="#00f0ff" stroke-width="1.5" />
        <circle id="right-pupil" cx="62" cy="45" r="4.5" fill="#00f0ff" filter="drop-shadow(0 0 4px #00f0ff)" />
        <circle cx="60" cy="43" r="1.5" fill="#ffffff" />

        <!-- Mouth Path -->
        <path id="mascot-mouth" d="M 42 66 Q 50 74 58 66" fill="none" stroke="#00f0ff" stroke-width="2.5" stroke-linecap="round" />
        
        <!-- Subtle Side Ear Nubs -->
        <rect x="12" y="42" width="6" height="14" rx="3" fill="#00f0ff" opacity="0.8" />
        <rect x="82" y="42" width="6" height="14" rx="3" fill="#00f0ff" opacity="0.8" />
      </svg>
    `;
  }
}
