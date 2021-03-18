import {EventType} from '../../dummy-data';
import Link from 'next/link'

type EventItemPropsType = {
  event: EventType
}

function EventItem (props: EventItemPropsType) {
  const {title, date, image, location, id} = props.event
  const humanReadableData = new Date(date).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const formattedAddress = location.replace(', ', '\n')

  return <li>
    <img src={image} alt={title}/>
    <div>
      <div>
        <h2>{title}</h2>
        <div>
          <time>{humanReadableData}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div>
        <Link href={`/events/${id}`}>Explore Event</Link>
      </div>
    </div>
  </li>
}
export default EventItem;