import { useEffect, useState } from 'react';
import { UserRateType } from '@/types';

export const useUserRate = () => {
  const [userRate, setUserRate] = useState<UserRateType>(0);
  const [userHoverRate, setUserHoverRate] = useState<UserRateType>(0);

  const isActiveFirstStar =
    userRate === 1 ||
    userRate === 2 ||
    userRate === 3 ||
    userRate === 4 ||
    userRate === 5 ||
    userHoverRate === 1 ||
    userHoverRate === 2 ||
    userHoverRate === 3 ||
    userHoverRate === 4 ||
    userHoverRate === 5;
  const isActiveSecondStar =
    userRate === 2 ||
    userRate === 3 ||
    userRate === 4 ||
    userRate === 5 ||
    userHoverRate === 2 ||
    userHoverRate === 3 ||
    userHoverRate === 4 ||
    userHoverRate === 5;
  const isActiveThirdStar =
    userRate === 3 ||
    userRate === 4 ||
    userRate === 5 ||
    userHoverRate === 3 ||
    userHoverRate === 4 ||
    userHoverRate === 5;
  const isActiveFourthStar =
    userRate === 4 ||
    userRate === 5 ||
    userHoverRate === 4 ||
    userHoverRate === 5;
  const isActiveFifthStar = userRate === 5 || userHoverRate === 5;

  const isActiveStars = [
    isActiveFirstStar,
    isActiveSecondStar,
    isActiveThirdStar,
    isActiveFourthStar,
    isActiveFifthStar,
  ];

  const onClickStar = (rate: UserRateType) => {
    setUserRate(rate);
  };

  const onHoverStar = (rate: UserRateType) => {
    setUserHoverRate(rate);
  };

  useEffect(() => {
    setUserHoverRate(userRate);
  }, [userRate]);

  return {
    isActiveStars,
    onClickStar,
    onHoverStar,
  };
};

export default useUserRate;
