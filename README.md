Nextjs-TravelBlog
A modern travel blog website built with Next.js, featuring responsive design and interactive functionality.

Project Overview
Nextjs-TravelBlog is a single-page application showcasing travel content, built with the latest Next.js framework. The website includes multiple sections, including navigation, hero section, about us, featured services, and email subscription functionality.

Demo
Visit https://tzuhuangyen.github.io/Nextjs-TravelBlog/ to see the live demo of the website.

Tech Stack
Frontend Framework: Next.js
Styling: Bootstrap 5 and SASS
Icons: Lucide Icons
Deployment: GitHub Pages
Features
Responsive design that adapts to various device sizes
Interactive navigation menu
Email subscription functionality
Modern UI design
Static site generation for improved performance
Installation and Setup
Prerequisites
Node.js 18.x or higher
npm or yarn package manager

Installation Steps

1. Clone the repository
   `git clone https://github.com/tzuhuangyen/Nextjs-TravelBlog.git
cd Nextjs-TravelBlog`

2. Install dependencies

npm install

# or

yarn install
Run the development server

npm run dev

# or

yarn dev
Open your browser and visit http://localhost:3000

4.Building for Production
`npm run build`

# or

`yarn build`

Project Structure
Nextjs-TravelBlog/
├── public/ # Static assets
│ ├── images/ # Image resources
│ └── .nojekyll # GitHub Pages configuration file
├── src/ # Source code
│ ├── app/ # Next.js app directory
│ │ ├── api/ # API routes
│ │ └── layout.tsx # Layout component
│ ├── components/ # Reusable components
│ │ ├── AboutSection.tsx
│ │ ├── FeaturesSection.tsx
│ │ ├── Footer.tsx
│ │ ├── HeroSection.tsx
│ │ ├── Navigation.tsx
│ │ ├── SignUpSection.tsx
│ │ └── TravelBlog.tsx
│ ├── styles/ # Style files
│ │ └── globals.css
│ └── types/ # TypeScript type definitions
├── .github/ # GitHub configuration
│ └── workflows/ # GitHub Actions workflows
│ └── deploy.yml # Deployment configuration
├── .gitignore # Git ignore file
├── eslint.config.mjs # ESLint configuration
├── next.config.js # Next.js configuration
├── package.json # Project dependencies
├── README.md # Project documentation
└── tsconfig.json # TypeScript configuration

Deployment
The project is configured to automatically deploy to GitHub Pages using GitHub Actions. The build and deployment process is triggered whenever code is pushed to the main branch.

Deployment Configuration
The deployment configuration is located in the .github/workflows/deploy.yml file. The workflow performs the following steps:

Check out the code
Set up the Node.js environment
Install dependencies
Create a .nojekyll file (to prevent GitHub Pages from using Jekyll processing)
Build the project
Deploy the build output to the gh-pages branch
Customization
Modifying Content
Most of the website content can be modified by editing the component files in the src/components/ directory.

Style Adjustments
The project uses Bootstrap 5 and SASS for styling. You can adjust the website appearance by modifying SASS variables and adding custom CSS.

Adding New Pages
To add new pages, create new route files or directories in the src/app/ directory.

Contributing
Contributions are welcome! Feel free to submit Pull Requests or create Issues to improve this project.

Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
If you have any questions or suggestions, please contact us through GitHub Issues.

Thank you for using Nextjs-TravelBlog! We hope this project provides a modern solution for showcasing your travel content.
