import { Link } from "react-router-dom";
import { StyledButton3, Theme } from "../utils/theme";
const { spacing } = Theme;
const MenuItem = ({ itemName, id }: { itemName: string; id: string }) => {
  return (
    <Link to={`/#${id}`}>
      <StyledButton3 responsiveMargin={`${spacing.r}px auto`}>
        {itemName}
      </StyledButton3>
    </Link>
  );
};
export default MenuItem;
