var AG_replaceText = function (pattern: string, value: string, flag = "gi") {
  function walkThrough(node: Node | HTMLElement) {
    var child: ChildNode, next: ChildNode;
    switch (node.nodeType) {
      case 1: //Element
      case 9: //Document
      case 11: //Document fragment
        child = node.firstChild;
        while (child) {
          next = child.nextSibling;
          walkThrough(child);
          child = next;
        }
        break;
      case 3: //Text node
        var regx: string | RegExp,
          text = node.nodeValue;
        regx = new RegExp(pattern, flag);
        if (text.match(regx)) {
          text = text.replace(regx, value);
        }
        node.nodeValue = text;
        break;
    }
  }
  AG_onLoad(() => {
    walkThrough(document.body);
  });
};
