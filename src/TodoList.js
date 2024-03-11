import React from 'react';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import StudentName from './components/StudentName';

function TodoList() {
  return (
    <div className="container">
      <PageTitle>TODO List </PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
      <StudentName />
    </div>
  );
}

export default TodoList;
