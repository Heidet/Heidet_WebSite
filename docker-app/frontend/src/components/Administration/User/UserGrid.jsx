import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { useTheme, useFetch } from '../../../utils/hooks'
import { FcApproval } from 'react-icons/fc';
import { BiAddToQueue } from 'react-icons/bi';
import Error404 from "../../../views/Errors/Error404";
import axios from "axios";
import { Loader } from '../../../styles/Atoms'


import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

const HomeWrapper = styled.div`
  // display: flex;
  width: '100%';
  height: 400;
  justify-content: center;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const GridStyled = styled(DataGrid)`
  border: none!important;
  color: ${({ theme }) => theme.text}!important;
`

const ButtonAddUser = styled.button`
  display: flex;
`



function CustomToolbar() {
  return (
    <GridToolbarContainer>

      <ButtonAddUser onClick={() => console.log('toto')} style={{ color: '#1f97f4' }} ><BiAddToQueue color="#1f97f4" />Ajout Utilisateur</ButtonAddUser>
      <GridToolbarColumnsButton  />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}


const columns = [
  { field: 'id', headerName: 'ID', width: 200,},
  { field: "is_superuser", 
    headerName: "Admin", 
    width: 200,
    renderCell: (params) => (
      <FcApproval />
    )
  },
  { field: "username", headerName: "Username", width: 200,},
  { field: "first_name", headerName: "First_name", width: 200,},
  { field: "last_name", headerName: "Last_name", width: 200,},
  { field: "is_active", 
    headerName: "Online", 
    width: 200,
    renderCell: (params) => (
      <FcApproval />
    )
  },
  { field: "date_joined", headerName: "Join Date", width: 200,},
  { field: "email", headerName: "Email", width: 200,},
];



export default function UserGrid() {
  const { theme } = useTheme()
  const [users, setUsers] = useState(null);
  var url = process.env.REACT_APP_BACKEND_API+'Users/'

  useEffect(() => {    
      refreshUsers();
  }, []);

  const { data, isLoading, error } = useFetch(
    url
  )

  const addUser = () => {
    axios.post(url)
      .then((res) => {
        setUsers(res.data);
        if (!users) return <Error404 />
      })
      .catch(console.error);
  };


  const refreshUsers = () => {
    axios.get(url)
      .then((res) => {
        setUsers(res.data);
        if (!users) return <Error404 />
      })
      .catch(console.error);
  };


  if (error) {
    return <Error404 />
  }else {
    return isLoading ? (
      <LoaderWrapper>
        <Loader data-testid="loader" />
      </LoaderWrapper>
    ) : (
    <HomeWrapper>
        <div theme={theme} style={{ height: '50em', width: '100%' }}>
          <GridStyled
            rowHeight={80}
            rows={users}
            columns={columns}
            pageSize={15}
            density="compact"
            isRowSelectable={(params) =>  console.log(params)}
            disableMultipleSelection= {true}
            onCellClick={(params)  => console.log(params)}
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </div>
    </HomeWrapper>
    );
  }
}