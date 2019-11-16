export const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      // wrap everything that isn't an object(like number or string) inside its own element
      // and create a special type for them: TEXT_ELEMENT
      children: children.map(child =>
        typeof child === "object" ? child : createTextElement(child)
      )
    }
  };
};

export const createTextElement = text => {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
};
