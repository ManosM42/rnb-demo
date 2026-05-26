export function MapEmbed({ src }: { src?: string }) {
  const defaultSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.722678411289!2d25.459347575160972!3d35.2880206727167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a64c601989f3d%3A0x16913134606278ac!2sR%26B%20Plus!5e0!3m2!1sen!2sgr!4v1779773223005!5m2!1sen!2sgr";

  return (
    <div style={{ width: "100%", height: 450, borderRadius: 12, border: "1px solid rgba(200,169,81,0.4)", boxShadow: "0 0 40px rgba(200,169,81,0.15)", overflow: "hidden" }}>
      <iframe
        title="R&B Malia Location"
        width="100%"
        height="100%"
        style={{ border: 0, display: "block" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src ?? defaultSrc}
      />
    </div>
  );
}
