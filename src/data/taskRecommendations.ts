import { TaskRecommendation } from '../types';

export const TASK_RECOMMENDATIONS: TaskRecommendation[] = [
  {
    id: 'find-papers',
    taskTitle: 'Find research papers',
    category: 'research',
    icon: 'Search',
    recommendedToolIds: ['consensus', 'elicit', 'perplexity'],
    explanations: {
      consensus: 'Searches 200M+ peer-reviewed papers and provides a Consensus Meter on your question.',
      elicit: 'Discovers relevant empirical studies and automatically extracts key outcomes into structured tables.',
      perplexity: 'Gives direct conversational answers backed by academic sources with inline clickable links.'
    }
  },
  {
    id: 'understand-paper',
    taskTitle: 'Understand a complex paper',
    category: 'research',
    icon: 'BookOpen',
    recommendedToolIds: ['notebooklm', 'claude', 'gemini'],
    explanations: {
      notebooklm: 'Grounds all answers exclusively in your uploaded PDF without hallucinations, plus generates audio discussions.',
      claude: 'Excels at breaking down dense academic jargon, methodologies, and philosophical nuance.',
      gemini: 'Large context window allows uploading the entire paper plus supplementary data and figures for full analysis.'
    }
  },
  {
    id: 'literature-review',
    taskTitle: 'Write a literature review',
    category: 'research',
    icon: 'FileText',
    recommendedToolIds: ['elicit', 'consensus', 'scite'],
    explanations: {
      elicit: 'Systematically compares study methodologies, sample sizes, and findings across multiple papers in minutes.',
      consensus: 'Synthesizes scientific consensus across hundreds of studies for your thesis statement.',
      scite: 'Validates that the studies you include are well-supported and not refuted by subsequent research.'
    }
  },
  {
    id: 'check-citations',
    taskTitle: 'Check & validate citations',
    category: 'research',
    icon: 'CheckCircle2',
    recommendedToolIds: ['scite', 'consensus', 'perplexity'],
    explanations: {
      scite: 'Uses Smart Citations to show whether each cited study was supported, contrasted, or just mentioned.',
      consensus: 'Finds verified peer-reviewed publications confirming specific scientific or factual claims.',
      perplexity: 'Verifies claims with real-time web and academic citations to avoid hallucinated references.'
    }
  },
  {
    id: 'solve-math',
    taskTitle: 'Solve math & STEM problems',
    category: 'stem',
    icon: 'Binary',
    recommendedToolIds: ['chatgpt', 'deepseek', 'gemini'],
    explanations: {
      chatgpt: 'o1 and o3-mini models deliver rigorous step-by-step mathematical reasoning and proofs.',
      deepseek: 'R1 reasoning model excels in complex competitive math, formal logic, and Olympiad-level equations.',
      gemini: 'Understands handwritten formulas, diagrams, and complex scientific plots from images.'
    }
  },
  {
    id: 'learn-programming',
    taskTitle: 'Learn programming concepts',
    category: 'coding',
    icon: 'GraduationCap',
    recommendedToolIds: ['github-copilot', 'cursor', 'replit'],
    explanations: {
      'github-copilot': 'Free for verified students; offers inline hints, explanations, and syntax examples as you type.',
      cursor: 'Allows you to highlight any confusing code block and ask for clear, interactive explanations.',
      replit: 'Zero-setup browser environment lets you practice Python, C++, Java, or JS immediately with AI guidance.'
    }
  },
  {
    id: 'debug-code',
    taskTitle: 'Debug code & fix errors',
    category: 'coding',
    icon: 'Bug',
    recommendedToolIds: ['cursor', 'windsurf', 'claude-code'],
    explanations: {
      cursor: 'Indexes your entire repository to trace bugs across files and compiler error traces.',
      windsurf: 'Cascade flow automatically tracks variable dependencies and fixes logic errors across multi-file projects.',
      'claude-code': 'Runs directly in your terminal, executes test suites, and autonomously patches broken code.'
    }
  },
  {
    id: 'build-website',
    taskTitle: 'Build a web project / UI',
    category: 'coding',
    icon: 'Layout',
    recommendedToolIds: ['v0', 'replit', 'cursor'],
    explanations: {
      v0: 'Generates responsive modern React and Tailwind CSS components instantly from natural language prompts.',
      replit: 'Full-stack cloud environment that writes code and hosts your live web application with a shareable URL.',
      cursor: 'Ideal editor for stitching together frontend components, APIs, and state management locally.'
    }
  },
  {
    id: 'create-image',
    taskTitle: 'Create an image or graphic',
    category: 'visual',
    icon: 'Image',
    recommendedToolIds: ['midjourney', 'ideogram', 'black-forest-labs-flux'],
    explanations: {
      midjourney: 'Industry-leading aesthetic fidelity and photorealism for presentation hero visuals.',
      ideogram: 'Renders flawless, crisp typography and text banners directly inside generated graphic art.',
      'black-forest-labs-flux': 'Superior prompt adherence and anatomically accurate figures with open flexibility.'
    }
  },
  {
    id: 'create-presentation',
    taskTitle: 'Create presentation visuals',
    category: 'visual',
    icon: 'Presentation',
    recommendedToolIds: ['ideogram', 'adobe-firefly', 'midjourney'],
    explanations: {
      ideogram: 'Perfect for slide title designs, infographics, and poster visuals with readable headings.',
      'adobe-firefly': 'Generates transparent assets and vector-style graphics that fit cleanly into PowerPoint/Keynote.',
      midjourney: 'Produces cinematic background concepts and mood-setting slide illustrations.'
    }
  },
  {
    id: 'generate-video',
    taskTitle: 'Generate video clips',
    category: 'video-audio',
    icon: 'Video',
    recommendedToolIds: ['google-veo', 'runway', 'kling-ai'],
    explanations: {
      'google-veo': 'Produces high-definition 1080p clips with coherent physics and cinematic camera direction.',
      runway: 'Gen-3 Alpha offers motion brush, camera controls, and video-to-video creative styling.',
      'kling-ai': 'Simulates realistic physical motion and generates extended duration video sequences.'
    }
  },
  {
    id: 'generate-voice',
    taskTitle: 'Generate voiceovers / narration',
    category: 'video-audio',
    icon: 'Mic',
    recommendedToolIds: ['elevenlabs', 'descript', 'suno'],
    explanations: {
      elevenlabs: 'Most lifelike voice synthesis with natural human inflections in dozens of languages.',
      descript: 'Record and edit your own voiceovers with automatic studio-sound cleanup and transcript editing.',
      suno: 'Can create catchy vocal hooks and spoken intro jingles for multimedia projects.'
    }
  },
  {
    id: 'make-music',
    taskTitle: 'Make background music / audio',
    category: 'video-audio',
    icon: 'Music',
    recommendedToolIds: ['suno', 'udio', 'descript'],
    explanations: {
      suno: 'Generates complete songs and catchy musical tracks from simple descriptive prompts in any genre.',
      udio: 'Delivers studio-mastered instrumentals, complex musical arrangements, and custom soundtracks.',
      descript: 'Provides professional multitrack mixing, audio leveling, and background noise removal.'
    }
  }
];
