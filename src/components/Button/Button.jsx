export default function Button({
  children,
  onClick,
  buttonType,
  disabled,
  form
}) {
  return (
    <button onClick={onClick} type={buttonType} disabled={disabled} form={form}>
      {children}
    </button>
  );
}
