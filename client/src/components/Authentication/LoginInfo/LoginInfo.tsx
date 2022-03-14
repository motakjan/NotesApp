import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { AnimatedNappLogo } from '../../UI/NappLogo/NappLogo';

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1.5, duration: 1 } },
};

const buttonVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { delay: 1.5, duration: 0.5 } },
};

export const LoginInfo = () => (
  <Box sx={{ padding: '1.5rem', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <AnimatedNappLogo />
    <motion.p className="loginText" initial="hidden" animate="visible" variants={textVariants}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel neque sint cumque minus exercitationem dicta
      tempore error expedita, in amet culpa ipsum. Quis sint dolorem aperiam accusantium, ipsa cumque.
    </motion.p>
    <motion.div initial="hidden" animate="visible" variants={buttonVariants}>
      <Button
        sx={{
          color: 'black',
          backgroundColor: 'white',
          width: '12rem',
          fontFamily: 'Nunito',
          fontWeight: 700,
        }}
      >
        Register Now
      </Button>
    </motion.div>
  </Box>
);
