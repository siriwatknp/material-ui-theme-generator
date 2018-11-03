/* eslint-disable react/no-array-index-key */
import React from 'react';
import { cx } from 'react-emotion';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// ICONS
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import muiTheme from 'theme/muiTheme';

const ButtonSection = () => {
  const createRow = ({
    variant = 'text',
    color = 'default',
    disabled = false,
    classNames = [],
    icon,
  }) => ({
    variant,
    color,
    className: classNames.length === 0 ? '-' : classNames.join(', '),
    button: (
      <Button
        disabled={disabled}
        variant={variant}
        color={color}
        className={cx(classNames)}
      >
        {icon}
        Button
      </Button>
    ),
  });
  const rows = [
    createRow({}),
    createRow({ color: 'primary' }),
    createRow({ variant: 'contained', color: 'default' }),
    createRow({ variant: 'contained', color: 'primary' }),
    createRow({
      variant: 'contained',
      color: 'primary',
      icon: <AddIcon className={'left'} />,
    }),
    createRow({ variant: 'outlined', color: 'default' }),
    createRow({ variant: 'outlined', color: 'primary' }),
    {
      ...createRow({ variant: 'outlined', classNames: ['inverted'] }),
      style: { background: muiTheme.palette.primary.main },
    },
    createRow({ variant: 'contained', classNames: ['danger'] }),
    createRow({
      variant: 'contained',
      classNames: ['danger'],
      icon: <DeleteIcon className={'icon--left'} />,
    }),
  ];
  const renderRows = () =>
    rows.map(({ variant, color, className, button, style }, i) => (
      <TableRow key={i}>
        <TableCell>{variant}</TableCell>
        <TableCell>{color}</TableCell>
        <TableCell>{className}</TableCell>
        <TableCell style={style}>{button}</TableCell>
      </TableRow>
    ));
  return (
    <div>
      <Typography color={'primary'} variant={'subtitle1'} gutterBottom>
        Button
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Variants</TableCell>
            <TableCell>Colors</TableCell>
            <TableCell>ClassNames</TableCell>
            <TableCell>Examples</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderRows()}</TableBody>
      </Table>
    </div>
  );
};

ButtonSection.propTypes = {};
ButtonSection.defaultProps = {};

export default ButtonSection;
