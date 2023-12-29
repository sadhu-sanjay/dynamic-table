import TabButton from "../Atoms/tab-button";

export type TabItem = {
  label: string;
  value: string;
};

type TabsProps = {
  items: TabItem[];
  activeTab: TabItem;
  className?: string;
  onChange: (item: TabItem) => void;
};

const Tabs: React.FC<TabsProps> = ({
  items,
  activeTab,
  className,
  onChange,
}) => {
  return (
    <div
      className={`tabs  flex items-center gap-1 rounded-full  shadow-sm px-2 py-2 dark:bg-gray-700 ${className}
    `}
    >
      {items.map((tab) => (
        <TabButton
          isActive={activeTab.value === tab.value}
          key={tab.value}
          title={tab.label}
          onClick={() => onChange(tab)}
        />
      ))}
    </div>
  );
};

export default Tabs;
