module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login", // Change to your desired default page
        permanent: false, // Use false for temporary redirects (307)
      },
    ];
  },
};
