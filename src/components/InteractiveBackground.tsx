
import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const InteractiveBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor follower center point
  const springConfig = { damping: 25, stiffness: 120 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Center the orbital system on the cursor
      // No offset needed if we center everything relative to this point
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const blobs = [
    {
      color: 'bg-purple-600',
      size: 'w-64 h-64',
      radius: 200, // Distance from center
      duration: 15, // Seconds per orbit
      blur: 'blur-[80px]',
      opacity: 'opacity-30'
    },
    {
      color: 'bg-cyan-600',
      size: 'w-72 h-72',
      radius: 300,
      duration: 20,
      reverse: true,
      blur: 'blur-[90px]',
      opacity: 'opacity-25'
    },
    {
      color: 'bg-yellow-500',
      size: 'w-48 h-48',
      radius: 150,
      duration: 12,
      blur: 'blur-[60px]',
      opacity: 'opacity-20'
    }
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* The entire system follows the mouse */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-0 left-0"
      >
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-0 flex items-center justify-center p-0"
            animate={{ rotate: blob.reverse ? -360 : 360 }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              // This centers the rotation axis on the cursor (0,0 of this container)
              width: 0,
              height: 0,
            }}
          >
            {/* The blob itself, offset by radius */}
            <div
              className={`absolute rounded-full mix-blend-screen mix-blend-plus-lighter ${blob.color} ${blob.size} ${blob.blur} ${blob.opacity}`}
              style={{
                transform: `translateX(${blob.radius}px)`, // Push it out to orbit radius
                marginTop: `-${parseInt(blob.size.split(' ')[1].replace('h-', '')) * 2}px`, // Slight crude centering adjustment
                marginLeft: `-${parseInt(blob.size.split(' ')[0].replace('w-', '')) * 2}px`
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
