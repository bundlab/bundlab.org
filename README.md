# 🚀 BundLab

> **Intelligent Software Solutions Powered by AI & Cloud Technology**

[![Live Demo](https://img.shields.io/badge/🌐%20Live-bundlab--org.vercel.com-blue?style=for-the-badge)](https://bundlab-org.vercel.com/app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&style=for-the-badge)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Backend-orange?logo=firebase&style=for-the-badge)](https://firebase.google.com/)
[![Google Genkit](https://img.shields.io/badge/AI-Google%20Genkit-4285F4?style=for-the-badge)](https://firebase.google.com/docs/genkit)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel&style=for-the-badge)](https://vercel.com/)

---

## ✨ About BundLab

BundLab is a modern software company building intelligent, scalable applications that leverage AI and cloud technology. Our flagship platform combines the power of **Next.js**, **Firebase**, and **Google Genkit** to deliver seamless, real-time experiences.

We're committed to creating innovative solutions that empower teams to work smarter, faster, and more efficiently.

**🌍 Live Platform:** [bundlab-org.vercel.com/app](https://bundlab-org.vercel.com/app)

---

## ⚡ Key Features

- **🤖 AI-Powered** – Built with Google Genkit for intelligent automation and insights
- **⚡ Lightning-Fast** – Next.js 15 with Turbopack for optimal performance
- **🔒 Secure & Scalable** – Enterprise-grade Firebase backend with real-time sync
- **🎨 Beautiful UI** – Radix UI components with Tailwind CSS for stunning interfaces
- **📱 Fully Responsive** – Works flawlessly across all devices
- **☁️ Globally Available** – Deployed on Vercel Edge Network for low-latency access
- **🔄 Real-Time Collaboration** – Live data synchronization across teams
- **📊 Advanced Analytics** – Recharts integration for powerful data visualization
- **🎯 Type-Safe** – Full TypeScript support for reliability and maintainability

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 15, React 19, TypeScript |
| **Styling** | Tailwind CSS, Radix UI, Lucide Icons |
| **Backend** | Firebase (Firestore, Auth, Storage) |
| **AI/ML** | Google Genkit, Google GenAI |
| **Forms** | React Hook Form, Zod validation |
| **Charts** | Recharts |
| **Deployment** | Vercel |
| **Development** | Turbopack, TSX, Genkit CLI |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:
- **Node.js** 18+ and npm/yarn
- **Firebase Project** with Firestore, Auth, and Storage enabled
- **Google Genkit API Key** (for AI features)
- **Git** installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bundlab/bundlab.org.git
   cd bundlab.org
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Add your Firebase and Genkit configuration:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Google Genkit Configuration
   GENKIT_API_KEY=your_genkit_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:9002](http://localhost:9002)

5. **Start Genkit AI server (optional)**
   ```bash
   npm run genkit:dev
   ```

---

## 📁 Project Structure

```
bundlab.org/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx             # Homepage
│   │   ├── layout.tsx           # Root layout
│   │   ├── api/                 # API routes
│   │   └── ...
│   ├── components/              # Reusable React components
│   │   ├── ui/                 # Radix UI component wrappers
│   │   ├── forms/              # Form components
│   │   └── ...
│   ├── lib/
│   │   ├── firebase.ts         # Firebase configuration & utilities
│   │   ├── utils.ts            # Helper functions
│   │   └── ...
│   ├── ai/
│   │   ├── dev.ts              # Genkit AI development setup
│   │   └── ...
│   ├── styles/                 # Global styles
│   └── types/                  # TypeScript type definitions
├── public/                      # Static assets
├── .env.example                # Environment variables template
├── firebase.json               # Firebase configuration
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack on port 9002 |
| `npm run genkit:dev` | Start Genkit AI development server |
| `npm run genkit:watch` | Watch mode for Genkit AI development |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript types |

---

## 🏗️ Building & Deployment

### Development Build

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel automatically builds and deploys on every push

**One-command deployment:**
```bash
vercel
```

---

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Google Genkit AI
GENKIT_API_KEY=

# App Configuration (optional)
NEXT_PUBLIC_APP_URL=https://bundlab-org.vercel.com
```

---

## 🤖 AI Features with Google Genkit

BundLab leverages Google Genkit for powerful AI capabilities:

```typescript
// Example usage
import { genkit } from 'genkit';

const ai = genkit({
  plugins: [googleAI()],
  model: 'gemini-1.5-flash',
});

const response = await ai.generate({
  prompt: 'Your prompt here',
});
```

For more details, see [Google Genkit Documentation](https://firebase.google.com/docs/genkit)

---

## 🎨 UI Component Library

We use **Radix UI** for accessible, unstyled components styled with **Tailwind CSS**:

- Accordion, Alert Dialog, Avatar
- Checkbox, Dialog, Dropdown Menu
- Form Controls (Input, Select, Radio, Slider)
- Popover, Progress, Tabs, Tooltip
- And many more!

**Icons:** Lucide React (475+ icons)

---

## 📊 Data Visualization

**Recharts** integration for interactive charts:
- Line, Bar, Pie Charts
- Area Charts, Radar Charts
- Composed Charts, Custom Components

---

## 🔄 Real-Time Features

With Firebase Firestore:
- Real-time database synchronization
- Live collaboration features
- Instant updates across all connected clients

---

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/AmazingFeature`
3. **Commit** your changes: `git commit -m 'Add some AmazingFeature'`
4. **Push** to the branch: `git push origin feature/AmazingFeature`
5. **Open** a Pull Request

### Development Guidelines

- Write clean, well-documented code
- Use TypeScript for type safety
- Follow the existing code style
- Ensure all tests pass: `npm run lint && npm run typecheck`
- Keep components modular and reusable

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a great idea? We'd love to hear from you!

**[📋 Open an Issue](https://github.com/bundlab/bundlab.org/issues)**

Before submitting:
- ✅ Check existing issues to avoid duplicates
- ✅ Provide a clear, descriptive title
- ✅ Include reproduction steps (for bugs)
- ✅ Add screenshots or logs when helpful
- ✅ Specify your environment (Node version, OS, etc.)

---

## 📚 Documentation & Resources

- **[Next.js Docs](https://nextjs.org/docs)** – Framework & API reference
- **[Firebase Docs](https://firebase.google.com/docs)** – Backend services guide
- **[Google Genkit](https://firebase.google.com/docs/genkit)** – AI integration guide
- **[Radix UI](https://www.radix-ui.com/)** – Component library docs
- **[Tailwind CSS](https://tailwindcss.com/docs)** – Styling guide
- **[Vercel Docs](https://vercel.com/docs)** – Deployment & optimization

---

## 🔍 Performance

BundLab is optimized for blazing-fast performance:

- **Turbopack** for instant dev server startup
- **Next.js Image Optimization** for responsive images
- **Firebase CDN** for global data distribution
- **Vercel Edge Network** for minimal latency
- **Code Splitting** for optimal bundle sizes

---

## 🛡️ Security Best Practices

- ✅ Firebase Security Rules for data protection
- ✅ Environment variables for sensitive data
- ✅ TypeScript for type-safe code
- ✅ Input validation with Zod
- ✅ Regular dependency updates

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 📞 Get In Touch

| Channel | Link |
|---------|------|
| 🌐 **Website** | [bundlab-org.vercel.com](https://bundlab-org.vercel.com/app) |
| 📧 **Email** | [hello@bundlab.org](mailto:hello@bundlab.org) |
| 🐙 **GitHub** | [github.com/bundlab](https://github.com/bundlab) |
| 📝 **Issues** | [Report Issues](https://github.com/bundlab/bundlab.org/issues) |

---

## 🙏 Acknowledgments

Built with ❤️ using:

- [Next.js](https://nextjs.org/) – React framework
- [Firebase](https://firebase.google.com/) – Backend & database
- [Google Genkit](https://firebase.google.com/docs/genkit) – AI capabilities
- [Radix UI](https://www.radix-ui.com/) – Accessible components
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS
- [Vercel](https://vercel.com/) – Deployment platform

---

<div align="center">

### 💡 Made with passion by the BundLab Team

[![Star us on GitHub](https://img.shields.io/badge/⭐%20Star%20us-GitHub-white?style=for-the-badge)](https://github.com/bundlab/bundlab.org)
[![Visit our site](https://img.shields.io/badge/🌐%20Visit-bundlab.org-blue?style=for-the-badge)](https://bundlab-org.vercel.com/app)
[![Get in touch](https://img.shields.io/badge/📧%20Email-hello@bundlab.org-red?style=for-the-badge)](mailto:hello@bundlab.org)

**Empowering innovation through intelligent software solutions** 🚀

</div>
