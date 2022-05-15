import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const AnimatedNappLogo: React.FC = () => (
  <svg
    width="180px"
    height="200px"
    viewBox="2 -18 13 18"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <g>
      <motion.path
        strokeWidth="0.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, fill: 'transparent' }}
        animate={{ opacity: 1, fill: 'lavenderblush' }}
        transition={{
          default: { duration: 0.5, ease: 'easeInOut', delay: 1.5 },
        }}
        d="m 4 -11 L 2 -12 L 2 0 L 4 0 L 4 -11 L 4 -13 L 15 -18 L 15 0 L 13 0 L 13 -15 L 4 -11 L 4 -13 L 2 -14 L 2 -18 L 4 -17 L 4 -13"
      />
      <motion.path
        strokeWidth="0.1"
        fill="transparent"
        stroke="#e8e8e8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          default: { duration: 1.5, ease: 'easeInOut' },
        }}
        d="m 4 -11 L 2 -12 L 2 0 L 4 0 L 4 -11 L 4 -13 L 15 -18 L 15 0 L 13 0 L 13 -15 L 4 -11 L 4 -13 L 2 -14 L 2 -18 L 4 -17 L 4 -13"
      />
    </g>
  </svg>
);

interface INappLogo {
  width: string;
  height: string;
  fill: string;
}

export const NappLogo: React.FC<INappLogo> = ({ width, height, fill }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        cursor: 'pointer',
      }}
      onClick={() => navigate('/')}
    >
      <svg
        width={width}
        height={height}
        viewBox="2 -18 13 18"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            fill={fill}
            d="m 4 -11 L 2 -12 L 2 0 L 4 0 L 4 -11 L 4 -13 L 15 -18 L 15 0 L 13 0 L 13 -15 L 4 -11 L 4 -13 L 2 -14 L 2 -18 L 4 -17 L 4 -13"
          />
        </g>
      </svg>
    </Box>
  );
};
