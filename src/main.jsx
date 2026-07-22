import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n.js'
import './index.css'
import App from './App.jsx'

function RootSkeleton() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-white animate-spin" />
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-white/50">DIGITAL</span>
          <span className="text-lg font-light tracking-tight text-white/30">DOOR</span>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<RootSkeleton />}>
      <App />
    </Suspense>
  </StrictMode>,
)
