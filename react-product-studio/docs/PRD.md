# Product Requirements Document

## Product

WhatsApp AI Agent for a service business.

## Problem

Customers ask repetitive questions about services, prices, hours, policies, and availability. Team members lose time answering predictable questions, while customers wait for a response. A useful assistant should reduce repetitive work without inventing facts or making an unconfirmed booking.

## Users

- **Customer:** sends a WhatsApp message, wants a fast and trustworthy answer, and may request an appointment.
- **Business team:** owns the source of truth, receives uncertain cases, and needs visibility into what the agent did.
- **Operator/developer:** configures knowledge, tools, policies, logs, and security.

## Core journey

1. Customer sends a message.
2. The system identifies the phone number and loads a capped recent history.
3. The model receives the business knowledge, recent turns, and available tools.
4. The agent answers from the approved information or says it will check with the team.
5. If availability is needed, the agent reads from Cal.com.
6. A booking write requires a clear customer confirmation and an idempotency key.
7. The system logs the turn, tool decision, result, and response.

## In scope

- Incoming WhatsApp messages through a verified webhook.
- Free-form replies inside the 24-hour customer-service window.
- Approved templates outside that window.
- OpenRouter model gateway with a provider-swappable model string.
- Phone-number conversation identity and capped memory.
- Business knowledge and explicit refusal boundaries.
- Availability lookup and guarded booking flow.
- Adversarial tests and production-shaped observability.

## Out of scope for the first release

- Autonomous refunds, payments, or cancellations.
- Medical, legal, or financial advice.
- Unapproved outbound campaigns.
- Letting the model resolve dates, permissions, or duplicate writes by itself.

## Success measures

- More repetitive questions resolved without team intervention.
- Zero unconfirmed booking writes in test and production logs.
- Every unsupported question produces controlled uncertainty.
- A failed tool call produces a useful recovery message.

## Non-negotiable boundary

If the answer is not in the approved business information, the agent says it will check with the team. It must not guess.
