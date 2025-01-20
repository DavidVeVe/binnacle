import { defaultTitleSize, validTags } from "./helper";

export default function Text({ children, element }) {
  let TextComponent = validTags[element] || defaultTitleSize;

  return <TextComponent className={"title"}>{children}</TextComponent>;
}
