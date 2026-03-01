export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: #0a0a0a; }
      .char-cursor { animation: blink-cursor 1s step-end infinite; }
      @keyframes blink-cursor {
        0%, 100% { border-bottom-color: #e5e5e5; }
        50% { border-bottom-color: transparent; }
      }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: #0a0a0a; }
      ::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }
    `}</style>
  );
}
