#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeHingeLimitBuild_t {
    uint16_t nNode[6];
    uint32_t nFlags;
    float32 flLimitCW;
    float32 flLimitCCW;
};
