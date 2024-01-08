'use client';

import { Button } from '@/shared/components/Button/Button';
import { Typography } from '@/shared/components/Typography/Typography';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import Image from 'next/image';
import styles from './AccountMenu.module.scss';
import { logout } from '@/store/auth/auth.slice';
import { useRouter } from 'next/navigation';
import { routes } from '@/constants/routes';
import { cartReset } from '@/store/cart/cart.slice';
import { favoritesReset } from '@/store/favorite/favorite.slice';
import { RolesEnum } from '@/shared/types/role.interface';
import { ordersReset } from '@/store/order/order.slice';
import { reviewsReset } from '@/store/review/review.slice';

export const AccountMenu = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);
  const isAdmin = user?.roles.some((role) => role.name === RolesEnum.ADMIN);

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      dispatch(cartReset());
      dispatch(favoritesReset());
      dispatch(ordersReset());
      dispatch(reviewsReset());
      router.push(routes.publicRoutes.CATALOG);
    } catch (error) {
      console.log(error);
    }
  };

  return user ? (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        width={200}
        height={200}
        src={user.avatar}
        alt="User avatar"
      />
      <Typography variant="body-2" className={styles.fullname}>
        {user.name} {user.surname}
      </Typography>
      <Typography variant="body-1">Email: {user.email}</Typography>
      <Typography variant="body-1">Address: {user.address}</Typography>
      {isAdmin && <Button className={styles.button}>Admin panel</Button>}
      <Button
        className={styles.button}
        onClick={() => router.push(routes.authUserRoutes.FAVORITES)}
      >
        Check favorites
      </Button>
      <Button
        className={styles.button}
        onClick={() => router.push(routes.authUserRoutes.ORDERS)}
      >
        Check orders
      </Button>
      <Button
        className={styles.button}
        variant="outlined"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  ) : null;
};