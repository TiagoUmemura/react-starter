import React from 'react'
import * as Styled from './customTable.styled-wrapper'
import { CircularProgress } from '@material-ui/core'
import PropTypes from 'prop-types'

export default function CustomTable ({ headers, children, loading, style, responsive }) {
  return (
    <Styled.Table
      hover
      responsive={responsive}
      style={{
        ...style
      }}
    >
      <Styled.TableHead>
        <tr>
          {(headers || [])
            .map((headerTitle, idx) =>
              <th key={`custom-header-${idx}`}>{headerTitle}</th>)}
        </tr>
      </Styled.TableHead>
      <Styled.TableBody>
        {!loading
          ? children
          : (
            <Styled.LoaderRow>
              <td colSpan={!headers.length ? '5' : headers.length}>
                <CircularProgress size='26px'/>
              </td>
            </Styled.LoaderRow>
          )}
      </Styled.TableBody>
    </Styled.Table>
  )
}

CustomTable.propTypes = {
  responsive: PropTypes.oneOf([PropTypes.bool, PropTypes.string]),
  headers: PropTypes.array,
  children: PropTypes.any,
  loading: PropTypes.bool,
  style: PropTypes.object
}

CustomTable.defaultProps = {
  headers: [],
  loading: false
}
