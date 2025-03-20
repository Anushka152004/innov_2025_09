
/**
 * Animation utilities for staggered animations
 */

export const staggeredAnimation = (delay: number = 0.1) => {
  return (index: number) => ({
    animationDelay: `${index * delay}s`,
  });
};

export const fadeInUp = (index: number, delay: number = 0.1) => ({
  opacity: 0,
  transform: 'translateY(20px)',
  animation: 'fadeInUp 0.5s ease forwards',
  animationDelay: `${index * delay}s`,
});

export const fadeIn = (index: number, delay: number = 0.1) => ({
  opacity: 0,
  animation: 'fadeIn 0.5s ease forwards',
  animationDelay: `${index * delay}s`,
});

/**
 * CSS for adding to stylesheets
 * 
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
*/
