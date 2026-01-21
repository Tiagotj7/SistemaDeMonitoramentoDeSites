interface FlexCenterProps {
  children: React.ReactNode;
}

export const FlexCenter: React.FC<FlexCenterProps> = ({ children }) => {
  return (
    <section className="flex items-center justify-center">
      {children}
    </section>
  );
};
