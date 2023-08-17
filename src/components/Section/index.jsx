import { useRef, useEffect } from "react";

import { Container } from "./styles";

export function Section({ id, title, children, setActiveSection }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Create an IntersectionObserver that triggers the callback when the section enters/exits the visible area (viewport)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When the section is sufficiently visible, call the function to update the active section
          setActiveSection(id);
        }
      },
      {
        root: null, // Root element used as the intersection area (the whole window)
        rootMargin: "0px", // Additional margin around the intersection area
        threshold: 0.8, // Visibility value required to trigger the callback
      }
    );

    // Start observing the current section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Stop observing when the component is unmounted
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id, setActiveSection]); // Run the effect whenever the section's id or the setActiveSection function changes

  return (
    // The ref attribute associates the current section with the sectionRef reference
    <Container ref={sectionRef} id={id}>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}
