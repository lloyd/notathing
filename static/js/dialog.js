var chan = Channel.build({
  debugOutput: true,
  window: window.parent,
  origin: "*",
  scope: "blogchat",
  onReady: function() {
  }
});

chan.bind("comments", function(trans, params) {
  // XXX: write me
  return { foo: "bar", baz: "bing" };
});
