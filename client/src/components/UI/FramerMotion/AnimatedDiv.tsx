import { motion, Variants } from 'framer-motion';
import { CSSProperties } from 'react';

interface IAnimatedBox {
  initial: string;
  animate: string;
  variants: Variants;
  sx?: CSSProperties;
  children?: React.ReactNode;
}

export const AnimatedBox: React.FC<IAnimatedBox> = ({ children, sx, ...props }) => (
  <motion.div style={sx} {...props}>
    {children}
  </motion.div>
);
