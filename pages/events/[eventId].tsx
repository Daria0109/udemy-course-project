import {useRouter} from 'next/router';
import {EventType, getEventById} from '../../dummy-data';
import EventSummary from '../../components/events/event-summary/EventSummary';
import EventLogistics from '../../components/events/event-logistics/EventLogistics';
import EventContent from '../../components/events/event-content/EventContent';
import ErrorAlert from '../../components/error-alert/ErrorAlert';

function Event() {
  const router = useRouter()
  const eventId = router.query.eventId as string
  const event: EventType = getEventById(eventId)

  if (!event) {
    return <ErrorAlert>
      <p>No event found!</p>
    </ErrorAlert>
  }

  return <>
    <EventSummary title={event.title}/>
    <EventLogistics date={event.date}
                    address={event.location}
                    image={event.image}
                    imageAlt={event.title}/>
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
  </>
}

export default Event;