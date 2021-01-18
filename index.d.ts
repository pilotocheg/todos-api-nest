// import { NoInferType } from '@nestjs/config';

// interface IEnvConfig {
//   DB_URL: string;
// }

// type ValueOf<T> = T[keyof T];

// declare namespace '@nestjs/config' {
//   declare class ConfigService<K = IEnvConfig> {
//     get<T extends ValueOf<K> = ValueOf<K>>(propertyPath: keyof K): T;
//     get<T extends ValueOf<K> = ValueOf<K>>(
//       propertyPath: keyof K,
//       defaultValue: NoInferType<T>,
//     ): T;
//   }
// }
