import Button from './../../ui/button/Button';
import classes from './ResultsTitle.module.css';

type ResultsTitlePropsType = {
  date: Date
}

function ResultsTitle(props: ResultsTitlePropsType) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
