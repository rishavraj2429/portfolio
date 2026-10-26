/* ==========================================================================
   RESUME-TRAINED AI ENGINE & LLM ASSISTANT ("Rishav AI Bot")
   Supports offline resume knowledge engine, voice input, custom API key, and basic commands (stop speaking, mute, clear).
   ========================================================================== */

const RISHAV_RESUME_KNOWLEDGE = {
  name: "Rishav Raj",
  title: ".NET Full Stack Developer (Manager) @ Bandhan Bank",
  phone: "(+91) 6201689764",
  email: "rishavrajjha24@gmail.com",
  linkedin: "https://linkedin.com/in/rishav-raj-086207260",
  github: "https://github.com/rishavraj2429",
  summary: ".NET Full Stack Developer with 2+ years of experience in C#, ASP.NET MVC, .NET Core, SQL Server, AngularJS, React.js, and REST APIs. Proficient in microservices, API integration, database optimization, cloud deployment on AWS, and AI web solutions using OpenAI APIs, LLMs, and RAG pipelines.",
  education: [
    { institution: "Birla Institute of Technology (BIT), Mesra, Ranchi", degree: "BTech in Computer Science and Engineering", duration: "2021 – 2025", score: "CGPA: 8.1" },
    { institution: "SD ACAD", level: "Class 12 (PCM)", duration: "May 2020", score: "92.6%" },
    { institution: "GD DAV Public School", level: "Class 10", duration: "May 2018", score: "96.8%" }
  ],
  experience: {
    role: ".NET Full Stack Developer (Manager)",
    company: "Bandhan Bank, India",
    period: "Jun 2025 – Present",
    highlights: [
      "Engineered 12+ ETB/NTB reporting microservices on the NEEV platform using ASP.NET MVC, C#, AngularJS, React.js, Redux, and SQL Server, supporting 500+ branches and boosting efficiency by 35%.",
      "Designed role-based interactive dashboards for 1,200+ Branch Heads and Cluster Heads using React.js, Redux, AngularJS, and jQuery to monitor over 100K customer accounts and real-time leads.",
      "Integrated Bureau Trigger APIs with TransUnion and NEEV LMS using RESTful Web APIs, Entity Framework, ADO.NET, and Dapper, automating lead generation and reducing manual effort by 80%.",
      "Streamlined event-driven CIF/MRN lead processing pipelines via C#, LINQ, Node.js, and Python for 10K+ monthly events with 99.9% uptime.",
      "Orchestrated Docker, AWS EKS (Kubernetes), Bitbucket, and GitHub Actions / Jenkins CI/CD to cut release cycles by 50% with zero downtime.",
      "Implemented JWT and OAuth2-based authentication with RBAC across all core dashboards, securing session access for 100K+ customer records.",
      "Architected relational SQL Server, PostgreSQL, and MongoDB schemas; optimized 50+ complex stored procedures, views, and triggers in SSMS, cutting query execution time by 40%.",
      "Configured asynchronous messaging pipelines using Apache Kafka and RabbitMQ with Redis caching, supporting 10,000+ daily concurrent requests with sub-100ms API response times.",
      "Deployed AWS (EC2, S3, EKS) & Azure microservices with 15+ Lambdas (saving 25% compute costs), enforcing 20+ IAM policies and Secrets Manager for 100% secret remediation."
    ]
  },
  projects: [
    {
      name: "GAIA (Governance Assistant for Intelligent Climate Action)",
      liveUrl: "https://codex-hack-ugrh.vercel.app/",
      tech: "React.js, FastAPI, Python, PostgreSQL, Leaflet.js, OpenAI LLMs, LangChain, LangGraph, RAG Pipelines",
      highlights: [
        "AI-powered climate planning platform integrating 5+ climate and geospatial data layers.",
        "Interactive geospatial dashboards for visualizing urban heat hotspots and climate risks across 1000+ mapped locations.",
        "Simulation models for tree plantation, cool roofs, rooftop greening, and green space expansion.",
        "Agentic AI assistant built with LangChain, LangGraph, and RAG pipelines to autonomously retrieve geospatial insights and generate climate policies, cutting manual analysis effort by 60%."
      ]
    },
    {
      name: "nanoGPT Shakespeare Text Generator",
      liveUrl: "https://nanogpt-shakespeare-fbkhytvvfjpnvxyn3omrxx.streamlit.app/",
      tech: "PyTorch, Transformer Architecture, nanoGPT, Python, Streamlit, Generative AI",
      highlights: [
        "Deep learning autoregressive transformer model based on nanoGPT architecture.",
        "Trained on the Tiny Shakespeare dataset for real-time character and token-level text generation.",
        "Custom temperature scaling, top-k sampling, and prompt seed conditioning.",
        "Deployed as an interactive web application on Streamlit Cloud."
      ]
    },
    {
      name: "TikTokenizer (LLM Tokenization Visualizer)",
      liveUrl: "https://tiktokenizer.vercel.app/",
      tech: "Next.js, TypeScript, WebAssembly, tiktoken, BPE Tokenizer, OpenAI Encodings",
      highlights: [
        "Interactive LLM tokenization visualizer and playground built for exploring Byte Pair Encoding (BPE) algorithms.",
        "Inspect real-time token splits, numerical token IDs, byte representations, and model encodings (cl100k_base, o200k_base).",
        "Calculates exact prompt token counts, character-to-token compression ratios, and OpenAI API pricing.",
        "High-performance client-side WebAssembly execution with zero backend latency."
      ]
    },
    {
      name: "Parallel Universe (Multiverse Web Experience)",
      liveUrl: "https://paralleluniverse-one.vercel.app/",
      tech: "React.js, WebGL, Interactive Canvas, Quantum Timeline Simulation, Tailwind CSS, Vercel",
      highlights: [
        "Interactive multiverse exploration platform visualizing branching quantum realities and dimensional divergence.",
        "Features dynamic visual simulations, responsive timeline tracking, and high-performance canvas animations.",
        "Engaging interactive controls for timeline divergence and quantum coherence evaluation.",
        "Deployed with high-availability serverless architecture on Vercel."
      ]
    },
    {
      name: "AI-OS (Intelligent Agentic Operating System)",
      liveUrl: "https://ai-os-frontend-2xvfmd0bk-rishav-raj-s-projects4.vercel.app/",
      tech: "Next.js, TypeScript, Agentic AI, Multi-Agent IPC, Cognitive Desktop, Tailwind CSS, Vercel",
      highlights: [
        "Autonomous cognitive operating system frontend featuring window orchestration and agent process scheduling.",
        "Built-in multi-agent IPC message bus, streaming LLM tool execution, and dynamic context memory management.",
        "System performance telemetry with real-time kernel load, thread concurrency, and sub-20ms IPC response.",
        "Deployed on Vercel with high-availability edge infrastructure."
      ]
    }
  ],
  skills: {
    languages: ["C#", "SQL", "Python", "C", "C++", "JavaScript", "TypeScript", "HTML5", "CSS3", "jQuery"],
    frontend: ["AngularJS", "React.js", "Redux", "Bootstrap", "Leaflet.js"],
    backend: ["ASP.NET MVC", ".NET Core", "REST APIs", "Web API", "Entity Framework", "ADO.NET", "Dapper", "LINQ", "FastAPI", "Node.js"],
    cloud: ["AWS (EC2, S3, EKS, Lambda, IAM, Secrets Manager)", "Azure"],
    messaging: ["Apache Kafka", "RabbitMQ", "Redis"],
    devops: ["Docker", "Kubernetes", "CI/CD Pipelines (GitHub Actions / Jenkins)", "Git", "Bitbucket", "Postman", "JIRA", "Visual Studio", "VS Code"],
    databases: ["SQL Server", "PostgreSQL", "MongoDB", "Stored Procedures", "Views", "Triggers", "SSMS"],
    ai_ml: ["Machine Learning", "Deep Learning", "Computer Vision", "CNN", "ResNet50", "OpenCV", "TensorFlow", "Scikit-learn"],
    security: ["OAuth2", "JWT", "RBAC", "API Security", "Cloud Security", "Agile / Scrum Methodologies"]
  }
};

class ResumeAIEngine {
  constructor() {
    this.customApiKey = localStorage.getItem('rishav_openai_key') || null;
    this.recognition = null;
    this.initSpeechRecognition();
  }

  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = 'en-US';
    }
  }

  getUserGreetingPrefix() {
    const name = localStorage.getItem('rishav_user_name') || 'Guest';
    const title = localStorage.getItem('rishav_user_title') || 'Sir';
    return `${name} ${title}`;
  }

  async query(userPrompt) {
    const greeting = this.getUserGreetingPrefix();
    const promptLower = userPrompt.toLowerCase();

    // Check Basic Control Commands
    if (promptLower.includes('stop speaking') || promptLower.includes('stop voice') || promptLower.includes('shut up') || promptLower.includes('quiet') || promptLower.includes('silence')) {
      if (window.voiceSynth) window.voiceSynth.stop();
      if (window.mascot) window.mascot.stopTalking();
      return `🛑 Voice speech stopped. How else can I assist you, ${greeting}?`;
    }

    if (promptLower.includes('mute') || promptLower.includes('unmute')) {
      const isMuted = window.soundFx ? window.soundFx.toggleMute() : true;
      const muteBtn = document.getElementById('mute-btn');
      if (muteBtn) muteBtn.innerHTML = isMuted ? '🔇' : '🔊';
      return isMuted ? `🔇 Audio muted.` : `🔊 Audio unmuted.`;
    }

    if (promptLower.includes('clear chat') || promptLower.includes('clear history')) {
      const chatContainer = document.getElementById('chat-messages');
      if (chatContainer) chatContainer.innerHTML = '<div class="chat-msg bot">Chat history cleared. How can I help you?</div>';
      return `Chat cleared.`;
    }

    // Custom OpenAI API Key mode
    if (this.customApiKey) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.customApiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              {
                role: 'system',
                content: `You are Rishav AI Bot representing Rishav Raj (.NET Full Stack Manager at Bandhan Bank & AI Engineer). Always address user politely as "${greeting}". Use this resume context: ${JSON.stringify(RISHAV_RESUME_KNOWLEDGE)}`
              },
              { role: 'user', content: userPrompt }
            ]
          })
        });

        if (response.ok) {
          const data = await response.json();
          return data.choices[0].message.content;
        }
      } catch (e) {
        console.warn('Custom LLM API failed, falling back to local engine:', e);
      }
    }

    // Local Resume Knowledge Engine
    if (promptLower.includes('hi') || promptLower.includes('hello') || promptLower.includes('hey') || promptLower.includes('who are you')) {
      return `Hello ${greeting}! I am Rishav AI Bot 🤖. Ask me anything about Rishav Raj's work at Bandhan Bank, his GAIA AI climate project, skills, or education!`;
    }

    if (promptLower.includes('bandhan bank') || promptLower.includes('experience') || promptLower.includes('manager') || promptLower.includes('neev') || promptLower.includes('microservice')) {
      return `Certainly ${greeting}! At **Bandhan Bank**, Rishav Raj serves as **.NET Full Stack Developer (Manager)** (Jun 2025 - Present):\n\n` +
        `• **Microservices**: Built 12+ ETB/NTB reporting microservices on the NEEV platform (ASP.NET MVC, C#, Angular, React, SQL Server) for **500+ branches**, boosting efficiency by **35%**.\n` +
        `• **Dashboards**: Created role-based dashboards for **1,200+ Branch/Cluster Heads** monitoring **100K+ accounts**.\n` +
        `• **API Automation**: Integrated TransUnion Bureau Trigger APIs, reducing manual lead generation effort by **80%**.\n` +
        `• **Performance**: Managed Kafka & RabbitMQ messaging with Redis caching, supporting **10,000+ daily concurrent requests** with **sub-100ms** response times!\n` +
        `• **DevOps & Cloud**: Orchestrated Docker, AWS EKS, Lambda, and CI/CD pipelines to cut release cycles by **50%**.`;
    }

    if (promptLower.includes('gaia') || promptLower.includes('climate') || promptLower.includes('project') || promptLower.includes('rag') || promptLower.includes('langgraph')) {
      return `Great question ${greeting}! **GAIA (Governance Assistant for Intelligent Climate Action)** is Rishav's flagship AI project:\n\n` +
        `• **Tech Stack**: React.js, FastAPI, Python, PostgreSQL, Leaflet.js, OpenAI LLMs, LangChain, LangGraph, RAG.\n` +
        `• **Features**: 5+ geospatial climate data layers, heat hotspot mapping across 1000+ locations, and simulation models.\n` +
        `• **Agentic AI**: Built an Agentic RAG assistant cutting manual climate policy analysis by **60%**!\n` +
        `🔗 Test the **Live Demo** right here: https://codex-hack-ugrh.vercel.app/`;
    }

    if (promptLower.includes('nanogpt') || promptLower.includes('shakespeare') || promptLower.includes('streamlit') || promptLower.includes('transformer')) {
      return `Certainly ${greeting}! **nanoGPT Shakespeare** is an exciting Generative AI project by Rishav:\n\n` +
        `• **Tech Stack**: PyTorch, Transformer Architecture, nanoGPT, Python, Streamlit.\n` +
        `• **Overview**: An autoregressive transformer model trained on the Tiny Shakespeare corpus with causal multi-head self-attention, tunable temperature, and token sampling.\n` +
        `• **Live App**: Deployed live on Streamlit Cloud!\n` +
        `🔗 Test the **Live Demo** here: https://nanogpt-shakespeare-fbkhytvvfjpnvxyn3omrxx.streamlit.app/`;
    }

    if (promptLower.includes('tiktoken') || promptLower.includes('tokenizer') || promptLower.includes('bpe') || promptLower.includes('token')) {
      return `Awesome question, ${greeting}! **TikTokenizer** is an interactive LLM tokenization playground:\n\n` +
        `• **Tech Stack**: Next.js, TypeScript, WebAssembly, tiktoken, BPE Tokenizer.\n` +
        `• **Features**: Live subword tokenization visualizer for OpenAI models (GPT-4o, GPT-4, GPT-3.5), showing token IDs, byte conversions, and prompt cost estimation with instant WebAssembly speed.\n` +
        `🔗 Test the **Live App** here: https://tiktokenizer.vercel.app/`;
    }

    if (promptLower.includes('parallel') || promptLower.includes('universe') || promptLower.includes('multiverse') || promptLower.includes('timeline')) {
      return `Fascinating topic, ${greeting}! **Parallel Universe** is an interactive multiverse exploration platform:\n\n` +
        `• **Tech Stack**: React.js, WebGL, Interactive Canvas, Quantum Simulation, Tailwind CSS.\n` +
        `• **Features**: Visualizes branching quantum realities, parallel timelines, and dimensional divergence with smooth animations and interactive timeline tracking.\n` +
        `🔗 Explore the **Live App** here: https://paralleluniverse-one.vercel.app/`;
    }

    if (promptLower.includes('ai-os') || promptLower.includes('aios') || promptLower.includes('operating system') || promptLower.includes('kernel')) {
      return `Exciting inquiry, ${greeting}! **AI-OS** is Rishav's next-generation Agentic Operating System frontend:\n\n` +
        `• **Tech Stack**: Next.js, TypeScript, Agentic AI, Multi-Agent IPC, Tailwind CSS, Vercel.\n` +
        `• **Features**: Autonomous cognitive desktop environment, intelligent process scheduling, multi-agent IPC message bus, dynamic window orchestration, and streaming tool execution.\n` +
        `🔗 Experience the **Live AI-OS Platform** here: https://ai-os-frontend-2xvfmd0bk-rishav-raj-s-projects4.vercel.app/`;
    }

    if (promptLower.includes('skill') || promptLower.includes('stack') || promptLower.includes('c#') || promptLower.includes('.net') || promptLower.includes('react') || promptLower.includes('aws')) {
      return `Rishav's core tech stack, ${greeting}:\n\n` +
        `• **Languages**: C#, SQL, Python, C, C++, JavaScript, TypeScript\n` +
        `• **Backend**: ASP.NET MVC, .NET Core, Web API, Entity Framework, Dapper, LINQ, FastAPI, Node.js\n` +
        `• **Frontend**: React.js, Redux, AngularJS, Bootstrap, Leaflet.js\n` +
        `• **Cloud & Infrastructure**: AWS (EC2, S3, EKS, Lambda, IAM), Docker, Kubernetes, CI/CD\n` +
        `• **Messaging & Caching**: Apache Kafka, RabbitMQ, Redis\n` +
        `• **Databases**: SQL Server, PostgreSQL, MongoDB`;
    }

    if (promptLower.includes('education') || promptLower.includes('bit') || promptLower.includes('mesra') || promptLower.includes('college') || promptLower.includes('cgpa')) {
      return `Here is Rishav's academic record, ${greeting}:\n\n` +
        `🎓 **BTech in Computer Science & Engineering** — Birla Institute of Technology (BIT), Mesra, Ranchi (2021-2025) | **CGPA: 8.1**\n` +
        `🏫 **Class 12 (PCM)** — SD ACAD (**92.6%**)\n` +
        `🏫 **Class 10** — GD DAV Public School (**96.8%**)`;
    }

    if (promptLower.includes('resume') || promptLower.includes('cv') || promptLower.includes('pdf') || promptLower.includes('download')) {
      return `Certainly ${greeting}! Here is Rishav Raj's official 1-page ATS Resume PDF:\n\n` +
        `📄 **[Click Here to Download Rishav_Raj_Resume.pdf](Rishav_Raj_Resume.pdf)**\n\n` +
        `• **Current Role**: .NET Full Stack Developer (Manager) @ Bandhan Bank\n` +
        `• **Education**: BIT Mesra (BTech CSE, 8.1 CGPA)\n` +
        `• **Key Expertise**: C#, ASP.NET Core, React, Kafka, Redis, AWS EKS, Agentic AI & RAG\n\n` +
        `You can also download it anytime via the **"Resume PDF"** button at the top right of the navigation bar!`;
    }

    if (promptLower.includes('contact') || promptLower.includes('hire') || promptLower.includes('email') || promptLower.includes('phone') || promptLower.includes('linkedin')) {
      return `Here is how to reach Rishav Raj, ${greeting}:\n\n` +
        `📧 **Email**: rishavrajjha24@gmail.com\n` +
        `📞 **Phone**: (+91) 6201689764\n` +
        `💼 **LinkedIn**: linkedin.com/in/rishav-raj-086207260\n` +
        `💻 **GitHub**: github.com/rishavraj2429`;
    }

    return `Thank you for asking, ${greeting}! Rishav Raj is a .NET Full Stack Manager at Bandhan Bank specializing in high-throughput C# microservices, React/Angular dashboards, cloud architecture (AWS EKS/Kafka), and AI web applications (GAIA RAG platform). How can I assist you further?`;
  }
}

window.aiEngine = new ResumeAIEngine();
