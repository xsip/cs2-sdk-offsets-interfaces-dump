#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class hudtextparms_t {
    Color color1;
    Color color2;
    uint8_t effect;
    uint8_t channel;
    char pad_1103[0x2];
    float32 x;
    float32 y;
};
