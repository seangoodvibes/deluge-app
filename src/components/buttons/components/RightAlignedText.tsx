export const RightAlignedText = (props: { children: React.ReactNode } & React.SVGProps<SVGTextElement>) => (
  <text x={64} y={24} dominantBaseline="right" textAnchor="right" fontSize={32} {...props} />
)
