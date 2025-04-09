// src/components/TeamTable.jsx
import { useState, useEffect } from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';
import { getTeam, deleteMember } from '../services/api';

export default function TeamTable() {
  const [teamData, setTeamData] = useState([]);

  const fetchData = async () => {
    const { data } = await getTeam();
    setTeamData(data);
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id) => {
    await deleteMember(id);
    fetchData(); // Recarga los datos
  };

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'actions',
      type: 'actions',
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Edit />}
          label="Edit"
          onClick={() => handleEdit(params.id)}
        />,
        <GridActionsCellItem
          icon={<Delete />}
          label="Delete"
          onClick={() => handleDelete(params.id)}
        />,
      ],
    },
  ];

  return <DataGrid rows={teamData} columns={columns} />;
}