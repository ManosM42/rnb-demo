import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 38;
const FRAME_PATH = (i: number) =>
  `/frames/rnb_frames_${String(i).padStart(3, "0")}.jpg`;

export function FramedAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef({ current: 0 });
  const heading1Ref = useRef<HTMLDivElement>(null);
  const heading2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(frameRef.current.current);
    };

    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loaded++;
        if (loaded === TOTAL_FRAMES) {
          setSize();
          initScrollTrigger();
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    function drawFrame(index: number) {
      const img = imagesRef.current[index];
      if (!img || !ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      const x = (canvas.width - w) / 2;
      const y = (canvas.height - h) / 2;
      ctx.drawImage(img, x, y, w, h);
    }

    function initScrollTrigger() {
      const obj = frameRef.current;

      gsap.to(obj, {
        current: TOTAL_FRAMES - 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate: () => {
            const frame = Math.round(obj.current);
            drawFrame(frame);
          },
        },
      });

      gsap.fromTo(heading1Ref.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.4,
        scrollTrigger: { trigger: container, start: "28% top", end: "38% top", scrub: true },
      });
      gsap.to(heading1Ref.current, {
        opacity: 0, y: -30, duration: 0.4,
        scrollTrigger: { trigger: container, start: "52% top", end: "58% top", scrub: true },
      });

      gsap.fromTo(heading2Ref.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.4,
        scrollTrigger: { trigger: container, start: "62% top", end: "72% top", scrub: true },
      });
      gsap.to(heading2Ref.current, {
        opacity: 0, y: -30, duration: 0.4,
        scrollTrigger: { trigger: container, start: "88% top", end: "95% top", scrub: true },
      });
    }

    window.addEventListener("resize", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="framed-animation-container">
      <div className="framed-animation-sticky">
        <canvas ref={canvasRef} className="framed-animation-canvas" />
        <div className="framed-animation-vignette" />
        <div ref={heading1Ref} className="framed-animation-heading" style={{ opacity: 0 }}>
          <p className="framed-animation-eyebrow">R&amp;B Malia</p>
          <h2 className="framed-animation-title">Unforgettable Nights</h2>
        </div>
        <div ref={heading2Ref} className="framed-animation-heading" style={{ opacity: 0 }}>
          <p className="framed-animation-eyebrow">Your night awaits</p>
          <h2 className="framed-animation-title framed-animation-title--gold">Start Here.</h2>
        </div>
      </div>
    </div>
  );
}
