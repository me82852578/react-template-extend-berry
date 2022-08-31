// import React from 'react'
// import {
//   Chip, Stack,
// } from '@mui/material'
import { DateTime } from 'luxon'

const columns = [
  {
    field: 'id', headerName: 'ID', width: 55, filterable: false,
  },
  {
    field: 'keywords',
    headerName: 'Keywords',
    width: 150,
    filterable: false,
  },
  {
    field: 'theme',
    headerName: 'Theme',
    width: 80,
  },
  {
    field: 'owner',
    headerName: 'Owner',
    flex: 1,
  },
  {
    field: 'update_at',
    headerName: '更新時間',
    type: 'dateTime',
    width: 160,
    filterable: false,
    valueGetter: (params) => DateTime.fromISO(params.value).toFormat('yyyy-MM-dd HH:mm:ss'),
  },
  {
    field: 'create_at',
    headerName: '創建時間',
    description: 'This column has a value getter and is not sortable.',
    width: 160,
    filterable: false,
  },
  {
    field: 'group_id',
    headerName: '群組',
    description: 'This column has a value getter and is not sortable.',
    width: 160,
  },
  {
    field: 'is_shared',
    headerName: '公開',
    type: 'boolean',
    flex: 1,
    minWidth: 160,
  },
]

export default columns
