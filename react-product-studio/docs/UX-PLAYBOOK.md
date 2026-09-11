# UX playbook

## The product experience

This is an operations tool, not a marketing page. The team needs to scan conversations, understand system state, and intervene confidently. Use a quiet information hierarchy with one strong action at a time.

## Design decisions

- **Hierarchy:** eyebrow for context, large editorial heading for the current concept, compact labels for system data.
- **Color roles:** deep blue is the working surface, lime means action or healthy completion, coral marks emphasis or risk, muted blue-gray carries secondary information.
- **Measurements:** content columns use a readable max width; cards use internal padding that protects text; mobile collapses columns instead of shrinking type until it becomes unusable.
- **Feedback:** every interactive checklist action gets a visible status change and a temporary status message.
- **Recovery:** empty states are designed as part of the product, not as an exception hidden in code.
- **Accessibility:** use semantic landmarks, real buttons for actions, visible focus, labels for controls, and `aria-live` for updates that would otherwise be invisible.

## UX audit checklist

- Can a new operator tell what is happening within ten seconds?
- Does every dangerous action explain what will happen before it happens?
- Can the user recover from a failed tool call?
- Are loading, empty, error, and success states distinguishable?
- Can the primary workflow be completed with a keyboard?
- Does the layout remain useful at 320px wide?
- Does color reinforce meaning without being the only signal?
- Are dates shown in a resolved, unambiguous format?

## React connection

A component is not automatically good UX. A component is good when its boundary protects a user-facing decision. Split components around responsibility: navigation, lesson state, data list, feedback, and documents. Avoid extracting tiny wrappers that make the product story harder to follow.
