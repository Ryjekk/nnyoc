import {useEffect, useState} from 'react';
import {CursorEl} from "./styles";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({
    mouseX: 0,
    mouseY: 0
  });

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setCursorPosition({
        mouseX: e.clientX,
        mouseY: e.clientY
      })

      return () => window.removeEventListener('mousemove', () => {})
    })
  }, [])

  const variants = {
    default: {
      x: cursorPosition.mouseX - 30 / 2,
      y: cursorPosition.mouseY - 30 / 2
    }
  }

  return (
    <CursorEl variants={variants} animate='default'/>
  );
};

export default Cursor;