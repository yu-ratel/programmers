#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

int main() {
    char* message = "happy birthday!";
    int answer = 0;
    printf("%s", message);
    answer = strlen(message) * 2;
    return answer;
}
