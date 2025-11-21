export default function AdSlot({ id = "ezoic-slot", style = {} }) {
  return (
    <div id={id} style={{ minHeight: 80, display: "flex", alignItems: "center", justifyContent: "center", background: "#07111a", color: "#9aa3b2", ...style }} className="rounded-md">
      {/* Ezoic / Ad placeholder — استبدل هذا العنصر عند قبول Ezoic */}
      <div className="text-sm">Ad slot (Ezoic) — placeholder</div>
    </div>
  );
}
