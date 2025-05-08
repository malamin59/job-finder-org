import { motion } from "framer-motion";
const Motion = ({ children, type = "h1", ...rest }) => {
  const MotionTag = motion[type];

  return (
    <MotionTag
      animate={{
        y: [0, -10, 0], 
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Motion;
