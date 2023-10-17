import css from './Section.module.css';
import React from 'react';

export const Section = ({ title, children }) => (
  <div className={css.section}>
    <h2 className={css.sectionTitle}>{title}</h2>
    {children}
  </div>
);
