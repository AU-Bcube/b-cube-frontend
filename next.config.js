module.exports = {
  // output: 'export',
  compiler: {
    removeConsole: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'b-cube-web.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/b-cube-web/**',
      },
    ],
  },
}
//허용하는 이미지 경로 설정