import {useRouter} from 'next/router';
import {getFilteredEvents} from '../../dummy-data';
import EventsList from '../../components/events/event-list/EventsList';
import ResultsTitle from '../../components/results-title/ResultsTitle';
import Button from '../../ui/button/Button';
import ErrorAlert from '../../components/error-alert/ErrorAlert';

function FilteredEvents() {
  const router = useRouter()
  const filteredData = router.query.slug
  if (!filteredData) {
    return <div className={'center'}>Loading...</div>
  }

  const year = +filteredData[0]
  const month = +filteredData[1]
  if (isNaN(year)
    || isNaN(month)
    || year > 2030
    || year < 2021
    || month > 12
    || month < 1) {
    return <>
      <ErrorAlert>
        <p>Invalid filter! Please, adjust your values.</p>
      </ErrorAlert>
      <div className={'center'}>
        <Button link={'/events'}>All Events</Button>
      </div>
    </>
  }

  const filteredEvents = getFilteredEvents({year, month})
  if (!filteredData || filteredData.length === 0) {
    return <>
      <ErrorAlert>
        <p>No events found for the chosen filter!</p>
      </ErrorAlert>
      <div className={'center'}>
        <Button link={'/events'}>All Events</Button>
      </div>
    </>
  }

  const date = new Date(year, month - 1)

  return <>
    <ResultsTitle date={date}/>
    <EventsList events={filteredEvents}/>
  </>
}

export default FilteredEvents;