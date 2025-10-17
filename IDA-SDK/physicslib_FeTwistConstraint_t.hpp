#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeTwistConstraint_t {
    uint16_t nNodeOrient;
    uint16_t nNodeEnd;
    float32 flTwistRelax;
    float32 flSwingRelax;
};
