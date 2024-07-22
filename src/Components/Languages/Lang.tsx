"use client";
import React, { useState } from 'react';
import './Lang.css';

const Lang = () => {
  const [activeTab, setActiveTab] = useState('hard-skills');

  const handleTabChange = (tabKey: React.SetStateAction<string>) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="container py-8">
      <div className="p-5 container">
        <h2 className="display-4 pb-5 text-center Wccysa">Skills</h2>
        <ul className="skills-tabs nav nav-tabs nav-fill" role="tablist">
          <li className="nav-item" role="presentation">
            <button type="button" id="skills-tabs-tab-hard-skills" role="tab" data-rr-ui-event-key="hard-skills" aria-controls="skills-tabs-tabpane-hard-skills" aria-selected={activeTab === 'hard-skills'} className={`skills-tab lead nav-link ${activeTab === 'hard-skills' ? 'active' : ''}`} onClick={() => handleTabChange('hard-skills')}>Technical Skills</button>
          </li>
          <li className="nav-item" role="presentation">
            <button type="button" id="skills-tabs-tab-soft-skills" role="tab" data-rr-ui-event-key="soft-skills" aria-controls="skills-tabs-tabpane-soft-skills" aria-selected={activeTab === 'soft-skills'} className={`skills-tab lead nav-link ${activeTab === 'soft-skills' ? 'active' : ''}`} onClick={() => handleTabChange('soft-skills')}>Soft Skills</button>
          </li>
        </ul>
        <div className="tab-content">
          <div role="tabpanel" id="skills-tabs-tabpane-hard-skills" aria-labelledby="skills-tabs-tab-hard-skills" className={`fade tab-pane ${activeTab === 'hard-skills' ? 'active show' : ''}`}>
            <div className="pt-3 px-1 row">
              <div className="col-md-6 col-12">
                <div style={{ width: '95%' }}>
                  <p className="lead mb-1 mt-2">HTML/CSS</p>
                  <div className="progress-bar-animation progress">
                    <div role="progressbar" className="progress-bar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div style={{ width: '95%' }}>
                  <p className="lead mb-1 mt-2">SQL</p>
                  <div className="progress-bar-animation progress">
                    <div role="progressbar" className="progress-bar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div style={{ width: '95%' }}>
                  <p className="lead mb-1 mt-2">React Js</p>
                  <div className="progress-bar-animation progress">
                    <div role="progressbar" className="progress-bar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div style={{ width: '95%' }}>
                  <p className="lead mb-1 mt-2">C/C++</p>
                  <div className="progress-bar-animation progress">
                    <div role="progressbar" className="progress-bar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{ width: '65%' }}></div>
                  </div>
                </div>
                {/* Add more technical skills */}
                
                
              </div>
              <div className="col-md-6 col-12">
                <div style={{ width: '95%' }}>
                  <p className="lead mb-1 mt-2">JavaScript</p>
                  <div className="progress-bar-animation progress">
                    <div role="progressbar" className="progress-bar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}></div>
                  </div>
                  <div style={{ width: '95%' }}>
                  <p className="lead mb-1 mt-2">Java</p>
                  <div className="progress-bar-animation progress">
                    <div role="progressbar" className="progress-bar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div style={{ width: '95%' }}>
                  <p className="lead mb-1 mt-2">Python</p>
                  <div className="progress-bar-animation progress">
                    <div role="progressbar" className="progress-bar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }}></div>
                  </div>
                </div>
                </div>

                {/* Add more technical skills */}
              </div>
            </div>
          </div>
          <div role="tabpanel" id="skills-tabs-tabpane-soft-skills" aria-labelledby="skills-tabs-tab-soft-skills" className={`fade tab-pane ${activeTab === 'soft-skills' ? 'active show' : ''}`}>
            <div className="pt-3 px-1 row">
              <div className="col-md-6 col-12">
                <div style={{ width: '95%' }}>
                  <p className="lead mb-1 mt-2">Goal-Oriented</p>
                  <div className="progress-bar-animation progress">
                    <div role="progressbar" className="progress-bar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div style={{ width: '95%' }}>
                  <p className="lead mb-1 mt-2">Innovative</p>
                  <div className="progress-bar-animation progress">
                    <div role="progressbar" className="progress-bar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div style={{ width: '95%' }}>
                  <p className="lead mb-1 mt-2">Strong Decision maker</p>
                  <div className="progress-bar-animation progress">
                    <div role="progressbar" className="progress-bar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div style={{ width: '95%' }}>
                  <p className="lead mb-1 mt-2">Complex Problem Solver</p>
                  <div className="progress-bar-animation progress">
                    <div role="progressbar" className="progress-bar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div style={{ width: '95%' }}>
                  <p className="lead mb-1 mt-2">Adaptive</p>
                  <div className="progress-bar-animation progress">
                    <div role="progressbar" className="progress-bar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '96%' }}></div>
                  </div>
                </div>
                <div style={{ width: '95%' }}>
                  <p className="lead mb-1 mt-2">Creative Design</p>
                  <div className="progress-bar-animation progress">
                    <div role="progressbar" className="progress-bar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div style={{ width: '95%' }}>
                  <p className="lead mb-1 mt-2">Punctual</p>
                  <div className="progress-bar-animation progress">
                    <div role="progressbar" className="progress-bar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '98%' }}></div>
                  </div>
                  
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Lang;
