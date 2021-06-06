import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [hideCompleted, setHideCompleted] = useState(false);
    const [sortBy, setSortBy] = useState('difficulty');

    const toggleCompleted = () => {
        setHideCompleted(!hideCompleted);
    }

    const handleItemsPerPage = (e) => {
        setItemsPerPage(parseInt(e.target.value));
    }

    const state = {
        itemsPerPage,
        hideCompleted,
        sortBy,
        toggleCompleted,
        handleItemsPerPage
    }

    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export default SettingsProvider;