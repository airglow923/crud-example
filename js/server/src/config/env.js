const resolveEnvPath = (mode) => {
  switch (mode) {
    case 'development':
      return '.env.development';
    case 'production':
      return '.env.production';
    case 'ci':
      return '../../.env.ci';
    default:
      return new Error(`Invalid Node mode ${mode}`);
  }
};

export default resolveEnvPath(process.env.NODE_ENV);
