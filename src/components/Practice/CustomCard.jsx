import "./CustomCard.css";
export default function CustomCard({name, children}) {
  return (
    <div className="custom-card">
      <h3>{name}</h3>
      {children}
    </div>
  );
}
