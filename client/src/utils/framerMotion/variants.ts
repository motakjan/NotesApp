export const LOGIN_FORM_VARIANTS = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 2, bounce: 0.6 } },
};

export const LOGIN_INFO_TEXT_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1.5, duration: 1 } },
};

export const LOGIN_INFO_BUTTON_VARIANTS = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.5, duration: 0.5, type: 'spring', damping: 10, mass: 0.75, stiffness: 100 },
  },
};
