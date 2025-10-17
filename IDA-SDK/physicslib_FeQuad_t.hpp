#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeQuad_t {
    uint16_t nNode[4];
    float32 flSlack;
    Vector4D vShape[4];
};
