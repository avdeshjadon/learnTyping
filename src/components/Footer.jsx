import { footerStyle, footerHintStyle } from "../styles/appStyles";

export default function Footer() {
  return (
    <div style={footerStyle}>
      <span style={footerHintStyle}>esc to reset · tab to switch mode</span>
    </div>
  );
}
