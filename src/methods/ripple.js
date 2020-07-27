export default {
  setRippleElement(el, color) {
    const dot = document.createElement('SPAN');
    const largestSide = Math.sqrt(
      (el.offsetWidth ** 2)
      + (el.offsetHeight ** 2),
    );
    const dotSize = Math.ceil((largestSide * 2) / 100);
    const rippleColor = el.dataset.rippleColor || color;

    dot.style = `
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: ${dotSize}px;
          height: ${dotSize}px;
          z-index: 3;
          border-radius: 50%;
          background: ${rippleColor};
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.2;
          animation: ripple 0.7s ease-out forwards;
      `;

    const element = el;
    element.style.position = 'relative';
    element.style.overflow = 'hidden';

    el.addEventListener('click', ({ pageX, pageY, currentTarget }) => {
      // x and y in percentages
      const x = ((pageX - currentTarget.offsetLeft) * 100) / currentTarget.offsetWidth;
      const y = ((pageY - currentTarget.offsetTop) * 100) / currentTarget.offsetHeight;

      el.appendChild(dot);

      dot.style.left = `${x}%`;
      dot.style.top = `${y}%`;

      // setTimeout(() => {
      //   el.removeChild(dot);
      // }, 1000);
    });
  },
};
