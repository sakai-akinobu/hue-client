import Lights from './user/lights';

type Options = {
  bridge: string;
  userName?: string;
};

export function createAPI(options: Options) {
  const lights = new Lights(options);

  return {
    lights,
    options,
  };
}
