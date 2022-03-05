import Link from '@mui/material/Link';

type NappLinkPropsType = {
    text: string;
}

export const NappLink: React.FC<NappLinkPropsType> = ({ text }) => (
  <Link
    href="#"
    color="inherit"
    sx={{
      fontSize: 'small',
      textTransform: 'uppercase',
      textDecoration: 'none',
      '&:hover': {
        color: '#1976d2',
      },
    }}
  >
    {text}
  </Link>
);
