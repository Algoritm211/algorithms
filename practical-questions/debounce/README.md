# Debounce

**Debounce** let us union multiple events in a single one within t seconds. it is often asked interview question

To compile `implementation.ts` run `tsc implementation.ts --outFile index.js`

To put it in simple terms:

- **Throttling** will delay executing a function. It will reduce the notifications of an event that fires multiple times.
- **Debouncing** will bunch a series of sequential calls to a function into a single call to that function. It ensures that one notification is made for an event that fires multiple times.
