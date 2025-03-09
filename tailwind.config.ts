
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				courier: ['"Courier Prime"', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				neon: {
					pink: '#ff00ff',
					cyan: '#00ffff',
					purple: '#9900ff',
					green: '#00ff66',
					yellow: '#ffff00',
				},
				cyber: {
					black: '#0a0a0a',
					dark: '#121212',
					gray: '#242424',
					light: '#303030',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'pulse-neon': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1) blur(0px)'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.2) blur(1px)'
					},
				},
				'scanline': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' },
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-5px, 5px)' },
					'40%': { transform: 'translate(-5px, -5px)' },
					'60%': { transform: 'translate(5px, 5px)' },
					'80%': { transform: 'translate(5px, -5px)' },
				},
				'fadeIn': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slideIn': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'counter': {
					'0%': { content: '"0"' },
					'10%': { content: '"1"' },
					'20%': { content: '"2"' },
					'30%': { content: '"3"' },
					'40%': { content: '"4"' },
					'50%': { content: '"5"' },
					'60%': { content: '"6"' },
					'70%': { content: '"7"' },
					'80%': { content: '"8"' },
					'90%': { content: '"9"' },
					'100%': { content: '"10"' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-neon': 'pulse-neon 2s infinite',
				'scanline': 'scanline 8s linear infinite',
				'glitch': 'glitch 0.5s infinite',
				'fadeIn': 'fadeIn 0.6s ease-out',
				'slideIn': 'slideIn 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'counter': 'counter 2s forwards'
			},
			boxShadow: {
				'neon-pink': '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff',
				'neon-cyan': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
				'neon-purple': '0 0 5px #9900ff, 0 0 10px #9900ff, 0 0 15px #9900ff',
				'neon-green': '0 0 5px #00ff66, 0 0 10px #00ff66, 0 0 15px #00ff66',
				'neon-glow': '0 0 5px rgba(255, 0, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5)',
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
				'neon-gradient': 'linear-gradient(135deg, #ff00ff, #00ffff)',
				'radial-glow': 'radial-gradient(circle, rgba(255, 0, 255, 0.1) 0%, rgba(10, 10, 10, 0) 70%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
