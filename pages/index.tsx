import {EventType, getFeaturedEvents} from '../dummy-data';
import EventsList from '../components/events/event-list/EventsList';

function HomePage() {
  const featuredEvents: Array<EventType> = getFeaturedEvents();
  return <div>
    <EventsList events={featuredEvents}/>
  </div>
}

export default HomePage;