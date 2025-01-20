# LinkedIn to CV Converter

A modern web application that converts LinkedIn profiles into professional CVs/resumes.

## Features

- LinkedIn profile integration
- Interactive CV preview
- Customizable CV templates
- PDF export functionality
- Modern, responsive UI
- Step-by-step conversion process

## Tech Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- shadcn/ui components
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/linkedin-to-cv.git
cd linkedin-to-cv
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_LINKEDIN_CLIENT_ID=your_linkedin_client_id
VITE_LINKEDIN_REDIRECT_URI=http://localhost:5173/auth/callback
```

## Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
