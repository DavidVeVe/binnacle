import "./backdrop.scss"

export default function Backdrop({ children, onClick }) {
  return (
    <section className="backdrop" onClick={onClick}>
      {children}
    </section>
  );
}
