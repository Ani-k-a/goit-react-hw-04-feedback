import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export function Section({ children, title }) {
  return (
    <section className={css.section}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
