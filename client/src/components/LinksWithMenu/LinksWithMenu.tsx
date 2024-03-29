'use client';

import Link from 'next/link';
import { routes } from '@/shared/constants/routes';
import { ProfileIcon } from '@/shared/assets/icons/ProfileIcon/ProfileIcon';
import { AuthIcon } from '@/shared/assets/icons/AuthIcon/AuthIcon';
import styles from './LinksWithMenu.module.scss';
import { CartIcon } from '@/shared/assets/icons/CartIcon/CartIcon';
import { useAppSelector } from '@/store/hooks/hooks';
import { FC } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { INavLink } from '@/shared/types/link.interface';
// import { LoadingStatesEnum } from '@/store/store.types';
// import ContentLoader from 'react-content-loader';

interface LinksWithMenuProps {
  navLinks: INavLink[];
}

export const LinksWithMenu: FC<LinksWithMenuProps> = ({ navLinks }) => {
  const {
    user,
    // loading
  } = useAppSelector((state) => state.auth);

  // if (loading === LoadingStatesEnum.LOADING) {
  //   return (
  //     <ContentLoader width="84px" height="32px">
  //       <rect width="32px" height="32px" rx="5px" ry="5px" />
  //       <rect width="32px" height="32px" rx="5px" ry="5px" x="52px" />
  //     </ContentLoader>
  //   );
  // }

  return (
    <>
      <div className={styles.link_buttons}>
        {user ? (
          <>
            <Link
              className={styles.link_button}
              href={routes.authUserRoutes.CART}
            >
              <CartIcon className={styles.icon} />
            </Link>

            <Link
              className={styles.link_button}
              href={routes.authUserRoutes.PROFILE}
            >
              <ProfileIcon className={styles.icon} />
            </Link>
          </>
        ) : (
          <Link className={styles.link_button} href={routes.AUTH}>
            <AuthIcon className={styles.icon} />
          </Link>
        )}
      </div>
      <BurgerMenu navLinks={navLinks} />
    </>
  );
};
