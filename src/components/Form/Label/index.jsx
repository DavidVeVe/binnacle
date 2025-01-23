export default function Label({ children, forElement }) {
  return <label htmlFor={forElement}>{children}</label>;
}
