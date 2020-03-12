// import React, { useState, useEffect } from 'react';
//
// export const ButtonSortList = ({ setUserSorted, userList }) => {
//
//     useEffect(() =>{
//         setUserSorted( sortByDay());
//     }, [])
//
//     const sortByDay = () => {
//         return [...userList]
//             .sort((a,b) => +a.birthday_contact.split('-')[2] - +b.birthday_contact.split('-')[2]);
//     };
//
//     const sortByMonth = () => {
//         return [...userList]
//             .sort((a,b) => +a.birthday_contact.split('-')[1] - +b.birthday_contact.split('-')[1]);
//     };
//
//     const handleChange = (event) => {
//         const  { value } = event.target;
//         let sortedUserList = null;
//
//         switch (value) {
//             case 'Sort_By_Date':
//                 sortedUserList = sortByDay();
//                 break;
//             case "Sort_By_Month":
//                 sortedUserList = sortByMonth();
//                 break;
//             default:
//                 return userList;
//         }
//         setUserSorted(sortedUserList);
//     };
//
//
//
//     return (
//         <select onChange={handleChange} >
//             <option value="Sort_By_Date" >Sort By Date</option>
//             <option value="Sort_By_Month">Sort By Month</option>
//         </select>
//     )
// };

import React, { useState, useEffect } from 'react';
import './ButtonSortList.css';

export const ButtonSortList = ({ setUserSorted, userSorted, setInputError, setEmptyList, initialUser }) => {
    const [dateValue, setDateValue] = useState('');
    const [monthValue, setMonthValue] = useState('');

    useEffect(() => {
        const newSortedList = filterUser();
        if(checkCondition(newSortedList)) {
            setUserSorted(newSortedList)
        } else {
            setUserSorted([])
        }
    }, [dateValue, monthValue]);

    const checkCondition = (newSortedList) => {
        if((dateValue.length > 2 || monthValue.length > 2) ) {
            setInputError(true);
            setEmptyList(false);
            return [];
        }

        if(dateValue.length === 0 && monthValue.length === 0 ) {
            setEmptyList(false);
            setInputError(false);
            return [...initialUser];
        }

        if(newSortedList.length === 0) {
            setEmptyList(true);
            setInputError(false);
            return [];
        }
        setEmptyList(false);
        setInputError(false);
        return newSortedList;
    };

    const filterUser = () => {
        return [...initialUser]
            .filter(user => {
                const date = new Date(user.birthday_contact).getDate();
                return date.toString().includes(dateValue);
            })
            .filter(user => {
                const date = new Date(user.birthday_contact).getMonth() + 1;
                return date.toString().includes(monthValue);
            })
    };

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
    )
};
