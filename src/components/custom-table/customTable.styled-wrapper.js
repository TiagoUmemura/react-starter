import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import BootTable from "react-bootstrap/Table";

export const TableHead = styled.thead``;

export const CellHeader = styled.th``;
export const LoaderRow = styled.tr`
  text-align: center;
`;
export const TableBody = styled.tbody`
  ${LoaderRow} > td > div {
    margin-bottom: -6px;
  }

  ${LoaderRow}:hover {
    background-color: unset;
  }

  tr > td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  tr > td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  tr > td {
    border-top: none;
    background-color: #fff;
  }

  tr {
    border-collapse: separate;
    border-spacing: 0 10px;
    line-height: 2.5rem;
  }
`;

export const Table = styled(BootTable)`
  border-collapse: separate;
  border-spacing: 0 15px;

  ${TableHead} > tr > th {
    border-bottom: none;
    border-top: none;
  }
`;
