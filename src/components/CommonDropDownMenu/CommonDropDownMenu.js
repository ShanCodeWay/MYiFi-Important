import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const CommonDropDownMenu = ({ onSelect }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const items = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const handleSelect = (item) => {
    setSelectedItem(item.value);
    onSelect(item.value); 
  };

  return (
    <DropDownPicker
      items={items}
      defaultValue={selectedItem}
      containerStyle={{ height: 40 }}
      onChangeItem={handleSelect}
    />
  );
};

export default CommonDropDownMenu;
