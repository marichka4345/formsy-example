import React from 'react';
import Formsy from 'formsy-react';
import {renderControls} from './services/control-factory';
import {getServerError} from '../../services/helpers';
import {TEXT1} from '../../constants/form-fields';
import styles from './form.module.css';

const renderError = error => (
  error &&
  <div className={styles.error}>{error}</div>
);

export const TestForm = React.forwardRef((props, ref) => {

    const onValidSubmit = async (data, resetForm, invalidateForm) => {
        if (data[TEXT1] !== 'sun') {
            const errors = await getServerError([TEXT1]);
            invalidateForm(errors);
            return;
        }

        alert('Submitted');
        console.log(data);
    };

    return (
      <Formsy
        ref={ref}
        onValidSubmit={onValidSubmit}
      >
          <div className={styles.fields}>
            {renderControls(renderError)}
          </div>
      </Formsy>
    );

});
