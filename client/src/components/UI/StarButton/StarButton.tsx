import StarIcon from '@mui/icons-material/Star';
import { Tooltip } from '@mui/material';

interface IStarButton {
  isFavourite: boolean;
  onClick: () => void;
}

export const StarButton: React.FC<IStarButton> = ({ isFavourite, onClick }) => (
  <Tooltip title={isFavourite ? 'Remove From Favourite' : 'Add To Favourite'} placement="right">
    <StarIcon onClick={onClick} sx={{ m: 1, fill: isFavourite ? 'gold' : '#e2e2e2', cursor: 'pointer' }} />
  </Tooltip>
);
