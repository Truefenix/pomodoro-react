import React from 'react';
import './index.css';
import {PomodoroTimer} from './components/pomodoro-timer';

export default function App() {
  return (
    <div className="container">
        <PomodoroTimer
            pomodoroTime={1500}
            shortRestTime={300}
            longRestTime={1500}
            cycles={4}
        />
    </div>
  );
}
