/* ==========================================================================
   AUDIO SYNTHESIZER & VOICE SYSTEM (Web Audio API & Speech Synthesis)
   ========================================================================== */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.initAudioContext();
  }

  initAudioContext() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.ctx = new AudioContext();
    }
  }

  ensureContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  // Play synthetic retro sci-fi click
  playClick() {
    if (this.muted || !this.ctx) return;
    this.ensureContext();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  // Play futuristic hover sound
  playHover() {
    if (this.muted || !this.ctx) return;
    this.ensureContext();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(500, this.ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }

  // Play sci-fi greeting chime
  playGreetingChime() {
    if (this.muted || !this.ctx) return;
    this.ensureContext();

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + index * 0.08);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + index * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + index * 0.08 + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + index * 0.08);
      osc.stop(this.ctx.currentTime + index * 0.08 + 0.3);
    });
  }

  // Play message pop sound
  playPop() {
    if (this.muted || !this.ctx) return;
    this.ensureContext();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(900, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  // Robot talking bleep
  playRobotBeep() {
    if (this.muted || !this.ctx) return;
    this.ensureContext();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    const freqs = [600, 750, 900, 1100];
    const randomFreq = freqs[Math.floor(Math.random() * freqs.length)];

    osc.type = 'square';
    osc.frequency.setValueAtTime(randomFreq, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }
}

class VoiceEngine {
  constructor(soundEngine) {
    this.soundEngine = soundEngine;
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.selectedVoice = null;
    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;
    const load = () => {
      this.voices = this.synth.getVoices();
      // Prefer friendly english voice (Google US English, Natural, Samantha, Alex)
      this.selectedVoice = this.voices.find(v => 
        v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Karen') || v.name.includes('Alex'))
      ) || this.voices.find(v => v.lang.startsWith('en')) || this.voices[0];
    };
    load();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = load;
    }
  }

  speak(text, onStartCallback, onEndCallback) {
    if (!this.synth || this.soundEngine.muted) {
      if (onEndCallback) onEndCallback();
      return;
    }

    // Cancel current speech if any
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }
    utterance.rate = 1.05;
    utterance.pitch = 1.2; // Friendly animated robot pitch

    utterance.onstart = () => {
      this.soundEngine.playGreetingChime();
      if (onStartCallback) onStartCallback();
    };

    utterance.onboundary = (e) => {
      if (e.name === 'word') {
        this.soundEngine.playRobotBeep();
      }
    };

    utterance.onend = () => {
      if (onEndCallback) onEndCallback();
    };

    utterance.onerror = () => {
      if (onEndCallback) onEndCallback();
    };

    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

// Global Instances
window.soundFx = new SoundEngine();
window.voiceSynth = new VoiceEngine(window.soundFx);
