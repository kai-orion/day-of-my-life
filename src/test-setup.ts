/**
 * jsdom does not implement the form-associated custom element or Web Animations
 * parts of the platform that the `@sandlada/mdc` web components build on. Real
 * browsers implement all of them, so these stubs only exist to keep the
 * unit-test DOM able to upgrade the components. They must stay no-ops: the
 * specs assert on rendered output and events, never on platform callbacks.
 */

const elementPrototype = Element.prototype as unknown as {
  animate?: (keyframes: unknown, options?: unknown) => unknown;
};

if (typeof elementPrototype.animate !== 'function') {
  elementPrototype.animate = () => ({
    cancel: () => undefined,
    finish: () => undefined,
    finished: Promise.resolve(undefined),
    playState: 'finished',
    startTime: 0,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
  });
}

const internalsPrototype = ElementInternals.prototype as unknown as Record<string, unknown>;

for (const method of ['setFormValue', 'setValidity', 'reportValidity', 'checkValidity']) {
  if (typeof internalsPrototype[method] !== 'function') {
    internalsPrototype[method] = () => undefined;
  }
}
