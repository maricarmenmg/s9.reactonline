import { useState } from 'react';
import TabList from './TabList';

function Tabs({ tabs, contents }) {
  
  const [activeTab, setActiveTab] = useState('movies');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-32 md:pb-20">
          <div className="relative">
            <div className="flex flex-wrap justify-center md:justify-start -m-1.5">
              <TabList tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
            </div>
            {contents.map((content, index) => (
              <div key={index} style={{ display: activeTab === tabs[index] ? 'block' : 'none' }}>
                {content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default Tabs;
