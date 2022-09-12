import React from 'react'

import List from '@mui/material/List'

import IconDashboard from '@mui/icons-material/Dashboard'
import IconShoppingCart from '@mui/icons-material/ShoppingCart'
import IconPeople from '@mui/icons-material/People'
import IconBarChart from '@mui/icons-material/BarChart'
import IconLibraryBooks from '@mui/icons-material/LibraryBooks'

import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/Dashboard',
    Icon: IconDashboard,
  },
  {
    name: 'Orders',
    link: '/orders',
    Icon: IconShoppingCart,
  },
  {
    name: 'Employee',
    link: '/Employee',
    Icon: IconPeople,
  },
  {
    name: 'Reports',
    link: '/reports',
    Icon: IconBarChart,
  },
  {
    name: 'Nested Pages',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Level 2',
      },
      {
        name: 'Level 2',
        items: [
          {
            name: 'Level 3',
          },
          {
            name: 'Level 3',
          },
        ],
      },
    ],
  },
]

const AppMenu: React.FC = () => {
 // const classes = makeStyles();

  return (
    <List component="nav"  disablePadding >
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}


export default AppMenu
