# Memo

Memo function we need for the caching results of functions which require a lot of computation.
We just save function arguments and result and if the function invokes the same arguments -
we don't use computation and take results from the cache.
