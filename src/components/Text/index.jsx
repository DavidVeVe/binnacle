import { defaultTitleSize, validTags, getClassNames } from "./helper";
import "./text.scss";

export default function Text({ children, element, isInline }) {
  console.log(isInline);
  const TextComponent = validTags[element] || defaultTitleSize;
  const composedClassNames = getClassNames(isInline);

  return (
    <TextComponent className={composedClassNames}>{children}</TextComponent>
  );
}
