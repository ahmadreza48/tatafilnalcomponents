/**
 *
 * DataTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  DataGrid as EasyDataGrid,
  GridColumn as EasyGridColumn,
} from 'rc-easyui';
import 'rc-easyui/dist/themes/default/easyui.css';
import 'rc-easyui/dist/themes/icon.css';
import 'rc-easyui/dist/themes/react.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function DataTable({ dataGrid, gridColumn }) {
  return (
    <EasyDataGrid {...dataGrid}>
      {gridColumn && gridColumn.map(column => <EasyGridColumn {...column} />)}
    </EasyDataGrid>
  );
}

DataTable.propTypes = {
  dataGrid: PropTypes.array.isRequired,
  gridColumn: PropTypes.array.isRequired,
};

export default DataTable;
