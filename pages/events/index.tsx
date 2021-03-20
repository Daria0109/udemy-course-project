import {EventType, getAllEvents, getFeaturedEvents} from '../../dummy-data';
import EventsList from '../../components/events/event-list/EventsList';
import EventsSearch from '../../components/events/events-search/EventsSearch';
import {useRouter} from 'next/router';

function AllEvents() {
  const featuredEvents: Array<EventType> = getAllEvents();
  const router = useRouter();
  const findEventsHandler = (year: string, month: string) => {
    router.push(`/events/${year}/${month}`)
  }

  return <>
    <EventsSearch onSearch={findEventsHandler}/>
    <EventsList events={featuredEvents}/>
  </>
}

export default AllEvents;