import Button from "../Atoms/button";

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
    <div className={`tabs ${className} flex gap-2 p`}>
      {items.map((tab) => (
        <Button
          key={tab}
          title={tab}
          className={` font-medium rounded-2xl text-xs px-2 py-1`}
          onClick={() => onChange(tab)}
          isActive={tab === activeTab}
        />
      ))}
    </div>
  );
};

export default Tabs;
