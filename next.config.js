/** @type {import('next').NextConfig} */
module.exports = () => {
  return {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      styledComponents: true
    },
    images: {
      domains: ["files.stripe.com"]
    }
  }
}