declare var AG_onLoad: (func: () => void) => void;
declare var AG_removeElementById: (id: string) => void;
declare var AG_removeElementBySelector: (selector: string) => void;
declare var AG_each: (
  selector: string,
  fn: (el: NodeListOf<Element>) => void
) => void;
declare var AG_removeParent: (el: Node, fn: (el: Node) => boolean) => void;
declare var AG_removeCookie: (a: string) => void;
declare var AG_defineProperty: (a: PropertyKey, b: object, d?: object) => void;
declare var AG_abortOnPropertyWrite: (a: string, b: boolean) => void;
declare var AG_abortOnPropertyRead: (a: string, b: boolean) => void;
declare var AG_abortInlineScript: (g: RegExp, b: string, c: boolean) => void;
declare var AG_setConstant: (e: PropertyKey, a: any) => void;
