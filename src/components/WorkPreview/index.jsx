import {
  SectionHeading,
  DynamicItem,
  LocationName,
  LocationDates,
  LocationSummary,
} from '../CvPreviewComponents';
import { PreviewGetContext } from '../../contexts/CvAppContext';
import { useContext } from 'react';
import styled from 'styled-components';

const Role = styled.span`
  font-style: italic;
`;

export default function WorkPreview() {
  const { work } = useContext(PreviewGetContext);

  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    month: 'long',
    year: 'numeric',
  });

  const entries = work.map((entry) => {
    let startDate = '';
    let endDate = '';
    // Need to wrap in try catch since if entry dates have not been filled in yet, will throw an error
    try {
      startDate = dateFormatter.format(new Date(entry.startDate));
      endDate = dateFormatter.format(new Date(entry.endDate));
    } catch (error) {
      console.error(error);
    }
    let dateString = `${startDate}`;
    if (entry.current) dateString += ' - present';
    // If start and end date are the same month, display e.g. 'April 2024' instead of 'April 2024 - April 2024'
    else if (startDate !== endDate) dateString += ` - ${endDate}`;
    return (
      <DynamicItem key={entry.id}>
        <LocationName>{entry.company}</LocationName>
        <Role> - {entry.role}</Role>
        <LocationDates>{dateString}</LocationDates>
        <LocationSummary>{entry.summary}</LocationSummary>
      </DynamicItem>
    );
  });

  if (entries.length === 0) return null;

  return (
    <div>
      <SectionHeading>Experience</SectionHeading>
      {entries}
    </div>
  );
}
