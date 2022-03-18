import { Box, Button } from '@mui/material';
import { AnimatedNappLogo } from '../../UI/NappLogo/NappLogo';
import { useState } from 'react';
import { AnimatedBox } from '../../UI/FramerMotion/AnimatedDiv';
import { LOGIN_INFO_BUTTON_VARIANTS, LOGIN_INFO_TEXT_VARIANTS } from '../../../utils/framerMotion/variants';

export const LoginInfo = () => {
  const [registerOpened, setRegisterOpened] = useState(false);

  const registerVariants = {
    hidden: { opacity: 0, width: '0vw' },
    visible: registerOpened ? { opacity: 1, width: '100vw', transition: { duration: 1 } } : {},
  };

  const registerButtonClicked = () => {
    setRegisterOpened((prevState: boolean) => !prevState);
  };

  return (
    <Box
      sx={{
        padding: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '@media screen and (max-width: 920px)': {
          display: 'none',
        },
      }}
    >
      <AnimatedNappLogo />
      <AnimatedBox
        sx={{
          width: '25rem',
          textAlign: 'center',
          color: 'white',
          fontSize: 'smaller',
          margin: '15px',
          fontFamily: 'Nunito, sans-serif',
        }}
        initial="hidden"
        animate="visible"
        variants={LOGIN_INFO_TEXT_VARIANTS}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel neque sint cumque minus exercitationem
        dicta tempore error expedita, in amet culpa ipsum. Quis sint dolorem aperiam accusantium, ipsa cumque.
      </AnimatedBox>
      <AnimatedBox initial="hidden" animate="visible" variants={LOGIN_INFO_BUTTON_VARIANTS}>
        <Button
          sx={{
            color: 'black',
            backgroundColor: 'white',
            width: '12rem',
            fontFamily: 'Nunito',
            fontWeight: 700,
            '&:hover': {
              backgroundColor: 'darkorange',
              color: 'black',
            },
          }}
          onClick={registerButtonClicked}
        >
          Register Now
        </Button>
      </AnimatedBox>
      <AnimatedBox
        initial="hidden"
        animate="visible"
        variants={registerVariants}
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'white',
          position: 'absolute',
          zIndex: '50',
          left: '0',
          top: '0',
        }}
      />
    </Box>
  );
};
