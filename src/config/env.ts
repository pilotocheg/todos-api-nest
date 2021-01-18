import { ValueOf } from 'src/utils/types';

interface IConfig {
  DB_URL: string;
}

const getEnv = (name: keyof IConfig) => process.env[name] as ValueOf<IConfig>;

export const ENV: IConfig = {
  DB_URL: getEnv('DB_URL'),
};
