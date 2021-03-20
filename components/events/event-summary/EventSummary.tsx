import s from './EventSummary.module.css';


type EventSummaryPropsType = {
  title: string
}

function EventSummary(props: EventSummaryPropsType) {
  const { title } = props;

  return (
    <section className={s.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;