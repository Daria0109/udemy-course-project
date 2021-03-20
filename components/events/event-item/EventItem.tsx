import {EventType} from '../../../dummy-data';
import s from './EventItem.module.css'
import Button from '../../../ui/button/Button';
import DateIcon from '../../icons/DateIcon';
import AddressIcon from '../../icons/AddressIcon';
import ArrowRightIcon from '../../icons/ArrowRightIcon';

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

  return <li className={s.item}>
    <img src={image} alt={title}/>
    <div className={s.content}>
      <div className={s.summary} >
        <h2>{title}</h2>
        <div className={s.date}>
          <DateIcon/>
          <time>{humanReadableData}</time>
        </div>
        <div className={s.address}>
          <AddressIcon/>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div className={s.actions}>
        <Button link={`/events/${id}`}>
          <span>Explore Event</span>
          <span className={s.icon}><ArrowRightIcon/></span>
        </Button>
      </div>
    </div>
  </li>
}
export default EventItem;