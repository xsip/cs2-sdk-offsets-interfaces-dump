#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_hudtextparms_t {
    Color color1;
    Color color2;
    uint8_t effect;
    uint8_t channel;
    char pad_3654[0x2];
    float32 x;
    float32 y;
};
