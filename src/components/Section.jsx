export default function Section({ id, num, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section-head">
        <span className="accent">{num}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
