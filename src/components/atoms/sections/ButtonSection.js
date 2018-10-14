import React from 'react';
import Button from '@material-ui/core/Button';
import Block from 'components/Block/index';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// ICONS
import AddIcon from '@material-ui/icons/Add';
import Edit from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const ButtonSection = () => (
  <div>
    <Typography color={'primary'} variant={'subtitle1'} gutterBottom>
      Button
    </Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Variants</TableCell>
          <TableCell>Examples</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Simple</TableCell>
          <TableCell>
            <Block.Flex justifyContent={'space-between'}>
              <Button>Default</Button>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button disabled>Disabled</Button>
              <Button href="#text-buttons">Link</Button>
            </Block.Flex>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Outlined</TableCell>
          <TableCell>
            <Block.Flex justifyContent={'space-between'}>
              <Button variant="outlined">Default</Button>
              <Button variant="outlined" color="primary">
                Primary
              </Button>
              <Button variant="outlined" color="secondary">
                Secondary
              </Button>
              <Button variant="outlined" disabled>
                Disabled
              </Button>
              <Button variant="outlined" href="#outlined-buttons">
                Link
              </Button>
            </Block.Flex>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Contained</TableCell>
          <TableCell>
            <Block.Flex justifyContent={'space-between'}>
              <Button variant="contained">Default</Button>
              <Button variant="contained" color="primary">
                Primary
              </Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
              <Button variant="contained" color="secondary" disabled>
                Disabled
              </Button>
              <Button variant="contained" href="#contained-buttons">
                Link
              </Button>
            </Block.Flex>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>FAB (Floating Action Button)</TableCell>
          <TableCell>
            <Block.Flex justifyContent={'space-between'}>
              <Button variant="fab" color="primary" aria-label="Add">
                <AddIcon />
              </Button>
              <Button variant="fab" color="secondary" aria-label="Edit">
                <Edit />
              </Button>
              <Button variant="extendedFab" aria-label="Delete">
                <NavigationIcon />
                Extended
              </Button>
              <Button variant="fab" disabled aria-label="Delete">
                <DeleteIcon />
              </Button>
            </Block.Flex>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

ButtonSection.propTypes = {};
ButtonSection.defaultProps = {};

export default ButtonSection;
