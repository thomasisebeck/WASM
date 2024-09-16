/*uncomment to compile*/
// #include <emscripten.h>

extern "C" {
/*uncomment to compile*/
// EMSCRIPTEN_KEEPALIVE
int adder(int a, int b) {
    return a + b;
}
}
