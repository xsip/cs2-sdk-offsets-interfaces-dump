#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeTri_t {
    uint16_t nNode[3];
    char pad_2449[0x2];
    float32 w1;
    float32 w2;
    float32 v1x;
    Vector2D v2;
};
