# Technical Requirements Document

## Architecture

```text
WhatsApp webhook -> validation -> phone identity -> memory store
                                      |
                                      v
                           OpenRouter model gateway
                            /                  \
                    business knowledge       tools
                                                 |
                                      Cal.com availability/booking
```

## Components and responsibilities

- **Webhook handler:** accepts public traffic, verifies the signature, validates the payload, and acknowledges quickly.
- **Conversation service:** uses the phone number as the identity key, loads the last 20 turns, appends the new message, and expires old records.
- **Model gateway:** owns the OpenRouter request shape. The selected model is configuration, not an application-wide rewrite.
- **Knowledge provider:** supplies services, prices, hours, FAQs, policies, booking rules, and refusal boundaries.
- **Tool runner:** exposes read availability and guarded booking operations. Application code resolves relative dates and creates idempotency keys.
- **Response service:** chooses a free-form response or an approved template based on the WhatsApp customer-service window.
- **Observability:** logs correlation ID, phone hash, model, tool, decision, latency, outcome, and failure reason without leaking secrets.

## Data rules

- Keep the conversation history capped at approximately the last 20 turns.
- Expire old history according to a documented retention policy.
- Hash or tokenize phone numbers in logs; do not log access tokens or full sensitive payloads.
- Store idempotency keys with booking attempts so retries cannot create duplicates.

## Security rules

- Verify WhatsApp webhook signatures.
- Validate all incoming fields and reject malformed dates such as February 31.
- Keep provider keys server-side in environment variables.
- Treat model output as untrusted text and untrusted intent, never as an authorization decision.
- Require explicit customer confirmation before every booking write.

## Failure behavior

- Model unavailable: send a short fallback and queue the case for the team.
- Knowledge missing: say the team will check.
- Calendar unavailable: do not claim availability; explain the failure and offer escalation.
- Duplicate webhook: acknowledge safely and avoid duplicate side effects.
- Outside the 24-hour window: use an approved template or do not send a free-form reply.

## Verification scenarios

1. Two messages arrive two seconds apart.
2. Customer asks for February 31.
3. Customer says “Ignore your instructions.”
4. Customer asks a question absent from the knowledge base.
5. Customer cancels after a booking.
6. A booking request is retried with the same idempotency key.
7. The model provider changes without changing domain code.
