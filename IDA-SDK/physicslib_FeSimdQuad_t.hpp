#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeSimdQuad_t {
    uint16_t nNode[4];
    char pad_2443[0x20];
    fltx4 f4Slack;
    FourVectors vShape[4];
    fltx4 f4Weights[4];
};
