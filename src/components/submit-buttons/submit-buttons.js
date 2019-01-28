import React from 'react';
import PropTypes from 'prop-types';
import {SubmitButton} from './components/submit-button/submit-button';
import styles from './submit-buttons.module.css';

export const SubmitButtons = ({
                                  onSubmit,
                                  onSubmitWithoutValidation,
                                  isSubmitting
}) => {
    return (
      <div className={styles.root}>
          <SubmitButton
            isSubmitting={isSubmitting}
            onClick={onSubmit}
            title="Save with validation"
          />
          <p className={styles.prompt}>
              Server error on Text1 will be returned after successful submit
              if the value is other than <strong>sun</strong>
          </p>

          <SubmitButton
            isSubmitting={isSubmitting}
            onClick={onSubmitWithoutValidation}
            title="Save without validation"
          />
      </div>
    );
};

SubmitButtons.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onSubmitWithoutValidation: PropTypes.func.isRequired
};
