'use client';

import { FC } from 'react';
import { routes } from '@/constants/routes';
import { Button } from '../Button/Button';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import { useRouter } from 'next/navigation';
import { createCartItem } from '@/store/cart/cart.slice';

interface BuyButtonProps {
  className?: string;
  productId: number;
}

export const BuyButton: FC<BuyButtonProps> = ({ className, productId }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { cartItems } = useAppSelector((state) => state.cart);

  const handleAddInCart = async () => {
    if (user) {
      try {
        await dispatch(createCartItem(productId));
      } catch (error) {
        console.log(error);
      }
    } else {
      router.push(routes.AUTH);
    }
  };

  return cartItems.some((item) => item.productId === productId) ? (
    <Button
      className={className}
      onClick={() => router.push(routes.authUserRoutes.CART)}
      variant="outlined"
    >
      In the cart
    </Button>
  ) : (
    <Button className={className} onClick={handleAddInCart}>
      Buy
    </Button>
  );
};