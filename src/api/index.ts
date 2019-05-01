import Users from './users';
import Lights from './user/lights';
import Scenes from './user/scenes';

type Options = {
  bridge: string;
  userName?: string;
};

export function createAPI(options: Options) {
  const users = new Users(options);
  const lights = new Lights(options);
  const scenes = new Scenes(options);

  return {
    users,
    lights,
    scenes,
    options,
  };
}
