const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require('eleventy-plugin-toc');

module.exports = function (eleventyConfig) {

  // Markdown

  eleventyConfig.setLibrary(
    'md',
    markdownIt({ html: true }).use(markdownItAnchor)
  );
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3', 'h4'],
    ul: true
  })

  // Pass Through Copy

  eleventyConfig.addPassthroughCopy("_src/css/min");
  //eleventyConfig.addPassthroughCopy("_src/js");
  eleventyConfig.addPassthroughCopy("_src/img");

  // Returns

  return {
    dir: {
      input: "_src",
      includes: "templates",
      data: "data",
      output: "docs"
    },
    pathPrefix: "/baselayer-3/"
  };
};