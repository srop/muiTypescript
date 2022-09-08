import React from 'react';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <SubjectOutlined color="secondary" />,
    iconClosed: <KeyboardArrowDownIcon />,
    iconOpened: <KeyboardArrowUpIcon />,

    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <SubjectOutlined color="secondary" />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <SubjectOutlined color="secondary" />,
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <SubjectOutlined color="secondary" />,
    iconClosed: <KeyboardArrowDownIcon />,
    iconOpened: <KeyboardArrowUpIcon />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <SubjectOutlined color="secondary" />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <SubjectOutlined color="secondary" />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <SubjectOutlined color="secondary" />,
      }
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <SubjectOutlined color="secondary" />,
  },
  {
    title: 'Team',
    path: '/team',
    icon: <SubjectOutlined color="secondary" />,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <SubjectOutlined color="secondary" />,

    iconClosed: <KeyboardArrowDownIcon />,
    iconOpened:<KeyboardArrowUpIcon />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <SubjectOutlined color="secondary" />,
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <SubjectOutlined color="secondary" />,
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <SubjectOutlined color="secondary" />,
  }
];