export const GradientLight = ({ className }: { className?: string }) => {
  return (
    <div
      className={`absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#3a3a52] to-[#1a1a2e]/0 to-70% pointer-events-none ${className}`}
    />
  );
};
