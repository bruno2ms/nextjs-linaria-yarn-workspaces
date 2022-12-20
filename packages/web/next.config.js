/** @type {import('next').NextConfig} */
const { ANALYZE } = process.env;

const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["../utils"]);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: ANALYZE === "true",
});
const withLinaria = require("next-linaria")({});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPlugins([withBundleAnalyzer, withTM], nextConfig);
