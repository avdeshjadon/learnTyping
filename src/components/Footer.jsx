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
// Footer.jsx -- Bottom Hint Bar
// ===============================
// Minimal footer showing keyboard shortcuts (esc to reset, tab to switch
// mode). Auto-hides during zen-mode via the .app-footer CSS class.
// ----------------------------------------------------------------------------

import { footerStyle, footerHintStyle } from "../styles/appStyles";

export default function Footer() {
  return (
    <div className="app-footer" style={footerStyle}>
      <span style={footerHintStyle}>esc to reset · tab to switch mode</span>
    </div>
  );
}
