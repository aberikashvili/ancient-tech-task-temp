import { UserModel } from '@app/models/user.model';

export interface UserStateModel {
  isLoading: boolean;
  user: UserModel;
  error: string | null;
}
