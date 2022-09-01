import {
  faHouse,
  faCartShopping,
  faPersonShelter,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { NavBarItem } from './navBarItem';

export const navData: NavBarItem[] = [
  {
    routerLink: 'DashBoard',
    icon: faHouse,
    label: 'DashBoard',
    expanded: false,
    items: [],
  },
  {
    routerLink: 'Products',
    icon: faCartShopping,
    label: 'Products',
    expanded: false,
    items: [],
  },
  {
    routerLink: 'Users',
    icon: faPersonShelter,
    label: 'Users',
    expanded: false,
    items: [],
  },
  {
    routerLink: 'Levels',
    icon: faAngleDown,
    label: 'Levels',
    expanded: false,
    items: [
      {
        routerLink: 'Levels/Level1',
        icon: faAngleDown,
        label: 'Level 1.1',
        expanded: false,
        items: [
          {
            routerLink: 'Levels/Level1/Level2.1',
            icon: faAngleDown,
            label: 'Level 2.1',
            expanded: false,
            items: [
              {
                routerLink: 'Levels',
                icon: faAngleDown,
                label: 'Level 3.1',
                expanded: false,
                items: [
                  {
                    routerLink: 'Levels/Level1',
                    icon: faAngleDown,
                    label: 'Level4.1',
                    expanded: false,
                    items: [
                      {
                        routerLink: 'Levels/Level1/Level2',
                        icon: faAngleDown,
                        label: 'Level 5.1',
                        expanded: false,

                        items: [],
                      },
                      {
                        routerLink: 'Levels/Level1/Level2',
                        icon: faAngleDown,
                        label: 'Level 5.2',
                        expanded: false,

                        items: [],
                      },
                    ],
                  },
                  {
                    routerLink: 'Levels/Level2',
                    icon: faAngleDown,
                    label: 'Level 4.2',
                    expanded: false,

                    items: [],
                  },
                ],
              },
            ],
          },
          {
            routerLink: 'Levels/Level1/Level2.2',
            icon: faAngleDown,
            label: 'Level 2.2',
            expanded: false,

            items: [
              {
                routerLink: 'Levels',
                icon: faAngleDown,
                label: 'Level 3.1',
                expanded: false,
                items: [
                  {
                    routerLink: 'Levels/Level1',
                    icon: faAngleDown,
                    label: 'Level 4.1',
                    expanded: false,
                    items: [
                      {
                        routerLink: 'Levels/Level1/Level2',
                        icon: faAngleDown,
                        label: 'Level 5.1',
                        expanded: false,

                        items: [],
                      },
                      {
                        routerLink: 'Levels/Level1/Level2',
                        icon: faAngleDown,
                        label: 'Level 5.2',
                        expanded: false,

                        items: [],
                      },
                    ],
                  },
                  {
                    routerLink: 'Levels/Level2',
                    icon: faAngleDown,
                    label: 'Level 4.2',
                    expanded: false,

                    items: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        routerLink: 'Levels/Level2',
        icon: faAngleDown,
        label: 'Level 1.2',
        expanded: false,

        items: [],
      },
    ],
  },
];
