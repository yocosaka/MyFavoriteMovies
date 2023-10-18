import React from 'react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/base/Button';
import { UserIcon } from '@/components/base/UserIcon';
import { UserProfileEditModal } from '@/components/modals/UserProfileEditModal';
import { useUserProfilePageContext } from '@/store/UserProfilePageContext';
import styles from './ProfileOverview.module.scss';
import { SocialLinks } from '../SocialLinks';

export const ProfileOverview = () => {
  const { user, isEditModalOpen, openEditModal } = useUserProfilePageContext();
  const { data: session } = useSession();

  return (
    <>
      <div className={styles.overview}>
        <div className={styles.left}>
          <div className={styles.imageWrapper}>
            <UserIcon
              userName={user?.name || ''}
              imageSrc={user?.image || ''}
              size="md"
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.name}>{user?.name}</div>
          {!!user?.bio && <div className={styles.bio}>{user.bio}</div>}
          {!!user && <SocialLinks user={user} />}
          {!!session && !!session.user && (
            <div>
              <Button
                variant={'simpleOutlined'}
                label={'Edit Profile'}
                className={styles.editBtn}
                onClick={() => openEditModal()}
              />
            </div>
          )}
        </div>
      </div>
      {isEditModalOpen && <UserProfileEditModal />}
    </>
  );
};

export default ProfileOverview;
