export function OwlLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Owl body */}
      <ellipse cx="50" cy="55" rx="30" ry="35" fill="#8B5CF6" />
      
      {/* Ear tufts */}
      <path d="M30 25 L25 15 L35 20 Z" fill="#7C3AED" />
      <path d="M70 25 L75 15 L65 20 Z" fill="#7C3AED" />
      
      {/* Eyes background */}
      <circle cx="40" cy="45" r="12" fill="white" />
      <circle cx="60" cy="45" r="12" fill="white" />
      
      {/* Pupils */}
      <circle cx="40" cy="45" r="6" fill="#1F2937" />
      <circle cx="60" cy="45" r="6" fill="#1F2937" />
      
      {/* Eye shine */}
      <circle cx="42" cy="43" r="2" fill="white" />
      <circle cx="62" cy="43" r="2" fill="white" />
      
      {/* Beak */}
      <path d="M50 52 L45 60 L55 60 Z" fill="#F59E0B" />
      
      {/* Wings */}
      <ellipse cx="25" cy="60" rx="8" ry="15" fill="#7C3AED" />
      <ellipse cx="75" cy="60" rx="8" ry="15" fill="#7C3AED" />
      
      {/* Feet */}
      <path d="M40 85 L38 92 L42 92 Z" fill="#F59E0B" />
      <path d="M60 85 L58 92 L62 92 Z" fill="#F59E0B" />
    </svg>
  );
}
