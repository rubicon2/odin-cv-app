import styled from 'styled-components';

export const Container = styled.div`
  word-break: break-word;

  > * {
    margin: 1rem 0.5rem;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
      margin-bottom: 0;
      border-bottom: none;
    }
  }
`;

export const SectionHeading = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
  padding: 0.1em 0.2em;
  margin-bottom: 0.5em;
  background-color: var(--dark-color);
  color: var(--light-color);
`;

export const DynamicItem = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--divider-color);

  &:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const LocationDates = styled.div`
  line-height: 0.5;
  color: var(--subtext-color);
`;

export const LocationName = styled.span`
  font-weight: 600;
  font-size: 1.3rem;
`;

export const LocationSummary = styled.div`
  margin-top: 1em;
  max-width: 30em;
  line-height: 1.7;
  font-weight: 300;
`;
