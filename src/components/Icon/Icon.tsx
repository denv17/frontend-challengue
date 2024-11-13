import { IconProps } from "@/types/types";
import { icons } from "@/data/icons";

export const Icon = ({ name, ...props }: IconProps) => {
  const icon = icons.find((icon) => icon.name === name);

  if (!icon) return <svg {...props}></svg>;

  return (
    <svg
      viewBox={icon.viewbox}
      dangerouslySetInnerHTML={{ __html: icon.path }}
      {...props}
    ></svg>
  );
};
