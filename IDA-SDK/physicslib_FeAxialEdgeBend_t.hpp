#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeAxialEdgeBend_t {
    float32 te;
    float32 tv;
    float32 flDist;
    float32 flWeight[4];
    uint16_t nNode[6];
};
