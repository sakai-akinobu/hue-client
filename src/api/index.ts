import Users from './users';
import Lights from './user/lights';

type Options = {
  bridge: string;
  userName?: string;
};

export function createAPI(options: Options) {
  const users = new Users(options);
  const lights = new Lights(options);

  return {
    users,
    lights,
    options,
  };
}
