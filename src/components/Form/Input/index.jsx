export default function Input({ type, id, name, required, value, onChange }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
}
