module.exports = {
  output: "standalone",
  compiler: {
    removeConsole: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "b-cube.kr",
        port: "",
        pathname: "/imgs/**",
      },
    ],
  },
};
//허용하는 이미지 경로 설정
