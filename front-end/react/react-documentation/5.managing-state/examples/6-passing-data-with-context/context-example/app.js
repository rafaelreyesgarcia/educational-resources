import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

/*
<Section>
  <Heading level={1}>Title</Heading>
  <Section>
    <Heading level={2}>Heading</Heading>
    <Heading level={2}>Heading</Heading>
    <Heading level={2}>Heading</Heading>
    <Section>
      <Heading level={3}>Sub-heading</Heading>
      <Heading level={3}>Sub-heading</Heading>
      <Heading level={3}>Sub-heading</Heading>
      <Section>
        <Heading level={4}>Sub-sub-heading</Heading>
        <Heading level={4}>Sub-sub-heading</Heading>
        <Heading level={4}>Sub-sub-heading</Heading>
      </Section>
    </Section>
  </Section>
</Section>
*/

/*
export default function Page() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Heading level={2}>Heading</Heading>
      <Heading level={3}>Sub-heading</Heading>
      <Heading level={4}>Sub-sub-heading</Heading>
      <Heading level={5}>Sub-sub-sub-heading</Heading>
      <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
    </Section>
  );
}
*/