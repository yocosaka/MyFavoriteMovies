import React from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getServerSession } from 'next-auth';
import { LoadingSpinner } from '@/components/base/loading/LoadingSpinner';
import { authOptions } from '@/lib/nextAuth';
import { UserListPageContextProvider } from '@/store/UserListPageContext';
import { shapeData } from '@/utils';
import { getLayoutFn } from '@/utils/getLayoutFn';
import { logger } from '@/utils/logger';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session || !session.user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: shapeData(session.user),
      userMovies: shapeData(session.user.userMovies),
    },
  };
}

const MyListPage = ({
  user,
  userMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!user || !userMovies) {
    return <LoadingSpinner />;
  }

  logger.log({ user, userMovies });
  return (
    <UserListPageContextProvider>
      <div>asjalsja</div>
    </UserListPageContextProvider>
  );
};

export default MyListPage;

MyListPage.getLayout = getLayoutFn('page');
