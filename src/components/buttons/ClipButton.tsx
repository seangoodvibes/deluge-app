import { RightAlignedText } from './components/RightAlignedText'
import { Button } from './components/Button'
import { ButtonCircleBlue } from './components/ButtonCircle'

export const ClipButtonActive = () => (
  <Button>
    <ButtonCircleBlue />
    <RightAlignedText fill="var(--blue-button-text)" y={47}>
      CLIP
    </RightAlignedText>
  </Button>
)

export default ClipButtonActive
