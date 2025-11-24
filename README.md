🐍 Medusa's Basement: High-Performance E-commerce Shop

Medusa's Basement is a modern, high-performance e-commerce prototype specializing in gaming laptops and premium hardware. It features a distinct, dark, and neon-green aesthetic inspired by high-end gaming culture.

✨ Features

Core Functionality

Product Listing (Shop page): Fetches and displays a dynamic list of high-spec laptops.

Client-Side Cart Management: Allows users to add items to the cart, adjust quantities, and remove items instantly.

Filtering and Search: Provides instant, dynamic filtering by category (Gaming, Premium, Budget) and fuzzy search capability across product names and specifications.

Navigation: Smooth single-page application (SPA) routing between Home, Shop, and Cart views.

Design & Aesthetic Highlights

Dark Mode / Neon Theme: Utilizes an AMOLED black background with vibrant green (--medusa-green: #00ff88) for a premium, futuristic gaming feel.

Custom Medusa Logo: Features a stylized, glowing vector SVG of Medusa's face integrated into the navigation bar for a strong brand identity.

Floating Product Cards: The product images are transparent PNGs styled with dynamic shadows and hover animations to make them appear as if they are "floating" above the card background.

Framer Motion Animations: Extensive use of framer-motion for smooth, performant micro-interactions, layout transitions, and element loading effects throughout the application (e.g., in the Home page header, product grid, and buttons).

Humorous Checkout: The checkout page features a custom meme image and message, reinforcing the brand's edgy personality.

💻 Tech Stack

Frontend: React v19

Build Tool: Vite

Styling: Pure CSS Modules (for component scoping) with CSS Variables for consistent theming.

Animation Library: Framer Motion

Icons: React Icons

Data Source: Mock API (src/services/api.js) for rapid prototyping.

⚙️ Setup and Installation

Follow these steps to get the project running locally.

(Installation guide intentionally omitted as per your request.)

🚧 Development Challenges & Solutions

Image Hotlinking & Reliability

Challenge: Repeated failures and blocks when linking to external transparent PNGs (Freepik, external hosts), resulting in broken images.

Solution: Switched to manually curated, highly reliable, and publicly-licensed transparent PNGs from Wikimedia Commons. The api.js now uses these stable URLs.

Custom SVG Logo Integration

Challenge: Replacing a standard image logo with a dynamically styled, glowing vector graphic inside a fixed circular container.

Solution: Created a MedusaIcon React component with inline SVG paths. Applied CSS filters (drop-shadow) and stroke properties in Navbar.css to achieve the custom green glow effect consistent with the overall theme.

"Floating" Product Effect

Challenge: Achieving the marketing goal of making products appear to float off the cards without obscuring content.

Solution: Manipulated CSS properties in Shop.css: set overflow: visible on the product card, used negative margin-top on the image container, and applied large drop-shadow filters to create a distinct separation and depth effect.

UI Performance

Challenge: Ensuring smooth filtering and animation performance, especially with dozens of product cards being animated via framer-motion.

Solution: Used Framer Motion's AnimatePresence and layout prop for optimized exit/enter transitions during filtering and relied on performant CSS properties (opacity, transform) to minimize lag.

🤝 Contribution

This is a prototype project. Feel free to fork the repository, suggest improvements, or fix bugs!
