#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeStiffHingeBuild_t {
    float32 flMaxAngle;
    float32 flStrength;
    float32 flMotionBias[3];
    uint16_t nNode[3];
    char end_pad_2448[0x2];
};
