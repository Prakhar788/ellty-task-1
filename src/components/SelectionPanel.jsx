import React from 'react'
import { useState } from 'react'
import { CheckboxItem } from './CheckboxItem';
import Button from './Button';
import '../styles/SelectionPanel.css'

const SelectionPanel = () => {
    const [selectedPages, setSelectedPages] = useState([]);

    const pageOptions = [
      { id: 'page-1', label: 'Page 1' },
      { id: 'page-2', label: 'Page 2' },
      { id: 'page-3', label: 'Page 3' },
      { id: 'page-4', label: 'Page 4' },
      { id: 'page-5', label: 'Page 5' },
      { id: 'page-6', label: 'Page 6' },
      { id: 'page-7', label: 'Page 7' },
      { id: 'page-8', label: 'Page 8' }
      
    ];
    
    const handlePageSelect = (page) => {
        setSelectedPages(prevSelected => 
          prevSelected.includes(page)
            ? prevSelected.filter(p => p !== page)
            : [...prevSelected, page]
        );
      };
    
      const handleAllPagesSelect = () => {
        setSelectedPages(prevSelected => 
          prevSelected.length === pageOptions.length
            ? []
            : pageOptions.map(option => option.label)
        );
      };

  return (
    <div className='SelectionPanel'>
    <div className='form'>

        <CheckboxItem
          id="all-pages"
          label="All pages"
          checked={selectedPages.length === pageOptions.length}
          onChange={handleAllPagesSelect}
        />
        
        <hr/>
        <div className='options' style={{background:"blue"}}>
        {pageOptions.map((option) => (
          <CheckboxItem
            key={option.id}
            id={option.id}
            label={option.label}
            checked={selectedPages.includes(option.label)}
            onChange={() => handlePageSelect(option.label)}
          />
        ))}
        </div>
        <hr/>
        <Button label="Click"/>
    </div>
    </div>
  )
}

export default SelectionPanel