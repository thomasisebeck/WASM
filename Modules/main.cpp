#include <iostream>
using namespace std;

//generate: emcc main.cpp
//run: node a.out.js

int factorial(int n) {
    if (n == 0)
        return 1;

    return n * factorial(n - 1);
}

int main() {
    cout << factorial(5) << endl;
    return 0;
}
