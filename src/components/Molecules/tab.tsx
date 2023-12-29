import Button from "../Atoms/button";
import TabButton from "../Atoms/tab-button";

type TabsProps = {
  items: string[];
  activeTab: string;
  className?: string;
  onChange: (item: string) => void;
};

const Tabs: React.FC<TabsProps> = ({
  items,
  activeTab,
  className,
  onChange,
}) => {
  return (
    <div
      className={`tabs ${className} flex gap-2 rounded-4px shadow-sm p-1
    `}
    >
      {items.map((tab) => (
        // <Button
        //   key={tab}
        //   title={tab}
        //   className={` font-medium rounded-full text-xs px-2 py-1
        //   ${tab === activeTab ? "shadow-md " : "shadow-none"}
        //   `}
        //   onClick={() => onChange(tab)}
        //   isActive={tab === activeTab}
        // />
        <TabButton
          isActive={activeTab == tab}
          key={tab}
          title={tab}
          onClick={() => onChange(tab)}
        />
      ))}
    </div>
  );
};

export default Tabs;
