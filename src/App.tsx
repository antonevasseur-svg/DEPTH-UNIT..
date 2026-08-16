import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import HomePage from '@/pages/HomePage';
import ReleasesPage from '@/pages/ReleasesPage';
import ReleaseDetailPage from '@/pages/ReleaseDetailPage';
import ArtistsPage from '@/pages/ArtistsPage';
import ArtistDetailPage from '@/pages/ArtistDetailPage';
import ShopPage from '@/pages/ShopPage';
import SocialPage from '@/pages/SocialPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';
import AdminLogin from '@/pages/admin/AdminLogin';
import AdminDashboard from '@/pages/admin/AdminDashboard';

const links = [['/releases','Releases'],['/artists','Artists'],['/shop','Shop'],['/social','Social'],['/about','About'],['/contact','Contact']];

function SiteChrome() {
  const [open,setOpen] = useState(false); const location=useLocation();
  if(location.pathname.startsWith('/admin')) return null;
  return <>
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-display font-bold tracking-[.22em] text-sm"><img src="/assets/logo/depth-unit-logo.svg" className="h-8 w-auto" alt="Depth Unit"/><span>DEPTH UNIT</span></Link>
        <nav className="hidden md:flex items-center gap-7 font-mono text-[10px] tracking-[.28em] text-white/55">{links.map(([href,label])=><Link key={href} to={href} className={location.pathname===href?'text-cyan-electric':'hover:text-white transition-colors'}>{label.toUpperCase()}</Link>)}</nav>
        <button className="md:hidden text-white" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
      </div>
      {open && <motion.nav initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} className="md:hidden px-6 pb-6 space-y-4 font-mono text-xs tracking-[.25em]">{links.map(([href,label])=><Link onClick={()=>setOpen(false)} key={href} to={href} className="block text-white/70">{label.toUpperCase()}</Link>)}</motion.nav>}
    </header>
    <div className="noise" />
  </>;
}

export default function App(){ return <><SiteChrome/><Routes><Route path="/" element={<HomePage/>}/><Route path="/releases" element={<ReleasesPage/>}/><Route path="/release/:slug" element={<ReleaseDetailPage/>}/><Route path="/artists" element={<ArtistsPage/>}/><Route path="/artist/:slug" element={<ArtistDetailPage/>}/><Route path="/shop" element={<ShopPage/>}/><Route path="/social" element={<SocialPage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/admin" element={<AdminLogin/>}/><Route path="/admin/dashboard" element={<AdminDashboard/>}/><Route path="*" element={<NotFoundPage/>}/></Routes></> }
