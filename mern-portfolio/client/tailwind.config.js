/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors - Dark Navy/Charcoal
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d9ff',
          300: '#a4bfff',
          400: '#7c9aff',
          500: '#5b7cff',
          600: '#3d5aff',
          700: '#0F172A', // Deep Navy
          800: '#0a0f1f',
          900: '#050811',
        },
        // Secondary colors - Electric Blue/Cyan
        secondary: {
          50: '#ecf8ff',
          100: '#cff0ff',
          200: '#a5e6ff',
          300: '#38BDF8', // Electric Blue
          400: '#0EA5E9', // Bright Cyan
          500: '#06a8d9',
          600: '#0489b5',
          700: '#036b92',
          800: '#025577',
          900: '#023f5a',
        },
        // Accent colors - Neon Purple/Teal
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          300: '#8B5CF6', // Neon Purple
          400: '#a78bfa',
          500: '#a855f7',
          600: '#9333ea',
          700: '#14B8A6', // Teal
          800: '#0d9488',
          900: '#134e4a',
        },
        // Background colors
        background: {
          950: '#020617', // Off-black (dark)
          900: '#030712', // Dark Slate (dark)
          800: '#0f172a',
          700: '#1e293b',
          600: '#334155',
          // Light mode variants
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
        },
        // Text colors
        text: {
          primary: '#E5E7EB', // Soft White (dark mode)
          secondary: '#9CA3AF', // Cool Gray (dark mode)
          muted: '#6B7280',
          dark: '#1F2937',
        },
        // Status colors
        success: '#22C55E', // Emerald Green
        warning: '#F59E0B', // Amber
        error: '#EF4444',    // Rose Red
        
        // Custom utility colors
        'dark-navy': '#0F172A',
        'charcoal': '#111827',
        'electric-blue': '#38BDF8',
        'cyan': '#0EA5E9',
        'neon-purple': '#8B5CF6',
        'neon-teal': '#14B8A6',
        'slate': '#020617',
        'off-black': '#030712',
      },
      backgroundColor: {
        'glass': 'rgba(15, 23, 42, 0.8)',
        'glass-light': 'rgba(15, 23, 42, 0.6)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0F172A 0%, #0EA5E9 100%)',
        'gradient-accent': 'linear-gradient(135deg, #8B5CF6 0%, #14B8A6 100%)',
        'gradient-button': 'linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 100%)',
        'glow-gradient': 'radial-gradient(circle, rgba(14, 165, 233, 0.3), transparent)',
        'mesh-gradient': 'url("data:image/svg+xml,%3Csvg width=%27100%27 height=%27100%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cdefs%3E%3CradialGradient id=%27glow%27%3E%3Cstop offset=%270%25%27 stop-color=%27%230EA5E9%27 /%3E%3Cstop offset=%27100%25%27 stop-color=%27%238B5CF6%27 /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill=%27url(%23glow)%27 width=%27100%27 height=%27100%27 /%3E%3C/svg%3E")',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(14, 165, 233, 0.4)',
        'glow-lg': '0 0 50px rgba(14, 165, 233, 0.5)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.4)',
        'glow-teal': '0 0 30px rgba(20, 184, 166, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(14, 165, 233, 0.1)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 25px 50px -12px rgba(14, 165, 233, 0.25)',
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Space Grotesk', 'monospace'],
        'sans': ['Inter', 'Poppins', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3rem' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(14, 165, 233, 0.8)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
      },
    },
  },
  plugins: [
    // Custom plugin for glassmorphism and components
    function ({ addComponents }) {
      addComponents({
        '.glass': {
          '@apply bg-glass backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg': {},
        },
        '.glass-light': {
          '@apply bg-glass-light backdrop-blur-lg border border-white/5 rounded-2xl shadow-md': {},
        },
        '.text-gradient': {
          '@apply bg-gradient-to-r from-secondary-400 to-accent-300 bg-clip-text text-transparent': {},
        },
        '.btn-primary': {
          '@apply px-6 py-3 bg-gradient-button text-white font-semibold rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg': {},
        },
        '.btn-secondary': {
          '@apply px-6 py-3 border-2 border-secondary-400 text-secondary-400 font-semibold rounded-xl hover:bg-secondary-400/10 transition-all duration-300 shadow-md': {},
        },
        '.btn-ghost': {
          '@apply px-6 py-3 text-text-primary hover:bg-white/5 font-semibold rounded-xl transition-all duration-300': {},
        },
        '.card-hover': {
          '@apply transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-2xl': {},
        },
        '.neon-glow': {
          '@apply text-secondary-400 drop-shadow-lg': {},
        },
      });
    },
  ],
};
