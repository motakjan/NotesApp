import StarIcon from '@mui/icons-material/Star';
import { Tooltip } from '@mui/material';

interface IStarButton {
  isFavorite: boolean;
  onClick: () => void;
}

export const StarButton: React.FC<IStarButton> = ({ isFavorite, onClick }) => (
  <Tooltip title={isFavorite ? 'Remove From Favourite' : 'Add To Favourite'} placement="right">
    <StarIcon onClick={onClick} sx={{ m: 1, fill: isFavorite ? 'gold' : '#e2e2e2', cursor: 'pointer' }} />
  </Tooltip>
);
