type Options = {
  bridge: string;
  userName: string;
};

export function createAPI(options: Options) {
  return {
    options,
  };
}
