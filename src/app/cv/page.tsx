export const metadata = {
  title: "CV - Wyatt Sommer",
  description: "Wyatt Sommer Resume",
};

export default function CVPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', padding: 0, margin: 0 }}>
      <iframe
        src="/docs/wy-resume.pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Resume"
      />
    </div>
  );
}
