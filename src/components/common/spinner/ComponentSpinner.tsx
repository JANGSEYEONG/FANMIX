import styles from './ComponentSpinner.module.css';
interface ComponentSpinnerProps {
  className?: string;
}

const ComponentSpinner = ({ className }: ComponentSpinnerProps) => {
  return (
    <div className={className}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default ComponentSpinner;
