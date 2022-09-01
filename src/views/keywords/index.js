import React from 'react'
import { useQuery } from '@tanstack/react-query'
import MainCard from 'ui-component/cards/MainCard'
import { DataGrid } from '@mui/x-data-grid'
import axiosInstance, { getAllKeywordsApiConf } from 'api'
import { Box } from '@mui/material'
import columns from './config'

const getAllKeywords = async () => {
  const res = await axiosInstance({ ...getAllKeywordsApiConf })
  return res.data
}

function KeywordsPage() {
  const {
    data, isLoading, error, isSuccess,
  } = useQuery(
    [getAllKeywordsApiConf.url],
    getAllKeywords,
  )

  return (
    <MainCard title="Sample Card">
      <Box sx={{ height: '800px', width: '100%' }}>
        <DataGrid
          loading={isLoading}
          error={error}
          rows={isSuccess ? data.response : []}
          columns={columns}
          disableSelectionOnClick
          filterMode="server"
        />
      </Box>
    </MainCard>
  )
}

export default KeywordsPage
