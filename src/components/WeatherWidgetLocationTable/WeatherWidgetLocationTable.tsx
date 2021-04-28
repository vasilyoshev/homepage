import React from 'react';
import { WeatherWidgetLocationTableProps } from 'interfaces';
import { Table, TableContainer, TableBody, TableRow, TableCell } from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';

export const WeatherWidgetLocationTable: React.FC<WeatherWidgetLocationTableProps> = ({ locations, onSelect, current }) => {
  return (
    <section>
      <TableContainer>
        <Table size="small" aria-label="a dense table">
          <TableBody>
            {locations.map((location) =>
              <TableRow
                key={location.id}
                onClick={() => onSelect(location)}>
                <TableCell>{location.name}</TableCell>
                {current?.id === location.id ? <Alert severity="info">Current City</Alert> : ''}
              </TableRow>,
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};
