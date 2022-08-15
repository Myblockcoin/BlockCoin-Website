import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  attributify: {
    prefix: 'cls'
  },
  theme: {
    extend: {
      colors: {
        primary: '#FFC000'
      },
      backgroundImage: {
        hero: 'url(/images/hero-bg.jpg)',
        'hero-mobile': 'url(/images/hero-mobile.jpg)',
        welcome: 'url(/images/welcome.jpg)'
      }
    }
  },
  shortcuts: {
    header: 'fixed top-0 left-0 right-0 flex px-4 z-100',
    'header-button': 'font-bold border border-primary rounded-sm uppercase',
    'bg-normal': 'bg-center bg-no-repeat bg-cover',
    'flex-center': 'items-center justify-center',
    'pos-center': 'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2',
    button: {
      '@apply': 'relative bg-primary text-white text-sm font-bold min-w-40',
      '&-menu': {
        '@apply': 'absolute top-1/1 left-0 right-0 pt-2',
        '&__contents': { '@apply': 'bg-white text-neutral-500 font-normal border border-neutral-300 rounded-lg py-1' },
        '&__option': {
          '@apply': 'hover:bg-primary/10 first-letter:uppercase p-2',
          '&--active': { '@apply': 'bg-primary/15' }
        }
      }
    },
    'button-full': 'w-full sm:w-64 h-16 flex flex-center bg-primary text-black font-extrabold rounded-sm uppercase'
  }
})
