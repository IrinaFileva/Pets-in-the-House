'use client';
import { Burger, Container, Menu, NavLink, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { KEY_PAGES } from 'shared/constants';
import { Paths } from 'shared/types';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.scss';

export const NavBar = () => {
  const path = usePathname();
  const activePath = `/${path.split('/')[1]}` as keyof typeof Paths;
  const paths = Paths[activePath];
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(paths);

  useEffect(() => {
    setActive(paths);
  }, [path]);

  return (
    <>
      <Container className={styles.navBar} size="xl" visibleFrom="md">
        <Tabs
          defaultValue="Home"
          variant="outline"
          visibleFrom="sm"
          classNames={{
            root: styles.tabs,
            list: styles.tabsList,
            tab: styles.tab,
          }}
        >
          {KEY_PAGES.map((tab, index) => {
            return (
              <NavLink
                classNames={{
                  root: styles.links,
                  label: styles.linksLabel,
                }}
                href={Paths[index]}
                key={tab}
                active={index === active}
                label={<Tabs.Tab value={tab}>{tab}</Tabs.Tab>}
                onClick={() => setActive(index)}
                color="lime"
                variant="filled"
              ></NavLink>
            );
          })}
        </Tabs>
      </Container>
      <Menu closeOnClickOutside={false}>
        <Menu.Target>
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        </Menu.Target>
        <Menu.Dropdown>
          {KEY_PAGES.map((tab, index) => {
            return (
              <NavLink
                classNames={{
                  root: styles.linksMenu,
                  label: styles.linksLabel,
                }}
                href={Paths[index]}
                key={tab}
                active={index === active}
                label={<Menu.Item>{tab}</Menu.Item>}
                onClick={() => setActive(index)}
                color="lime"
                variant="filled"
              ></NavLink>
            );
          })}
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
