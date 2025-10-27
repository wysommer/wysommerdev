export const metadata = {
  title: "Certificate - Wy Sommer",
  description: "FES Institute Certificate of Graduation",
};

export default function CertificatePage() {
  return (
    <div style={{ width: '100vw', height: '100vh', padding: 0, margin: 0 }}>
      <iframe
        src="/docs/FES Institute Certificate of Graduation.pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Certificate"
      />
    </div>
  );
}

