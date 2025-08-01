
    const blobs = document.querySelectorAll(".blob");

    blobs.forEach(blob => {
      const animate = () => {
        blob.style.borderRadius = `${60 + Math.random() * 20}% ${40 + Math.random() * 20}% ${40 + Math.random() * 20}% ${60 + Math.random() * 20}% / ${50 + Math.random() * 20}% ${60 + Math.random() * 20}% ${40 + Math.random() * 20}% ${50 + Math.random() * 20}%`;
      };
      setInterval(animate, 2000);
    });


