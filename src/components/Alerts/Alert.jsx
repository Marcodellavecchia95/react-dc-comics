export default function Alert({ text, color, backgroundColor, children }) {
  const alertContent = text || "Si è verificato un errore";
  const alertColor = color || "red";
  const alertBgColor = backgroundColor || "red";
  return (
    <div style={{ color: alertColor, backgroundColor: alertBgColor }}>
      {children || alertContent}
    </div>
  );
}
