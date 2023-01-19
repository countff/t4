module.exports = function (eleventyConfig) {

  // Folders to copy to output folder
  eleventyConfig.addPassthroughCopy("css");
  return {
    pathPrefix: "t4"/*,
    dir: {
      input: "src",
      output: "www",
    }*/
  };

};
