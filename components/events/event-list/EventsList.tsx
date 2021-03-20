import EventItem from "../event-item/EventItem";
import {EventType} from '../../../dummy-data';
import s from './EventsList.module.css'

type EventsListPropsType = {
  events: Array<EventType>
}

function EventsList (props: EventsListPropsType) {
  const items = props.events;
  return <ul className={s.list}>
    {items.map(item => <EventItem key={item.id} event={item}/>)}
  </ul>
}
export default EventsList;