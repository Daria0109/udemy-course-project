import AddressIcon from '../../icons/AddressIcon';
import DateIcon from '../../icons/DateIcon';
import LogisticsItem from '../logistics-item/LogisticsItem';
import s from './EventLogistics.module.css';

type EventLogisticsPropsType = {
  date: string
  address: string
  image: string
  imageAlt: string
}

function EventLogistics(props: EventLogisticsPropsType) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={s.logistics}>
      <div className={s.image}>
        <img src={`${image}`} alt={imageAlt} />
      </div>
      <ul className={s.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
