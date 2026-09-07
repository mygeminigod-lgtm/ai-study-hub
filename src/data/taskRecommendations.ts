import { TaskRecommendation } from '../types';

export const TASK_RECOMMENDATIONS: TaskRecommendation[] = [
  {
    id: 'ap-chem-frqs',
    taskTitle: 'Solve AP Chemistry equilibrium & stoichiometry',
    category: 'ap-science',
    icon: 'FlaskConical',
    recommendedToolIds: ['ap-chem-openai', 'ap-chem-phet', 'ap-science-central'],
    explanations: {
      'ap-chem-openai': 'Derives equilibrium ICE tables, buffer pH, thermodynamics, and electrochemistry step-by-step.',
      'ap-chem-phet': 'Simulates acid-base titration curves, Le Chatelier shifts, and gas laws visually before calculations.',
      'ap-science-central': 'Access official College Board past released AP Chemistry FRQs and grading guidelines.'
    }
  },
  {
    id: 'ap-physics-frqs',
    taskTitle: 'Debug AP Physics diagrams & calculus mechanics',
    category: 'ap-science',
    icon: 'Atom',
    recommendedToolIds: ['ap-physics-gemini', 'ap-physics-deepseek', 'ap-chem-phet'],
    explanations: {
      'ap-physics-gemini': 'Audits photos of handwritten free-body diagrams, Kirchhoff loop equations, and circuit schematics.',
      'ap-physics-deepseek': 'Solves calculus-based moment of inertia integrals, damping differential equations, and Gauss’s law.',
      'ap-chem-phet': 'Builds virtual AC/DC circuits and visualizes projectile motion and wave optics.'
    }
  },
  {
    id: 'ap-bio-labs',
    taskTitle: 'Analyze AP Biology experimental data & pathways',
    category: 'ap-science',
    icon: 'Dna',
    recommendedToolIds: ['ap-bio-notebooklm', 'ap-bio-hhmi', 'consensus'],
    explanations: {
      'ap-bio-notebooklm': 'Grounded exclusively in your uploaded textbook chapters and cellular energetics pathways.',
      'ap-bio-hhmi': 'Simulates real biological datasets, Hardy-Weinberg population dynamics, and virtual genetics labs.',
      consensus: 'Searches peer-reviewed papers to confirm biological experimental conclusions with consensus meters.'
    }
  },
  {
    id: 'ap-apes-data',
    taskTitle: 'Calculate AP Environmental Science (APES) data',
    category: 'ap-science',
    icon: 'LineChart',
    recommendedToolIds: ['ap-apes-perplexity', 'ap-apes-ourworldindata', 'ap-science-knowt'],
    explanations: {
      'ap-apes-perplexity': 'Retrieves verified legislation facts (Clean Air Act, CERCLA) and environmental case studies with citations.',
      'ap-apes-ourworldindata': 'Master real-world demographic transition pyramids, greenhouse gas emissions, and deforestation data.',
      'ap-science-knowt': 'Practice APES diagnostic exams and unit-by-unit flashcards aligned directly with the CED.'
    }
  },
  {
    id: 'ap-psych-brain',
    taskTitle: 'Master AP Psychology brain anatomy & experiment design',
    category: 'ap-science',
    icon: 'Brain',
    recommendedToolIds: ['ap-psych-brainfacts', 'ap-psych-claude', 'ap-science-knowt'],
    explanations: {
      'ap-psych-brainfacts': 'Rotate and slice 3D brain lobes, limbic structures, and neurotransmitter pathways for Unit 2.',
      'ap-psych-claude': 'Evaluates experimental design FRQs, operational definitions, confounding variables, and ethics.',
      'ap-science-knowt': 'Practice CED-aligned AP Psychology flashcard rooms and diagnostic tests.'
    }
  },
  {
    id: 'ap-csa-recursion',
    taskTitle: 'Trace AP Computer Science A Java recursion & OOP',
    category: 'ap-science',
    icon: 'Code',
    recommendedToolIds: ['ap-csa-qwen', 'ap-cs-pythontutor', 'ap-science-knowt'],
    explanations: {
      'ap-csa-qwen': 'Simulates step-by-step Java execution stacks for recursion, 2D arrays, and class polymorphism.',
      'ap-cs-pythontutor': 'Visualizes live heap memory, object pointers, and stack frame mutations line-by-line.',
      'ap-science-knowt': 'Complete AP CSA unit-by-unit practice rooms and Java multiple choice diagnostics.'
    }
  },
  {
    id: 'ap-science-3d-labs',
    taskTitle: 'Model 3D chemical structures & virtual labs',
    category: 'ap-science',
    icon: 'Layers',
    recommendedToolIds: ['ap-chem-molview', 'ap-chem-chemcollective', 'ap-bio-rcsb'],
    explanations: {
      'ap-chem-molview': 'Visualize 3D VSEPR geometries, bond dipole moments, and organic functional groups.',
      'ap-chem-chemcollective': 'Perform virtual acid-base titrations, buffer preparations, and thermochemistry experiments.',
      'ap-bio-rcsb': 'Explore 3D crystalline structures of proteins, enzyme active sites, and DNA replication forks.'
    }
  },
  {
    id: 'grade-ap-essays',
    taskTitle: 'Grade DBQ / LEQ against AP rubrics',
    category: 'ap-prep',
    icon: 'Award',
    recommendedToolIds: ['ap-claude', 'writing-chatgpt', 'ap-central'],
    explanations: {
      'ap-claude': 'Evaluates DBQs, LEQs, and rhetorical analyses directly against College Board rubrics with point breakdowns.',
      'writing-chatgpt': 'Suggests counter-arguments, thesis adjustments, and additional historical evidence.',
      'ap-central': 'Access official released scoring guidelines and Chief Reader commentary to calibrate scoring.'
    }
  },
  {
    id: 'solve-ap-frqs',
    taskTitle: 'Solve AP Calculus, Statistics & CS FRQs',
    category: 'ap-prep',
    icon: 'BrainCircuit',
    recommendedToolIds: ['ap-openai', 'ap-deepseek', 'ap-qwen'],
    explanations: {
      'ap-openai': 'o1 and o3-mini models detail every step and justification needed to secure full College Board points.',
      'ap-deepseek': 'Verifies multi-step calculations, probability distributions, and quantitative homework sets.',
      'ap-qwen': 'Proves mechanics steps and traces AP Computer Science A Java recursion logic.'
    }
  },
  {
    id: 'ap-practice-exams',
    taskTitle: 'Practice AP exams & flashcards',
    category: 'ap-prep',
    icon: 'BookCheck',
    recommendedToolIds: ['ap-science-knowt', 'ap-central', 'notebooklm'],
    explanations: {
      'ap-science-knowt': 'Provides practice exam rooms and flashcard decks aligned with official College Board CED units.',
      'ap-central': 'The official repository of 15+ years of released past exam FRQs and scoring rubrics.',
      notebooklm: 'Upload your class notes, textbook units, and review sheets for custom Q&A and audio overviews.'
    }
  },
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
    taskTitle: 'Understand a complex paper / book',
    category: 'research',
    icon: 'BookOpen',
    recommendedToolIds: ['notebooklm', 'kimi', 'writing-claude'],
    explanations: {
      notebooklm: 'Grounds all answers exclusively in your uploaded PDF without hallucinations, plus generates audio discussions.',
      kimi: 'Vast context window allows dropping full books and stacks of papers for structured summaries.',
      'writing-claude': 'Excels at breaking down dense academic jargon, methodologies, and philosophical nuance.'
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
    recommendedToolIds: ['stem-openai', 'stem-deepseek', 'stem-qwen'],
    explanations: {
      'stem-openai': 'o1 and o3-mini models deliver rigorous step-by-step mathematical reasoning and proofs.',
      'stem-deepseek': 'R1 reasoning model excels in complex competitive math, formal logic, and Olympiad-level equations.',
      'stem-qwen': 'Specialized math reasoning model that solves equations and geometric proofs with high precision.'
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
    recommendedToolIds: ['cursor', 'coding-qwen', 'claude-code'],
    explanations: {
      cursor: 'Indexes your entire repository to trace bugs across files and compiler error traces.',
      'coding-qwen': 'Specialized open coding model that catches syntax, algorithmic, and terminal logic errors.',
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
    recommendedToolIds: ['midjourney', 'ideogram', 'flux'],
    explanations: {
      midjourney: 'Industry-leading aesthetic fidelity and photorealism for presentation hero visuals.',
      ideogram: 'Renders flawless, crisp typography and text banners directly inside generated graphic art.',
      flux: 'Superior prompt adherence and anatomically accurate figures with open flexibility.'
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
