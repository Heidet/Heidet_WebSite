import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import '../style.css';
import React,{ useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import moment from "moment";
import Todos from './Todos'

const Countrydata = [
  { name: 'USA', rise: true, value: 21942.83, id: 1 },
  { name: 'Ireland', rise: false, value: 19710.0, id: 2 },
  { name: 'Ukraine', rise: false, value: 12320.3, id: 3 },
  { name: 'Sweden', rise: true, value: 9725.0, id: 4 },
];

const segmentationData = [
  { c1: 'Not Specified', c2: '800', c3: '#363636', color: '#535353' },
  { c1: 'Male', c2: '441', c3: '#818bb1', color: '#595f77' },
  { c1: 'Female', c2: '233', c3: '#2c365d', color: '#232942' },
  { c1: 'Other', c2: '126', c3: '#334ed8', color: '#2c3051' },
];

export default function Content({ theme, toggleTheme, onSidebarHide, Icon, IconButton, Image }) {
  const { user, logoutUser, authTokens } = useContext(AuthContext);
  const dateToday = moment().format("DD-MM-YYYY")

  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
        .
      </div>
      <div className="h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
        <div className="w-full sm:flex p-2 items-end">
          <div className="sm:flex-grow flex justify-between">
            <div className="">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-white">Bonjour {user.username}</div>
            
              </div>
              <div className="flex items-center">
                <Icon
                  path="res-react-dash-date-indicator"
                  className="w-3 h-3"
                />
                <div className="ml-2">{dateToday}</div>
              </div>
            </div>
            <IconButton
              icon="res-react-dash-sidebar-open"
              className="block sm:hidden"
              onClick={onSidebarHide}
            />
          </div>
          <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
            <Icon
              path="res-react-dash-search"
              className="w-5 h-5 search-icon left-3 absolute"
            />
            <form action="#" method="POST">
              <input
                type="text"
                name="company_website"
                id="company_website"
                className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card"
                placeholder="search"
              />
            </form>
          </div>
        </div>
        {/* {employeeData.map(
          ({
            id,
            name,
            position,
            transactions,
            rise,
            tasksCompleted,
            imgId,
          }) => (
            <NameCard
              key={id}
              id={id}
              name={name}
              position={position}
              transactionAmount={transactions}
              rise={rise}
              tasksCompleted={tasksCompleted}
              imgId={imgId}
            />
          ),
        )} */}

        {/* <div className="w-full p-2 lg:w-2/3">
          <div className="rounded-lg bg-card sm:h-80 h-60">
            <Graph 
            Icon={Icon}/>
          </div>
        </div> */}
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card overflow-hidden h-80">
            <Todos 
              theme={theme} 
              toggleTheme={toggleTheme}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


function AddComponent({Icon}) {
  return (
    <div>
      <div className="w-full h-20 add-component-head" />
      <div
        className="flex flex-col items-center"
        style={{
          transform: 'translate(0, -40px)',
        }}
      >
        <div
          className=""
          style={{
            background: '#414455',
            width: '80px',
            height: '80px',
            borderRadius: '999px',
          }}
        >
          <img
            src="https://assets.codepen.io/3685267/res-react-dash-rocket.svg"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="text-white font-bold mt-3">
          No Components Created Yet
        </div>
        <div className="mt-2">Simply create your first component</div>
        <div className="mt-1">Just click on the button</div>
        <div
          className="flex items-center p-3 mt-3"
          style={{
            background: '#2f49d1',
            borderRadius: '15px',
            padding: '8px 16px',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <Icon path="res-react-dash-add-component" className="w-5 h-5" />
          <div className="ml-2">Add Component</div>
          <div
            className="ml-2"
            style={{
              background: '#4964ed',
              borderRadius: '15px',
              padding: '4px 8px 4px 8px',
            }}
          >
            129
          </div>
        </div>
      </div>
    </div>
  );
}


