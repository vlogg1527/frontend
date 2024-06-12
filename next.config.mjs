import withTM from 'next-transpile-modules';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const transpileModules = withTM(['@ant-design/icons', 'rc-util']);

export default transpileModules(nextConfig);
