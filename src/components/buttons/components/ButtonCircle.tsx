export const ButtonCircle = (props: React.SVGProps<SVGCircleElement>) => (
  <circle cx="36" cy="36" r="18" strokeWidth={5} {...props} />
)

export const ButtonCircleBlue = (props: React.SVGProps<SVGCircleElement>) => (
  <ButtonCircle stroke="var(--blue-button-line)" fill="var(--blue-button-fill)" {...props} />
)

export const EncoderCircleWhite = (props: React.SVGProps<SVGCircleElement>) => (
  <ButtonCircle stroke="var(--white-button-line)" fill="var(--white-button-fill)" {...props} />
)