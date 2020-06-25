import React from 'react'
import CustomTable from '~/components/custom-table/customTable'
import { withKnobs, boolean, array, object } from '@storybook/addon-knobs'

export default {
  title: 'CustomTable',
  component: CustomTable,
  decorators: [withKnobs]
}

const defaultProps = {
  headers: ['header 1', 'header 2'],
  rows: [['data 1', 'data 2']]
}

export const Table = () =>
  <CustomTable
    headers={array('headers', defaultProps.headers)}
    loading={boolean('loading', false)}
  >
    {object('children', defaultProps.rows).map((data, idx) => (
      <tr key={`custom-table-row-${idx}`}>
        {data.map((element, id) =>
          <td key={`custom-table-el-${id}`}>{element}</td>
        )}
      </tr>
    ))}
  </CustomTable>
