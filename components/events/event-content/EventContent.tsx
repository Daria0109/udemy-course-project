import s from './EventContent.module.css';

function EventContent(props) {
  return (
    <section className={s.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
