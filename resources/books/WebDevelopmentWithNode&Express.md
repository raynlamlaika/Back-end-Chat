
# questions
```
what is the node and express? what is the deffrent?
how is node is single thread?
```




### Nodejs Arch
```
                    NODE.JS PROCESS
                           │
          ┌────────────────┴────────────────┐
          │                                 │
     Main Thread                         Other Threads
          │                                 │
       ┌──▼───┐                    ┌────────▼────────┐
       │  V8  │                    │  libuv workers  │
       │  JS  │                    │  thread pool    │
       └──┬───┘                    └─────────────────┘
          │
    Event Loop
          │
          ├──── Network I/O ───────► OS
          │
          └──── Filesystem/crypto ─► thread pool
```

### into express