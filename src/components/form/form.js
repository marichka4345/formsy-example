import React from 'react';
import Formsy from 'formsy-react';
import {renderControls} from './services/control-factory';
import styles from './form.module.css';

export const TestForm = React.forwardRef((props, ref) => {

    return (
      <Formsy
        ref={ref}
      >
          <div className={styles.fields}>
            {renderControls(styles.error)}
          </div>
      </Formsy>
    );
});
