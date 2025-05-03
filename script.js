// Sample AI tools data
const tools = [
    // Productivity & Automation
    {
        name: "Notion AI",
        description: "AI-powered workspace for enhanced productivity and organization",
        category: "productivity",
        link: "https://www.notion.so/product/ai"
    },
    {
        name: "Grammarly",
        description: "AI-powered writing assistant for better communication",
        category: "productivity",
        link: "https://www.grammarly.com"
    },
    {
        name: "Otter.ai",
        description: "AI-powered transcription and note-taking tool",
        category: "productivity",
        link: "https://otter.ai"
    },
    {
        name: "Fireflies.ai",
        description: "AI meeting assistant for transcription and analysis",
        category: "productivity",
        link: "https://fireflies.ai"
    },
    {
        name: "Reclaim.ai",
        description: "AI-powered calendar and task management",
        category: "productivity",
        link: "https://reclaim.ai"
    },
    {
        name: "Motion",
        description: "AI-powered project management and scheduling",
        category: "productivity",
        link: "https://www.usemotion.com"
    },
    {
        name: "Superhuman",
        description: "AI-powered email client for faster communication",
        category: "productivity",
        link: "https://superhuman.com"
    },
    {
        name: "SaneBox",
        description: "AI email management and organization",
        category: "productivity",
        link: "https://www.sanebox.com"
    },
    {
        name: "HyperWrite",
        description: "AI writing assistant for content creation",
        category: "productivity",
        link: "https://hyperwrite.ai"
    },
    {
        name: "Magical",
        description: "AI-powered text expansion and automation",
        category: "productivity",
        link: "https://getmagical.com"
    },
    {
        name: "Compose AI",
        description: "AI writing assistant for faster content creation",
        category: "productivity",
        link: "https://compose.ai"
    },
    {
        name: "ClickUp AI",
        description: "AI-powered project management and task automation",
        category: "productivity",
        link: "https://clickup.com/ai"
    },
    {
        name: "Mem.ai",
        description: "AI-powered knowledge management and note-taking",
        category: "productivity",
        link: "https://mem.ai"
    },
    {
        name: "Taskade",
        description: "AI-powered task management and collaboration",
        category: "productivity",
        link: "https://www.taskade.com"
    },
    {
        name: "Text Blaze",
        description: "AI-powered text expansion and automation",
        category: "productivity",
        link: "https://blaze.today"
    },
    {
        name: "x.ai",
        description: "AI scheduling assistant for meetings",
        category: "productivity",
        link: "https://x.ai"
    },
    {
        name: "Tactiq",
        description: "AI-powered meeting transcription and notes",
        category: "productivity",
        link: "https://tactiq.io"
    },

    // Coding & Development
    {
        name: "GitHub Copilot",
        description: "AI pair programmer that helps you write better code",
        category: "coding",
        link: "https://github.com/features/copilot"
    },
    {
        name: "Tabnine",
        description: "AI code completion tool that speeds up development",
        category: "coding",
        link: "https://www.tabnine.com"
    },
    {
        name: "Amazon CodeWhisperer",
        description: "AI-powered code suggestions and completion",
        category: "coding",
        link: "https://aws.amazon.com/codewhisperer"
    },
    {
        name: "Replit Ghostwriter",
        description: "AI coding assistant for the Replit platform",
        category: "coding",
        link: "https://replit.com/ghostwriter"
    },
    {
        name: "Codeium",
        description: "AI-powered code completion and suggestions",
        category: "coding",
        link: "https://codeium.com"
    },
    {
        name: "AskCodi",
        description: "AI coding assistant for faster development",
        category: "coding",
        link: "https://www.askcodi.com"
    },
    {
        name: "Codex",
        description: "AI system that translates natural language to code",
        category: "coding",
        link: "https://openai.com/blog/openai-codex"
    },
    {
        name: "Mutable.ai",
        description: "AI-powered code generation and refactoring",
        category: "coding",
        link: "https://mutable.ai"
    },
    {
        name: "Sourcegraph Cody",
        description: "AI coding assistant for code search and understanding",
        category: "coding",
        link: "https://about.sourcegraph.com/cody"
    },
    {
        name: "Blackbox",
        description: "AI-powered code search and completion",
        category: "coding",
        link: "https://www.blackbox.ai"
    },
    {
        name: "Kite",
        description: "AI-powered code completion and documentation",
        category: "coding",
        link: "https://www.kite.com"
    },
    {
        name: "Snyk AI",
        description: "AI-powered security scanning for code",
        category: "coding",
        link: "https://snyk.io"
    },
    {
        name: "Pieces for Developers",
        description: "AI-powered code snippet management",
        category: "coding",
        link: "https://pieces.app"
    },
    {
        name: "AI Code Reviewer",
        description: "Automated code review and suggestions",
        category: "coding",
        link: "https://www.aicode.review"
    },
    {
        name: "Codiga",
        description: "AI-powered code analysis and security",
        category: "coding",
        link: "https://www.codiga.io"
    },
    {
        name: "Phind",
        description: "AI-powered code search and documentation",
        category: "coding",
        link: "https://phind.com"
    },
    {
        name: "CodeT5",
        description: "AI code generation and understanding",
        category: "coding",
        link: "https://github.com/salesforce/CodeT5"
    },

    // Chatbots & Virtual Assistants
    {
        name: "ChatGPT",
        description: "Advanced AI chatbot for conversation and task assistance",
        category: "chatbots",
        link: "https://chat.openai.com"
    },
    {
        name: "Claude",
        description: "AI assistant focused on helpful, honest, and harmless interactions",
        category: "chatbots",
        link: "https://claude.ai"
    },
    {
        name: "Google Bard",
        description: "Google's conversational AI assistant",
        category: "chatbots",
        link: "https://bard.google.com"
    },
    {
        name: "Microsoft Copilot",
        description: "AI assistant integrated with Microsoft products",
        category: "chatbots",
        link: "https://www.microsoft.com/en-us/copilot"
    },
    {
        name: "YouChat",
        description: "AI-powered conversational search and assistance",
        category: "chatbots",
        link: "https://you.com/chat"
    },
    {
        name: "Perplexity AI",
        description: "AI-powered search and question answering",
        category: "chatbots",
        link: "https://www.perplexity.ai"
    },
    {
        name: "Jasper Chat",
        description: "AI writing assistant with chat capabilities",
        category: "chatbots",
        link: "https://www.jasper.ai/chat"
    },
    {
        name: "Replika",
        description: "AI companion for conversation and emotional support",
        category: "chatbots",
        link: "https://replika.ai"
    },
    {
        name: "Character AI",
        description: "AI-powered character-based conversations",
        category: "chatbots",
        link: "https://character.ai"
    },
    {
        name: "Intercom Fin AI",
        description: "AI-powered customer support automation",
        category: "chatbots",
        link: "https://www.intercom.com/fin"
    },
    {
        name: "Drift",
        description: "AI-powered conversational marketing platform",
        category: "chatbots",
        link: "https://www.drift.com"
    },
    {
        name: "Tidio",
        description: "AI-powered live chat and customer support",
        category: "chatbots",
        link: "https://www.tidio.com"
    },
    {
        name: "Landbot",
        description: "AI-powered chatbot builder for websites",
        category: "chatbots",
        link: "https://landbot.io"
    },
    {
        name: "Kore.ai",
        description: "Enterprise-grade conversational AI platform",
        category: "chatbots",
        link: "https://kore.ai"
    },
    {
        name: "Botsify",
        description: "AI chatbot builder for customer service",
        category: "chatbots",
        link: "https://botsify.com"
    },
    {
        name: "Freshchat AI",
        description: "AI-powered customer messaging platform",
        category: "chatbots",
        link: "https://www.freshworks.com/freshchat"
    },
    {
        name: "Kommunicate",
        description: "AI-powered customer support automation",
        category: "chatbots",
        link: "https://www.kommunicate.io"
    },

    // Design Tools
    {
        name: "Midjourney",
        description: "AI-powered image generation tool for creating stunning visuals",
        category: "design",
        link: "https://www.midjourney.com"
    },
    {
        name: "DALL·E 3",
        description: "AI system that creates realistic images from text descriptions",
        category: "design",
        link: "https://openai.com/dall-e-2"
    },
    {
        name: "Leonardo AI",
        description: "AI-powered image generation and editing",
        category: "design",
        link: "https://leonardo.ai"
    },
    {
        name: "Stable Diffusion",
        description: "Open-source AI image generation model",
        category: "design",
        link: "https://stability.ai"
    },
    {
        name: "Adobe Firefly",
        description: "AI-powered creative tools by Adobe",
        category: "design",
        link: "https://www.adobe.com/sensei/generative-ai/firefly.html"
    },
    {
        name: "Bing Image Creator",
        description: "AI-powered image generation by Microsoft",
        category: "design",
        link: "https://www.bing.com/create"
    },
    {
        name: "Craiyon",
        description: "AI image generation from text prompts",
        category: "design",
        link: "https://www.craiyon.com"
    },
    {
        name: "NightCafe",
        description: "AI art generation and community platform",
        category: "design",
        link: "https://nightcafe.studio"
    },
    {
        name: "Deep Dream Generator",
        description: "AI-powered artistic image generation",
        category: "design",
        link: "https://deepdreamgenerator.com"
    },
    {
        name: "Runway Gen-2",
        description: "AI-powered image and video generation",
        category: "design",
        link: "https://runwayml.com"
    },
    {
        name: "Fotor AI",
        description: "AI-powered photo editing and enhancement",
        category: "design",
        link: "https://www.fotor.com/features/ai-image-generator"
    },
    {
        name: "Artbreeder",
        description: "AI-powered image mixing and generation",
        category: "design",
        link: "https://www.artbreeder.com"
    },
    {
        name: "Dream by Wombo",
        description: "AI-powered art generation app",
        category: "design",
        link: "https://dream.ai"
    },
    {
        name: "Playground AI",
        description: "AI-powered image generation and editing",
        category: "design",
        link: "https://playground.ai"
    },
    {
        name: "VanceAI",
        description: "AI-powered image enhancement and editing",
        category: "design",
        link: "https://vanceai.com"
    },
    {
        name: "Getimg.ai",
        description: "AI-powered image generation and editing",
        category: "design",
        link: "https://getimg.ai"
    },
    {
        name: "StarryAI",
        description: "AI-powered art generation platform",
        category: "design",
        link: "https://starryai.com"
    },

    // Research Tools
    {
        name: "Elicit",
        description: "AI research assistant that helps find and analyze papers",
        category: "research",
        link: "https://elicit.org"
    },
    {
        name: "Scite.ai",
        description: "AI-powered research paper analysis and citation",
        category: "research",
        link: "https://scite.ai"
    },
    {
        name: "Scholarcy",
        description: "AI-powered research paper summarization",
        category: "research",
        link: "https://www.scholarcy.com"
    },
    {
        name: "Consensus AI",
        description: "AI-powered research paper search and analysis",
        category: "research",
        link: "https://consensus.app"
    },
    {
        name: "Research Rabbit",
        description: "AI-powered research paper discovery",
        category: "research",
        link: "https://www.researchrabbit.ai"
    },
    {
        name: "Paperpile",
        description: "AI-powered reference management",
        category: "research",
        link: "https://paperpile.com"
    },
    {
        name: "Semantic Scholar",
        description: "AI-powered academic search engine",
        category: "research",
        link: "https://www.semanticscholar.org"
    },
    {
        name: "Genei",
        description: "AI-powered research paper summarization",
        category: "research",
        link: "https://www.genei.io"
    },
    {
        name: "TLDR This",
        description: "AI-powered article summarization",
        category: "research",
        link: "https://tldrthis.com"
    },
    {
        name: "ExplainPaper",
        description: "AI-powered research paper explanation",
        category: "research",
        link: "https://www.explainpaper.com"
    },
    {
        name: "Humata AI",
        description: "AI-powered document analysis and summarization",
        category: "research",
        link: "https://www.humata.ai"
    },
    {
        name: "PDFgear AI",
        description: "AI-powered PDF analysis and summarization",
        category: "research",
        link: "https://pdfgear.com"
    },
    {
        name: "Smodin",
        description: "AI-powered research and writing assistance",
        category: "research",
        link: "https://smodin.io"
    },
    {
        name: "Litmaps",
        description: "AI-powered research paper visualization",
        category: "research",
        link: "https://www.litmaps.com"
    },
    {
        name: "Iris.ai",
        description: "AI-powered research paper discovery",
        category: "research",
        link: "https://iris.ai"
    },

    // Presentation Tools
    {
        name: "Beautiful.ai",
        description: "AI-powered presentation tool that designs slides automatically",
        category: "presentation",
        link: "https://www.beautiful.ai"
    },
    {
        name: "Gamma.app",
        description: "AI-powered presentation creation",
        category: "presentation",
        link: "https://gamma.app"
    },
    {
        name: "Tome.app",
        description: "AI-powered storytelling and presentation",
        category: "presentation",
        link: "https://tome.app"
    },
    {
        name: "SlidesAI",
        description: "AI-powered slide creation and design",
        category: "presentation",
        link: "https://slidesai.io"
    },
    {
        name: "Canva Magic Design",
        description: "AI-powered design suggestions for presentations",
        category: "presentation",
        link: "https://www.canva.com/magic-design"
    },
    {
        name: "Decktopus",
        description: "AI-powered presentation creation",
        category: "presentation",
        link: "https://www.decktopus.com"
    },
    {
        name: "Pitch",
        description: "AI-powered presentation and collaboration",
        category: "presentation",
        link: "https://pitch.com"
    },
    {
        name: "Simplified",
        description: "AI-powered presentation design",
        category: "presentation",
        link: "https://simplified.com"
    },
    {
        name: "Designs.ai",
        description: "AI-powered design and presentation tools",
        category: "presentation",
        link: "https://designs.ai"
    },
    {
        name: "Slidebean",
        description: "AI-powered presentation creation",
        category: "presentation",
        link: "https://slidebean.com"
    },
    {
        name: "Visme AI",
        description: "AI-powered presentation and design",
        category: "presentation",
        link: "https://www.visme.co"
    },
    {
        name: "Prezi AI",
        description: "AI-powered presentation creation",
        category: "presentation",
        link: "https://prezi.com"
    },
    {
        name: "Sendsteps AI",
        description: "AI-powered interactive presentations",
        category: "presentation",
        link: "https://www.sendsteps.com"
    },
    {
        name: "Zoho Show with Zia",
        description: "AI-powered presentation assistant",
        category: "presentation",
        link: "https://www.zoho.com/show"
    },
    {
        name: "Presentations.AI",
        description: "AI-powered presentation creation",
        category: "presentation",
        link: "https://presentations.ai"
    },
    {
        name: "Plus AI",
        description: "AI-powered Google Slides assistant",
        category: "presentation",
        link: "https://www.plusdocs.com/plus-ai"
    },

    // Content Writing & Copywriting
    {
        name: "Jasper",
        description: "AI content creation platform for marketing and copywriting",
        category: "content",
        link: "https://www.jasper.ai"
    },
    {
        name: "Copy.ai",
        description: "AI-powered copywriting and content generation",
        category: "content",
        link: "https://www.copy.ai"
    },
    {
        name: "Rytr",
        description: "AI writing assistant for various content types",
        category: "content",
        link: "https://rytr.me"
    },
    {
        name: "Writesonic",
        description: "AI-powered content creation and optimization",
        category: "content",
        link: "https://writesonic.com"
    },
    {
        name: "Scalenut",
        description: "AI content research and writing platform",
        category: "content",
        link: "https://www.scalenut.com"
    },
    {
        name: "Anyword",
        description: "AI copywriting and content optimization",
        category: "content",
        link: "https://anyword.com"
    },
    {
        name: "Ink",
        description: "AI content optimization and SEO writing",
        category: "content",
        link: "https://inkforall.com"
    },
    {
        name: "Peppertype.ai",
        description: "AI content creation and copywriting",
        category: "content",
        link: "https://www.peppertype.ai"
    },
    {
        name: "Smartwriter.ai",
        description: "AI-powered content and email writing",
        category: "content",
        link: "https://www.smartwriter.ai"
    },
    {
        name: "Texta.ai",
        description: "AI content generation and optimization",
        category: "content",
        link: "https://texta.ai"
    },
    {
        name: "LongShot AI",
        description: "AI content research and writing",
        category: "content",
        link: "https://www.longshot.ai"
    },
    {
        name: "Neuroflash",
        description: "AI content creation and optimization",
        category: "content",
        link: "https://neuroflash.com"
    },
    {
        name: "ClosersCopy",
        description: "AI copywriting and content generation",
        category: "content",
        link: "https://www.closerscopy.com"
    },
    {
        name: "Frase.io",
        description: "AI content research and optimization",
        category: "content",
        link: "https://www.frase.io"
    },
    {
        name: "Simplified",
        description: "AI content creation and design",
        category: "content",
        link: "https://simplified.com"
    },
    {
        name: "AI-Writer",
        description: "AI content research and writing",
        category: "content",
        link: "https://ai-writer.com"
    },
    {
        name: "Paragraph AI",
        description: "AI writing assistant for content creation",
        category: "content",
        link: "https://paragraphai.com"
    },

    // Video Creation & Editing
    {
        name: "Pictory",
        description: "AI video creation from text and articles",
        category: "video",
        link: "https://pictory.ai"
    },
    {
        name: "Synthesia",
        description: "AI video generation with virtual presenters",
        category: "video",
        link: "https://www.synthesia.io"
    },
    {
        name: "Lumen5",
        description: "AI video creation from blog posts and articles",
        category: "video",
        link: "https://lumen5.com"
    },
    {
        name: "Runway ML",
        description: "AI video editing and effects",
        category: "video",
        link: "https://runwayml.com"
    },
    {
        name: "InVideo",
        description: "AI-powered video creation platform",
        category: "video",
        link: "https://invideo.io"
    },
    {
        name: "Descript",
        description: "AI video and audio editing",
        category: "video",
        link: "https://www.descript.com"
    },
    {
        name: "Elai.io",
        description: "AI video creation with virtual presenters",
        category: "video",
        link: "https://elai.io"
    },
    {
        name: "Colossyan",
        description: "AI video creation with virtual actors",
        category: "video",
        link: "https://www.colossyan.com"
    },
    {
        name: "FlexClip",
        description: "AI-powered video creation and editing",
        category: "video",
        link: "https://www.flexclip.com"
    },
    {
        name: "Animoto",
        description: "AI video creation and editing",
        category: "video",
        link: "https://animoto.com"
    },
    {
        name: "DeepBrain",
        description: "AI video generation with virtual humans",
        category: "video",
        link: "https://www.deepbrain.io"
    },
    {
        name: "Rephrase.ai",
        description: "AI video creation with virtual presenters",
        category: "video",
        link: "https://www.rephrase.ai"
    },
    {
        name: "HeyGen",
        description: "AI video creation with virtual avatars",
        category: "video",
        link: "https://www.heygen.com"
    },
    {
        name: "Raw Shorts",
        description: "AI video creation and animation",
        category: "video",
        link: "https://www.rawshorts.com"
    },
    {
        name: "Kapwing",
        description: "AI-powered video editing and creation",
        category: "video",
        link: "https://www.kapwing.com"
    },
    {
        name: "Wisecut",
        description: "AI video editing and optimization",
        category: "video",
        link: "https://www.wisecut.video"
    },
    {
        name: "Veed.io",
        description: "AI video editing and creation",
        category: "video",
        link: "https://www.veed.io"
    },

    // Voice & Speech Tools
    {
        name: "ElevenLabs",
        description: "AI voice generation and cloning",
        category: "voice",
        link: "https://elevenlabs.io"
    },
    {
        name: "Murf.ai",
        description: "AI voice generation and text-to-speech",
        category: "voice",
        link: "https://murf.ai"
    },
    {
        name: "Play.ht",
        description: "AI text-to-speech and voice generation",
        category: "voice",
        link: "https://play.ht"
    },
    {
        name: "Lovo.ai",
        description: "AI voice generation and cloning",
        category: "voice",
        link: "https://lovo.ai"
    },
    {
        name: "Resemble.ai",
        description: "AI voice cloning and generation",
        category: "voice",
        link: "https://www.resemble.ai"
    },
    {
        name: "Voicemod",
        description: "AI voice changing and effects",
        category: "voice",
        link: "https://www.voicemod.net"
    },
    {
        name: "Replica Studios",
        description: "AI voice generation for games and media",
        category: "voice",
        link: "https://replicastudios.com"
    },
    {
        name: "Cleanvoice AI",
        description: "AI audio cleaning and enhancement",
        category: "voice",
        link: "https://cleanvoice.ai"
    },
    {
        name: "Speechify",
        description: "AI text-to-speech and audio creation",
        category: "voice",
        link: "https://speechify.com"
    },
    {
        name: "Podcastle",
        description: "AI podcast creation and editing",
        category: "voice",
        link: "https://podcastle.ai"
    },
    {
        name: "Descript Overdub",
        description: "AI voice cloning and editing",
        category: "voice",
        link: "https://www.descript.com/overdub"
    },
    {
        name: "Listnr",
        description: "AI text-to-speech and voice generation",
        category: "voice",
        link: "https://www.listnr.tech"
    },
    {
        name: "Altered Studio",
        description: "AI voice changing and effects",
        category: "voice",
        link: "https://www.altered.ai"
    },
    {
        name: "Sonantic",
        description: "AI voice generation for games and media",
        category: "voice",
        link: "https://www.sonantic.io"
    },
    {
        name: "Audo Studio",
        description: "AI audio enhancement and editing",
        category: "voice",
        link: "https://www.audo.ai"
    },
    {
        name: "Whisper",
        description: "AI speech recognition and transcription",
        category: "voice",
        link: "https://openai.com/research/whisper"
    },
    {
        name: "Krisp",
        description: "AI noise cancellation for calls",
        category: "voice",
        link: "https://krisp.ai"
    },

    // Education & Learning
    {
        name: "Khanmigo",
        description: "AI tutor by Khan Academy",
        category: "education",
        link: "https://www.khanacademy.org/khan-labs"
    },
    {
        name: "Socratic",
        description: "AI learning assistant by Google",
        category: "education",
        link: "https://socratic.org"
    },
    {
        name: "Quizlet AI",
        description: "AI-powered study tools and flashcards",
        category: "education",
        link: "https://quizlet.com"
    },
    {
        name: "StudyMonkey",
        description: "AI study assistant and tutor",
        category: "education",
        link: "https://www.studymonkey.ai"
    },
    {
        name: "Gradescope AI",
        description: "AI-powered grading and feedback",
        category: "education",
        link: "https://www.gradescope.com"
    },
    {
        name: "Eduaide.ai",
        description: "AI teaching assistant and resource generator",
        category: "education",
        link: "https://www.eduaide.ai"
    },
    {
        name: "Scribe AI",
        description: "AI-powered note-taking and summarization",
        category: "education",
        link: "https://scribehow.com"
    },
    {
        name: "Diffit",
        description: "AI-powered learning content creation",
        category: "education",
        link: "https://www.diffit.me"
    },
    {
        name: "ELI5 AI",
        description: "AI explanation generator for complex topics",
        category: "education",
        link: "https://explainlikeimfive.io"
    },
    {
        name: "Humata",
        description: "AI research and learning assistant",
        category: "education",
        link: "https://www.humata.ai"
    },
    {
        name: "Knowji",
        description: "AI vocabulary learning and flashcards",
        category: "education",
        link: "https://www.knowji.com"
    },
    {
        name: "QuestionWell",
        description: "AI question generator for learning",
        category: "education",
        link: "https://www.questionwell.org"
    },
    {
        name: "Explain Like I'm Five",
        description: "AI explanation generator for complex topics",
        category: "education",
        link: "https://explainlikeimfive.io"
    },
    {
        name: "Magicschool.ai",
        description: "AI-powered educational tools",
        category: "education",
        link: "https://www.magicschool.ai"
    },

    // Data Analysis
    {
        name: "Tableau GPT",
        description: "AI-powered data visualization and analysis",
        category: "data",
        link: "https://www.tableau.com"
    },
    {
        name: "Power BI + Copilot",
        description: "AI-powered business intelligence",
        category: "data",
        link: "https://powerbi.microsoft.com"
    },
    {
        name: "MonkeyLearn",
        description: "AI text analysis and classification",
        category: "data",
        link: "https://monkeylearn.com"
    },
    {
        name: "Akkio",
        description: "AI-powered data analysis and prediction",
        category: "data",
        link: "https://www.akkio.com"
    },
    {
        name: "Polymer Search",
        description: "AI-powered data search and analysis",
        category: "data",
        link: "https://www.polymersearch.com"
    },
    {
        name: "IBM Watson Studio",
        description: "AI-powered data science platform",
        category: "data",
        link: "https://www.ibm.com/cloud/watson-studio"
    },
    {
        name: "Obviously.ai",
        description: "AI-powered predictive analytics",
        category: "data",
        link: "https://www.obviously.ai"
    },
    {
        name: "DataRobot",
        description: "AI-powered automated machine learning",
        category: "data",
        link: "https://www.datarobot.com"
    },
    {
        name: "Tellius",
        description: "AI-powered business intelligence",
        category: "data",
        link: "https://www.tellius.com"
    },
    {
        name: "Sisense",
        description: "AI-powered analytics and BI",
        category: "data",
        link: "https://www.sisense.com"
    },
    {
        name: "Arcwise AI",
        description: "AI-powered spreadsheet analysis",
        category: "data",
        link: "https://www.arcwise.ai"
    },
    {
        name: "Graphext",
        description: "AI-powered data visualization",
        category: "data",
        link: "https://graphext.com"
    },
    {
        name: "Zoho Analytics AI",
        description: "AI-powered business intelligence",
        category: "data",
        link: "https://www.zoho.com/analytics"
    },

    // Marketing
    {
        name: "Smartly.io",
        description: "AI-powered social media advertising",
        category: "marketing",
        link: "https://www.smartly.io"
    },
    {
        name: "AdCreative.ai",
        description: "AI-powered ad creation",
        category: "marketing",
        link: "https://www.adcreative.ai"
    },
    {
        name: "Persado",
        description: "AI-powered marketing language optimization",
        category: "marketing",
        link: "https://www.persado.com"
    },
    {
        name: "Phrasee",
        description: "AI-powered marketing copy optimization",
        category: "marketing",
        link: "https://phrasee.co"
    },
    {
        name: "Ocoya",
        description: "AI-powered social media marketing",
        category: "marketing",
        link: "https://www.ocoya.com"
    },
    {
        name: "Hoppy Copy",
        description: "AI-powered email marketing",
        category: "marketing",
        link: "https://www.hoppycopy.co"
    },
    {
        name: "Instantly.ai",
        description: "AI-powered email outreach",
        category: "marketing",
        link: "https://instantly.ai"
    },
    {
        name: "Drift Email",
        description: "AI-powered email marketing",
        category: "marketing",
        link: "https://www.drift.com/email"
    },
    {
        name: "Marketo AI",
        description: "AI-powered marketing automation",
        category: "marketing",
        link: "https://www.marketo.com"
    },
    {
        name: "Seventh Sense",
        description: "AI-powered email timing optimization",
        category: "marketing",
        link: "https://www.seventhsense.ai"
    },
    {
        name: "Rasa.io",
        description: "AI-powered newsletter personalization",
        category: "marketing",
        link: "https://rasa.io"
    },

    // Design & Branding
    {
        name: "Looka",
        description: "AI-powered logo design",
        category: "branding",
        link: "https://looka.com"
    },
    {
        name: "Canva AI",
        description: "AI-powered design tools",
        category: "branding",
        link: "https://www.canva.com"
    },
    {
        name: "LogoMakr AI",
        description: "AI-powered logo creation",
        category: "branding",
        link: "https://logomakr.com"
    },
    {
        name: "Brandmark.io",
        description: "AI-powered logo and branding",
        category: "branding",
        link: "https://brandmark.io"
    },
    {
        name: "Hatchful",
        description: "AI-powered logo creation by Shopify",
        category: "branding",
        link: "https://hatchful.shopify.com"
    },
    {
        name: "Mojomox",
        description: "AI-powered brand identity design",
        category: "branding",
        link: "https://www.mojomox.com"
    },
    {
        name: "Tailor Brands",
        description: "AI-powered branding and design",
        category: "branding",
        link: "https://www.tailorbrands.com"
    },
    {
        name: "BrandCrowd",
        description: "AI-powered logo and brand design",
        category: "branding",
        link: "https://www.brandcrowd.com"
    },
    {
        name: "Logomaster.ai",
        description: "AI-powered logo design",
        category: "branding",
        link: "https://www.logomaster.ai"
    },
    {
        name: "Uizard",
        description: "AI-powered UI/UX design",
        category: "branding",
        link: "https://uizard.io"
    },
    {
        name: "Figma AI Plugins",
        description: "AI-powered design plugins",
        category: "branding",
        link: "https://www.figma.com/community/plugins"
    },
    {
        name: "Adobe Sensei",
        description: "AI-powered creative tools",
        category: "branding",
        link: "https://www.adobe.com/sensei.html"
    },
    {
        name: "Kittl",
        description: "AI-powered design platform",
        category: "branding",
        link: "https://www.kittl.com"
    },
    {
        name: "Visily",
        description: "AI-powered UI/UX design",
        category: "branding",
        link: "https://www.visily.ai"
    },

    // Customer Support
    {
        name: "Freshdesk AI",
        description: "AI-powered customer support automation",
        category: "support",
        link: "https://freshdesk.com"
    },
    {
        name: "Zendesk AI",
        description: "AI-powered customer service",
        category: "support",
        link: "https://www.zendesk.com"
    },
    {
        name: "Kustomer AI",
        description: "AI-powered customer service platform",
        category: "support",
        link: "https://www.kustomer.com"
    },
    {
        name: "Ada",
        description: "AI-powered customer support automation",
        category: "support",
        link: "https://www.ada.cx"
    },
    {
        name: "Forethought AI",
        description: "AI-powered customer support",
        category: "support",
        link: "https://www.forethought.ai"
    },
    {
        name: "HelpCrunch",
        description: "AI-powered customer communication",
        category: "support",
        link: "https://helpcrunch.com"
    },
    {
        name: "ChatBot.com",
        description: "AI-powered customer support automation",
        category: "support",
        link: "https://www.chatbot.com"
    },
    {
        name: "Helpscout AI",
        description: "AI-powered customer service",
        category: "support",
        link: "https://www.helpscout.com"
    },
    {
        name: "Ultimate.ai",
        description: "AI-powered customer support automation",
        category: "support",
        link: "https://www.ultimate.ai"
    },
    {
        name: "Netomi",
        description: "AI-powered customer service automation",
        category: "support",
        link: "https://www.netomi.com"
    },
    {
        name: "Aisera",
        description: "AI-powered customer service automation",
        category: "support",
        link: "https://www.aisera.com"
    },

    // Legal & Compliance
    {
        name: "Harvey AI",
        description: "AI legal research and analysis",
        category: "legal",
        link: "https://www.harvey.ai"
    },
    {
        name: "Casetext CoCounsel",
        description: "AI legal research assistant",
        category: "legal",
        link: "https://casetext.com/cocounsel"
    },
    {
        name: "DoNotPay",
        description: "AI legal assistance platform",
        category: "legal",
        link: "https://donotpay.com"
    },
    {
        name: "Spellbook",
        description: "AI contract review and analysis",
        category: "legal",
        link: "https://www.spellbook.legal"
    },
    {
        name: "Klarity",
        description: "AI contract review and management",
        category: "legal",
        link: "https://www.klaritylaw.com"
    },
    {
        name: "Luminance",
        description: "AI legal document analysis",
        category: "legal",
        link: "https://www.luminance.com"
    },
    {
        name: "LawGeex",
        description: "AI contract review platform",
        category: "legal",
        link: "https://www.lawgeex.com"
    },
    {
        name: "Robin AI",
        description: "AI contract review and analysis",
        category: "legal",
        link: "https://www.robinai.com"
    },
    {
        name: "Legal Robot",
        description: "AI legal document analysis",
        category: "legal",
        link: "https://legalrobot.com"
    },
    {
        name: "Legislate AI",
        description: "AI contract creation and management",
        category: "legal",
        link: "https://www.legislate.ai"
    },
    {
        name: "Lexis+ AI",
        description: "AI legal research platform",
        category: "legal",
        link: "https://www.lexisnexis.com"
    },
    {
        name: "ContractPodAI",
        description: "AI contract management platform",
        category: "legal",
        link: "https://www.contractpodai.com"
    },
    {
        name: "Relativity AI",
        description: "AI legal document review",
        category: "legal",
        link: "https://www.relativity.com"
    },
    {
        name: "AI.Legal",
        description: "AI legal research and analysis",
        category: "legal",
        link: "https://ai.legal"
    },
    {
        name: "Atrium",
        description: "AI-powered legal services",
        category: "legal",
        link: "https://www.atrium.co"
    }
];

// DOM Elements
const toolsContainer = document.getElementById('toolsContainer');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');
const featuredToolsContainer = document.getElementById('featuredTools');
const themeToggle = document.getElementById('themeToggle');

// Featured tools (you can customize this list)
const featuredTools = [
    'ChatGPT',
    'GitHub Copilot',
    'Midjourney',
    'DALL·E 3',
    'Notion AI',
    'Grammarly'
];

// Category icons mapping
const categoryIcons = {
    'productivity': 'fas fa-bolt',
    'coding': 'fas fa-code',
    'chatbots': 'fas fa-robot',
    'content': 'fas fa-pen-fancy',
    'design': 'fas fa-paint-brush',
    'video': 'fas fa-video',
    'voice': 'fas fa-microphone',
    'presentation': 'fas fa-presentation-screen',
    'education': 'fas fa-graduation-cap',
    'data': 'fas fa-chart-line',
    'marketing': 'fas fa-bullhorn',
    'branding': 'fas fa-palette',
    'support': 'fas fa-headset',
    'research': 'fas fa-search',
    'legal': 'fas fa-gavel'
};

// Theme handling
function setTheme(isDark) {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme === 'dark');
themeToggle.checked = savedTheme === 'dark';

// Theme toggle event listener
themeToggle.addEventListener('change', (e) => {
    setTheme(e.target.checked);
});

// Create tool card
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    
    const iconClass = categoryIcons[tool.category] || 'fas fa-cube';
    
    card.innerHTML = `
        <h3>
            <i class="${iconClass}"></i>
            ${tool.name}
        </h3>
        <p>${tool.description}</p>
        <a href="${tool.link}" target="_blank" rel="noopener noreferrer">Visit Website</a>
    `;
    
    return card;
}

// Create featured tool card
function createFeaturedToolCard(tool) {
    const toolData = tools.find(t => t.name === tool);
    if (!toolData) return null;
    
    const card = document.createElement('div');
    card.className = 'tool-card featured';
    
    const iconClass = categoryIcons[toolData.category] || 'fas fa-cube';
    
    card.innerHTML = `
        <h3>
            <i class="${iconClass}"></i>
            ${toolData.name}
        </h3>
        <p>${toolData.description}</p>
        <a href="${toolData.link}" target="_blank" rel="noopener noreferrer">Visit Website</a>
    `;
    
    return card;
}

// Filter tools
function filterTools() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    
    const filteredTools = tools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm) || 
                            tool.description.toLowerCase().includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
        return matchesSearch && matchesCategory;
    });
    
    renderTools(filteredTools);
}

// Render tools
function renderTools(toolsToRender) {
    toolsContainer.innerHTML = '';
    toolsToRender.forEach(tool => {
        toolsContainer.appendChild(createToolCard(tool));
    });
}

// Render featured tools
function renderFeaturedTools() {
    featuredToolsContainer.innerHTML = '';
    featuredTools.forEach(toolName => {
        const card = createFeaturedToolCard(toolName);
        if (card) {
            featuredToolsContainer.appendChild(card);
        }
    });
}

// Event listeners
searchInput.addEventListener('input', filterTools);

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterTools();
    });
});

// Initialize
renderFeaturedTools();
filterTools(); 