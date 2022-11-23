import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Button, UncontrolledDropdown, Input, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import moment from 'moment-timezone';
import { PickersDay } from "@mui/x-date-pickers/PickersDay"
import API from "../Api";
import AuthContext from "../context/AuthContext";

export default function Navbar() {
  const [value, setValue] = useState(dayjs('2022-01-07'));
  const [navbarState, setNavbarState] = useState(false);
  const { user, logoutUser, authTokens } = useContext(AuthContext);
  const html = document.querySelector("html");
  const [isOpen, setIsOpen] = useState(false);
  const [dataSets, setDataSets] = useState([])
  const [varDataSet, setVarDataSets] = useState([])
  const [dataSetSelect, setDataSetSelect] = useState([])
  const [hourAvailable, setHourAvailable] = useState(null)
  const [dateAvailable, setDateAvailable] = useState([])
  const [returnDateSelected, setReturnDateAvailable] = useState([])
  // const [returnHourS, setReturnHourAvailable] = useState([])


  const refreshDataDate = () => {
    API.get(`datasets/ARIAVIEW_USER_TEST_RESULT_LcS`, { 
      params: {
        'apikey': authTokens.access,
        'info':'dates',
        // 'dataset_name': 'ARIAVIEW_USER_TEST_RESULT_LcS'
      },
      headers: {
        // 'Authorization': 'Bearer ' + authTokens.access
      }
    })
    .then((res) => {
      console.log('result =>',res)
      const dateFormat = res.data.data.map((date) => moment(date, 'YYYY-MM-DD').toDate());
      // console.log(dateFormat)
      // const result = words.filter(word => word.length > 6);
      setDateAvailable(dateFormat);
    })
    .catch(console.error);
  };

  const refreshDataHour = (dateSelected) => {
    API.get(`datasets/ARIAVIEW_USER_TEST_RESULT_LcS`, { 
      params: {
        'apikey': authTokens.access,
        'info':'timeframes',
        'date':dateSelected,
        's_atomic':'1'
        // 'dataset_name': 'ARIAVIEW_USER_TEST_RESULT_LcS'
      },
      headers: {
        // 'Authorization': 'Bearer ' + authTokens.access
      }
    })
    .then((res) => {
      console.log('result =>',res)
      const hourSelected = res.data.data[0].split('T');
      console.log('dateSelected[0] =>',hourSelected[1])
      // setHourAvailable(hourSelected[1]);

    })
    .catch(console.error);
  };

  const customDayRenderer = (date, selectedDates, pickersDayProps) => {
    // const stringifiedDate = date.toISOString().slice(0, 10)
    // console.log('date =>',date.toDate())
    // console.log('dateAvailable =>',dateAvailable)

    if (dateAvailable.includes(date.toDate())) {
        return <PickersDay {...pickersDayProps} />
    }else {
        return <PickersDay {...pickersDayProps} disabled />
    }
  }

  const refreshDataSet = () => {
    API.get(`datasets/ARIAVIEW_USER_TEST_RESULT_LcS`, { 
      params: {
        'apikey': authTokens.access
        // 'dataset_name': 'ARIAVIEW_USER_TEST_RESULT_LcS'
      },
      headers: {
        // 'Authorization': 'Bearer ' + authTokens.access
      }
    })
    .then((res) => {
      // console.log('result =>',res.data.data.variables)
      setVarDataSets(res.data.data.variables)
      setDataSets(res.data.data);
    })
    .catch(console.error);
  };
  // refreshDataDate()
  if(varDataSet.length === 0){
    refreshDataSet()
    refreshDataDate()
    // refreshDataHour()
  }


  // console.log('dateAvailable =>',dateAvailable)
  // console.log('returnDateSelected =>',returnDateSelected)
  // console.log('hourAvailable =>',hourAvailable)
  // console.log('value =>',value)

  

  return (
      <Nav>
        <div className="brand1">
          <a href="/">
            <p className="social-name">Aria Search</p>
          </a>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <div className="logout-button">
            {user ? (
              <>
                <Button onClick={logoutUser}color="danger">
                  Déconnecter
                </Button>
                {' '}
              </>
            ) : (
              <>
                {' '}
              </>
            )}
        </div>
        <ul className="links">
            {user ? (
              <>
                <li>
                  <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                    onChange={(event) => setDataSetSelect(event.target.value)}
                  >
                    {varDataSet.map((key) => {
                      return ( 
                        <option key={key.name} >
                          {key.name}
                        </option>
                      );
                    })}       
                  </Input>
                </li>
                <li>    
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    // renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) =>{ test(day, selectedDate, isInCurrentMonth, dayComponent)}}
                      label="Selection Date"
                      value={value}
                      minDate={new Date(dateAvailable[0])}
                      defaultCalendarMonth={new Date(dateAvailable[0])}
                      onChange={newValue => {
                        setValue(newValue)
                        console.log('newValue =>',newValue)
                        const dateSelected = newValue.toISOString().split('T');
                        console.log('dateSelected[0] =>',dateSelected[0])
                        // setReturnDateAvailable(dateSelected[0])
                        // refreshDataHour(dateSelected[0])
                        // setReturnDateAvailable(dateSelected[0]+'T'+hourAvailable)
                        
                      }}
                      renderInput={params => <TextField {...params} />}
                      renderDay={customDayRenderer}
                    />
                  </LocalizationProvider>                  
                </li>
                <li> 
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label="Basic example"
                      value={returnDateSelected}
                      onChange={(newValue) => {
                        console.log(newValue)
                        // setValue(newValue);
                        console.log('newValue =>',newValue)
                        const hourSelected = newValue.toISOString().split('T');
                        console.log('dateSelected[0] =>',hourSelected[1])
                        // setReturnDateAvailable(dateSelected[0])
                        // refreshDataHour(dateSelected[0])
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  </li>
                <li>
                  <Button
                      color="success"
                      size="sm"
                    >
                    Envoyer
                  </Button>
                </li>
                {' '}
                {/* <button onClick={logoutUser}>Logout</button> */}
              </>
            ) : (
              <>
                {/* <Link to="/login">Login</Link> */}
              </>
            )}
          
        </ul>
      </Nav>
  );
}
const GiMenu = styled(GiHamburgerMenu)`
  font-size: 20px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 1vw;
  border-bottom: 2px solid #0f1e7a;
  .logout-button {
    margin-right: 25em;
  }
  a {
    text-decoration: none;
  }
  .brand1 {
    .social-name{
      color: #0f1e7a;
      font-family: Brush Script MT, Brush Script Std, cursive;
      font-size: 2em;
      margin-bottom: 0;
    }
    .social-name-two{
      color: black;
      font-family: Brush Script MT, Brush Script Std, cursive;
      font-size: 1.5em;
    }
    img {
      margin-top: 1rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      align-self: center;
      .nav-link {
        padding: 0;
      }
      .dropdown-menu{
        width: 15em;
      }
      a {
        color: #0f1e7a;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #f9c74f;
        }
      }
   
      .active {
        color: #f9c74f;
      }
    }
  }
`;
