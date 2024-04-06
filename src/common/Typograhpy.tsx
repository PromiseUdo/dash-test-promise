import { PolymorphicComponentProps } from "../../types/polymorphic.type";

type TypoProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "link";
  }
>;

function Typography<C extends React.ElementType = "div">(props: TypoProps<C>) {
  const { children, as, className, variant, ...divProps } = props;
  const Component = as || "div";
  return (
    <Component className={className} {...divProps}>
      {children}{" "}
    </Component>
  );
}

export default Typography;
