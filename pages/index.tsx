import {EventType, getFeaturedEvents} from '../dummy-data';
import EventsList from '../components/events/EventsList';

function HomePage() {
  const featuredEvents: Array<EventType> = getFeaturedEvents();
  return <div>
    <h1>Home Page</h1>
    <EventsList events={featuredEvents}/>
  </div>
}

export default HomePage;