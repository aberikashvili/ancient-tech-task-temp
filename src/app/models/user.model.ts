import { WalletModel } from './wallet.model';

export interface UserModel {
  id: string;
  name: string;
  wallets: WalletModel[];
}
