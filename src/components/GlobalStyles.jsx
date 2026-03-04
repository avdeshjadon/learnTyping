// ----------------------------------------------------------------------------
// PracticeTyping -- Browser-Based Typing Practice & Training Application
// ----------------------------------------------------------------------------
// Author   : Avdesh Jadon
// GitHub   : https://github.com/avdeshjadon
// License  : MIT License -- free to use, modify, and distribute.
//            See LICENSE file in the project root for full license text.
// ----------------------------------------------------------------------------
// If this project helped you, consider starring the repository, opening a
// pull request, or reporting issues on GitHub. Contributions are welcome.
// ----------------------------------------------------------------------------
//
// GlobalStyles.jsx -- Injected Global CSS
// =========================================
// Renders a <style> tag with all global CSS that cannot be expressed as
// inline React styles: @font-face imports, @keyframes animations, pseudo-
// element rules, scrollbar hiding, zen-mode show/hide transitions,
// responsive media queries, and GPU compositing hints.
//
// Animation philosophy: every visual transition uses a spring-like
// cubic-bezier(0.22, 1, 0.36, 1) easing for an organic, bouncy feel.
// GPU-composited properties (transform, opacity) are preferred over
// layout-triggering ones (width, height, top, left) for jank-free 60fps.
// ----------------------------------------------------------------------------

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500;600&display=swap');
      
      :root {
        --bg: #333437;
        --surface: #3a3b3e;
        --border: #48494c;
        --borderLight: #434447;
        --navBorder: rgba(255, 255, 255, 0.06);
        --text: #f7f7f7;
        --dim: #646669;
        --dimLight: #909194;
        --dimDark: #555658;
        --dimMid: #7a7b7e;
        --muted: #4a4b4e;
        --statText: #a0a1a4;
        --green: #E2B715;
        --red: #fba4a4;
        --yellow: #E2B715;
        
        --charNeutral: #656669;
        --charCorrect: #D1D0C5;
        --charWrongDeco: rgba(248,113,113,0.4);
        
        --caretColor: #E2B715;
        --caretShadow: rgba(226, 183, 21, 0.3);
        
        --btnHoverBg: rgba(255,255,255,0.04);
        --btnHoverColor: #ccc;
        --btnActiveColor: #aaa;
        --btnHoverBorder: #7a7b7e;
        --lengthBtnHoverBorder: #656669;
        
        --logoZenColor: #656669;
      }

      .light {
        --bg: #F4F4F5;
        --surface: #E4E4E7;
        --border: #D4D4D8;
        --borderLight: #A1A1AA;
        --navBorder: rgba(0, 0, 0, 0.06);
        --text: #18181B;
        --dim: #71717A;
        --dimLight: #52525B;
        --dimDark: #A1A1AA;
        --dimMid: #52525B;
        --muted: #D4D4D8;
        --statText: #3F3F46;
        --green: #CA8A04; 
        --red: #EF4444; 
        --yellow: #CA8A04; 
        
        --charNeutral: #A1A1AA; 
        --charCorrect: #52525B; 
        --charWrongDeco: rgba(239, 68, 68, 0.4);
        
        --caretColor: #CA8A04;
        --caretShadow: rgba(202, 138, 4, 0.3);
        
        --btnHoverBg: rgba(0,0,0,0.04);
        --btnHoverColor: #18181B;
        --btnActiveColor: #3F3F46;
        --btnHoverBorder: #A1A1AA;
        --lengthBtnHoverBorder: #A1A1AA;

        --logoZenColor: #A1A1AA;
      }

      * { box-sizing: border-box; margin: 0; padding: 0; }
      html {
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: var(--bg);
      }
      button:focus,
      button:focus-visible {
        outline: none;
      }
      body {
        background: var(--bg);
        color: var(--text);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        overflow-x: hidden;
        transition: background 0.4s ease, color 0.4s ease;
      }

      /* ── GPU layer promotion for all animated elements ── */
      .app-header,
      .app-footer,
      .kb-wrap,
      .smooth-cursor,
      .kb-key,
      .live-stats,
      .start-hint,
      .typing-main {
        will-change: transform, opacity;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000px;
        perspective: 1000;
        transform: translateZ(0);
      }

      /* ── Smooth vertical caret (MonkeyType style) ──────── */
      .smooth-cursor {
        position: absolute;
        top: 0;
        left: 0;
        width: 2.5px !important;
        pointer-events: none;
        z-index: 2;
        border-radius: 2px;
        background: var(--caretColor);
        box-shadow: 0 0 8px var(--caretShadow);
        transition: transform 0.12s linear,
                    height 0.06s linear;
        will-change: transform, height, opacity;
      }

      /* Gentle pulse when idle */
      @keyframes caret-blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.1; }
      }
      .smooth-cursor.idle {
        animation: caret-blink 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      /* ── Scrollbar (hidden) ─────────────────────────────── */
      ::-webkit-scrollbar { display: none; }
      * { scrollbar-width: none; }

      .app-header nav,
      .app-header .header-controls {
        opacity: 1;
        max-height: 120px;
        overflow: visible;
        transform: translate3d(0, 0, 0);
        filter: blur(0px);
        transition:
          opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          filter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .app-logo {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition:
          opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 20;
      }
      .app-logo img {
        transition: filter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      }

      /* ── Zen mode: hide header & footer (keyboard stays) ── */
      .app-header,
      .app-footer {
        opacity: 1;
        max-height: 120px;
        overflow: visible;
        transform: translate3d(0, 0, 0);
        filter: blur(0px);
        transition:
          opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          filter 0.4s cubic-bezier(0.16, 1, 0.3, 1),
          padding 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .zen-mode .app-header {
        pointer-events: none;
        border-color: transparent !important;
      }

      /* Hide everything in header except the logo during zen mode */
      .zen-mode .app-header nav,
      .zen-mode .app-header .header-controls {
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        transform: translate3d(0, -10px, 0);
        filter: blur(8px);
        transition:
          opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          filter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }

      /* Keep logo visible but very faded, exactly where it is */
      .zen-mode .app-logo {
        opacity: 0.15 !important;
        color: var(--logoZenColor) !important;
        transform: translate3d(0, 0, 0);
        transition:
          opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
          color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .zen-mode .app-logo img {
        filter: grayscale(100%);
      }

      .zen-mode .app-footer {
        opacity: 0;
        pointer-events: none;
        max-height: 0;
        transform: translate3d(0, 12px, 0);
        filter: blur(8px);
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }

      .kb-wrap {
        transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }

      /* Zen mode: text area fills vertical space smoothly */
      .typing-main {
        transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .zen-mode .typing-main {
        /* the text area no longer needs to pad out the space, it's absolutely centered */
      }

      /* ── Smooth keyboard key transitions ────────────────── */
      .kb-key {
        transition:
          background 0.1s cubic-bezier(0.16, 1, 0.3, 1),
          border-color 0.1s cubic-bezier(0.16, 1, 0.3, 1),
          color 0.1s cubic-bezier(0.16, 1, 0.3, 1),
          box-shadow 0.15s cubic-bezier(0.16, 1, 0.3, 1),
          transform 0.08s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }

      /* ── Smooth button hovers ───────────────────────────── */
      .nav-btn,
      .length-btn {
        transition:
          background 0.18s cubic-bezier(0.16, 1, 0.3, 1),
          border-color 0.18s cubic-bezier(0.16, 1, 0.3, 1),
          color 0.18s cubic-bezier(0.16, 1, 0.3, 1),
          opacity 0.18s ease !important;
      }
      .nav-btn:hover {
        border-color: var(--btnHoverBorder);
        color: var(--btnHoverColor);
      }
      .length-btn:hover {
        border-color: var(--lengthBtnHoverBorder);
        color: var(--btnActiveColor);
      }

      /* ── Ultra-smooth char color transitions ────────────── */
      .typing-text span {
        transition: color 0.06s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }

      /* ── Live stats smooth entry ───────────────────────── */
      @keyframes stats-fade-in {
        from { opacity: 0; transform: translate3d(0, -6px, 0); }
        to   { opacity: 0.75; transform: translate3d(0, 0, 0); }
      }
      .live-stats {
        animation: stats-fade-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      /* ── Hide mouse cursor ─────────────────────────────── */
      .hide-cursor,
      .hide-cursor * {
        cursor: none !important;
      }

      /* ── Start hint fade ───────────────────────────────── */
      @keyframes hint-fade-in {
        from { opacity: 0; transform: translate3d(0, 6px, 0); }
        to { opacity: 1; transform: translate3d(0, 0, 0); }
      }
      .start-hint {
        animation: hint-fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      /* ── Result screen entry ───────────────────────────── */
      @keyframes result-fade-in {
        from { opacity: 0; transform: translate3d(0, 16px, 0) scale(0.97); }
        to   { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
      }
      .result-screen {
        animation: result-fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      /* ── Responsive: Large monitors (1920+) ─────────────── */
      @media (min-width: 1920px) {
        .typing-main { max-width: 1500px !important; }
        .typing-text { font-size: 36px !important; max-height: 380px !important; font-weight: 400 !important; line-height: 1.65 !important; }
        .kb-key { width: 42px !important; height: 38px !important; font-size: 13px !important; }
        .kb-key-wide { width: 62px !important; }
        .kb-key-space { width: 260px !important; }
        .kb-wrap { gap: 5px !important; padding: 20px 48px 12px !important; }
        .kb-row { gap: 5px !important; }
        .zen-mode .app-logo { transform: translate3d(0, 0, 0); }
      }

      /* ── Responsive: Standard laptops (1440-1919) ───────── */
      @media (min-width: 1440px) and (max-width: 1919px) {
        .typing-main { max-width: 1300px !important; }
        .typing-text { font-size: 32px !important; font-weight: 400 !important; line-height: 1.65 !important; }
      }

      /* ── Responsive: 13" MacBook / small laptops (1280-1439) */
      @media (min-width: 1280px) and (max-width: 1439px) {
        .typing-main { max-width: 1100px !important; padding: 36px 40px 18px !important; }
        .typing-text { font-size: 28px !important; max-height: 300px !important; font-weight: 400 !important; line-height: 1.65 !important; }
        .kb-key { width: 34px !important; height: 30px !important; font-size: 11px !important; }
        .kb-key-wide { width: 50px !important; }
        .kb-key-space { width: 200px !important; }
      }

      /* ── Responsive: Small screens (1024-1279) ──────────── */
      @media (min-width: 1024px) and (max-width: 1279px) {
        .typing-main { max-width: 920px !important; }
        .typing-text { font-size: 24px !important; max-height: 280px !important; line-height: 1.65 !important; font-weight: 400 !important; }
        .kb-key { width: 30px !important; height: 27px !important; font-size: 10px !important; }
        .kb-key-wide { width: 44px !important; font-size: 9px !important; }
        .kb-key-space { width: 180px !important; }
        .kb-wrap { padding: 12px 24px 6px !important; }
        .kb-row { gap: 3px !important; }
        .app-header { padding: 12px 24px !important; gap: 16px !important; }
        .nav-btn { font-size: 10px !important; padding: 4px 8px !important; }
        .length-btn { font-size: 9px !important; padding: 3px 6px !important; }
        .zen-mode .app-logo { transform: translate3d(0, 0, 0); }
      }

      /* ── Responsive: Tablets / narrow windows (768-1023) ── */
      @media (max-width: 1023px) {
        .typing-main { max-width: 700px !important; }
        .typing-text { font-size: 18px !important; max-height: 220px !important; line-height: 1.65 !important; font-weight: 400 !important; }
        .kb-wrap { display: none !important; }
        .app-header { padding: 10px 16px !important; gap: 12px !important; flex-wrap: wrap !important; }
        .nav-btn { font-size: 9px !important; padding: 4px 7px !important; }
        .length-btn { font-size: 8px !important; padding: 3px 5px !important; }
        .app-logo { font-size: 15px !important; }
        .stats-bar { padding: 6px 16px !important; font-size: 10px !important; }
        .zen-mode .app-logo { transform: translate3d(0, 0, 0); }
      }

      /* ── Responsive: Mobile (< 768) ─────────────────────── */
      @media (max-width: 767px) {
        .typing-main { max-width: 100% !important; }
        .typing-text { font-size: 14px !important; max-height: 180px !important; line-height: 1.65 !important; font-weight: 400 !important; }
        .app-header { gap: 8px !important; padding: 8px 12px !important; }
        .nav-btn { font-size: 8px !important; padding: 3px 6px !important; }
        .app-logo { font-size: 13px !important; margin-right: 4px !important; }
        .app-logo img { width: 18px !important; height: 18px !important; }
        .zen-mode .app-logo { transform: translate3d(0, 5vh, 0); }
      }
    `}</style>
  );
}
