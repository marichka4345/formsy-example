import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from './submit-button.module.css';

export const SubmitButton = ({onClick, isSubmitting, title}) => {
    return (
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={onClick}
        disabled={isSubmitting}
        className={styles.button}
      >
          {title}
      </Button>
    );
};

SubmitButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
};
