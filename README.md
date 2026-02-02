# NGP by Pratham - Website

A premium, 3D-integrated website built with React, Three.js (Fiber), and Tailwind CSS.
Visuals designed to match the "AICM" reference with exact "Off-White" aesthetics and "S-Curve" motion.

## Tech Stack

- **Framework**: Vite + React + TypeScript
- **3D Engine**: Three.js + React Three Fiber
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + R3F ScrollControls

## Setup & Run

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view.

3. **Build for Production**
   ```bash
   npm run build
   ```

## Customization

### Images

- **Founder Portrait**: Use a high-quality portrait. Place it in `/public/founder.jpg` and update `src/components/canvas/Founder3D.tsx` to use `useTexture('/founder.jpg')` instead of the placeholder material.
- **Logo**: Replace the placeholder in `src/components/dom/Hero.tsx`.

### 3D Scene

- **Ribbon Shape**: Edit points in `src/components/canvas/Ribbon.tsx`.
- **Colors**: Adjust `tailwind.config.js` or the `meshPhysicalMaterial` in `Ribbon.tsx`.

## Credits

- Website designed by Sarthak
- NGP by Pratham
