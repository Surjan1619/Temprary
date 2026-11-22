import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n.js'
import './index.css'
import PageSkeleton from './components/PageSkeleton.jsx'
import Root from './Root.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<PageSkeleton />}>
      <Root />
    </Suspense>
  </StrictMode>,
)
