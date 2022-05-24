import { useEffect, useState } from "react";
import { StyledButton3, Theme } from "../utils/theme";
const { spacing } = Theme;
const MenuItem = ({ itemName, id }: { itemName: string; id: string }) => {
  /*
   * Store our anchorTarget in state
   * We do not set it here, preferring to wait for after the component
   * is mounted to avoid any errors
   */
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  /*
   * When the component mounts and/or updates, set our AnchorTarget based
   * on the itemName
   */
  useEffect(() => {
    setAnchorTarget(document.getElementById(id));
  }, [id]);

  /*
   * Where all the magic happens -- scrollIntoView on click
   */
  const handleClick = (event: any) => {
    event.preventDefault();
    anchorTarget &&
      anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <StyledButton3
      responsiveMargin={`${spacing.r}px auto`}
      onClick={handleClick}
      href={`#${id}`}
    >
      {itemName}
    </StyledButton3>
  );
};
export default MenuItem;
