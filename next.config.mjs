import withOptimizedImages from 'next-export-optimize-images';

const nextConfig = withOptimizedImages({
  basePath: 'React_todo_lis',
  assetPrefix: 'React_todo_lis',
  output: 'export'
});

export default nextConfig;