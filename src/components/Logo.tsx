import logo from "@/assets/rnb-logo.jpg";

interface LogoProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

export function Logo({ size = 44, className = "", glow = true }: LogoProps) {
  return (
    <img
      src={logo}
      alt="R&B Plus Malia"
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
      style={{
        width: size,
        height: size,
        background: "#f0ede6",
        padding: 2,
        boxShadow: glow ? "0 0 24px rgba(200,169,81,0.45)" : undefined,
      }}
    />
  );
}
