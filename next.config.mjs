import withOptimizedImages from 'next-export-optimize-images';

const nextConfig = withOptimizedImages({
  basePath: '/your-repository-name',
  assetPrefix: '/your-repository-name/',
  output: 'export'
});

export default nextConfig;