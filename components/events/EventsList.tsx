import EventItem from "./EventItem";
import {EventType} from '../../dummy-data';

type EventsListPropsType = {
  events: Array<EventType>
}

function EventsList (props: EventsListPropsType) {
  const items = props.events;
  return <ul>
    {items.map(item => <EventItem key={item.id} event={item}/>)}
  </ul>
}
export default EventsList;