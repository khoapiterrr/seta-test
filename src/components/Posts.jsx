import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'name',
  },
  {
    title: 'Body',
    dataIndex: 'body',
    key: 'body',
  },

]
const Posts = ({ data }) => {
  return (
    <>
      <Table dataSource={data} columns={columns} />
    </>
  )
}

Posts.propTypes = {
  data: PropTypes.array
}

Posts.defaultProps = {
  data: []
}
export default Posts
