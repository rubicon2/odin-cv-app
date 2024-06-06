import { Container } from '../CvPreviewComponents';
import EducationPreview from '../EducationPreview';
import GeneralPreview from '../GeneralPreview';
import WorkPreview from '../WorkPreview';

export default function CvPreview() {
  return (
    <Container>
      <GeneralPreview />
      <EducationPreview />
      <WorkPreview />
    </Container>
  );
}
