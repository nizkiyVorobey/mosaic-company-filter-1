
import React, { useState, useEffect } from 'react';
import './FieldsSortList.css';

export const FieldsSortList = ({ setUserSorted, userSorted, setInputError, setEmptyList, initialUser }) => {
  const [dateValue, setDateValue] = useState('');
  const [monthValue, setMonthValue] = useState('');

  useEffect(() => {
    const newSortedList = filterUser();

    if (checkCondition(newSortedList)) {
      setUserSorted(newSortedList);
    } else {
      setUserSorted([]);
    }
  }, [dateValue, monthValue]);

  const checkCondition = (newSortedList) => {
    const pattern = /[\D]+/g;
    if(pattern.test(dateValue) || pattern.test(monthValue)) {
      setInputError(true);

      return [];
    }

    if ((dateValue.length > 2 || monthValue.length > 2)) {
      setInputError(true);
      setEmptyList(false);

      return [];
    }

    if (dateValue.length === 0 && monthValue.length === 0) {
      setEmptyList(false);
      setInputError(false);

      return [...initialUser];
    }

    if (newSortedList.length === 0) {
      setEmptyList(true);
      setInputError(false);

      return [];
    }

    setEmptyList(false);
    setInputError(false);

    return newSortedList;
  };

  const filterUser = () => (
    [...initialUser]
      .filter((user) => {
        const date = new Date(user.birthday_contact).getDate();

        return date.toString().includes(dateValue);
      })
      .filter((user) => {
        const date = new Date(user.birthday_contact).getMonth() + 1;

        return date.toString().includes(monthValue);
      })
  );

  const changeByDate = (event) => {
    const { value } = event.target;

    setDateValue(value);
  };

  const changeByMonth = (event) => {
    const { value } = event.target;

    setMonthValue(value);
  };

  return (
    <form action="" className="filter-filed-wrapper">
      <input
        type="text"
        onChange={changeByDate}
        placeholder="Filter day"
        value={dateValue}
        className="filter-filed"
      />
      <input
        type="text"
        onChange={changeByMonth}
        placeholder="Filter month"
        value={monthValue}
        className="filter-filed"
      />
    </form>
  );
};
