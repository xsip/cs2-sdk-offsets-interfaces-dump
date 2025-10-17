#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeHingeLimit_t {
    uint16_t nNode[6];
    uint32_t nFlags;
    float32 flWeight4;
    float32 flWeight5;
    float32 flAngleCenter;
    float32 flAngleExtents;
};
